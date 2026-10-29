# Performance format — version 1.0.0

This format standardizes saved evidence. It does not run strategies, change scripts, fill missing history or establish Thinkorswim performance. The [run index](RUNS.md) covers 13 projects in 8 families; related study/scanner projects reference the same records rather than duplicating results.

## Files and grain

| File | Grain and purpose |
| --- | --- |
| `performance.json` at repository root | Version 2 registry: source catalog, all 52 project coverage entries, family-to-run mappings and artifact hashes. |
| `run.json` within each run folder | One historical configuration, instrument or explicitly named pool, platform, dataset context and cost scenario. |
| `summary.json` within each run folder | One row per reported slice of that run: side, horizon, year, regime or development/test period. Each row has the same metric fields. |
| `events.csv` when available | One retained detector signal and measurement horizon. The same signal can appear at multiple horizons. |
| `trades.csv` when available | One saved hypothetical entry/exit outcome. Some models evaluate overlapping signals; this does not imply a portfolio ledger. |
| `PERFORMANCE.md` within each run folder | Generated human-readable summary of the run contract and pooled/split metrics; detailed year/regime metrics remain in JSON. |

A run ID contains a readable label plus the first 12 hex characters of a SHA-256 fingerprint over the declared historical configuration, platform, calendar, costs, execution assumptions and evidence hashes. Full fingerprints are in `configuration_sha256`. Library source hashes and artifact hashes are recorded separately. The fingerprint identifies the available specification; unknown fields remain unknown. It is not proof of complete reproducibility of the original engine.

Dates `reported_on` and `normalized_on` are distinct. Exact dataset boundaries are only populated when established. Month-level or approximate periods stay in `dataset.reported_period`; they are not padded with invented day boundaries.

## Run contract

The [run schema](schemas/run.schema.json) defines the common record. Every run includes:

- `script_identity`: target projects, current library source hashes, frozen tested-source hashes where available, tested model/version, and recorded configuration. Current defaults are not silently substituted for unknown historical settings. For offline detector ports, the frozen ThinkScript source hashes do not identify the Python implementation hash.
- `test_environment`: Python or Pine engine, version when known, instrument, bar aggregation, session, timezone and chart type. `aggregation_minutes=1440` means a daily-bar label; it does not assert a 24-hour cash session.
- `dataset`: provider or source description, coverage, raw-data hash when available, missing-bar handling and rollover treatment. Coverage dates describe inputs, not a promise of uninterrupted eligibility.
- `execution`: signal/entry/exit rules, sizing, same-bar priority, capital and overlap treatment.
- `costs`: currency, fee/slippage components where established, total historical cost, P&L basis and description. A missing component does not mean free execution. Dated assumptions are not current fee quotations.
- `sample`: development/test periods and whether the test was used in selection. `independent_holdout_verified=false` does not assert that no independent test exists elsewhere.
- `evidence`: source IDs plus portable original locations and original/distributed-file hashes.
- `validation`: status, source relationship, reported lookahead checks, warnings and reasons for unknown metadata.
- `artifacts`: repository-relative paths and hashes for summaries and observations. Missing observations use `path=null` plus a reason. No event/trade rows are reconstructed from aggregate counts.

`source_relationship` is a separate dimension from validation status:

| Relationship | Meaning |
| --- | --- |
| `frozen` | Offline port identifies frozen ThinkScript input text. Per-target `exact-frozen-source` or `related-version` distinguishes retained source versus a historical removed revision. Native numeric/runtime parity remains unchecked. |
| `related-model` | Same research family or concept, without an exact tested ThinkScript implementation match. |
| `different-model` | Rules materially differ from current scripts; context only. |

Statuses are `reported`, `historical-unrevalidated` or `withdrawn`. `reported` means the record reflects saved evidence, not accepted trading validity. Withdrawn records are excluded from any meaningful comparison. Old leak-derived MTF claims remain void in the evidence and family notes; they are not promoted into current clean-run metrics.

## Metrics and nulls

The [summary schema](schemas/summary.schema.json) defines a common numeric field set. Every metric is an object containing `value`, `unit`, `method`, `source_id` and `missing_reason`.

- Missing values use JSON `null` with a reason. Zero is used only when the supplied evidence or recomputed arithmetic supports zero.
- Percentages use 0–100. `positive_endpoint_fraction` uses 0–1 and measures cost-adjusted positive endpoints, not strategy wins.
- Gross, net and unspecified-cost results use separate fields. For example, `profit_factor_gross`, `profit_factor_net` and `profit_factor_unspecified` must not be merged into a ranking column without checking basis.
- Points are price units of the named instrument. SPY dollars/share and MNQ index points are not interchangeable. Dollar conversion in the offline event study is one SPY share or one MNQ contract at $2/point.
- R is outcome divided by modeled initial trade risk. It is populated only where the original model defines that risk; an arbitrary stop is not added to signal studies.
- The price-return percentage in a platform export is not automatically account return. `net_return_pct` remains null without an explicitly adopted capital/return calculation.

