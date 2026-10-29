# Displacement Wick Reversal Study

Highlights large displacement candles, stores qualifying wick zones, and marks potential reversal entries when those zones are swept.

**Aggregation / context:** User-selected chart timeframe.

## Files

| File | Use |
| --- | --- |
| [DisplacementWickAlerts_Study.ts](DisplacementWickAlerts_Study.ts) | Main chart study |

## Usage

Add the study to a chart. Choose displacement and wick thresholds, then enable the zone, target and label displays you need. Compare its signals with the separate scanner before treating them as equivalent.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `DisplacementWickAlerts_Study.ts`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `displacement_length` | `100` |
| `min_displacement_strength` | `1` |
| `displacement_require_fvg` | `no` |
| `min_wick_pct` | `20.0` |
| `min_wick_body_ratio` | `0.25` |
| `show_displacement_candles` | `yes` |
| `show_wick_zones` | `yes` |
| `show_targets` | `yes` |
| `show_labels` | `yes` |

## Outputs and alerts

Main output plots: `BullTarget`, `BearTarget`, `ShortSetup`, `LongSetup`, `ShortEntry`, `LongEntry`.

The main source contains 4 native `Alert()` calls. Review its alert inputs and conditions; realtime bars can change before closing.

## Limitations and validation

The scanner was later corrected independently; chart/scanner signal parity has not been demonstrated. Target plots are visual levels.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. The library keeps one current implementation per script role. Superseded versions are listed in the [consolidation record](../../docs/CONSOLIDATION.md); no versions folder is distributed.

[Browse related projects in the library index](../../README.md).

## Performance evidence

11 historical test configurations are linked in the [performance notes](../../docs/performance/displacement-wick.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
