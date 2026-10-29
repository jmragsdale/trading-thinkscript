# Performance evidence

Existing results were reviewed October 29, 2026. **13 of 52 projects have related quantitative evidence; 39 have no matched results found. None has verified native Thinkorswim performance in this library.** Saved signal studies, Python models and native Pine hypothetical exports are labeled separately; no new backtest or live test was run.

## Available results and their limits

| Family | Available evidence | Important qualification |
| --- | --- | --- |
| [NShape filtered SPY](performance/nshape-spy.md) | Historical selected model: 222 trades, PF 1.6046; later offline event tables | Holdout used in selection; costs not verified for older table. Later event study is a different protocol. No options P&L. |
| [Simple NShape](performance/nshape-simple.md) | SPY 2m: 719 signals, 1R/15-bar PF 0.9076 | Related Python model; unknown realistic friction; no TOS execution parity. |
| [MACD-V](performance/macdv.md) | All pooled MNQ/SPY forward-return horizons | Signal-event endpoints, not stop/target trades; all pooled mean net returns negative. |
| [Displacement wick](performance/displacement-wick.md) | MNQ/SPY offline signal tables; revised 39-trade model mean -0.23R | Different models and settings; older ~84% pass claim withdrawn. |
| [ORB15 MNQ](performance/orb15-mnq.md) | Native Pine 19 trades/mode: Original +$98.40; cap +$250.90 | Small sample; Pine/TOS parity unresolved; historical five-year totals not rerun after fixture fixes. |
| [MTF OTE](performance/mtf-ote.md) | Clean related Python model: MNQ net PF 0.923 | Chart study has no complete execution system. Older leak-derived package claims void. |
| [OTE Wheel](performance/ote-wheel.md) | Historical daily pooled tables | Predates lookahead remediation; no clean daily rerun found. No wheel/option returns. |
| [Wash and Rinse v2](performance/wash-rinse-v2.md) | Different Python model: 32,641 trades, PF 0.733459 | Different source rules/target; cannot assign its P&L to current ThinkScripts. |

Results are not comparable rankings: instruments, dates, event/trade definitions, costs and execution rules differ. PF is profit factor; R is P&L divided by modeled initial trade risk. A signal frequency or positive endpoint fraction is not a strategy win rate. Closed-trade drawdown excludes unrealized excursions. Missing metrics remain unknown.

No matched source-specific quantitative results were found for the newly captured shared/imported indicators or custom quote columns. Source counters, mark-to-current labels, option prices, oscillator accuracy claims and quality scores are not verified return series. In particular NineSMAPullback labels are not daily realized P&L.

## Coverage of every project

