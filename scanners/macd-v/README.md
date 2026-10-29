# MACD-V Unified Scanner

Screens MACD-V conditions with price bounds, market regime, and entry or exit signal selection.

**Aggregation / context:** User-selected scan timeframe.

## Files

| File | Use |
| --- | --- |
| [MACDV_AlertStudy.ts](MACDV_AlertStudy.ts) | Chart alert companion |
| [MACDV_Scan_Unified_Regime_SignalType.ts](MACDV_Scan_Unified_Regime_SignalType.ts) | Main Stock Hacker filter |

## Usage

Set priceMin/priceMax, choose regime (Any, Bull, Bear, Stage2, Stage4 or Stage3), then choose signalType. Both selects both entry directions. Match the alert companion settings and chart aggregation.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `MACDV_Scan_Unified_Regime_SignalType.ts`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `fastLen` | `12` |
| `slowLen` | `26` |
| `sigLen` | `9` |
| `atrLen` | `26` |
| `ema50Len` | `50` |
| `ema200Len` | `200` |
| `strongThreshold` | `50` |
| `extremeThreshold` | `150` |
| `priceMin` | `2.0` |
| `priceMax` | `20.0` |
| `regime` | `{ default Any, Bull, Bear, Stage2, Stage4, Stage3 }` |
| `signalType` | `{ default Both, BuyOnly, SellOnly, ExitLong, ExitShort }` |

Additional or different defaults in `MACDV_AlertStudy.ts`:

| Input | Saved default |
| --- | --- |
| `alertsOn` | `yes` |

## Outputs and alerts

Main output plots: `scan`.

The scanner itself has no native alert calls. Use the separate chart companion listed above and match its inputs and aggregation.

## Limitations and validation

Default price bounds are $2-$20. ExitLong and ExitShort screen momentum conditions; they do not know your actual account positions.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. Earlier distinct code is kept in `versions/` where present. Duplicate copies are consolidated by hash; the originals remain in their source folders.

[Browse related projects in the library index](../../README.md).

## Performance evidence

6 historical test configurations are linked in the [performance notes](../../docs/performance/macdv.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
