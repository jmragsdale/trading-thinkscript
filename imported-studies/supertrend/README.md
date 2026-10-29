# Mobius Supertrend

Plots an ATR-based alternating trend line with optional price-bar coloring and crossing bubbles.

**TOS installed name(s):** `supertrend`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](supertrend.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use on a price chart. Saved defaults are ATR multiplier 1, length 4, Hull averaging and PaintBars=yes.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `AtrMult` | `1.0` |
| `nATR` | `4` |
| `AvgType` | `AverageType.HULL` |
| `PaintBars` | `yes` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `SuperTrend`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The recursive line can change on the active candle. Bubbles are visual references, not simulated fills or execution instructions.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits Mobius, version V03.10.2015. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
