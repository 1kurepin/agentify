# Skills & Workflows Builder

**Build custom skills and workflows through questions.**

---

## Instructions for Agent

This questionnaire helps identify and create skills (specialized knowledge) and workflows (repeatable procedures) for the project. Ask questions one section at a time.

---

## Section 1: Common Tasks

Ask user:
```
Let's identify skills and workflows your agent needs.

1. **What tasks do you do most frequently?**
   (e.g., "Add new API endpoint", "Fix failing tests", "Deploy to staging")

2. **Which of these tasks have specific steps that MUST be followed?**
   (candidates for workflows)

3. **Which tasks often go wrong without specific knowledge?**
   (candidates for skills)
```

---

## Section 2: Specialized Knowledge (Skills)

Ask user:
```
Now let's identify specialized knowledge:

1. **What libraries/tools have non-obvious usage patterns?**
   (where "read the docs" isn't enough)

2. **What areas have project-specific conventions?**
   (e.g., "We always use X pattern for Y", "Error handling must do Z")

3. **Where do agents typically make mistakes in your codebase?**
   (areas needing explicit guidance)
```

Based on answers, suggest skills to create:

```markdown
## Suggested Skills

Based on your answers, consider creating:

| Skill | Purpose | Example Path |
|-------|---------|-------------|
| [topic]-patterns | How to use [library/pattern] correctly | `[skills_path]/[topic]-patterns.md` |
| code-style | Project-specific coding conventions | `[skills_path]/code-style.md` |
| [domain]-knowledge | Domain-specific rules and constraints | `[skills_path]/[domain]-knowledge.md` |

**Note**: `[skills_path]` = `.github/skills/` for Copilot, `.cursor/skills/` for Cursor, etc.

Want me to create templates for any of these? (list which ones)
```

---

## Section 3: Repeatable Processes (Workflows)

Ask user:
```
Now let's identify workflows:

1. **What checks happen before code is merged?**
   (review, testing, approval requirements)

2. **What's your deployment process?**
   (steps from "code done" to "in production")

3. **How do you handle common scenarios?**
   - Bug fix process?
   - New feature process?
   - Breaking change process?
   - Security issue process?
```

Based on answers, suggest workflows to create:

```markdown
## Suggested Workflows

Based on your answers, consider creating:

| Workflow | Purpose | Example Path |
|----------|---------|-------------|
| code-review | Steps for code review | `[prompts_path]/code-review.md` |
| deploy | Deployment checklist | `[prompts_path]/deploy.md` |
| bug-fix | Bug fix process | `[prompts_path]/bug-fix.md` |
| breaking-change | Safe breaking change process | `[prompts_path]/breaking-change.md` |

**Note**: `[prompts_path]` = `.github/prompts/` for Copilot, `.cursor/prompts/` for Cursor, etc.

Want me to create templates for any of these? (list which ones)
```

---

## Section 4: Create Files

For each skill user wants, create from template:

```markdown
# Skill: [SKILL_NAME]

**When to load**: [trigger phrase or scenario]

---

## Overview

[What this skill covers]

---

## Rules

1. [Rule 1]
2. [Rule 2]
3. [Rule 3]

---

## Patterns

### Pattern: [Name]

**When**: [scenario]

**Do**:
```
[correct approach]
```

**Don't**:
```
[incorrect approach]
```

---

## Examples

[Real examples from codebase if available]

---

## Common Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| | | |
```

For each workflow user wants, create from template:

```markdown
# Workflow: [WORKFLOW_NAME]

**Trigger**: [when to use this workflow]

---

## Prerequisites

- [ ] [What must be true before starting]

---

## Steps

### Step 1: [Name]

[Description]

- [ ] [Checkbox item]
- [ ] [Checkbox item]

### Step 2: [Name]

[Description]

- [ ] [Checkbox item]

---

## Completion

Before marking done:

- [ ] [Final check 1]
- [ ] [Final check 2]

---

## Notes

[Any additional context]
```

---

## Section 5: Summary

```markdown
## ✅ Skills & Workflows Created

**Skills created:**
- `[skills_path]/[name].md`
- ...

**Workflows created:**
- `[prompts_path]/[name].md`
- ...

**How to use:**
- Skills: Agent loads when topic is mentioned
- Workflows: Run with "Run [prompts_path]/[name].md"

**Next steps:**
- Review and customize created files
- Add examples from your actual codebase
- Test with your agent
```
