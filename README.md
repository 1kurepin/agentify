# Agentify

**Foundation for AI-assisted development.**

One-time setup. Safe defaults. Room to grow. Tool-agnostic.

---

## The Problem

AI coding agents (Copilot, Cursor, Aider, Claude) work better with context. But most projects have:
- No agent instructions
- Scattered documentation
- No consistent rules

Result: Agents invent facts, break things, ignore patterns.

## The Solution

Agentify builds a **foundation** for your project — a layered structure that works immediately and grows with your needs:

```
┌─────────────────────────────────────────────┐
│  Layer 3: Skills & Workflows (optional)   │  ← Deep customization
├─────────────────────────────────────────────┤
│  Layer 2: Knowledge Base (optional)       │  ← Project context
├─────────────────────────────────────────────┤
│  Layer 1: AGENTS.md (always)              │  ← Safe defaults
└─────────────────────────────────────────────┘
         ↑ Foundation you build on
```

| Layer | What You Get | When to Add |
|-------|--------------|-------------|
| **Layer 1** | Universal rules: don't invent, stop on risky changes, follow patterns | Quick setup |
| **Layer 2** | Project context: glossary, architecture, constraints | When agent lacks domain knowledge |
| **Layer 3** | Specialized expertise: code style, review process, domain skills | When you want advanced behaviors |

One prompt to install. Works with any AI tool.

---

## Who Is This For?

| You are... | What you get |
|------------|-------------|
| **New to AI agents** | Safe starting point with proven defaults. No need to figure out what rules to write. |
| **Team standardizing agent usage** | Consistent foundation across projects. Everyone gets the same safe behaviors. |
| **Experienced user** | Solid base to build on. Skip the basics, focus on advanced customization. |

---

## Before & After

**Without Agentify** — You ask agent to add a feature:

```
You: "Add user preferences endpoint"

Agent: *Invents a database schema you don't use*
       *Creates new patterns instead of copying existing ones*
       *Doesn't mention it's unsure about your auth approach*
       *Breaks API compatibility without warning*
```

**With Agentify** — Same request, different behavior:

```
You: "Add user preferences endpoint"

Agent: *Finds existing endpoint patterns and copies them*
       *Asks: "I see two auth approaches in the codebase. Which should I use?"*
       *Marks assumptions as TBD for your review*
       *Warns: "This would change the API response format. Confirm?"*
```

The difference: **safe defaults** that prevent common agent mistakes.

---

## Quick Start

### Option A: Agent-driven setup (recommended)

**1. Copy framework to your project:**
```bash
git clone https://github.com/1kurepin/agentify.git
cp -r agentify/framework your-project/.agentify
rm -rf agentify
```

**2. Run setup prompt:**
```
Run .agentify/setup.prompt.md
```

**3. Answer 4 questions** (project name, description, main constraint, AI tool)

### Option B: Manual setup (if agent fails)

**1. Copy framework** (same as above)

**2. Copy and edit template:**
```bash
cp .agentify/AGENTS.template.md AGENTS.md
```

**3. Replace placeholders in AGENTS.md:**
- `{{PROJECT_NAME}}` → Your project name
- `{{PROJECT_DESCRIPTION}}` → One-sentence description
- `{{MAIN_CONSTRAINT}}` → What should never be broken

**4. Create folders:** `docs/`, and skills/prompts folder for your tool

**5. Add tool config** (see [Supported Tools](#supported-tools) for your tool's config file)

---

## What Gets Created

```
your-project/
├── AGENTS.md              ← Agent reads this first
├── docs/                  ← Project knowledge base
├── .github/               ← Skills & Workflows (path varies by tool)
│   ├── skills/            │  Copilot: .github/
│   └── prompts/           │  Cursor: .cursor/
└── .agentify/             │  Claude: .claude/
                           ← Framework source (don't modify)
```

**Skills vs Workflows:**
- **Skills** = knowledge the agent should have ("When writing APIs, follow these conventions")
- **Workflows** = step-by-step procedures ("To review code, do steps 1, 2, 3")

---

## Core Rules

Every agentified project gets these defaults:

| Rule | What It Does |
|------|--------------|
| **Honesty** | Don't invent facts; mark unknowns as `TBD` |
| **Stop-the-line** | Pause on breaking/risky changes, get approval |
| **Change safety** | Additive changes over breaking changes |
| **Verification** | Check, don't assume; validate before claiming done |
| **Security hygiene** | No secrets in code or logs |
| **Pattern discovery** | Find existing patterns before writing new code |

**→ [See the actual rules](framework/AGENTS.template.md)**

<details>
<summary><strong>Example: Stop-the-line rule (click to expand)</strong></summary>

```markdown
### Stop-the-Line — Pause on Risky Changes

**When a change involves:**
- Breaking existing interfaces or contracts
- Irreversible actions (data deletion, large refactors)
- Security implications
- Unclear requirements

**STOP. Do NOT proceed automatically. Instead:**
1. Present options with trade-offs
2. Explain risks
3. Wait for explicit confirmation of the specific action

Vague approval ("just do it") is not enough. 
Confirmation must reference the actual change.
```

This is one of 6 core rules. [See full template](framework/AGENTS.template.md) for all rules.

</details>

---

## Optional: Go Deeper

After basic setup, optionally build more context:

### Build Knowledge Base

```
Run .agentify/questionnaires/kb-builder.md
```

Creates glossary, architecture overview, constraints documentation.

### Create Custom Skills

```
Run .agentify/questionnaires/skills-builder.md
```

Teach your agent project-specific expertise (code style, domain knowledge).

### Auto-scan Repository

```
Run .agentify/bootstrap-prompts/repo-scan.prompt.md
```

Agent analyzes your repo and generates KB drafts automatically.

---

## Supported Tools

| Tool | Config Created |
|------|----------------|
| GitHub Copilot | `.github/copilot-instructions.md` |
| Cursor | `.cursorrules` |
| Aider | Instructions for `--read` flag |
| Claude Code | `CLAUDE.md` |
| Other | Generic `AGENTS.md` pointer |

---

## Philosophy

### Safe Defaults

AI agents default to "helpful but unsafe." Agentify flips that:

| Agent Default | Agentify Default |
|---------------|------------------|
| Invent facts to seem helpful | Admit uncertainty, use `TBD` |
| Proceed with risky changes | Stop and ask for approval |
| Write new patterns | Copy existing patterns first |

This isn't about being restrictive — it's about **accuracy over assumption**.

### Foundation for Growth

**Day 1**: Setup creates `AGENTS.md` with safe defaults. Agent works better immediately.

**Week 2**: You notice agent doesn't understand your domain terms. Add `docs/glossary.md`.

**Month 2**: You want consistent code reviews. Create a code-review workflow.

**Month 6**: You have 5 skills, 3 workflows, full KB. Agent knows your project deeply.

This is the growth path. Start with Layer 1, add layers when you need them.

### Edit Directly

Agentify generates files, then gets out of the way. Edit `AGENTS.md` directly. No regeneration, no manifest, no sync issues.

---

## Documentation

- [Getting Started](docs/getting-started.md) — Detailed installation guide
- [Customization](docs/customization.md) — How to extend and modify
- [Philosophy](docs/philosophy.md) — Design decisions explained
- [FAQ](docs/faq.md) — Common questions

---

## Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

---

## License

MIT — Use freely, attribution appreciated.
