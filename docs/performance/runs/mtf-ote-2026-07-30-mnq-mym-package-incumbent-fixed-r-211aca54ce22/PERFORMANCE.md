# mtf-ote — package-incumbent-fixed-r

Generated from saved evidence; no new backtest. Run `mtf-ote-2026-07-30-mnq-mym-package-incumbent-fixed-r-211aca54ce22`.

| Context | Recorded value |
| --- | --- |
| Instrument / aggregation | MNQ+MYM / 1 minutes |
| Engine | python (version: Unknown) |
| Report date | 2026-07-30 |
| Dataset period | 61 calendar months, June 2021–June 2026; endpoint months partial. |
| Session | Unknown |
| P&L basis | net |
| Cost convention | Incumbent fixed R cost: MNQ 0.060R, MYM 0.149R; 1R=$200. |
| Source relationship | related-model |
| Evidence status | reported |
| Native Thinkorswim performance | Unverified |

## Metrics

All figures retain their original basis. Unknown means unavailable, not zero. Exact values, units, methods and missing reasons for every field are in [summary.json](summary.json).

| Slice | Metric | Value | Unit | Method |
| --- | --- | ---: | --- | --- |
| split=full | `net_profit_usd` | 43302 | USD | reported |
| split=full | `monthly_mean_usd` | 710 | USD | reported |
| split=full | `monthly_median_usd` | 688 | USD | reported |
| split=full | `losing_months` | 24 | count | reported |
| split=full | `months` | 61 | count | reported |
| split=trailing-12-months, period=2025-07 through 2026-06 | `net_profit_usd` | -9607 | USD | reported |
| split=trailing-12-months, period=2025-07 through 2026-06 | `losing_months` | 8 | count | reported |
| split=trailing-12-months, period=2025-07 through 2026-06 | `months` | 12 | count | reported |

## Validation and limits

- Package-level modeled dollars; not standalone-study or account returns.
- Month/trailing slices overlap; do not sum.
- Older leak-derived live-ready claims voided.

Native TOS compilation, runtime parity and broker execution are unverified. Missing source hashes, engine versions, calendars and cost components are listed in `validation.unavailable_fields` in [run.json](run.json). Year/regime slices, when present, remain in the JSON summary. No absent event or trade rows were fabricated.

## Files

- [Configuration and provenance](run.json)
- [Standardized summary](summary.json)
- Observation ledger: unavailable. Observation-level ledger not available in the retrieved evidence; aggregate report only.

## Evidence

- [mtf-cost-rebaseline](../../evidence/mtf-cost-rebaseline.txt)
- [mtf-clean-rescore](../../evidence/mtf-clean-rescore.txt)
