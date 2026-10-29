# Multi-Timeframe OTE Zones

Displays 62-79% retracement zones after a swing sweep and displacement, with an optional higher-timeframe range-midpoint bias filter.

**Aggregation / context:** Chart 5 minutes / bias 1 hour, or chart DAY / bias WEEK.

## Files

| File | Use |
| --- | --- |
| [MTF_OTE_TOS.ts](MTF_OTE_TOS.ts) | Main chart study |

## Usage

Add only as a chart study. For the saved intraday example use 5-minute bars and HOUR bias. For daily use select WEEK bias. Choose a secondary aggregation compatible with the chart and match enough history for the bias lookback.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `MTF_OTE_TOS.ts`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `pivotStrength` | `2` |
| `maxDisplacementBars` | `3` |
| `maxZoneAgeBars` | `15` |
| `requireWick` | `yes` |
| `wickBodyRatio` | `1.25` |
| `useHTFBias` | `yes` |
| `biasAgg` | `AggregationPeriod.HOUR` |
| `biasLookback` | `20` |
| `alertsOn` | `yes` |

## Outputs and alerts

Main output plots: `BullZoneTop`, `BullZoneBot`, `BullSwing`, `BearZoneBot`, `BearZoneTop`, `BearSwing`, `BullSignal`, `BearSignal`.

The main source contains 2 native `Alert()` calls. Review its alert inputs and conditions; realtime bars can change before closing.

## Limitations and validation

The source evaluates secondary aggregation definitions even when useHTFBias is off, so that toggle does not make it scan-safe. Prior completed higher-timeframe bars are used. Recursive startup and chart replay still need native verification.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. Earlier distinct code is kept in `versions/` where present. Duplicate copies are consolidated by hash; the originals remain in their source folders.

[Browse related projects in the library index](../../README.md).

## Performance evidence

5 historical test configurations are linked in the [performance notes](../../docs/performance/mtf-ote.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
