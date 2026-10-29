# Eye Pattern Scanner

Finds the Eye Pattern moving-average recovery with trend, volume contraction, pullback and candle-quality conditions.

**Aggregation / context:** Daily is the companion study use case; selected in scan UI.

## Files

| File | Use |
| --- | --- |
| [EyePattern_AlertStudy.txt](EyePattern_AlertStudy.txt) | Chart alert companion |
| [EyePattern_Scanner_CrystalClear.txt](EyePattern_Scanner_CrystalClear.txt) | Main Stock Hacker filter |

## Usage

Paste the CrystalClear scanner into Stock Hacker and keep the existing signal plot. Start on daily bars to compare with the chart study; use the alert companion at the same aggregation.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `EyePattern_Scanner_CrystalClear.txt`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `fastLength` | `5` |
| `slowLength` | `20` |
| `volumeContractionPercent` | `30` |
| `volumeLookback` | `20` |
| `maxPullbackPercent` | `15` |
| `maxPullbackDays` | `30` |
| `ma20SlopeMinimum` | `0.0001` |

Additional or different defaults in `EyePattern_AlertStudy.txt`:

| Input | Saved default |
| --- | --- |
| `alertsOn` | `yes` |

## Outputs and alerts

Main output plots: `signal`.

The scanner itself has no native alert calls. Use the separate chart companion listed above and match its inputs and aggregation.

## Limitations and validation

Alternative outputs are commented out. Enabling multiple plots breaks the scanner requirement. Quality scores are internal heuristics, not measured win probabilities.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. The library keeps one current implementation per script role. Superseded versions are listed in the [consolidation record](../../docs/CONSOLIDATION.md); no versions folder is distributed.

[Browse related projects in the library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
