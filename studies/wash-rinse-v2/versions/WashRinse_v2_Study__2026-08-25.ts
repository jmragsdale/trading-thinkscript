# ============================================================
# Wash & Rinse v2 STUDY — rebuilt to sourced TAW rules
# CONFIRMED rules implemented:
#   * Wash line created when a bar CLOSES beyond a prior swing
#     high/low (wicks do not count)
#   * Rinse/signal = a later bar CLOSES back across the line
#   * Lines persist as S/R until broken (uncapped by default)
# UNCONFIRMED rules exposed as inputs (sweep/adjust freely):
#   * levelMode: Swing pivots vs Prior-Day H/L (period extremes)
#   * pivotStrength, maxRinseBars (0 = lines never expire)
# ============================================================

input levelMode = {default Swing, PrevDay};
input pivotStrength = 5;        # bars each side for swing pivots (UNCONFIRMED)
input maxRinseBars = 0;         # 0 = uncapped (faithful: lines persist)
input alertsOn = yes;

# ---------- Reference levels ----------
def isPH = high[pivotStrength] == Highest(high, 2 * pivotStrength + 1);
def isPL = low[pivotStrength]  == Lowest(low,  2 * pivotStrength + 1);
def lastPH = CompoundValue(1, if isPH then high[pivotStrength] else lastPH[1], high);
def lastPL = CompoundValue(1, if isPL then low[pivotStrength]  else lastPL[1], low);

def refH = if levelMode == levelMode.PrevDay then high(period = AggregationPeriod.DAY)[1] else lastPH;
def refL = if levelMode == levelMode.PrevDay then low(period = AggregationPeriod.DAY)[1]  else lastPL;

# ---------- Bearish (magenta) wash line: close ABOVE prior high ----------
def lvlH = CompoundValue(1,
    if lvlH[1] == 0 then (if close > refH and close[1] <= refH then refH else 0)
    else if close < lvlH[1] then 0
    else lvlH[1], 0);
def ageH = CompoundValue(1, if lvlH > 0 then ageH[1] + 1 else 0, 0);
def extH = CompoundValue(1,
    if lvlH > 0 and lvlH[1] == 0 then high
    else if lvlH > 0 then Max(extH[1], high)
    else extH[1], high);

# ---------- Bullish (green) wash line: close BELOW prior low ----------
def lvlL = CompoundValue(1,
    if lvlL[1] == 0 then (if close < refL and close[1] >= refL then refL else 0)
    else if close > lvlL[1] then 0
    else lvlL[1], 0);
def ageL = CompoundValue(1, if lvlL > 0 then ageL[1] + 1 else 0, 0);
def extL = CompoundValue(1,
    if lvlL > 0 and lvlL[1] == 0 then low
    else if lvlL > 0 then Min(extL[1], low)
    else extL[1], low);

# ---------- Signals: close back across the line ----------
def windowOKH = maxRinseBars == 0 or ageH[1] <= maxRinseBars;
def windowOKL = maxRinseBars == 0 or ageL[1] <= maxRinseBars;

plot BearishWR = lvlH[1] > 0 and close < lvlH[1] and windowOKH;
BearishWR.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_DOWN);
BearishWR.SetDefaultColor(Color.MAGENTA);
BearishWR.SetLineWeight(3);

plot BullishWR = lvlL[1] > 0 and close > lvlL[1] and windowOKL;
BullishWR.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_UP);
BullishWR.SetDefaultColor(Color.GREEN);
BullishWR.SetLineWeight(3);

# ---------- Persistent lines + wash extreme (stop reference) ----------
plot WashLineHigh = if lvlH > 0 then lvlH else Double.NaN;
WashLineHigh.SetDefaultColor(Color.MAGENTA);
WashLineHigh.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);

plot WashLineLow = if lvlL > 0 then lvlL else Double.NaN;
WashLineLow.SetDefaultColor(Color.GREEN);
WashLineLow.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);

plot WashExtremeH = if lvlH > 0 then extH else Double.NaN;
WashExtremeH.SetDefaultColor(Color.DARK_RED);
WashExtremeH.SetPaintingStrategy(PaintingStrategy.DASHES);

plot WashExtremeL = if lvlL > 0 then extL else Double.NaN;
WashExtremeL.SetDefaultColor(Color.DARK_GREEN);
WashExtremeL.SetPaintingStrategy(PaintingStrategy.DASHES);

Alert(alertsOn and BearishWR, "Bearish W&R: closed back below wash line", Alert.BAR, Sound.Ding);
Alert(alertsOn and BullishWR, "Bullish W&R: closed back above wash line", Alert.BAR, Sound.Ring);
