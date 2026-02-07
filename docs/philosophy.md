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

**Flip the agent's priorities:**

| Default Behavior | Safe Behavior |
|------------------|---------------------|
| Be helpful at all costs | Be accurate, even if less helpful |
| Assume you know | Admit when you don't know |
| Proceed quickly | Pause when uncertain |
| Write new code | Copy existing patterns |

This isn't about being restrictive — it's about **accuracy over assumption**.

**Why**: In coding, wrong-but-confident is worse than uncertain-but-honest.

### 2. Foundation First

**Start with essentials, extend as needed.**

Core rules cover what 80%+ of projects need. More specialized guidance goes in Skills and Workflows.

**What stays in core:**
- Universal rules that apply everywhere
- Safe defaults every project benefits from

**What goes in extension layers:**
- Technology-specific guidance (Skills)
- Domain-specific expertise (Skills)
- Project-specific workflows (Workflows)

**Why**: Good foundations enable growth. Complex agent systems are fine — they just need the right layers.

### 3. Universal and Tool-Agnostic

Rules must work for:
- Any programming language
- Any project size
- Any domain (web, mobile, embedded, ML, etc.)
- Any team size
- **Any AI tool** (Copilot, Cursor, Aider, Claude, or future tools)

**What this means:**
- No technology assumptions in core rules — works with any stack
- No AI tool assumptions in core rules — works with any agent
- Technology-specific guidance goes in Skills
- Tool-specific config is generated during setup, not baked into rules

**Why**: Tools evolve. Languages change. Your foundation should outlast any single tool or tech stack.

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
- Layer 1 works alone
- Layer 2 uses Layer 1 rules + adds project context
- Layer 3 uses both + adds specialized expertise

**Why**: Different projects need different depth. Foundation enables growth, not limits it.

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

Core AGENTS.md stays **as short as possible**. This isn't arbitrary:

- **Agents get lost in long docs** — The longer the rules, the higher chance agent forgets something mid-task
- **Context window matters** — Shorter rules = more room for actual work
- **Actually readable** — Developers will skim short docs. They won't read walls of text.
- **Earns its place** — Every line must apply to 80%+ of projects. Edge cases go in Skills.

Brevity ensures rules get followed.

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

| We Accept... | In Exchange For... |
|--------------|-------------------|
| Limited tool support (5 tools) | Simple configuration |
| Concise core rules | Rules that get followed |
| No enforcement | Guidance over gates |
| Manual KB building | No magic, no surprises |
| Direct editing only | Simplicity and ownership |

---

## Evolution

Agentify will evolve, but these principles are stable:

1. Safe defaults > "helpful at all costs"
2. Foundation first, complexity in layers
3. Universal core > specific core (specifics go in Skills)
4. Direct editing > generated files
5. Layered growth > monolithic complexity

New features must pass: "Does this strengthen the foundation or belong in an extension layer?"
