# Displacement Wick Reversal Alerts - ThinkScript Study
# Detects displacement candles with significant wicks and alerts when wicks are swept
# Converted from TradingView Pine Script

declare upper;

#--- Inputs ---#

# Displacement Settings
input displacement_length = 100;
input min_displacement_strength = 1; # 1-4
input displacement_require_fvg = no;

# Wick Settings
input min_wick_pct = 20.0; # Minimum wick % of candle range
input min_wick_body_ratio = 0.25; # Minimum wick/body ratio

# Display Settings
input show_displacement_candles = yes;
input show_wick_zones = yes;
input show_targets = yes;
input show_labels = yes;

# Colors
DefineGlobalColor("BullDispColor", Color.GREEN);
DefineGlobalColor("BearDispColor", Color.RED);
DefineGlobalColor("ShortZone", CreateColor(255, 100, 100));
DefineGlobalColor("LongZone", CreateColor(100, 255, 100));
DefineGlobalColor("TargetColor", Color.YELLOW);

#--- Displacement Calculation ---#

# Calculate body size and standard deviation
def body = AbsValue(close - open);
def candleRange = high - low;
def std = StDev(body, displacement_length);

# Check for FVG (Fair Value Gap)
def fvg_bullish = high[2] < low; # Current low above high from 2 bars ago
def fvg_bearish = low[2] > high; # Current high below low from 2 bars ago
def has_fvg = fvg_bullish or fvg_bearish;

# Determine displacement strength
def displacement_strength =
    if (displacement_require_fvg and !has_fvg) or body <= std then 0
    else if body > std * 4 then 4
    else if body > std * 3 then 3
    else if body > std * 2 then 2
    else if body > std then 1
    else 0;

def is_displacement = displacement_strength >= min_displacement_strength;

# Candle direction
def is_bullish = close > open;
def is_bearish = close < open;

#--- Wick Calculation ---#

# Calculate wick sizes
def upper_wick = high - Max(open, close);
def lower_wick = Min(open, close) - low;

# Calculate wick percentages
def upper_wick_pct = if candleRange > 0 then (upper_wick / candleRange) * 100 else 0;
def lower_wick_pct = if candleRange > 0 then (lower_wick / candleRange) * 100 else 0;

# Calculate wick to body ratios
def upper_wick_body_ratio = if body > 0 then upper_wick / body else 0;
def lower_wick_body_ratio = if body > 0 then lower_wick / body else 0;

# Identify significant wicks on displacement candles
# Bullish displacement with significant UPPER wick = SHORT setup
def bullish_disp_upper_wick = is_displacement and is_bullish and
                               upper_wick_pct >= min_wick_pct and
                               upper_wick_body_ratio >= min_wick_body_ratio;

# Bearish displacement with significant LOWER wick = LONG setup
def bearish_disp_lower_wick = is_displacement and is_bearish and
                               lower_wick_pct >= min_wick_pct and
                               lower_wick_body_ratio >= min_wick_body_ratio;

#--- Zone Tracking (Simplified for ThinkScript) ---#

# Track most recent displacement wick zones
def bull_zone_top = if bullish_disp_upper_wick then high else bull_zone_top[1];
def bull_zone_bottom = if bullish_disp_upper_wick then Max(open, close) else bull_zone_bottom[1];
def bull_zone_target = if bullish_disp_upper_wick then Min(open, close) else bull_zone_target[1];
def bull_zone_bar = if bullish_disp_upper_wick then BarNumber() else bull_zone_bar[1];

def bear_zone_top = if bearish_disp_lower_wick then Min(open, close) else bear_zone_top[1];
def bear_zone_bottom = if bearish_disp_lower_wick then low else bear_zone_bottom[1];
def bear_zone_target = if bearish_disp_lower_wick then Max(open, close) else bear_zone_target[1];
def bear_zone_bar = if bearish_disp_lower_wick then BarNumber() else bear_zone_bar[1];

