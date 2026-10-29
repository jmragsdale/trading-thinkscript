# Installing the scripts

Use thinkorswim desktop and the editor appropriate to the file's role. Open the source in a plain-text editor or use GitHub's **Raw** view before copying. Replace the editor contents with one complete current script. File extensions are storage names, not import packages.

## Chart studies and alert companions

From a chart choose **Studies → Edit Studies → Create**. Name the script, paste its source, resolve editor errors, then save and add it to the chart. Select the aggregation and input values from its project README. These steps follow the [official thinkScript Editor guide](https://toslc.thinkorswim.com/center/howToTos/thinkManual/charts/Using-Studies-and-Strategies/thinkScript-Editor).

For a scanner's alert companion, match the scanner inputs and timeframe. Review `alertsOn` or the project's other alert controls. Native `Alert()` conditions can behave differently on an incomplete bar; the [official Alert reference](https://toslc.thinkorswim.com/center/reference/thinkScript/Functions/Others/Alert) describes the alert types. The supplied source and README specify which event it tests. Installing a scan alone does not install its chart companion.

## Stock Hacker scanners

Open **Scan → Stock Hacker**, add a **Study** filter, choose **Custom**, then open its **thinkScript Editor**. Paste the project's main scanner, save it, and select the aggregation in the filter UI. For intraday scans, match the EXT setting to your comparison chart. Run the scan against the intended universe.

Stock Hacker requires exactly one plot and prohibits secondary aggregation. Keep scanner sources separate from multi-plot chart helpers. See Schwab's [Study Filters instructions](https://toslc.thinkorswim.com/center/howToTos/thinkManual/Scan/Stock-Hacker/studyfilters).

## Historical strategies

Use **Studies → Edit Studies → Strategies → Create**, paste the strategy and add it to an isolated research chart. Review its quantity, timeframe and session inputs first. Follow the project's README for its interpretation and restrictions.

`AddOrder` produces hypothetical next-bar strategy orders. In particular, ORB15's retrospectively modeled prices have markers shifted one bar; its native Strategy Report is not its custom ledger. See the [official AddOrder reference](https://toslc.thinkorswim.com/center/reference/thinkScript/Functions/Others/AddOrder).

## Watchlist columns

Customize a watchlist's columns, select a **Custom** quote, open its formula editor and paste the column source. Select the aggregation and a recognizable column name. See [Custom Quotes](https://toslc.thinkorswim.com/center/howToTos/thinkManual/MarketWatch/Quotes/customquotes).

The GCR file returns a signed code, not a Boolean scan. Its currently reachable setup values are -1, 0 and +1. Read its project limitations before interpreting the labels or changing inactive inputs.

## First-use check

Confirm the editor accepts the code, then inspect several known bars or scan results with the saved inputs and session. Record any platform errors against the exact source hash. Compilation, signal behavior and hypothetical fills are separate checks. This organization did not perform them.
