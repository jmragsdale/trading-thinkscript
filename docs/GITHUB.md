# Uploading this collection to GitHub

The public repository is [jmragsdale/trading-thinkscript](https://github.com/jmragsdale/trading-thinkscript). The collection uses `main` for published source, documentation and standardized historical performance records.

The repository uses relative Markdown links, so its index and project notes work in GitHub's file browser. A GitHub Pages website is optional; it is not needed to browse or download these scripts.

## Before upload

The [TOS reconciliation](TOS_RECONCILIATION.md) now accounts for 64 installed definitions. It documents exact duplicates, older installed variants and source-capture limits.

The [performance evidence index](PERFORMANCE.md) and `performance.json` are part of the public package. They include historical results with their sample, platform, cost and version limitations. Superseded claims in saved reports are flagged in the assessment notes.

1. Read the root README and review the current versus archived file choices.
2. Run `python3 tools/verify_library.py`.
3. Choose the repository visibility and the license you want to apply. No license was assigned during organization; retained attribution and source comments remain intact.
4. Keep `.local/`, `tos-capture/` and `dist/` out of source uploads. The Opinicus source under `private-imports/` is also Git-ignored because its header says individual use only; its README and metadata can be included. Imported/shared attribution remains in the other project sources and notes.

Use `dist/thinkscript-library-2026-10-29.zip` for the public upload package. The separate full installed-script backup includes all 64 definitions for local preservation, including the private imported code and duplicate aliases. Do not substitute that local backup for the public package.

## Upload with GitHub Desktop

Add this existing local repository in GitHub Desktop. Review the files to be committed, create an initial commit, then use **Publish repository** with your chosen name and visibility.

## Upload through the GitHub website

Create a repository and upload the public folders and root files, preserving their structure. Do not drag the whole workspace including hidden folders. Use multiple uploads if the website's file-count limit requires it. GitHub Desktop is easier for a complete folder tree.

## Optional terminal workflow

After creating an empty GitHub repository, use the actual repository URL supplied by GitHub:

```bash
python3 tools/verify_library.py
git add README.md inventory.json tos-inventory.json performance.json .gitignore .gitattributes docs tools studies imported-studies private-imports scanners strategies watchlist-columns references
git diff --cached --stat
git commit -m "Organize custom ThinkScript library and usage guides"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

For this collection, the repository URL is `https://github.com/jmragsdale/trading-thinkscript.git`. The initial publication is dated October 29, 2026; Git history records the exact published revision. The workflow above is for a new checkout without an existing remote. Inspect the current remote before changing it.

## Rebuild standardized performance records

Run `python3 tools/standardize_performance.py --write`, then `python3 tools/verify_library.py`. The standardizer uses only bundled saved evidence and Python's standard library. The [format](performance/FORMAT.md) documents schemas, units, nulls, shared observations and historical validation status. Include the source catalog, evidence, run folders, schemas and tools when uploading; `performance.json` indexes them.
