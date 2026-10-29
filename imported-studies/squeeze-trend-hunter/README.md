# Squeeze Trend Hunter / Perfect Leading Composite

Combines WaveTrend, Donchian bands, squeeze/momentum displays and a centered oscillator arrow component in a lower pane.

**TOS installed name(s):** `Squeeze_Trend_Hunter`, `shared_personal_perfect_leading_movingzeroline`.

**Platform type:** Study. **Context:** Lower pane on the selected chart timeframe.

## Files

- [Captured source](Squeeze_Trend_Hunter.thinkscript) — copied unchanged from the TOS script cache.

The aliases above are exact source duplicates. Saved per-chart input overrides were not captured.

## Usage

Either installed alias has identical source. Use the saved lengths initially; review showLines, bubbles and alert switches. Keep displace=0 if retaining the unshifted band settings.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `price` | `close` |
| `showLines` | `Yes` |
| `Channel_Length` | `10` |
| `Average_Length` | `21` |
| `over_bought_1` | `60` |
| `over_bought_2` | `53` |
| `over_sold_1` | `-60` |
| `over_sold_2` | `-53` |
| `show_bubbles` | `yes` |
| `show_sec_bbls` | `no` |
| `show_alerts` | `yes` |
| `length_donchian` | `34` |
| `length` | `20` |
| `Num_Dev_Dn` | `-2.0` |
| `Num_Dev_up` | `2.0` |
| `averageType` | `AverageType.SIMPLE` |
| `displace` | `0` |
| `factorhigh` | `1.0` |
| `factormid` | `1.5` |
| `factorlow` | `2.0` |
| `trueRangeAverageType` | `AverageType.SIMPLE` |
| `nHoMA` | `8` |
| `nHo1` | `17` |
| `nHo2` | `34` |
| `nHoSm` | `8` |
| `hoTypeMA` | `AverageType.EXPONENTIAL` |
| `hoType1` | `AverageType.EXPONENTIAL` |
| `hoType2` | `AverageType.EXPONENTIAL` |
| `hoTypeSM` | `AverageType.EXPONENTIAL` |
| `bbKcLength` | `20` |
| `bbDevUp` | `2.0` |
| `kcFactor` | `1.5` |
| `bbKcAvgType` | `AverageType.SIMPLE` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `obLevel1`, `osLevel1`, `obLevel2`, `osLevel2`, `wt1_1`, `wt2_1`, `Signal`, `Signal2_`, `upperBand`, `lowerBand`, `middleBand`, `squeezeline`, `momentum`, `U1`, `D1`, `U2`, `D2`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The centered oscillator uses future price references derived from nHo1/nHo2. Historical arrows can revise; the leading name does not establish usable forward prediction.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits LazyBear, BenTen, Chris Ball, rad14733 and named component concepts. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
