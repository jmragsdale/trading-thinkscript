# Supply/Demand Index Support and Resistance

Uses a volume/price demand index to create demand support, supply resistance and overhead resistance bands.

**TOS installed name(s):** `Supply_and_Demand_Index_Support_Resistance`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](Supply_and_Demand_Index_Support_Resistance.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Add to a price chart with volume data. Start with n=5 and DemandIndexValue=0.35.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `n` | `5` |
| `DemandIndexValue` | `0.35` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `DL`, `DH`, `SH`, `SL`, `RL`, `RH`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

HighestAll selects the latest active zone locations across chart history. The display is chart-end dependent and does not establish a chronological historical entry signal.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits Mobius, V01.01.2020. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
