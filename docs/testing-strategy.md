# Testing Strategy — Airbnb Clone

## 1. Testing Pyramid

```
                /  Playwright E2E  \       (Core user flows & modals)
               /--------------------\
              /   React Testing Lib  \     (Component states & interactions)
             /------------------------\
            /      Vitest Unit Tests   \   (Pricing math, dates, AI ranking)
           +----------------------------+
```

## 2. Unit Testing Scope (Vitest)
- **Pricing Calculation**:
  - Nightly base calculation: `nights * pricePerNight`
  - Long stay discounts (e.g. 5+ nights)
  - Cleaning fee and Airbnb service fee computation
  - Tax computation
- **Date Utilities**:
  - Nights difference between check-in and checkout
  - Date validation (checkout after check-in, minimum stay)
- **AI Concierge Algorithms**:
  - Intent parser regex & tokenization
  - Candidate scoring algorithm (budget weight, rating weight, distance penalty)
  - Filter logic against candidate dataset

## 3. Integration Testing Scope
- API response contracts under `/api/v1/listings/:id` and `/api/v1/bookings`
- Centralized error response formats (`success: false`, `message`, `errorCode`)
- Authentication middleware and protected routes

## 4. End-to-End (E2E) Testing Scope (Playwright)
- **Journey 1: Listing & Sticky Subnav**:
  - Load listing page, assert title and 5-image hero render.
  - Scroll down past hero, assert sticky subnav bar becomes visible with price & reserve button.
- **Journey 2: Full Photo Tour & Lightbox**:
  - Click "Show all photos" button -> Photo Tour modal opens.
  - Click a photo thumbnail -> Lightbox opens in single-photo mode.
  - Press `ArrowRight` -> counter increments to `2 / 25`.
  - Press `Escape` -> Lightbox closes.
- **Journey 3: Reservation Card Interactions**:
  - Change check-in / check-out dates -> Verify totals update dynamically.
  - Click guest selector -> increase guest count -> Verify guest count reflects in card.
- **Journey 4: AI Travel Concierge**:
  - Click floating AI Concierge button -> Drawer slides open.
  - Enter prompt -> Verify parsed constraints and ranked recommendation cards.
  - Click "Continue to booking" -> Verify mock booking summary modal opens.
