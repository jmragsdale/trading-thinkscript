# Trading Rush MACD, VWAP and EMA Display

Plots daily VWAP, an EMA and MACD crossover arrows conditioned on VWAP side and prior MACD sign.

**TOS installed name(s):** `TradingRushMACD200EMA`, `TradingRushMACD200EMA2`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](TradingRushMACD200EMA.thinkscript) — copied unchanged from the TOS script cache.

The aliases above are exact source duplicates. Saved per-chart input overrides were not captured.

## Usage

Both installed names are exact duplicates. Use an intraday chart for the saved daily VWAP context and review MACD 12/26/9 and EMA 200.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `fastLength` | `12` |
| `slowLength` | `26` |
| `macdLength` | `9` |
| `averageType` | `AverageType.EXPONENTIAL` |
| `price` | `close` |
| `EMAperiod` | `200` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `VWAP1`, `trendma`, `buymacd`, `sellmacd`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The plotted 200 EMA is not used in the saved buy/sell conditions. This is a study, not a 200-EMA-filtered execution strategy.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Named Trading Rush framework; no individual author identified in the captured source. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
