# Breakout Scanner

Finds new lookback highs with a strong daily gain, elevated volume, and price above a long-term moving average.

**Aggregation / context:** DAY.

## Files

| File | Use |
| --- | --- |
| [BreakoutScanner_AlertStudy.ts](BreakoutScanner_AlertStudy.ts) | Chart alert companion |
| [breakout_scanner_thinkscript.txt](breakout_scanner_thinkscript.txt) | Main Stock Hacker filter |
| [versions/breakout_scanner_thinkscript_original_2025-12-31.txt](versions/breakout_scanner_thinkscript_original_2025-12-31.txt) | Earlier version — historical reference only |

## Usage

Set the scan aggregation to DAY. Start with the saved 126-bar lookback, 2x volume, 10% daily gain and 200-bar moving average. Use the alert companion on a daily chart.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `breakout_scanner_thinkscript.txt`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `lookbackPeriod` | `126` |
| `volumeMultiple` | `2.0` |
| `minDailyGainPercent` | `10.0` |
| `longTermMALength` | `200` |

Additional or different defaults in `BreakoutScanner_AlertStudy.ts`:

| Input | Saved default |
| --- | --- |
| `alertsOn` | `yes` |

## Outputs and alerts

Main output plots: `scan`.

The scanner itself has no native alert calls. Use the separate chart companion listed above and match its inputs and aggregation.

## Limitations and validation

The anti-repeat condition compares the high 20 bars ago with the current lookback high. Earlier mixed chart code is kept only in versions.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. Earlier distinct code is kept in `versions/` where present. Duplicate copies are consolidated by hash; the originals remain in their source folders.

[Browse related projects in the library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
