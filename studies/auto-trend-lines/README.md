# Automatic Regression Trend Lines

Draws three pairs of regression-style channel lines using InertiaAll and whole-chart maximum deviations.

**TOS installed name(s):** `AutoTL`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](AutoTL.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use on a price chart with the saved 50, 30 and 10 bar lengths. Read each channel as a visual trend reference.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `TrendLineLength1` | `50` |
| `TrendLineLength2` | `30` |
| `TrendLineLength3` | `10` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `TrendLine1a`, `TrendLine1b`, `TrendLine2a`, `TrendLine2b`, `TrendLine3a`, `TrendLine3b`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

InertiaAll and HighestAll depend on the loaded chart. Historical lines can change when history or the chart endpoint changes; not a demonstrated causal signal.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

No author identified in the captured source. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
