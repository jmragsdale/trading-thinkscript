# NShape Simple Study

Detects bullish and bearish three-candle impulse/retrace/continuation patterns with basic body and volume tests, entry/stop/target plots and alerts.

**TOS installed name(s):** `NShape_Simple_Study`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](NShape_Simple_Study.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Add as a chart study; start with targetR=2 and useC2LowForStop=yes. Enable debug labels if you need to inspect unmet pattern conditions.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `volLen` | `20` |
| `bodyPctMin` | `0.50` |
| `volUpMultC1` | `1.10` |
| `retraceMaxPct` | `0.80` |
| `volRetraceMaxFrac` | `1.00` |
| `volUpMultC3` | `1.10` |
| `targetR` | `2.0` |
| `useC2LowForStop` | `yes` |
| `paintBars` | `yes` |
| `showBubbles` | `yes` |
| `showDebugLabels` | `no` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `Bull_Signal`, `Bull_Entry`, `Bull_Stop`, `Bull_Target`, `Bear_Signal`, `Bear_Entry`, `Bear_Stop`, `Bear_Target`.

Native `Alert()` calls detected: 2. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

This simpler variant lacks the quant-filtered SPY study time, EMA, VWAP and range filters. The source says confirmed, but current-bar close and volume are still provisional.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

No author identified in the captured source. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

16 historical test configurations are linked in the [performance notes](../../docs/performance/nshape-simple.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
