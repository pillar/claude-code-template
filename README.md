# Claude Code Memory Architecture Example

This is a template project demonstrating how to implement a **3-Layer Memory Architecture** for AI Agents, specifically optimized for **Claude Code**.

## 🏗️ Structure
- `CLAUDE.md`: **Layer 1 (Long-term)**. Global rules, style guides, and persistent decisions.
- `SESSION-STATE.md`: **Layer 2 (Buffer)**. Active task tracking to prevent context loss during long sessions.
- `docs/decisions/`: **Layer 3 (History)**. Post-mortems and detailed logs of past features/fixes.

## 🚀 How to use
1. Clone this repo into your project root.
2. When starting a new session with Claude Code, tell it: *"Follow the memory protocol in CLAUDE.md."*
3. Use `SESSION-STATE.md` to keep track of complex multi-file refactors.
4. Document significant changes in `docs/decisions/`.

## 🛠️ Example Code
This repo includes a simple TypeScript setup in `src/` and `tests/` to show how the agent maintains style consistency based on the rules in `CLAUDE.md`.
