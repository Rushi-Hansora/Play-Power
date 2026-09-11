# Requirements Specification — Airbnb Clone

## 1. Functional Requirements

### 1.1 Listing Page (P0)
- **Header Navigation**:
  - Airbnb branded logo.
  - Search pill with segments: `Anywhere`, `Any week`, `Add guests` + search icon.
  - Right controls: `Airbnb your home` link, language/currency globe icon, user avatar pill button with dropdown menu.
- **Sub-Navigation Sticky Bar**:
  - Sticky header appearing when user scrolls past hero image.
  - Left navigation tabs with scrollspy: `Photos`, `Amenities`, `Reviews`, `Location`.
  - Right compact reservation widget: pricing snippet (`₹28,499 for 5 nights · ★ 4.95 · 19 reviews`) and pink `Reserve` CTA button.
- **Property Header**:
  - Listing Title: `Romantic Jacuzzi 1BHK Candolim | Mirashya UG10`.
  - Action buttons: Share button with icon, Save/Favorite button with heart toggle.
- **Hero Image Gallery**:
  - 5-photo grid (1 primary hero on the left, 4 secondary photos in a 2x2 grid on the right).
  - Hover dimming effect on individual photos.
  - Floating pill button: "Show all photos" with grid icon positioned in bottom right corner.
- **Property & Host Information**:
  - Property type: `Entire serviced apartment in Candolim, India`.
  - Capacity: `4 guests · 1 bedroom · 2 beds · 1 bath`.
  - Badges: `Guest favorite` pill badge and star rating (`4.95 ★ · 19 reviews`).
  - Host snapshot: Avatar, host name ("Nitish"), Superhost badge, co-hosts.
- **Sleeping Arrangements**:
  - Bed card 1: Bedroom 1 (1 queen bed).
  - Bed card 2: Living room (1 sofa bed).
- **Amenities**:
  - Prominent grid showing Jacuzzi, Wi-Fi, Pool, Kitchen, Dedicated workspace, Free parking, Air conditioning, Balcony.
  - "Show all 45 amenities" modal dialog.
- **Reviews**:
  - Category breakdown: Cleanliness, Accuracy, Communication, Location, Check-in, Value.
  - 2-column grid of review cards with reviewer avatar, name, tenure, date ("May 2026"), and review commentary.
  - "Show all 19 reviews" modal trigger.
- **Location & Neighborhood**:
  - Interactive map canvas with custom Candolim, Goa pinpoint indicator and circle highlight.
  - Neighborhood guide text ("Amor do Goa offers a peaceful stay...").
- **Policies & Information**:
  - Host details, House rules, Safety & property info, Cancellation policy.
- **Sticky Reservation Card**:
  - Pricing display: `₹5,699 / night` with total calculation `₹28,499 for 5 nights`.
  - Check-in / Checkout date picker.
  - Guest selector dropdown (Adults, Children, Infants, Pets).
  - Fee breakdown: 5 nights, Cleaning fee, Airbnb service fee, Taxes, Total.
  - Primary CTA: `Reserve`.

### 1.2 Photo Tour (P0)
- Full-screen modal overlay opened from "Show all photos" or clicking hero photos.
- Categorized photo sections (Living room, Bedroom, Bathroom, Amenities, Exterior).
- High-res photo cards, sticky top bar with back/close button, share, and save.
- Smooth scroll and focus trapping.

### 1.3 Lightbox (P0)
- Full-screen single photo viewer reachable from any photo thumbnail.
- Previous / Next navigation buttons with keyboard `ArrowLeft` / `ArrowRight`.
- Top header with photo counter indicator (`1 / 25`) and close button (`Escape`).
- Smooth Motion transitions between images.

### 1.4 AI Travel Concierge Prototype (P2)
- Conversational / drawer assistant.
- Natural-language query parsing (budget, rating, distance, amenities).
- Multi-candidate ranking with transparent match score and reasoning.
- Booking handoff to reservation summary.

## 2. Non-Functional Requirements
- Desktop-first responsive layout (standard desktop, laptop, tablet).
- WCAG 2.1 AA keyboard accessibility and screen-reader semantics.
- Sub-second UI interactions with optimized lazy loading.
- Centralized error handling and structured logging.
