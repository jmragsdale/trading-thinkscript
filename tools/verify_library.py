#!/usr/bin/env python3
"""Verify local packaging; does not compile or execute ThinkScript."""

from __future__ import annotations

import csv
import hashlib
import json
import math
import re
from collections import Counter
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
SOURCE_EXTENSIONS = {".ts", ".txt", ".thinkscript", ".tos"}


def uncomment(text: str) -> str:
    return re.sub(
        r'"(?:\\.|[^"\\])*"|#[^\n]*',
        lambda match: "" if match.group().startswith("#") else match.group(),
        text,
    )


def top_level_inputs(text: str) -> list[dict[str, str]]:
    code = uncomment(text)
    depth = 0
    quoted = False
    escaped = False
    depths = []
    for character in code:
        depths.append(depth)
        if quoted:
            if escaped:
                escaped = False
            elif character == "\\":
                escaped = True
            elif character == '"':
                quoted = False
        elif character == '"':
            quoted = True
        elif character == "{":
            depth += 1
        elif character == "}":
            depth -= 1
    pattern = r'\binput\s+(\w+)\s*=\s*((?:"(?:\\.|[^"\\])*"|[^;])*);'
    return [
        {"name": match[1], "default": match[2].strip()}
        for match in re.finditer(pattern, code, re.I)
        if depths[match.start()] == 0
    ]


def defined_plots(text: str) -> list[str]:
    code = re.sub(r'"(?:\\.|[^"\\])*"', '""', uncomment(text))
    return re.findall(r"\bplot\s+(\w+)\s*(?:=|;)", code, re.I)


def verify_performance(inventory: dict, errors: list[str]) -> None:
    """Check evidence integrity and recorded arithmetic, without running a backtest."""
    registry = json.loads((ROOT / "performance.json").read_text())
    projects = {p["path"]: p for p in inventory["projects"]}
    coverage = registry["projects"]
    if len(coverage) != len(projects) or {p["project"] for p in coverage} != set(projects):
        errors.append("Performance coverage does not match all projects")
    for row in coverage:
        project = projects[row["project"]]
        if project.get("performance") != {k: v for k, v in row.items() if k != "project"}:
            errors.append(f"Performance project metadata is stale: {row['project']}")
        if "## Performance evidence" not in (ROOT / row["project"] / "README.md").read_text():
            errors.append(f"Missing project performance note: {row['project']}")
        if row["native_thinkorswim_performance_verified"]:
            errors.append(f"Unsubstantiated native performance claim: {row['project']}")
        if not (ROOT / row["document"]).is_file():
            errors.append(f"Missing performance document: {row['document']}")
    for key, source in registry["sources"].items():
        path = (ROOT / source["evidence"]).resolve()
        if not path.is_relative_to(ROOT) or not path.is_file():
            errors.append(f"Missing or external performance evidence: {key}")
        elif hashlib.sha256(path.read_bytes()).hexdigest() != source["evidence_sha256"]:
            errors.append(f"Performance evidence bytes changed: {key}")
    for key, profile in registry["profiles"].items():
        if profile["native_thinkorswim_performance_verified"]:
            errors.append(f"Unsubstantiated native profile: {key}")
        if not set(profile["sources"]).issubset(registry["sources"]):
            errors.append(f"Unknown performance source: {key}")
    indexed = {f["path"]: f["sha256"] for f in inventory["files"]}
    for match in registry["source_hash_matches_for_offline_study"]:
        if not match["library_matches"] or any(indexed.get(p) != match["sha256"] for p in match["library_matches"]):
            errors.append(f"Offline-study source match changed: {match['original_filename']}")

    if registry.get("schema_version") != 2:
        errors.append("Expected version 2 performance registry")
    try:
        from standardize_performance import normalize, UNITS, run_fingerprint
        from performance_schema import validate as validate_contract
        run_schema = json.loads((ROOT / "docs/performance/schemas/run.schema.json").read_text())
        summary_schema = json.loads((ROOT / "docs/performance/schemas/summary.schema.json").read_text())
        normalized, _ = normalize(check=True)
        run_ids = {r["run_id"] for r in normalized["runs"]}
        if len(run_ids) != len(normalized["runs"]):
            errors.append("Duplicate performance run ID")
        for entry in normalized["runs"]:
            run = json.loads((ROOT / entry["run"]).read_text())
            summary = json.loads((ROOT / entry["summary"]).read_text())
            validate_contract(run, run_schema)
            validate_contract(summary, summary_schema)
            if run_fingerprint(run) != run["configuration_sha256"] or not run["run_id"].endswith(run["configuration_sha256"][:12]):
                errors.append(f"Run specification fingerprint differs: {run['run_id']}")
            if summary["run_id"] != run["run_id"]:
                errors.append(f"Run/summary identity mismatch: {run['run_id']}")
            for row in summary["rows"]:
                if set(row["metrics"]) != set(UNITS):
                    errors.append(f"Inconsistent metric fields: {run['run_id']}")
                for key, metric in row["metrics"].items():
                    value = metric["value"]
                    if value is None:
                        if not metric["missing_reason"]:
                            errors.append(f"Null metric lacks reason: {run['run_id']} / {key}")
                    elif not isinstance(value, (int, float)) or not math.isfinite(value):
                        errors.append(f"Nonfinite/nonnumeric metric: {run['run_id']} / {key}")
                    elif metric["source_id"] not in run["evidence"]["source_ids"]:
                        errors.append(f"Metric has unknown source: {run['run_id']} / {key}")
                    elif key.endswith("_pct") and not -100 <= value <= 100:
                        errors.append(f"Invalid percentage scale: {run['run_id']} / {key}")
            observations = run["artifacts"]["observations"]
            if observations["path"]:
                path = (ROOT / observations["path"]).resolve()
                if not path.is_relative_to(ROOT) or hashlib.sha256(path.read_bytes()).hexdigest() != observations["sha256"]:
                    errors.append(f"Observation artifact mismatch: {run['run_id']}")
            elif not observations["reason"]:
                errors.append(f"Missing ledger lacks reason: {run['run_id']}")
        for project in normalized["projects"]:
            if not set(project["run_ids"]).issubset(run_ids):
                errors.append(f"Project refers to unknown run: {project['project']}")
    except (AssertionError, ValueError, KeyError) as error:
        errors.append(f"Performance normalization check: {error}")


