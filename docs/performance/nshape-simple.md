# Simple NShape: historical SPY model

**Historical Python SPY underlying model, not native Thinkorswim results.** July 16, 2026 report; input July 12, 2021–July 10, 2026, one-minute OHLCV aggregated to 2-minute bars. 719 pattern signals (363 bullish / 356 bearish), next-open entry, candle-2 extreme stop, RTH signal window 09:35–15:30 ET, stop first on ambiguous bars.

| Target / maximum hold | Signals | Win rate | Mean SPY points | Mean R | Profit factor |
| --- | ---: | ---: | ---: | ---: | ---: |
| 0.5R / 15 bars | 719 | 64.12% | -0.0254 | -0.0342 | 0.8641 |
| 1R / 15 bars | 719 | 47.29% | -0.0236 | -0.0553 | 0.9076 |
| 2R / 15 bars | 719 | 37.00% | -0.0166 | -0.0544 | 0.9423 |

These are alternative exits on the same signal population, not independent samples. A higher hit rate at the smaller target did not produce positive expectancy. Reported model figures do not establish option P&L or realistic execution costs. The current simple ThinkScript marks a pattern; it is not the Python stop/target/time-exit harness, and no exact hash/runtime parity has been established. No equity curve or native TOS drawdown was verified. The filtered SPY project has separate results and must not be substituted for this unfiltered version.

## Saved evidence

- [nshape-simple-report](evidence/nshape-simple-report.txt)
- [nshape-simple-summary](evidence/nshape-simple-summary.csv)

Source locations, original hashes and published evidence hashes are in the [performance registry](../../performance.json). Evidence files preserve historical wording; superseded conclusions in them are not endorsed.

<!-- STANDARDIZED PERFORMANCE: START -->
## Standardized records

16 saved configurations use the [common format](FORMAT.md). Records retain their platform, costs, exact-source relationship, evidence status and missing-field reasons. No new backtest was run.

| Instrument | Configuration | Type | Status | Files |
| --- | --- | --- | --- | --- |
| SPY | target-0.5r-hold-3 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-0-5r-hold-3-95b70345cc79/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-0-5r-hold-3-95b70345cc79/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-0-5r-hold-3-95b70345cc79/summary.json) |
| SPY | target-0.5r-hold-5 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-0-5r-hold-5-f6734e501a8e/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-0-5r-hold-5-f6734e501a8e/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-0-5r-hold-5-f6734e501a8e/summary.json) |
| SPY | target-0.5r-hold-10 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-0-5r-hold-10-770784695f45/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-0-5r-hold-10-770784695f45/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-0-5r-hold-10-770784695f45/summary.json) |
| SPY | target-0.5r-hold-15 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-0-5r-hold-15-f56cf2341b24/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-0-5r-hold-15-f56cf2341b24/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-0-5r-hold-15-f56cf2341b24/summary.json) |
| SPY | target-1r-hold-3 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-1r-hold-3-fca7d9d89029/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-1r-hold-3-fca7d9d89029/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-1r-hold-3-fca7d9d89029/summary.json) |
| SPY | target-1r-hold-5 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-1r-hold-5-834d6b61da8e/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-1r-hold-5-834d6b61da8e/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-1r-hold-5-834d6b61da8e/summary.json) |
| SPY | target-1r-hold-10 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-1r-hold-10-ae98693316fb/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-1r-hold-10-ae98693316fb/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-1r-hold-10-ae98693316fb/summary.json) |
| SPY | target-1r-hold-15 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-1r-hold-15-4eff4916316a/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-1r-hold-15-4eff4916316a/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-1r-hold-15-4eff4916316a/summary.json) |
| SPY | target-1.5r-hold-3 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-1-5r-hold-3-513ff0c31837/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-1-5r-hold-3-513ff0c31837/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-1-5r-hold-3-513ff0c31837/summary.json) |
| SPY | target-1.5r-hold-5 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-1-5r-hold-5-33f856724553/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-1-5r-hold-5-33f856724553/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-1-5r-hold-5-33f856724553/summary.json) |
| SPY | target-1.5r-hold-10 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-1-5r-hold-10-7732c516720a/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-1-5r-hold-10-7732c516720a/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-1-5r-hold-10-7732c516720a/summary.json) |
| SPY | target-1.5r-hold-15 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-1-5r-hold-15-ae39cdf4b9da/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-1-5r-hold-15-ae39cdf4b9da/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-1-5r-hold-15-ae39cdf4b9da/summary.json) |
| SPY | target-2r-hold-3 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-2r-hold-3-400e6fd9cf7b/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-2r-hold-3-400e6fd9cf7b/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-2r-hold-3-400e6fd9cf7b/summary.json) |
| SPY | target-2r-hold-5 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-2r-hold-5-94eb26f6743f/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-2r-hold-5-94eb26f6743f/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-2r-hold-5-94eb26f6743f/summary.json) |
| SPY | target-2r-hold-10 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-2r-hold-10-041cf3d65dc3/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-2r-hold-10-041cf3d65dc3/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-2r-hold-10-041cf3d65dc3/summary.json) |
| SPY | target-2r-hold-15 | strategy | reported | [Summary](runs/nshape-simple-2026-07-16-spy-target-2r-hold-15-cbaa6d9bf4e0/PERFORMANCE.md) · [Run JSON](runs/nshape-simple-2026-07-16-spy-target-2r-hold-15-cbaa6d9bf4e0/run.json) · [Metrics JSON](runs/nshape-simple-2026-07-16-spy-target-2r-hold-15-cbaa6d9bf4e0/summary.json) |
<!-- STANDARDIZED PERFORMANCE: END -->
