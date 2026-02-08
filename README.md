<img src="assets/brand/agentify_logo_transparent_tight.png" alt="Agentify" width="520" />

**Foundation for AI-assisted development.**  
One-time setup. Safe defaults. Layered growth.

## About Agentify

Agentify is a lightweight framework that makes projects AI-agent-ready.  
It gives you a concise rules foundation, optional project context, and optional extension layers for advanced use.

---

## What Agentify Gives You

- **Layer 1:** `AGENTS.md` with universal safe defaults
- **Layer 2 (optional):** `docs/` knowledge base for project context
- **Layer 3 (optional):** skills and workflows for advanced behavior

See the core template: [framework/AGENTS.template.md](framework/AGENTS.template.md)

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

Then answer 4 setup questions.

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
