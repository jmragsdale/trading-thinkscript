# ============================================================
# Wash & Rinse v2 SCANNER — sourced close-through rules
# Scan > Stock Hacker > Study filter > Custom > thinkScript Editor
# Keep ONLY the plot you want (BearishWR or BullishWR) "is true".
# Set aggregation in the filter dropdown (D for swing, 5m intraday).
# ============================================================

input levelMode = {default Swing, PrevDay};
input pivotStrength = 5;

def isPH = high[pivotStrength] == Highest(high, 2 * pivotStrength + 1);
def isPL = low[pivotStrength]  == Lowest(low,  2 * pivotStrength + 1);
def lastPH = CompoundValue(1, if isPH then high[pivotStrength] else lastPH[1], high);
def lastPL = CompoundValue(1, if isPL then low[pivotStrength]  else lastPL[1], low);

def refH = if levelMode == levelMode.PrevDay then high(period = AggregationPeriod.DAY)[1] else lastPH;
def refL = if levelMode == levelMode.PrevDay then low(period = AggregationPeriod.DAY)[1]  else lastPL;

def lvlH = CompoundValue(1,
    if lvlH[1] == 0 then (if close > refH and close[1] <= refH then refH else 0)
    else if close < lvlH[1] then 0
    else lvlH[1], 0);

def lvlL = CompoundValue(1,
    if lvlL[1] == 0 then (if close < refL and close[1] >= refL then refL else 0)
    else if close > lvlL[1] then 0
    else lvlL[1], 0);

plot BearishWR = lvlH[1] > 0 and close < lvlH[1];
plot BullishWR = lvlL[1] > 0 and close > lvlL[1];
