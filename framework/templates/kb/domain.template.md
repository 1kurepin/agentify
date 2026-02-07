# Domain Template

**Purpose**: Document business domain concepts, entities, and relationships for AI agents.

---

## What to Include

```markdown
# Domain

## Core Entities

| Entity | Description | Key Attributes |
|--------|-------------|----------------|
| [Name] | [What it represents] | [Important fields] |

## Entity Relationships

[Describe how entities relate to each other]

## Business Rules

[Domain-specific rules that code must respect]

## Domain Events

[Key events that happen in the system]
```

---

## Example

```markdown
# Domain

## Core Entities

| Entity | Description | Key Attributes |
|--------|-------------|----------------|
| User | Person using the app | id, email, role, createdAt |
| Order | Purchase request | id, userId, status, items[], total |
| Product | Item for sale | id, name, price, inventory |
| Payment | Financial transaction | id, orderId, amount, status |

## Entity Relationships

- User has many Orders
- Order has many OrderItems
- OrderItem references Product
- Order has one Payment

## Business Rules

1. **Order total** must equal sum of (item.price × item.quantity)
2. **Inventory** decreases only when order status = "confirmed"
3. **User email** must be unique and verified before first order
4. **Payment** cannot be modified after status = "completed"

## Domain Events

| Event | Trigger | Side Effects |
|-------|---------|--------------|
| OrderCreated | User submits order | Reserve inventory, notify warehouse |
| PaymentCompleted | Payment processor callback | Confirm order, send confirmation email |
| OrderCancelled | User or admin action | Release inventory, initiate refund |
```

---

## Tips

- Focus on business concepts, not technical implementation
- Include rules that affect how code should behave
- Update when domain model changes
- Cross-reference with glossary for terminology
