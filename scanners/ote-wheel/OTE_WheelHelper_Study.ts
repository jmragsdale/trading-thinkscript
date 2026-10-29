# OTE Wheel Helper Study v4 - causal chart build
# Aggregation: DAY. Companion to the single-output OTE_WheelScan.ts.
#
# Lookahead audit: GetEventOffset was removed. thinkScript event functions add
# a future offset to the whole script. The historical event feed is not
# documented as point-in-time safe. Apply an upcoming-earnings exclusion as a
# separate live TOS filter before acting on a chart alert.

input side = {default Bull, Bear};
input pivotStrength = 2;
input maxDisplacementBars = 3;
input maxZoneAgeBars = 15;
input requireWick = yes;
input wickBodyRatio = 1.25;
input minPrice = 2.0;
input maxPrice = 20.0;
input useDollarVolume = yes;
input minAvgDollarVol = 5000000;
input minRiskPct = 1.0;
input maxRiskPct = 10.0;
input gapGuardPct = 6.0;
input strikeIncrement = 0.5;
input strikeCushionPct = 1.0;
input alertsOn = yes;
input alertWhenZoneArmed = no;

def isBull = side == side.Bull;

def pivotHigh =
    if high[pivotStrength] == Highest(high, 2 * pivotStrength + 1)
    then high[pivotStrength]
    else Double.NaN;
def pivotLow =
    if low[pivotStrength] == Lowest(low, 2 * pivotStrength + 1)
    then low[pivotStrength]
    else Double.NaN;

def lastSwingHigh = CompoundValue(
    1,
    if !IsNaN(pivotHigh) then pivotHigh else lastSwingHigh[1],
    Double.NaN
);
def lastSwingLow = CompoundValue(
    1,
    if !IsNaN(pivotLow) then pivotLow else lastSwingLow[1],
    Double.NaN
);

def body = AbsValue(close - open);
def bullishWickOk =
    !requireWick or
    Min(open, close) - low >= wickBodyRatio * body;
def bearishWickOk =
    !requireWick or
    high - Max(open, close) >= wickBodyRatio * body;

def bullishSweep =
    isBull and
    !IsNaN(lastSwingLow[1]) and
    low < lastSwingLow[1] and
    close > lastSwingLow[1] and
    bullishWickOk;
def bearishSweep =
    !isBull and
    !IsNaN(lastSwingHigh[1]) and
    high > lastSwingHigh[1] and
    close < lastSwingHigh[1] and
    bearishWickOk;
def sweep = bullishSweep or bearishSweep;

def sweepExtreme = CompoundValue(
    1,
    if bullishSweep then low
    else if bearishSweep then high
    else sweepExtreme[1],
    Double.NaN
);
def sweepBarHigh = CompoundValue(
    1,
    if sweep then high else sweepBarHigh[1],
    Double.NaN
);
def sweepBarLow = CompoundValue(
    1,
    if sweep then low else sweepBarLow[1],
    Double.NaN
);
def barsSinceSweep = CompoundValue(
    1,
    if sweep then 0
    else if barsSinceSweep[1] <= maxDisplacementBars
         then barsSinceSweep[1] + 1
         else maxDisplacementBars + 1,
    maxDisplacementBars + 1
);

def gapPct =
    if close[1] > 0 then AbsValue(open / close[1] - 1) * 100 else 0;
def bigGapSinceSweep = CompoundValue(
    1,
    if sweep then gapPct > gapGuardPct
    else bigGapSinceSweep[1] or gapPct > gapGuardPct,
    no
);

def bullishDisplacement =
    isBull and
    barsSinceSweep > 0 and
    barsSinceSweep <= maxDisplacementBars and
    close > sweepBarHigh;
def bearishDisplacement =
    !isBull and
    barsSinceSweep > 0 and
    barsSinceSweep <= maxDisplacementBars and
    close < sweepBarLow;
def displacement = bullishDisplacement or bearishDisplacement;

