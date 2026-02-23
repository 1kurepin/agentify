---
title: Agentify Design Philosophy
description: Understand the principles behind Agentify including safe defaults, layered growth, and tool-agnostic guidance.
permalink: /philosophy/
---

# Design Philosophy

Why Agentify works the way it does.

---

## The Problem

AI coding agents are helpful but unsafe by default:

| Behavior | Why It's Problematic |
|----------|---------------------|
| Invent facts to seem helpful | Wrong information causes bugs |
| Proceed with risky changes | Breaking changes reach production |
| Ignore existing patterns | Codebase becomes inconsistent |
| Don't admit uncertainty | Mistakes get buried |

These aren't bugs — they're reasonable defaults for general helpfulness. But coding requires precision.

---

## Where Do These Rules Come From?

Agentify's rules weren't invented in a vacuum. They're the result of:

1. **Research** — Studying how AI agents behave, common failure patterns, and documented best practices from multiple sources
2. **Pattern analysis** — Identifying what makes agents fail (inventing facts, breaking contracts, ignoring patterns) and writing rules that address each failure mode
3. **Iterative refinement** — Testing rules in real projects, observing what works, strengthening effective patterns, fixing gaps when agents still misbehave

The rules evolve. When we see agents fail in new ways, we update the defaults. When rules prove unnecessary, we remove them.

---

## Core Principles

### 1. Safe Defaults

**Shift the agent toward caution:**

| Default Behavior | Agentify Behavior |
|------------------|---------------------|
| Be helpful at all costs | Be accurate, even if less helpful |
| Assume you know | Admit when you don't know |
| Proceed quickly | Pause when uncertain |
| Write new code | Copy existing patterns |
| Act autonomously | Get human approval first |

Most core rules are constraints — don't invent facts, don't proceed on risky changes, don't break interfaces, don't leak secrets. This is intentional. Agents default to action; these rules add a bias toward **accuracy and caution** where it matters most.

**Why**: In coding, wrong-but-confident is worse than uncertain-but-honest. The cost of undoing agent mistakes often exceeds the cost of slowing agents down.

**Tradeoff**: Agents under these rules trade some speed for reliability. Teams with mature agent workflows should loosen the defaults to match their confidence level — the framework expects you to.

### 2. Foundation First

**Start with a working foundation, then build on it.**

The framework gives you safety rules that work immediately, plus an organizational structure for everything project-specific: Knowledge Base, Skills, and Workflows. Templates and questionnaires help you fill these in.

**What ships ready to use:**
- Safety rules that improve agent behavior from day one
- A code quality skill and code review workflow
- Organizational structure (KB, Skills, Workflows)
- Templates and questionnaires to build project-specific content

**What you build over time:**
- Project-specific rules for your codebase
- Knowledge Base entries with domain content
- Skills tailored to your stack and conventions

**Why**: A universal framework can't ship your project's specifics. Instead, it gives you a structure that makes building them straightforward. The more you invest in Layers 2 and 3, the more useful your agents become.

### 3. Universal and Tool-Agnostic

Rules must work for any language, project size, domain, team, and AI tool — including but not limited to GitHub Copilot, Claude Code, Codex, Cursor, Windsurf, and future tools.

**What this means:**
- No technology assumptions in core rules — works with any stack
- No AI tool assumptions in core rules — works with any agent
- Technology-specific guidance goes in Skills
- Tool-specific config is generated during setup, not baked into rules

**Tradeoff**: Universal rules are necessarily general. The core says "follow existing patterns" — your Skill says "we use Repository pattern for data access." The core provides the discipline; Skills and KB provide the specifics. Both matter.

**Why**: Tools evolve. Languages change. Your foundation should outlast any single tool or tech stack. Project-specific guidance goes in layers that are easy to update.

### 4. Layers Enable Growth

Agentify builds a **layered foundation**. Start with Layer 1, add more when needed:

