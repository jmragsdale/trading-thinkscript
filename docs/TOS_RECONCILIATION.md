# TOS source reconciliation — October 29, 2026

**All 64 locally stored custom definitions are captured and mapped:** 61 studies, 1 strategy and 2 watchlist custom quotes. They contain 60 distinct source contents. The live user-defined editor list exposed 61 study rows and 1 strategy row, matching the main cache; the two quotes came from TOS's separate custom-quote cache.

## Capture method

Read the current local TOS SCRIPTS cache and decoded each named study/strategy CODE value. Read the two XML-escaped source values in the separate custom-quote cache. Exported AutoTL and AlertValue through TOS's native Export command as cross-checks: each export equals its cached source plus exactly one final newline. The active editor Save button was disabled when inspected. No installed source was changed.

Each raw source is retained locally with its installed name and hash, including duplicate aliases. No account data, credentials or entire workspace/cache XML is included in the script backup. Per-chart input overrides, saved alert configurations, other accounts, server-side versions not present locally, and unsaved editor buffers are not captured by this procedure.

## Comparison results

Relative to the original saved-file inventory:

- 22 installed study/strategy definitions match an existing source exactly, including two matches to preserved earlier versions.
- BreakoutScanner_Alert differs only by a final newline; its exact installed bytes remain in the local backup.
- Two installed OTE Wheel definitions are older v3 variants and were added as installed snapshots.
- 37 other study aliases represent 34 new distinct sources. Two additional custom quotes share one more new source.
- Total additions: **35 new distinct scripts plus 2 installed-version snapshots**.

## Exact duplicate installed names

| Alias 1 | Alias 2 | Handling |
| --- | --- | --- |
| Squeeze_Trend_Hunter | shared_personal_perfect_leading_movingzeroline | One shared composite source, both aliases recorded |
| shared_shared_ThinkTopBreakoutBuy | shared_shared_ThinkTopBreakoutSell | One source; both default to Buy in source |
| TradingRushMACD200EMA | TradingRushMACD200EMA2 | One source, both aliases recorded |
| CC Indi | CC Indi2 | One quote source; cached settings also match |

## Material version differences

The installed OTE_Wheel_Scanner and OTE_Wheel_Helper are v3 and retain avoidEarnings, earningsBufferBars and GetEventOffset(Events.EARNINGS, 0). The repository's corrected v4 primary files omit that gate. Both installed v3 files are preserved under the OTE project versions folder; no TOS replacement was performed.

The installed WashRinse_v2_Strategy is an exact match to the preserved catalog snapshot. Compared with the preferred library primary, it lacks only three explanatory comment lines about AddOrder next-bar prices. Eye_Pattern_CRYSTAL_CLEAR is an exact match to the earlier Eye Pattern source already retained under versions.

## Installed names and destinations

An exact mapping means the repository source matches the captured bytes. One newline-only mapping is labeled separately. The private imported source is documented but omitted from the GitHub package.

