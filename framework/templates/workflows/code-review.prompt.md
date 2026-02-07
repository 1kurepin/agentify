# Workflow: Code Review

**Trigger**: "Review my changes", "Code review", "Review current branch"

---

## Purpose

Comprehensive code review of current branch changes.

**When to use:**
- Before creating merge/pull requests
- After completing features/fixes
- Self-review before claiming "done"

---

## Instructions for Agent

**CRITICAL: Get ALL branch changes first — never assume you know what changed.**

---

## Phase 1: Scope Analysis (MANDATORY)

### 1.1 Get All Branch Changes

**Auto-detect base branch:**
```bash
# Try to find upstream branch
git config --get branch.$(git branch --show-current).merge

# Or find merge-base with common branches
git merge-base HEAD origin/main    # or origin/master, origin/develop
```

**Get all changes from branch point:**
```bash
git diff --name-status <merge-base>...HEAD
git diff --stat <merge-base>...HEAD
```

**Important:**
- This captures ALL commits in the branch
- Do NOT use just `git diff` (only shows uncommitted changes)
- Do NOT ask user which files to review
- If no changes found, inform user and stop

### 1.2 Analyze Scope

- Count total files and approximate lines changed
- If >10 files OR >500 lines: decompose into logical groups
- Group by: feature area, tests, documentation, infrastructure

### 1.3 Present Plan

Show:
- Total files/lines changed
- Logical groupings (if applicable)
- Base branch used for comparison

---

## Phase 2: Review Criteria

For each file/group, verify against:

### A. Correctness (Critical)

- [ ] Logic is correct — does it do what it's supposed to?
- [ ] Edge cases handled — nulls, empty collections, boundaries
- [ ] Error handling complete — failures handled appropriately
- [ ] No obvious bugs or typos

### B. Security (Critical)

- [ ] No secrets in code (API keys, passwords, tokens)
- [ ] No secrets in logs
- [ ] Input validation present where needed
- [ ] No SQL injection, XSS, or other vulnerabilities
- [ ] Sensitive data handled appropriately

### C. Code Quality

- [ ] Clear, descriptive names
- [ ] Functions have single purpose
- [ ] No unnecessary complexity
- [ ] Follows existing codebase patterns
- [ ] No copy-paste duplication (unless intentional)
- [ ] Comments explain "why", not "what"

### D. Architecture

- [ ] Changes belong in this layer/module
- [ ] Dependencies are appropriate
- [ ] No circular dependencies introduced
- [ ] Separation of concerns maintained

### E. Testing

- [ ] Tests added/updated for new logic
- [ ] Tests verify behavior, not implementation
- [ ] Edge cases covered
- [ ] Tests actually run and pass

### F. Documentation

- [ ] Code is self-documenting OR has comments
- [ ] README/docs updated if behavior changed
- [ ] Breaking changes documented

### G. Maintainability

- [ ] Would a new team member understand this?
- [ ] Can it be debugged when it fails?
- [ ] Is it easy to modify in the future?

---

## Phase 3: Common Issues Check

Scan for these problems:

| Issue | Why It's Bad |
|-------|--------------|
| Magic numbers/strings | Hard to understand and maintain |
| Deeply nested code | Hard to follow and test |
| Long functions (>50 lines) | Too many responsibilities |
| Commented-out code | Use version control instead |
| TODO without ticket | Gets forgotten |
| Catch-and-ignore errors | Hides problems |
| Hardcoded configuration | Should be configurable |
| Console.log/print statements | Remove before merge |

---

## Phase 4: Report Findings

Structure your findings:

```markdown
## Code Review: [branch-name]

**Scope**: X files, ~Y lines changed (from [base-branch])

### Critical Issues (Must Fix)

These block the merge:

1. **[File:Line]** - [Description]
   - Why: [Explanation]
   - Fix: [Suggestion]

### Important Issues (Should Fix)

These should be fixed but don't block:

1. **[File:Line]** - [Description]
   - Suggestion: [How to improve]

### Minor Issues (Nice to Have)

Optional improvements:

1. **[File:Line]** - [Description]

### What's Good

- [Positive feedback on well-done parts]

### Summary

- [ ] Ready to merge / [X] Needs changes
- Main concerns: [List if any]
```

---

## Agent Instructions

**Follow this order:**

1. **Start with git** — get ALL branch changes
2. **Stop if no changes** — inform user
3. **Show scope** — files, lines, base branch
4. **Get actual diffs** — `git diff <merge-base>...HEAD -- <file>`
5. **Decompose if large** — group logically
6. **Review systematically** — all criteria, all files
7. **Report clearly** — structured findings with file:line references

**Take your time:**
- Think about implications
- Be thorough, not fast
- Don't skip sections

**For large changesets (>20 files):**
- Consider reviewing in groups
- Still provide unified summary

---

## Example Invocations

Simple:
```
Review my changes
```

```
Code review
```

Explicit:
```
Review current branch changes using code-review workflow
```

Scoped:
```
Review only the test files
```

```
Review changes to src/services/
```
