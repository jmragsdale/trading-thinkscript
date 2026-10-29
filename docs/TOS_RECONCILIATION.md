# TOS source reconciliation — October 29, 2026

All **64 captured installed definitions** remain accounted for: 61 studies, 1 strategy and 2 custom quotes, containing 60 distinct original source contents. The current library keeps only canonical sources. Captured hashes and historical names remain in [tos-inventory.json](../tos-inventory.json).

## Capture and consolidation

Study/strategy CODE values were decoded from the local source cache; custom quotes came from the separate XML-escaped source cache. AutoTL and AlertValue native exports independently matched cached source plus one final newline. Full account/workspace XML and credentials were excluded. Per-chart overrides, saved alert definitions and unsaved editor buffers were not captured.

Exact duplicate installed names already shared one organized file. The later cleanup removed 13 archived revisions and 2 installed OTE v3 snapshots, retaining one current implementation per script role. Raw captured bytes remain in the ignored local backup. No installed TOS source, alert or trading setting was edited.

## Material captured-versus-current differences

- OTE_Wheel_Scanner and OTE_Wheel_Helper were captured as v3 with the earnings event gate. The library distributes only corrected v4 scanner/helper code.
- The captured WashRinse_v2_Strategy differs from the retained primary only by three explanatory comment lines.
- Eye_Pattern_CRYSTAL_CLEAR was an older Eye Pattern implementation. Both installed Eye Pattern chart names now map to the current CrystalClear source, with the older captured hash retained.
- BreakoutScanner_Alert differs from the library source by one final newline.

`exact` means current repository bytes equal captured bytes. `superseded-version` means the destination is the canonical replacement and must not be treated as an exact capture match. [Removed sources and duplicate groups](CONSOLIDATION.md).

## Installed names and current destinations

