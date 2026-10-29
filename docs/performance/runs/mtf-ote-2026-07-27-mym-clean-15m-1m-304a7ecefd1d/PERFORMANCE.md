# mtf-ote — clean-15m-1m

Generated from saved evidence; no new backtest. Run `mtf-ote-2026-07-27-mym-clean-15m-1m-304a7ecefd1d`.

| Context | Recorded value |
| --- | --- |
| Instrument / aggregation | MYM / 1 minutes |
| Engine | python (version: Unknown) |
| Report date | 2026-07-27 |
| Dataset period | June 2021–June 2026; MGC starts July 12, 2021. |
| Session | 03:00–05:00 / 09:30–12:00 / 14:00–15:55 ET |
| P&L basis | net |
| Cost convention | Related engine_v3 per-contract RT cost on actual quantity; component split not established. |
| Source relationship | related-model |
| Evidence status | reported |
| Native Thinkorswim performance | Unverified |

## Metrics

All figures retain their original basis. Unknown means unavailable, not zero. Exact values, units, methods and missing reasons for every field are in [summary.json](summary.json).

| Slice | Metric | Value | Unit | Method |
| --- | --- | ---: | --- | --- |
| split=full | `completed_trades` | 2977 | count | reported |
| split=full | `win_rate_pct` | 36.31 | percent | reported |
| split=full | `profit_factor_gross` | 1.244 | ratio | reported |
| split=full | `profit_factor_net` | 0.77 | ratio | reported |

## Validation and limits

- Related execution model, not a native backtest of the TOS chart study.
- Older leak-derived generator results explicitly voided.

Native TOS compilation, runtime parity and broker execution are unverified. Missing source hashes, engine versions, calendars and cost components are listed in `validation.unavailable_fields` in [run.json](run.json). Year/regime slices, when present, remain in the JSON summary. No absent event or trade rows were fabricated.

## Files

- [Configuration and provenance](run.json)
- [Standardized summary](summary.json)
- Observation ledger: unavailable. Observation-level ledger not available in the retrieved evidence; aggregate report only.

## Evidence

- [mtf-clean-rescore](../../evidence/mtf-clean-rescore.txt)
- [mtf-cost-rebaseline](../../evidence/mtf-cost-rebaseline.txt)
