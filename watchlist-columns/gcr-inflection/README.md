# GCR Inflection Column

Produces a signed numeric inflection code using RSI extremes, Bollinger-band contact, and elevated volume.

**Aggregation / context:** User-selected custom-quote aggregation.

## Files

| File | Use |
| --- | --- |
| [GCR_Strategy_Scanner_ThinkScript.ts](GCR_Strategy_Scanner_ThinkScript.ts) | Main numeric custom quote |

## Usage

Create a Custom Quote in a watchlist, paste the source, and select its aggregation. Read GCRSignal: -1 bearish setup, 0 neutral, +1 bullish setup. As a chart study, the delivered source shows its numeric plot; optional price overlays remain commented out.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `GCR_Strategy_Scanner_ThinkScript.ts`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `rsiLength` | `14` |
| `rsiOverbought` | `75` |
| `rsiOversold` | `25` |
| `stochLength` | `14` |
| `stochOverbought` | `80` |
| `stochOversold` | `20` |
| `volumeMALength` | `20` |
| `volumeSpikeMultiplier` | `2.0` |
| `volumeExhaustionMultiplier` | `2.5` |
| `bbLength` | `20` |
| `bbNumDevUp` | `2.0` |
| `bbNumDevDn` | `2.0` |
| `fastEMALength` | `9` |
| `slowEMALength` | `21` |
| `trendEMALength` | `50` |
| `divergenceLookback` | `30` |
| `enableDivergence` | `no` |
| `showSignals` | `yes` |
| `showLabels` | `yes` |

## Outputs and alerts

Main output plots: `GCRSignal`.

The source contains alert calls, but custom-quote alert behavior is not verified. Strong-signal alert conditions are disabled by the current logic; see the limitation below.

## Limitations and validation

Stochastic and divergence logic are disabled in the saved source. strongBearish and strongBullish therefore remain false, so the advertised -2/+2 codes and strong-signal alerts cannot occur. Several exposed inputs have no effect. This numeric column is not a Boolean Stock Hacker filter.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. Earlier distinct code is kept in `versions/` where present. Duplicate copies are consolidated by hash; the originals remain in their source folders.

[Browse related projects in the library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
