# KB Builder

**Build your Knowledge Base through questions.**

---

## Instructions for Agent

This questionnaire helps build the Knowledge Base for the project. Ask questions one section at a time, wait for answers, then create or update the corresponding files.

### File Update Policy

For each KB file:
- If file doesn't exist, create it
- If file exists, update sections with new confirmed information
- Don't duplicate headings or append conflicting versions of the same section

---

## Section 1: Project Context

Ask user:
```
Let's build your Knowledge Base. First, the big picture:

1. **What is this project?** (one paragraph: what it does, who uses it)

2. **Tech stack?** (language, framework, database, key libraries)

3. **What this project is NOT?** (scope boundaries, what's handled elsewhere)
```

After answer, create or update `docs/project_context.md`:

```markdown
# Project Context

## What This Is

[from user's paragraph]

## Tech Stack

[from user]

## What This Is NOT

[from user]

## How to Start

- Read `docs/glossary.md` for terminology
- Read `docs/architecture.md` for system overview
- Check `docs/constraints.md` for critical rules
```

---

## Section 2: Glossary

Ask user:
```
Now, terminology:

1. **List 3-5 key domain terms** with brief definitions
   (e.g., "Guest = end user of the app", "Folio = billing account")

2. **Any abbreviations or naming conventions?**
   (e.g., "We use 'svc' suffix for services", "BE = backend, FE = frontend")
```

After answer, create or update `docs/glossary.md`:

```markdown
# Glossary

## Domain Terms

| Term | Definition |
|------|------------|
| [from user answers] | |

## Abbreviations

| Abbreviation | Meaning |
|--------------|---------|
| [from user answers] | |
```

---

## Section 3: Domain

Ask user:
```
Now, business domain:

1. **List main entities/objects** in the system
   (e.g., User, Order, Product — with brief descriptions)

2. **How do they relate?**
   (e.g., "User has many Orders", "Order contains Products")

3. **Any critical business rules?**
   (e.g., "Order total must match sum of items", "User must verify email before ordering")
```

After answer, create or update `docs/domain.md`:

```markdown
# Domain

## Core Entities

| Entity | Description |
|--------|-------------|
| [from user] | |

## Entity Relationships

[from user]

## Business Rules

[from user]
```

---

## Section 4: Architecture

Ask user:
```
Now, architecture:

1. **Describe the system in one paragraph**
   (what it does, who uses it)

2. **List main components/services**
   (the major pieces)

3. **What external services does it talk to?**
   (databases, APIs, third-party services)
```

After answer, create or update `docs/architecture.md`:

```markdown
# Architecture

## Overview

[from user's paragraph]

## Components

[list from user]

## External Dependencies

[list from user]
```

---

## Section 5: Constraints

Ask user:
```
Now, constraints:

1. **What are the top 3 rules that should never be broken?**
   (critical invariants)

2. **What's the most common mistake in this codebase?**
   (helps avoid pitfalls)

3. **Any "we chose X because Y, so always do Z" decisions?**
   (architectural decisions that affect coding)
```

After answer, create or update `docs/constraints.md`:

```markdown
# Constraints

## Critical Rules

1. [from user]
2. [from user]
3. [from user]

## Common Mistakes to Avoid

- [from user]

## Key Decisions

[from user]
```

---

## Section 6: Skills & Workflows (Optional)

Ask user:
```
Want to create skills (specialized knowledge) or workflows (repeatable processes)?

(Type "yes" to continue, or "skip" to finish)
```

If "yes" → run `.agentify/questionnaires/skills-builder.md`

---

## Section 7: Project-Specific Rules (Optional, Final Step)

After prior sections are complete, derive up to 3 candidate rules from confirmed information only:
- Constraints from Section 5
- Business/domain rules from Section 3
- Scope boundaries from Section 1

Do not invent rules. If no strong candidates exist, skip this section.

Ask user:
```
Suggested project-specific rules for AGENTS.md:
1. ...
2. ...

Apply these rules? (yes / edit / no)
```

- `yes` → update `AGENTS.md` section `### Project-Specific Rules` with suggested list
- `edit` → update `AGENTS.md` with user-edited list
- `no` → keep `AGENTS.md` unchanged

---

## Completion

After all sections:

```markdown
## ✅ Knowledge Base Updated

**Files created/updated:**
- `docs/project_context.md` — Project overview
- `docs/glossary.md` — Terminology
- `docs/domain.md` — Business entities and rules
- `docs/architecture.md` — System components
- `docs/constraints.md` — Critical rules

**Optional (if approved):**
- `AGENTS.md` — Project-Specific Rules updated

**Optional next:**
- Add skills to your skills folder
- Add workflows to your prompts folder
- Run repo-scan for auto-generated additions

Your agent now has project context!
```
