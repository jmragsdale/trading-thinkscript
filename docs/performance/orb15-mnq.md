# ORB15 MNQ: saved native Pine results and model limits

**Native TradingView/Pine hypothetical trade exports; TOS equivalence remains unverified.** Saved October 1, 2026, CME_MINI:MNQ1! standard one-minute candles, electronic hours, back-adjustment off. Report window September 6–October 1; completed trades September 7–October 1, 2026. One MNQ, $50,000 research capital, $0.95/contract/side commission, one tick adverse slippage, no live routing.

| Mode | Completed trades | Wins | Win rate | Net USD | PF from net trade P&L | Closed-trade max DD USD |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Original | 19 | 7 | 36.84% | 98.40 | 1.0509 | 836.00 |
| StopCap100 | 19 | 4 | 21.05% | 250.90 | 1.1783 | 599.40 |

Net totals and win counts match the native verification memo. Win rate, profit factor and drawdown above were recomputed from **exit rows only** in the saved trade exports during organization. PF = sum of positive net trade P&L / absolute sum of negative net trade P&L. Drawdown = largest peak-to-trough decline of cumulative completed-trade net P&L, starting at zero; this is **not intratrade marked drawdown** or the native platform's drawdown statistic. These are two modes on the same 19 entries, not 38 independent trades.

Thirteen capped exits lost $99.90 each; three target exits gained $485.60 each. The small sample cannot establish an edge. A planned $100 cap is not a hard loss guarantee: gaps, unprotected fill bars and liquidity can exceed it. Native bar exports omitted the opening/fill bars; entry/exit priority, holiday gaps and full TOS/Pine parity remain unresolved.

## Older historical model: not revalidated

The research guide records a separate five-year Python experiment with 1,203 entries: Original approximately $20,628–$20,908 net versus StopCap100 $11,930–$12,210; capped marked drawdown about $2,883. These are historical OHLC-path scenarios, not rigorous outcome bounds. The historical runner omitted two queued-activation rebound semantics later corrected in fixtures, and totals were **not rerun after correction**. They are provenance only, not results of the current ThinkScript. Partial 2026 was negative. Do not combine the five-year Python figures with this short native Pine export.

## Saved evidence

- [orb-native-report](evidence/orb-native-report.txt)
- [orb-original-trades](evidence/orb-original-trades.csv)
- [orb-capped-trades](evidence/orb-capped-trades.csv)
- [orb-research-guide](evidence/orb-research-guide.txt)

Source locations, original hashes and published evidence hashes are in the [performance registry](../../performance.json). Evidence files preserve historical wording; superseded conclusions in them are not endorsed.

<!-- STANDARDIZED PERFORMANCE: START -->
## Standardized records

4 saved configurations use the [common format](FORMAT.md). Records retain their platform, costs, exact-source relationship, evidence status and missing-field reasons. No new backtest was run.

| Instrument | Configuration | Type | Status | Files |
| --- | --- | --- | --- | --- |
| MNQ | Original | strategy | reported | [Summary](runs/orb15-mnq-2026-10-01-mnq-original-f22dc4a0ecef/PERFORMANCE.md) · [Run JSON](runs/orb15-mnq-2026-10-01-mnq-original-f22dc4a0ecef/run.json) · [Metrics JSON](runs/orb15-mnq-2026-10-01-mnq-original-f22dc4a0ecef/summary.json) |
| MNQ | StopCap100 | strategy | reported | [Summary](runs/orb15-mnq-2026-10-01-mnq-stopcap100-77e371ad3894/PERFORMANCE.md) · [Run JSON](runs/orb15-mnq-2026-10-01-mnq-stopcap100-77e371ad3894/run.json) · [Metrics JSON](runs/orb15-mnq-2026-10-01-mnq-stopcap100-77e371ad3894/summary.json) |
| MNQ | historical-Original | strategy | historical-unrevalidated | [Summary](runs/orb15-mnq-2026-10-01-mnq-historical-original-cb1e9d3bcb3b/PERFORMANCE.md) · [Run JSON](runs/orb15-mnq-2026-10-01-mnq-historical-original-cb1e9d3bcb3b/run.json) · [Metrics JSON](runs/orb15-mnq-2026-10-01-mnq-historical-original-cb1e9d3bcb3b/summary.json) |
| MNQ | historical-StopCap100 | strategy | historical-unrevalidated | [Summary](runs/orb15-mnq-2026-10-01-mnq-historical-stopcap100-132c2a7fc1d6/PERFORMANCE.md) · [Run JSON](runs/orb15-mnq-2026-10-01-mnq-historical-stopcap100-132c2a7fc1d6/run.json) · [Metrics JSON](runs/orb15-mnq-2026-10-01-mnq-historical-stopcap100-132c2a7fc1d6/summary.json) |
<!-- STANDARDIZED PERFORMANCE: END -->
