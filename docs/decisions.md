# Architecture Decision Records (ADRs)

## ADR-001: React 19 + Vite 8 SPA Architecture
- **Status**: Accepted
- **Context**: The assignment prioritizes high-fidelity frontend rendering, interactive micro-animations, full-screen modals, and responsive layout without requiring SSR infrastructure.
- **Decision**: Use React 19 with Vite 8.
- **Consequence**: Delivers instant Hot Module Replacement (HMR), tree-shaken static production bundles, and effortless deployment to static hosts (Vercel, Netlify, Cloudflare Pages).

---

## ADR-002: TanStack Query for Server State Management
- **Status**: Accepted
- **Context**: The application handles asynchronous data fetching for listings, reviews, and bookings that require caching, deduplication, and loading/error states.
- **Decision**: Use `@tanstack/react-query` strictly as the server-state layer, not as an SSR framework.
- **Consequence**: Decouples network fetching and cache lifecycle from presentation components. Prevents state staleness and eliminates redundant network calls.

---

## ADR-003: React Context API for Client UI State
- **Status**: Accepted
- **Context**: Lightweight client-side UI states (such as active photo index in the lightbox, open/closed modal drawers, date pickers) need to be shared across disparate components without prop-drilling.
- **Decision**: Use native React Context API (`GalleryContext`, `BookingContext`, `ConciergeContext`).
- **Consequence**: Avoids heavyweight global state libraries (Redux, Zustand) for simple UI transitions, maintaining a lightweight bundle footprint.

---

## ADR-004: Motion for React (Framer Motion) for UI Transitions
- **Status**: Accepted
- **Context**: The assignment requires smooth animations for modal entrances, lightbox photo cycling, and sticky subnav reveals.
- **Decision**: Use `motion` for declarative, spring-based animations with built-in `AnimatePresence` and accessibility support (`prefers-reduced-motion`).
- **Consequence**: Provides fluid, natural micro-animations matching Airbnb's design polish.

---

## ADR-005: Layered Architecture for Express Backend
- **Status**: Accepted
- **Context**: Full-stack readiness requires a clean backend foundation that demonstrates SOLID principles without blocking the frontend clone.
- **Decision**: Route -> Controller -> Service -> Repository -> Mongoose Model.
- **Consequence**: Decouples business logic from HTTP transport and database technology, facilitating unit testability and future database migrations.

---

## ADR-006: Deterministic AI Travel Concierge Prototype
- **Status**: Accepted
- **Context**: The differentiator feature needs to be reliable, fast, testable, and demonstrable offline without reliance on expensive or flaky third-party LLM API keys during candidate evaluation.
- **Decision**: Implement a modular agentic pipeline with an intent parser, constraint extractor, ranking score engine, and reasoning generator with an interface (`AIConciergeService`) that can cleanly swap to an OpenAI/Gemini SDK.
- **Consequence**: 100% testable, zero third-party API outage risk, and transparent algorithmic reasoning.