| Metric group | Definition |
| --- | --- |
| `signals`, `completed_trades`, `trading_days` | Population for the specific slice. Signal-event rows count retained signal/horizon observations. A strategy outcome count is not a count of native broker fills. |
| `mean_net_points`, `mean_gross_points`, `mean_points_unspecified` | Mean directional outcome in instrument price units, with the named cost basis. |
| `mean_net_usd`, `net_profit_usd` | Mean or total modeled dollars with stated sizing/cost conventions. |
| `net_profit_usd_low`, `net_profit_usd_high` | Approximate historical scenario-range endpoints, not rigorous bounds. Exact dates/engine parity may remain unknown. |
| `mean_net_r`, `mean_r_unspecified` | Mean result in initial-risk units with explicit cost basis. |
| `profit_factor_*` | Sum of positive outcome P&L divided by absolute sum of negative outcome P&L, using the named gross/net/unspecified basis. A zero-loss denominator is undefined, not infinity. |
| `win_rate_pct` | Positive hypothetical trade outcomes / completed outcomes ×100 when defined by the report/ledger. Historical aggregate-model definitions remain report-specific. |
| `mean_win_usd`, `mean_loss_usd` | Mean positive and mean negative net completed-trade P&L. Losses retain a negative sign. |
| `closed_trade_max_drawdown_usd` | Largest peak-to-trough decline in cumulative completed-trade net P&L, with initial cumulative P&L zero. Excludes unrealized excursions. |
| `marked_max_drawdown_*` | Equity drawdown including unrealized P&L, only if supplied by the original marked-equity study. Never substituted with closed-trade drawdown. |
| `longest_losing_streak` | Largest consecutive count of negative completed-trade outcomes, ordered by the saved ledger. Breakevens reset the streak. |
| `matched_excess_points`, `excess_ci_*` | Difference from the original study's matched baseline, with its reported bootstrap interval. This is descriptive and not a fresh independent test. |
| `mean_mfe_points`, `mean_mae_points` | Mean gross favorable/adverse excursions over the event horizon. MAE is a positive magnitude. These are reachable excursions, not realized exits. |
| `monthly_*`, `losing_months`, `months` | Aggregate related-package monthly results; calendar endpoints may be partial. No daily/monthly curve is fabricated from these summaries. |
| `touch_hold_pct`, `expiry_hold_*` | Historical daily underlying-event frequencies. No inference of option premium, assignment or wheel return. |

## Observations and overlap

The saved offline event ledger supplies 55,996 signal/horizon rows. They are split into six family/instrument CSVs. Each CSV contains corrected-base, double-total-cost and legacy-cost columns; cost-scenario runs intentionally share it. `run.json` points to the shared file, and summary dimensions identify the selected `net_column`. Do not treat shared files or horizons as independent samples. Original/double legacy cost cases are retained only for MNQ, where they differ from the corrected assumptions.

The simple NShape ledger supplies 11,504 hypothetical outcomes across 16 target/maximum-hold configurations. Every configuration has a separate CSV. Its all/long/short summary slices overlap. P&L remains `unspecified` in cost basis because the retrieved table does not establish realistic fee/slippage deduction.

ORB native Pine exports contain both entry and exit rows with repeated P&L. They are paired by trade number into one normalized row per completed trade: 19 per mode. P&L and commission are not counted twice. Platform excursion columns are preserved as reported values rather than relabeled as a portfolio marked-equity curve. Exported timestamps retain the observed UTC-4 context; no unseen DST conversion is assumed.

Raw saved research CSVs added during normalization are distributed with lossless gzip and deterministic timestamp metadata. Their decompressed bytes match original hashes. These are research observations, not full raw market-data feeds or account exports.

## Rebuild and checks

From the repository root:

```bash
python3 tools/standardize_performance.py --write
python3 tools/verify_library.py
```

To check without changing any files:

```bash
python3 tools/standardize_performance.py --check
```

The standardizer uses Python's standard library and the frozen v1 registry, source catalog and saved evidence. It does not need the original home-directory paths, a trading platform or network access. The [frozen v1 registry](legacy/performance-v1.json) is retained unchanged for provenance, not as the current result format. Removed code paths in that historical metadata are not current files; the [consolidation manifest](../../source-consolidation.json) records their hashes and replacements.

Checks cover evidence hashes, gzip original-byte hashes, unique observations, every offline scenario/slice count/day/mean, simple NShape ledger reconciliation within published rounding, paired ORB exports, deterministic artifacts, registry/project links and original source-code preservation. The [normalization checks](NORMALIZATION_CHECKS.json) identify the reconciled runs. Aggregate-only reports remain aggregate-only and cannot pass observation reconciliation without missing ledgers. No strategy was rerun and no native TOS parity was certified.
