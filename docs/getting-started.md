# Getting Started

Build a foundation for AI-assisted development in your project.

**What you'll get:**
- **Layer 1** (immediate): Safe agent rules that work right away
- **Layer 2** (optional): Project context for smarter responses  
- **Layer 3** (optional): Specialized skills and workflows

---

## Prerequisites

- A code project (any language, any size)
- An AI coding assistant (any agent, including but not limited to GitHub Copilot, Claude Code, Codex, Cursor, Windsurf, and others)

---

## Installation Methods

### Method 1: Git Clone (Recommended)

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/agentify.git

# Copy framework to your project
cp -r agentify/framework your-project/.agentify

# Clean up
rm -rf agentify
```

### Method 2: Download ZIP

1. Download repository as ZIP from GitHub
2. Extract
3. Copy `framework/` folder to your project as `.agentify/`

### Method 3: Manual Copy

Copy these files to `your-project/.agentify/`:
- `AGENTS.template.md`
- `setup.prompt.md`
- `questionnaires/` folder
- `bootstrap-prompts/` folder
- `templates/` folder

---

## Running Setup

You have two options: agent-driven (recommended) or manual.

### Option A: Agent-Driven Setup (Recommended)

#### Step 1: Start your AI agent

Open your project in your preferred AI tool.

#### Step 2: Run the setup prompt

Tell your agent:

```
Run .agentify/setup.prompt.md
```

Or:

```
Read .agentify/setup.prompt.md and follow the instructions
```

#### Step 3: Answer questions

The agent will ask:

1. **Project name** — e.g., "MyApp Backend"
2. **One-sentence description** — e.g., "REST API for mobile application"
3. **AI tool** — Which tool are you using? (Copilot/Cursor/Claude/Other; choose `Other` for Codex, Windsurf, and unlisted tools)

KB files are created or updated later via `.agentify/questionnaires/kb-builder.md` or `.agentify/bootstrap-prompts/repo-scan.prompt.md`.

#### Step 4: Verify output

Agent creates:

| File | Purpose |
|------|---------|
| `AGENTS.md` | Main rules file |
| `docs/` | Knowledge Base folder |
| Skills folder | For custom skills |
| Prompts folder | For workflows |
| Tool config | `.cursorrules`, `copilot-instructions.md`, etc. |

### Option B: Manual Setup (if agent fails)

If agent-driven setup doesn't work, you can set up manually:

#### Step 1: Copy template

```bash
cp .agentify/AGENTS.template.md AGENTS.md
```

#### Step 2: Fill required values in AGENTS.md

- `{{PROJECT_NAME}}` → Your project name (e.g., "MyApp Backend")
- `{{PROJECT_DESCRIPTION}}` → One sentence (e.g., "REST API for mobile application")
- Keep constraints as a list in `docs/constraints.md`

#### Step 3: Create folder structure

```bash
mkdir -p docs
# For GitHub Copilot:
mkdir -p .github/skills .github/prompts
# For Cursor: mkdir -p .cursor/skills .cursor/prompts
# For Claude: mkdir -p .claude/skills .claude/prompts
```

#### Step 4: Add tool config (optional)

Use the config format that matches your tool:

| Tool | Config |
|------|--------|
| GitHub Copilot | `.github/copilot-instructions.md` with: `Read [AGENTS.md](../AGENTS.md) for agent instructions.` |
| Cursor | `.cursorrules` with: `Read AGENTS.md in project root for instructions.` |
| Claude Code | `CLAUDE.md` with: `Read AGENTS.md for agent instructions.` |
| Codex / Windsurf / Other | Point your tool to `AGENTS.md` in project root |

---

## After Setup — Layer 1 Complete

You now have **Layer 1: Safe defaults**. Your agent will follow the rules in `AGENTS.md`. 

Try it:

```
Review my recent changes
```

or

```
Add a new endpoint for user preferences
```

The agent should now:
- Ask before making breaking changes
- Admit when it doesn't know something
- Look for existing patterns before writing new code

---

## Growing Your Foundation

### When to add Layer 2 (Knowledge Base)

**Signs you need it:**
- Agent doesn't understand your domain terms
- Agent makes wrong assumptions about architecture
- You keep explaining the same context

**How to add:**

```
Run .agentify/questionnaires/kb-builder.md
```

This creates or updates:
- `docs/project_context.md` — Project overview
- `docs/glossary.md` — Project terminology
- `docs/domain.md` — Business entities and rules
- `docs/architecture.md` — System overview
- `docs/constraints.md` — Project rules

It can also suggest project-specific rules for `AGENTS.md` and apply them only after your approval.

### When to add Layer 3 (Skills & Workflows)

**Signs you need it:**
- You want consistent code style checks
- You have a specific review process
- Agent needs domain expertise (API design, security, etc.)

**How to add:**

```
Run .agentify/questionnaires/skills-builder.md
```

### Alternative: Auto-scan Repository

Let the agent analyze your codebase and draft KB/Skills:

```
Run .agentify/bootstrap-prompts/repo-scan.prompt.md
```

---

## Folder Structure Explained

After setup + KB build (example shows **GitHub Copilot** paths):

```
your-project/
├── AGENTS.md              # Layer 1: Safe defaults
│                          # Agent reads this FIRST
│
├── docs/                  # Layer 2: Knowledge Base
│   ├── project_context.md # "What is this project?"
│   ├── glossary.md        # "What does X mean?"
│   ├── domain.md          # "What are the business rules?"
│   ├── architecture.md    # "How does this system work?"
│   └── constraints.md     # "What rules must be followed?"
│
├── .github/               # Layer 3: Skills & Workflows
│   ├── skills/            #   (Copilot uses .github/)
│   │   └── code-quality.skill.md
│   └── prompts/
│       └── code-review.prompt.md
│
└── .agentify/             # Framework source
                           # Don't modify - use for re-setup
```

**Tool-specific paths for Layer 3:**

| Tool | Skills & Workflows Location |
|------|----------------------------|
| GitHub Copilot | `.github/skills/`, `.github/prompts/` |
| Cursor | `.cursor/skills/`, `.cursor/prompts/` |
| Claude Code | `.claude/skills/`, `.claude/prompts/` |
| Other | Your choice |

For Codex and Windsurf, choose `Other` during setup.

---

## Customization

### Edit Rules

Open `AGENTS.md` and edit the "Project-Specific Rules" section:

```markdown
### Project-Specific Rules

- All APIs must be backward compatible
- Use repository pattern for data access
- Log all external API calls
```

### Add Skills

Copy from `.agentify/templates/skills/` to your skills folder.

### Add Workflows

Copy from `.agentify/templates/workflows/` to your prompts folder.

---

## Troubleshooting

### Agent doesn't find setup.prompt.md

Make sure the path is correct:
- `.agentify/setup.prompt.md` (with dot prefix)
- Check file exists in your project root

### Agent creates wrong paths

Run setup again and choose the correct AI tool when asked.

### Rules not being followed

1. Check `AGENTS.md` exists in project root
2. For Copilot: Verify `.github/copilot-instructions.md` points to it
3. For Cursor: Verify `.cursorrules` mentions it
4. Try explicitly asking: "Read AGENTS.md first, then..."

---

## Next Steps

**Growth path:**
1. Use Layer 1 for a few days/weeks
2. When agent lacks context → add Layer 2 (KB)
3. When you want specialized behaviors → add Layer 3 (Skills/Workflows)

**Learn more:**
- [Customization Guide](customization.md) — How to modify each layer
- [Philosophy](philosophy.md) — Understanding the design
- [FAQ](faq.md) — Common questions
