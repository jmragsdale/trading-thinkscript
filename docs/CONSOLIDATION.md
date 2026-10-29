# Source consolidation — October 29, 2026

Removed **15 older source files**: 13 archived revisions and 2 installed OTE snapshots. The library now keeps 60 current scripts and 2 reference files across 52 projects. One current imported source remains local-only, so the public package has 59 current scripts plus 2 references.

Exact duplicate installed names already referenced one source file. No retained source was edited. Scanner, chart, helper and alert companions remain because they serve separate platform roles. The Trading Rush lower-pane MACD/high-volume study and its price-chart overlay are different implementations; the simple and quant-filtered NShape studies use different filters and remain separately documented.

## Removed versions and retained source

| Removed source | Current canonical source |
| --- | --- |
| `scanners/breakout/versions/breakout_scanner_thinkscript_original_2025-12-31.txt` | [breakout_scanner_thinkscript.txt](../scanners/breakout/breakout_scanner_thinkscript.txt) |
| `scanners/displacement-wick/versions/DisplacementWickAlerts_Scanner_original_2026-01-10.ts` | [DisplacementWickAlerts_Scanner.ts](../scanners/displacement-wick/DisplacementWickAlerts_Scanner.ts) |
| `scanners/eye-pattern/versions/EyePattern_Scanner__2025-10-21.txt` | [EyePattern_Scanner_CrystalClear.txt](../scanners/eye-pattern/EyePattern_Scanner_CrystalClear.txt) |
| `scanners/ote-wheel/versions/OTE_WheelScan_original_2026-07-15.ts` | [OTE_WheelScan.ts](../scanners/ote-wheel/OTE_WheelScan.ts) |
| `scanners/ote-wheel/versions/OTE_Wheel_Helper_installed_2026-10-29.thinkscript` | [OTE_WheelHelper_Study.ts](../scanners/ote-wheel/OTE_WheelHelper_Study.ts) |
| `scanners/ote-wheel/versions/OTE_Wheel_Scanner_installed_2026-10-29.thinkscript` | [OTE_WheelScan.ts](../scanners/ote-wheel/OTE_WheelScan.ts) |
| `scanners/warrior-eye/versions/WarriorEye_Hybrid_DayTrading_Scanner_original_2025-10-22.txt` | [WarriorEye_Hybrid_DayTrading_Scanner.txt](../scanners/warrior-eye/WarriorEye_Hybrid_DayTrading_Scanner.txt) |
| `scanners/wash-rinse-v2/versions/WashRinse_v2_Scan__2026-08-25.ts` | [WashRinse_v2_Scan_Corrected.ts](../scanners/wash-rinse-v2/WashRinse_v2_Scan_Corrected.ts) |
| `strategies/wash-rinse-v2/versions/WashRinse_v2_Strategy_Corrected_audit_2026-08-25.ts` | [WashRinse_v2_Strategy_Corrected.ts](../strategies/wash-rinse-v2/WashRinse_v2_Strategy_Corrected.ts) |
| `strategies/wash-rinse-v2/versions/WashRinse_v2_Strategy_Corrected_catalog_2026-08-30.ts` | [WashRinse_v2_Strategy_Corrected.ts](../strategies/wash-rinse-v2/WashRinse_v2_Strategy_Corrected.ts) |
| `strategies/wash-rinse-v2/versions/WashRinse_v2_Strategy__2026-08-25.ts` | [WashRinse_v2_Strategy_Corrected.ts](../strategies/wash-rinse-v2/WashRinse_v2_Strategy_Corrected.ts) |
| `studies/eye-pattern/versions/Eye Pattern CRYSTAL CLEAR__2025-10-22.txt` | [EyePattern_CrystalClear.txt](../studies/eye-pattern/EyePattern_CrystalClear.txt) |
| `studies/eye-pattern/versions/EyePattern_Simple__2025-10-21.txt` | [EyePattern_CrystalClear.txt](../studies/eye-pattern/EyePattern_CrystalClear.txt) |
| `studies/eye-pattern/versions/EyePattern_Study__2025-10-21.txt` | [EyePattern_CrystalClear.txt](../studies/eye-pattern/EyePattern_CrystalClear.txt) |
| `studies/wash-rinse-v2/versions/WashRinse_v2_Study__2026-08-25.ts` | [WashRinse_v2_Study_Corrected.ts](../studies/wash-rinse-v2/WashRinse_v2_Study_Corrected.ts) |

## Duplicate installed aliases

| Installed names | Single retained source |
| --- | --- |
| `shared_personal_perfect_leading_movingzeroline`, `Squeeze_Trend_Hunter` | [Squeeze_Trend_Hunter.thinkscript](../imported-studies/squeeze-trend-hunter/Squeeze_Trend_Hunter.thinkscript) |
| `shared_shared_ThinkTopBreakoutBuy`, `shared_shared_ThinkTopBreakoutSell` | [shared_shared_ThinkTopBreakoutBuy.thinkscript](../imported-studies/ultimate-breakout/shared_shared_ThinkTopBreakoutBuy.thinkscript) |
| `TradingRushMACD200EMA`, `TradingRushMACD200EMA2` | [TradingRushMACD200EMA.thinkscript](../studies/trading-rush-macd/TradingRushMACD200EMA.thinkscript) |
| `CC Indi`, `CC Indi2` | [CC_Indi.thinkscript](../watchlist-columns/covered-call-screen/CC_Indi.thinkscript) |

## Provenance and research

The [machine-readable manifest](../source-consolidation.json) records removed hashes and their canonical replacements. Historical Git commits and an ignored local backup preserve recovery history. Retired files are absent from the current library and latest ZIP. No Git history was rewritten.

Installed-name mappings now identify when the retained source differs from captured bytes. TOS itself was not edited. Historical performance evidence retains its original tested-source hashes; an obsolete tested scanner is marked historical-only rather than relabeled as the corrected current scanner. The 52 historical test configurations remain research records, not duplicate script source files.
