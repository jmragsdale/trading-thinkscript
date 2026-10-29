# Open Interest Levels — March 1, 2022 Snapshot

Plots hard-coded call and put open-interest levels and premium labels for fourteen named symbols.

**TOS installed name(s):** `OpenInterestCustom`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](OpenInterestCustom.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Keep as a historical reference for the snapshot date stated in the header. There are no configurable inputs or live option-chain requests.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

No exposed top-level inputs. Internal constants and referenced built-in study defaults remain in the source.

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `oi_call_1`, `oi_call_2`, `oi_call_3`, `oi_call_4`, `oi_call_5`, `oi_put_1`, `oi_put_2`, `oi_put_3`, `oi_put_4`, `oi_put_5`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The header explicitly says only valid March 1, 2022. Levels and premiums are static, including historical symbol/price scales; this is not current open-interest data.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits Quant Trading App (2021-2022). Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
