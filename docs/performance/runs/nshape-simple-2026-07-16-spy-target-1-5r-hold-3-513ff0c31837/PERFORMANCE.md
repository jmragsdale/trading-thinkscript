# nshape-simple — target-1.5r-hold-3

Generated from saved evidence; no new backtest. Run `nshape-simple-2026-07-16-spy-target-1-5r-hold-3-513ff0c31837`.

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
| split=full, side=all, target_r=1.5, maximum_hold_bars=3 | `signals` | 719 | count | reported |
| split=full, side=all, target_r=1.5, maximum_hold_bars=3 | `completed_trades` | 719 | count | reported |
| split=full, side=all, target_r=1.5, maximum_hold_bars=3 | `win_rate_pct` | 44.09 | percent | reported |
| split=full, side=all, target_r=1.5, maximum_hold_bars=3 | `profit_factor_unspecified` | 0.7817 | ratio | reported |
| split=full, side=all, target_r=1.5, maximum_hold_bars=3 | `mean_points_unspecified` | -0.0393 | points | reported |
| split=full, side=all, target_r=1.5, maximum_hold_bars=3 | `mean_r_unspecified` | -0.0667 | R | reported |
| split=full, side=long, target_r=1.5, maximum_hold_bars=3 | `signals` | 363 | count | reported |
| split=full, side=long, target_r=1.5, maximum_hold_bars=3 | `completed_trades` | 363 | count | reported |
| split=full, side=long, target_r=1.5, maximum_hold_bars=3 | `win_rate_pct` | 42.98 | percent | reported |
| split=full, side=long, target_r=1.5, maximum_hold_bars=3 | `profit_factor_unspecified` | 0.6393 | ratio | reported |
| split=full, side=long, target_r=1.5, maximum_hold_bars=3 | `mean_points_unspecified` | -0.0667 | points | reported |
| split=full, side=long, target_r=1.5, maximum_hold_bars=3 | `mean_r_unspecified` | -0.0829 | R | reported |
| split=full, side=short, target_r=1.5, maximum_hold_bars=3 | `signals` | 356 | count | reported |
| split=full, side=short, target_r=1.5, maximum_hold_bars=3 | `completed_trades` | 356 | count | reported |
| split=full, side=short, target_r=1.5, maximum_hold_bars=3 | `win_rate_pct` | 45.22 | percent | reported |
| split=full, side=short, target_r=1.5, maximum_hold_bars=3 | `profit_factor_unspecified` | 0.9352 | ratio | reported |
| split=full, side=short, target_r=1.5, maximum_hold_bars=3 | `mean_points_unspecified` | -0.0113 | points | reported |
| split=full, side=short, target_r=1.5, maximum_hold_bars=3 | `mean_r_unspecified` | -0.0501 | R | reported |

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
