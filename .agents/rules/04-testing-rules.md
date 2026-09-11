# 04 — Testing Rules

- Testing pyramid: Unit tests -> Integration tests -> End-to-End (E2E) tests.
- Unit tests: Test calculation logic (price breakdown, fee computations), date utilities, filter logic, and AI concierge ranking algorithms.
- Integration tests: Test API route handling, validation middleware, and service responses.
- E2E tests (Playwright): Test user journeys:
  1. Listing page renders hero images, details, amenities, and location.
  2. Sticky subnav bar appears on scroll with Reserve button.
  3. Clicking "Show all photos" opens full-screen Photo Tour.
  4. Clicking an image opens Lightbox with next/previous controls and Escape dismissal.
  5. Reservation card date and guest selectors update price calculation.
  6. AI Concierge parses prompt, displays recommendations, and allows booking handoff.
