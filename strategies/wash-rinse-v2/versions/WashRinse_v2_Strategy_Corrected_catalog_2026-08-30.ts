# Wash & Rinse v2 STRATEGY — corrected audit version
# Entries are requested on the rinse bar and priced at next bar open.
# Stops are locked when a flat entry is accepted. OHLC exits use a documented
# stop-first convention when both stop and target are touched on one bar.

declare upper;

input levelMode = {default Swing, PrevDay};
input pivotStrength = 5;
input maxRinseBars = 0;
input stopOffsetTicks = 1;
input rMult = 2.0;
input tradeSize = 100;
input useSession = yes;
input startTradingTime = 935; # eligibility time of the rinse/signal bar
input stopTradingTime = 1530;
input flattenTime = 1555;     # must align to a chart-bar open for exact timing
input allowLongs = yes;
input allowShorts = yes;
input alertsOn = yes;

Assert(pivotStrength >= 1, "pivotStrength must be at least 1");
Assert(maxRinseBars >= 0, "maxRinseBars cannot be negative");
Assert(stopOffsetTicks >= 0, "stopOffsetTicks cannot be negative");
Assert(rMult > 0, "rMult must be greater than zero");
Assert(tradeSize > 0, "tradeSize must be greater than zero");
Assert(!useSession or GetAggregationPeriod() < AggregationPeriod.DAY,
       "Session controls require an intraday time chart");

def isPH = high[pivotStrength] == Highest(high, 2 * pivotStrength + 1);
def isPL = low[pivotStrength]  == Lowest(low,  2 * pivotStrength + 1);
def lastPH = CompoundValue(1,
    if isPH then high[pivotStrength] else lastPH[1],
    Double.NaN);
def lastPL = CompoundValue(1,
    if isPL then low[pivotStrength] else lastPL[1],
    Double.NaN);

# Reconstruct completed periods from primary bars, with no secondary
# aggregation. PrevDay means the prior session on intraday/daily charts and
# the prior primary bar/period on weekly or monthly charts.
def newPeriod = GetYYYYMMDD() != GetYYYYMMDD()[1];
def runningPeriodHigh = CompoundValue(1,
    if newPeriod then high else Max(high, runningPeriodHigh[1]), high);
def runningPeriodLow = CompoundValue(1,
    if newPeriod then low else Min(low, runningPeriodLow[1]), low);
def priorPeriodHigh = CompoundValue(1,
    if newPeriod then runningPeriodHigh[1] else priorPeriodHigh[1],
    Double.NaN);
def priorPeriodLow = CompoundValue(1,
    if newPeriod then runningPeriodLow[1] else priorPeriodLow[1],
    Double.NaN);
def refH = if levelMode == levelMode.PrevDay then priorPeriodHigh else lastPH;
def refL = if levelMode == levelMode.PrevDay then priorPeriodLow  else lastPL;

def lvlH = CompoundValue(1,
    if IsNaN(lvlH[1]) then
        if !IsNaN(refH) and close > refH and close[1] <= refH
        then refH
        else Double.NaN
    else if close < lvlH[1] then Double.NaN
    else lvlH[1],
    Double.NaN);

def lvlL = CompoundValue(1,
    if IsNaN(lvlL[1]) then
        if !IsNaN(refL) and close < refL and close[1] >= refL
        then refL
        else Double.NaN
    else if close > lvlL[1] then Double.NaN
    else lvlL[1],
    Double.NaN);

def armedH = !IsNaN(lvlH) and IsNaN(lvlH[1]);
def armedL = !IsNaN(lvlL) and IsNaN(lvlL[1]);
def rawBearRinse = !IsNaN(lvlH[1]) and close < lvlH[1];
def rawBullRinse = !IsNaN(lvlL[1]) and close > lvlL[1];

def ageH = CompoundValue(1,
    if !IsNaN(lvlH) then if armedH then 1 else ageH[1] + 1 else 0,
    0);
def ageL = CompoundValue(1,
    if !IsNaN(lvlL) then if armedL then 1 else ageL[1] + 1 else 0,
    0);

# The rinse bar is part of the wash episode for stop-extreme purposes.
def extH = CompoundValue(1,
    if armedH then high
    else if !IsNaN(lvlH) then Max(extH[1], high)
    else if rawBearRinse then Max(extH[1], high)
    else Double.NaN,
    Double.NaN);
def extL = CompoundValue(1,
    if armedL then low
    else if !IsNaN(lvlL) then Min(extL[1], low)
    else if rawBullRinse then Min(extL[1], low)
    else Double.NaN,
    Double.NaN);

def bearWR = rawBearRinse and
    (maxRinseBars == 0 or ageH[1] <= maxRinseBars);
def bullWR = rawBullRinse and
    (maxRinseBars == 0 or ageL[1] <= maxRinseBars);

# Session functions are Eastern-time and return zero at daily-or-higher
# aggregation. The assertion above prevents that silent failure mode.
def inWindow = !useSession or
    (SecondsFromTime(startTradingTime) >= 0 and
     SecondsTillTime(stopTradingTime) > 0);
