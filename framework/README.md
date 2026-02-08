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

Constraints are added later as a list in KB (`docs/constraints.md`) via `.agentify/questionnaires/kb-builder.md`.

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

### Option A: Questionnaire

Run `.agentify/questionnaires/kb-builder.md` — answer questions to create glossary, architecture, constraints.

### Option B: Auto-scan

Run `.agentify/bootstrap-prompts/repo-scan.prompt.md` — agent scans your repo and generates drafts.

### Option C: Skills & Workflows

Run `.agentify/questionnaires/skills-builder.md` — create custom skills (specialized knowledge) and workflows (repeatable processes).

---

## Framework Structure

```
.agentify/
├── README.md              # This file
├── AGENTS.template.md     # Template for generated AGENTS.md
├── setup.prompt.md        # One-prompt installation
├── questionnaires/        # KB building questionnaires
├── bootstrap-prompts/     # Auto-generation prompts
└── templates/             # KB, skills, workflow templates
```

---

## Adding Skills & Workflows

**Skills** — teach agent specific expertise:
1. Copy from `.agentify/templates/skills/`
2. Save to your tool's skills folder (e.g., `.github/skills/` for Copilot, `.cursor/skills/` for Cursor)

**Workflows** — repeatable procedures:
1. Copy from `.agentify/templates/workflows/`
2. Save to your tool's prompts folder (e.g., `.github/prompts/` for Copilot, `.cursor/prompts/` for Cursor)

---

## Customizing Rules

Edit `AGENTS.md` directly. It's your file after setup.

Add project-specific rules in the `Project-Specific Rules` section.

---

## Notes

- `.agentify/` is read-only source — don't modify
- `AGENTS.md` is generated — edit freely after setup
- KB, skills, workflows are optional but improve quality
