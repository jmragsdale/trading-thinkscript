# MACD-V: offline signal measurements

These are **offline signal-event measurements**, not strategy profits or Thinkorswim Strategy Report results. The October 1, 2026 harness ported the detector from saved ThinkScript. The frozen source hashes match library files, but TOS runtime parity remains unverified.

Input coverage: MNQ June 10, 2021–June 9, 2026; SPY July 12, 2021–July 10, 2026. Signals, entry and endpoints are restricted to RTH; detector history includes the loaded full session. First/last years are partial. Entry measurement is next-bar open; endpoint is directional close after 1, 3, 5 or 10 bars. This does not execute plotted stops, targets or exit alerts.

Within each detector/side, retain the first event then require more than 10 signal bars before another. Opposite sides/families can overlap. Missing-minute, date-change and contract-change horizons are excluded; count can fall with horizon. MNQ uses previous available ET-date volume to choose the front outright contract and resets on contract change.

**Costs:** MNQ corrected scenario subtracts $2.90 per one-contract round trip (1.45 points: historical $1.90 fees plus 0.25-point slippage each side). SPY subtracts $0.02/share; this is an underlying proxy, with no option P&L inference. These are October 1 assumptions, not a current fee quotation. Full CSV also retains the original lower MNQ cost case and double-total-cost sensitivity.

Matched excess compares with descriptive full-sample year × 30-minute time bucket × EMA200-side means. Confidence intervals are day-block bootstrap 95%, 500 fixed-seed resamples; exploratory multiple comparisons are uncorrected. The tables report all pooled horizons, not a selected best result.

**Adaptation:** the scanner's $2–$20 price gate was removed for index futures. The study detector was ported; exit alerts were not executed. EMA seeding approximates TOS after a 250-bar warmup. Scanner price-filtered performance is not measured. Every pooled mean net return in this table is negative.

| Instrument | Signal | Bar minutes | Horizon bars | Events | Mean net points/event | Matched excess points | Excess 95% CI |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| MNQ | MACDV_long | 1 | 1 | 2480 | -1.28417 | +0.14285 | [-0.20474, +0.51846] |
| MNQ | MACDV_long | 1 | 3 | 2468 | -0.95506 | +0.39724 | [-0.45057, +1.29963] |
| MNQ | MACDV_long | 1 | 5 | 2462 | -1.06931 | +0.22411 | [-0.68922, +1.30031] |
| MNQ | MACDV_long | 1 | 10 | 2423 | -1.15656 | -0.03425 | [-1.22674, +0.97027] |
| MNQ | MACDV_short | 1 | 1 | 1958 | -0.97694 | +0.46136 | [+0.00387, +0.92325] |
| MNQ | MACDV_short | 1 | 3 | 1947 | -0.90968 | +0.48612 | [-0.34956, +1.35749] |
| MNQ | MACDV_short | 1 | 5 | 1939 | -1.39546 | -0.02977 | [-1.15008, +1.05329] |
| MNQ | MACDV_short | 1 | 10 | 1906 | -0.99879 | +0.25184 | [-1.22705, +1.76386] |
| SPY | MACDV_long | 1 | 1 | 2769 | -0.02017 | +0.00014 | [-0.00793, +0.01027] |
| SPY | MACDV_long | 1 | 3 | 2756 | -0.01096 | +0.00818 | [-0.00782, +0.02611] |
| SPY | MACDV_long | 1 | 5 | 2745 | -0.01179 | +0.00634 | [-0.01152, +0.02518] |
| SPY | MACDV_long | 1 | 10 | 2701 | -0.00705 | +0.00752 | [-0.01610, +0.02940] |
| SPY | MACDV_short | 1 | 1 | 2209 | -0.02088 | +0.00016 | [-0.01167, +0.01190] |
| SPY | MACDV_short | 1 | 3 | 2199 | -0.02492 | -0.00446 | [-0.02083, +0.01335] |
| SPY | MACDV_short | 1 | 5 | 2183 | -0.03588 | -0.01603 | [-0.03647, +0.00781] |
| SPY | MACDV_short | 1 | 10 | 2150 | -0.01992 | -0.00226 | [-0.03333, +0.02710] |

