# Displacement Wick Scanner

Screens for new displacement-wick setups, first sweeps of stored wick levels, or both.

**Aggregation / context:** User-selected scan timeframe.

## Files

| File | Use |
| --- | --- |
| [DisplacementWickAlerts_AlertStudy.ts](DisplacementWickAlerts_AlertStudy.ts) | Chart alert companion |
| [DisplacementWickAlerts_Scanner.ts](DisplacementWickAlerts_Scanner.ts) | Main Stock Hacker filter |
| [versions/DisplacementWickAlerts_Scanner_original_2026-01-10.ts](versions/DisplacementWickAlerts_Scanner_original_2026-01-10.ts) | Earlier version — historical reference only |

## Usage

Choose scan_for: New Setups, Wick Sweeps, or Both. Match chart and scan aggregation; max_zone_age_bars defaults to 50. Add the companion alert study to the matching chart.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `DisplacementWickAlerts_Scanner.ts`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `displacement_length` | `100` |
| `min_displacement_strength` | `1` |
| `displacement_require_fvg` | `no` |
| `min_wick_pct` | `20.0` |
| `min_wick_body_ratio` | `0.25` |
| `max_zone_age_bars` | `50` |
| `scan_for` | `{default "New Setups", "Wick Sweeps", "Both"}` |

Additional or different defaults in `DisplacementWickAlerts_AlertStudy.ts`:

| Input | Saved default |
| --- | --- |
| `alertsOn` | `yes` |

## Outputs and alerts

Main output plots: `scan_signal`.

The scanner itself has no native alert calls. Use the separate chart companion listed above and match its inputs and aggregation.

## Limitations and validation

The corrected source has one scan plot and explicit stored-zone initialization. The archived original has multiple plots and is unsuitable for direct Stock Hacker use.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. Earlier distinct code is kept in `versions/` where present. Duplicate copies are consolidated by hash; the originals remain in their source folders.

[Browse related projects in the library index](../../README.md).

## Performance evidence

11 historical test configurations are linked in the [performance notes](../../docs/performance/displacement-wick.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
