# MACD-V Signals (Chart Study with Entry & Exit Alerts)
# Works on all timeframes (aggregation is chosen in UI).

declare upper;

input fastLen = 12;
input slowLen = 26;
input sigLen  = 9;
input atrLen  = 26;
input ema200Len = 200;
input ema50Len  = 50;

input strongThreshold = 50;     # "strong momentum" band
input extremeThreshold = 150;   # OB/OS band
input showLabels = yes;
input showArrows = yes;
input enableExitAlerts = yes;   # NEW: turn exit alerts on/off

def c = close;
def h = high;
def l = low;

def macdRaw = ExpAverage(c, fastLen) - ExpAverage(c, slowLen);
def atr = Average(TrueRange(h, c, l), atrLen);
def macdv = if atr != 0 then (macdRaw / atr) * 100 else 0;
def signal = ExpAverage(macdv, sigLen);

# Trend Regimes
def ema50  = ExpAverage(c, ema50Len);
def ema200 = ExpAverage(c, ema200Len);

def stage2 = c > ema50 and ema50 > ema200;         # strong uptrend
def stage4 = c < ema50 and ema50 < ema200;         # strong downtrend
def stage3 = (c < ema50 and c > ema200) or
             (c > ema50 and c < ema200);           # transition / range
def bull = c > ema200;
def bear = c < ema200;

# Ranges per MACD-V framework
def inStrongUp = macdv >  strongThreshold and macdv <  extremeThreshold;
def inStrongDn = macdv < -strongThreshold and macdv > -extremeThreshold;
def inExtremeUp = macdv >=  extremeThreshold;
def inExtremeDn = macdv <= -extremeThreshold;

# Cross conditions
def crossUp = macdv crosses above signal;
def crossDn = macdv crosses below signal;

# Entries
def buyCond = bull and inStrongUp and crossUp;
def sellCond = bear and inStrongDn and crossDn;

# Exits (momentum roll-over from strength/extreme)
def exitLong  = bull and ( (macdv > strongThreshold and crossDn) or (inExtremeUp and crossDn) );
def exitShort = bear and ( (macdv < -strongThreshold and crossUp) or (inExtremeDn and crossUp) );

# Plots / Arrows
plot BuySignal = if showArrows and buyCond then l else Double.NaN;
BuySignal.SetPaintingStrategy(PaintingStrategy.ARROW_UP);
BuySignal.SetDefaultColor(Color.GREEN);
BuySignal.SetLineWeight(3);

plot SellSignal = if showArrows and sellCond then h else Double.NaN;
SellSignal.SetPaintingStrategy(PaintingStrategy.ARROW_DOWN);
SellSignal.SetDefaultColor(Color.RED);
SellSignal.SetLineWeight(3);

plot ExitLongSignal = if showArrows and enableExitAlerts and exitLong then h else Double.NaN;
ExitLongSignal.SetPaintingStrategy(PaintingStrategy.ARROW_DOWN);
ExitLongSignal.SetDefaultColor(Color.YELLOW);
ExitLongSignal.SetLineWeight(2);

plot ExitShortSignal = if showArrows and enableExitAlerts and exitShort then l else Double.NaN;
ExitShortSignal.SetPaintingStrategy(PaintingStrategy.ARROW_UP);
ExitShortSignal.SetDefaultColor(Color.YELLOW);
ExitShortSignal.SetLineWeight(2);

# Alerts
Alert(buyCond, "MACD-V BUY: strong momentum up (bull regime)", Alert.BAR, Sound.Ring);
Alert(sellCond, "MACD-V SELL: strong momentum down (bear regime)", Alert.BAR, Sound.Bell);
Alert(enableExitAlerts and exitLong, "MACD-V EXIT LONG: momentum rolling down from strength/extreme", Alert.BAR, Sound.Chimes);
Alert(enableExitAlerts and exitShort, "MACD-V EXIT SHORT: momentum rolling up from weakness/extreme", Alert.BAR, Sound.Chimes);

# Labels
AddLabel(showLabels, "MACD-V: " + Round(macdv, 1) + "  Sig: " + Round(signal, 1), Color.GRAY);
AddLabel(showLabels and bull, "Regime: Bull (EMA200)", Color.GREEN);
AddLabel(showLabels and bear, "Regime: Bear (EMA200)", Color.RED);
AddLabel(showLabels and stage2, "Stage-2 Uptrend", Color.GREEN);
AddLabel(showLabels and stage3, "Stage-3 Transition", Color.YELLOW);
AddLabel(showLabels and stage4, "Stage-4 Downtrend", Color.RED);
AddLabel(showLabels and inExtremeUp, "Risk: Overbought (>= " + extremeThreshold + ")", Color.ORANGE);
AddLabel(showLabels and inExtremeDn, "Risk: Oversold (<= -" + extremeThreshold + ")", Color.CYAN);