def barSeconds = GetAggregationPeriod() / 1000;
def flattenAtNextOpen = useSession and
    SecondsTillTime(flattenTime) > 0 and
    SecondsTillTime(flattenTime) <= barSeconds;

def ep = EntryPrice();
def inTrade = !IsNaN(ep) and ep != 0;

# Suppress simultaneous opposite signals and block pyramiding/reversals while
# a strategy position is active.
def enterLong = allowLongs and bullWR and !bearWR and inWindow and !inTrade;
def enterShort = allowShorts and bearWR and !bullWR and inWindow and !inTrade;

def tradeDir = CompoundValue(1,
    if enterLong then 1
    else if enterShort then -1
    else tradeDir[1],
    0);

# extL/extH already include the rinse bar. Stops update only for accepted flat
# entries, so later signals cannot mutate risk while a position is open.
def longStop = CompoundValue(1,
    if enterLong then extL - stopOffsetTicks * TickSize()
    else longStop[1],
    Double.NaN);
def shortStop = CompoundValue(1,
    if enterShort then extH + stopOffsetTicks * TickSize()
    else shortStop[1],
    Double.NaN);

def activeLong = inTrade and tradeDir == 1;
def activeShort = inTrade and tradeDir == -1;
def longTarget = ep + rMult * (ep - longStop);
def shortTarget = ep - rMult * (shortStop - ep);

# OHLC ambiguity policy: stop first. Gap-through stops receive the worse bar
# open; favorable target gaps receive the better bar open. This remains a
# bar-data approximation, not simulation of native resting broker orders.
def longStopHit = activeLong and low <= longStop;
def longTargetHit = activeLong and !longStopHit and high >= longTarget;
def shortStopHit = activeShort and high >= shortStop;
def shortTargetHit = activeShort and !shortStopHit and low <= shortTarget;
def longEODExit =
    activeLong and !longStopHit and !longTargetHit and flattenAtNextOpen;
def shortEODExit =
    activeShort and !shortStopHit and !shortTargetHit and flattenAtNextOpen;

def longStopFill = if open < longStop then open else longStop;
def shortStopFill = if open > shortStop then open else shortStop;
def longTargetFill = if open > longTarget then open else longTarget;
def shortTargetFill = if open < shortTarget then open else shortTarget;

AddOrder(OrderType.BUY_TO_OPEN,
         enterLong, open[-1], tradeSize,
         Color.GREEN, Color.GREEN, "WR Long");
AddOrder(OrderType.SELL_TO_OPEN,
         enterShort, open[-1], tradeSize,
         Color.MAGENTA, Color.MAGENTA, "WR Short");

AddOrder(OrderType.SELL_TO_CLOSE,
         longStopHit, longStopFill, tradeSize,
         Color.RED, Color.RED, "L Stop");
AddOrder(OrderType.SELL_TO_CLOSE,
         longTargetHit, longTargetFill, tradeSize,
         Color.CYAN, Color.CYAN, "L Target");
AddOrder(OrderType.SELL_TO_CLOSE,
         longEODExit,
         open[-1], tradeSize,
         Color.GRAY, Color.GRAY, "L EOD");

AddOrder(OrderType.BUY_TO_CLOSE,
         shortStopHit, shortStopFill, tradeSize,
         Color.RED, Color.RED, "S Stop");
AddOrder(OrderType.BUY_TO_CLOSE,
         shortTargetHit, shortTargetFill, tradeSize,
         Color.CYAN, Color.CYAN, "S Target");
AddOrder(OrderType.BUY_TO_CLOSE,
         shortEODExit,
         open[-1], tradeSize,
         Color.GRAY, Color.GRAY, "S EOD");

# Entry alerts fire on the rinse/signal bar. The strategy order remains priced
# at the next bar open, matching the AddOrder convention above.
Alert(
    alertsOn and enterLong,
    "Wash & Rinse strategy: LONG signal; simulated entry next bar open",
    Alert.BAR,
    Sound.Ring
);
Alert(
    alertsOn and enterShort,
    "Wash & Rinse strategy: SHORT signal; simulated entry next bar open",
    Alert.BAR,
    Sound.Ring
);
Alert(alertsOn and longStopHit, "Wash & Rinse: LONG stop hit", Alert.BAR, Sound.Bell);
Alert(alertsOn and longTargetHit, "Wash & Rinse: LONG target hit", Alert.BAR, Sound.Chimes);
Alert(alertsOn and shortStopHit, "Wash & Rinse: SHORT stop hit", Alert.BAR, Sound.Bell);
Alert(alertsOn and shortTargetHit, "Wash & Rinse: SHORT target hit", Alert.BAR, Sound.Chimes);
Alert(alertsOn and longEODExit, "Wash & Rinse: LONG end-of-day exit", Alert.BAR, Sound.Ding);
Alert(alertsOn and shortEODExit, "Wash & Rinse: SHORT end-of-day exit", Alert.BAR, Sound.Ding);