| Installed name | Platform type | Comparison / destination |
| --- | --- | --- |
| `WashRinse_v2_Strategy` | strategy | exact; [strategies/wash-rinse-v2/versions/WashRinse_v2_Strategy_Corrected_catalog_2026-08-30.ts](../strategies/wash-rinse-v2/versions/WashRinse_v2_Strategy_Corrected_catalog_2026-08-30.ts) |
| `AlertValue` | study | exact; [studies/alert-value/AlertValue.thinkscript](../studies/alert-value/AlertValue.thinkscript) |
| `AutoTL` | study | exact; [studies/auto-trend-lines/AutoTL.thinkscript](../studies/auto-trend-lines/AutoTL.thinkscript) |
| `BreakoutScanner_Alert` | study | boundary whitespace only; [scanners/breakout/BreakoutScanner_AlertStudy.ts](../scanners/breakout/BreakoutScanner_AlertStudy.ts) |
| `BreakoutScanner_Scan` | study | exact; [scanners/breakout/breakout_scanner_thinkscript.txt](../scanners/breakout/breakout_scanner_thinkscript.txt) |
| `BTDStudy` | study | exact; [studies/buy-the-dip/BTDStudy.thinkscript](../studies/buy-the-dip/BTDStudy.thinkscript) |
| `CustomVolumeProfile` | study | exact; [imported-studies/prior-period-volume-profile/CustomVolumeProfile.thinkscript](../imported-studies/prior-period-volume-profile/CustomVolumeProfile.thinkscript) |
| `Displacement_Detector` | study | exact; [studies/displacement-detector/Displacement_Detector.thinkscript](../studies/displacement-detector/Displacement_Detector.thinkscript) |
| `DispWick_Alert` | study | exact; [scanners/displacement-wick/DisplacementWickAlerts_AlertStudy.ts](../scanners/displacement-wick/DisplacementWickAlerts_AlertStudy.ts) |
| `DispWick_Chart` | study | exact; [studies/displacement-wick/DisplacementWickAlerts_Study.ts](../studies/displacement-wick/DisplacementWickAlerts_Study.ts) |
| `DispWick_Scanner` | study | exact; [scanners/displacement-wick/DisplacementWickAlerts_Scanner.ts](../scanners/displacement-wick/DisplacementWickAlerts_Scanner.ts) |
| `EMA3820CrossoverStrategy` | study | exact; [studies/ema-3-8-20-crossover/EMA3820CrossoverStrategy.thinkscript](../studies/ema-3-8-20-crossover/EMA3820CrossoverStrategy.thinkscript) |
| `Eye_Pattern_CRYSTAL_CLEAR` | study | exact; [studies/eye-pattern/versions/Eye Pattern CRYSTAL CLEAR__2025-10-22.txt](../studies/eye-pattern/versions/Eye%20Pattern%20CRYSTAL%20CLEAR__2025-10-22.txt) |
| `EyePattern_Alert` | study | exact; [scanners/eye-pattern/EyePattern_AlertStudy.txt](../scanners/eye-pattern/EyePattern_AlertStudy.txt) |
| `EyePattern_Chart` | study | exact; [studies/eye-pattern/EyePattern_CrystalClear.txt](../studies/eye-pattern/EyePattern_CrystalClear.txt) |
| `EyePattern_Scanner` | study | exact; [scanners/eye-pattern/EyePattern_Scanner_CrystalClear.txt](../scanners/eye-pattern/EyePattern_Scanner_CrystalClear.txt) |
| `GCR_Inflection_Scan` | study | exact; [watchlist-columns/gcr-inflection/GCR_Strategy_Scanner_ThinkScript.ts](../watchlist-columns/gcr-inflection/GCR_Strategy_Scanner_ThinkScript.ts) |
| `ICTDisplacementStudy` | study | exact; [studies/ict-displacement-retest/ICTDisplacementStudy.thinkscript](../studies/ict-displacement-retest/ICTDisplacementStudy.thinkscript) |
| `MACDV_Alert` | study | exact; [scanners/macd-v/MACDV_AlertStudy.ts](../scanners/macd-v/MACDV_AlertStudy.ts) |
| `MACDV_Chart` | study | exact; [studies/macd-v/MACDV_Chart_Study_Entries_Exits.ts](../studies/macd-v/MACDV_Chart_Study_Entries_Exits.ts) |
| `MACDV_Scanner` | study | exact; [scanners/macd-v/MACDV_Scan_Unified_Regime_SignalType.ts](../scanners/macd-v/MACDV_Scan_Unified_Regime_SignalType.ts) |
| `MTF30MINFVG` | study | exact; [studies/mtf-30m-fvg/MTF30MINFVG.thinkscript](../studies/mtf-30m-fvg/MTF30MINFVG.thinkscript) |
| `MTF_OTE_TOS` | study | exact; [studies/mtf-ote/MTF_OTE_TOS.ts](../studies/mtf-ote/MTF_OTE_TOS.ts) |
| `NakedFXEngulfing` | study | exact; [imported-studies/naked-forex-engulfing/NakedFXEngulfing.thinkscript](../imported-studies/naked-forex-engulfing/NakedFXEngulfing.thinkscript) |
| `NineSMAPullback` | study | exact; [studies/nine-sma-pullback/NineSMAPullback.thinkscript](../studies/nine-sma-pullback/NineSMAPullback.thinkscript) |
| `NShape_Simple_Study` | study | exact; [studies/nshape-simple/NShape_Simple_Study.thinkscript](../studies/nshape-simple/NShape_Simple_Study.thinkscript) |
| `NShape_SPY_Alert` | study | exact; [scanners/nshape-spy/NShape_QuantFiltered_SPY_AlertStudy.ts](../scanners/nshape-spy/NShape_QuantFiltered_SPY_AlertStudy.ts) |
| `NShape_SPY_Chart` | study | exact; [studies/nshape-spy/NShape_QuantFiltered_SPY_Scalp.ts](../studies/nshape-spy/NShape_QuantFiltered_SPY_Scalp.ts) |
| `NShape_SPY_Scanner` | study | exact; [scanners/nshape-spy/NShape_QuantFiltered_SPY_Scanner.ts](../scanners/nshape-spy/NShape_QuantFiltered_SPY_Scanner.ts) |
| `OpenInterestCustom` | study | exact; [imported-studies/open-interest-2022-03-01/OpenInterestCustom.thinkscript](../imported-studies/open-interest-2022-03-01/OpenInterestCustom.thinkscript) |
| `OTE_Wheel_Helper` | study | exact; [scanners/ote-wheel/versions/OTE_Wheel_Helper_installed_2026-10-29.thinkscript](../scanners/ote-wheel/versions/OTE_Wheel_Helper_installed_2026-10-29.thinkscript) |
| `OTE_Wheel_Scanner` | study | exact; [scanners/ote-wheel/versions/OTE_Wheel_Scanner_installed_2026-10-29.thinkscript](../scanners/ote-wheel/versions/OTE_Wheel_Scanner_installed_2026-10-29.thinkscript) |
| `QTA_Volume_Profile` | study | exact; [imported-studies/qta-volume-profile/QTA_Volume_Profile.thinkscript](../imported-studies/qta-volume-profile/QTA_Volume_Profile.thinkscript) |
| `Reversal_Candles` | study | exact; [imported-studies/reversal-candles/Reversal_Candles.thinkscript](../imported-studies/reversal-candles/Reversal_Candles.thinkscript) |
| `RVI` | study | exact; [imported-studies/relative-vigor-index/RVI.thinkscript](../imported-studies/relative-vigor-index/RVI.thinkscript) |
| `shared_personal_dashboard_labels` | study | exact; [imported-studies/multi-indicator-dashboard/shared_personal_dashboard_labels.thinkscript](../imported-studies/multi-indicator-dashboard/shared_personal_dashboard_labels.thinkscript) |
| `shared_personal_perfect_leading_movingzeroline` | study | exact; [imported-studies/squeeze-trend-hunter/Squeeze_Trend_Hunter.thinkscript](../imported-studies/squeeze-trend-hunter/Squeeze_Trend_Hunter.thinkscript) |
| `shared_shared_OpinicusVolumen` | study | exact; `private-imports/opinicus-volume/shared_shared_OpinicusVolumen.thinkscript` — local private source |
| `shared_shared_shared_ThinkHighLowClose` | study | exact; [imported-studies/previous-high-low-close/shared_shared_shared_ThinkHighLowClose.thinkscript](../imported-studies/previous-high-low-close/shared_shared_shared_ThinkHighLowClose.thinkscript) |
| `shared_shared_shared_ThinkPreMarkHighsLows` | study | exact; [imported-studies/premarket-rth-levels/shared_shared_shared_ThinkPreMarkHighsLows.thinkscript](../imported-studies/premarket-rth-levels/shared_shared_shared_ThinkPreMarkHighsLows.thinkscript) |
| `shared_shared_shared_ThinkVolumePriceAnalysis` | study | exact; [imported-studies/volume-price-analysis/shared_shared_shared_ThinkVolumePriceAnalysis.thinkscript](../imported-studies/volume-price-analysis/shared_shared_shared_ThinkVolumePriceAnalysis.thinkscript) |
| `shared_shared_ThinkATR` | study | exact; [imported-studies/atr-label/shared_shared_ThinkATR.thinkscript](../imported-studies/atr-label/shared_shared_ThinkATR.thinkscript) |
| `shared_shared_ThinkScriptTrendReverse` | study | exact; [imported-studies/trend-reversal-zigzag/shared_shared_ThinkScriptTrendReverse.thinkscript](../imported-studies/trend-reversal-zigzag/shared_shared_ThinkScriptTrendReverse.thinkscript) |
| `shared_shared_ThinkTopBreakoutBuy` | study | exact; [imported-studies/ultimate-breakout/shared_shared_ThinkTopBreakoutBuy.thinkscript](../imported-studies/ultimate-breakout/shared_shared_ThinkTopBreakoutBuy.thinkscript) |
| `shared_shared_ThinkTopBreakoutSell` | study | exact; [imported-studies/ultimate-breakout/shared_shared_ThinkTopBreakoutBuy.thinkscript](../imported-studies/ultimate-breakout/shared_shared_ThinkTopBreakoutBuy.thinkscript) |
| `shared_shared_VINCE_CCI_ATR` | study | exact; [imported-studies/cci-atr-supertrend/shared_shared_VINCE_CCI_ATR.thinkscript](../imported-studies/cci-atr-supertrend/shared_shared_VINCE_CCI_ATR.thinkscript) |
| `shared_usetos_dans_sqz_arrows` | study | exact; [imported-studies/dans-squeeze-arrows/shared_usetos_dans_sqz_arrows.thinkscript](../imported-studies/dans-squeeze-arrows/shared_usetos_dans_sqz_arrows.thinkscript) |
| `Squeeze_Trend_Hunter` | study | exact; [imported-studies/squeeze-trend-hunter/Squeeze_Trend_Hunter.thinkscript](../imported-studies/squeeze-trend-hunter/Squeeze_Trend_Hunter.thinkscript) |
| `supertrend` | study | exact; [imported-studies/supertrend/supertrend.thinkscript](../imported-studies/supertrend/supertrend.thinkscript) |
| `Supply_and_Demand_Index_Support_Resistance` | study | exact; [imported-studies/supply-demand-index/Supply_and_Demand_Index_Support_Resistance.thinkscript](../imported-studies/supply-demand-index/Supply_and_Demand_Index_Support_Resistance.thinkscript) |
| `TradingRushMACD200EMA` | study | exact; [studies/trading-rush-macd/TradingRushMACD200EMA.thinkscript](../studies/trading-rush-macd/TradingRushMACD200EMA.thinkscript) |
| `TradingRushMACD200EMA2` | study | exact; [studies/trading-rush-macd/TradingRushMACD200EMA.thinkscript](../studies/trading-rush-macd/TradingRushMACD200EMA.thinkscript) |
| `TradingRushMACD200EMATest` | study | exact; [studies/trading-rush-macd-test/TradingRushMACD200EMATest.thinkscript](../studies/trading-rush-macd-test/TradingRushMACD200EMATest.thinkscript) |
| `VolatilityStop` | study | exact; [imported-studies/volatility-trailing-stop/VolatilityStop.thinkscript](../imported-studies/volatility-trailing-stop/VolatilityStop.thinkscript) |
| `VProfile` | study | exact; [studies/session-volume-profile/VProfile.thinkscript](../studies/session-volume-profile/VProfile.thinkscript) |
| `VWAPReject` | study | exact; [studies/vwap-rejection/VWAPReject.thinkscript](../studies/vwap-rejection/VWAPReject.thinkscript) |
| `WarriorEye_Alert` | study | exact; [scanners/warrior-eye/WarriorEye_AlertStudy.txt](../scanners/warrior-eye/WarriorEye_AlertStudy.txt) |
| `WarriorEye_Scanner` | study | exact; [scanners/warrior-eye/WarriorEye_Hybrid_DayTrading_Scanner.txt](../scanners/warrior-eye/WarriorEye_Hybrid_DayTrading_Scanner.txt) |
| `WashRinse_v2_Alert` | study | exact; [scanners/wash-rinse-v2/WashRinse_v2_AlertStudy.ts](../scanners/wash-rinse-v2/WashRinse_v2_AlertStudy.ts) |
| `WashRinse_v2_Scanner` | study | exact; [scanners/wash-rinse-v2/WashRinse_v2_Scan_Corrected.ts](../scanners/wash-rinse-v2/WashRinse_v2_Scan_Corrected.ts) |
| `WashRinse_v2_Study` | study | exact; [studies/wash-rinse-v2/WashRinse_v2_Study_Corrected.ts](../studies/wash-rinse-v2/WashRinse_v2_Study_Corrected.ts) |
| `ZigZagHL` | study | exact; [imported-studies/zigzag-supply-demand/ZigZagHL.thinkscript](../imported-studies/zigzag-supply-demand/ZigZagHL.thinkscript) |
| `CC Indi` | custom-quote | exact; [watchlist-columns/covered-call-screen/CC_Indi.thinkscript](../watchlist-columns/covered-call-screen/CC_Indi.thinkscript) |
| `CC Indi2` | custom-quote | exact; [watchlist-columns/covered-call-screen/CC_Indi.thinkscript](../watchlist-columns/covered-call-screen/CC_Indi.thinkscript) |

## Backup versus GitHub package

The refreshed upload ZIP contains the organized public files, documentation, source inventory and alias inventory. The Opinicus source header explicitly says individual use only, so its code is Git-ignored and omitted from that ZIP; its README and inventory entry remain visible.

A separate local installed-script backup retains all 64 source definitions under their TOS names, including the private source and duplicate names. Keep that full backup separate from a public repository upload. Nothing was published to GitHub.
