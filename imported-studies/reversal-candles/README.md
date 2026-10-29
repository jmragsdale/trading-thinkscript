# Blown Top, Saikou and Hikui Reversal Candles

Marks three reversal-candle patterns from relative range, extremes, candle body and prior-bar comparisons.

**TOS installed name(s):** `Reversal_Candles`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](Reversal_Candles.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use as an upper chart study; n=10 governs the Blown Top branch and n2=5 the Saikou/Hikui branches.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `n` | `10` |
| `n2` | `5` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `HighRB`, `Saikou`, `Hikui`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

Arrows and bubbles describe candle geometry. No position tracking, stop model, alerts or measured reversal probabilities are supplied.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits Mobius, including 2014-2016 chat-room versions. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
