# AGENTS.md — Multi-Agent Engineering Contract

## Mission
Build the PlayPower Labs Airbnb Clone according to the assignment requirements with pixel-conscious visual fidelity, robust React architecture, comprehensive testing, and production documentation.

## Golden Rule
Complete and verify the required clone (Listing Page, Photo Tour, Lightbox) before adding enhancements.

## Before Coding Any Feature
Read the relevant project context:
- `GEMINI.md`
- `docs/context.md`
- `docs/requirements.md`
- `docs/plan.md`
- `docs/architecture.md`
- Relevant ADRs in `docs/decisions.md`

## State Separation Mandate
- **Server State**: Managed strictly by TanStack Query (caching, query invalidation, loading/error states, mutations).
- **Client UI State**: Managed strictly by React Context API (active lightbox photo index, photo tour open/close, booking card date selections, concierge drawer toggle).
- Never duplicate TanStack Query server data into Context.

## Dependency Rules
Before adding dependencies, confirm:
1. Is it necessary?
2. Does it conflict with existing dependencies?
3. Is it documented in `docs/versions.md`?

## After Any Code Changes
1. Run lint checks (`npm run lint`).
2. Run test suites (`npm test`).
3. Update `docs/progress.md` with accomplishments and next tasks.
4. Update `docs/ai-prompt-sequence.md`.

## Strict Prohibitions
- NEVER copy or scrape source code or assets from the reference URL.
- NEVER commit secrets or credentials.
- NEVER leave broken imports or unhandled error cases.
