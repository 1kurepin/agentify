# Frequently Asked Questions

---

## General

### What is Agentify?

A framework that builds a **foundation** for AI-assisted development in your project:

1. **Layer 1: AGENTS.md** — Universal safe rules (works immediately)
2. **Layer 2: Knowledge Base** — Project context (optional)
3. **Layer 3: Skills & Workflows** — Deep customization (optional)

One-time setup creates the foundation. You build on it over time. Works with any AI coding agent.

### Which AI tools does it support?

Any AI agent that can follow markdown instructions.

Including but not limited to:
- GitHub Copilot
- Claude Code
- Codex
- Cursor
- Windsurf

Setup has direct presets for Copilot, Cursor, and Claude.  
For Codex, Windsurf, and unlisted tools, choose `Other` and point to `AGENTS.md`.

### Do I need to use all features?

No. Core rules work alone. KB, Skills, and Workflows are optional layers.

### Is it free?

Yes. MIT license.

---

## Setup

### How long does setup take?

Quick setup with two options:
- **Agent-driven**: Copy folder, run prompt, answer questions
- **Manual**: Copy template, replace placeholders

Actual time depends on your AI tool and familiarity. Most users are done in a few minutes.

### Can I run setup again?

Yes, but it will overwrite existing files. If you've customized `AGENTS.md`, back it up first.

### What if my AI tool isn't listed?

Choose "Other" — you'll get generic `AGENTS.md` that works with any tool.

### Setup failed. What do I do?

1. Check `.agentify/` folder exists in project root
2. Verify `setup.prompt.md` is readable
3. Try a more explicit prompt: "Read .agentify/setup.prompt.md and execute each step"

---

## Usage

### Agent ignores the rules. Why?

No AI tool today guarantees that instructions will always be followed. Agentify uses guidance (markdown rules) rather than hard enforcement — this is the most portable approach across all AI tools, and it works well in practice. When it doesn't, common causes are:

1. **Tool config missing**: Check that the tool-specific config file exists (it tells the agent to read AGENTS.md)
2. **Context too long**: In long sessions, rules may drop out of the context window
3. **Explicit instruction overrides**: Your prompt may override rules

**What helps:**
- Start with: "Read AGENTS.md first, then [your request]"
- Keep AGENTS.md focused — trim sections you don't use
- For critical rules, reinforce them in your prompt
- Invest in Skills and KB — specific instructions tend to be followed more reliably than general ones

### How do I update rules?

Edit `AGENTS.md` directly. No regeneration needed.

### Can multiple people customize rules?

Yes. `AGENTS.md` is a regular file — use normal git workflows (branches, PRs, reviews).

### Do rules slow down the agent?

Minimally. The compact rules add minimal tokens to context. Modern agents handle this easily.

---

## Knowledge Base

### What should go in the KB?

Things that aren't obvious from code:
- Domain terminology (glossary)
- Architectural decisions (why, not what)
- Constraints and invariants
- Team conventions

### What shouldn't go in the KB?

- Information easily found in code
- Obvious or universal knowledge
- Rapidly changing details

### How detailed should KB be?

Start minimal. Add entries when agent makes mistakes due to missing context.

### KB vs code comments?

| Use KB for... | Use comments for... |
|---------------|---------------------|
| Cross-cutting concerns | Local explanations |
| Domain knowledge | Implementation details |
| Architectural rules | Why this specific code |

---

## Skills & Workflows

### What's the difference?

**Skills**: Knowledge the agent should have (expertise)
- "When writing APIs, follow these conventions"
- Loaded based on task type

**Workflows**: Step-by-step procedures (processes)
- "To review code, do steps 1, 2, 3"
- Triggered by user request

### When should I create a custom skill?

When you find yourself repeatedly correcting the agent about the same topic.

### How many skills/workflows should I have?

Quality over quantity. 3-5 well-crafted skills beat 20 vague ones.

---

## Maintenance

### How often should I update rules?

When you notice patterns:
- Agent makes same mistake repeatedly → Add rule
- Rule never applies → Remove it
- Rule is confusing → Clarify it

### Can I version my rules?

Yes. `AGENTS.md` is a file — commit to git, tag versions, etc.

### What about updates to Agentify itself?

Framework in `.agentify/` can be updated by copying new version. Your customizations in `AGENTS.md` are separate and won't be affected.

---

## Troubleshooting

### Agent creates files in wrong location

Re-run setup and choose the correct AI tool. Different tools expect different paths.

### Generated rules look wrong

Check `AGENTS.template.md` in `.agentify/` folder. If corrupted, re-copy from repository.

### Agent doesn't see my KB files

1. Verify files are in `docs/` folder
2. Check `AGENTS.md` points to correct path
3. Try explicit: "Read docs/glossary.md, then..."

### Context exhaustion warnings

For long sessions:
1. Start new conversation
2. Begin with: "Read AGENTS.md, then continue with [task]"

---

## Philosophy

### Is this a one-time setup or an ongoing framework?

**Both.** Setup is one-time (quick), but the foundation is designed for growth:

- **Day 1**: Run setup, get `AGENTS.md` with safe defaults
- **Over time**: Add KB entries when agent lacks context, create Skills when you want specialized behaviors

Think of it like building a house: foundation goes in once, but you keep adding rooms.

### Do I need to use all three layers?

**No.** Each layer is independent:

- **Layer 1 alone** — Works great. Most projects start here and stay here for weeks.
- **Layer 1 + 2** — Add KB when agent makes mistakes due to missing domain knowledge.
- **Layer 1 + 2 + 3** — Add Skills/Workflows when you want advanced, project-specific behaviors.

Start with Layer 1. Add more when you feel the need, not before.

### Why not just write AGENTS.md myself?

You could! But Agentify gives you:

1. **Research-based defaults** — Rules derived from studying agent behavior patterns, best practices from multiple sources, and iterative refinement based on real usage
2. **Structure for growth** — Not just rules, but a layered architecture for KB, Skills, and Workflows
3. **Tool-specific setup** — Correct config files for Copilot, Cursor, Claude, and `Other` (Codex/Windsurf/etc.)
4. **Templates** — Starting points for Skills and Workflows so you don't start from zero

Writing from scratch means discovering these patterns yourself. Agentify gives you a head start.

### Why safe defaults over "helpful at all costs"?

In coding, wrong-but-confident is worse than uncertain-but-honest. Agents that admit "I don't know" prevent bugs.

### Why keep core rules concise?

Core rules are the foundation — they apply to 80%+ of projects. Project-specific rules go in AGENTS.md's "Project-Specific Rules" section. Deep expertise goes in Skills. This layered approach means you get a solid starting point and can build complexity in the right places.

### Why no enforcement?

Rules are guidance, not gates. Enforcement adds complexity and friction. Trust-but-verify works better.

---

## Contributing

### How can I contribute?

See [CONTRIBUTING.md](../CONTRIBUTING.md). Contributions welcome:
- Bug fixes
- Documentation improvements
- New skill/workflow templates
- Tool support

### My PR was rejected. Why?

Likely reasons:
- Adds complexity without clear value
- Technology-specific (belongs in Skills)
- Makes output significantly longer
- Violates design philosophy

Check [philosophy.md](philosophy.md) before proposing features.
