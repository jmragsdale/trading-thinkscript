# NShape Quant-Filtered SPY Study

Detects a three-candle impulse, retrace and continuation pattern with volume, EMA, session VWAP, time and range filters. Plots entry, stop and target references.

**Aggregation / context:** SPY, 1-minute chart.

## Files

| File | Use |
| --- | --- |
| [NShape_QuantFiltered_SPY_Scalp.ts](NShape_QuantFiltered_SPY_Scalp.ts) | Main chart study |

## Usage

Reproduce the documented SPY setup first: one-minute bars, bullish only, 13:30-15:30 ET, EMA20/VWAP/range filters enabled, 1.5R target and candle-2-low stop.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `NShape_QuantFiltered_SPY_Scalp.ts`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `volLen` | `20` |
| `bodyPctMin` | `0.50` |
| `volUpMultC1` | `1.10` |
| `retraceMaxPct` | `0.80` |
| `volRetraceMaxFrac` | `1.00` |
| `volUpMultC3` | `1.10` |
| `targetR` | `1.5` |
| `useC2LowForStop` | `yes` |
| `useTimeFilter` | `yes` |
| `startTime` | `1330` |
| `endTime` | `1530` |
| `useEMAFilter` | `yes` |
| `emaLen` | `20` |
| `useVWAPFilter` | `yes` |
| `useRangeFilter` | `yes` |
| `rangeLen` | `20` |
| `rangeMult` | `1.00` |
| `showBullSignals` | `yes` |
| `showBearSignals` | `no` |
| `paintBars` | `yes` |
| `showBubbles` | `yes` |
| `showLabels` | `yes` |

## Outputs and alerts

Main output plots: `Bull_Signal`, `Bull_Entry`, `Bull_Stop`, `Bull_Target`, `Bear_Signal`, `Bear_Entry`, `Bear_Stop`, `Bear_Target`.

The main source contains 2 native `Alert()` calls. Review its alert inputs and conditions; realtime bars can change before closing.

## Limitations and validation

The source calls this a tested configuration; this organization did not reproduce that research. Bearish signals are off by default. This is a study, not an execution strategy.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. The library keeps one current implementation per script role. Superseded versions are listed in the [consolidation record](../../docs/CONSOLIDATION.md); no versions folder is distributed.

[Browse related projects in the library index](../../README.md).

## Performance evidence

7 historical test configurations are linked in the [performance notes](../../docs/performance/nshape-spy.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
