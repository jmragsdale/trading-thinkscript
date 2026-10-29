# Wash & Rinse v2 - native alert study
# Add to a chart at the intended aggregation or use as a one-plot Study Alert.
# The scan-safe source remains WashRinse_v2_Scan_Corrected.ts.
# PrevDay is reconstructed from the scan's primary bars; its session content
# therefore follows the filter's EXT setting.

input levelMode = {default Swing, PrevDay};
input scanSide = {default Bullish, Bearish, Either};
input pivotStrength = 5;
input maxRinseBars = 0;
input alertsOn = yes;

Assert(pivotStrength >= 1, "pivotStrength must be at least 1");
Assert(maxRinseBars >= 0, "maxRinseBars cannot be negative");

def isPH = high[pivotStrength] == Highest(high, 2 * pivotStrength + 1);
def isPL = low[pivotStrength]  == Lowest(low,  2 * pivotStrength + 1);
def lastPH = CompoundValue(1,
    if isPH then high[pivotStrength] else lastPH[1],
    Double.NaN);
def lastPL = CompoundValue(1,
    if isPL then low[pivotStrength] else lastPL[1],
    Double.NaN);

# Primary-aggregation reconstruction avoids forbidden secondary aggregation.
# PrevDay means the prior session on intraday/daily scans and the prior primary
# bar/period on weekly or monthly scans.
def newPeriod = GetYYYYMMDD() != GetYYYYMMDD()[1];
def runningPeriodHigh = CompoundValue(1,
    if newPeriod then high else Max(high, runningPeriodHigh[1]),
    high);
def runningPeriodLow = CompoundValue(1,
    if newPeriod then low else Min(low, runningPeriodLow[1]),
    low);
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

def bearSignal = rawBearRinse and
    (maxRinseBars == 0 or ageH[1] <= maxRinseBars);
def bullSignal = rawBullRinse and
    (maxRinseBars == 0 or ageL[1] <= maxRinseBars);

plot scan =
    if scanSide == scanSide.Bullish then bullSignal
    else if scanSide == scanSide.Bearish then bearSignal
    else bullSignal or bearSignal;

def bullishAlertSelected =
    scanSide == scanSide.Bullish or scanSide == scanSide.Either;
def bearishAlertSelected =
    scanSide == scanSide.Bearish or scanSide == scanSide.Either;

Alert(
    alertsOn and bullishAlertSelected and bullSignal,
    "Wash & Rinse: bullish close back above wash line",
    Alert.BAR,
    Sound.Ding
);
Alert(
    alertsOn and bearishAlertSelected and bearSignal,
    "Wash & Rinse: bearish close back below wash line",
    Alert.BAR,
    Sound.Bell
);
