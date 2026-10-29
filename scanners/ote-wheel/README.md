# OTE Wheel Scanner and Chart Helper

Finds bullish or bearish 62-79% retracements after a confirmed sweep and displacement, filtered by price, dollar volume, risk distance and gaps.

**Aggregation / context:** DAY.

## Files

| File | Use |
| --- | --- |
| [OTE_WheelHelper_Study.ts](OTE_WheelHelper_Study.ts) | Chart helper; keep outside Stock Hacker |
| [OTE_WheelScan.ts](OTE_WheelScan.ts) | Main Stock Hacker filter |

## Usage

Use OTE_WheelScan.ts in a daily Stock Hacker filter. Select side and universe bounds. Add OTE_WheelHelper_Study.ts to a daily chart for zones, protected swings and suggested strike levels; match its inputs to the scanner.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `OTE_WheelScan.ts`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `side` | `{default Bull, Bear}` |
| `pivotStrength` | `2` |
| `maxDisplacementBars` | `3` |
| `maxZoneAgeBars` | `15` |
| `requireWick` | `yes` |
| `wickBodyRatio` | `1.25` |
| `minPrice` | `2.0` |
| `maxPrice` | `20.0` |
| `useDollarVolume` | `yes` |
| `minAvgDollarVol` | `5000000` |
| `minRiskPct` | `1.0` |
| `maxRiskPct` | `10.0` |
| `gapGuardPct` | `6.0` |

Additional or different defaults in `OTE_WheelHelper_Study.ts`:

| Input | Saved default |
| --- | --- |
| `strikeIncrement` | `0.5` |
| `strikeCushionPct` | `1.0` |
| `alertsOn` | `yes` |
| `alertWhenZoneArmed` | `no` |

## Outputs and alerts

Main output plots: `Tradeable`.

The scanner itself has no native alert calls. Use the separate chart companion listed above and match its inputs and aggregation.

## Limitations and validation

The active v4 source removed the event-offset earnings gate. Verify upcoming earnings separately before using a candidate. Suggested strikes do not test option liquidity, premiums, assignment or executable fills. The helper is chart-only.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. The library keeps one current implementation per script role. Superseded versions are listed in the [consolidation record](../../docs/CONSOLIDATION.md); no versions folder is distributed.

[Browse related projects in the library index](../../README.md).

## Installed-source relationship

The captured installed OTE scanner/helper were v3 with an earnings event gate. The current library retains only the corrected v4 scanner and helper. Older installed files were removed from the distribution; their captured hashes remain in [tos-inventory.json](../../tos-inventory.json). This cleanup did not replace the scripts inside TOS.

## Performance evidence

2 historical test configurations are linked in the [performance notes](../../docs/performance/ote-wheel.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
