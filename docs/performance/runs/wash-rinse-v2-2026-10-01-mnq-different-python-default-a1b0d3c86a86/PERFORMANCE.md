# wash-rinse-v2 — different-python-default

Generated from saved evidence; no new backtest. Run `wash-rinse-v2-2026-10-01-mnq-different-python-default-a1b0d3c86a86`.

| Context | Recorded value |
| --- | --- |
| Instrument / aggregation | MNQ / 1 minutes |
| Engine | python (version: Unknown) |
| Report date | 2026-10-01 |
| Dataset period | 2021-06-10 through 2026-06-09 |
| Session | MNQ RTH |
| P&L basis | net |
| Cost convention | Historical benchmark, one MNQ. |
| Source relationship | different-model |
| Evidence status | reported |
| Native Thinkorswim performance | Unverified |

## Metrics

All figures retain their original basis. Unknown means unavailable, not zero. Exact values, units, methods and missing reasons for every field are in [summary.json](summary.json).

| Slice | Metric | Value | Unit | Method |
| --- | --- | ---: | --- | --- |
| split=full | `completed_trades` | 32641 | count | reported |
| split=full | `profit_factor_net` | 0.733459 | ratio | reported |
| split=full | `net_profit_usd` | -93038.9 | USD | reported |
| split=full | `closed_trade_max_drawdown_usd` | 93142.1 | USD | reported |

## Validation and limits

- Original TOS source absent from prior census; this is a different Python model.
- Current WashRinse v2 has different swing/state rules and default 2R target.
- Concatenated RTH slices affect ATR through overnight gaps; gap stops idealized.

Native TOS compilation, runtime parity and broker execution are unverified. Missing source hashes, engine versions, calendars and cost components are listed in `validation.unavailable_fields` in [run.json](run.json). Year/regime slices, when present, remain in the JSON summary. No absent event or trade rows were fabricated.

## Files

- [Configuration and provenance](run.json)
- [Standardized summary](summary.json)
- Observation ledger: unavailable. Observation-level ledger not available in the retrieved evidence; aggregate report only.

## Evidence

- [wash-python-audit](../../evidence/wash-python-audit.json)
- [wash-research-report](../../evidence/wash-research-report.txt)
