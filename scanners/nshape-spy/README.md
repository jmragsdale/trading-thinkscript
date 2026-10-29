# NShape Quant-Filtered SPY Scanner

Screens the filtered three-candle NShape setup, optionally retaining recent signals for multiple bars.

**Aggregation / context:** 1 minute.

## Files

| File | Use |
| --- | --- |
| [NShape_QuantFiltered_SPY_AlertStudy.ts](NShape_QuantFiltered_SPY_AlertStudy.ts) | Chart alert companion |
| [NShape_QuantFiltered_SPY_Scanner.ts](NShape_QuantFiltered_SPY_Scanner.ts) | Main Stock Hacker filter |

## Usage

Set scan aggregation to 1 minute. Begin with scanLongs=yes, scanShorts=no and 1330-1530 time inputs. Keep optional current-bar and relative-volume filters at their saved defaults until comparing the chart.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `NShape_QuantFiltered_SPY_Scanner.ts`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `volLen` | `20` |
| `bodyPctMin` | `0.50` |
| `volUpMultC1` | `1.10` |
| `retraceMaxPct` | `0.80` |
| `volRetraceMaxFrac` | `1.00` |
| `volUpMultC3` | `1.10` |
| `useTimeFilter` | `yes` |
| `startTime` | `1330` |
| `endTime` | `1530` |
| `useEMAFilter` | `yes` |
| `emaLen` | `20` |
| `useVWAPFilter` | `yes` |
| `useRangeFilter` | `yes` |
| `rangeLen` | `20` |
| `rangeMult` | `1.00` |
| `useCurrentBarVolumeFilter` | `no` |
| `minCurrentBarVolume` | `100000` |
| `useRelativeVolumeFilter` | `no` |
| `minRelativeVolume` | `1.20` |
| `scanLongs` | `yes` |
| `scanShorts` | `no` |
| `signalLookbackBars` | `2` |

Additional or different defaults in `NShape_QuantFiltered_SPY_AlertStudy.ts`:

| Input | Saved default |
| --- | --- |
| `alertsOn` | `yes` |

## Outputs and alerts

Main output plots: `scan`.

The scanner itself has no native alert calls. Use the separate chart companion listed above and match its inputs and aggregation.

## Limitations and validation

signalLookbackBars defaults to 2, so a scan result can remain after the setup bar. The companion alerts on the raw setup event rather than each retained scan result.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. The library keeps one current implementation per script role. Superseded versions are listed in the [consolidation record](../../docs/CONSOLIDATION.md); no versions folder is distributed.

[Browse related projects in the library index](../../README.md).

## Performance evidence

7 historical test configurations are linked in the [performance notes](../../docs/performance/nshape-spy.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