def anchorFar = CompoundValue(
    1,
    if bullishDisplacement then Highest(high, maxDisplacementBars + 1)
    else if bearishDisplacement then Lowest(low, maxDisplacementBars + 1)
    else anchorFar[1],
    Double.NaN
);
def structureRange = AbsValue(anchorFar - sweepExtreme);
def zoneNearLevel =
    if isBull
    then anchorFar - 0.62 * structureRange
    else anchorFar + 0.62 * structureRange;
def zoneFarLevel =
    if isBull
    then anchorFar - 0.79 * structureRange
    else anchorFar + 0.79 * structureRange;

# Count age independently, then use prior armed state. This avoids the original
# circular current-bar dependency between armed and barsSinceDisp.
def barsSinceDisplacement = CompoundValue(
    1,
    if displacement then 0
    else if barsSinceDisplacement[1] <= maxZoneAgeBars
         then barsSinceDisplacement[1] + 1
         else maxZoneAgeBars + 1,
    maxZoneAgeBars + 1
);
def invalidated =
    (isBull and close < sweepExtreme) or
    (!isBull and close > sweepExtreme);
def completed =
    (isBull and close > anchorFar) or
    (!isBull and close < anchorFar);
def zoneArmed = CompoundValue(
    1,
    if displacement then 1
    else if zoneArmed[1] and
            barsSinceDisplacement <= maxZoneAgeBars and
            !invalidated and
            !completed
         then 1
         else 0,
    0
);

def inBullZone =
    isBull and
    low <= zoneNearLevel and
    close >= zoneFarLevel and
    close >= sweepExtreme;
def inBearZone =
    !isBull and
    high >= zoneNearLevel and
    close <= zoneFarLevel and
    close <= sweepExtreme;

def priceOk = close >= minPrice and close <= maxPrice;
def averageDollarVolume = Average(volume, 20) * close;
def liquidityOk = !useDollarVolume or averageDollarVolume >= minAvgDollarVol;
def riskPct =
    if close > 0
    then AbsValue((zoneNearLevel + zoneFarLevel) / 2 - sweepExtreme) / close * 100
    else 0;
def riskOk = riskPct >= minRiskPct and riskPct <= maxRiskPct;

def tradeable =
    zoneArmed and
    (inBullZone or inBearZone) and
    priceOk and
    liquidityOk and
    riskOk and
    !bigGapSinceSweep;

def rawStrike =
    if isBull
    then sweepExtreme * (1 - strikeCushionPct / 100)
    else sweepExtreme * (1 + strikeCushionPct / 100);
def safeStrikeIncrement = Max(strikeIncrement, TickSize());

plot SuggestedStrike =
    if zoneArmed
    then if isBull
         then Floor(rawStrike / safeStrikeIncrement) * safeStrikeIncrement
         else Ceil(rawStrike / safeStrikeIncrement) * safeStrikeIncrement
    else Double.NaN;
plot ZoneNear = if zoneArmed then zoneNearLevel else Double.NaN;
plot ZoneFar = if zoneArmed then zoneFarLevel else Double.NaN;
plot ProtectedSwing = if zoneArmed then sweepExtreme else Double.NaN;

SuggestedStrike.SetDefaultColor(Color.ORANGE);
ZoneNear.SetDefaultColor(Color.LIGHT_GRAY);
ZoneFar.SetDefaultColor(Color.GRAY);
ProtectedSwing.SetDefaultColor(Color.RED);

AddLabel(
    yes,
    if tradeable then "TRADEABLE ZONE"
    else if zoneArmed then "ZONE ARMED"
    else "NO ACTIVE ZONE",
    if tradeable then Color.CYAN
    else if zoneArmed then Color.YELLOW
    else Color.GRAY
);

Alert(
    alertsOn and alertWhenZoneArmed and zoneArmed and !zoneArmed[1],
    (if isBull then "OTE Wheel: bullish" else "OTE Wheel: bearish") +
        " zone armed for " + GetSymbol(),
    Alert.BAR,
    Sound.Ding
);
Alert(
    alertsOn and tradeable and !tradeable[1],
    (if isBull then "OTE Wheel: bullish" else "OTE Wheel: bearish") +
        " tradeable retracement for " + GetSymbol(),
    Alert.BAR,
    Sound.Ring
);
