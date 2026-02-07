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

Create draft files in `temp/kb-drafts/`:

### glossary.draft.md

```markdown
# Glossary (Draft)

## Confirmed Terms
| Term | Definition | Source |
|------|------------|--------|
| [found term] | [inferred meaning] | [file where found] |

## TBD Terms (Need Clarification)
| Term | Context | Question |
|------|---------|----------|
| [unclear term] | [where seen] | [what to ask] |
```

### architecture.draft.md

```markdown
# Architecture (Draft)

## Overview
[inferred from README/structure, or TBD]

## Components (from directory structure)
- [folder] — [inferred purpose]

## External Dependencies (from config)
- [dependency] — [purpose if clear, else TBD]

## TBD
- [list what couldn't be determined]
```

### constraints.draft.md

```markdown
# Constraints (Draft)

## Apparent Constraints
| Constraint | Evidence | Confidence |
|------------|----------|------------|
| [inferred rule] | [where found] | High/Medium/Low |

## TBD
- [constraints that likely exist but couldn't confirm]
```

---

## Step 4: Summary

```markdown
# Repo Scan Summary

**Scanned**: [repo name]
**Date**: [date]

## Files Created
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
3. Copy approved content to `docs/`
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
