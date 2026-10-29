# Buy the Dip with EMA Confluence

Combines distance from an SMA, RSI extremes, elevated volume and 10/20/50/200 EMA stacking to mark bullish dips and bearish rallies.

**TOS installed name(s):** `BTDStudy`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](BTDStudy.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Add to a chart and begin with the saved 50-bar SMA, 2% distance thresholds, RSI 14 and 1.5x volume filter.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `maLength` | `50` |
| `dipPercentThreshold` | `2.0` |
| `rallyPercentThreshold` | `2.0` |
| `rsiLength` | `14` |
| `oversoldThreshold` | `30` |
| `overboughtThreshold` | `70` |
| `volumeMultiplier` | `1.5` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `LongSignal`, `ShortSignal`, `EMA10Plot`, `EMA20Plot`, `EMA50Plot`, `EMA200Plot`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

Signals require multiple simultaneous conditions and may be sparse. No orders or measured outcomes are implemented.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

No author identified in the captured source. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
