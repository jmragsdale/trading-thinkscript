# MACD-V Entry and Exit Study

Normalizes MACD by ATR and combines momentum bands with moving-average regimes to mark buy, sell and momentum-exit conditions.

**Aggregation / context:** User-selected chart timeframe.

## Files

| File | Use |
| --- | --- |
| [MACDV_Chart_Study_Entries_Exits.ts](MACDV_Chart_Study_Entries_Exits.ts) | Main chart study |

## Usage

Add to a chart and start with 12/26/9 MACD, ATR 26 and the saved 50/150 momentum thresholds. Enable showArrows and, when needed, enableExitAlerts.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `MACDV_Chart_Study_Entries_Exits.ts`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `fastLen` | `12` |
| `slowLen` | `26` |
| `sigLen` | `9` |
| `atrLen` | `26` |
| `ema200Len` | `200` |
| `ema50Len` | `50` |
| `strongThreshold` | `50` |
| `extremeThreshold` | `150` |
| `showLabels` | `yes` |
| `showArrows` | `yes` |
| `enableExitAlerts` | `yes` |

## Outputs and alerts

Main output plots: `BuySignal`, `SellSignal`, `ExitLongSignal`, `ExitShortSignal`.

The main source contains 4 native `Alert()` calls. Review its alert inputs and conditions; realtime bars can change before closing.

## Limitations and validation

Signal arrows and exit alerts are indicator conditions. No ThinkScript trade report or exact chart/scanner parity was supplied.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. The library keeps one current implementation per script role. Superseded versions are listed in the [consolidation record](../../docs/CONSOLIDATION.md); no versions folder is distributed.

[Browse related projects in the library index](../../README.md).

## Performance evidence

6 historical test configurations are linked in the [performance notes](../../docs/performance/macdv.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
