# OTE Wheel Scanner and Chart Helper

Finds bullish or bearish 62-79% retracements after a confirmed sweep and displacement, filtered by price, dollar volume, risk distance and gaps.

**Aggregation / context:** DAY.

## Files

| File | Use |
| --- | --- |
| [OTE_WheelHelper_Study.ts](OTE_WheelHelper_Study.ts) | Chart helper; keep outside Stock Hacker |
| [OTE_WheelScan.ts](OTE_WheelScan.ts) | Main Stock Hacker filter |
| [versions/OTE_WheelScan_original_2026-07-15.ts](versions/OTE_WheelScan_original_2026-07-15.ts) | Earlier version — historical reference only |

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

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. Earlier distinct code is kept in `versions/` where present. Duplicate copies are consolidated by hash; the originals remain in their source folders.

[Browse related projects in the library index](../../README.md).

### Installed TOS snapshot: OTE_Wheel_Scanner

[Captured installed v3 source](versions/OTE_Wheel_Scanner_installed_2026-10-29.thinkscript) differs from the repository v4 source: it retains `avoidEarnings`, `earningsBufferBars` and the `GetEventOffset(Events.EARNINGS, 0)` earnings gate. It is preserved as an installed snapshot, not made the recommended current source. The installed script was not changed.

### Installed TOS snapshot: OTE_Wheel_Helper

[Captured installed v3 source](versions/OTE_Wheel_Helper_installed_2026-10-29.thinkscript) differs from the repository v4 source: it retains `avoidEarnings`, `earningsBufferBars` and the `GetEventOffset(Events.EARNINGS, 0)` earnings gate. It is preserved as an installed snapshot, not made the recommended current source. The installed script was not changed.

## Performance evidence

2 historical test configurations are linked in the [performance notes](../../docs/performance/ote-wheel.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
