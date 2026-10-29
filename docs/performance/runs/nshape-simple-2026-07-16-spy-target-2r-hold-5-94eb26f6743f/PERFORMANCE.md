# nshape-simple — target-2r-hold-5

Generated from saved evidence; no new backtest. Run `nshape-simple-2026-07-16-spy-target-2r-hold-5-94eb26f6743f`.

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
| split=full, side=all, target_r=2.0, maximum_hold_bars=5 | `signals` | 719 | count | reported |
| split=full, side=all, target_r=2.0, maximum_hold_bars=5 | `completed_trades` | 719 | count | reported |
| split=full, side=all, target_r=2.0, maximum_hold_bars=5 | `win_rate_pct` | 40.61 | percent | reported |
| split=full, side=all, target_r=2.0, maximum_hold_bars=5 | `profit_factor_unspecified` | 0.7664 | ratio | reported |
| split=full, side=all, target_r=2.0, maximum_hold_bars=5 | `mean_points_unspecified` | -0.0523 | points | reported |
| split=full, side=all, target_r=2.0, maximum_hold_bars=5 | `mean_r_unspecified` | -0.0922 | R | reported |
| split=full, side=long, target_r=2.0, maximum_hold_bars=5 | `signals` | 363 | count | reported |
| split=full, side=long, target_r=2.0, maximum_hold_bars=5 | `completed_trades` | 363 | count | reported |
| split=full, side=long, target_r=2.0, maximum_hold_bars=5 | `win_rate_pct` | 40.22 | percent | reported |
| split=full, side=long, target_r=2.0, maximum_hold_bars=5 | `profit_factor_unspecified` | 0.6332 | ratio | reported |
| split=full, side=long, target_r=2.0, maximum_hold_bars=5 | `mean_points_unspecified` | -0.0821 | points | reported |
| split=full, side=long, target_r=2.0, maximum_hold_bars=5 | `mean_r_unspecified` | -0.112 | R | reported |
| split=full, side=short, target_r=2.0, maximum_hold_bars=5 | `signals` | 356 | count | reported |
| split=full, side=short, target_r=2.0, maximum_hold_bars=5 | `completed_trades` | 356 | count | reported |
| split=full, side=short, target_r=2.0, maximum_hold_bars=5 | `win_rate_pct` | 41.01 | percent | reported |
| split=full, side=short, target_r=2.0, maximum_hold_bars=5 | `profit_factor_unspecified` | 0.9023 | ratio | reported |
| split=full, side=short, target_r=2.0, maximum_hold_bars=5 | `mean_points_unspecified` | -0.0218 | points | reported |
| split=full, side=short, target_r=2.0, maximum_hold_bars=5 | `mean_r_unspecified` | -0.072 | R | reported |

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
