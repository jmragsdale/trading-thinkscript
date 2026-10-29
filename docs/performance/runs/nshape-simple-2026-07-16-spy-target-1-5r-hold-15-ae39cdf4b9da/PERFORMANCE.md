# nshape-simple — target-1.5r-hold-15

Generated from saved evidence; no new backtest. Run `nshape-simple-2026-07-16-spy-target-1-5r-hold-15-ae39cdf4b9da`.

| Context | Recorded value |
| --- | --- |
| Instrument / aggregation | SPY / 2 minutes |
| Engine | python (version: Unknown) |
| Report date | 2026-07-16 |
| Dataset period | 2021-07-12 through 2026-07-10 |
| Session | RTH 09:35–15:30 ET signal window |
| P&L basis | unspecified |
| Cost convention | Realistic cost deduction not established by retrieved report. |
| Source relationship | related-model |
| Evidence status | reported |
| Native Thinkorswim performance | Unverified |

## Metrics

All figures retain their original basis. Unknown means unavailable, not zero. Exact values, units, methods and missing reasons for every field are in [summary.json](summary.json).

| Slice | Metric | Value | Unit | Method |
| --- | --- | ---: | --- | --- |
| split=full, side=all, target_r=1.5, maximum_hold_bars=15 | `signals` | 719 | count | reported |
| split=full, side=all, target_r=1.5, maximum_hold_bars=15 | `completed_trades` | 719 | count | reported |
| split=full, side=all, target_r=1.5, maximum_hold_bars=15 | `win_rate_pct` | 39.5 | percent | reported |
| split=full, side=all, target_r=1.5, maximum_hold_bars=15 | `profit_factor_unspecified` | 0.9109 | ratio | reported |
| split=full, side=all, target_r=1.5, maximum_hold_bars=15 | `mean_points_unspecified` | -0.025 | points | reported |
| split=full, side=all, target_r=1.5, maximum_hold_bars=15 | `mean_r_unspecified` | -0.0723 | R | reported |
| split=full, side=long, target_r=1.5, maximum_hold_bars=15 | `signals` | 363 | count | reported |
| split=full, side=long, target_r=1.5, maximum_hold_bars=15 | `completed_trades` | 363 | count | reported |
| split=full, side=long, target_r=1.5, maximum_hold_bars=15 | `win_rate_pct` | 39.39 | percent | reported |
| split=full, side=long, target_r=1.5, maximum_hold_bars=15 | `profit_factor_unspecified` | 0.8769 | ratio | reported |
| split=full, side=long, target_r=1.5, maximum_hold_bars=15 | `mean_points_unspecified` | -0.033 | points | reported |
| split=full, side=long, target_r=1.5, maximum_hold_bars=15 | `mean_r_unspecified` | -0.0643 | R | reported |
| split=full, side=short, target_r=1.5, maximum_hold_bars=15 | `signals` | 356 | count | reported |
| split=full, side=short, target_r=1.5, maximum_hold_bars=15 | `completed_trades` | 356 | count | reported |
| split=full, side=short, target_r=1.5, maximum_hold_bars=15 | `win_rate_pct` | 39.61 | percent | reported |
| split=full, side=short, target_r=1.5, maximum_hold_bars=15 | `profit_factor_unspecified` | 0.9425 | ratio | reported |
| split=full, side=short, target_r=1.5, maximum_hold_bars=15 | `mean_points_unspecified` | -0.0169 | points | reported |
| split=full, side=short, target_r=1.5, maximum_hold_bars=15 | `mean_r_unspecified` | -0.0804 | R | reported |

## Validation and limits

- No native ThinkScript execution parity.
- Saved P&L columns do not establish realistic fee/slippage deduction; basis remains unspecified.
- All/long/short slices overlap; do not sum them.

Native TOS compilation, runtime parity and broker execution are unverified. Missing source hashes, engine versions, calendars and cost components are listed in `validation.unavailable_fields` in [run.json](run.json). Year/regime slices, when present, remain in the JSON summary. No absent event or trade rows were fabricated.

## Files

- [Configuration and provenance](run.json)
- [Standardized summary](summary.json)
- [trades.csv](trades.csv) — 719 rows; horizons/scenarios may reuse observations.

## Evidence

- [nshape-simple-report](../../evidence/nshape-simple-report.txt)
- [nshape-simple-summary](../../evidence/nshape-simple-summary.csv)
- [nshape-simple-trades](../../evidence/nshape-simple-trades.csv.gz)
