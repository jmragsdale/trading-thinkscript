# Warrior Eye Hybrid Scanner

Combines low-priced momentum, relative bar volume and an intraday moving-average pullback/recovery with a measured reward-to-risk filter.

**Aggregation / context:** 1 or 5 minutes; regular session.

## Files

| File | Use |
| --- | --- |
| [WarriorEye_AlertStudy.txt](WarriorEye_AlertStudy.txt) | Chart alert companion |
| [WarriorEye_Hybrid_DayTrading_Scanner.txt](WarriorEye_Hybrid_DayTrading_Scanner.txt) | Main Stock Hacker filter |

## Usage

Use 1- or 5-minute scan aggregation during regular hours. Review price limits and the gain-from-RTH-open, relative-volume and volatility thresholds. Use a matching chart with the companion alert study.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `WarriorEye_Hybrid_DayTrading_Scanner.txt`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `minPercentGainFromRTHOpen` | `10.0` |
| `minRelativeBarVolume` | `3.0` |
| `minPrice` | `1.00` |
| `maxPrice` | `20.00` |
| `volumeLookbackBars` | `30` |
| `minAtrPercent` | `3.0` |
| `fastMALength` | `9` |
| `slowMALength` | `20` |
| `maxPullbackBars` | `10` |
| `volumeContractionPct` | `50.0` |
| `targetLookbackBars` | `20` |
| `minRiskReward` | `2.0` |
| `minQualityScore` | `10` |

Additional or different defaults in `WarriorEye_AlertStudy.txt`:

| Input | Saved default |
| --- | --- |
| `alertsOn` | `yes` |

## Outputs and alerts

Main output plots: `signal`.

The scanner itself has no native alert calls. Use the separate chart companion listed above and match its inputs and aggregation.

## Limitations and validation

Share float is not enforced. Relative volume is measured against prior bars, not daily share volume. Quality score has no demonstrated predictive probability.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. The library keeps one current implementation per script role. Superseded versions are listed in the [consolidation record](../../docs/CONSOLIDATION.md); no versions folder is distributed.

[Browse related projects in the library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
