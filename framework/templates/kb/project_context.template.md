# Project Context Template

**Purpose**: High-level overview for AI agents. This is often the first file an agent should read.

---

## What to Include

```markdown
# Project Context

## What This Is

[One paragraph: What is this project? What problem does it solve? Who uses it?]

## Tech Stack

- **Language**: [e.g., C# / TypeScript / Python]
- **Framework**: [e.g., ASP.NET Core / React / FastAPI]
- **Database**: [e.g., PostgreSQL / MongoDB / None]
- **Key Libraries**: [List 3-5 important dependencies]

## Key Concepts

[2-3 sentences about the core domain or architecture approach]

## What This Is NOT

[Clarify scope boundaries — what's out of scope or handled elsewhere]

## How to Start

[Quick pointer: where to look first, what to read next]
```

---

## Example

```markdown
# Project Context

## What This Is

MyApp Backend is a REST API serving the mobile application. It handles user authentication, data synchronization, and push notifications. Used by ~50k daily active users.

## Tech Stack

- **Language**: C# (.NET 8)
- **Framework**: ASP.NET Core with minimal APIs
- **Database**: PostgreSQL via Entity Framework Core
- **Key Libraries**: MediatR, FluentValidation, Polly, Serilog

## Key Concepts

The app uses CQRS pattern — commands modify state, queries read it. All external calls go through typed HTTP clients with retry policies.

## What This Is NOT

- Not a frontend — that's in `myapp-mobile` repo
- Not handling payments — delegated to Stripe
- Not a microservice — it's a modular monolith

## How to Start

- Read `docs/architecture.md` for system overview
- Check `docs/glossary.md` for domain terms
- See `docs/constraints.md` for critical rules
```

---

## Tips

- Keep it under 50 lines
- Write for someone who knows nothing about the project
- Focus on "what" and "why", not "how"
- Update when major architectural changes happen
