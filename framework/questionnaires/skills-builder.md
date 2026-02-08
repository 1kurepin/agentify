# Skills & Workflows Builder

**Build custom skills and workflows through questions.**

---

## Instructions for Agent

This questionnaire creates or updates skills (specialized knowledge) and workflows (repeatable procedures) from two sources:
- KB files in `docs/`
- User answers from this questionnaire

Ask one section at a time. Wait for answers before moving on.

### Required KB Sources

Before suggesting files, read these if they exist:
- `docs/project_context.md`
- `docs/domain.md`
- `docs/constraints.md`
- `docs/architecture.md`
- `docs/glossary.md`

Use KB as baseline context. Use user answers to add or correct details.
If information is unknown, keep it as `TBD` (do not invent).

### File Update Policy (Create-or-Update)

For each selected skill/workflow file:
- If file doesn't exist, create it from the matching external template
- If file exists, update only sections changed by confirmed information
- Preserve useful user-written content
- Remove contradictions instead of appending duplicate sections
- Keep headings stable (no duplicate heading blocks)

### Naming Convention

- Skill files: `*.skill.md`
- Workflow files: `*.prompt.md`

---

## Section 1: Common Tasks

Ask user:
```
Let's identify skills and workflows your agent needs.

1. **What tasks do you do most frequently?**
   (e.g., "Add new API endpoint", "Fix failing tests", "Deploy to staging")

2. **Which tasks have strict required steps?**
   (candidates for workflows)

3. **Which tasks fail without project-specific knowledge?**
   (candidates for skills)
```

---

## Section 2: Specialized Knowledge (Skills)

Ask user:
```
Now let's identify skill topics:

1. **What libraries/tools have non-obvious usage patterns?**
2. **What project conventions are easy to violate?**
3. **Where do agents most often make mistakes?**
```

Then suggest skills from KB + answers:

```markdown
## Suggested Skills

| Skill | Purpose | Example Path |
|-------|---------|-------------|
| [topic]-patterns | Correct usage patterns for [topic] | `[skills_path]/[topic]-patterns.skill.md` |
| code-style | Project coding conventions | `[skills_path]/code-style.skill.md` |
| [domain]-knowledge | Domain rules and invariants | `[skills_path]/[domain]-knowledge.skill.md` |

**Note**: `[skills_path]` = `.github/skills/` for Copilot, `.cursor/skills/` for Cursor, etc.

Which skills should I draft? (list names, or `skip`)
```

---

## Section 3: Repeatable Processes (Workflows)

Ask user:
```
Now let's identify workflow topics:

1. **What checks happen before code is merged?**
2. **What steps happen between "code done" and production?**
3. **Which recurring scenarios need a fixed procedure?**
   (bug fix, new feature, breaking change, security issue, etc.)
```

Then suggest workflows from KB + answers:

```markdown
## Suggested Workflows

| Workflow | Purpose | Example Path |
|----------|---------|-------------|
| code-review | Review checklist and gates | `[workflows_path]/code-review.prompt.md` |
| deploy | Deployment readiness and execution steps | `[workflows_path]/deploy.prompt.md` |
| bug-fix | Safe bug investigation and fix flow | `[workflows_path]/bug-fix.prompt.md` |
| breaking-change | Controlled breaking-change rollout | `[workflows_path]/breaking-change.prompt.md` |

**Note**: `[workflows_path]` = `.github/prompts/` for Copilot, `.cursor/prompts/` for Cursor, etc.

Which workflows should I draft? (list names, or `skip`)
```

---

## Section 4: Draft and Confirm Before Write

For selected skills:
- Use `.agentify/templates/skills/skill.template.md`
- Fill placeholders using KB + user answers

For selected workflows:
- Use `.agentify/templates/workflows/workflow.template.md`
- Fill placeholders using KB + user answers

Before writing any files, show a draft plan:
- Target file path
- Action: `create` or `update`
- Short rationale (what information was used)

Ask user:
```markdown
Apply these file changes? (yes / edit / no)
```

Handle response:
- `yes` -> create or update files
- `edit` -> apply user edits to draft content, then ask `yes / edit / no` again
- `no` -> do not write files

---

## Section 5: Summary

```markdown
## ✅ Skills & Workflows Updated

**Skills created/updated:**
- `[skills_path]/[name].skill.md`
- ...

**Workflows created/updated:**
- `[workflows_path]/[name].prompt.md`
- ...

**How to use:**
- Skills load by topic/trigger
- Workflows run from prompts folder

**Next steps:**
- Review and customize created files
- Add examples from your codebase
- Test with your agent
```
