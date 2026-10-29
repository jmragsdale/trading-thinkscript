# Displacement Wick Reversal Scanner - ThinkScript
# Scans for displacement candles with significant wicks
# Use in ThinkorSwim Stock Hacker / Custom Scan

#--- Inputs ---#

input displacement_length = 100;
input min_displacement_strength = 1; # 1-4
input displacement_require_fvg = no;
input min_wick_pct = 20.0;
input min_wick_body_ratio = 0.25;
input scan_for = {default "New Setups", "Wick Sweeps", "Both"};

#--- Displacement Calculation ---#

def body = AbsValue(close - open);
def candleRange = high - low;
def std = StDev(body, displacement_length);

# Check for FVG
def fvg_bullish = high[2] < low;
def fvg_bearish = low[2] > high;
def has_fvg = fvg_bullish or fvg_bearish;

# Displacement strength
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

def upper_wick = high - Max(open, close);
def lower_wick = Min(open, close) - low;
def upper_wick_pct = if candleRange > 0 then (upper_wick / candleRange) * 100 else 0;
def lower_wick_pct = if candleRange > 0 then (lower_wick / candleRange) * 100 else 0;
def upper_wick_body_ratio = if body > 0 then upper_wick / body else 0;
def lower_wick_body_ratio = if body > 0 then lower_wick / body else 0;

# Significant wicks
def bullish_disp_upper_wick = is_displacement and is_bullish and
                               upper_wick_pct >= min_wick_pct and
                               upper_wick_body_ratio >= min_wick_body_ratio;

def bearish_disp_lower_wick = is_displacement and is_bearish and
                               lower_wick_pct >= min_wick_pct and
                               lower_wick_body_ratio >= min_wick_body_ratio;

#--- Zone Tracking ---#

def bull_zone_top = if bullish_disp_upper_wick then high else bull_zone_top[1];
def bull_zone_bar = if bullish_disp_upper_wick then BarNumber() else bull_zone_bar[1];

def bear_zone_bottom = if bearish_disp_lower_wick then low else bear_zone_bottom[1];
def bear_zone_bar = if bearish_disp_lower_wick then BarNumber() else bear_zone_bar[1];

# Wick sweeps
def bull_wick_swept = if bullish_disp_upper_wick then no
                      else if high > bull_zone_top then yes
                      else bull_wick_swept[1];

def bear_wick_swept = if bearish_disp_lower_wick then no
                      else if low < bear_zone_bottom then yes
                      else bear_wick_swept[1];

def bull_sweep_signal = !bull_wick_swept[1] and bull_wick_swept and (BarNumber() - bull_zone_bar) < 50;
def bear_sweep_signal = !bear_wick_swept[1] and bear_wick_swept and (BarNumber() - bear_zone_bar) < 50;

#--- Scanner Signals ---#

# New setups (displacement candles with wicks formed)
def new_short_setup = bullish_disp_upper_wick;
def new_long_setup = bearish_disp_lower_wick;

# Active wick sweeps (entry signals)
def short_entry = bull_sweep_signal;
def long_entry = bear_sweep_signal;

#--- Scanner Output ---#

plot scan_signal =
    if scan_for == scan_for."New Setups" then (new_short_setup or new_long_setup)
    else if scan_for == scan_for."Wick Sweeps" then (short_entry or long_entry)
    else (new_short_setup or new_long_setup or short_entry or long_entry);

# Additional plots for filtering
plot ShortSetup = new_short_setup;
plot LongSetup = new_long_setup;
plot ShortEntry = short_entry;
plot LongEntry = long_entry;
plot DisplacementStrength = displacement_strength;

# Labels for scan results (optional)
AddLabel(yes,
    if new_short_setup then "SHORT SETUP"
    else if new_long_setup then "LONG SETUP"
    else if short_entry then "SHORT ENTRY"
    else if long_entry then "LONG ENTRY"
    else "No Signal",
    if new_short_setup or short_entry then Color.RED
    else if new_long_setup or long_entry then Color.GREEN
    else Color.GRAY
);
