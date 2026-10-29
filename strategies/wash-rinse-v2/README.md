# Wash and Rinse v2 Strategy

Models next-bar-open entries after a rinse, locked stops beyond the wash extreme, R-multiple targets and optional end-of-day exits.

**Aggregation / context:** SPY intraday is the documented research context.

## Files

| File | Use |
| --- | --- |
| [WashRinse_v2_Strategy_Corrected.ts](WashRinse_v2_Strategy_Corrected.ts) | Main historical strategy |
| [versions/WashRinse_v2_Strategy_Corrected_audit_2026-08-25.ts](versions/WashRinse_v2_Strategy_Corrected_audit_2026-08-25.ts) | Earlier version — historical reference only |
| [versions/WashRinse_v2_Strategy_Corrected_catalog_2026-08-30.ts](versions/WashRinse_v2_Strategy_Corrected_catalog_2026-08-30.ts) | Earlier version — historical reference only |
| [versions/WashRinse_v2_Strategy__2026-08-25.ts](versions/WashRinse_v2_Strategy__2026-08-25.ts) | Earlier version — historical reference only |

## Usage

Create a Strategy, paste the corrected source, and review tradeSize and session inputs before generating a report. Compare individual rinse, entry and exit bars; use the related study and scanner for visual screening.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `WashRinse_v2_Strategy_Corrected.ts`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `levelMode` | `{default Swing, PrevDay}` |
| `pivotStrength` | `5` |
| `maxRinseBars` | `0` |
| `stopOffsetTicks` | `1` |
| `rMult` | `2.0` |
| `tradeSize` | `100` |
| `useSession` | `yes` |
| `startTradingTime` | `935` |
| `stopTradingTime` | `1530` |
| `flattenTime` | `1555` |
| `allowLongs` | `yes` |
| `allowShorts` | `yes` |
| `alertsOn` | `yes` |

## Outputs and alerts

The main source contains 8 native `Alert()` calls. Review its alert inputs and conditions; realtime bars can change before closing.

## Limitations and validation

tradeSize defaults to 100. rMult=2.0 is explicitly unconfirmed in earlier research. Same-bar stop/target touches use a stop-first OHLC convention; reports do not resolve actual intrabar sequence. open[-1] occurs only in documented next-bar AddOrder price expressions.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. Earlier distinct code is kept in `versions/` where present. Duplicate copies are consolidated by hash; the originals remain in their source folders.

[Browse related projects in the library index](../../README.md).

## Performance evidence

1 historical test configurations are linked in the [performance notes](../../docs/performance/wash-rinse-v2.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