```
┌─────────────────────────────────────────────────┐
│  Layer 3: Skills & Workflows (optional)         │  ← Specialized expertise
│           Code style, review process, domains   │
├─────────────────────────────────────────────────┤
│  Layer 2: Knowledge Base (optional)             │  ← Project context
│           Glossary, architecture, constraints   │
├─────────────────────────────────────────────────┤
│  Layer 1: AGENTS.md (always)                    │  ← Safe defaults
│           Universal rules every project needs   │
└─────────────────────────────────────────────────┘
              ↑ Foundation you build on
```

**Growth path**:
- **Day 1**: Layer 1 works immediately after setup
- **When agent lacks context**: Add Layer 2 (KB entries)
- **When you want advanced behaviors**: Add Layer 3 (Skills/Workflows)

Each layer builds on previous ones:
- Layer 1 works alone — safety rules and a usable starting point
- Layer 2 uses Layer 1 rules + adds project context — agents start understanding your domain
- Layer 3 uses both + adds specialized expertise — agents follow your team's specific practices

**Why**: Different projects need different depth. Layer 1 gives you safety immediately. Layers 2 and 3 are where agents start feeling like they understand your project.

### 5. Edit Directly

After setup:
- `AGENTS.md` is yours
- Edit it like any file
- Own it completely

**What we avoid:**
- Config files that generate other files
- Version locks
- Dependency between generated files

**Why**: Ownership and control. Edit → save → done. No regeneration, no sync.

---

## Design Decisions

### Why Keep It Concise?

Shorter rules mean agents are more likely to follow them, context windows stay open for real work, and developers actually read the file.

- **Agents get lost in long docs** — The longer the rules, the higher chance agent forgets something mid-task
- **Context window matters** — Shorter rules = more room for actual work
- **Earns its place** — Every line must apply to 80%+ of projects. Edge cases go in Skills.

The generated AGENTS.md includes both safety rules and working-style guidance (~300 lines total). This is a tension: we value brevity but also include process guidance that many teams find useful. Teams should trim sections that don't match their workflow — the framework is designed to be edited.

**Principle**: Every line should earn its place. If it doesn't apply to your project, remove it.

### Why Not Just a Template?

Template alone isn't enough:
- No guidance on what to fill in
- No structure for extensions
- No tool-specific setup

Framework = template + setup automation + extension points.

### Why Include Default Skill and Workflow?

Every project benefits from:
- Code quality guidelines (skill)
- Code review process (workflow)

Starting with useful defaults > starting empty.

---

## Anti-Patterns We Avoid

### Over-Engineering

```
❌ Complex build chains with multiple intermediate files
✅ AGENTS.md (edit directly)
```

### Feature Creep

```
❌ "Let's add support for X, Y, Z edge cases"
✅ "Does 80% of projects need this?"
```

### Premature Abstraction

```
❌ "Let's create a plugin system for rules"
✅ "Edit the file directly"
```

### Helpful-But-Wrong

```
❌ Agent invents plausible-sounding fact
✅ Agent says "I don't know, marking as TBD"
```

---

## Trade-offs We Accept

| We Choose... | Over... | Because... |
|---|---|---|
| Safe defaults | Maximum agent speed | Undoing agent mistakes costs more than slowing agents down |
| Direct editing only | Config generation, sync files | Simplicity and real ownership |
| Manual KB building | Auto-generated context | No magic, no surprises, higher quality |
| Direct setup presets for core tools | Unlimited tool configs | Simple configuration that covers most users |
| Universal core rules | Stack-specific core rules | Foundation should outlast any tool or language |
| Guidance over enforcement | Hard gates on agent behavior | No enforcement mechanism works across all AI tools today. Rules-as-guidance is the most portable approach — and it works well enough that agents measurably improve. Not perfect, but practical. |

---

## Evolution

Agentify will evolve. These commitments are stable:

1. Safe defaults > unconstrained agents
2. Universal core, specificity in Skills and KB
3. Direct editing > generated files
4. Layered growth > monolithic complexity
5. Honest about tradeoffs

Areas we're actively improving:
- Making the core template leaner without losing safety
- Exploring lightweight self-verification as a complement to guidance
- Shipping richer default Skills and Workflows

New features must pass: "Does this make agents meaningfully better for most projects?"
