# OTE_WheelScan v2 — daily-TF OTE zone scanner (scan-safe: single aggregation, no HTF refs)
# Flags symbols where a liquidity sweep -> displacement sequence formed and price is
# CURRENTLY inside the 62-79% OTE retrace zone. v2 adds low-priced-stock guards
# (price band, dollar-volume floor, risk%-of-price band, gap guard, earnings buffer)
# and a SuggestedStrike plot for CSP placement.
# Validated (Python engine, daily, 13 symbols 2021-26): +0.36R long edge pooled; CSP struck
# 1% below the protected swing expires safe ~74% at 7 DTE. FX pairs tested and FAILED
# (-0.13R across 8 majors) — do NOT use this on forex. analysis/daily_ote_tos_scanner.md.
#
# Stock Hacker: study filter > Custom > this study, aggregation 1 DAY, "Tradeable" is true.

input side = {default Bull, Bear};
input pivotStrength = 2;
input maxDisplacementBars = 3;
input maxZoneAgeBars = 15;
input requireWick = yes;
input wickBodyRatio = 1.25;
# --- low-priced-stock guards ---
input minPrice = 2.0;
input maxPrice = 20.0;
input useDollarVolume = yes;
input minAvgDollarVol = 5000000;
input minRiskPct = 1.0;
input maxRiskPct = 10.0;
input gapGuardPct = 6.0;
input avoidEarnings = yes;
input earningsBufferBars = 7;
# --- strike suggestion ---
input strikeIncrement = 0.5;
input strikeCushionPct = 1.0;

def isBull = side == side.Bull;

# ---- pivot swings ----
def ph = if high[pivotStrength] == Highest(high, 2 * pivotStrength + 1) then high[pivotStrength] else Double.NaN;
def pl = if low[pivotStrength] == Lowest(low, 2 * pivotStrength + 1) then low[pivotStrength] else Double.NaN;
def lastSwingHigh = if !IsNaN(ph) then ph else lastSwingHigh[1];
def lastSwingLow = if !IsNaN(pl) then pl else lastSwingLow[1];

# ---- sweep ----
def body = AbsValue(close - open);
def wickOkB = !requireWick or (Min(open, close) - low) >= wickBodyRatio * body;
def wickOkS = !requireWick or (high - Max(open, close)) >= wickBodyRatio * body;
def sweepB = isBull and low < lastSwingLow[1] and close > lastSwingLow[1] and wickOkB;
def sweepS = !isBull and high > lastSwingHigh[1] and close < lastSwingHigh[1] and wickOkS;
def sweep = sweepB or sweepS;

def sweepExt = if sweepB then low else if sweepS then high else sweepExt[1];
def barsSinceSweep = if sweep then 0 else barsSinceSweep[1] + 1;
def sweepBarHigh = if sweep then high else sweepBarHigh[1];
def sweepBarLow = if sweep then low else sweepBarLow[1];

# ---- gap guard: disqualify structures containing a big overnight gap ----
def gapPct = AbsValue(open / close[1] - 1) * 100;
def bigGapSince = if sweep then gapPct > gapGuardPct
                  else bigGapSince[1] or gapPct > gapGuardPct;

# ---- displacement (CISD proxy) ----
def dispB = isBull and barsSinceSweep > 0 and barsSinceSweep <= maxDisplacementBars and close > sweepBarHigh;
def dispS = !isBull and barsSinceSweep > 0 and barsSinceSweep <= maxDisplacementBars and close < sweepBarLow;
def disp = dispB or dispS;

# ---- armed zone state ----
def anchorFar = if dispB then Highest(high, maxDisplacementBars + 1)
                else if dispS then Lowest(low, maxDisplacementBars + 1)
                else anchorFar[1];
def range = AbsValue(anchorFar - sweepExt);
def zoneNear = if isBull then anchorFar - 0.62 * range else anchorFar + 0.62 * range;
def zoneFar = if isBull then anchorFar - 0.79 * range else anchorFar + 0.79 * range;

def invalid = (isBull and close < sweepExt) or (!isBull and close > sweepExt);
def completed = (isBull and close > anchorFar and armed[1]) or (!isBull and close < anchorFar and armed[1]);
def ageOut = barsSinceDisp[1] + 1 > maxZoneAgeBars;
def armed = if disp then 1
            else if armed[1] and !invalid and !completed and !ageOut then 1 else 0;
def barsSinceDisp = if disp then 0 else if armed then barsSinceDisp[1] + 1 else 0;

def inZoneB = isBull and low <= zoneNear and close >= zoneFar and close >= sweepExt;
def inZoneS = !isBull and high >= zoneNear and close <= zoneFar and close <= sweepExt;

# ---- v2 gates ----
def priceOk = close >= minPrice and close <= maxPrice;
def dollarVol = Average(volume, 20) * close;
def liqOk = !useDollarVolume or dollarVol >= minAvgDollarVol;
def riskPct = AbsValue((zoneNear + zoneFar) / 2 - sweepExt) / close * 100;
def riskOk = riskPct >= minRiskPct and riskPct <= maxRiskPct;
def er = GetEventOffset(Events.EARNINGS, -1);
def erSoon = if IsNaN(er) then 0 else er >= -earningsBufferBars;
def erOk = !avoidEarnings or !erSoon;

plot Tradeable = armed and (inZoneB or inZoneS) and priceOk and liqOk and riskOk and !bigGapSince and erOk;
Tradeable.SetDefaultColor(Color.CYAN);

# ---- strike suggestion: cushioned below (Bull) / above (Bear) the protected swing ----
def rawStrike = if isBull then sweepExt * (1 - strikeCushionPct / 100)
                else sweepExt * (1 + strikeCushionPct / 100);
plot SuggestedStrike = if armed then
    (if isBull then Floor(rawStrike / strikeIncrement) * strikeIncrement
     else Ceil(rawStrike / strikeIncrement) * strikeIncrement) else Double.NaN;
SuggestedStrike.SetDefaultColor(Color.ORANGE);

plot ZoneNear = if armed then zoneNear else Double.NaN;
plot ZoneFar = if armed then zoneFar else Double.NaN;
plot ProtectedSwing = if armed then sweepExt else Double.NaN;
ZoneNear.SetDefaultColor(Color.GRAY);
ZoneFar.SetDefaultColor(Color.GRAY);
ProtectedSwing.SetDefaultColor(Color.RED);
