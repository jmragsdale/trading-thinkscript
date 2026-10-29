# ZigZag High/Low Supply and Demand

Plots ZigZag pivots and supply/demand references with optional reversal arrows, price/volume bubbles and alerts.

**TOS installed name(s):** `ZigZagHL`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](ZigZagHL.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use on a price chart. Review percentage, absolute and ATR reversal settings; arrows and alerts are off by default.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `showBubblesChange` | `no` |
| `showBubblesPrice` | `no` |
| `showBubblesBarCount` | `no` |
| `showBubblesVolume` | `no` |
| `showArrows` | `no` |
| `useAlerts` | `no` |
| `numberSuppDemandToShow` | `2` |
| `showSupplyDemand` | `{default Pivot, Arrow, None}` |
| `showSupplyDemandCloud` | `yes` |
| `BubbleOffset` | `.50000` |
| `PercentAmount` | `.01` |
| `RevAmount` | `.15` |
| `ATRreversal` | `1.0` |
| `ATRlength` | `5` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `zzp`, `zzdot`, `U1`, `D1`, `HighLine`, `LowLine`, `swinglow`, `swinghigh`.

Native `Alert()` calls detected: 2. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

ZigZag pivots and the latest leg can revise as later bars arrive. A source confirmation label is not proof of a non-repainting historical strategy.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits ZZZ, Linus, Lar and tomsk; version history through January 12, 2020. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
