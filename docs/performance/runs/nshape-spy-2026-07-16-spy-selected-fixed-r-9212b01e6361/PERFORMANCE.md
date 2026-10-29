# nshape-spy — selected-fixed-r

Generated from saved evidence; no new backtest. Run `nshape-spy-2026-07-16-spy-selected-fixed-r-9212b01e6361`.

| Context | Recorded value |
| --- | --- |
| Instrument / aggregation | SPY / 1 minutes |
| Engine | python (version: Unknown) |
| Report date | 2026-07-16 |
| Dataset period | 2021-07-12 through 2026-07-10 |
| Session | 13:30–before 15:30 ET |
| P&L basis | unspecified |
| Cost convention | Realistic cost deduction not established by retrieved report. |
| Source relationship | related-model |
| Evidence status | reported |
| Native Thinkorswim performance | Unverified |

## Metrics

All figures retain their original basis. Unknown means unavailable, not zero. Exact values, units, methods and missing reasons for every field are in [summary.json](summary.json).

| Slice | Metric | Value | Unit | Method |
| --- | --- | ---: | --- | --- |
| split=full, side=long | `completed_trades` | 222 | count | reported |
| split=full, side=long | `win_rate_pct` | 45.5 | percent | reported |
| split=full, side=long | `profit_factor_unspecified` | 1.60462 | ratio | reported |
| split=full, side=long | `mean_points_unspecified` | 0.0816104 | points | reported |
| split=full, side=long | `mean_r_unspecified` | 0.0622917 | R | reported |
| split=development, period=2021–2024, side=long | `completed_trades` | 167 | count | reported |
| split=development, period=2021–2024, side=long | `win_rate_pct` | 44.31 | percent | reported |
| split=development, period=2021–2024, side=long | `profit_factor_unspecified` | 1.5194 | ratio | reported |
| split=development, period=2021–2024, side=long | `mean_points_unspecified` | 0.0713 | points | reported |
| split=development, period=2021–2024, side=long | `mean_r_unspecified` | 0.05 | R | reported |
| split=report-labeled-holdout-used-in-selection, period=2025–2026 partial, side=long | `completed_trades` | 55 | count | reported |
| split=report-labeled-holdout-used-in-selection, period=2025–2026 partial, side=long | `win_rate_pct` | 49.09 | percent | reported |
| split=report-labeled-holdout-used-in-selection, period=2025–2026 partial, side=long | `profit_factor_unspecified` | 1.8821 | ratio | reported |
| split=report-labeled-holdout-used-in-selection, period=2025–2026 partial, side=long | `mean_points_unspecified` | 0.1129 | points | reported |
| split=report-labeled-holdout-used-in-selection, period=2025–2026 partial, side=long | `mean_r_unspecified` | 0.0996 | R | reported |

## Validation and limits

- Holdout PF was a selection criterion; this is not an untouched independent test.
- ThinkScript displays references and does not execute the 10-bar maximum-hold rule.
- No options P&L or realistic execution friction established.

Native TOS compilation, runtime parity and broker execution are unverified. Missing source hashes, engine versions, calendars and cost components are listed in `validation.unavailable_fields` in [run.json](run.json). Year/regime slices, when present, remain in the JSON summary. No absent event or trade rows were fabricated.

## Files

- [Configuration and provenance](run.json)
- [Standardized summary](summary.json)
- Observation ledger: unavailable. Observation-level ledger not available in the retrieved evidence; aggregate report only.

## Evidence

- [nshape-selected-report](../../evidence/nshape-selected-report.txt)
- [nshape-filter-sweep](../../evidence/nshape-filter-sweep.csv)
