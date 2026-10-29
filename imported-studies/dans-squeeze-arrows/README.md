# Dans Squeeze and Centered Oscillator Arrows

Displays two centered oscillator lines/arrows with Bollinger-versus-Keltner squeeze state and optional bar painting.

**TOS installed name(s):** `shared_usetos_dans_sqz_arrows`.

**Platform type:** Study. **Context:** Lower pane on the selected chart timeframe.

## Files

- [Captured source](shared_usetos_dans_sqz_arrows.thinkscript) — copied unchanged from the TOS script cache.

## Usage

Use in a lower pane; paintBars defaults Off. Begin with the saved oscillator lengths and 20-bar squeeze settings.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `paintBars` | `{default Off, Fast, Slow}` |
| `showLines` | `Yes` |
| `price` | `close` |
| `nHoMA` | `8` |
| `nHo1` | `17` |
| `nHo2` | `34` |
| `nHoSm` | `8` |
| `hoTypeMA` | `AverageType.Exponential` |
| `hoType1` | `AverageType.EXPONENTIAL` |
| `hoType2` | `AverageType.EXPONENTIAL` |
| `hoTypeSM` | `AverageType.EXPONENTIAL` |
| `bbKcLength` | `20` |
| `bbDevUp` | `2.0` |
| `kcFactor` | `1.5` |
| `bbKcAvgType` | `AverageType.SIMPLE` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `U1`, `D1`, `U2`, `D2`, `Osc1`, `Osc2`, `Zero`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The price references derived from negative half-period offsets use future bars. Historical oscillator/arrows can revise; do not treat them as causal signals without redesign and testing.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Installed under a useTOS shared name; component hints preserved. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
