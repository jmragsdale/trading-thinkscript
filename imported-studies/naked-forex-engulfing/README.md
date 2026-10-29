# Naked Forex Engulfing Colors

Colors price bars from engulfing-style candle and prior-direction conditions.

**TOS installed name(s):** `NakedFXEngulfing`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](NakedFXEngulfing.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Add to a price chart and review the saved 7-bar room-to-the-left and largest-candle inputs. Yellow/white mark the coded bearish/bullish branches; other bars are magenta.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `roomToTheLeftPeriod` | `7` |
| `largestCandlePeriod` | `7` |

## Outputs and alerts

No named plot declaration was detected; this source uses labels and/or price-bar coloring.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The saved largestCandle expression uses Max(range, period), not a rolling highest range. The bullish expression chains numeric differences as booleans. These are questionable saved rules; no repair was made.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Assembled by BenTen at useThinkScript; source credits a TradingView conversion. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
