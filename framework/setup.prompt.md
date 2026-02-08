# Setup Agentify

**One prompt to install agent rules in your project.**

---

## Instructions for Agent

You are installing Agentify. Follow these steps exactly.

---

## Step 1: Ask Questions

Ask the user these 3 questions (one message):

```
I'll set up agent rules for your project. Quick questions:

1. **Project name?** (e.g., "MyApp Backend")
2. **One-sentence description?** (e.g., "REST API for mobile app")
3. **Which AI tool do you use?** (Copilot / Cursor / Claude / Other; choose Other for Codex, Windsurf, and unlisted tools)
```

Wait for answers before proceeding.

---

## Step 2: Determine Paths

Based on AI tool answer, determine paths:

| Tool | Skills Path | Workflows Path |
|------|-------------|----------------|
| **Copilot** | `.github/skills/` | `.github/prompts/` |
| **Cursor** | `.cursor/skills/` | `.cursor/prompts/` |
| **Claude** | `.claude/skills/` | `.claude/prompts/` |
| **Other** | `agent/skills/` | `agent/prompts/` |

---

## Step 3: Read Template

Read `.agentify/AGENTS.template.md`

---

## Step 4: Create AGENTS.md

Create `AGENTS.md` in project root by replacing placeholders in the template:

- `{{PROJECT_NAME}}` → User's answer to Q1
- `{{PROJECT_DESCRIPTION}}` → User's answer to Q2
- `{{KB_PATH}}` → `./docs`
- `{{SKILLS_PATH}}` → Path from Step 2
- `{{WORKFLOWS_PATH}}` → Path from Step 2
- `{{PROJECT_RULES}}` → Use this starter block:

```markdown
(none yet — add as needed)

Example format:
- {{PROJECT_RULE}}
```

---

## Step 5: Create Folders

Create these folders if they don't exist:
- `docs/`
- Skills folder (from Step 2)
- Workflows folder (from Step 2)

Create `docs/README.md`:
```markdown
# Knowledge Base

Project documentation for AI agents.

## Files to Create or Update

- `project_context.md` — Project overview (start here)
- `glossary.md` — Project terminology
- `domain.md` — Business entities and rules
- `architecture.md` — System structure
- `constraints.md` — Critical project rules

Run `.agentify/questionnaires/kb-builder.md` or `.agentify/bootstrap-prompts/repo-scan.prompt.md` to create or update these files.

## Maintenance

After architecture/domain/constraints/contract changes, check KB impact and update affected files in `docs/`.
```

---

## Step 6: Copy Default Skill & Workflow

Copy these files from `.agentify/templates/` to the paths determined in Step 2:

1. **Code Quality Skill**:
   - From: `.agentify/templates/skills/code-quality.skill.md`
   - To: `[skills_path]/code-quality.skill.md`

2. **Code Review Workflow**:
   - From: `.agentify/templates/workflows/code-review.prompt.md`
   - To: `[workflows_path]/code-review.prompt.md`

These provide universal code writing guidelines and code review process.

---

## Step 7: Create Tool Config

Based on AI tool from Step 1, create appropriate config:

**Copilot** → `.github/copilot-instructions.md`:
```markdown
Read [AGENTS.md](../AGENTS.md) for agent instructions.
Apply this order: general rules in `AGENTS.md` -> matching workflow in `.github/prompts/` (if trigger) -> relevant skills in `.github/skills/` (if trigger/topic).
If instructions conflict, priority is: `AGENTS.md` > workflow > skill.
```

**Cursor** → `.cursorrules`:
```markdown
Read AGENTS.md in project root for instructions.
Apply this order: general rules in `AGENTS.md` -> matching workflow in `.cursor/prompts/` (if trigger) -> relevant skills in `.cursor/skills/` (if trigger/topic).
If instructions conflict, priority is: `AGENTS.md` > workflow > skill.
```

**Claude** → `CLAUDE.md`:
```markdown
Read AGENTS.md for agent instructions.
Apply this order: general rules in `AGENTS.md` -> matching workflow in `.claude/prompts/` (if trigger) -> relevant skills in `.claude/skills/` (if trigger/topic).
If instructions conflict, priority is: `AGENTS.md` > workflow > skill.
```

**Other** → Tell user to point their tool to `AGENTS.md` (e.g., Codex, Windsurf, or any unlisted tool).

---

## Step 8: Report Success

```markdown
## ✅ Setup Complete

**Created:**
- `AGENTS.md` — Agent rules (concise & focused)
- `docs/` — Knowledge Base folder
- `[skills_path]/code-quality.skill.md` — Code writing guidelines
- `[workflows_path]/code-review.prompt.md` — Code review workflow
- [tool config file]

**Ready to use:**
- Write code → Agent follows code-quality skill
- Review code → Run "code review" or `[workflows_path]/code-review.prompt.md`
- After architecture/domain/constraints/contract changes → check KB impact and update `docs/` files if needed

**Next steps (optional):**

1. **Build Knowledge Base** — Run `.agentify/questionnaires/kb-builder.md` to create or update KB files and suggest project-specific rules

2. **Build more Skills & Workflows** — Run `.agentify/questionnaires/skills-builder.md` to create custom skills and workflows

3. **Auto-scan repo** — Run `.agentify/bootstrap-prompts/repo-scan.prompt.md` to generate KB drafts, then create/update docs and suggest project-specific rules

Your agent is ready to use!
```

---

## Notes

- Don't modify `.agentify/` — it's the source
- User can edit `AGENTS.md` directly to customize
- KB, skills, workflows are optional but improve agent quality
