# Top Ultimate Breakout

Plots rolling breakout entry/exit bands and ATR-based target references for a selected buy or sell mode.

**TOS installed name(s):** `shared_shared_ThinkTopBreakoutBuy`, `shared_shared_ThinkTopBreakoutSell`.

**Platform type:** Study. **Context:** User-selected chart timeframe; see source-specific usage.

## Files

- [Captured source](shared_shared_ThinkTopBreakoutBuy.thinkscript) — copied unchanged from the TOS script cache.

The aliases above are exact source duplicates. Saved per-chart input overrides were not captured.

## Usage

Both installed aliases contain identical bytes, including default Buy. Set BuyorSell explicitly for the desired direction; inspect entry/exit lookbacks and display toggles.

Use [the chart-study installation steps](../../docs/INSTALLATION.md); this file was stored in TOS Studies. Multi-plot chart code is not directly pasteable into a Stock Hacker filter.

## Inputs and saved defaults

These are source defaults, not per-chart overrides or optimized recommendations.

| Input | Saved default |
| --- | --- |
| `BuyorSell` | `{default Buy, Sell}` |
| `ShowTodayOnly` | `yes` |
| `ShowEntryExitBands` | `yes` |
| `ShowBubbles` | `yes` |
| `BuyEntry` | `3` |
| `SellEntry` | `3` |
| `BuyExit` | `20` |
| `SellExit` | `20` |
| `ATRLength` | `50` |
| `TargetATRMult` | `1` |
| `DisplayLines` | `yes` |
| `PriceDigit` | `2` |

## Outputs and alerts

Plots defined in the source, including internal helper outputs where present: `entry`, `exit`, `pBTarget`, `pBTarget2`, `pEntryLine`.

Native `Alert()` calls detected: 0. Review the actual conditions and alert inputs; presence in the installed library does not establish audible alert behavior.

## Limitations and validation

The Sell-named script does not default to Sell. A saved low-band expression repeats L2 rather than averaging L2/L3. Current-day-only display follows the loaded chart.

The source was captured and compared by SHA-256. No code repairs, native compilation, chronological replay or performance tests were performed. [Validation scope](../../docs/VALIDATION.md).

## Attribution and provenance

Source credits hoojsn and tomsk, with version history through January 22, 2020. Original comments and credit lines are intact. A user-defined TOS entry does not establish original authorship or a redistribution license.

See [the installed-script reconciliation](../../docs/TOS_RECONCILIATION.md) and [file inventory](../../inventory.json) for the capture and alias mapping.

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
