# Previous High, Low and Close

Displays the current daily open, previous daily close/high/low and additional offset levels on the latest chart day.

**TOS installed name(s):** `shared_shared_shared_ThinkHighLowClose`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](shared_shared_shared_ThinkHighLowClose.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use on an intraday price chart with sufficient prior-session data. There are no exposed inputs.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

No exposed top-level inputs. Internal constants and referenced built-in study defaults remain in the source.

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `OpenPivot`, `yClose`, `yhi`, `sweethi`, `ylo`, `sweetlo`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

Daily secondary series and GetLastDay-based display make this a latest-session visual overlay, not a historical scanner. Session data determines daily levels.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Installed under a shared name; no individual author identified in the header. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
