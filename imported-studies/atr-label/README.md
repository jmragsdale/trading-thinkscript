# Daily ATR Label

Displays an ATR label calculated from completed bars of a selected base aggregation.

**TOS installed name(s):** `shared_shared_ThinkATR`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](shared_shared_ThinkATR.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use on a compatible price chart; defaults are DAY, length 14 and Wilders smoothing. Toggle showlabel to hide the display.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `ATRLength` | `14` |
| `averagetype` | `AverageType.WILDERS` |
| `BasePeriod` | `AggregationPeriod.DAY` |
| `showlabel` | `yes` |

## Outputs and alerts

No named plot declaration was detected; this source uses labels and/or price-bar coloring.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

Today-high/low and daily-range definitions are computed but not displayed. Secondary aggregation prevents direct Stock Hacker use.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Installed under a shared name; no individual author identified. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
