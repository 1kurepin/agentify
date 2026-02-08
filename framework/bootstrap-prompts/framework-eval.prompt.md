# Framework Evaluation: Deployment Review

**Developer-only prompt for Agentify maintainers. Not for end users.**

---

## Instructions for Agent

Evaluate how well Agentify deployment worked in the current project.

Deployment includes:
- Baseline setup via `.agentify/setup.prompt.md`
- Optional KB enrichment via `.agentify/questionnaires/kb-builder.md`
- Optional KB auto-scan via `.agentify/bootstrap-prompts/repo-scan.prompt.md`

Use evidence from files. Do not guess. Mark unknowns as `TBD`.

---

## Step 1: Collect Evidence

Inspect the project and mark each item as `Present`, `Missing`, or `TBD`.
Record this as an explicit table in the report (`Evidence Status` section). Do not leave item status implicit in prose.

### Baseline setup outputs (required)

- `AGENTS.md`
- `docs/` folder
- `docs/README.md`
- Skills/workflows folders (tool-specific)
- Tool config (`.github/copilot-instructions.md`, `.cursorrules`, `CLAUDE.md`, or equivalent)

### Optional extension outputs (only if those flows were run)

- KB files in `docs/`:
  - `project_context.md`
  - `glossary.md`
  - `domain.md`
  - `architecture.md`
  - `constraints.md`
- Repo-scan drafts in `temp/kb-drafts/`
- `AGENTS.md` `Project-Specific Rules` updated from starter block (if approved)

Interpretation rules:
- Missing KB files are **not** a setup failure by themselves.
- If project-specific rules were updated, verify they are concrete and plausibly sourced from KB/answers.
- If approval evidence is unavailable, mark as `TBD`, do not invent.
- If it is unclear whether an optional flow was run, mark related optional items as `TBD` and explain briefly.

If `AGENTS.md` is missing, stop and report a critical failure.

---

## Step 2: Score the Result

Score each dimension from `0` (failed) to `5` (strong), with evidence.

1. Setup deployment completeness
2. Core rule quality (concise, universal, tool-agnostic)
3. Safety coverage (honesty, stop-the-line, verification, security, pattern discovery)
4. User control (editable output, no regen dependency, approval gating for project-specific rules)
5. Extension flow integrity (`kb-builder`/`repo-scan` create-or-update behavior)
6. Documentation consistency (prompts and docs agree on expected flow)

Confidence calibration:
- `High`: Baseline required outputs verified with file evidence, and no unresolved `TBD` materially affects scores.
- `Medium`: Baseline required outputs verified, but unresolved `TBD` remains (for approvals or optional flows), or some scores rely on inference.
- `Low`: Missing critical evidence, or multiple unresolved `TBD` items materially affect scoring confidence.
- If approval evidence for project-specific rules is `TBD`, do not score `User control` above `4` unless an equivalent approval gate is explicitly documented and verified in files.

---

## Step 3: Strengths and Weaknesses

### Strengths

List concrete strengths with file evidence.

### Weaknesses

List concrete weaknesses. For each weakness include:

- Impact
- Likely root cause
- Minimal fix
- Backward compatibility risk (`Low` / `Medium` / `High`)

If fewer than 3 weaknesses are found, write: `No additional material weaknesses found.`

---

## Step 4: Improvement Backlog

Create a prioritized backlog (max 5 items).

For each item include:

- Priority (`P1` / `P2` / `P3`)
- Change location (for example: `framework/AGENTS.template.md`, `framework/setup.prompt.md`, docs, templates)
- Effort (`S` / `M` / `L`)
- Expected impact

Prefer minimal, additive changes.
Do not move technology-specific rules into core.

---

## Step 5: Save Report to File

Create `temp/` if it doesn't exist.

Save the full evaluation report (from "Output Format") to a markdown file in `temp/`:
- Preferred filename: `temp/agentify-framework-eval-YYYY-MM-DD.md`
- If that file already exists, use: `temp/agentify-framework-eval-YYYY-MM-DD-HHMMSS.md`
- The filename must start with `agentify`

Do not skip file creation. The evaluation is complete only after the markdown file is written.

---

## Output Format

```markdown
# Agentify Post-Deployment Evaluation

## Verdict
- Overall: Strong / Medium / Weak
- Confidence: High / Medium / Low

## Evidence Status (Step 1)
| Item | Status (Present/Missing/TBD) | Evidence |
|------|-------------------------------|----------|
| AGENTS.md | X | [file/path + note] |
| docs/ folder | X | [file/path + note] |
| docs/README.md | X | [file/path + note] |
| Skills/workflows folders | X | [file/path + note] |
| Tool config file | X | [file/path + note] |
| docs/project_context.md (optional) | X | [file/path + note or TBD] |
| docs/glossary.md (optional) | X | [file/path + note or TBD] |
| docs/domain.md (optional) | X | [file/path + note or TBD] |
| docs/architecture.md (optional) | X | [file/path + note or TBD] |
| docs/constraints.md (optional) | X | [file/path + note or TBD] |
| temp/kb-drafts/ (optional) | X | [file/path + note or TBD] |
| AGENTS.md Project-Specific Rules updated from starter block (optional) | X | [file/path + note or TBD] |

## Scorecard
| Dimension | Score (0-5) | Evidence |
|-----------|-------------|----------|
| Setup deployment completeness | X | [file/path + note] |
| Core rule quality | X | [file/path + note] |
| Safety coverage | X | [file/path + note] |
| User control | X | [file/path + note] |
| Extension flow integrity | X | [file/path + note] |
| Documentation consistency | X | [file/path + note] |

## Strengths
1. ...
2. ...
3. ...

## Weaknesses
1. ...
   - Impact:
   - Root cause:
   - Minimal fix:
   - BC risk:

## Prioritized Backlog
1. [P1] [change] - Location: [path], Effort: [S/M/L], Impact: [...]
2. [P2] [change] - Location: [path], Effort: [S/M/L], Impact: [...]

## Open Questions / TBD
- ...
```

After writing the file, return a short completion note with:
- Saved file path
- Overall verdict

