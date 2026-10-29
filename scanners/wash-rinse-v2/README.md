# Wash and Rinse v2 Scanner

Screens bullish, bearish or either close-back-through wash-and-rinse events using confirmed pivots or reconstructed prior-period levels.

**Aggregation / context:** Daily for swing screening or intraday as configured.

## Files

| File | Use |
| --- | --- |
| [WashRinse_v2_AlertStudy.ts](WashRinse_v2_AlertStudy.ts) | Chart alert companion |
| [WashRinse_v2_Scan_Corrected.ts](WashRinse_v2_Scan_Corrected.ts) | Main Stock Hacker filter |

## Usage

Paste the corrected scan, choose scanSide, then select Swing or PrevDay. Daily swing and 5-minute intraday are documented starting contexts. Match EXT/session settings with the comparison chart.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `WashRinse_v2_Scan_Corrected.ts`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `levelMode` | `{default Swing, PrevDay}` |
| `scanSide` | `{default Bullish, Bearish, Either}` |
| `pivotStrength` | `5` |
| `maxRinseBars` | `0` |

Additional or different defaults in `WashRinse_v2_AlertStudy.ts`:

| Input | Saved default |
| --- | --- |
| `alertsOn` | `yes` |

## Outputs and alerts

Main output plots: `scan`.

The scanner itself has no native alert calls. Use the separate chart companion listed above and match its inputs and aggregation.

## Limitations and validation

The only active output is scan. maxRinseBars=0 means uncapped. The earlier README referenced obsolete BearishWR/BullishWR scan outputs; use scanSide in this version.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. The library keeps one current implementation per script role. Superseded versions are listed in the [consolidation record](../../docs/CONSOLIDATION.md); no versions folder is distributed.

[Browse related projects in the library index](../../README.md).

## Performance evidence

1 historical test configurations are linked in the [performance notes](../../docs/performance/wash-rinse-v2.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
