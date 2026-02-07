# Architecture Overview

**High-level system architecture for {{PROJECT_NAME}}.**

---

## System Context

### What This System Is

{{Brief description of what this system does and its purpose.}}

### What This System Is NOT

{{Clarify what's out of scope or handled elsewhere.}}

---

## Components

### {{COMPONENT_1}}

**Purpose**: {{What it does}}

**Responsibilities**:
- {{Responsibility 1}}
- {{Responsibility 2}}

**Dependencies**:
- {{Dependency 1}}

### {{COMPONENT_2}}

**Purpose**: {{What it does}}

**Responsibilities**:
- {{Responsibility 1}}
- {{Responsibility 2}}

**Dependencies**:
- {{Dependency 1}}

---

## Data Flow

### Primary Flow

```
{{Diagram or description of main data flow}}

Example:
Client → API Gateway → Service → Database
                    → Cache
                    → External API
```

### {{SECONDARY_FLOW}}

{{Description of secondary flow if applicable.}}

---

## Integrations

### External Systems

| System | Purpose | Protocol |
|--------|---------|----------|
| {{SYSTEM}} | {{Why we integrate}} | {{REST/GraphQL/gRPC/etc}} |

### Internal Dependencies

| Service | Purpose |
|---------|---------|
| {{SERVICE}} | {{What it provides}} |

---

## Deployment

### Environments

| Environment | Purpose | Notes |
|-------------|---------|-------|
| Development | Local development | {{Notes}} |
| Staging | Pre-production testing | {{Notes}} |
| Production | Live system | {{Notes}} |

### Infrastructure

{{High-level infrastructure description}}

---

## Security

### Authentication

{{How users/services are authenticated}}

### Authorization

{{How permissions are enforced}}

### Data Protection

{{How sensitive data is protected}}

---

## Observability

### Logging

{{Logging approach and tools}}

### Monitoring

{{Monitoring approach and tools}}

### Tracing

{{Distributed tracing approach}}

---

## Related Documentation

- [Glossary](./glossary.md) – Terminology
- [Constraints](./constraints.md) – Rules and invariants
- [Decisions](./decisions/) – Architectural decisions
