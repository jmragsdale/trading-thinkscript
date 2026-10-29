# EMA 3/8/20/50 Crossover Display

Plots EMA clouds, an SMA, crossover arrows and labels comparing the moving averages and price.

**TOS installed name(s):** `EMA3820CrossoverStrategy`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](EMA3820CrossoverStrategy.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Install as a Study: TOS stores it in Studies despite Strategy in its name. Keep displace=0 for the saved unshifted display.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `price` | `close` |
| `EMA1` | `3` |
| `EMA2` | `8` |
| `EMA3` | `20` |
| `EMA4` | `50` |
| `SMA5` | `50` |
| `displace` | `0` |
| `showBreakoutSignals` | `no` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `SMA`, `ArrowUp1`, `ArrowDN1`, `ArrowDN2`, `ArrowUP2`, `ArrowUp3`, `ArrowDN3`, `ArrowUp4`, `ArrowDN4`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

No AddOrder calls or strategy P&L are present. Positive displace changes the SMA reference to a future offset. Some labels retain hard-coded period names even when inputs change.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Saved name references a 3/8/20 EMA framework; authorship not identified. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
