# Agent Instructions for Agentify

**Rules for AI agents working on this repository.**

---

## Project Context

**What this is**: A framework that makes any project AI-agent-ready by providing universal rules, knowledge base structure, and extensibility through skills and workflows.

**Main constraint**: Don't break backward compatibility of framework output.

---

## Quick Reference

| When You're... | Rule |
|----------------|------|
| Changing framework output | Verify it stays short, universal, tool-agnostic |
| Adding examples | Use `{{PLACEHOLDER}}` for project-specific values |
| Adding features | Consider: does this add complexity? Is it worth it? |
| Unsure about something | Mark as `TBD`, don't invent |

---

## Core Rules

### 1. Universal Over Specific

Framework must work for **any** project — web, mobile, backend, data science, embedded, etc.

**Don't:**
- Add technology-specific rules to core
- Assume specific tech stack
- Reference specific tools as mandatory

**Do:**
- Keep core rules language/framework agnostic
- Put technology-specific guidance in Skills templates
- Use generic examples

### 2. Foundation First

Core stays short and focused. The shorter the rules, the less chance agent forgets them mid-task. Complexity goes in extension layers.

**Don't:**
- Add rules that apply to <80% of projects to core
- Increase core complexity without clear value

**Do:**
- Question every core addition
- Put specialized guidance in Skills/Workflows templates
- Keep core foundation solid, extensions rich

### 3. No Project Leakage

Framework files must contain zero project-specific content.

**Scan before commit:**
```bash
# Should return nothing
grep -r "specific-project-name\|internal-url\|company-name" framework/
```

### 4. Editable Output

Users edit `AGENTS.md` directly after generation. They own it completely.

**Don't:**
- Add features requiring re-running setup
- Create dependencies between generated files
- Add configuration or lock files

---

## File Ownership

| Path | Purpose | Edit Carefully |
|------|---------|----------------|
| `framework/AGENTS.template.md` | Core template | Changes affect all users |
| `framework/setup.prompt.md` | Installation prompt | Must stay simple |
| `framework/templates/` | Optional templates | Quality over quantity |
| `docs/` | Documentation | Keep accurate |

---

## Quality Gates

Before merging changes:

- [ ] Framework output stays short (resist adding lines)
- [ ] No project-specific content leaked
- [ ] Works with all supported tools
- [ ] Documentation updated
- [ ] Examples use placeholders

---

## Response Format

For code-changing responses:

```
Changes: [summary]
⚠️ Attention: [only if breaking changes or questions]
```
