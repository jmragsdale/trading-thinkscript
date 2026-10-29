# Trading Rush MACD Test Oscillator

Plots MACD value, signal and histogram with volume markers, zero-side crossover markers and alert calls.

**TOS installed name(s):** `TradingRushMACD200EMATest`.

**Platform type:** Study. **Context:** Lower pane on the selected chart timeframe.

## Files

- [Captured source](TradingRushMACD200EMATest.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Preserve as an experimental lower-pane source. Review its 12/26/9 MACD and volume settings before attempting a native compile.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `fastLength` | `12` |
| `slowLength` | `26` |
| `MACDLength` | `9` |
| `averageType` | `AverageType.EXPONENTIAL` |
| `HighVolume` | `yes` |
| `VolumeAveragingLength` | `20` |
| `VolumePercentThreshold` | `60` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `Value`, `Avg`, `Diff`, `ZeroLine`, `HiVolArrow`, `belowZeroCross`, `aboveZeroCross`.

Native `Alert()` calls detected: 2. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The captured source contains curly quotation marks and en-dash subtraction characters that may cause compiler errors. They were preserved rather than silently repaired. No current compiler check was performed.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

No individual author identified in the captured source. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
