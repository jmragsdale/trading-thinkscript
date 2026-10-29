# Displacement wick: signal measurements and revised model

These are **offline signal-event measurements**, not strategy profits or Thinkorswim Strategy Report results. The October 1, 2026 harness ported the detector from saved ThinkScript. The frozen source hashes match library files, but TOS runtime parity remains unverified.

Input coverage: MNQ June 10, 2021–June 9, 2026; SPY July 12, 2021–July 10, 2026. Signals, entry and endpoints are restricted to RTH; detector history includes the loaded full session. First/last years are partial. Entry measurement is next-bar open; endpoint is directional close after 1, 3, 5 or 10 bars. This does not execute plotted stops, targets or exit alerts.

Within each detector/side, retain the first event then require more than 10 signal bars before another. Opposite sides/families can overlap. Missing-minute, date-change and contract-change horizons are excluded; count can fall with horizon. MNQ uses previous available ET-date volume to choose the front outright contract and resets on contract change.

**Costs:** MNQ corrected scenario subtracts $2.90 per one-contract round trip (1.45 points: historical $1.90 fees plus 0.25-point slippage each side). SPY subtracts $0.02/share; this is an underlying proxy, with no option P&L inference. These are October 1 assumptions, not a current fee quotation. Full CSV also retains the original lower MNQ cost case and double-total-cost sensitivity.

Matched excess compares with descriptive full-sample year × 30-minute time bucket × EMA200-side means. Confidence intervals are day-block bootstrap 95%, 500 fixed-seed resamples; exploratory multiple comparisons are uncorrected. The tables report all pooled horizons, not a selected best result.

**Adaptation:** 15-minute detector with default strength 1, FVG off, newest zone per side, strict first sweep at age 1–49 bars. The Python port explicitly initializes empty zone state; TOS recursive initialization has not been reconciled. The frozen scanner source matches the archived multi-plot version, not the corrected current single-plot scanner. The chart study hash matches the current study. All pooled mean net returns below are negative.

| Instrument | Signal | Bar minutes | Horizon bars | Events | Mean net points/event | Matched excess points | Excess 95% CI |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| MNQ | Wick_short | 15 | 1 | 1364 | -2.70916 | -1.04782 | [-2.96764, +0.88072] |
| MNQ | Wick_short | 15 | 3 | 1285 | -4.79300 | -3.02884 | [-6.16099, +0.14979] |
| MNQ | Wick_short | 15 | 5 | 1189 | -2.33688 | +0.03639 | [-4.19302, +4.47885] |
| MNQ | Wick_short | 15 | 10 | 927 | -5.08916 | -1.18787 | [-8.12068, +5.48986] |
| MNQ | Wick_long | 15 | 1 | 1352 | -0.51620 | +0.77327 | [-1.34826, +2.98273] |
| MNQ | Wick_long | 15 | 3 | 1256 | -3.82321 | -2.52606 | [-6.02806, +1.20529] |
| MNQ | Wick_long | 15 | 5 | 1167 | -4.19314 | -3.36784 | [-8.45334, +1.48409] |
| MNQ | Wick_long | 15 | 10 | 948 | -4.36825 | -5.38538 | [-12.78591, +1.56028] |
| SPY | Wick_short | 15 | 1 | 1077 | -0.02587 | -0.00418 | [-0.05768, +0.05280] |
| SPY | Wick_short | 15 | 3 | 1001 | -0.06811 | -0.04503 | [-0.11979, +0.02961] |
| SPY | Wick_short | 15 | 5 | 926 | -0.06393 | -0.02618 | [-0.14449, +0.08895] |
| SPY | Wick_short | 15 | 10 | 733 | -0.00478 | +0.04953 | [-0.13773, +0.23910] |
| SPY | Wick_long | 15 | 1 | 1110 | -0.03865 | -0.02305 | [-0.06670, +0.02203] |
| SPY | Wick_long | 15 | 3 | 1036 | -0.06882 | -0.05669 | [-0.13457, +0.03816] |
| SPY | Wick_long | 15 | 5 | 966 | -0.06212 | -0.05860 | [-0.18118, +0.06509] |
| SPY | Wick_long | 15 | 10 | 760 | -0.10368 | -0.13500 | [-0.31233, +0.04340] |

A point is $1/share for SPY and $2 per one MNQ contract. Negative mean net points are not evidence of a profitable executable strategy. Matched excess can be positive while absolute net return is negative. No strategy win rate, realized drawdown, profit factor or prop pass probability is established by these event endpoints.

## Earlier Pine/Python model: controlling verification update

The June 21 comparison used NQ data April 20–May 11, 2026 (16 sessions), resampled to 5 minutes. Its verification update supersedes the earlier optimistic tables. These are different Pine/Python market-entry rules, not the TOS sweep-event detector above.

| Market-entry model configuration | Trades | Win rate | Mean R |
| --- | ---: | ---: | ---: |
| Lookback 100, cooldown 3, loss-pause on | 39 | 35.9% | -0.23 |
| Lookback 100, cooldown 0, pause off | 56 | 46.4% | -0.04 |
| Lookback 20, cooldown 3, pause on | 44 | 45.5% | 0.00 |
| Lookback 20, cooldown 0, pause off | 61 | 47.5% | +0.07 |

Target 1.5R, no trend gate or breakeven in these rows. The retrieved summary does not establish realistic execution costs. The small sample and sensitivity to throttles make the result unproven. **The older ~84% evaluation-pass, ~54% win-rate and +0.20R claims were explicitly withdrawn.** They are preserved only inside the historical evidence document, not adopted as library performance.

