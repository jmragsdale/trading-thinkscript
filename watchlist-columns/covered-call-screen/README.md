# Covered-Call Candidate Watchlist Labels

Displays BUY/HOLD/AVOID labels from stock price, implied-volatility range rank, average volume, RSI, EMA trend and ATR conditions. Captured installed aliases `CC Indi` and `CC Indi2` are exact duplicates.

## Files

- [CC_Indi.thinkscript](CC_Indi.thinkscript) — captured source, unchanged.

## Usage

Create a Custom Quote using the [watchlist-column installation steps](../../docs/INSTALLATION.md). Match the cached **daily** aggregation and **LAST** price setting. The cache records the candle-session flag as `false`; verify the session option in your current quote editor.

Read the labels as screening conditions. The code uses price $5-$50, an implied-volatility range rank above 0.5, 50-bar average volume above 500,000, RSI above 40, EMA20 above EMA50, and ATR14 below 5% of price for BUY. HOLD uses only price, average volume and RSI. AVOID means neither condition is met.

## Inputs and saved defaults

No exposed inputs. Thresholds and periods are internal definitions. The two installed quote definitions use identical source and cached aggregation/session/price settings.

## Outputs and alerts

The source uses three conditional `AddLabel` calls and defines no plot or native alert. Its current editor acceptance and display must be checked in TOS.

## Limitations and validation

BUY is a subset of HOLD, so both labels can be true simultaneously. Implied-volatility rank has no zero-range denominator guard, and unavailable IV data can affect the labels. The code does not inspect option chains, premium, spread, expiry, assignment, 100-share affordability or your actual account. Its small-account header is not an account-sizing check.

The two definitions were captured from TOS's separate custom-quote cache and compared by SHA-256. No code repair, fresh compilation, display validation or performance test was performed.

## Provenance

No author is identified in the source. [Installed-source mapping](../../tos-inventory.json) records both names, source hash and cached quote settings. [Validation scope](../../docs/VALIDATION.md).

[Library index](../../README.md).

## Performance evidence

**No matched quantitative performance results found** in the local research reviewed October 29, 2026. This means unknown, not zero return or a failed strategy. Source labels, counts, scores and promotional win-rate claims are not verified metrics. See [performance coverage](../../docs/PERFORMANCE.md).
