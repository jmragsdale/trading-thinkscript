# Wash & Rinse v2 STUDY — corrected audit version
# Signals are finalized only when the chart bar closes. On the live bar,
# close/high/low still change tick by tick; confirmedAlertsOnly delays alerts
# one bar so that an intrabar condition cannot create a false alert.

declare upper;

input levelMode = {default Swing, PrevDay};
input pivotStrength = 5;
input maxRinseBars = 0;          # 0 = uncapped; N allows rinses through age N
input alertsOn = yes;
input confirmedAlertsOnly = yes; # yes = alert one bar late, using a closed bar

Assert(pivotStrength >= 1, "pivotStrength must be at least 1");
Assert(maxRinseBars >= 0, "maxRinseBars cannot be negative");

# A candidate pivot pivotStrength bars ago is confirmed on the current bar.
# Equality permits tied/plateau pivots; see audit report.
def isPH = high[pivotStrength] == Highest(high, 2 * pivotStrength + 1);
def isPL = low[pivotStrength]  == Lowest(low,  2 * pivotStrength + 1);

# NaN prevents the beginning of chart history from masquerading as a pivot.
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

# A newly confirmed pivot may be used on its confirmation bar. Both close
# comparisons use the same current refH/refL value.
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

# Include the rinse bar's high/low in the final wash extreme. This fixes the
# original extH[1]/extL[1] omission on the signal bar and resets each episode.
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

def windowOKH = maxRinseBars == 0 or ageH[1] <= maxRinseBars;
def windowOKL = maxRinseBars == 0 or ageL[1] <= maxRinseBars;

plot BearishWR = rawBearRinse and windowOKH;
BearishWR.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_DOWN);
BearishWR.SetDefaultColor(Color.MAGENTA);
BearishWR.SetLineWeight(3);

plot BullishWR = rawBullRinse and windowOKL;
BullishWR.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_UP);
BullishWR.SetDefaultColor(Color.GREEN);
BullishWR.SetLineWeight(3);

plot WashLineHigh = if !IsNaN(lvlH) then lvlH else Double.NaN;
WashLineHigh.SetDefaultColor(Color.MAGENTA);
WashLineHigh.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);

plot WashLineLow = if !IsNaN(lvlL) then lvlL else Double.NaN;
WashLineLow.SetDefaultColor(Color.GREEN);
WashLineLow.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);

plot WashExtremeH =
    if !IsNaN(lvlH) or rawBearRinse then extH else Double.NaN;
WashExtremeH.SetDefaultColor(Color.DARK_RED);
WashExtremeH.SetPaintingStrategy(PaintingStrategy.DASHES);

plot WashExtremeL =
    if !IsNaN(lvlL) or rawBullRinse then extL else Double.NaN;
WashExtremeL.SetDefaultColor(Color.DARK_GREEN);
WashExtremeL.SetPaintingStrategy(PaintingStrategy.DASHES);

def bearAlert = if confirmedAlertsOnly then BearishWR[1] else BearishWR;
def bullAlert = if confirmedAlertsOnly then BullishWR[1] else BullishWR;

Alert(alertsOn and bearAlert,
      "Bearish W&R: closed back below wash line",
      Alert.BAR, Sound.Ding);
Alert(alertsOn and bullAlert,
      "Bullish W&R: closed back above wash line",
      Alert.BAR, Sound.Ring);