## Saved evidence

- [wick-verification-update](evidence/wick-verification-update.txt)
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

11 saved configurations use the [common format](FORMAT.md). Records retain their platform, costs, exact-source relationship, evidence status and missing-field reasons. No new backtest was run.

| Instrument | Configuration | Type | Status | Files |
| --- | --- | --- | --- | --- |
| MNQ | corrected-base | signal-event | reported | [Summary](runs/displacement-wick-2026-10-01-mnq-corrected-base-4dc8b5bebc6e/PERFORMANCE.md) · [Run JSON](runs/displacement-wick-2026-10-01-mnq-corrected-base-4dc8b5bebc6e/run.json) · [Metrics JSON](runs/displacement-wick-2026-10-01-mnq-corrected-base-4dc8b5bebc6e/summary.json) |
| MNQ | double-total-cost | signal-event | reported | [Summary](runs/displacement-wick-2026-10-01-mnq-double-total-cost-7554dd684906/PERFORMANCE.md) · [Run JSON](runs/displacement-wick-2026-10-01-mnq-double-total-cost-7554dd684906/run.json) · [Metrics JSON](runs/displacement-wick-2026-10-01-mnq-double-total-cost-7554dd684906/summary.json) |
| MNQ | original-lower-cost | signal-event | reported | [Summary](runs/displacement-wick-2026-10-01-mnq-original-lower-cost-30286a6173d4/PERFORMANCE.md) · [Run JSON](runs/displacement-wick-2026-10-01-mnq-original-lower-cost-30286a6173d4/run.json) · [Metrics JSON](runs/displacement-wick-2026-10-01-mnq-original-lower-cost-30286a6173d4/summary.json) |
| MNQ | original-double-cost | signal-event | reported | [Summary](runs/displacement-wick-2026-10-01-mnq-original-double-cost-c5143b5c6668/PERFORMANCE.md) · [Run JSON](runs/displacement-wick-2026-10-01-mnq-original-double-cost-c5143b5c6668/run.json) · [Metrics JSON](runs/displacement-wick-2026-10-01-mnq-original-double-cost-c5143b5c6668/summary.json) |
| SPY | corrected-base | signal-event | reported | [Summary](runs/displacement-wick-2026-10-01-spy-corrected-base-a79e7b9bf545/PERFORMANCE.md) · [Run JSON](runs/displacement-wick-2026-10-01-spy-corrected-base-a79e7b9bf545/run.json) · [Metrics JSON](runs/displacement-wick-2026-10-01-spy-corrected-base-a79e7b9bf545/summary.json) |
| SPY | double-total-cost | signal-event | reported | [Summary](runs/displacement-wick-2026-10-01-spy-double-total-cost-1efbe445659e/PERFORMANCE.md) · [Run JSON](runs/displacement-wick-2026-10-01-spy-double-total-cost-1efbe445659e/run.json) · [Metrics JSON](runs/displacement-wick-2026-10-01-spy-double-total-cost-1efbe445659e/summary.json) |
| NQ | market-lb100-cd3-pause1 | strategy | reported | [Summary](runs/displacement-wick-2026-06-21-nq-market-lb100-cd3-pause1-af8fde09ef9f/PERFORMANCE.md) · [Run JSON](runs/displacement-wick-2026-06-21-nq-market-lb100-cd3-pause1-af8fde09ef9f/run.json) · [Metrics JSON](runs/displacement-wick-2026-06-21-nq-market-lb100-cd3-pause1-af8fde09ef9f/summary.json) |
| NQ | market-lb100-cd0-pause0 | strategy | reported | [Summary](runs/displacement-wick-2026-06-21-nq-market-lb100-cd0-pause0-f2cfcbde7f70/PERFORMANCE.md) · [Run JSON](runs/displacement-wick-2026-06-21-nq-market-lb100-cd0-pause0-f2cfcbde7f70/run.json) · [Metrics JSON](runs/displacement-wick-2026-06-21-nq-market-lb100-cd0-pause0-f2cfcbde7f70/summary.json) |
| NQ | market-lb20-cd3-pause1 | strategy | reported | [Summary](runs/displacement-wick-2026-06-21-nq-market-lb20-cd3-pause1-0fc10bf8c286/PERFORMANCE.md) · [Run JSON](runs/displacement-wick-2026-06-21-nq-market-lb20-cd3-pause1-0fc10bf8c286/run.json) · [Metrics JSON](runs/displacement-wick-2026-06-21-nq-market-lb20-cd3-pause1-0fc10bf8c286/summary.json) |
| NQ | market-lb20-cd0-pause0 | strategy | reported | [Summary](runs/displacement-wick-2026-06-21-nq-market-lb20-cd0-pause0-dc1fc00d2bd5/PERFORMANCE.md) · [Run JSON](runs/displacement-wick-2026-06-21-nq-market-lb20-cd0-pause0-dc1fc00d2bd5/run.json) · [Metrics JSON](runs/displacement-wick-2026-06-21-nq-market-lb20-cd0-pause0-dc1fc00d2bd5/summary.json) |
| NQ | withdrawn-sandbox | strategy | withdrawn | [Summary](runs/displacement-wick-2026-06-21-nq-withdrawn-sandbox-1790b7580826/PERFORMANCE.md) · [Run JSON](runs/displacement-wick-2026-06-21-nq-withdrawn-sandbox-1790b7580826/run.json) · [Metrics JSON](runs/displacement-wick-2026-06-21-nq-withdrawn-sandbox-1790b7580826/summary.json) |
<!-- STANDARDIZED PERFORMANCE: END -->
