# Wash and Rinse v2 Study

Marks a sweep of a prior reference level followed by a close back through it, displaying wash levels and extremes.

**Aggregation / context:** Intraday or daily; match level mode and session.

## Files

| File | Use |
| --- | --- |
| [WashRinse_v2_Study_Corrected.ts](WashRinse_v2_Study_Corrected.ts) | Main chart study |
| [versions/WashRinse_v2_Study__2026-08-25.ts](versions/WashRinse_v2_Study__2026-08-25.ts) | Earlier version — historical reference only |

## Usage

Select Swing for confirmed pivots or PrevDay for reconstructed prior-period levels. Keep confirmedAlertsOnly=yes to alert using a closed bar, one bar later. Match the chart session to any companion scanner.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `WashRinse_v2_Study_Corrected.ts`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `levelMode` | `{default Swing, PrevDay}` |
| `pivotStrength` | `5` |
| `maxRinseBars` | `0` |
| `alertsOn` | `yes` |
| `confirmedAlertsOnly` | `yes` |

## Outputs and alerts

Main output plots: `BearishWR`, `BullishWR`, `WashLineHigh`, `WashLineLow`, `WashExtremeH`, `WashExtremeL`.

The main source contains 2 native `Alert()` calls. Review its alert inputs and conditions; realtime bars can change before closing.

## Limitations and validation

Swing pivots confirm pivotStrength bars later. PrevDay is reconstructed from available primary bars and session settings; on weekly/monthly charts it means the previous primary period.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. Earlier distinct code is kept in `versions/` where present. Duplicate copies are consolidated by hash; the originals remain in their source folders.

[Browse related projects in the library index](../../README.md).

## Performance evidence

1 historical test configurations are linked in the [performance notes](../../docs/performance/wash-rinse-v2.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
