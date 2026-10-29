# ICT Displacement Retest Study

Tests a prior secondary-timeframe range against ATR, a current volume contraction and a retest of the prior candle boundary.

**TOS installed name(s):** `ICTDisplacementStudy`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](ICTDisplacementStudy.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use a chart at or below the selected customAggregation; the saved setting is FIVE_MIN. Inspect the boolean bullish/bearish retest plots.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `displacementMultiplier` | `1.0` |
| `volumeDropThreshold` | `0.7` |
| `customAggregation` | `AggregationPeriod.FIVE_MIN` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `scan`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

Secondary aggregation makes it chart-only. Current secondary-bar volume is provisional. The exact boundary conditions are the saved implementation, not independently verified ICT rule parity.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

No author identified in the captured source. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
