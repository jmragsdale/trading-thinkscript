# NShape SPY: reported research

These are **offline signal-event measurements**, not strategy profits or Thinkorswim Strategy Report results. The October 1, 2026 harness ported the detector from saved ThinkScript. The frozen source hashes match library files, but TOS runtime parity remains unverified.

Input coverage: MNQ June 10, 2021–June 9, 2026; SPY July 12, 2021–July 10, 2026. Signals, entry and endpoints are restricted to RTH; detector history includes the loaded full session. First/last years are partial. Entry measurement is next-bar open; endpoint is directional close after 1, 3, 5 or 10 bars. This does not execute plotted stops, targets or exit alerts.

Within each detector/side, retain the first event then require more than 10 signal bars before another. Opposite sides/families can overlap. Missing-minute, date-change and contract-change horizons are excluded; count can fall with horizon. MNQ uses previous available ET-date volume to choose the front outright contract and resets on contract change.

**Costs:** MNQ corrected scenario subtracts $2.90 per one-contract round trip (1.45 points: historical $1.90 fees plus 0.25-point slippage each side). SPY subtracts $0.02/share; this is an underlying proxy, with no option P&L inference. These are October 1 assumptions, not a current fee quotation. Full CSV also retains the original lower MNQ cost case and double-total-cost sensitivity.

Matched excess compares with descriptive full-sample year × 30-minute time bucket × EMA200-side means. Confidence intervals are day-block bootstrap 95%, 500 fixed-seed resamples; exploratory multiple comparisons are uncorrected. The tables report all pooled horizons, not a selected best result.

**Adaptation:** bullish default filtered detector, 13:30–before 15:30 ET; calendar-date VWAP uses extended-hours history. No absolute share-volume gate for experimental MNQ transfer. Scanner current/previous-bar persistence is counted once per raw event. SPY 3-bar mean is +$0.02990/share over 203 events, but matched excess CI spans zero; 2021, 2024 and 2025 annual 3-bar means were negative. This is not a reproduction of the older 222-trade fixed-R study described below.

| Instrument | Signal | Bar minutes | Horizon bars | Events | Mean net points/event | Matched excess points | Excess 95% CI |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| MNQ | NShape_long | 1 | 1 | 198 | -0.90455 | +0.52504 | [-0.90755, +1.81263] |
| MNQ | NShape_long | 1 | 3 | 198 | -0.31111 | +1.01564 | [-1.04438, +2.97534] |
| MNQ | NShape_long | 1 | 5 | 198 | -1.17348 | +0.06687 | [-2.37920, +2.85723] |
| MNQ | NShape_long | 1 | 10 | 198 | -1.33889 | -0.19192 | [-3.59821, +3.47553] |
| SPY | NShape_long | 1 | 1 | 203 | -0.00510 | +0.01460 | [-0.01263, +0.04271] |
| SPY | NShape_long | 1 | 3 | 203 | +0.02990 | +0.04739 | [-0.00742, +0.10694] |
| SPY | NShape_long | 1 | 5 | 203 | +0.02185 | +0.03797 | [-0.03503, +0.10782] |
| SPY | NShape_long | 1 | 10 | 203 | +0.01350 | +0.02657 | [-0.05306, +0.12340] |

A point is $1/share for SPY and $2 per one MNQ contract. Negative mean net points are not evidence of a profitable executable strategy. Matched excess can be positive while absolute net return is negative. No strategy win rate, realized drawdown, profit factor or prop pass probability is established by these event endpoints.

## Earlier selected fixed-R model — July 16, 2026

A separate Python SPY search selected 1-minute bullish signals, 13:30–before 15:30 ET, EMA20 + VWAP + C3 range filter, next-open entry, candle-2-low stop, 1.5R target and **10-bar maximum hold**. The ThinkScript study displays stop/target references; it does not execute this maximum-hold rule. Coverage was July 12, 2021–July 10, 2026.

| Report split | Trades | Win rate | Mean SPY points | Mean R | Profit factor |
| --- | ---: | ---: | ---: | ---: | ---: |
| Full sample | 222 | 45.50% | 0.0816 | 0.0623 | 1.6046 |
| 2021–2024 development | 167 | 44.31% | 0.0713 | 0.0500 | 1.5194 |
| 2025–2026 report-labeled holdout | 55 | 49.09% | 0.1129 | 0.0996 | 1.8821 |

