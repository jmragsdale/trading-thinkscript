# MTF_OTE_TOS — chart study: OTE zones + alerts, with optional higher-TF bias filter.
# Chart-only companion to OTE_WheelScan (charts allow secondary aggregation; scans do not).
# Suggested pairs (validated fractal): chart 5m + bias 1h (day/swing), chart 1D + bias 1W
# (wheel). This is a FINDER, not an executor — confirm signals on the audited TradingView
# indicator before trading intraday; wheel usage per analysis/daily_ote_tos_scanner.md.

input pivotStrength = 2;
input maxDisplacementBars = 3;
input maxZoneAgeBars = 15;
input requireWick = yes;
input wickBodyRatio = 1.25;
input useHTFBias = yes;
input biasAgg = AggregationPeriod.HOUR;
input biasLookback = 20;
input alertsOn = yes;

# ---- optional HTF bias: only long above HTF range midpoint, short below ----
def htfHi = Highest(high(period = biasAgg)[1], biasLookback);
def htfLo = Lowest(low(period = biasAgg)[1], biasLookback);
def biasMid = (htfHi + htfLo) / 2;
def longOk = !useHTFBias or close >= biasMid;
def shortOk = !useHTFBias or close <= biasMid;

# ---- pivots ----
def ph = if high[pivotStrength] == Highest(high, 2 * pivotStrength + 1) then high[pivotStrength] else Double.NaN;
def pl = if low[pivotStrength] == Lowest(low, 2 * pivotStrength + 1) then low[pivotStrength] else Double.NaN;
def lastSwingHigh = if !IsNaN(ph) then ph else lastSwingHigh[1];
def lastSwingLow = if !IsNaN(pl) then pl else lastSwingLow[1];

# ---- sweeps ----
def body = AbsValue(close - open);
def wickOkB = !requireWick or (Min(open, close) - low) >= wickBodyRatio * body;
def wickOkS = !requireWick or (high - Max(open, close)) >= wickBodyRatio * body;
def sweepB = low < lastSwingLow[1] and close > lastSwingLow[1] and wickOkB and longOk;
def sweepS = high > lastSwingHigh[1] and close < lastSwingHigh[1] and wickOkS and shortOk;

# ---- bull state machine ----
def bSweepExt = if sweepB then low else bSweepExt[1];
def bSweepHigh = if sweepB then high else bSweepHigh[1];
def bBars = if sweepB then 0 else bBars[1] + 1;
def bDisp = bBars > 0 and bBars <= maxDisplacementBars and close > bSweepHigh;
def bAnchor = if bDisp then Highest(high, maxDisplacementBars + 1) else bAnchor[1];
def bRange = bAnchor - bSweepExt;
def bZneNear = bAnchor - 0.62 * bRange;
def bZneFar = bAnchor - 0.79 * bRange;
def bAge = if bDisp then 0 else if bArmed[1] then bAge[1] + 1 else 0;
def bArmed = if bDisp then 1
             else if bArmed[1] and close >= bSweepExt and !(close > bAnchor) and bAge <= maxZoneAgeBars then 1 else 0;
def bInZone = bArmed and low <= bZneNear and close >= bZneFar and close >= bSweepExt;

# ---- bear state machine ----
def sSweepExt = if sweepS then high else sSweepExt[1];
def sSweepLow = if sweepS then low else sSweepLow[1];
def sBars = if sweepS then 0 else sBars[1] + 1;
def sDisp = sBars > 0 and sBars <= maxDisplacementBars and close < sSweepLow;
def sAnchor = if sDisp then Lowest(low, maxDisplacementBars + 1) else sAnchor[1];
def sRange = sSweepExt - sAnchor;
def sZneNear = sAnchor + 0.62 * sRange;
def sZneFar = sAnchor + 0.79 * sRange;
def sAge = if sDisp then 0 else if sArmed[1] then sAge[1] + 1 else 0;
def sArmed = if sDisp then 1
             else if sArmed[1] and close <= sSweepExt and !(close < sAnchor) and sAge <= maxZoneAgeBars then 1 else 0;
def sInZone = sArmed and high >= sZneNear and close <= sZneFar and close <= sSweepExt;

# ---- plots ----
plot BullZoneTop = if bArmed then bZneNear else Double.NaN;
plot BullZoneBot = if bArmed then bZneFar else Double.NaN;
plot BullSwing = if bArmed then bSweepExt else Double.NaN;
plot BearZoneBot = if sArmed then sZneNear else Double.NaN;
plot BearZoneTop = if sArmed then sZneFar else Double.NaN;
plot BearSwing = if sArmed then sSweepExt else Double.NaN;
BullZoneTop.SetDefaultColor(Color.DARK_GREEN);
BullZoneBot.SetDefaultColor(Color.DARK_GREEN);
BullSwing.SetDefaultColor(Color.RED);
BearZoneTop.SetDefaultColor(Color.DARK_RED);
BearZoneBot.SetDefaultColor(Color.DARK_RED);
BearSwing.SetDefaultColor(Color.RED);
AddCloud(BullZoneTop, BullZoneBot, Color.LIGHT_GREEN, Color.LIGHT_GREEN);
AddCloud(BearZoneTop, BearZoneBot, Color.LIGHT_RED, Color.LIGHT_RED);

plot BullSignal = bInZone and !bInZone[1];
plot BearSignal = sInZone and !sInZone[1];
BullSignal.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_UP);
BearSignal.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_DOWN);
BullSignal.SetDefaultColor(Color.GREEN);
BearSignal.SetDefaultColor(Color.RED);

Alert(alertsOn and BullSignal, "OTE bull zone tap: " + GetSymbol(), Alert.BAR, Sound.Ding);
Alert(alertsOn and BearSignal, "OTE bear zone tap: " + GetSymbol(), Alert.BAR, Sound.Ding);
