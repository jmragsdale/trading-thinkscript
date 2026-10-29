# Trend Reversal ZigZag Arrows

Combines 9/14/21 EMA state definitions with ZigZagHighLow-derived bullish and bearish arrows.

**TOS installed name(s):** `shared_shared_ThinkScriptTrendReverse`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](shared_shared_ThinkScriptTrendReverse.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Install as a chart study. method selects smoothed average highs/lows versus raw highs/lows.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `method` | `{default average, high_low}` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `upArrow`, `downArrow`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The saved file has two output plots despite Scanner in its header. ZigZag pivots can revise; it is not a direct one-plot Stock Hacker filter or a validated non-repainting signal.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits theelderwand / useThinkScript. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
