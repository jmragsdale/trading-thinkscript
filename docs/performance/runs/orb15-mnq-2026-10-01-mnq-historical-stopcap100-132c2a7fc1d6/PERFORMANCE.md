# orb15-mnq — historical-StopCap100

Generated from saved evidence; no new backtest. Run `orb15-mnq-2026-10-01-mnq-historical-stopcap100-132c2a7fc1d6`.

| Context | Recorded value |
| --- | --- |
| Instrument / aggregation | MNQ / 1 minutes |
| Engine | python (version: Unknown) |
| Report date | 2026-10-01 |
| Dataset period | Five-year historical study; exact dates not established by the guide excerpt. |
| Session | Unknown |
| P&L basis | unspecified |
| Cost convention | Realistic cost deduction not established by retrieved report. |
| Source relationship | related-model |
| Evidence status | historical-unrevalidated |
| Native Thinkorswim performance | Unverified |

## Metrics

All figures retain their original basis. Unknown means unavailable, not zero. Exact values, units, methods and missing reasons for every field are in [summary.json](summary.json).

| Slice | Metric | Value | Unit | Method |
| --- | --- | ---: | --- | --- |
| split=full, mode=StopCap100, precision=approximate guide rounding | `completed_trades` | 1203 | count | reported |
| split=full, mode=StopCap100, precision=approximate guide rounding | `net_profit_usd_low` | 11930 | USD | reported |
| split=full, mode=StopCap100, precision=approximate guide rounding | `net_profit_usd_high` | 12210 | USD | reported |
| split=full, mode=StopCap100, precision=approximate guide rounding | `marked_max_drawdown_usd` | 2883 | USD | reported |

## Validation and limits

- Older model totals not rerun after queued-activation rebound fixes.
- Reported ranges are historical path scenarios, not rigorous bounds or current-file results.
- No untouched holdout established.

Native TOS compilation, runtime parity and broker execution are unverified. Missing source hashes, engine versions, calendars and cost components are listed in `validation.unavailable_fields` in [run.json](run.json). Year/regime slices, when present, remain in the JSON summary. No absent event or trade rows were fabricated.

## Files

- [Configuration and provenance](run.json)
- [Standardized summary](summary.json)
- Observation ledger: unavailable. Observation-level ledger not available in the retrieved evidence; aggregate report only.

## Evidence

- [orb-research-guide](../../evidence/orb-research-guide.txt)
