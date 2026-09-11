# CLAUDE.md — Agent Workspace Guide

## Overview
This repository contains an Airbnb Listing Experience clone built for the PlayPower Labs Take-Home Assignment.

## Commands
- `npm run dev` (inside `client/`): Starts the Vite dev server at `http://localhost:5173`.
- `npm run build` (inside `client/`): Runs Vite production build.
- `npm test` (inside `client/`): Runs Vitest unit and component tests.
- `npm run test:e2e` (inside `client/`): Runs Playwright end-to-end tests.
- `npm run start` (inside `server/`): Starts the Node.js / Express backend server.
- `npm run dev` (inside `server/`): Starts backend in development mode with nodemon.

## Core Rules & Conventions
1. **Originality**: Every component, style utility, and mock data object is created independently. The reference at `https://airbnb-clone-umber-two.vercel.app` serves solely as a visual and behavioral specification.
2. **Component Architecture**:
   - `components/common/`: Reusable primitive UI components (Modal, Button, Badge, RatingStars, Skeleton).
   - `components/layout/`: Global layout components (Header, SubNavHeader, Footer).
   - `components/gallery/`: HeroGallery, PhotoTourModal, LightboxModal.
   - `components/booking/`: StickyBookingCard, DatePicker, GuestSelector.
   - `components/property/`: PropertyHeader, SleepingArrangements, AmenitiesGrid, LocationMap, HostSection, RulesSection.
   - `components/reviews/`: ReviewsSummary, ReviewCards, ReviewsModal.
   - `components/concierge/`: AIConciergeDrawer, RecommendationCard, BookingSummaryModal.
3. **Naming**:
   - Components: `PascalCase.jsx`
   - Hooks: `useCamelCase.js`
   - Services/Utils: `camelCase.js`
   - Constants: `UPPER_SNAKE_CASE`
4. **Visual Guidelines**:
   - Airbnb Coral: `#FF385C`
   - Dark Slate/Charcoal: `#222222`
   - Secondary Text: `#717171`
   - Border Grey: `#DDDDDD` / `#EBEBEB`
   - Hover Background: `#F7F7F7`
