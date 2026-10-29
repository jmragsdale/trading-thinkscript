# OTE Wheel: historical daily report, lineage unresolved

**Historical, not revalidated after the OTE lineage audit.** July 15, 2026 Python daily-bar report predates the July 27/30 lookahead remediation. No clean rerun of this daily study was found, and no exact match to the current v4 ThinkScript or installed v3 snapshots was established.

| Historical population | Setups | Mean R | Win rate |
| --- | ---: | ---: | ---: |
| 13 pooled equity/futures symbols | 1,643 | +0.359 | 50.3% |
| 8 pooled FX majors | 2,283 | -0.126 | 32.9% |

The first pool includes SPY, MES, MNQ, MYM, MGC, AAPL, MSFT, AMD, NVDA, KO, XOM, DIS and PYPL, using owned bars plus a five-year yfinance download. The report does not establish one common exact start/end period for every symbol. Pooling instruments does not describe a tradable portfolio. These figures are recorded as historical claims only; the positive result is **not validated current performance**.

Bullish zone-hold percentages at 7 / 14 / 21 trading days were 26.6% / 18.3% / 15.8% for touch-hold, 62.1% / 56.2% / 52.2% for expiry-hold at the swing strike, and 74.4% / 65.9% / 59.5% with 1% cushion. These are historical underlying price-event frequencies, not put-selling profits or probabilities of avoiding real assignment. Option premium, bid/ask spread, assignment, capital usage, dividends and realized wheel returns were not established.

The later clean [MTF OTE audit](mtf-ote.md) invalidated the shared older generator lineage; it did not explicitly rerun this daily report. Neither the scanner nor helper can inherit profitability from this historical table. Current v4 also removes the installed v3 earnings event gate; per-chart overrides and exact runtime signals remain unverified.

## Saved evidence

- [daily-ote-historical](evidence/daily-ote-historical.txt)
- [mtf-clean-rescore](evidence/mtf-clean-rescore.txt)
- [mtf-cost-rebaseline](evidence/mtf-cost-rebaseline.txt)

Source locations, original hashes and published evidence hashes are in the [performance registry](../../performance.json). Evidence files preserve historical wording; superseded conclusions in them are not endorsed.

<!-- STANDARDIZED PERFORMANCE: START -->
## Standardized records

2 saved configurations use the [common format](FORMAT.md). Records retain their platform, costs, exact-source relationship, evidence status and missing-field reasons. No new backtest was run.

| Instrument | Configuration | Type | Status | Files |
| --- | --- | --- | --- | --- |
| 13 equity/futures symbols | historical-equity-futures | historical-aggregate | historical-unrevalidated | [Summary](runs/ote-wheel-2026-07-15-13-equity-futures-symbols-historical-equity-futures-ce354db979a6/PERFORMANCE.md) · [Run JSON](runs/ote-wheel-2026-07-15-13-equity-futures-symbols-historical-equity-futures-ce354db979a6/run.json) · [Metrics JSON](runs/ote-wheel-2026-07-15-13-equity-futures-symbols-historical-equity-futures-ce354db979a6/summary.json) |
| 8 FX majors | historical-fx | historical-aggregate | historical-unrevalidated | [Summary](runs/ote-wheel-2026-07-15-8-fx-majors-historical-fx-c2726b2929dc/PERFORMANCE.md) · [Run JSON](runs/ote-wheel-2026-07-15-8-fx-majors-historical-fx-c2726b2929dc/run.json) · [Metrics JSON](runs/ote-wheel-2026-07-15-8-fx-majors-historical-fx-c2726b2929dc/summary.json) |
<!-- STANDARDIZED PERFORMANCE: END -->
