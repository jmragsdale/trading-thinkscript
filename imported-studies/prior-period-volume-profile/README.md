# Prior-Period Volume Profile

Displays prior-day, prior-week and prior-month volume-profile value-area and point-of-control levels.

**TOS installed name(s):** `CustomVolumeProfile`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](CustomVolumeProfile.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use a price chart with volume data. Toggle daily, weekly and monthly level groups and their historical visibility; daily and weekly are enabled by default.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `showDaily` | `yes` |
| `showAllDailies` | `no` |
| `showWeekly` | `yes` |
| `showAllWeeks` | `yes` |
| `showMonthly` | `no` |
| `showBubbles` | `yes` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `vahprev`, `pocprev`, `valprev`, `vahprevweek`, `pocprevweek`, `valprevweek`, `vahprevmonth`, `pocprevmonth`, `valprevmonth`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

Latest-day/week/month display logic and the loaded chart history affect which levels appear. Source uses a future-bar reference to locate an edge bubble, so do not interpret every negative index as a trade signal.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits tony_futures. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
