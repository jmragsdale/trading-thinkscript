# QTA Volume Profile

Displays daily volume profiles with a point of control and configurable value area.

**TOS installed name(s):** `QTA_Volume_Profile`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](QTA_Volume_Profile.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use a chart with volume data. Saved defaults show POC and value area, 68% value area, 60 opacity and tick-size rows.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `showPointOfControl` | `yes` |
| `showValueArea` | `yes` |
| `valueAreaPercent` | `68` |
| `opacity` | `60` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `POC`, `ProfileHigh`, `ProfileLow`, `VAHigh`, `VALow`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The session profile follows chart data and session settings. Several configuration values are internal definitions rather than editable inputs.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits Bryant Littrean / Thinkorswim and Quant Trading App. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
