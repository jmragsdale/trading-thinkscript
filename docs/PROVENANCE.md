# Provenance and source coverage

Organized October 29, 2026. Sources were copied without changing code or removing existing attribution.

## Saved-file collection

The initial filename discovery covered Documents, Downloads and Desktop, plus the dedicated Prop Firm Strategy and thinkorswim folders. A focused content pass inspected 2,669 candidate text/source files after excluding dependencies, generated builds, device caches and files above 2 MB. It found 109 source/reference locations representing 40 distinct byte sequences: 25 current operational files, 13 earlier source versions and 2 mixed prose/snippet references.

The earlier consolidated trading library supplied the 24 current operational sources and 11 earlier versions. The October ORB15 research strategy added one current source. Two distinct corrected Wash and Rinse strategy snapshots from the audit and general catalog were also retained. Primary selection followed the documented correction history rather than timestamps alone.

## Installed TOS capture

The later platform capture reconciled all 61 study entries and 1 strategy entry in the current local SCRIPTS cache, matching live editor list row counts. Two further custom quotes were captured from the separate custom-quote cache. Study/strategy CODE values are base64-encoded source; custom-quote CODE values are XML-escaped source text. AutoTL and AlertValue native exports independently confirmed decoded source content, with TOS adding one final LF during export.

All 64 installed definitions are retained as exact raw source locally. They contain 60 distinct source contents. Comparing with the saved collection added 35 new unique scripts and 2 distinct installed OTE versions. All installed aliases, captured hashes and organized destinations are in [tos-inventory.json](../tos-inventory.json); the narrative comparison is in [TOS reconciliation](TOS_RECONCILIATION.md).

The combined local library contains 77 distinct source/reference files across 52 projects. One source is private because its header expressly limits it to individual use; the public package contains 76 source/reference files plus that project's documentation and metadata. Existing imported names do not establish user authorship or an open-source license.

## Preservation and exclusions

No installed TOS source, alerts, inputs or trading settings were edited. The full cache/workspace XML, account details and credentials were not placed in the library or backups. Only script source and source-relevant alias/quote-setting metadata were extracted.

This is a capture of source currently stored in the local account's study/strategy/custom-quote caches. It excludes per-chart input overrides, saved scan/alert configurations, unsaved editor buffers, other accounts and server-side revisions absent from those local caches. Code available only in chat history, compressed archives or unrelated prose was not reconstructed.

Exact duplicate source locations map to one organized copy; different code versions stay distinct. BreakoutScanner_Alert is a single final-newline difference and maps to the existing source, with exact installed bytes preserved in the local full backup. Portable origin labels identify source groups rather than filesystem-relative paths. The full original local source map and maintenance records remain in ignored .local/.

## Research interpretation

Existing cross-platform backtest reports were not republished as proof of ThinkScript parity. Known source-specific limitations are documented per project. Capture completeness and byte verification do not establish compilation, chronological behavior or profitability.

## Performance provenance

[performance.json](../performance.json) records original report hashes and portable source locations alongside hashes of the distributed evidence copies. UTF-8 BOMs and user-home paths may be removed from distributed text; original source code remains unchanged. Aggregate performance reports and hypothetical Pine trade exports are included; raw market-data feeds and live account records are not. See the [performance coverage](PERFORMANCE.md) for current assessment of historical/superseded wording.

## Standardization provenance

The version 2 [registry](../performance.json) separates run specifications from summaries and maps the same evidence to related study/scanner projects. Its [frozen v1 predecessor](performance/legacy/performance-v1.json) remains unchanged. The [source catalog](performance/source-catalog.json) includes hashes for saved research event/trade CSVs added during normalization; their lossless gzip copies preserve exact original bytes. Generated CSVs and summaries are reproducible with `tools/standardize_performance.py`; no historical strategy was rerun.
