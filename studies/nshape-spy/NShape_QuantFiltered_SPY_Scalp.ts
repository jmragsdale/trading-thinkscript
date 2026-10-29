# NShape_QuantFiltered_SPY_Scalp
# Quant-filtered variant of the legacy 3-bar N pattern.
# Primary tested configuration for SPY:
# - 1-minute chart
# - bullish signals only
# - entry window 13:30-15:30 ET
# - C3 close above EMA20 and session VWAP
# - C3 range >= 20-bar average range
# - 1.5R target, C2 low stop
#
# This is a study/alert version, not a full execution strategy.

input volLen            = 20;
input bodyPctMin        = 0.50;
input volUpMultC1       = 1.10;
input retraceMaxPct     = 0.80;
input volRetraceMaxFrac = 1.00;
input volUpMultC3       = 1.10;
input targetR           = 1.5;
input useC2LowForStop   = yes;

input useTimeFilter     = yes;
input startTime         = 1330;
input endTime           = 1530;

input useEMAFilter      = yes;
input emaLen            = 20;
input useVWAPFilter     = yes;
input useRangeFilter    = yes;
input rangeLen          = 20;
input rangeMult         = 1.00;

input showBullSignals   = yes;
input showBearSignals   = no;
input paintBars         = yes;
input showBubbles       = yes;
input showLabels        = yes;

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

# ---------- Bullish N: C1=2 bars back, C2=1 back, C3=current
def rangeC1 = high[2] - low[2];
def bodyC1 = AbsValue(close[2] - open[2]);
def bodyPctC1 = if rangeC1 != 0 then bodyC1 / rangeC1 else 0;

def C1_bull = close[2] > open[2];
def C1_bigBody = bodyPctC1 >= bodyPctMin;
def C1_volUp = volume[2] >= avgVol[2] * volUpMultC1;

def C2_pullback = close[1] <= close[2];
def C2_notBreak = low[1] > low[2];
def C2_softRet = if bodyC1 != 0 then (close[2] - close[1]) / bodyC1 <= retraceMaxPct else 1;
def C2_volDown = volume[1] <= volume[2] * volRetraceMaxFrac;

def C3_breakout = close > high[2] and close > high[1] and close > open;
def C3_volUp = volume >= avgVol * volUpMultC3;

def bullTrendOk = (!useEMAFilter or close > ema) and (!useVWAPFilter or close > sessionVWAP);

def BullNRaw = C1_bull and C1_bigBody and C1_volUp and
               C2_pullback and C2_notBreak and C2_softRet and C2_volDown and
               C3_breakout and C3_volUp;

def BullN = showBullSignals and inWindow and rangeOk and bullTrendOk and BullNRaw;

def Bull_EntryVal = if BullN then close else Double.NaN;
def Bull_StopVal = if BullN then (if useC2LowForStop then low[1] else low[2]) else Double.NaN;
def Bull_Risk = Bull_EntryVal - Bull_StopVal;
def Bull_TgtVal = if BullN then Bull_EntryVal + targetR * Bull_Risk else Double.NaN;

plot Bull_Signal = BullN;
Bull_Signal.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_UP);
Bull_Signal.SetDefaultColor(Color.CYAN);

plot Bull_Entry = Bull_EntryVal;
Bull_Entry.SetDefaultColor(Color.CYAN);
Bull_Entry.SetStyle(Curve.SHORT_DASH);

plot Bull_Stop = Bull_StopVal;
Bull_Stop.SetDefaultColor(Color.RED);
Bull_Stop.SetStyle(Curve.LONG_DASH);

plot Bull_Target = Bull_TgtVal;
Bull_Target.SetDefaultColor(Color.GREEN);
Bull_Target.SetStyle(Curve.LONG_DASH);

AddChartBubble(showBubbles and BullN, Bull_EntryVal,
    "Bull N QF" + "\nEntry " + AsDollars(Bull_EntryVal) +
    "\nStop " + AsDollars(Bull_StopVal) +
    "\nTarget " + AsDollars(Bull_TgtVal),
    Color.CYAN, yes);

Alert(BullN, "Bull N quant-filtered setup", Alert.BAR, Sound.Ding);

# ---------- Bearish mirror, disabled by default.
def C1_bear = close[2] < open[2];
def C2_pullUp = close[1] >= close[2];
def C2_notBreakB = high[1] < high[2];
def C2_softRetB = if bodyC1 != 0 then (close[1] - close[2]) / bodyC1 <= retraceMaxPct else 1;
def C3_breakDn = close < low[2] and close < low[1] and close < open;
def bearTrendOk = (!useEMAFilter or close < ema) and (!useVWAPFilter or close < sessionVWAP);

def BearNRaw = C1_bear and C1_bigBody and C1_volUp and
               C2_pullUp and C2_notBreakB and C2_softRetB and C2_volDown and
               C3_breakDn and C3_volUp;

def BearN = showBearSignals and inWindow and rangeOk and bearTrendOk and BearNRaw;

def Bear_EntryVal = if BearN then close else Double.NaN;
def Bear_StopVal = if BearN then (if useC2LowForStop then high[1] else high[2]) else Double.NaN;
def Bear_Risk = Bear_StopVal - Bear_EntryVal;
def Bear_TgtVal = if BearN then Bear_EntryVal - targetR * Bear_Risk else Double.NaN;

plot Bear_Signal = BearN;
Bear_Signal.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_DOWN);
Bear_Signal.SetDefaultColor(Color.MAGENTA);

plot Bear_Entry = Bear_EntryVal;
Bear_Entry.SetDefaultColor(Color.MAGENTA);
Bear_Entry.SetStyle(Curve.SHORT_DASH);

plot Bear_Stop = Bear_StopVal;
Bear_Stop.SetDefaultColor(Color.RED);
Bear_Stop.SetStyle(Curve.LONG_DASH);

plot Bear_Target = Bear_TgtVal;
Bear_Target.SetDefaultColor(Color.GREEN);
Bear_Target.SetStyle(Curve.LONG_DASH);

AddChartBubble(showBubbles and BearN, Bear_EntryVal,
    "Bear N QF" + "\nEntry " + AsDollars(Bear_EntryVal) +
    "\nStop " + AsDollars(Bear_StopVal) +
    "\nTarget " + AsDollars(Bear_TgtVal),
    Color.MAGENTA, no);

Alert(BearN, "Bear N quant-filtered setup", Alert.BAR, Sound.Bell);

AssignPriceColor(if paintBars and BullN then Color.CYAN
                 else if paintBars and BearN then Color.MAGENTA
                 else Color.CURRENT);

AddLabel(showLabels, "N QF: use SPY 1m, 13:30-15:30, target 1.5R, max hold 10 bars", Color.GRAY);
AddLabel(showLabels, "EMA" + emaLen + " " + Round(ema, 2) + " VWAP " + Round(sessionVWAP, 2), Color.GRAY);
