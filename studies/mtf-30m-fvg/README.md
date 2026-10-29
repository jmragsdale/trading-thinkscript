# 30-Minute FVG with Midpoint Alerts

Projects the latest active bullish and bearish 30-minute fair-value gaps and their midpoint lines onto a lower-timeframe chart.

**TOS installed name(s):** `MTF30MINFVG`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](MTF30MINFVG.thinkscript) — copied unchanged from the TOS script cache.

## Usage

The source describes a 3-minute chart with fixed 30-minute secondary series. Enable showCE/showBands and review the bullish and bearish sweep-plus-close alert toggles.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `showBull` | `yes` |
| `showBear` | `yes` |
| `showCE` | `yes` |
| `showBands` | `yes` |
| `alertOnBullCECloseAbove` | `yes` |
| `alertOnBearCECloseBelow` | `yes` |
| `playSound` | `yes` |
| `sound` | `Sound.Ding` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `BullTop`, `BullBot`, `BearTop`, `BearBot`, `BullCE`, `BearCE`.

Native `Alert()` calls detected: 2. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The 30-minute series uses the current higher-timeframe bar. A detected gap and alert condition can change before that bar closes. Alert messages explicitly say 3m even on other chart intervals.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

No author identified in the captured source. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
