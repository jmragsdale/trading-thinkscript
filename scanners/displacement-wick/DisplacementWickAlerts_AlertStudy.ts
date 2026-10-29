# Displacement Wick Reversal - native alert study
# Add to a chart at the intended aggregation or use as a one-plot Study Alert.
# The scan-safe source remains DisplacementWickAlerts_Scanner.ts.

input displacement_length = 100;
input min_displacement_strength = 1;
input displacement_require_fvg = no;
input min_wick_pct = 20.0;
input min_wick_body_ratio = 0.25;
input max_zone_age_bars = 50;
input scan_for = {default "New Setups", "Wick Sweeps", "Both"};
input alertsOn = yes;

def body = AbsValue(close - open);
def candleRange = high - low;
def bodyDeviation = StDev(body, displacement_length);

def fvgBullish = high[2] < low;
def fvgBearish = low[2] > high;
def hasFvg = fvgBullish or fvgBearish;

def displacementStrength =
    if (displacement_require_fvg and !hasFvg) or
       bodyDeviation <= 0 or
       body <= bodyDeviation then 0
    else if body > bodyDeviation * 4 then 4
    else if body > bodyDeviation * 3 then 3
    else if body > bodyDeviation * 2 then 2
    else 1;

def isDisplacement = displacementStrength >= min_displacement_strength;
def isBullish = close > open;
def isBearish = close < open;

def upperWick = high - Max(open, close);
def lowerWick = Min(open, close) - low;
def upperWickPct = if candleRange > 0 then upperWick / candleRange * 100 else 0;
def lowerWickPct = if candleRange > 0 then lowerWick / candleRange * 100 else 0;
def upperWickBodyRatio = if body > 0 then upperWick / body else 0;
def lowerWickBodyRatio = if body > 0 then lowerWick / body else 0;

def bullishDisplacementUpperWick =
    isDisplacement and
    isBullish and
    upperWickPct >= min_wick_pct and
    upperWickBodyRatio >= min_wick_body_ratio;

def bearishDisplacementLowerWick =
    isDisplacement and
    isBearish and
    lowerWickPct >= min_wick_pct and
    lowerWickBodyRatio >= min_wick_body_ratio;

def bullZoneTop = CompoundValue(
    1,
    if bullishDisplacementUpperWick then high else bullZoneTop[1],
    Double.NaN
);
def bullZoneBar = CompoundValue(
    1,
    if bullishDisplacementUpperWick then BarNumber() else bullZoneBar[1],
    0
);
def bearZoneBottom = CompoundValue(
    1,
    if bearishDisplacementLowerWick then low else bearZoneBottom[1],
    Double.NaN
);
def bearZoneBar = CompoundValue(
    1,
    if bearishDisplacementLowerWick then BarNumber() else bearZoneBar[1],
    0
);

def bullWickSwept = CompoundValue(
    1,
    if bullishDisplacementUpperWick then no
    else if !IsNaN(bullZoneTop) and high > bullZoneTop then yes
    else bullWickSwept[1],
    no
);
def bearWickSwept = CompoundValue(
    1,
    if bearishDisplacementLowerWick then no
    else if !IsNaN(bearZoneBottom) and low < bearZoneBottom then yes
    else bearWickSwept[1],
    no
);

def bullSweepSignal =
    !bullWickSwept[1] and
    bullWickSwept and
    bullZoneBar > 0 and
    BarNumber() - bullZoneBar <= max_zone_age_bars;
def bearSweepSignal =
    !bearWickSwept[1] and
    bearWickSwept and
    bearZoneBar > 0 and
    BarNumber() - bearZoneBar <= max_zone_age_bars;

def newSetup = bullishDisplacementUpperWick or bearishDisplacementLowerWick;
def wickSweep = bullSweepSignal or bearSweepSignal;

plot scan_signal =
    if scan_for == scan_for."New Setups" then newSetup
    else if scan_for == scan_for."Wick Sweeps" then wickSweep
    else newSetup or wickSweep;

Alert(
    alertsOn and bullishDisplacementUpperWick and !bullishDisplacementUpperWick[1],
    "Displacement Wick: new SHORT zone",
    Alert.BAR,
    Sound.Ring
);
Alert(
    alertsOn and bearishDisplacementLowerWick and !bearishDisplacementLowerWick[1],
    "Displacement Wick: new LONG zone",
    Alert.BAR,
    Sound.Ring
);
Alert(
    alertsOn and bullSweepSignal,
    "Displacement Wick: SHORT entry sweep",
    Alert.BAR,
    Sound.Bell
);
Alert(
    alertsOn and bearSweepSignal,
    "Displacement Wick: LONG entry sweep",
    Alert.BAR,
    Sound.Bell
);