The full-sample row matches the saved filter-sweep CSV. The search required both development and holdout PF >1.3, so the latter was used in selection and is **not an untouched independent test**. Years were uneven: PF 0.7345 in 2023 and 1.1320 in 2024. The retrieved table does not establish a realistic fee/slippage deduction; treat these as reported underlying-model figures, not verified net execution returns. No option spreads, premiums, Greeks or broker fills were modeled here. The October offline endpoint study uses different de-overlap/eligibility/VWAP rules and cannot validate these 222-trade figures.

## Saved evidence

- [nshape-selected-report](evidence/nshape-selected-report.txt)
- [nshape-filter-sweep](evidence/nshape-filter-sweep.csv)
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

7 saved configurations use the [common format](FORMAT.md). Records retain their platform, costs, exact-source relationship, evidence status and missing-field reasons. No new backtest was run.

| Instrument | Configuration | Type | Status | Files |
| --- | --- | --- | --- | --- |
| MNQ | corrected-base | signal-event | reported | [Summary](runs/nshape-spy-2026-10-01-mnq-corrected-base-b1537ad880c8/PERFORMANCE.md) · [Run JSON](runs/nshape-spy-2026-10-01-mnq-corrected-base-b1537ad880c8/run.json) · [Metrics JSON](runs/nshape-spy-2026-10-01-mnq-corrected-base-b1537ad880c8/summary.json) |
| MNQ | double-total-cost | signal-event | reported | [Summary](runs/nshape-spy-2026-10-01-mnq-double-total-cost-24b9e8590d1b/PERFORMANCE.md) · [Run JSON](runs/nshape-spy-2026-10-01-mnq-double-total-cost-24b9e8590d1b/run.json) · [Metrics JSON](runs/nshape-spy-2026-10-01-mnq-double-total-cost-24b9e8590d1b/summary.json) |
| MNQ | original-lower-cost | signal-event | reported | [Summary](runs/nshape-spy-2026-10-01-mnq-original-lower-cost-672234b78850/PERFORMANCE.md) · [Run JSON](runs/nshape-spy-2026-10-01-mnq-original-lower-cost-672234b78850/run.json) · [Metrics JSON](runs/nshape-spy-2026-10-01-mnq-original-lower-cost-672234b78850/summary.json) |
| MNQ | original-double-cost | signal-event | reported | [Summary](runs/nshape-spy-2026-10-01-mnq-original-double-cost-2a6a90f8d572/PERFORMANCE.md) · [Run JSON](runs/nshape-spy-2026-10-01-mnq-original-double-cost-2a6a90f8d572/run.json) · [Metrics JSON](runs/nshape-spy-2026-10-01-mnq-original-double-cost-2a6a90f8d572/summary.json) |
| SPY | corrected-base | signal-event | reported | [Summary](runs/nshape-spy-2026-10-01-spy-corrected-base-bb8a28d1a40a/PERFORMANCE.md) · [Run JSON](runs/nshape-spy-2026-10-01-spy-corrected-base-bb8a28d1a40a/run.json) · [Metrics JSON](runs/nshape-spy-2026-10-01-spy-corrected-base-bb8a28d1a40a/summary.json) |
| SPY | double-total-cost | signal-event | reported | [Summary](runs/nshape-spy-2026-10-01-spy-double-total-cost-dc0794edbc0e/PERFORMANCE.md) · [Run JSON](runs/nshape-spy-2026-10-01-spy-double-total-cost-dc0794edbc0e/run.json) · [Metrics JSON](runs/nshape-spy-2026-10-01-spy-double-total-cost-dc0794edbc0e/summary.json) |
| SPY | selected-fixed-r | strategy | reported | [Summary](runs/nshape-spy-2026-07-16-spy-selected-fixed-r-9212b01e6361/PERFORMANCE.md) · [Run JSON](runs/nshape-spy-2026-07-16-spy-selected-fixed-r-9212b01e6361/run.json) · [Metrics JSON](runs/nshape-spy-2026-07-16-spy-selected-fixed-r-9212b01e6361/summary.json) |
<!-- STANDARDIZED PERFORMANCE: END -->
