# Volume Price Analysis

Classifies price spread, closing location, volume and trend slopes into upthrust, test, weakness and strength patterns with chart symbols and labels.

**TOS installed name(s):** `shared_shared_shared_ThinkVolumePriceAnalysis`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](shared_shared_shared_ThinkVolumePriceAnalysis.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Add to a chart and read the symbol legend in the source header. Start with volumeEMALength=30; bar colors and alerts are optional and off by default.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `volumeEMALength` | `30` |
| `narrowSpreadFactor` | `0.7` |
| `wideSpreadFactor` | `1.5` |
| `aboveAvgVolfactor` | `1.5` |
| `ultraHighVolfactor` | `2` |
| `highCloseFactor` | `0.70` |
| `lowCloseFactor` | `0.25` |
| `colorBars` | `{default false, true}` |
| `trendText` | `{false, default true}` |
| `volumeDefinitions` | `{ false, default true }` |
| `alerts` | `{ default false, true }` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `upThrustBarPlot`, `reversalLikelyBarPlot`, `isNewConfirmedUpThrustBarPlot`, `strengthInDownTrendPlot`, `strengthInDownTrend1Plot`, `supplyTestInUpTrendBarPlot`, `successfulSupplyTestBarPlot`, `stopVolBarPlot`, `isStrengthConfirmationBarPlot`, `isPseudoUpThrustBarPlot`, `pseudoUpThrustConfirmationPlot`, `weaknessBarPlot`, `strengthInDownTrend2Plot`, `distributionBarPlot`, `supplyTestBarPlot`, `noDemandBarPlot`, `noSupplyBarPlot`, `effortToMoveUpBarPlot`, `effortToMoveDownBarPlot`.

Native `Alert()` calls detected: 1. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

This is a NinjaTrader VPA conversion with documented symbol-shape substitutions. Labels such as strength/reversal are heuristic pattern descriptions, not verified probabilities or order flow.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Shared conversion; original component comments and symbol legend preserved. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
