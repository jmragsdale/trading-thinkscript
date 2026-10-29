# Wash and Rinse: different-model results only

**No verified metrics for the captured WashRinse v2 ThinkScript study, scanner or strategy.** A separately saved Python wash model has quantitative results, but its rules differ materially. It must not be presented as a result of these ThinkScripts.

October 1 audit: one-minute MNQ RTH input June 10, 2021–June 9, 2026; 20-bar previous-range lookback, 3-bar confirmation, reversal candle, ATR14 simple mean, 1ATR stop, **0.6ATR target**, next-open 09:35–15:30 ET entries, 15:55 flatten, one position, stop first. The current ThinkScript family uses different swing/state rules and a default **2R** strategy target. The original TOS source was absent from that earlier Python census, so no source hash/runtime match was established.

| Different Python model | Value |
| --- | ---: |
| Completed trades | 32,641 |
| Net modeled USD, one MNQ | -93,038.95 |
| Profit factor | 0.733459 |
| Closed-equity max drawdown USD | 93,142.10 |

Research benchmark cost was $1.90 round-trip fee plus 0.25-point slippage each side, totaling $2.90/contract; this is a historical model assumption. RTH slices were concatenated, so overnight gaps enter ATR; stops were idealized across gaps. The result is negative for that Python adaptation, and establishes neither profitability nor the same loss amount for the current TOS strategy. The study and scanner have no complete execution ledger of their own.

## Saved evidence

- [wash-python-audit](evidence/wash-python-audit.json)
- [wash-research-report](evidence/wash-research-report.txt)

Source locations, original hashes and published evidence hashes are in the [performance registry](../../performance.json). Evidence files preserve historical wording; superseded conclusions in them are not endorsed.

<!-- STANDARDIZED PERFORMANCE: START -->
## Standardized records

1 saved configurations use the [common format](FORMAT.md). Records retain their platform, costs, exact-source relationship, evidence status and missing-field reasons. No new backtest was run.

| Instrument | Configuration | Type | Status | Files |
| --- | --- | --- | --- | --- |
| MNQ | different-python-default | strategy | reported | [Summary](runs/wash-rinse-v2-2026-10-01-mnq-different-python-default-a1b0d3c86a86/PERFORMANCE.md) · [Run JSON](runs/wash-rinse-v2-2026-10-01-mnq-different-python-default-a1b0d3c86a86/run.json) · [Metrics JSON](runs/wash-rinse-v2-2026-10-01-mnq-different-python-default-a1b0d3c86a86/summary.json) |
<!-- STANDARDIZED PERFORMANCE: END -->
