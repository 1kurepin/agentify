# Framework Evaluation: Post-Setup Review

**Developer-only prompt for Agentify maintainers. Not for end users.**

---

## Instructions for Agent

Evaluate how well Agentify setup worked in the current project.

Use evidence from files. Do not guess. Mark unknowns as `TBD`.

---

## Step 1: Collect Evidence

Inspect the project for setup outputs:

- `AGENTS.md`
- `docs/` folder (and KB files if created later)
- Skills/workflows folders (tool-specific)
- Tool config (`.github/copilot-instructions.md`, `.cursorrules`, `CLAUDE.md`, or equivalent)

List what exists, what is missing, and what looks inconsistent.

If `AGENTS.md` is missing, stop and report a critical failure.

---

## Step 2: Score the Result

Score each dimension from `0` (failed) to `5` (strong), with evidence.

1. Setup completeness
2. Core rule quality (concise, universal, tool-agnostic)
3. Safety coverage (honesty, stop-the-line, verification, security, pattern discovery)
4. Editability (user can modify directly, no regen dependency)
5. Extension readiness (KB + skills/workflows quality)
6. Clarity (easy for a developer to understand what to do next)

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

## Output Format

```markdown
# Agentify Post-Setup Evaluation

## Verdict
- Overall: Strong / Medium / Weak
- Confidence: High / Medium / Low

## Scorecard
| Dimension | Score (0-5) | Evidence |
|-----------|-------------|----------|
| Setup completeness | X | [file/path + note] |
| Core rule quality | X | [file/path + note] |
| Safety coverage | X | [file/path + note] |
| Editability | X | [file/path + note] |
| Extension readiness | X | [file/path + note] |
| Clarity | X | [file/path + note] |

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

