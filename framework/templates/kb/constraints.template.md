# Constraints & Invariants

**Rules that must always hold true for {{PROJECT_NAME}}.**

---

## About This Document

Constraints are rules that should never be violated. Breaking a constraint typically causes significant problems (bugs, security issues, data corruption, etc.).

Each constraint entry includes:
- **Constraint**: What the rule is
- **Why it matters**: Impact if violated
- **Where it applies**: Code paths, systems, or contexts
- **Notes**: Additional context (optional)

---

## External Contracts

### {{CONSTRAINT_NAME}}

**Constraint**: {{What the constraint is}}

**Why it matters**: {{Impact if violated}}

**Where it applies**: {{Code paths, systems, contexts}}

**Notes**: {{Optional additional context}}

---

### {{CONSTRAINT_NAME_2}}

**Constraint**: {{What the constraint is}}

**Why it matters**: {{Impact if violated}}

**Where it applies**: {{Code paths, systems, contexts}}

---

## Data Integrity

### {{DATA_CONSTRAINT}}

**Constraint**: {{What the constraint is}}

**Why it matters**: {{Impact if violated}}

**Where it applies**: {{Code paths, systems, contexts}}

---

## Security

### {{SECURITY_CONSTRAINT}}

**Constraint**: {{What the constraint is}}

**Why it matters**: {{Impact if violated}}

**Where it applies**: {{Code paths, systems, contexts}}

---

## Performance

### {{PERFORMANCE_CONSTRAINT}}

**Constraint**: {{What the constraint is}}

**Why it matters**: {{Impact if violated}}

**Where it applies**: {{Code paths, systems, contexts}}

---

## Operational

### {{OPERATIONAL_CONSTRAINT}}

**Constraint**: {{What the constraint is}}

**Why it matters**: {{Impact if violated}}

**Where it applies**: {{Code paths, systems, contexts}}

---

## Template for New Constraints

When discovering a new constraint, copy this template:

```markdown
### {{Name}}

**Constraint**: {{Precise statement of what must be true}}

**Why it matters**: {{What goes wrong if violated}}

**Where it applies**: {{Specific code, systems, or situations}}

**Notes**: {{Optional: exceptions, history, related constraints}}
```

---

## Related Documentation

- [Architecture](./architecture.md) – System structure
- [Glossary](./glossary.md) – Terminology
- [Decisions](./decisions/) – How we got here
