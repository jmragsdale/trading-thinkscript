# ote-wheel — historical-equity-futures

Generated from saved evidence; no new backtest. Run `ote-wheel-2026-07-15-13-equity-futures-symbols-historical-equity-futures-ce354db979a6`.

| Context | Recorded value |
| --- | --- |
| Instrument / aggregation | 13 equity/futures symbols / 1440 minutes |
| Engine | python (version: Unknown) |
| Report date | 2026-07-15 |
| Dataset period | Approximate five-year source histories; one common exact calendar not established. |
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
| split=full, population=13 equity/futures symbols | `signals` | 1643 | count | reported |
| split=full, population=13 equity/futures symbols | `win_rate_pct` | 50.3 | percent | reported |
| split=full, population=13 equity/futures symbols | `mean_r_unspecified` | 0.359 | R | reported |
| split=bullish-hold-frequency, horizon_trading_days=7 | `touch_hold_pct` | 26.6 | percent | reported |
| split=bullish-hold-frequency, horizon_trading_days=7 | `expiry_hold_swing_pct` | 62.1 | percent | reported |
| split=bullish-hold-frequency, horizon_trading_days=7 | `expiry_hold_1pct_cushion_pct` | 74.4 | percent | reported |
| split=bullish-hold-frequency, horizon_trading_days=14 | `touch_hold_pct` | 18.3 | percent | reported |
| split=bullish-hold-frequency, horizon_trading_days=14 | `expiry_hold_swing_pct` | 56.2 | percent | reported |
| split=bullish-hold-frequency, horizon_trading_days=14 | `expiry_hold_1pct_cushion_pct` | 65.9 | percent | reported |
| split=bullish-hold-frequency, horizon_trading_days=21 | `touch_hold_pct` | 15.8 | percent | reported |
| split=bullish-hold-frequency, horizon_trading_days=21 | `expiry_hold_swing_pct` | 52.2 | percent | reported |
| split=bullish-hold-frequency, horizon_trading_days=21 | `expiry_hold_1pct_cushion_pct` | 59.5 | percent | reported |

## Validation and limits

- Predates OTE lookahead remediation; no clean daily rerun found.
- Not exact current v4 or installed v3 performance; no option premium/assignment execution.
- Symbol pools are not a capital-weighted portfolio.

Native TOS compilation, runtime parity and broker execution are unverified. Missing source hashes, engine versions, calendars and cost components are listed in `validation.unavailable_fields` in [run.json](run.json). Year/regime slices, when present, remain in the JSON summary. No absent event or trade rows were fabricated.

## Files

- [Configuration and provenance](run.json)
- [Standardized summary](summary.json)
- Observation ledger: unavailable. Observation-level ledger not available in the retrieved evidence; aggregate report only.

## Evidence

- [daily-ote-historical](../../evidence/daily-ote-historical.txt)
- [mtf-clean-rescore](../../evidence/mtf-clean-rescore.txt)
- [mtf-cost-rebaseline](../../evidence/mtf-cost-rebaseline.txt)
