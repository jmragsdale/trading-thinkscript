# orb15-mnq — Original

Generated from saved evidence; no new backtest. Run `orb15-mnq-2026-10-01-mnq-original-f22dc4a0ecef`.

| Context | Recorded value |
| --- | --- |
| Instrument / aggregation | MNQ / 1 minutes |
| Engine | pine (version: Unknown) |
| Report date | 2026-10-01 |
| Dataset period | 2026-09-07 through 2026-10-01 |
| Session | Electronic trading hours; standard 1m candles; back-adjustment off; chart display UTC-4. |
| P&L basis | net |
| Cost convention | $0.95/contract/side, one tick adverse market/stop slippage; limits differ. No second cost deduction from exported net P&L. |
| Source relationship | related-model |
| Evidence status | reported |
| Native Thinkorswim performance | Unverified |

## Metrics

All figures retain their original basis. Unknown means unavailable, not zero. Exact values, units, methods and missing reasons for every field are in [summary.json](summary.json).

| Slice | Metric | Value | Unit | Method |
| --- | --- | ---: | --- | --- |
| split=full, mode=Original | `completed_trades` | 19 | count | recomputed-from-saved-trades |
| split=full, mode=Original | `trading_days` | 19 | count | recomputed-from-saved-trades |
| split=full, mode=Original | `wins` | 7 | count | recomputed-from-saved-trades |
| split=full, mode=Original | `losses` | 12 | count | recomputed-from-saved-trades |
| split=full, mode=Original | `breakevens` | 0 | count | recomputed-from-saved-trades |
| split=full, mode=Original | `win_rate_pct` | 36.8421 | percent | recomputed-from-saved-trades |
| split=full, mode=Original | `profit_factor_net` | 1.0509 | ratio | recomputed-from-saved-trades |
| split=full, mode=Original | `net_profit_usd` | 98.4 | USD | recomputed-from-saved-trades |
| split=full, mode=Original | `mean_net_usd` | 5.17895 | USD | recomputed-from-saved-trades |
| split=full, mode=Original | `mean_win_usd` | 290.243 | USD | recomputed-from-saved-trades |
| split=full, mode=Original | `mean_loss_usd` | -161.108 | USD | recomputed-from-saved-trades |
| split=full, mode=Original | `closed_trade_max_drawdown_usd` | 836 | USD | recomputed-from-saved-trades |
| split=full, mode=Original | `longest_losing_streak` | 5 | trades | recomputed-from-saved-trades |

## Validation and limits

- Short native Pine simulation, not a verified ThinkScript result.
- Closed-trade drawdown excludes intratrade marked excursions.
- Native bar export omits opening/fill bars; gaps, holidays and activation ordering not reconciled.
- Planned $100 cap is not a hard loss guarantee.

Native TOS compilation, runtime parity and broker execution are unverified. Missing source hashes, engine versions, calendars and cost components are listed in `validation.unavailable_fields` in [run.json](run.json). Year/regime slices, when present, remain in the JSON summary. No absent event or trade rows were fabricated.

## Files

- [Configuration and provenance](run.json)
- [Standardized summary](summary.json)
- [trades.csv](trades.csv) — 19 rows; horizons/scenarios may reuse observations.

## Evidence

- [orb-native-report](../../evidence/orb-native-report.txt)
- [orb-original-trades](../../evidence/orb-original-trades.csv)
- [orb-research-guide](../../evidence/orb-research-guide.txt)
