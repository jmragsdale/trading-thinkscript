# Relative Vigor Index

Plots a smoothed ratio of close-minus-open to high-minus-low, its signal line and a reference level.

**TOS installed name(s):** `RVI`.

**Platform type:** Study. **Context:** Lower pane on the selected chart timeframe.

## Files

- [Captured source](RVI.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use in a lower chart pane. Begin with p=14 and level1=0; compare the RVI and signal lines.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `p` | `14` |
| `level1` | `0` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `line1`, `line2`, `z1`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

This is Relative Vigor, not Relative Volatility Index. No native alerts or strategy orders are included.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Assembled by BenTen at useThinkScript; credits an Ehlers RVI TradingView conversion. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
