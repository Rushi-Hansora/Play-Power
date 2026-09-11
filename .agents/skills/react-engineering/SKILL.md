---
name: react-engineering
description: Modern React 19 standards, hooks, state separation, TanStack Query, and Context API architecture.
---

# React Engineering Skill

Use this skill to guide component architecture, hook creation, and state management.

## Principles
1. **Server vs Client State Separation**:
   - Server state -> TanStack Query (`useQuery`, `useMutation`, query keys, cache invalidation).
   - Client UI state -> Context API (`GalleryContext`, `BookingContext`, `ConciergeContext`).
2. **Custom Hooks**:
   - Encapsulate side effects and business logic (`useGallery`, `useBooking`, `useScrollSpy`, `useKeyboardNav`).
3. **Compound Components & Controlled State**:
   - For modals, dropdowns, and drawers.
4. **Performance**:
   - Use `React.lazy` and `Suspense` for heavy modals (Photo Tour, Lightbox, Reviews modal).
   - Avoid unnecessary re-renders with sensible component splitting.
