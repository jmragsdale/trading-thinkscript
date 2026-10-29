# Breakout Scanner - native alert study
# Aggregation: DAY. Add to a chart or use as a one-plot Study Alert.
# The scan-safe Stock Hacker source remains breakout_scanner_thinkscript.txt.

input lookbackPeriod = 126;
input volumeMultiple = 2.0;
input minDailyGainPercent = 10.0;
input longTermMALength = 200;
input alertsOn = yes;

def validPriorClose = close[1] > 0;
def dailyChange = if validPriorClose
    then (close / close[1] - 1) * 100
    else 0;

def priorHighestHigh = Highest(high[1], lookbackPeriod);
def averageVolume = Average(volume, 20);
def longTermMA = Average(close, longTermMALength);

def isNewHigh = high >= priorHighestHigh;
def isHighVolume = averageVolume > 0 and volume >= averageVolume * volumeMultiple;
def isStrongGain = dailyChange >= minDailyGainPercent;
def aboveLongTermMA = close > longTermMA;

# Preserve the original anti-repeat intent: the high 20 bars ago must have
# been at least 5% below the current lookback high.
def isFirstBreakout = high[20] < Highest(high, lookbackPeriod) * 0.95;

plot scan =
    isNewHigh and
    isHighVolume and
    isStrongGain and
    aboveLongTermMA and
    isFirstBreakout;

Alert(
    alertsOn and scan and !scan[1],
    "Breakout: new lookback high with volume, gain, and trend filters",
    Alert.BAR,
    Sound.Ring
);
