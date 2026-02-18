# Project Context & Agent Memory (Claude Code Edition)

## 🧠 Memory Architecture (3-Layer)
This project follows a strict 3-layer memory protocol to ensure continuity:
1. **Long-term**: This `CLAUDE.md` file (Global rules & decisions).
2. **Buffer**: `SESSION-STATE.md` (Active task progress & context).
3. **History**: `docs/decisions/*.md` (Detailed feature logs & post-mortems).

## 🛠️ Mandatory Workflows
- **Task Start**: Always read `SESSION-STATE.md` to see if there's an unfinished run.
- **Context Preservation**: For tasks involving >3 files or complex logic, update `SESSION-STATE.md` every 5-10 minutes or before large edits.
- **Post-Mortem**: After completing a major feature/fix, summarize the logic and any "gotchas" into a new file in `docs/decisions/`.
- **Compounding**: If a new "best practice" or "permanent rule" is discovered, append it to the [Rules] section in this file.

## 📋 Rules & Preferences
- **Style**: Use TypeScript with strict typing. Prefer functional patterns over OOP.
- **Communication**: Be concise. Don't explain obvious code changes.
- **Git**: Use semantic commit messages (feat:, fix:, chore:).
- **Safety**: Never delete large directories without confirmation. Use `trash` if available.

## 🚧 Active Session State
(Managed by `SESSION-STATE.md`. See that file for current task status, pending items, and priority blockers.)