| Installed name | Type | Mapping | Current source |
| --- | --- | --- | --- |
| `WashRinse_v2_Strategy` | strategy | superseded-version | [WashRinse_v2_Strategy_Corrected.ts](../strategies/wash-rinse-v2/WashRinse_v2_Strategy_Corrected.ts) |
| `AlertValue` | study | exact | [AlertValue.thinkscript](../studies/alert-value/AlertValue.thinkscript) |
| `AutoTL` | study | exact | [AutoTL.thinkscript](../studies/auto-trend-lines/AutoTL.thinkscript) |
| `BreakoutScanner_Alert` | study | boundary whitespace only | [BreakoutScanner_AlertStudy.ts](../scanners/breakout/BreakoutScanner_AlertStudy.ts) |
| `BreakoutScanner_Scan` | study | exact | [breakout_scanner_thinkscript.txt](../scanners/breakout/breakout_scanner_thinkscript.txt) |
| `BTDStudy` | study | exact | [BTDStudy.thinkscript](../studies/buy-the-dip/BTDStudy.thinkscript) |
| `CustomVolumeProfile` | study | exact | [CustomVolumeProfile.thinkscript](../imported-studies/prior-period-volume-profile/CustomVolumeProfile.thinkscript) |
| `Displacement_Detector` | study | exact | [Displacement_Detector.thinkscript](../studies/displacement-detector/Displacement_Detector.thinkscript) |
| `DispWick_Alert` | study | exact | [DisplacementWickAlerts_AlertStudy.ts](../scanners/displacement-wick/DisplacementWickAlerts_AlertStudy.ts) |
| `DispWick_Chart` | study | exact | [DisplacementWickAlerts_Study.ts](../studies/displacement-wick/DisplacementWickAlerts_Study.ts) |
| `DispWick_Scanner` | study | exact | [DisplacementWickAlerts_Scanner.ts](../scanners/displacement-wick/DisplacementWickAlerts_Scanner.ts) |
| `EMA3820CrossoverStrategy` | study | exact | [EMA3820CrossoverStrategy.thinkscript](../studies/ema-3-8-20-crossover/EMA3820CrossoverStrategy.thinkscript) |
| `Eye_Pattern_CRYSTAL_CLEAR` | study | superseded-version | [EyePattern_CrystalClear.txt](../studies/eye-pattern/EyePattern_CrystalClear.txt) |
| `EyePattern_Alert` | study | exact | [EyePattern_AlertStudy.txt](../scanners/eye-pattern/EyePattern_AlertStudy.txt) |
| `EyePattern_Chart` | study | exact | [EyePattern_CrystalClear.txt](../studies/eye-pattern/EyePattern_CrystalClear.txt) |
| `EyePattern_Scanner` | study | exact | [EyePattern_Scanner_CrystalClear.txt](../scanners/eye-pattern/EyePattern_Scanner_CrystalClear.txt) |
| `GCR_Inflection_Scan` | study | exact | [GCR_Strategy_Scanner_ThinkScript.ts](../watchlist-columns/gcr-inflection/GCR_Strategy_Scanner_ThinkScript.ts) |
| `ICTDisplacementStudy` | study | exact | [ICTDisplacementStudy.thinkscript](../studies/ict-displacement-retest/ICTDisplacementStudy.thinkscript) |
| `MACDV_Alert` | study | exact | [MACDV_AlertStudy.ts](../scanners/macd-v/MACDV_AlertStudy.ts) |
| `MACDV_Chart` | study | exact | [MACDV_Chart_Study_Entries_Exits.ts](../studies/macd-v/MACDV_Chart_Study_Entries_Exits.ts) |
| `MACDV_Scanner` | study | exact | [MACDV_Scan_Unified_Regime_SignalType.ts](../scanners/macd-v/MACDV_Scan_Unified_Regime_SignalType.ts) |
| `MTF30MINFVG` | study | exact | [MTF30MINFVG.thinkscript](../studies/mtf-30m-fvg/MTF30MINFVG.thinkscript) |
| `MTF_OTE_TOS` | study | exact | [MTF_OTE_TOS.ts](../studies/mtf-ote/MTF_OTE_TOS.ts) |
| `NakedFXEngulfing` | study | exact | [NakedFXEngulfing.thinkscript](../imported-studies/naked-forex-engulfing/NakedFXEngulfing.thinkscript) |
| `NineSMAPullback` | study | exact | [NineSMAPullback.thinkscript](../studies/nine-sma-pullback/NineSMAPullback.thinkscript) |
| `NShape_Simple_Study` | study | exact | [NShape_Simple_Study.thinkscript](../studies/nshape-simple/NShape_Simple_Study.thinkscript) |
| `NShape_SPY_Alert` | study | exact | [NShape_QuantFiltered_SPY_AlertStudy.ts](../scanners/nshape-spy/NShape_QuantFiltered_SPY_AlertStudy.ts) |
| `NShape_SPY_Chart` | study | exact | [NShape_QuantFiltered_SPY_Scalp.ts](../studies/nshape-spy/NShape_QuantFiltered_SPY_Scalp.ts) |
| `NShape_SPY_Scanner` | study | exact | [NShape_QuantFiltered_SPY_Scanner.ts](../scanners/nshape-spy/NShape_QuantFiltered_SPY_Scanner.ts) |
| `OpenInterestCustom` | study | exact | [OpenInterestCustom.thinkscript](../imported-studies/open-interest-2022-03-01/OpenInterestCustom.thinkscript) |
| `OTE_Wheel_Helper` | study | superseded-version | [OTE_WheelHelper_Study.ts](../scanners/ote-wheel/OTE_WheelHelper_Study.ts) |
| `OTE_Wheel_Scanner` | study | superseded-version | [OTE_WheelScan.ts](../scanners/ote-wheel/OTE_WheelScan.ts) |
| `QTA_Volume_Profile` | study | exact | [QTA_Volume_Profile.thinkscript](../imported-studies/qta-volume-profile/QTA_Volume_Profile.thinkscript) |
| `Reversal_Candles` | study | exact | [Reversal_Candles.thinkscript](../imported-studies/reversal-candles/Reversal_Candles.thinkscript) |
| `RVI` | study | exact | [RVI.thinkscript](../imported-studies/relative-vigor-index/RVI.thinkscript) |
| `shared_personal_dashboard_labels` | study | exact | [shared_personal_dashboard_labels.thinkscript](../imported-studies/multi-indicator-dashboard/shared_personal_dashboard_labels.thinkscript) |
| `shared_personal_perfect_leading_movingzeroline` | study | exact | [Squeeze_Trend_Hunter.thinkscript](../imported-studies/squeeze-trend-hunter/Squeeze_Trend_Hunter.thinkscript) |
| `shared_shared_OpinicusVolumen` | study | exact | `private-imports/opinicus-volume/shared_shared_OpinicusVolumen.thinkscript` — local private source |
| `shared_shared_shared_ThinkHighLowClose` | study | exact | [shared_shared_shared_ThinkHighLowClose.thinkscript](../imported-studies/previous-high-low-close/shared_shared_shared_ThinkHighLowClose.thinkscript) |
| `shared_shared_shared_ThinkPreMarkHighsLows` | study | exact | [shared_shared_shared_ThinkPreMarkHighsLows.thinkscript](../imported-studies/premarket-rth-levels/shared_shared_shared_ThinkPreMarkHighsLows.thinkscript) |
| `shared_shared_shared_ThinkVolumePriceAnalysis` | study | exact | [shared_shared_shared_ThinkVolumePriceAnalysis.thinkscript](../imported-studies/volume-price-analysis/shared_shared_shared_ThinkVolumePriceAnalysis.thinkscript) |
| `shared_shared_ThinkATR` | study | exact | [shared_shared_ThinkATR.thinkscript](../imported-studies/atr-label/shared_shared_ThinkATR.thinkscript) |
| `shared_shared_ThinkScriptTrendReverse` | study | exact | [shared_shared_ThinkScriptTrendReverse.thinkscript](../imported-studies/trend-reversal-zigzag/shared_shared_ThinkScriptTrendReverse.thinkscript) |
| `shared_shared_ThinkTopBreakoutBuy` | study | exact | [shared_shared_ThinkTopBreakoutBuy.thinkscript](../imported-studies/ultimate-breakout/shared_shared_ThinkTopBreakoutBuy.thinkscript) |
| `shared_shared_ThinkTopBreakoutSell` | study | exact | [shared_shared_ThinkTopBreakoutBuy.thinkscript](../imported-studies/ultimate-breakout/shared_shared_ThinkTopBreakoutBuy.thinkscript) |
| `shared_shared_VINCE_CCI_ATR` | study | exact | [shared_shared_VINCE_CCI_ATR.thinkscript](../imported-studies/cci-atr-supertrend/shared_shared_VINCE_CCI_ATR.thinkscript) |
| `shared_usetos_dans_sqz_arrows` | study | exact | [shared_usetos_dans_sqz_arrows.thinkscript](../imported-studies/dans-squeeze-arrows/shared_usetos_dans_sqz_arrows.thinkscript) |
| `Squeeze_Trend_Hunter` | study | exact | [Squeeze_Trend_Hunter.thinkscript](../imported-studies/squeeze-trend-hunter/Squeeze_Trend_Hunter.thinkscript) |
| `supertrend` | study | exact | [supertrend.thinkscript](../imported-studies/supertrend/supertrend.thinkscript) |
| `Supply_and_Demand_Index_Support_Resistance` | study | exact | [Supply_and_Demand_Index_Support_Resistance.thinkscript](../imported-studies/supply-demand-index/Supply_and_Demand_Index_Support_Resistance.thinkscript) |
| `TradingRushMACD200EMA` | study | exact | [TradingRushMACD200EMA.thinkscript](../studies/trading-rush-macd/TradingRushMACD200EMA.thinkscript) |
| `TradingRushMACD200EMA2` | study | exact | [TradingRushMACD200EMA.thinkscript](../studies/trading-rush-macd/TradingRushMACD200EMA.thinkscript) |
| `TradingRushMACD200EMATest` | study | exact | [TradingRushMACD200EMATest.thinkscript](../studies/trading-rush-macd-test/TradingRushMACD200EMATest.thinkscript) |
| `VolatilityStop` | study | exact | [VolatilityStop.thinkscript](../imported-studies/volatility-trailing-stop/VolatilityStop.thinkscript) |
| `VProfile` | study | exact | [VProfile.thinkscript](../studies/session-volume-profile/VProfile.thinkscript) |
| `VWAPReject` | study | exact | [VWAPReject.thinkscript](../studies/vwap-rejection/VWAPReject.thinkscript) |
| `WarriorEye_Alert` | study | exact | [WarriorEye_AlertStudy.txt](../scanners/warrior-eye/WarriorEye_AlertStudy.txt) |
| `WarriorEye_Scanner` | study | exact | [WarriorEye_Hybrid_DayTrading_Scanner.txt](../scanners/warrior-eye/WarriorEye_Hybrid_DayTrading_Scanner.txt) |
| `WashRinse_v2_Alert` | study | exact | [WashRinse_v2_AlertStudy.ts](../scanners/wash-rinse-v2/WashRinse_v2_AlertStudy.ts) |
| `WashRinse_v2_Scanner` | study | exact | [WashRinse_v2_Scan_Corrected.ts](../scanners/wash-rinse-v2/WashRinse_v2_Scan_Corrected.ts) |
| `WashRinse_v2_Study` | study | exact | [WashRinse_v2_Study_Corrected.ts](../studies/wash-rinse-v2/WashRinse_v2_Study_Corrected.ts) |
| `ZigZagHL` | study | exact | [ZigZagHL.thinkscript](../imported-studies/zigzag-supply-demand/ZigZagHL.thinkscript) |
| `CC Indi` | custom-quote | exact | [CC_Indi.thinkscript](../watchlist-columns/covered-call-screen/CC_Indi.thinkscript) |
| `CC Indi2` | custom-quote | exact | [CC_Indi.thinkscript](../watchlist-columns/covered-call-screen/CC_Indi.thinkscript) |

The public [GitHub repository](https://github.com/jmragsdale/trading-thinkscript) and latest ZIP include only current public sources. The individual-use-only Opinicus source and full installed-script backup remain local. Current-only cleanup does not rewrite historical Git commits or alter saved performance measurements.