A point is $1/share for SPY and $2 per one MNQ contract. Negative mean net points are not evidence of a profitable executable strategy. Matched excess can be positive while absolute net return is negative. No strategy win rate, realized drawdown, profit factor or prop pass probability is established by these event endpoints.

## Saved evidence

- [offline-summary](evidence/offline-summary.csv)
- [offline-protocol](evidence/offline-protocol.txt)
- [offline-parity](evidence/offline-parity.txt)
- [offline-readme](evidence/offline-readme.txt)
- [offline-hashes](evidence/offline-hashes.json)
- [offline-provenance](evidence/offline-provenance.json)
- [offline-costs](evidence/offline-costs.json)
- [offline-validation](evidence/offline-validation.json)

Source locations, original hashes and published evidence hashes are in the [performance registry](../../performance.json). Evidence files preserve historical wording; superseded conclusions in them are not endorsed.

<!-- STANDARDIZED PERFORMANCE: START -->
## Standardized records

6 saved configurations use the [common format](FORMAT.md). Records retain their platform, costs, exact-source relationship, evidence status and missing-field reasons. No new backtest was run.

| Instrument | Configuration | Type | Status | Files |
| --- | --- | --- | --- | --- |
| MNQ | corrected-base | signal-event | reported | [Summary](runs/macdv-2026-10-01-mnq-corrected-base-c1196ca6f119/PERFORMANCE.md) · [Run JSON](runs/macdv-2026-10-01-mnq-corrected-base-c1196ca6f119/run.json) · [Metrics JSON](runs/macdv-2026-10-01-mnq-corrected-base-c1196ca6f119/summary.json) |
| MNQ | double-total-cost | signal-event | reported | [Summary](runs/macdv-2026-10-01-mnq-double-total-cost-c02b259864d7/PERFORMANCE.md) · [Run JSON](runs/macdv-2026-10-01-mnq-double-total-cost-c02b259864d7/run.json) · [Metrics JSON](runs/macdv-2026-10-01-mnq-double-total-cost-c02b259864d7/summary.json) |
| MNQ | original-lower-cost | signal-event | reported | [Summary](runs/macdv-2026-10-01-mnq-original-lower-cost-eea75ff7690d/PERFORMANCE.md) · [Run JSON](runs/macdv-2026-10-01-mnq-original-lower-cost-eea75ff7690d/run.json) · [Metrics JSON](runs/macdv-2026-10-01-mnq-original-lower-cost-eea75ff7690d/summary.json) |
| MNQ | original-double-cost | signal-event | reported | [Summary](runs/macdv-2026-10-01-mnq-original-double-cost-c5f39f3da0c5/PERFORMANCE.md) · [Run JSON](runs/macdv-2026-10-01-mnq-original-double-cost-c5f39f3da0c5/run.json) · [Metrics JSON](runs/macdv-2026-10-01-mnq-original-double-cost-c5f39f3da0c5/summary.json) |
| SPY | corrected-base | signal-event | reported | [Summary](runs/macdv-2026-10-01-spy-corrected-base-d2791917fcaa/PERFORMANCE.md) · [Run JSON](runs/macdv-2026-10-01-spy-corrected-base-d2791917fcaa/run.json) · [Metrics JSON](runs/macdv-2026-10-01-spy-corrected-base-d2791917fcaa/summary.json) |
| SPY | double-total-cost | signal-event | reported | [Summary](runs/macdv-2026-10-01-spy-double-total-cost-e53814dfdf22/PERFORMANCE.md) · [Run JSON](runs/macdv-2026-10-01-spy-double-total-cost-e53814dfdf22/run.json) · [Metrics JSON](runs/macdv-2026-10-01-spy-double-total-cost-e53814dfdf22/summary.json) |
<!-- STANDARDIZED PERFORMANCE: END -->
