# Volatility Trailing Stop

Maintains an ATR trailing level using the highest close in an uptrend or lowest close in a downtrend.

**TOS installed name(s):** `VolatilityStop`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](VolatilityStop.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Add to a price chart; defaults are ATR period 10, factor 1.5, initial long state and simple averaging.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `ATRPeriod` | `10` |
| `ATRFactor` | `1.5` |
| `firstTrade` | `{default long, short}` |
| `averageType` | `AverageType.SIMPLE` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `TrailingStop`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

A plotted trailing level is a reference, not a broker stop. Initial state and active-candle changes affect its path.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits Steve Coombs, version 1.1. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
