# Eye Pattern Reversal Study

Shows a fast moving average recovering above a rising slow moving average after a bounded, lower-volume pullback. Includes entry arrows, stop and target levels, and optional bar coloring.

**Aggregation / context:** Daily chart is the documented use case.

## Files

| File | Use |
| --- | --- |
| [EyePattern_CrystalClear.txt](EyePattern_CrystalClear.txt) | Main chart study |

## Usage

Begin with a daily chart and the saved 5/20 moving averages. Use showStopAndTargets for the plotted reference levels and showMovingAverages to inspect the setup.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `EyePattern_CrystalClear.txt`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `fastLength` | `5` |
| `slowLength` | `20` |
| `volumeContractionPercent` | `30` |
| `volumeLookback` | `20` |
| `maxPullbackPercent` | `15` |
| `maxPullbackDays` | `30` |
| `ma20SlopeMinimum` | `0.0001` |
| `showMovingAverages` | `yes` |
| `showVolumeZones` | `no` |
| `showStopAndTargets` | `yes` |
| `colorPriceBars` | `yes` |
| `showBackgroundAlerts` | `yes` |

## Outputs and alerts

Main output plots: `FastMA`, `SlowMA`, `EntryArrow`, `PatternForming`, `StopLine`, `Target1Line`, `Target2Line`, `Target3Line`, `VolZone`.

The main source contains 6 native `Alert()` calls. Review its alert inputs and conditions; realtime bars can change before closing.

## Limitations and validation

Historical variants include Simple and the earlier Study. The names maxPullbackDays and volumeLookback describe bars when used on other aggregations; chart/scanner equivalence is unverified.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. The library keeps one current implementation per script role. Superseded versions are listed in the [consolidation record](../../docs/CONSOLIDATION.md); no versions folder is distributed.

[Browse related projects in the library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
