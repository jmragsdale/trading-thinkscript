# Displacement Detector and Candle Combinations

Grades candle bodies against historical body deviation, optionally requires a fair-value gap, and marks consecutive or flat-edge displacement combinations.

**TOS installed name(s):** `Displacement_Detector`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](Displacement_Detector.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use on a price chart. Start with a 100-bar body baseline, requireFVG=yes, all four strength levels enabled, and the saved flat/consecutive detection settings.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `showDisplacementCandles` | `yes` |
| `emphasizeDisplacementBodies` | `yes` |
| `showLevelLabels` | `yes` |
| `showConsecutiveMarker` | `yes` |
| `showFlatMarker` | `yes` |
| `showNearbyFlatComboMarker` | `yes` |
| `bullishColorRed` | `0` |
| `bullishColorGreen` | `102` |
| `bullishColorBlue` | `255` |
| `bearishColorRed` | `255` |
| `bearishColorGreen` | `215` |
| `bearishColorBlue` | `0` |
| `requireFVG` | `yes` |
| `displacementLookbackLength` | `100` |
| `showLevel1` | `yes` |
| `showLevel2` | `yes` |
| `showLevel3` | `yes` |
| `showLevel4` | `yes` |
| `consecutiveDetectionEnable` | `yes` |
| `consecutiveMinimumCount` | `2` |
| `allowAnyDirectionCombo` | `yes` |
| `flatDetectionEnable` | `yes` |
| `wickToleranceInTicks` | `0.0` |
| `nearbyFlatDetectionEnable` | `yes` |
| `nearbyFlatLookback` | `3` |
| `enableAlerts` | `yes` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `BullishDisplacementFlag`, `BearishDisplacementFlag`, `ConsecutiveBull`, `ConsecutiveBear`, `FlatBull`, `FlatBear`, `ComboBull`, `ComboBear`.

Native `Alert()` calls detected: 4. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

Current-bar bodies, gaps and combinations can change before close. This is a separate detector from the displacement-wick reversal family.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

No author identified in the captured source. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