| Project | Evidence status |
| --- | --- |
| [Daily ATR Label](../imported-studies/atr-label/README.md) | No matched quantitative evidence found |
| [CCI ATR and Supertrend Combination](../imported-studies/cci-atr-supertrend/README.md) | No matched quantitative evidence found |
| [Dans Squeeze and Centered Oscillator Arrows](../imported-studies/dans-squeeze-arrows/README.md) | No matched quantitative evidence found |
| [Multi-Indicator Dashboard Labels](../imported-studies/multi-indicator-dashboard/README.md) | No matched quantitative evidence found |
| [Naked Forex Engulfing Colors](../imported-studies/naked-forex-engulfing/README.md) | No matched quantitative evidence found |
| [Open Interest Levels — March 1, 2022 Snapshot](../imported-studies/open-interest-2022-03-01/README.md) | No matched quantitative evidence found |
| [Globex and Regular-Session Highs/Lows](../imported-studies/premarket-rth-levels/README.md) | No matched quantitative evidence found |
| [Previous High, Low and Close](../imported-studies/previous-high-low-close/README.md) | No matched quantitative evidence found |
| [Prior-Period Volume Profile](../imported-studies/prior-period-volume-profile/README.md) | No matched quantitative evidence found |
| [QTA Volume Profile](../imported-studies/qta-volume-profile/README.md) | No matched quantitative evidence found |
| [Relative Vigor Index](../imported-studies/relative-vigor-index/README.md) | No matched quantitative evidence found |
| [Blown Top, Saikou and Hikui Reversal Candles](../imported-studies/reversal-candles/README.md) | No matched quantitative evidence found |
| [Squeeze Trend Hunter / Perfect Leading Composite](../imported-studies/squeeze-trend-hunter/README.md) | No matched quantitative evidence found |
| [Mobius Supertrend](../imported-studies/supertrend/README.md) | No matched quantitative evidence found |
| [Supply/Demand Index Support and Resistance](../imported-studies/supply-demand-index/README.md) | No matched quantitative evidence found |
| [Trend Reversal ZigZag Arrows](../imported-studies/trend-reversal-zigzag/README.md) | No matched quantitative evidence found |
| [Top Ultimate Breakout](../imported-studies/ultimate-breakout/README.md) | No matched quantitative evidence found |
| [Volatility Trailing Stop](../imported-studies/volatility-trailing-stop/README.md) | No matched quantitative evidence found |
| [Volume Price Analysis](../imported-studies/volume-price-analysis/README.md) | No matched quantitative evidence found |
| [ZigZag High/Low Supply and Demand](../imported-studies/zigzag-supply-demand/README.md) | No matched quantitative evidence found |
| [Opinicus Volume Data — Local Reference](../private-imports/opinicus-volume/README.md) | No matched quantitative evidence found |
| [Breakout Scanner](../scanners/breakout/README.md) | No matched quantitative evidence found |
| [Displacement Wick Scanner](../scanners/displacement-wick/README.md) | [offline signal event study](../docs/performance/displacement-wick.md) |
| [Eye Pattern Scanner](../scanners/eye-pattern/README.md) | No matched quantitative evidence found |
| [MACD-V Unified Scanner](../scanners/macd-v/README.md) | [offline signal event study](../docs/performance/macdv.md) |
| [NShape Quant-Filtered SPY Scanner](../scanners/nshape-spy/README.md) | [offline signal event study](../docs/performance/nshape-spy.md) |
| [OTE Wheel Scanner and Chart Helper](../scanners/ote-wheel/README.md) | [historical unrevalidated lineage](../docs/performance/ote-wheel.md) |
| [Warrior Eye Hybrid Scanner](../scanners/warrior-eye/README.md) | No matched quantitative evidence found |
| [Wash and Rinse v2 Scanner](../scanners/wash-rinse-v2/README.md) | [different model context only](../docs/performance/wash-rinse-v2.md) |
| [ORB15 MNQ Historical Research Strategy](../strategies/orb15-mnq/README.md) | [related native pine simulation](../docs/performance/orb15-mnq.md) |
| [Wash and Rinse v2 Strategy](../strategies/wash-rinse-v2/README.md) | [different model context only](../docs/performance/wash-rinse-v2.md) |
| [AlertValue SMA Placeholder](../studies/alert-value/README.md) | No matched quantitative evidence found |
| [Automatic Regression Trend Lines](../studies/auto-trend-lines/README.md) | No matched quantitative evidence found |
| [Buy the Dip with EMA Confluence](../studies/buy-the-dip/README.md) | No matched quantitative evidence found |
| [Displacement Detector and Candle Combinations](../studies/displacement-detector/README.md) | No matched quantitative evidence found |
| [Displacement Wick Reversal Study](../studies/displacement-wick/README.md) | [offline signal event study](../docs/performance/displacement-wick.md) |
| [EMA 3/8/20/50 Crossover Display](../studies/ema-3-8-20-crossover/README.md) | No matched quantitative evidence found |
| [Eye Pattern Reversal Study](../studies/eye-pattern/README.md) | No matched quantitative evidence found |
| [ICT Displacement Retest Study](../studies/ict-displacement-retest/README.md) | No matched quantitative evidence found |
| [MACD-V Entry and Exit Study](../studies/macd-v/README.md) | [offline signal event study](../docs/performance/macdv.md) |
| [30-Minute FVG with Midpoint Alerts](../studies/mtf-30m-fvg/README.md) | No matched quantitative evidence found |
| [Multi-Timeframe OTE Zones](../studies/mtf-ote/README.md) | [related clean python execution model](../docs/performance/mtf-ote.md) |
| [9 SMA Pullback Study](../studies/nine-sma-pullback/README.md) | No matched quantitative evidence found |
| [NShape Simple Study](../studies/nshape-simple/README.md) | [related python model](../docs/performance/nshape-simple.md) |
| [NShape Quant-Filtered SPY Study](../studies/nshape-spy/README.md) | [offline signal event study](../docs/performance/nshape-spy.md) |
| [Session-Zone Volume Profile](../studies/session-volume-profile/README.md) | No matched quantitative evidence found |
| [Trading Rush MACD, VWAP and EMA Display](../studies/trading-rush-macd/README.md) | No matched quantitative evidence found |
| [Trading Rush MACD Test Oscillator](../studies/trading-rush-macd-test/README.md) | No matched quantitative evidence found |
| [VWAP Rejection Arrows](../studies/vwap-rejection/README.md) | No matched quantitative evidence found |
| [Wash and Rinse v2 Study](../studies/wash-rinse-v2/README.md) | [different model context only](../docs/performance/wash-rinse-v2.md) |
| [Covered-Call Candidate Watchlist Labels](../watchlist-columns/covered-call-screen/README.md) | No matched quantitative evidence found |
| [GCR Inflection Column](../watchlist-columns/gcr-inflection/README.md) | No matched quantitative evidence found |

## Evidence and verification

The [machine-readable registry](../performance.json) maps all projects to evidence profiles, portable original locations and SHA-256 hashes. [Saved evidence](performance/evidence/) includes aggregate tables and hypothetical trade exports, not raw market-data feeds or account exports. Home paths were redacted; original and distributed-file hashes are recorded separately. Original report wording may include superseded conclusions: use the assessment notes above.

During organization, the offline study's frozen ThinkScript hashes were checked against retained files and the consolidation manifest for the retired older wick scanner. The selected NShape full-sample row was checked against its saved sweep. ORB net totals/wins were reconciled to exit rows, and PF/closed-trade drawdown calculated from those rows. No historical strategy was rerun. See [validation scope](VALIDATION.md).

<!-- STANDARDIZED PERFORMANCE: START -->
## Standardized data

The existing evidence now uses the [common format](performance/FORMAT.md). Browse the [historical run index](performance/RUNS.md) for run configurations, generated summaries and available observation CSVs. Results retain their original assumptions; standardization does not make unrelated tests comparable or establish native TOS performance.
<!-- STANDARDIZED PERFORMANCE: END -->
