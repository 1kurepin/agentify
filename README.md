<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/brand/agentify_theme_logo_variants/agentify_logo_dark_tight.png">

  <img src="assets/brand/agentify_theme_logo_variants/agentify_logo_light_tight.png" alt="Agentify" width="520">
</picture>

**Tool-agnostic framework for AI coding agents.**  
One-time setup. Safe defaults. Layered growth.

# Agentify

Agentify helps you make any repository AI-agent-ready with:
- an `AGENTS.md` template and universal safety rules;
- a project knowledge base structure (`docs/`);
- extensibility via Skills and Workflows.

---

## What Agentify Gives You

- **Layer 1:** `AGENTS.md` with universal safe defaults
- **Layer 2 (optional):** `docs/` knowledge base for project context
- **Layer 3 (optional):** skills and workflows for advanced behavior

See the core template: [framework/AGENTS.template.md](framework/AGENTS.template.md)

---

## Common Use Cases

- Bootstrap an `AGENTS.md` template for a new or existing project
- Add AI coding assistant rules without stack lock-in
- Improve coding-agent consistency with project context in `docs/`
- Add reusable review and quality workflows for AI-assisted development

---

## Quick Start

```bash
git clone https://github.com/1kurepin/agentify.git
cp -r agentify/framework your-project/.agentify
rm -rf agentify
```

In your project:

```text
Run .agentify/setup.prompt.md
```

Then answer 3 setup questions.

Full setup and manual fallback:
- [Getting Started](docs/getting-started.md)

---

## Supported Tools

Works with **any AI agent**, including but not limited to GitHub Copilot, Claude Code, Codex, Cursor, Windsurf, and others.

---

## Documentation

- [Getting Started](docs/getting-started.md) - install and run setup
- [Customization](docs/customization.md) - extend rules, KB, skills, workflows
- [Philosophy](docs/philosophy.md) - design principles and trade-offs
- [FAQ](docs/faq.md) - common usage and troubleshooting questions

---

## Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

---

## License

MIT — Use freely, attribution appreciated.
