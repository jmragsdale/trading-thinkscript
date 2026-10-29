# Session-Zone Volume Profile

Starts a new volume profile when the chart moves among premarket, regular session and after-hours time zones.

**TOS installed name(s):** `VProfile`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](VProfile.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use intraday bars with extended-session data as needed. Saved boundaries are 04:00, 09:30 and 16:00; tick-size rows, 70% value area and endpoint bubbles are enabled.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `pricePerRowHeightMode` | `{AUTOMATIC, default TICKSIZE, CUSTOM}` |
| `customRowHeight` | `1.0` |
| `onExpansion` | `no` |
| `profiles` | `1000` |
| `showPointOfControl` | `yes` |
| `showValueArea` | `yes` |
| `valueAreaPercent` | `70` |
| `opacity` | `20` |
| `debug` | `no` |
| `bubbles` | `yes` |
| `n` | `2` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `x`, `POC`, `ProfileHigh`, `ProfileLow`, `VAHigh`, `VALow`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

These clock boundaries are fixed in the source, not symbol-specific exchange-session detection. The debug plot is hidden unless debug=yes.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

No author identified in the captured source. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