def main() -> int:
    inventory = json.loads((ROOT / "inventory.json").read_text())
    errors = []
    indexed = set()
    hashes = set()
    checked_scanners = 0
    private_paths = {entry["path"] for entry in inventory["files"] if not entry.get("publish", True)}
    omitted_private = 0

    for entry in inventory["files"]:
        relative = entry["path"]
        path = ROOT / relative
        if relative in indexed:
            errors.append(f"Duplicate inventory path: {relative}")
        indexed.add(relative)
        if relative in private_paths and not path.exists():
            omitted_private += 1
            continue
        if not path.is_file() or not path.resolve().is_relative_to(ROOT):
            errors.append(f"Missing or out-of-repository source: {relative}")
            continue
        data = path.read_bytes()
        digest = hashlib.sha256(data).hexdigest()
        if digest != entry["sha256"] or len(data) != entry["bytes"]:
            errors.append(f"Source bytes differ from inventory: {relative}")
        if digest in hashes:
            errors.append(f"Duplicate source bytes: {relative}")
        hashes.add(digest)
        if not entry.get("origins"):
            errors.append(f"Missing source provenance: {relative}")
        if entry["role"] == "reference-snippets":
            continue
        text = data.decode("utf-8")
        code = uncomment(text)
        if top_level_inputs(text) != entry["inputs"]:
            errors.append(f"Input metadata is stale: {relative}")
        plots = defined_plots(text)
        if plots != entry["plot_names"]:
            errors.append(f"Plot metadata is stale: {relative}")
        alerts = len(re.findall(r"\bAlert\s*\(", code))
        if alerts != entry["alert_calls"]:
            errors.append(f"Alert metadata is stale: {relative}")
        if entry["role"] == "scanner":
            checked_scanners += 1
            if len(plots) != 1:
                errors.append(f"Scanner must have one active plot: {relative}")
            if re.search(r"\bperiod\s*=|\bAggregationPeriod\s*\.", code, re.I):
                errors.append(f"Review scanner aggregation reference: {relative}")

    actual = {
        str(path.relative_to(ROOT))
        for directory in ("studies", "imported-studies", "private-imports", "scanners", "strategies", "watchlist-columns", "references")
        for path in (ROOT / directory).rglob("*")
        if path.is_file() and path.suffix.lower() in SOURCE_EXTENSIONS
    }
    for relative in sorted(actual - indexed):
        errors.append(f"Source missing from inventory: {relative}")
    for relative in sorted(indexed - actual - private_paths):
        errors.append(f"Inventory source missing from folders: {relative}")

    projects = inventory["projects"]
    project_paths = {project["path"] for project in projects}
    if len(project_paths) != len(projects):
        errors.append("Duplicate project path")
    for project in projects:
        folder = ROOT / project["path"]
        readme = folder / "README.md"
        if not readme.is_file():
            errors.append(f"Project README missing: {project['path']}")
            continue
        documentation = readme.read_text()
        for heading in ("## Usage", "## Inputs and saved defaults", "## Limitations and validation"):
            if heading not in documentation:
                errors.append(f"README missing {heading}: {project['path']}")
        assigned = {entry["path"] for entry in inventory["files"] if entry["project"] == project["path"]}
        listed = project["active_files"] + project["archived_files"]
        if set(listed) != assigned or len(listed) != len(assigned):
            errors.append(f"Project file membership is inconsistent: {project['path']}")
        if project["primary"] not in project["active_files"]:
            errors.append(f"Primary file is not current: {project['path']}")
        for entry in inventory["files"]:
            if entry["path"] == project["primary"]:
                for item in entry["inputs"]:
                    if f"| `{item['name']}` | `{item['default']}` |" not in documentation:
                        errors.append(f"README input default is stale: {project['path']} / {item['name']}")

    for entry in inventory["files"]:
        if entry["project"] is not None and entry["project"] not in project_paths:
            errors.append(f"Unknown project: {entry['path']}")

    checked_links = 0
    markdown_files = [
        path for path in ROOT.rglob("*.md")
        if not any(part in {".git", ".local", "dist"} for part in path.relative_to(ROOT).parts)
    ]
    for path in markdown_files:
        contents = path.read_text()
        if "/Users/" in contents or "file://" in contents:
            errors.append(f"Nonportable local path in documentation: {path.relative_to(ROOT)}")
        for target in re.findall(r"\[[^\]]*\]\(([^)]+)\)", contents):
            url = urlsplit(target.strip("<>"))
            if url.scheme or url.netloc or not url.path:
                continue
            checked_links += 1
            destination = (path.parent / unquote(url.path)).resolve()
            if not destination.is_relative_to(ROOT) or not destination.exists():
                errors.append(f"Broken local link in {path.relative_to(ROOT)}: {target}")

    tos_path = ROOT / "tos-inventory.json"
    if tos_path.exists():
        tos = json.loads(tos_path.read_text())
        aliases = tos["scripts"]
        if len(aliases) != tos["source_count"] or len({item["name"] for item in aliases}) != len(aliases):
            errors.append("Installed-script count or alias uniqueness is inconsistent")
        for item in aliases:
            destination = ROOT / item["repository_source"]
            if item["repository_source"] not in indexed:
                errors.append(f"Installed alias has no inventory destination: {item['name']}")
            elif destination.exists():
                digest = hashlib.sha256(destination.read_bytes()).hexdigest()
                if digest != item["repository_sha256"]:
                    errors.append(f"Installed alias destination changed: {item['name']}")
                if item["match"] == "exact" and digest != item["captured_sha256"]:
                    errors.append(f"Installed exact match is inconsistent: {item['name']}")

    verify_performance(inventory, errors)

    if errors:
        print("FAIL")
        for error in errors:
            print(f"- {error}")
        return 1
    counts = Counter(entry["role"] for entry in inventory["files"])
    archived = counts["archived-source"]
    references = counts["reference-snippets"]
    snapshots = counts["installed-snapshot"]
    active = len(indexed) - archived - references - snapshots
    print(f"PASS: {len(projects)} documented projects; {active} current library scripts; {archived} archives; {snapshots} installed snapshots; {references} references")
    print(f"PASS: {len(hashes)} available unique source hashes; input/output metadata; {checked_scanners} one-plot scanners")
    print(f"PASS: {len(markdown_files)} Markdown files; {checked_links} relative file links")
    if tos_path.exists():
        print(f"PASS: {tos['source_count']} installed TOS aliases mapped ({tos['study_count']} studies, {tos['strategy_count']} strategy, {tos.get('custom_quote_count', 0)} custom quotes)")
    if omitted_private:
        print(f"NOTE: {omitted_private} private source intentionally omitted from this public package")
    print("PASS: standardized run contracts/fingerprints, project coverage, evidence hashes, observation arithmetic and reproducible artifacts")
    print("No new backtest or Thinkorswim compilation, replay, alert or performance test was run.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
