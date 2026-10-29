# displacement-wick — market-lb20-cd3-pause1

Generated from saved evidence; no new backtest. Run `displacement-wick-2026-06-21-nq-market-lb20-cd3-pause1-0fc10bf8c286`.

| Context | Recorded value |
| --- | --- |
| Instrument / aggregation | NQ / 5 minutes |
| Engine | python (version: Unknown) |
| Report date | 2026-06-21 |
| Dataset period | 2026-04-20 through 2026-05-11 |
| Session | Unknown |
| P&L basis | unspecified |
| Cost convention | Realistic cost deduction not established by retrieved report. |
| Source relationship | related-model |
| Evidence status | reported |
| Native Thinkorswim performance | Unverified |

## Metrics

All figures retain their original basis. Unknown means unavailable, not zero. Exact values, units, methods and missing reasons for every field are in [summary.json](summary.json).

| Slice | Metric | Value | Unit | Method |
| --- | --- | ---: | --- | --- |
| split=full | `completed_trades` | 44 | count | reported |
| split=full | `win_rate_pct` | 45.5 | percent | reported |
| split=full | `mean_r_unspecified` | 0 | R | reported |

## Validation and limits

- 16-session NQ input; report describes roughly one month.
- Default-throttle verification update supersedes optimistic sandbox/pass-rate claims.
- Not the current TOS wick sweep detector; execution costs not established.

Native TOS compilation, runtime parity and broker execution are unverified. Missing source hashes, engine versions, calendars and cost components are listed in `validation.unavailable_fields` in [run.json](run.json). Year/regime slices, when present, remain in the JSON summary. No absent event or trade rows were fabricated.

## Files

- [Configuration and provenance](run.json)
- [Standardized summary](summary.json)
- Observation ledger: unavailable. Observation-level ledger not available in the retrieved evidence; aggregate report only.

## Evidence

- [wick-verification-update](../../evidence/wick-verification-update.txt)
