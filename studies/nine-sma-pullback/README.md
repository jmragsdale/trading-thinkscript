# 9 SMA Pullback Study

Marks bullish pullbacks to a rising 9 SMA above the 20 SMA, with consolidation, volume and price-range filters.

**TOS installed name(s):** `NineSMAPullback`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](NineSMAPullback.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Add as a chart study and inspect the saved $1-$50 universe, 9/20 SMAs, 1.5% pullback tolerance and green-candle bounce conditions.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `sma_length` | `9` |
| `sma_length_2` | `20` |
| `volume_threshold` | `0.75` |
| `min_price` | `1.00` |
| `max_price` | `50.00` |
| `pullback_tolerance` | `0.015` |
| `min_flag_bars` | `3` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `SMA9_Line`, `SMA20_Line`, `Entry_Signal`.

Native `Alert()` calls detected: 1. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

Its today expression compares a date with itself and is always true: the displayed daily entry count is a cumulative loaded-history count. P&L labels mark stored signal prices to the current close; they are not executed or realized trade returns.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

No author identified; production/high-quality wording in the source is not validation. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
