# Implementation Roadmap — Sprint Plan

## Sprint 0: Requirements & Engineering Setup
- [x] Analyze assignment PDF and reference screenshots
- [x] Define architecture, technical decisions, and pinned dependency versions
- [x] Configure `.agents/` rules, skills, and subagent configs
- [x] Scaffold initial documentation suite (`docs/`)
- [ ] Initialize `client/` and `server/` codebases

## Sprint 1: Listing Page (P0 Parity)
- [ ] Implement Airbnb Header, Search pill, and User profile navigation
- [ ] Build 5-image Hero Gallery with hover effects and "Show all photos" trigger
- [ ] Implement SubNavHeader with scrollspy and sticky Reserve snapshot
- [ ] Implement Property Header, Host summary, Sleeping arrangements, and Amenities
- [ ] Implement Reviews section with category breakdown and review cards
- [ ] Implement Interactive Location Map canvas with Candolim neighborhood guide
- [ ] Implement Sticky Reservation Card with dynamic date/guest pricing calculation

## Sprint 2: Photo Tour & Lightbox (P0 Parity)
- [ ] Build full-screen categorized Photo Tour modal with smooth scroll
- [ ] Build single-photo Lightbox modal with next/previous controls
- [ ] Implement keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`)
- [ ] Add Motion slide & fade animations between photos
- [ ] Implement focus trapping and accessibility labels

## Sprint 3: Visual QA & Micro-interactions (P1)
- [ ] Audit against Candolim Goa reference screenshots (spacings, radii, typography, borders, shadows)
- [ ] Polish hover states, tooltips, transitions, and loading states
- [ ] Document audit findings in `docs/visual-qa.md`

## Sprint 4: AI Travel Concierge Prototype (P2)
- [ ] Build AI Concierge drawer and chat/query interface
- [ ] Implement deterministic intent parser and constraint extractor
- [ ] Implement candidate ranking algorithm with match score and reasoning
- [ ] Build booking handoff to mock reservation summary

## Sprint 5: MERN Backend Foundation (P3)
- [ ] Set up Express 5 server with REST endpoints under `/api/v1`
- [ ] Implement Mongoose models (`Listing`, `Booking`, `User`)
- [ ] Implement Controller, Service, and Repository layers
- [ ] Implement centralized error handling, validation, CORS, and Helmet

## Sprint 6: Testing & DevOps (P4)
- [ ] Author Vitest unit tests for pricing, date calculations, and AI ranking
- [ ] Author Playwright E2E tests for gallery, lightbox, booking, and concierge flows
- [ ] Configure GitHub Actions workflows (`frontend-ci.yml`, `backend-ci.yml`, `deploy.yml`)
- [ ] Verify smoke test checklist (`docs/smoke-test-checklist.md`)

## Sprint 7: Final Review & Deliverable Packaging
- [ ] Execute complete build verification (`npm run build`)
- [ ] Verify zero console errors, broken images, or dead code
- [ ] Update `docs/progress.md` and complete `README.md`
