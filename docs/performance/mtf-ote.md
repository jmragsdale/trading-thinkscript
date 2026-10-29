# MTF OTE: clean related model and withdrawn claims

**Related Python execution model, not a backtest of this chart study.** The July 27, 2026 clean-engine re-score replaced a lookahead-contaminated generator with engine_v3 at 15-minute HTF / 1-minute chart geometry. Broad period June 2021–June 2026 (MGC begins July 12, 2021). Entry fib 0.705, 0.10×ATR stop, target fib 0.0, bias lookback 20; 03:00–05:00 / 09:30–12:00 / 14:00–15:55 ET sessions. No fill before a resting order or on the arm bar; stop first on ambiguous 1-minute bars.

| Symbol | Clean model trades | Win rate | Gross PF | Net PF |
| --- | ---: | ---: | ---: | ---: |
| MNQ | 3,273 | 34.52% | 1.145 | 0.923 |
| MYM | 2,977 | 36.31% | 1.244 | 0.770 |
| MGC | 2,799 | 33.65% | 1.111 | 0.784 |

Net PF applies engine_v3 per-contract cost assumptions ($2.50 round trip on actual quantity). It is the net column, not the gross PF, that includes those modeled costs. None of these three net PFs exceeds 1.

The related combined MNQ+MYM risk-managed package illustrates cost sensitivity: same clean generator, 5 daily entries, -2.5R/+4.5R daily limits, 1R=$200. Under incumbent fixed-R costs, five-year net was +$43,302; costing $2.50 per contract round trip on actual quantity changed it to **-$104,692**. July 30 rebaseline reports 41 losing months of 61 and trailing July 2025–June 2026 net -$34,694 under per-contract costs. These are package-level modeled dollars, not standalone TOS-study returns or broker outcomes.

**Superseded:** prior ~91.8% package pass / 6.0% fail and related “live-ready” claims descended from a future-leaking generator and were explicitly voided. The clean audit rejected that package. The July 15 daily OTE report is also historical and has not been established as a clean rerun. No exact ThinkScript signal/price/state parity or native TOS performance was verified.

## Saved evidence

- [mtf-clean-rescore](evidence/mtf-clean-rescore.txt)
- [mtf-cost-rebaseline](evidence/mtf-cost-rebaseline.txt)

Source locations, original hashes and published evidence hashes are in the [performance registry](../../performance.json). Evidence files preserve historical wording; superseded conclusions in them are not endorsed.

<!-- STANDARDIZED PERFORMANCE: START -->
## Standardized records

5 saved configurations use the [common format](FORMAT.md). Records retain their platform, costs, exact-source relationship, evidence status and missing-field reasons. No new backtest was run.

| Instrument | Configuration | Type | Status | Files |
| --- | --- | --- | --- | --- |
| MNQ | clean-15m-1m | strategy | reported | [Summary](runs/mtf-ote-2026-07-27-mnq-clean-15m-1m-e6b3d91734ab/PERFORMANCE.md) · [Run JSON](runs/mtf-ote-2026-07-27-mnq-clean-15m-1m-e6b3d91734ab/run.json) · [Metrics JSON](runs/mtf-ote-2026-07-27-mnq-clean-15m-1m-e6b3d91734ab/summary.json) |
| MYM | clean-15m-1m | strategy | reported | [Summary](runs/mtf-ote-2026-07-27-mym-clean-15m-1m-304a7ecefd1d/PERFORMANCE.md) · [Run JSON](runs/mtf-ote-2026-07-27-mym-clean-15m-1m-304a7ecefd1d/run.json) · [Metrics JSON](runs/mtf-ote-2026-07-27-mym-clean-15m-1m-304a7ecefd1d/summary.json) |
| MGC | clean-15m-1m | strategy | reported | [Summary](runs/mtf-ote-2026-07-27-mgc-clean-15m-1m-40c09a088f6b/PERFORMANCE.md) · [Run JSON](runs/mtf-ote-2026-07-27-mgc-clean-15m-1m-40c09a088f6b/run.json) · [Metrics JSON](runs/mtf-ote-2026-07-27-mgc-clean-15m-1m-40c09a088f6b/summary.json) |
| MNQ+MYM | package-incumbent-fixed-r | strategy | reported | [Summary](runs/mtf-ote-2026-07-30-mnq-mym-package-incumbent-fixed-r-211aca54ce22/PERFORMANCE.md) · [Run JSON](runs/mtf-ote-2026-07-30-mnq-mym-package-incumbent-fixed-r-211aca54ce22/run.json) · [Metrics JSON](runs/mtf-ote-2026-07-30-mnq-mym-package-incumbent-fixed-r-211aca54ce22/summary.json) |
| MNQ+MYM | package-per-contract-cost | strategy | reported | [Summary](runs/mtf-ote-2026-07-30-mnq-mym-package-per-contract-cost-5c1912259a49/PERFORMANCE.md) · [Run JSON](runs/mtf-ote-2026-07-30-mnq-mym-package-per-contract-cost-5c1912259a49/run.json) · [Metrics JSON](runs/mtf-ote-2026-07-30-mnq-mym-package-per-contract-cost-5c1912259a49/summary.json) |
<!-- STANDARDIZED PERFORMANCE: END -->
