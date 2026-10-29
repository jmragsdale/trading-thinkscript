# NShape_QuantFiltered_SPY_Scanner
# Scan-safe version for Thinkorswim Stock Hacker / Option Hacker.
# Set scan aggregation to 1 min for the primary tested SPY variant.
#
# Primary research setting:
# - scanLongs = yes
# - scanShorts = no
# - startTime = 1330
# - endTime = 1530
# - targetR is not used by scanner; it is left out because scan only detects setup.

input volLen            = 20;
input bodyPctMin        = 0.50;
input volUpMultC1       = 1.10;
input retraceMaxPct     = 0.80;
input volRetraceMaxFrac = 1.00;
input volUpMultC3       = 1.10;

input useTimeFilter     = yes;
input startTime         = 1330;
input endTime           = 1530;

input useEMAFilter      = yes;
input emaLen            = 20;
input useVWAPFilter     = yes;
input useRangeFilter    = yes;
input rangeLen          = 20;
input rangeMult         = 1.00;

input useCurrentBarVolumeFilter = no;
input minCurrentBarVolume = 100000;
input useRelativeVolumeFilter = no;
input minRelativeVolume = 1.20;

input scanLongs         = yes;
input scanShorts        = no;
input signalLookbackBars = 2;

def avgVol = Average(volume, volLen);
def ema = ExpAverage(close, emaLen);
def barRange = high - low;
def avgRange = Average(barRange, rangeLen);

# Session VWAP, reset each date.
def newDay = GetYYYYMMDD() <> GetYYYYMMDD()[1];
def typical = (high + low + close) / 3;
def cumPV = CompoundValue(1, if newDay then typical * volume else cumPV[1] + typical * volume, typical * volume);
def cumVol = CompoundValue(1, if newDay then volume else cumVol[1] + volume, volume);
def sessionVWAP = if cumVol != 0 then cumPV / cumVol else close;

def inWindow = !useTimeFilter or (SecondsFromTime(startTime) >= 0 and SecondsTillTime(endTime) > 0);
def rangeOk = !useRangeFilter or barRange >= avgRange * rangeMult;
def currentBarVolumeOk = !useCurrentBarVolumeFilter or volume >= minCurrentBarVolume;
def relativeVolumeOk = !useRelativeVolumeFilter or volume >= avgVol * minRelativeVolume;
def liquidityOk = currentBarVolumeOk and relativeVolumeOk;

# C1=2 bars back, C2=1 bar back, C3=current.
def rangeC1 = high[2] - low[2];
def bodyC1 = AbsValue(close[2] - open[2]);
def bodyPctC1 = if rangeC1 != 0 then bodyC1 / rangeC1 else 0;

def C1_bigBody = bodyPctC1 >= bodyPctMin;
def C1_volUp = volume[2] >= avgVol[2] * volUpMultC1;
def C2_volDown = volume[1] <= volume[2] * volRetraceMaxFrac;
def C3_volUp = volume >= avgVol * volUpMultC3;

def C1_bull = close[2] > open[2];
def C2_pullback = close[1] <= close[2];
def C2_notBreak = low[1] > low[2];
def C2_softRet = if bodyC1 != 0 then (close[2] - close[1]) / bodyC1 <= retraceMaxPct else 1;
def C3_breakout = close > high[2] and close > high[1] and close > open;
def bullTrendOk = (!useEMAFilter or close > ema) and (!useVWAPFilter or close > sessionVWAP);

def BullN = scanLongs and inWindow and rangeOk and liquidityOk and bullTrendOk and
            C1_bull and C1_bigBody and C1_volUp and
            C2_pullback and C2_notBreak and C2_softRet and C2_volDown and
            C3_breakout and C3_volUp;

def C1_bear = close[2] < open[2];
def C2_pullUp = close[1] >= close[2];
def C2_notBreakB = high[1] < high[2];
def C2_softRetB = if bodyC1 != 0 then (close[1] - close[2]) / bodyC1 <= retraceMaxPct else 1;
def C3_breakDn = close < low[2] and close < low[1] and close < open;
def bearTrendOk = (!useEMAFilter or close < ema) and (!useVWAPFilter or close < sessionVWAP);

def BearN = scanShorts and inWindow and rangeOk and liquidityOk and bearTrendOk and
            C1_bear and C1_bigBody and C1_volUp and
            C2_pullUp and C2_notBreakB and C2_softRetB and C2_volDown and
            C3_breakDn and C3_volUp;

def rawSignal = BullN or BearN;

plot scan = Highest(if rawSignal then 1 else 0, signalLookbackBars) > 0;