# Check if wick has been swept (for most recent zones)
def bull_wick_swept = if bullish_disp_upper_wick then no
                      else if high > bull_zone_top then yes
                      else bull_wick_swept[1];

def bear_wick_swept = if bearish_disp_lower_wick then no
                      else if low < bear_zone_bottom then yes
                      else bear_wick_swept[1];

# Wick sweep alerts (only trigger once per zone)
def bull_sweep_signal = !bull_wick_swept[1] and bull_wick_swept and (BarNumber() - bull_zone_bar) < 50;
def bear_sweep_signal = !bear_wick_swept[1] and bear_wick_swept and (BarNumber() - bear_zone_bar) < 50;

#--- Visualization ---#

# Highlight displacement candles
AssignPriceColor(
    if !show_displacement_candles then Color.CURRENT
    else if is_displacement and is_bullish then GlobalColor("BullDispColor")
    else if is_displacement and is_bearish then GlobalColor("BearDispColor")
    else Color.CURRENT
);

# Show wick zones using clouds (for most recent zone within 50 bars)
def show_bull_zone = show_wick_zones and (BarNumber() - bull_zone_bar) < 50;
def show_bear_zone = show_wick_zones and (BarNumber() - bear_zone_bar) < 50;

AddCloud(
    if show_bull_zone then bull_zone_top else Double.NaN,
    if show_bull_zone then bull_zone_bottom else Double.NaN,
    GlobalColor("ShortZone"),
    GlobalColor("ShortZone")
);

AddCloud(
    if show_bear_zone then bear_zone_top else Double.NaN,
    if show_bear_zone then bear_zone_bottom else Double.NaN,
    GlobalColor("LongZone"),
    GlobalColor("LongZone")
);

# Target lines
plot BullTarget = if show_targets and show_bull_zone then bull_zone_target else Double.NaN;
BullTarget.SetDefaultColor(GlobalColor("TargetColor"));
BullTarget.SetStyle(Curve.SHORT_DASH);
BullTarget.SetLineWeight(1);

plot BearTarget = if show_targets and show_bear_zone then bear_zone_target else Double.NaN;
BearTarget.SetDefaultColor(GlobalColor("TargetColor"));
BearTarget.SetStyle(Curve.SHORT_DASH);
BearTarget.SetLineWeight(1);

# Entry signals
AddChartBubble(
    show_labels and bullish_disp_upper_wick,
    high,
    "SHORT\nZONE",
    Color.RED,
    yes
);

AddChartBubble(
    show_labels and bearish_disp_lower_wick,
    low,
    "LONG\nZONE",
    Color.GREEN,
    no
);

AddChartBubble(
    show_labels and bull_sweep_signal,
    high,
    "→ SHORT",
    Color.RED,
    yes
);

AddChartBubble(
    show_labels and bear_sweep_signal,
    low,
    "→ LONG",
    Color.GREEN,
    no
);

#--- Alerts ---#

Alert(bullish_disp_upper_wick, "New SHORT Zone - Bullish displacement with upper wick", Alert.BAR, Sound.Ring);
Alert(bearish_disp_lower_wick, "New LONG Zone - Bearish displacement with lower wick", Alert.BAR, Sound.Ring);
Alert(bull_sweep_signal, "SHORT ENTRY - Upper wick swept!", Alert.BAR, Sound.Bell);
Alert(bear_sweep_signal, "LONG ENTRY - Lower wick swept!", Alert.BAR, Sound.Bell);

#--- Plot signals for scanner compatibility ---#

plot ShortSetup = bullish_disp_upper_wick;
plot LongSetup = bearish_disp_lower_wick;
plot ShortEntry = bull_sweep_signal;
plot LongEntry = bear_sweep_signal;

ShortSetup.Hide();
LongSetup.Hide();
ShortEntry.Hide();
LongEntry.Hide();
