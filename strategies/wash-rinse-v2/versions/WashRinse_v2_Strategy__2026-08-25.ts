# ============================================================
# Wash & Rinse v2 STRATEGY — backtestable, sourced rules
# Entry: next bar open after the rinse close (market variant;
#   her taught limit-retest entry noted below as alternative)
# Stop: beyond the WASH EXTREME + offset (pattern-defined risk;
#   maps to ALOM "Previous HH/LL + offset" method)
# Target: R-multiple of stop distance (ALOM 1:3 example; default
#   2.0 here — UNCONFIRMED, sweep it)
# Intraday session controls included for SPY scalping tests.
# ============================================================

input levelMode = {default Swing, PrevDay};
input pivotStrength = 5;
input stopOffsetTicks = 1;
input rMult = 2.0;               # target = R x stop distance (UNCONFIRMED)
input tradeSize = 100;
input useSession = yes;          # no = swing mode (no time exits)
input startTradingTime = 935;
input stopTradingTime = 1530;
input flattenTime = 1555;
input allowLongs = yes;
input allowShorts = yes;

def isPH = high[pivotStrength] == Highest(high, 2 * pivotStrength + 1);
def isPL = low[pivotStrength]  == Lowest(low,  2 * pivotStrength + 1);
def lastPH = CompoundValue(1, if isPH then high[pivotStrength] else lastPH[1], high);
def lastPL = CompoundValue(1, if isPL then low[pivotStrength]  else lastPL[1], low);
def refH = if levelMode == levelMode.PrevDay then high(period = AggregationPeriod.DAY)[1] else lastPH;
def refL = if levelMode == levelMode.PrevDay then low(period = AggregationPeriod.DAY)[1]  else lastPL;

def lvlH = CompoundValue(1,
    if lvlH[1] == 0 then (if close > refH and close[1] <= refH then refH else 0)
    else if close < lvlH[1] then 0
    else lvlH[1], 0);
def extH = CompoundValue(1,
    if lvlH > 0 and lvlH[1] == 0 then high
    else if lvlH > 0 then Max(extH[1], high)
    else extH[1], high);

def lvlL = CompoundValue(1,
    if lvlL[1] == 0 then (if close < refL and close[1] >= refL then refL else 0)
    else if close > lvlL[1] then 0
    else lvlL[1], 0);
def extL = CompoundValue(1,
    if lvlL > 0 and lvlL[1] == 0 then low
    else if lvlL > 0 then Min(extL[1], low)
    else extL[1], low);

def bearWR = lvlH[1] > 0 and close < lvlH[1];
def bullWR = lvlL[1] > 0 and close > lvlL[1];

def inWindow = !useSession or (SecondsFromTime(startTradingTime) >= 0 and SecondsTillTime(stopTradingTime) > 0);
def mustFlatten = useSession and SecondsTillTime(flattenTime) <= 0;

def ep = EntryPrice();
def longStopLvl  = extL[1] - stopOffsetTicks * TickSize();   # below wash extreme
def shortStopLvl = extH[1] + stopOffsetTicks * TickSize();   # above wash extreme
def longStop  = CompoundValue(1, if bullWR then longStopLvl  else longStop[1],  low);
def shortStop = CompoundValue(1, if bearWR then shortStopLvl else shortStop[1], high);
def longTgt  = ep + rMult * (ep - longStop);
def shortTgt = ep - rMult * (shortStop - ep);

AddOrder(OrderType.BUY_TO_OPEN,  allowLongs  and bullWR and inWindow and !mustFlatten, open[-1], tradeSize, Color.GREEN,   Color.GREEN,   "WR Long");
AddOrder(OrderType.SELL_TO_OPEN, allowShorts and bearWR and inWindow and !mustFlatten, open[-1], tradeSize, Color.MAGENTA, Color.MAGENTA, "WR Short");

# Exits: pattern invalidation (stop beyond wash extreme), R target, EOD
AddOrder(OrderType.SELL_TO_CLOSE, low  <= longStop,  longStop,  tradeSize, Color.RED,   Color.RED,   "L Stop");
AddOrder(OrderType.SELL_TO_CLOSE, high >= longTgt,   longTgt,   tradeSize, Color.CYAN,  Color.CYAN,  "L Tgt");
AddOrder(OrderType.SELL_TO_CLOSE, mustFlatten, open[-1], tradeSize, Color.GRAY, Color.GRAY, "L EOD");
AddOrder(OrderType.BUY_TO_CLOSE,  high >= shortStop, shortStop, tradeSize, Color.RED,   Color.RED,   "S Stop");
AddOrder(OrderType.BUY_TO_CLOSE,  low  <= shortTgt,  shortTgt,  tradeSize, Color.CYAN,  Color.CYAN,  "S Tgt");
AddOrder(OrderType.BUY_TO_CLOSE,  mustFlatten, open[-1], tradeSize, Color.GRAY, Color.GRAY, "S EOD");

# ALTERNATIVE ENTRY (her taught "set and forget" style): limit order
# on the retest of the wash line after the rinse — replace the entry
# AddOrders' price with the line value and condition on price touching
# it within N bars of the rinse. Both-hit bars fill whichever order
# evaluates first; treat those as ambiguous when reviewing the report.
