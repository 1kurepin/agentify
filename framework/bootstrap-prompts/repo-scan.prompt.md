# Repo Scan: Auto-Generate KB Drafts

**Scan repository and generate Knowledge Base drafts.**

---

## Instructions for Agent

Scan the repository to auto-generate KB content. Follow strict "don't guess" policy.

---

## Step 1: Scan Repository

Analyze:
- Root directory structure
- Source code organization
- Existing documentation (README, docs/)
- Configuration files (package.json, .csproj, etc.)
- CI/CD setup

---

## Step 2: Extract Information

### Technologies (from config files)

Look for:
- package.json → Node.js dependencies
- .csproj → .NET dependencies
- requirements.txt → Python dependencies
- go.mod → Go dependencies

### Domain Terms (from code and docs)

Extract:
- Variable/class names that look domain-specific
- Comments explaining business concepts
- README content about the project

### Architecture (from structure)

Identify:
- Main components (from folder structure)
- External integrations (from imports/config)
- Data stores (from connection configs)

### Constraints (from tests, docs, code patterns)

Look for:
- Validation patterns
- Error handling approaches
- Security patterns

---

## Step 3: Generate Drafts

Create `temp/kb-drafts/` if it doesn't exist.

Use templates from `.agentify/templates/kb-drafts/` to generate draft files:

| Template | Output |
|----------|--------|
| `project_context.draft.template.md` | `temp/kb-drafts/project_context.draft.md` |
| `domain.draft.template.md` | `temp/kb-drafts/domain.draft.md` |
| `glossary.draft.template.md` | `temp/kb-drafts/glossary.draft.md` |
| `architecture.draft.template.md` | `temp/kb-drafts/architecture.draft.md` |
| `constraints.draft.template.md` | `temp/kb-drafts/constraints.draft.md` |

When filling templates:
- Keep `TBD` when evidence is insufficient
- Include evidence/source paths for non-trivial claims
- Keep `(Draft)` in document titles

---

## Step 4: Summary

```markdown
# Repo Scan Summary

**Scanned**: [repo name]
**Date**: [date]

## Files Created
- temp/kb-drafts/project_context.draft.md
- temp/kb-drafts/domain.draft.md
- temp/kb-drafts/glossary.draft.md
- temp/kb-drafts/architecture.draft.md
- temp/kb-drafts/constraints.draft.md

## Confidence
- Technologies: High (from config files)
- Architecture: Medium (from structure)
- Constraints: Low (need user verification)

## TBD Questions
[list questions user needs to answer]

## Next Steps
1. Review draft files
2. Answer TBD questions
3. Create or update `docs/` with approved content
```

**Wait for user approval before proceeding to Step 5.**

---

## Step 5: Apply Approved KB (After User Approval)

When user approves the KB drafts:

### 5.1 Create or Update Files in docs/

For each approved draft from `temp/kb-drafts/`, create or update matching file in `docs/`:
- Remove `(Draft)` from titles
- Remove `.draft` from filenames
- Example: `glossary.draft.md` → `docs/glossary.md`
- If target file doesn't exist, create it
- If target file exists, update relevant sections with approved information (don't duplicate sections)

### 5.2 Update docs/README.md

Replace placeholder content with actual file list:

```markdown
# Knowledge Base

Project documentation for AI agents.

## Available Files

- [project_context.md](project_context.md) — Project overview (start here)
- [glossary.md](glossary.md) — Project terminology
- [domain.md](domain.md) — Business entities and rules
- [architecture.md](architecture.md) — System structure
- [constraints.md](constraints.md) — Critical project rules

## Maintenance

These files were auto-generated from repository scan and then approved. Update them as the project evolves to keep agent context accurate.
```

### 5.3 Update AGENTS.md Knowledge Base Section

Find the `### Knowledge Base` section in `AGENTS.md` and update it to reflect the populated KB:

**Before** (placeholder):
```markdown
### Knowledge Base

Project-specific knowledge in `./docs`:
- `project_context.md` — Project overview (read first)
- `glossary.md` — Project terminology
...
```

**After** (populated):
```markdown
### Knowledge Base

**READ THESE FILES** before working on unfamiliar code or domain concepts.

Project-specific knowledge in `./docs`:
- `project_context.md` — **Start here**: Business model, use cases, tech stack
- `glossary.md` — Domain terminology
- `domain.md` — Core entities, relationships, business rules
- `architecture.md` — System components, integrations, infrastructure
- `constraints.md` — Technical and business constraints (must follow)
```

### 5.4 Suggest Project-Specific Rules for AGENTS.md

Generate up to 3 candidate project-specific rules from approved KB content:
- `docs/constraints.md` (critical rules/invariants)
- `docs/domain.md` (business rules)
- `docs/project_context.md` (scope boundaries)

Do not invent. If no strong candidates exist, skip this step.

Ask user:
```markdown
Suggested project-specific rules:
1. ...
2. ...

Apply these to AGENTS.md? (yes / edit / no)
```

- `yes` → update `AGENTS.md` section `### Project-Specific Rules`
- `edit` → apply user-edited list
- `no` → leave rules section unchanged

### 5.5 Report Completion

```markdown
## ✅ Knowledge Base Updated

**Created/updated in docs/:**
- [list files created or updated]

**Updated:**
- docs/README.md — Index of KB files
- AGENTS.md — KB section now references populated files
- AGENTS.md — Project-Specific Rules (if approved)

**Draft files remain in** `temp/kb-drafts/` for reference.

Your AI agent now has comprehensive context about the project.
```

---

## Honesty Policy

**NEVER**:
- Invent facts not found in the repo
- Assume domain knowledge not documented
- Guess at business rules
- Present assumptions as facts

**ALWAYS**:
- Mark unknowns as `TBD`
- Cite evidence for claims
- Note confidence levels
- Ask questions for clarification
