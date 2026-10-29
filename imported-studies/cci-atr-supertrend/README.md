# CCI ATR and Supertrend Combination

Combines a Supertrend line with a CCI/ATR trend line and colors the result according to agreement.

**TOS installed name(s):** `shared_shared_VINCE_CCI_ATR`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](shared_shared_VINCE_CCI_ATR.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use as a chart overlay. Saved defaults use Hull ATR length 4, CCI length 50 and ATR trend length 21. The header describes 1- and 5-minute use.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `ST_Atr_Mult` | `1.0` |
| `ST_Length` | `4` |
| `ST_AvgType` | `AverageType.HULL` |
| `lengthCCI` | `50` |
| `lengthATR` | `21` |
| `AtrFactor` | `1.0` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `ST_ATR_COMBO`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The source promotional language is not evidence of reversal accuracy. Current-bar trend changes remain provisional.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits Mobius Supertrend and a DTEK combined version dated August 10, 2019. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
