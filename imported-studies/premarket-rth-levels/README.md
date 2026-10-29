# Globex and Regular-Session Highs/Lows

Draws Globex, regular-session and prior regular-session extremes, with optional endpoint bubbles.

**TOS installed name(s):** `shared_shared_shared_ThinkPreMarkHighsLows`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](shared_shared_shared_ThinkPreMarkHighsLows.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use an intraday chart with the intended extended-hours history available; bubbles=yes is the only top-level input.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `bubbles` | `yes` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `priorBar`, `GlobexHigh`, `GlobexLow`, `HighRTH`, `LowRTH`, `PreviousHighRTH`, `PreviousLowRTH`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

HighestAll/LowestAll and last-chart-bar state make lines depend on the loaded chart endpoint. Regular-session definitions follow the symbol; not a verified chronological signal model.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits Nube, 2018. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
