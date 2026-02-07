# Skill: Code Quality

**When to load**: When writing or modifying code in any programming language.

---

## Core Principle

**Simple code > clever code.** Code is read 10x more than written. Optimize for readability.

---

## Naming

### Variables & Functions

- Names describe **what**, not **how**
- Avoid abbreviations (except universally known: `id`, `url`, `http`)
- Boolean names: `isActive`, `hasPermission`, `canEdit` (not `active`, `permission`)
- Functions: verb + noun (`getUserById`, `calculateTotal`, `validateInput`)

```
❌ Bad:  d, tmp, data, info, process(), handle(), doStuff()
✅ Good: daysUntilExpiry, userProfile, fetchOrderHistory(), validateEmailFormat()
```

### Classes & Types

- Nouns, not verbs
- Singular for single entity (`User`, not `Users`)
- No redundant suffixes (`User`, not `UserData` or `UserInfo`)

---

## Structure

### Functions

- **One clear purpose** — if you need "and" to describe it, split it
- **Small** — if scrolling needed, probably too long
- **Minimal parameters** — more than 3-4 → consider object parameter
- **Early returns** — reduce nesting, fail fast

```
❌ Bad:
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        // actual logic buried deep
      }
    }
  }
}

✅ Good:
function processUser(user) {
  if (!user) return;
  if (!user.isActive) return;
  if (!user.hasPermission) return;
  
  // actual logic at top level
}
```

### Modules/Files

- **Single responsibility** — one reason to change
- **Cohesion** — related things together
- **Clear dependencies** — explicit imports, no hidden coupling

---

## DRY vs Independence (The Trade-off)

### When to deduplicate

- Logic is **truly the same** (not just looks similar)
- Changes to one should **always** affect the other
- Abstraction is **obvious and stable**

### When duplication is OK

- Similar code but **different reasons to change**
- Premature abstraction would be **unclear or fragile**
- Independence of modules is more valuable

```
Rule of Three: Don't deduplicate until you see the pattern 3 times.
Wrong abstraction is worse than duplication.
```

---

## Error Handling

- Handle errors **explicitly** — no silent failures
- Errors should be **actionable** — what went wrong, what to do
- Fail **fast and loud** — don't hide problems
- Log with **context** — what was happening when it failed

```
❌ Bad:  catch (e) { }
❌ Bad:  catch (e) { console.log(e); }
✅ Good: catch (e) { logger.error("Failed to fetch user", { userId, error: e }); throw; }
```

---

## Comments

### Good comments

- **Why**, not what (code shows what)
- **Warnings** about non-obvious behavior
- **Context** that can't be expressed in code
- **TODO** with ticket reference

### Bad comments

- Restating the code
- Commented-out code (delete it, git remembers)
- Outdated comments (worse than no comment)

```
❌ Bad:  // increment counter
        counter++;

✅ Good: // Using insertion sort here because data is nearly sorted (benchmarked 3x faster than quicksort)
```

---

## Consistency

- **Follow existing patterns** — don't invent new conventions
- **Match the codebase style** — even if you prefer different
- **One way to do things** — not multiple approaches for same task

Before writing new code:
1. Find similar existing code
2. Copy the pattern
3. Verify it matches

---

## Complexity Warning Signs

| Sign | Action |
|------|--------|
| Deep nesting (>3 levels) | Extract functions, use early returns |
| Long functions (>30 lines) | Split by responsibility |
| Many parameters (>4) | Use object parameter or split |
| Boolean parameters | Consider separate functions |
| Complex conditionals | Extract to named function |
| "Clever" one-liners | Expand for readability |

---

## Testing Mindset

- Write code that's **easy to test**
- Think about **edge cases** while writing
- Consider **failure modes**
- Keep **side effects** at the edges

---

## Summary Checklist

Before submitting code:

- [ ] Names are clear and descriptive
- [ ] Functions have single purpose
- [ ] No unnecessary complexity
- [ ] Errors handled explicitly
- [ ] Matches existing codebase style
- [ ] Would a new team member understand this?
