# Customization Guide

How to build on your foundation.

---

## How Customization Works

Agentify creates a **layered foundation**. Each layer can be customized independently:

```
┌─────────────────────────────────────────────┐
│  Layer 3: Skills & Workflows              │  ← Create new ones
├─────────────────────────────────────────────┤
│  Layer 2: Knowledge Base                  │  ← Add entries
├─────────────────────────────────────────────┤
│  Layer 1: AGENTS.md                       │  ← Edit directly
└─────────────────────────────────────────────┘
```

**Key principle**: Edit directly. No regeneration, no sync, no manifest files.

---

## Layer 1: Customizing Rules

Layer 1 is created during setup. It's your `AGENTS.md` file with safe defaults.

**What you can customize:**
- Add project-specific rules
- Adjust core rules to be stricter/looser
- Add stop-the-line triggers for your project

### Add Project-Specific Rules

Edit the "Project-Specific Rules" section in `AGENTS.md`:

```markdown
### Project-Specific Rules

- All public APIs must maintain backward compatibility
- Database migrations must be reversible
- No direct database queries outside repository classes
- All external API calls must be logged with correlation ID
```

### Modify Core Rules

You can edit any rule. Common modifications:

**Stricter security:**
```markdown
### 5. Security Hygiene

**Never in code, logs, or comments:**
- API keys, passwords, tokens
- PII (names, emails, IDs)  
- Internal URLs or hostnames
- Customer data, even anonymized  ← Added
- Environment-specific configs    ← Added
```

**Adjust stop-the-line triggers:**
```markdown
**When a change involves:**
- Breaking existing interfaces or contracts
- Database schema changes           ← Added
- Changes to authentication flow    ← Added
- Irreversible actions
```

---

## Layer 2: Building Knowledge Base

Add context when agent lacks domain knowledge.

### When to Add Layer 2

**Signs you need it:**
- Agent misunderstands your domain terms
- Agent makes wrong assumptions about how systems connect
- You keep re-explaining the same things

### Manual Approach

Create files in `docs/`:

**docs/glossary.md:**
```markdown
# Glossary

| Term | Definition |
|------|------------|
| Booking | A reservation for a service |
| Guest | End user of the application |
| Folio | Guest's billing account |
```

**docs/architecture.md:**
```markdown
# Architecture

## Overview

[Diagram or description]

## Components

- **API Gateway**: Routes requests, handles auth
- **Core Service**: Business logic
- **Database**: PostgreSQL for persistence
```

**docs/constraints.md:**
```markdown
# Constraints

## Non-Negotiable

1. API backward compatibility
2. No PII in logs
3. All changes require tests

## Soft Constraints

1. Prefer composition over inheritance
2. Keep functions under 30 lines
```

### Questionnaire Approach

Run the KB builder:

```
Run .agentify/questionnaires/kb-builder.md
```

Answer questions, agent creates files.

### Auto-scan Approach

Let agent analyze your code:

```
Run .agentify/bootstrap-prompts/repo-scan.prompt.md
```

Agent scans repo and drafts KB files for review.

---

## Layer 3: Creating Skills

Skills teach your agent specialized knowledge. Add when you want consistent expertise.

### When to Add Layer 3

**Signs you need it:**
- You correct the agent about the same topic repeatedly
- You want consistent code style or patterns
- Domain-specific expertise needed (API design, security, etc.)

### Questionnaire Approach (Recommended)

Run:

```
Run .agentify/questionnaires/skills-builder.md
```

This flow reads KB files (`docs/project_context.md`, `docs/domain.md`, `docs/constraints.md`, `docs/architecture.md`, `docs/glossary.md`) plus your answers, prepares create-or-update changes, and asks `yes / edit / no` before writing files.

### Skill Structure

```markdown
# Skill: [Name]

**When to load**: [Trigger condition]

---

## [Topic 1]

[Guidance, examples, rules]

## [Topic 2]

[More guidance]

---

## Checklist

- [ ] Verification item 1
- [ ] Verification item 2
```

### Example: API Design Skill

```markdown
# Skill: API Design

**When to load**: When designing or modifying REST APIs.

---

## URL Conventions

- Use nouns, not verbs: `/users`, not `/getUsers`
- Plural for collections: `/users`, not `/user`
- Nested for relationships: `/users/{id}/orders`

## Response Format

Always return:
```json
{
  "data": { ... },
  "meta": { "timestamp": "...", "requestId": "..." }
}
```

## Error Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human readable message",
    "details": [ ... ]
  }
}
```

---

## Checklist

- [ ] URLs follow conventions
- [ ] Response format consistent
- [ ] Error responses informative
- [ ] Backward compatible with existing clients
```

### Skill Placement

Save to your skills folder:
- Copilot: `.github/skills/api-design.skill.md`
- Cursor: `.cursor/skills/api-design.skill.md`
- etc.

Use `*.skill.md` naming for all skill files.

---

## Layer 3: Creating Workflows

Workflows are step-by-step procedures for common tasks.

Use `*.prompt.md` naming for workflow files.

### Workflow Structure

```markdown
# Workflow: [Name]

**Trigger**: [When to use]

---

## Purpose

[What this workflow accomplishes]

---

## Steps

### Step 1: [Name]

[Instructions]

### Step 2: [Name]

[Instructions]

---

## Output Format

[Expected deliverable]
```

### Workflow Placement

Save to your prompts folder:
- Copilot: `.github/prompts/security-review.prompt.md`
- Cursor: `.cursor/prompts/security-review.prompt.md`
- etc.

### Example: Security Review Workflow

```markdown
# Workflow: Security Review

**Trigger**: "Security review", "Check for vulnerabilities"

---

## Purpose

Systematic security check before deployment.

---

## Steps

### Step 1: Scan for Secrets

Search codebase for:
- Hardcoded credentials
- API keys
- Connection strings

```bash
grep -r "password\|secret\|api_key\|token" --include="*.cs" --include="*.json"
```

### Step 2: Check Input Validation

For each endpoint, verify:
- Input validation present
- No SQL injection vectors
- No XSS vulnerabilities

### Step 3: Review Authentication

- Auth required on all sensitive endpoints
- Tokens validated properly
- Session management secure

### Step 4: Check Logging

- No PII in logs
- No credentials logged
- Sensitive data masked

---

## Output Format

```markdown
## Security Review: [date]

### Issues Found

1. [Severity] [Location] - [Description]

### Recommendations

1. [Action item]

### Passed Checks

- [List of verified items]
```
```

---

## Advanced: Multiple Environments

If your project has environment-specific rules:

```markdown
### Environment-Specific Rules

**Production:**
- No debug logging
- All changes require approval
- Minimum 2 reviewers

**Development:**
- Debug logging allowed
- Self-merge for trivial changes
```

---

## Tips

### Start with Layer 1

Don't rush to add Layers 2 and 3. Use Layer 1 for a while:
- See where agent struggles
- Note what context is missing
- Identify repeated corrections

Then add targeted improvements.

### Keep It Light

Don't over-document. Agent can read code. Focus on:
- Things that aren't obvious from code
- Decisions and their rationale
- Invariants that must be maintained

### Update Iteratively

Start minimal, add when agent makes mistakes:

1. Agent does something wrong
2. Add rule/guidance to prevent it
3. Don't over-generalize from one incident

### Test Your Changes

After modifying rules:
1. Ask agent to do something related
2. Verify it follows new rules
3. Adjust if needed
