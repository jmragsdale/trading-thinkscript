# ORB15 MNQ research usage

The saved ThinkScript is a historical price-path model. Native Thinkorswim compilation and matched native exports have not been verified. Earlier TradingView verification concerned a separate Pine source and does not validate this file.

## Configuration

Use the exact symbol `/MNQ:XCME` on standard one-minute **time** bars. The source starts disabled with `confirmedOneMinuteTimeChart=no`; confirm the chart type before enabling it. A numeric aggregation of 60000 alone also matches certain tick charts. Other symbols are deliberately disabled.

The model requires all 15 opening-range bars from 09:30 through 09:44 ET. Orders are modeled as staged after the 09:45 close, first eligible from 09:46. It allows one entry per session, one contract, with the opposite opening-range boundary as the original stop and a target at 5R. The entry bar is unprotected. A 15:59 close requests a modeled exit at the next available open.

## Modes

- `Original` keeps the original stop distance.
- `StopCap100` caps the distance at 48.75 points and recalculates the 5R target from that distance. The model uses $2 per point, a 0.25-point tick, $1.90 round-trip fees and its fixed slippage assumptions. Gaps and the unprotected entry bar can cause losses above $100.
- `HighFirst` and `LowFirst` select different assumed historical OHLC paths. They can change the first entry direction or exit when both boundaries are touched. They are not guaranteed outcome bounds.

## Reading results

Use the custom net/trade-count label as the model record. `AddOrder` markers occur one bar after retrospectively modeled fills and are not native resting bracket orders. Hide them with `showHypotheticalOrderMarkers=no` if their timestamps are confusing. An unsupported-geometry count above zero means the ledger is incomplete and should not be ranked.

The current incomplete bar is provisional. The model supports positive MNQ prices below 250,000 and the coded post-2007 US daylight-saving rules. Futures trading-session dates, DST transitions, overnight resets, gaps and missing bars require native verification.

Compile in an isolated research chart, record compiler diagnostics and the source hash, then reconcile a small matched-bar sample of range, entry, stop, target and end-of-day events. This source contains no alerts or routing. It is not a live order system or prop-evaluation account model.

[Project README](README.md) · [Validation scope](../../docs/VALIDATION.md) · [Official AddOrder reference](https://toslc.thinkorswim.com/center/reference/thinkScript/Functions/Others/AddOrder)
