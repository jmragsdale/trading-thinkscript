# MACD-V Unified - native alert study
# Add to a chart at the intended aggregation or use as a one-plot Study Alert.
# The scan-safe source remains MACDV_Scan_Unified_Regime_SignalType.ts.

input fastLen    = 12;
input slowLen    = 26;
input sigLen     = 9;
input atrLen     = 26;
input ema50Len   = 50;
input ema200Len  = 200;

input strongThreshold  = 50;
input extremeThreshold = 150;

input priceMin = 2.0;
input priceMax = 20.0;

# Dropdowns
input regime = { default Any, Bull, Bear, Stage2, Stage4, Stage3 };
input signalType = { default Both, BuyOnly, SellOnly, ExitLong, ExitShort };
input alertsOn = yes;

def c = close;
def h = high;
def l = low;

def withinPrice = c >= priceMin and c <= priceMax;

# MACD-V core
def macdRaw = ExpAverage(c, fastLen) - ExpAverage(c, slowLen);
def atr = Average(TrueRange(h, c, l), atrLen);
def macdv = if atr != 0 then (macdRaw / atr) * 100 else 0;
def signal = ExpAverage(macdv, sigLen);

# Trend structures
def ema50  = ExpAverage(c, ema50Len);
def ema200 = ExpAverage(c, ema200Len);

def bull = c > ema200;
def bear = c < ema200;

def stage2 = c > ema50 and ema50 > ema200;
def stage4 = c < ema50 and ema50 < ema200;
def stage3 = (c < ema50 and c > ema200) or (c > ema50 and c < ema200);

# Bands
def inStrongUp = macdv >  strongThreshold and macdv <  extremeThreshold;
def inStrongDn = macdv < -strongThreshold and macdv > -extremeThreshold;
def inExtremeUp = macdv >=  extremeThreshold;
def inExtremeDn = macdv <= -extremeThreshold;

# Crosses
def crossUp = macdv crosses above signal;
def crossDn = macdv crosses below signal;

# Entry signals
def buyCond  = bull and inStrongUp and crossUp;
def sellCond = bear and inStrongDn and crossDn;

# Exit signals (momentum roll-over from strength/extreme)
def exitLongCond  = bull and ( (macdv > strongThreshold and crossDn) or (inExtremeUp and crossDn) );
def exitShortCond = bear and ( (macdv < -strongThreshold and crossUp) or (inExtremeDn and crossUp) );

# Regime gate
def regimePass =
if regime == regime.Any then 1
else if regime == regime.Bull then bull
else if regime == regime.Bear then bear
else if regime == regime.Stage2 then stage2
else if regime == regime.Stage4 then stage4
else if regime == regime.Stage3 then stage3
else 0;

# Signal selector
def signalPass =
if signalType == signalType.Both then (buyCond or sellCond)
else if signalType == signalType.BuyOnly then buyCond
else if signalType == signalType.SellOnly then sellCond
else if signalType == signalType.ExitLong then exitLongCond
else if signalType == signalType.ExitShort then exitShortCond
else 0;

plot scan = withinPrice and regimePass and signalPass;

def buySelected = signalType == signalType.Both or signalType == signalType.BuyOnly;
def sellSelected = signalType == signalType.Both or signalType == signalType.SellOnly;
def exitLongSelected = signalType == signalType.ExitLong;
def exitShortSelected = signalType == signalType.ExitShort;

Alert(
    alertsOn and withinPrice and regimePass and buySelected and buyCond,
    "MACD-V: BUY signal in selected regime",
    Alert.BAR,
    Sound.Ring
);
Alert(
    alertsOn and withinPrice and regimePass and sellSelected and sellCond,
    "MACD-V: SELL signal in selected regime",
    Alert.BAR,
    Sound.Bell
);
Alert(
    alertsOn and withinPrice and regimePass and exitLongSelected and exitLongCond,
    "MACD-V: EXIT LONG signal",
    Alert.BAR,
    Sound.Chimes
);
Alert(
    alertsOn and withinPrice and regimePass and exitShortSelected and exitShortCond,
    "MACD-V: EXIT SHORT signal",
    Alert.BAR,
    Sound.Chimes
);
