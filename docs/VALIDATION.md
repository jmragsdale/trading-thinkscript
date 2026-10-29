# Validation scope

The organization preserves source behavior and documents usage. It does not establish trading performance.

## Checks performed

- Matched each copied source/reference against a discovered source SHA-256 hash.
- Consolidated exact duplicates; the later current-only cleanup removes superseded source versions and records canonical replacements.
- Recorded current versus archived files and native alert companions in `inventory.json`.
- Captured 61 installed studies, 1 strategy and 2 custom quotes from current local TOS source caches; every installed name has a destination in `tos-inventory.json`.
- Cross-checked two native exports (AutoTL and AlertValue): export content equals the cached source plus one final newline.
- Extracted saved top-level inputs into each project README.
- Checked relative Markdown file links and required project documentation.
- Checked current scanner sources for exactly one active plot and explicit secondary aggregation references.

Run `python3 tools/verify_library.py` to reproduce the repository integrity and structure checks. It uses Python's standard library. It is not a ThinkScript parser or compiler.

## Checks not performed

No fresh Thinkorswim compilation, chronological chart replay, scan execution, alert listening, strategy export reconciliation or live execution was performed. Older static audits, source headers and research notes are historical context. Performance figures from Pine/Python work do not prove parity with a ThinkScript source.

## Known interpretation limits

| Project | Limitation |
| --- | --- |
| GCR Inflection | Stochastic and divergence branches are disabled. Strong +/-2 codes cannot occur in the saved logic. Several inputs do not affect outputs. |
| MTF OTE | Chart-only secondary aggregation; disabling the bias toggle does not remove evaluated higher-timeframe definitions. Startup state and native replay remain unverified. |
| OTE Wheel | Upcoming earnings must be checked separately. Suggested option strikes are chart references; option execution is not modeled. |
| Wash and Rinse study | Confirmed alerts intentionally use a closed bar one bar later. |
| Wash and Rinse strategy | Default 2R is not validated. OHLC stop-first assumptions do not resolve actual intrabar order. Saved trade size is 100. |
| ORB15 MNQ | Historical custom ledger, assumed price paths, shifted order markers, exact symbol/time-chart prerequisites, and no native TOS parity. The cap is not a hard dollar-loss limit. |
| Warrior Eye | No share-float enforcement; relative volume is bar-based. Quality scores are uncalibrated. |
| Scanner/chart pairs | Matching names do not establish signal parity; some scanners were corrected separately from their original chart studies. |
| Removed earlier versions | Superseded source files are absent from the current distribution. Their hashes remain in the consolidation manifest and historical Git records. |
| Installed OTE v3 capture | Captured hashes retain the historical relationship; only corrected v4 code is distributed. The installed TOS scripts were not replaced. |
| AutoTL / some shared level overlays | Whole-chart functions make historical displays dependent on the loaded endpoint. |
| Squeeze Trend Hunter / Dans oscillator | Centered oscillator components use future price offsets and can revise historical values. |
| OpenInterestCustom | Fixed March 1, 2022 data; not a live open-interest feed. |
| NineSMAPullback | Its date comparison is always true; cumulative signal counts and mark-to-current-price labels are not daily realized P&L. |
| Trading Rush MACD Test | Captured typographic quotes and en dashes may prevent compilation; source not repaired. |
| CC Indi custom quotes | BUY also satisfies HOLD; both labels can be true. IV-rank division lacks a zero-range guard, and option affordability/liquidity is not tested. |

Installed source completeness is limited to the local study/strategy and custom-quote caches. Per-chart overrides, saved alert definitions, other accounts and unsaved editor buffers were not backed up. No full account/workspace cache is distributed. The individual-use-only Opinicus source is retained locally and intentionally omitted from the public ZIP; the verifier recognizes that omission.

Schwab documents the [single-plot/no-secondary-aggregation scanner rules](https://toslc.thinkorswim.com/center/howToTos/thinkManual/Scan/Stock-Hacker/studyfilters) and [next-bar AddOrder behavior](https://toslc.thinkorswim.com/center/reference/thinkScript/Functions/Others/AddOrder). A structural check against those rules cannot establish compiler acceptance or result quality.

## Existing performance evidence review — October 29, 2026

[Performance documentation](PERFORMANCE.md) adds historical source-backed metrics without running a new backtest. Frozen source hashes, selected aggregate rows, evidence-file hashes and ORB exit-ledger calculations were checked. These checks validate documentation and arithmetic, not TOS runtime, causal equivalence, out-of-sample edge or broker execution. Historical fee assumptions remain dated, and retracted claims are marked.

## Standardized performance data — October 29, 2026

The [run index](performance/RUNS.md) records 52 historical configurations across the 13 projects with related evidence. The remaining 39 projects retain their no-matched-evidence status. All records use common contracts and metric fields; missing values have reasons, and gross/net/unspecified-cost results stay distinct.

The standardizer reconciles saved event slices to 55,996 event/horizon observations, simple NShape summaries to 11,504 hypothetical outcomes, and native Pine ORB exports to 19 completed trades per mode. Counts across scenarios, sides and horizons overlap. Aggregate-only results are not converted into invented ledgers. Existing original reports and the v1 registry remain preserved.

`tools/verify_library.py` checks the assertion keywords used in the bundled JSON contracts, configuration fingerprints, deterministic regeneration, observation hashes/arithmetic, project mapping, portable Markdown links and original code hashes. These are data/documentation checks. No new backtests, parameter searches, native TOS tests or broker actions were performed.

## Current-only source checks

The verifier rejects archived/snapshot source roles, versions folders, duplicate project roles, exact content duplicates and comment/whitespace-only duplicates. It verifies each removed file is absent and its canonical replacement hash is unchanged. Historical performance hashes for removed sources remain historical-only. [Consolidation details](CONSOLIDATION.md).
