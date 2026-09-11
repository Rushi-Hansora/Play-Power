# 01 — React Engineering Rules

- Functional components with strict separation between presentation and business logic.
- Avoid duplicate state: compute derived values during render or with `useMemo` when computationally expensive.
- TanStack Query is strictly for server state (fetching, caching, invalidation, mutations).
- Context API is strictly for lightweight client UI state (active modal, selected photo index, concierge drawer).
- Custom hooks encapsulate complex interactive behaviors (`useGallery`, `useBooking`, `useScrollSpy`, `useKeyboardNav`).
- Use Motion for React with subtle, realistic easing curves. Respect `prefers-reduced-motion`.
- Proper cleanup in `useEffect` (e.g. event listeners, intervals, observers).
