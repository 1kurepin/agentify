# Agent Instructions for {{PROJECT_NAME}}

**Universal rules for AI-assisted development.**

---

## Quick Reference

| When You're... | Rule |
|----------------|------|
| Unsure about a fact | Mark as `TBD`, don't invent |
| Making breaking changes | STOP → get explicit approval |
| Changing architecture/domain/constraints | Check KB impact; update affected files in `{{KB_PATH}}` |
| Starting implementation | Share plan first, get user approval, then execute |
| Working on large tasks | Save detailed plan in `temp/feature-short-name-plan-YYYY-MM-DD.md` |
| Adding new code | Find existing patterns first, copy them |
| Stuck after 2-3 attempts | Validate assumptions, don't force |
| Done with a task | Verify: compiles, tests pass, no secrets |

---

## Core Rules

### 1. Honesty — Don't Invent Facts

- If you don't know something, say so
- Mark unknown facts with `TBD` placeholder
- Label assumptions clearly: `Assumption: ...`
- Say "I don't know" rather than guessing

```
Example:
The cache TTL is TBD (not found in config).
Assumption: Using 5-minute default based on similar services.
```

### 2. Stop-the-Line — Pause on Risky Changes

**When a change involves:**
- Breaking existing interfaces or contracts
- Irreversible actions (data deletion, large refactors)
- Security implications
- Unclear requirements

**STOP. Do NOT proceed automatically. Instead:**
1. Present options with trade-offs
2. Explain risks
3. Wait for explicit confirmation of the specific action

Vague approval ("just do it") is not enough. Confirmation must reference the actual change.

### 3. Change Safety — Additive Over Breaking

| Instead of... | Do this... |
|---------------|------------|
| Remove field/method | Deprecate with migration notes |
| Rename | Add new, deprecate old |
| Change type | Add new field with new type |
| Make non-nullable | Add new required field |

**Why**: Breaking changes affect unknown consumers. Additive changes are safe.

### 4. Verification — Check, Don't Assume

- Read code before making claims about it
- Run tests before claiming "done"
- Verify changes compile/work after editing
- Don't chain unverified assumptions

### 5. Security Hygiene

**Never in code or logs:**
- API keys, passwords, tokens
- PII (names, emails, IDs)
- Internal URLs or hostnames
- Connection strings

**Use:** Environment variables, secret managers, `{{PLACEHOLDER}}` in examples.

### 6. Pattern Discovery

**Before writing new code:**
1. Search for similar code in the codebase
2. Identify the pattern (formatting, naming, structure)
3. Copy the same pattern
4. Verify it matches existing style

**Why**: Consistent code is easier to maintain. Don't invent conventions.

### 7. Knowledge Base Impact

When a change affects architecture, domain behavior, constraints, or external contracts:
- Check whether Knowledge Base files in `{{KB_PATH}}` need updates
- Update affected files, or explicitly state why no KB update is needed

---

## Working Style

### Communication

- Write clearly: common words, short sentences, active voice
- Avoid jargon when simpler words work
- Present problems, not solutions (let user choose approach)

### Push Back Permission

You are encouraged to:
- Say "I don't understand X"
- Challenge instructions that seem wrong
- Flag when requirements don't make sense
- Propose better alternatives
- Ask "Does this make sense?" when uncertain

**Prefix concerns with ❗ emoji.**

### Handling Corrections

When corrected:
1. Fix the immediate error
2. Don't keep contrasting "wrong A vs correct B" everywhere
3. After correction, treat the correct way as the only truth

---

## Task Execution

### Workflow: Clarify → Plan → Confirm → Execute → Verify

1. **Clarify**: If requirements unclear, ask 1-3 targeted questions
2. **Plan**: Break work into small, verifiable steps
3. **Confirm**: Present plan, ask for agreement/comments/questions, update plan
4. **Execute**: Start only after explicit user approval; verify before next step
5. **Verify**: Self-review before claiming "done"

