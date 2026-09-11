# React Design Patterns

This document cataloging design patterns used throughout the application, their location, and the specific problems they solve.

## 1. Provider Pattern
- **Where**: `src/app/providers/AppProviders.jsx`, `src/contexts/GalleryContext.jsx`, `src/contexts/BookingContext.jsx`
- **Why**: Eliminates prop drilling for cross-cutting client UI concerns (such as active lightbox index, full-screen photo tour state, and reservation inputs).
- **Problem Solved**: Allows components nested deep within the hierarchy (e.g. individual photo thumbnails or sticky subnav reserve buttons) to trigger modal overlays without passing handlers through dozens of intermediary components.

## 2. Compound Component Pattern
- **Where**: Modal dialogs (`Modal`, `Modal.Header`, `Modal.Body`, `Modal.Footer`), `PhotoTourModal`, and `LightboxModal`.
- **Why**: Provides an expressive, declarative API that offers consumer flexibility while encapsulating internal state and focus management.
- **Problem Solved**: Prevents monolithic components with complex conditional prop trees.

## 3. Custom Hook Pattern
- **Where**:
  - `useGallery.js`: Encapsulates lightbox navigation, image bounds checking, and keyboard listeners.
  - `useBooking.js`: Computes nightly rate calculations, service fees, discounts, and date validation.
  - `useScrollSpy.js`: Tracks active viewport section to synchronize sticky subnav active tabs.
  - `useKeyboardNav.js`: Attaches accessible keyboard shortcuts (`ArrowLeft`, `ArrowRight`, `Escape`).
- **Why**: Separates business logic and side effects from UI rendering.
- **Problem Solved**: High testability and clean, readable UI components.

## 4. Container / Presentational Pattern
- **Where**: Feature folders (e.g. `features/property/` separating data fetching containers from presentational visual components).
- **Why**: Keeps UI components pure and deterministic, simplifying visual testing and component previewing.

## 5. Adapter Pattern
- **Where**: `src/services/property/propertyAdapter.js`
- **Why**: Normalizes raw backend API responses or mock datasets into a consistent client domain model.
- **Problem Solved**: Insulates UI components from breaking changes in API schema naming conventions.
