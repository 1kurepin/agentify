# Agentify Framework

**Foundation for AI-assisted development.**

One-time setup. Safe defaults. Room to grow. Works with any AI tool.

---

## What This Is

A framework that gives AI coding agents (Copilot, Cursor, Claude, etc.) strong, consistent rules to follow. One prompt to install.

**Core value:**
1. **Strong agent rules** (concise & focused) that work immediately
2. **Automated setup** — one prompt, 3 questions, done
3. **KB/Skills/Workflows** — optional extensions for deeper context

**Philosophy**: Start with a solid foundation, grow as needed. Core rules → KB → Skills → complex agent systems.

---

## Quick Start

### 1. Copy to your project

Copy this `framework/` folder to your repo root as `.agentify/`.

### 2. Run setup

Ask your AI agent:
```
Run .agentify/setup.prompt.md
```

### 3. Answer 3 questions

- Project name?
- One-sentence description?
- Which AI tool? (Copilot/Cursor/Claude/Other)

Start with `.agentify/bootstrap-prompts/repo-scan.prompt.md` to generate KB drafts, then use `.agentify/questionnaires/kb-builder.md` after draft review to refine or complete KB files.

### 4. Done

Agent creates:
- `AGENTS.md` — Universal agent rules (concise & focused)
- `docs/` — Knowledge Base folder
- Skills & Prompts folders — Location depends on your AI tool
- Tool config (Copilot/Cursor/Claude)

---

## What Gets Created

Example structure (paths vary by tool):

```
your-project/
├── AGENTS.md              ← Agent reads this (all tools)
├── docs/                  ← Knowledge Base (all tools)
├── .github/               ← Skills/Workflows (Copilot)
│   ├── skills/            │  Or: .cursor/ (Cursor)
│   └── prompts/           │  Or: .claude/ (Claude)
├── [tool config]          ← .cursorrules, copilot-instructions.md, etc.
└── .agentify/             ← Source (don't modify)
```

---

## Core Rules in AGENTS.md

Every agent gets:

| Rule | What It Does |
|------|--------------|
| Honesty | Don't invent facts; mark unknowns as `TBD` |
| Stop-the-line | Pause on breaking/risky changes |
| Change safety | Additive changes over breaking |
| Verification | Check, don't assume |
| Security hygiene | No secrets in code/logs |
| Pattern discovery | Find existing patterns before writing new code |

---

## Layered Foundation

```
┌─────────────────────────────────────────────────┐
│  Layer 3: Skills & Workflows (optional)         │
├─────────────────────────────────────────────────┤
│  Layer 2: Knowledge Base (optional)             │
├─────────────────────────────────────────────────┤
│  Layer 1: AGENTS.md (always)                    │  ← Setup creates this
└─────────────────────────────────────────────────┘
```

Start with Layer 1. Add more layers as your project needs grow.

---

## Optional: Improve Agent with KB

After setup, optionally build Knowledge Base:

### Option A: Auto-scan (recommended first)

Run `.agentify/bootstrap-prompts/repo-scan.prompt.md` — agent scans your repo, generates drafts, then (after approval) creates/updates KB files and optionally applies project-specific rules to `AGENTS.md`.
Drafts are saved in `temp/kb-drafts/` as review artifacts; keep them for reference and publish to `docs/` only after approval.

### Option B: Questionnaire (after draft review)

Run `.agentify/questionnaires/kb-builder.md` — answer questions to refine or complete KB files and optionally apply project-specific rules to `AGENTS.md`.

### Option C: Skills & Workflows

Run `.agentify/questionnaires/skills-builder.md` — agent reads KB files in `docs/` plus your answers, prepares create-or-update changes from templates, then asks `yes / edit / no` before writing skills (`*.skill.md`) and workflows (`*.prompt.md`).

**Ongoing maintenance default**: after architecture/domain/constraints/contract changes, check KB impact and update affected files in `docs/`.

---

## Framework Structure

```
.agentify/
├── README.md              # This file
├── AGENTS.template.md     # Template for generated AGENTS.md
├── setup.prompt.md        # One-prompt installation
├── questionnaires/        # KB building questionnaires
├── bootstrap-prompts/     # Auto-generation prompts
└── templates/             # KB, KB-draft, skills, workflow templates
```

---

## Adding Skills & Workflows

Use `.agentify/questionnaires/skills-builder.md` for KB-aware create-or-update flow with explicit confirmation (`yes / edit / no`) before writes.

Manual option:

**Skills** — teach agent specific expertise:
1. Copy `.agentify/templates/skills/skill.template.md`
2. Save as `[name].skill.md` in your tool's skills folder (e.g., `.github/skills/` for Copilot, `.cursor/skills/` for Cursor)

**Workflows** — repeatable procedures:
1. Copy `.agentify/templates/workflows/workflow.template.md`
2. Save as `[name].prompt.md` in your tool's prompts folder (e.g., `.github/prompts/` for Copilot, `.cursor/prompts/` for Cursor)

Use `**When to load**` and `**Trigger phrases**` in each skill file.
Use a `**Trigger**: "phrase 1", "phrase 2"` line in each workflow file.
Before default behavior, compare the user request with workflow `**Trigger**` phrases in your prompts folder.
Execution order: general rules in `AGENTS.md` -> workflow trigger check -> matched workflow (if any) -> relevant skills (if relevant).
If instructions conflict, priority is: `AGENTS.md` > workflow > skill.

---

## Customizing Rules

Edit `AGENTS.md` directly. It's your file after setup.

Add project-specific rules in the `Project-Specific Rules` section.

---

## Notes

- `.agentify/` is read-only source — don't modify
- `AGENTS.md` is generated — edit freely after setup
- KB, skills, workflows are optional but improve quality
