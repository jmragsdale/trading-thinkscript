# Custom ThinkScript Library

A documented collection of thinkorswim studies, scanners, strategies and watchlist columns. Each project includes source, a description, saved defaults, usage notes and known limitations.

**52 projects · 60 current library scripts · 13 historical versions · 2 installed-version snapshots · 2 references**  
One current script is kept as a private imported source. The GitHub package contains its documentation but omits that source.

## TOS capture completed

Captured and reconciled **64 installed definitions: 61 studies, 1 strategy and 2 custom quotes**, representing 60 distinct source contents. Every installed name maps to an organized source in the [TOS reconciliation](docs/TOS_RECONCILIATION.md) and [installed inventory](tos-inventory.json).

The capture added **35 previously missing distinct scripts and 2 different installed OTE Wheel versions** to the saved-file collection. Four pairs of installed names are exact duplicates. Source was preserved unchanged; no installed script, alert or trading configuration was edited.

## Start here

- [Open the public GitHub repository](https://github.com/jmragsdale/trading-thinkscript)
- [Download the packaged library](https://github.com/jmragsdale/trading-thinkscript/releases/download/v2026.10.29/thinkscript-library-2026-10-29.zip)
- [Install a chart study, scanner, strategy or watchlist column](docs/INSTALLATION.md)
- [See all installed names, matches and version differences](docs/TOS_RECONCILIATION.md)
- [Read validation status and known limitations](docs/VALIDATION.md)
- [Prepare the collection for GitHub](docs/GITHUB.md)
- [Understand source provenance and capture coverage](docs/PROVENANCE.md)
- [Inspect source hashes, defaults and roles](inventory.json)

`.ts`, `.txt` and `.thinkscript` contain ThinkScript here. Use the current source identified by each README. Installed snapshots preserve the TOS version without replacing a newer corrected library default. Saved chart-input overrides and unsaved editor buffers are outside this source capture.

## Browse the library

### Chart studies

Custom chart indicators and visual signals; authorship is identified only where supported by the source.

| Project | Purpose |
| --- | --- |
| [AlertValue SMA Placeholder](studies/alert-value/README.md) | Plots the platform SimpleMovingAvg study with its built-in defaults. |
| [Automatic Regression Trend Lines](studies/auto-trend-lines/README.md) | Draws three pairs of regression-style channel lines using InertiaAll and whole-chart maximum deviations. |
| [Buy the Dip with EMA Confluence](studies/buy-the-dip/README.md) | Combines distance from an SMA, RSI extremes, elevated volume and 10/20/50/200 EMA stacking to mark bullish dips and bearish rallies. |
| [Displacement Detector and Candle Combinations](studies/displacement-detector/README.md) | Grades candle bodies against historical body deviation, optionally requires a fair-value gap, and marks consecutive or flat-edge displacement combinations. |
| [Displacement Wick Reversal Study](studies/displacement-wick/README.md) | Highlights large displacement candles, stores qualifying wick zones, and marks potential reversal entries when those zones are swept. |
| [EMA 3/8/20/50 Crossover Display](studies/ema-3-8-20-crossover/README.md) | Plots EMA clouds, an SMA, crossover arrows and labels comparing the moving averages and price. |
| [Eye Pattern Reversal Study](studies/eye-pattern/README.md) | Shows a fast moving average recovering above a rising slow moving average after a bounded, lower-volume pullback. Includes entry arrows, stop and target levels, and optional bar coloring. |
| [ICT Displacement Retest Study](studies/ict-displacement-retest/README.md) | Tests a prior secondary-timeframe range against ATR, a current volume contraction and a retest of the prior candle boundary. |
| [MACD-V Entry and Exit Study](studies/macd-v/README.md) | Normalizes MACD by ATR and combines momentum bands with moving-average regimes to mark buy, sell and momentum-exit conditions. |
| [30-Minute FVG with Midpoint Alerts](studies/mtf-30m-fvg/README.md) | Projects the latest active bullish and bearish 30-minute fair-value gaps and their midpoint lines onto a lower-timeframe chart. |
| [Multi-Timeframe OTE Zones](studies/mtf-ote/README.md) | Displays 62-79% retracement zones after a swing sweep and displacement, with an optional higher-timeframe range-midpoint bias filter. |
| [9 SMA Pullback Study](studies/nine-sma-pullback/README.md) | Marks bullish pullbacks to a rising 9 SMA above the 20 SMA, with consolidation, volume and price-range filters. |
| [NShape Simple Study](studies/nshape-simple/README.md) | Detects bullish and bearish three-candle impulse/retrace/continuation patterns with basic body and volume tests, entry/stop/target plots and alerts. |
| [NShape Quant-Filtered SPY Study](studies/nshape-spy/README.md) | Detects a three-candle impulse, retrace and continuation pattern with volume, EMA, session VWAP, time and range filters. Plots entry, stop and target references. |
| [Session-Zone Volume Profile](studies/session-volume-profile/README.md) | Starts a new volume profile when the chart moves among premarket, regular session and after-hours time zones. |
| [Trading Rush MACD, VWAP and EMA Display](studies/trading-rush-macd/README.md) | Plots daily VWAP, an EMA and MACD crossover arrows conditioned on VWAP side and prior MACD sign. |
| [Trading Rush MACD Test Oscillator](studies/trading-rush-macd-test/README.md) | Plots MACD value, signal and histogram with volume markers, zero-side crossover markers and alert calls. |
| [VWAP Rejection Arrows](studies/vwap-rejection/README.md) | Draws VWAP and marks bullish/bearish three-bar rejection patterns with a configurable raw-price distance. |
| [Wash and Rinse v2 Study](studies/wash-rinse-v2/README.md) | Marks a sweep of a prior reference level followed by a close back through it, displaying wash levels and extremes. |

### Stock Hacker scanners

One-plot filters with their separate chart alert/helper companions.

| Project | Purpose |
| --- | --- |
| [Breakout Scanner](scanners/breakout/README.md) | Finds new lookback highs with a strong daily gain, elevated volume, and price above a long-term moving average. |
| [Displacement Wick Scanner](scanners/displacement-wick/README.md) | Screens for new displacement-wick setups, first sweeps of stored wick levels, or both. |
| [Eye Pattern Scanner](scanners/eye-pattern/README.md) | Finds the Eye Pattern moving-average recovery with trend, volume contraction, pullback and candle-quality conditions. |
| [MACD-V Unified Scanner](scanners/macd-v/README.md) | Screens MACD-V conditions with price bounds, market regime, and entry or exit signal selection. |
| [NShape Quant-Filtered SPY Scanner](scanners/nshape-spy/README.md) | Screens the filtered three-candle NShape setup, optionally retaining recent signals for multiple bars. |
| [OTE Wheel Scanner and Chart Helper](scanners/ote-wheel/README.md) | Finds bullish or bearish 62-79% retracements after a confirmed sweep and displacement, filtered by price, dollar volume, risk distance and gaps. |
| [Warrior Eye Hybrid Scanner](scanners/warrior-eye/README.md) | Combines low-priced momentum, relative bar volume and an intraday moving-average pullback/recovery with a measured reward-to-risk filter. |
| [Wash and Rinse v2 Scanner](scanners/wash-rinse-v2/README.md) | Screens bullish, bearish or either close-back-through wash-and-rinse events using confirmed pivots or reconstructed prior-period levels. |

### Historical strategies

Hypothetical strategy research and reporting.

| Project | Purpose |
| --- | --- |
| [ORB15 MNQ Historical Research Strategy](strategies/orb15-mnq/README.md) | Models a 09:30-09:44 ET opening-range breakout, one contract and one entry per session, with Original and frozen StopCap100 variants. |
| [Wash and Rinse v2 Strategy](strategies/wash-rinse-v2/README.md) | Models next-bar-open entries after a rinse, locked stops beyond the wash extreme, R-multiple targets and optional end-of-day exits. |

### Watchlist columns

Numeric or label-based custom quotes.

| Project | Purpose |
| --- | --- |
| [Covered-Call Candidate Watchlist Labels](watchlist-columns/covered-call-screen/README.md) | Displays BUY/HOLD/AVOID labels from stock price, implied-volatility range rank, average volume, RSI, EMA trend and ATR conditions. |
| [GCR Inflection Column](watchlist-columns/gcr-inflection/README.md) | Produces a signed numeric inflection code using RSI extremes, Bollinger-band contact, and elevated volume. |

### Imported and shared studies

Source credited to community authors, installed under shared names, or containing reused components. Preserved credit does not assign a new license.

| Project | Purpose |
| --- | --- |
| [Daily ATR Label](imported-studies/atr-label/README.md) | Displays an ATR label calculated from completed bars of a selected base aggregation. |
| [CCI ATR and Supertrend Combination](imported-studies/cci-atr-supertrend/README.md) | Combines a Supertrend line with a CCI/ATR trend line and colors the result according to agreement. |
| [Dans Squeeze and Centered Oscillator Arrows](imported-studies/dans-squeeze-arrows/README.md) | Displays two centered oscillator lines/arrows with Bollinger-versus-Keltner squeeze state and optional bar painting. |
| [Multi-Indicator Dashboard Labels](imported-studies/multi-indicator-dashboard/README.md) | Combines SPY/QQQ/VXX directional-movement labels with current-symbol momentum, CCI, RSI, MOBO, EMA stacking, squeeze and Heikin-Ashi status. |
| [Naked Forex Engulfing Colors](imported-studies/naked-forex-engulfing/README.md) | Colors price bars from engulfing-style candle and prior-direction conditions. |
| [Open Interest Levels — March 1, 2022 Snapshot](imported-studies/open-interest-2022-03-01/README.md) | Plots hard-coded call and put open-interest levels and premium labels for fourteen named symbols. |
| [Globex and Regular-Session Highs/Lows](imported-studies/premarket-rth-levels/README.md) | Draws Globex, regular-session and prior regular-session extremes, with optional endpoint bubbles. |
| [Previous High, Low and Close](imported-studies/previous-high-low-close/README.md) | Displays the current daily open, previous daily close/high/low and additional offset levels on the latest chart day. |
| [Prior-Period Volume Profile](imported-studies/prior-period-volume-profile/README.md) | Displays prior-day, prior-week and prior-month volume-profile value-area and point-of-control levels. |
| [QTA Volume Profile](imported-studies/qta-volume-profile/README.md) | Displays daily volume profiles with a point of control and configurable value area. |
| [Relative Vigor Index](imported-studies/relative-vigor-index/README.md) | Plots a smoothed ratio of close-minus-open to high-minus-low, its signal line and a reference level. |
| [Blown Top, Saikou and Hikui Reversal Candles](imported-studies/reversal-candles/README.md) | Marks three reversal-candle patterns from relative range, extremes, candle body and prior-bar comparisons. |
| [Squeeze Trend Hunter / Perfect Leading Composite](imported-studies/squeeze-trend-hunter/README.md) | Combines WaveTrend, Donchian bands, squeeze/momentum displays and a centered oscillator arrow component in a lower pane. |
| [Mobius Supertrend](imported-studies/supertrend/README.md) | Plots an ATR-based alternating trend line with optional price-bar coloring and crossing bubbles. |
| [Supply/Demand Index Support and Resistance](imported-studies/supply-demand-index/README.md) | Uses a volume/price demand index to create demand support, supply resistance and overhead resistance bands. |
| [Trend Reversal ZigZag Arrows](imported-studies/trend-reversal-zigzag/README.md) | Combines 9/14/21 EMA state definitions with ZigZagHighLow-derived bullish and bearish arrows. |
| [Top Ultimate Breakout](imported-studies/ultimate-breakout/README.md) | Plots rolling breakout entry/exit bands and ATR-based target references for a selected buy or sell mode. |
| [Volatility Trailing Stop](imported-studies/volatility-trailing-stop/README.md) | Maintains an ATR trailing level using the highest close in an uptrend or lowest close in a downtrend. |
| [Volume Price Analysis](imported-studies/volume-price-analysis/README.md) | Classifies price spread, closing location, volume and trend slopes into upthrust, test, weakness and strength patterns with chart symbols and labels. |
| [ZigZag High/Low Supply and Demand](imported-studies/zigzag-supply-demand/README.md) | Plots ZigZag pivots and supply/demand references with optional reversal arrows, price/volume bubbles and alerts. |

### Private imported source

Documentation is included publicly; the individual-use-only source stays local.

| Project | Purpose |
| --- | --- |
| [Opinicus Volume Data — Local Reference](private-imports/opinicus-volume/README.md) | Shows current-day volume versus a prior 30-day average and current-bar volume versus a prior 30-bar average. |

### Reference snippets

- [GCR scanner query examples](references/gcr-scanner-queries/README.md)
- [Warrior Eye workspace notes](references/warrior-eye-workspace/README.md)

## Maintain the collection

```bash
python3 tools/verify_library.py
```

The checker validates file hashes, source metadata, project membership, relative documentation links, scanner structure and installed-alias mappings. It also works in the public ZIP, where the private source is intentionally absent. Update the inventory and relevant README together when intentionally editing a source.

## Validation status

Source capture is complete for the local TOS user-defined Studies/Strategies lists and the separate custom-quote cache as observed October 29, 2026. A fresh native compilation, replay, alert or performance test was not performed. Current OTE Wheel installations retain an older event gate; certain imported studies use whole-chart or future-dependent calculations; the open-interest overlay is a 2022 snapshot. Read the individual project notes before interpreting results.

## Performance metrics

[Performance evidence and coverage](docs/PERFORMANCE.md) documents saved results for 13 projects, including signal-event studies, related Python models and native Pine exports. Each project README links its status. The remaining 39 have no matched quantitative results found. No exact-source native Thinkorswim profitability is verified. Source dates, costs, selection bias, withdrawn claims and version limits are recorded in [performance.json](performance.json).

<!-- STANDARDIZED PERFORMANCE: START -->
## Standardized performance records

The existing evidence is normalized into **52 historical configurations across 13 projects**, with `run.json`, `summary.json`, generated Markdown and available event/trade CSVs. See the [run index](docs/performance/RUNS.md) and [format](docs/performance/FORMAT.md). Unknown values remain null with reasons; related models, withdrawn results and historical cost scenarios stay distinguishable. No new backtests were run.
<!-- STANDARDIZED PERFORMANCE: END -->
