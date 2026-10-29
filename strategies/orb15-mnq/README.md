# ORB15 MNQ Historical Research Strategy

Models a 09:30-09:44 ET opening-range breakout, one contract and one entry per session, with Original and frozen StopCap100 variants.

**Aggregation / context:** Exact /MNQ:XCME symbol, standard 1-minute time chart.

## Files

| File | Use |
| --- | --- |
| [ORB15_MNQ_Research.thinkscript](ORB15_MNQ_Research.thinkscript) | Main historical strategy |

## Usage

Create a separate Strategy on /MNQ:XCME one-minute TIME bars. Verify chart type before setting confirmedOneMinuteTimeChart=yes. Start in Original mode, then compare StopCap100 in a separate run. Review the custom net ledger and incomplete-model label, not just order markers.

See the [installation guide](../../docs/INSTALLATION.md) for the matching editor. Open the source above, copy the entire file, and replace the editor contents. The `.ts` extension here means ThinkScript.

## Inputs and saved defaults

Defaults below are read from `ORB15_MNQ_Research.thinkscript`. They document the saved configuration; they are not optimized recommendations.

| Input | Saved default |
| --- | --- |
| `configuration` | `{default Original, StopCap100}` |
| `historicalPath` | `{default HighFirst, LowFirst}` |
| `showHypotheticalOrderMarkers` | `yes` |
| `confirmedOneMinuteTimeChart` | `no` |

## Outputs and alerts

Main chart plots: `OpeningHigh`, `OpeningLow`, `HypotheticalStop`, `HypotheticalTarget`. The source also defines internal helper outputs `RejectedUnsupported`, `NextCode` and `ExitPrice`.

No native alerts are included. Read the [research guide](GUIDE.md) before interpreting the hypothetical ledger or shifted order markers.

## Limitations and validation

Research only. The saved source starts disabled. AddOrder markers are shifted one bar after retrospectively modeled fills; its custom ledger is the model record. HighFirst/LowFirst select assumed historical price paths. Costs are fixed at $1.90 round trip plus the coded slippage assumptions. StopCap100 uses a 48.75-point distance cap, not a guaranteed $100 maximum loss; gaps and the unprotected entry bar can exceed it. Thinkorswim compilation and native parity remain unverified.

Source code was copied unchanged and checked against its SHA-256 provenance. No current Thinkorswim compilation, replay, live scan or profitability test was performed for this organization. Earlier research and source-header claims do not establish those checks. See [validation scope](../../docs/VALIDATION.md).

## Provenance and related files

The [inventory](../../inventory.json) records file hashes, roles and portable source-location labels. Earlier distinct code is kept in `versions/` where present. Duplicate copies are consolidated by hash; the originals remain in their source folders.

[Browse related projects in the library index](../../README.md).

## Performance evidence

4 historical test configurations are linked in the [performance notes](../../docs/performance/orb15-mnq.md). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format](../../docs/performance/FORMAT.md) and [all runs](../../docs/performance/RUNS.md).
