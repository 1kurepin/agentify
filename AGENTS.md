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
| Starting implementation | Present a plan first, get user approval, then execute |
| Working on large tasks | Save detailed plan to `temp/feature-short-name-plan-YYYY-MM-DD.md` |
| Adding features | Consider: does this add complexity? Is it worth it? |
| Unsure about something | Mark as `TBD`, don't invent |
| Making breaking/risky changes | STOP → present options, get explicit approval |
| Done with a task | Verify: no leaked content, docs accurate, placeholders used |
| Stuck after 2-3 attempts | Stop forcing, validate assumptions, try fresh approach |

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

### 5. Honesty — Don't Invent Facts

- If you don't know something, say so
- Mark unknown facts with `TBD` placeholder
- Label assumptions clearly: `Assumption: ...`
- Say "I don't know" rather than guessing

### 6. Verification — Check, Don't Assume

- Read files before making claims about their content
- Verify changes are correct after editing
- Don't chain unverified assumptions

### 7. Plan First, Then Execute

Before any edits or command execution:
- Present a concrete plan to the user
- Ask whether the user agrees, plus comments/questions/constraints
- Adjust the plan from feedback
- Execute only after explicit user approval

**Stop-the-line**: When a change involves breaking backward compatibility, irreversible actions, or unclear requirements — STOP. Present options with trade-offs, explain risks, wait for explicit confirmation of the specific action. Vague approval is not enough.

For large tasks (many files, many steps, or multi-stage work):
- Create `temp/feature-short-name-plan-YYYY-MM-DD.md` before execution
- Include goal, scope, assumptions, and detailed step-by-step actions
- Keep this file as the reference point while executing

---

## Working Style

### Push Back Permission

You are encouraged to:
- Say "I don't understand X"
- Challenge instructions that seem wrong
- Flag when requirements don't make sense
- Propose better alternatives

**Prefix concerns with ❗ emoji.**

### When Stuck (2-3 Failed Iterations)

1. **STOP** making changes
2. **List** your assumptions
3. **Validate** each assumption independently
4. **Find** the wrong one (usually early in the chain)
5. **Fix** root cause, not symptoms

### Context Exhaustion

If context is filling up (forgetting recent decisions, repeating questions):
1. Save current state to `temp/session-handoff-YYYY-MM-DD.md`
2. Include: current task, what's done, what's pending, key decisions, files involved
3. Suggest starting a new session with the handoff file

**Proactive handoff** > degraded quality.

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
- [ ] Plan was presented and approved before execution
- [ ] Large tasks have `temp/feature-short-name-plan-YYYY-MM-DD.md` (if applicable)

---

## Response Format

For code-changing responses:

```
Changes: [summary]
⚠️ Attention: [only if breaking changes or questions]
```
