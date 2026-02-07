# Contributing to Agentify

Thanks for your interest in contributing!

## Philosophy

Before contributing, understand our core principles:

1. **Foundation first** — Short, focused rules that agents internalize, not walls of text they ignore
2. **Universal core** — Rules must work for any project type
3. **Safe defaults** — Err on the side of caution over "helpful at all costs"

## What We're Looking For

### Good Contributions

- Bug fixes in setup process
- Documentation improvements
- New skill/workflow templates (if genuinely universal)
- Support for additional AI tools
- Translations

### What We'll Likely Reject

- Features that add complexity without clear value
- Technology-specific rules in core template
- Changes that make output significantly longer
- Features requiring complex regeneration or sync workflows

## How to Contribute

### Bug Reports

1. Check existing issues first
2. Include: steps to reproduce, expected vs actual behavior
3. Mention your AI tool (Copilot, Cursor, etc.)

### Pull Requests

1. Fork the repository
2. Create a branch: `git checkout -b fix/description`
3. Make your changes
4. Test with at least one AI tool
5. Update documentation if needed
6. Submit PR with clear description

### Commit Messages

```
type: short description

Longer explanation if needed.
```

Types: `fix`, `feat`, `docs`, `refactor`, `test`

## Code Style

- Markdown files: Keep lines readable (soft wrap OK)
- Templates: Use `{{PLACEHOLDER}}` for variable content
- No project-specific examples — use generic ones

## Testing Your Changes

1. Copy `framework/` to a test project
2. Run `setup.prompt.md` with an AI agent
3. Verify generated files are correct
4. Test with different answers to questions

## Questions?

Open an issue with the `question` label.