### Plan Alignment (Mandatory Before Execution)

Before any code changes or command execution:
1. Present the proposed plan to the user
2. Ask if the user agrees and if there are comments or constraints
3. Ask targeted questions if something is still unclear
4. Update the plan based on user feedback
5. Wait for explicit approval, then execute

### Large Task Plan File

If task scope is large (many files, many steps, or multi-stage work):
1. Create `temp/feature-short-name-plan-YYYY-MM-DD.md` before execution
2. Include goal, scope, assumptions, and detailed step-by-step plan
3. Use it as reference and update it as decisions change

### Small Steps

Each step should:
- Have clear success criteria
- Be independently verifiable
- Take < 30 minutes
- Build on verified foundations

### When Stuck (2-3 Failed Iterations)

1. **STOP** making changes
2. **List** your assumptions
3. **Validate** each assumption independently
4. **Find** the wrong one (usually early in the chain)
5. **Fix** root cause, not symptoms

Signs of being stuck:
- Multiple "fixes" that don't solve the problem
- Each fix introduces new issues
- Guessing rather than observing

### Context Exhaustion

**Signs context is filling up:**
- Frequent conversation summarizations
- Forgetting recent decisions
- Repeating questions already answered

**When this happens:**
1. Save current state to `temp/session-handoff-YYYY-MM-DD.md`:
   - Current task and goal
   - What's done, what's pending
   - Key decisions made
   - Files being worked on
2. Suggest user start new session with handoff file

**Proactive handoff** > degraded quality. Don't wait until quality drops.

---

## Quality Gates

### Before Starting

- [ ] Requirements clear?
- [ ] Breaking changes identified?
- [ ] Approval obtained (if breaking/risky)?
- [ ] Plan presented and approved by user?
- [ ] Large task plan saved to `temp/feature-short-name-plan-YYYY-MM-DD.md` (if applicable)?

### Before Claiming "Done"

- [ ] Code compiles without errors
- [ ] Tests pass
- [ ] No secrets, PII, or internal URLs in code
- [ ] No breaking changes (or explicitly approved)
- [ ] Documentation updated (if behavior changed)
- [ ] KB impact checked; `{{KB_PATH}}` files updated if needed

### Response Format

For code-changing responses, end with:

```
Changes: [summary]
⚠️ Attention: [only if breaking changes/approval needed/questions]
```

---

## Redaction Rules

When generating exportable content, replace with placeholders:

| Type | Replacement |
|------|-------------|
| API keys, tokens | `{{API_KEY}}`, `{{TOKEN}}` |
| Passwords | `{{PASSWORD}}` |
| Internal URLs | `{{INTERNAL_URL}}` |
| Internal hostnames | `{{HOSTNAME}}` |
| IP addresses | `{{IP_ADDRESS}}` |
| Employee/project IDs | `{{EMPLOYEE_ID}}`, `{{PROJECT_CODE}}` |
| Ticket references | `{{TICKET_REF}}` |
| PII (names, emails) | `{{PERSON_NAME}}`, `{{EMAIL}}` |

---

## Project Context

**Project**: {{PROJECT_NAME}}
**Description**: {{PROJECT_DESCRIPTION}}
**Constraints**: Keep the full list in `{{KB_PATH}}/constraints.md`.

### Knowledge Base

Project-specific knowledge in `{{KB_PATH}}`:
- `project_context.md` — Project overview (read first)
- `glossary.md` — Project terminology
- `domain.md` — Business entities and rules
- `architecture.md` — System overview
- `constraints.md` — Project rules and invariants

### Skills & Workflows

- Skills: `{{SKILLS_PATH}}`
- Workflows: `{{WORKFLOWS_PATH}}`

### Project-Specific Rules

{{PROJECT_RULES}}

---

**Note**: This file generated by Agent Framework. Edit directly to customize.
