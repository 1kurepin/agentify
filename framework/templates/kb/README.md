# Knowledge Base Templates

**Templates for documenting project knowledge.**

---

## What is a Knowledge Base?

A Knowledge Base (KB) is structured documentation that helps AI agents (and humans) understand your project:

- **What** the project is and does
- **Why** certain decisions were made
- **How** things work and fit together
- **What not** to do (constraints, invariants)

---

## Templates Included

| Template | Purpose |
|----------|---------|
| `project_context.template.md` | Project overview — start here |
| `glossary.template.md` | Domain terminology and definitions |
| `domain.template.md` | Business entities and rules |
| `architecture.template.md` | System structure and components |
| `constraints.template.md` | Rules and invariants |
| `decisions.template.md` | Architectural decision records |

---

## How to Use

1. Copy templates to your documentation folder
2. Remove `.template` from filenames
3. Fill in project-specific content
4. Remove placeholder sections you don't need

---

## Tips

- **Start small**: A glossary and basic architecture doc cover 80% of needs
- **Iterate**: Add details as you discover gaps
- **Keep current**: Update docs when things change
- **Be specific**: Concrete examples are more useful than abstract descriptions
- **Link generously**: Cross-reference between documents

---

## What Makes Good KB Content

✅ **Good**:
- Specific, concrete information
- Verified facts
- Clear explanations
- Working examples

❌ **Avoid**:
- Guesses or assumptions (mark as TBD)
- Outdated information
- Implementation details that change frequently
- Information available elsewhere (link instead)
