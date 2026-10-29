# VWAP Rejection Arrows

Draws VWAP and marks bullish/bearish three-bar rejection patterns with a configurable raw-price distance.

**TOS installed name(s):** `VWAPReject`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](VWAPReject.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use a chart compatible with the selected DAY/WEEK/MONTH VWAP period. Default distance=0.50 is a price-unit amount, not a percent.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `numDevDn` | `-2.0` |
| `numDevUp` | `2.0` |
| `timeFrame` | `{ default DAY, WEEK, MONTH }` |
| `distance` | `0.50` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `VWAP`, `bullish`, `bearish`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The preceding candle is compared with the current VWAP value in some conditions. The deviation inputs are not used by the plotted VWAP or signal logic. No fills or alerts are implemented.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

No author identified in the captured source. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
