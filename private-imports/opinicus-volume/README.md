# Opinicus Volume Data — Local Reference

Shows current-day volume versus a prior 30-day average and current-bar volume versus a prior 30-bar average.

**TOS installed name(s):** `shared_shared_OpinicusVolumen`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

Local source: `shared_shared_OpinicusVolumen.thinkscript`. Its source is Git-ignored and omitted from the upload ZIP because its header says individual use only. The full local installed-script backup retains it.

## Usage

For local use, add to the chart volume area; review the visibility inputs and saved 200% unusual-volume threshold. Daily aggregation must be compatible with the chart.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `Show30DayAvg` | `yes` |
| `ShowTodayVolume` | `yes` |
| `ShowPercentOf30DayAvg` | `yes` |
| `UnusualVolumePercent` | `200` |
| `Show30BarAvg` | `yes` |
| `ShowCurrentBar` | `yes` |

## Outputs and alerts

No named plot declaration was detected; this source uses labels and/or price-bar coloring.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The source header explicitly limits the software to individual use. Captured source remains local and is excluded from the GitHub upload ZIP. It is included only in the separate local installed-script backup.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits Kyle / Opinicus Holdings, 2018-2019; individual-use-only header preserved. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
