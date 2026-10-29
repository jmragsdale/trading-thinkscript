# Multi-Indicator Dashboard Labels

Combines SPY/QQQ/VXX directional-movement labels with current-symbol momentum, CCI, RSI, MOBO, EMA stacking, squeeze and Heikin-Ashi status.

**TOS installed name(s):** `shared_personal_dashboard_labels`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](shared_personal_dashboard_labels.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Add to a price chart and inspect the labels with the saved inputs. It requests SPY, QQQ and VXX data in addition to the chart symbol.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `show_stacked_label` | `yes` |
| `show_ema_label` | `yes` |
| `rsilength` | `5` |
| `lengthmo` | `5` |
| `lengthcci` | `13` |
| `lengthmobo` | `10` |
| `Num_Dev_Dn` | `-0.8` |
| `Num_Dev_up` | `0.8` |
| `AverageType` | `AverageType.HULL` |
| `ema1Length` | `8` |
| `ema2Length` | `21` |
| `ema3Length` | `34` |
| `ema4Length` | `55` |
| `ema5Length` | `89` |
| `showXovers` | `yes` |
| `useAlerts` | `no` |
| `alertType` | `Alert.BAR` |
| `buySound` | `Sound.DING` |
| `sellSound` | `Sound.BELL` |
| `colorBars` | `no` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `SpyDMP`, `SpyDMM`, `QQQDMP`, `QQQDMM`, `VxxDMP`, `VxxDMM`.

Native `Alert()` calls detected: 2. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The QQQ ATR definition mixes SPY high with QQQ close/low. Several EMA-stack lengths are hard-coded despite similarly named inputs. Label colors and source claims are not a performance measure.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

A shared composite; source includes Mobius, Lar and rad14733 attribution for components. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
