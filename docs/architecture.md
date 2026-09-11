# Architecture Specification — Airbnb Listing Clone

## 1. System Architecture Diagram

```
+---------------------------------------------------------------------------------------------------------+
|                                              CLIENT LAYER                                               |
|                                                                                                         |
|   +-------------------------------------------------------------------------------------------------+   |
|   |                            React 19 Application (Vite 8 SPA)                                     |   |
|   |                                                                                                 |   |
|   |   +----------------------------------+             +----------------------------------------+   |   |
|   |   |        UI / Client State         |             |              Server State              |   |   |
|   |   |          (Context API)           |             |           (TanStack Query)             |   |   |
|   |   |  - Gallery Modal State           |             |  - Property Listing Details            |   |   |
|   |   |  - Lightbox Active Index         |             |  - Reviews & Host Information          |   |   |
|   |   |  - Reservation Card Inputs       |             |  - Amenities & Location GeoData        |   |   |
|   |   |  - AI Concierge Drawer Open      |             |  - Mock Booking Mutations              |   |   |
|   |   +-----------------+----------------+             +-------------------+--------------------+   |   |
|   |                     |                                                  |                        |   |
|   |                     +-----------------------+--------------------------+                        |   |
|   |                                             |                                                   |   |
|   |                                 [Axios HTTP Client Service]                                     |   |
|   +---------------------------------------------+---------------------------------------------------+   |
+-------------------------------------------------|-------------------------------------------------------+
                                                  |
                                       HTTPS / REST (/api/v1)
                                                  |
+-------------------------------------------------v-------------------------------------------------------+
|                                             SERVER LAYER                                                |
|                                                                                                         |
|   +-------------------------------------------------------------------------------------------------+   |
|   |                                Express 5 Application (Node.js)                                  |   |
|   |                                                                                                 |   |
|   |    [Middleware Layer]: Helmet | CORS | RateLimiter | RequestValidator | CentralizedErrorHandler|   |   |
|   |                                             |                                                   |   |
|   |    [Controllers Layer]: ListingController | BookingController | ConciergeController            |   |   |
|   |                                             |                                                   |   |
|   |    [Services Layer]: ListingService | BookingService | ConciergeEngine (Agent Pipeline)         |   |   |
|   |                                             |                                                   |   |
|   |    [Repository Layer]: ListingRepository | BookingRepository | UserRepository                   |   |   |
|   +---------------------------------------------+---------------------------------------------------+   |
|                                                 |                                                       |
|                                         [Mongoose ODM]                                                  |
|                                                 |                                                       |
|                                         [MongoDB Database]                                              |
+---------------------------------------------------------------------------------------------------------+
```

## 2. Layer Responsibilities

### 2.1 Presentation Layer (React 19 + Tailwind CSS)
- **Component Separation**:
  - `components/common/`: Primitive reusable components (Modal, Button, RatingStars, Badge).
  - `components/layout/`: Global navigation and sticky subnav.
  - `components/gallery/`: 5-photo collage hero, full-screen categorized photo tour modal, single-photo lightbox modal.
  - `components/booking/`: Sticky reservation card with real-time price computation.
  - `components/concierge/`: AI travel concierge floating trigger and recommendation drawer.
- **Styling**: Tailwind CSS utility classes customized with Airbnb brand palette (`#FF385C`, `#222222`, `#717171`, `#DDDDDD`).
- **Motion**: Fluid animations using Motion for React with `prefers-reduced-motion` compliance.

### 2.2 Client State Architecture
- **Server State (TanStack Query)**: Fetches and caches listings, reviews, and booking transactions. Automatically handles query caching (`staleTime: 5 mins`), loading skeletons, and background refetching.
- **Client UI State (Context API)**:
  - `GalleryContext`: Controls photo tour visibility, lightbox active photo index, and keyboard event bindings.
  - `BookingContext`: Holds check-in/out dates, adult/child guest breakdown, and selected optional add-ons.
  - `ConciergeContext`: Manages AI assistant chat messages, drawer state, and active recommendations.

### 2.3 Backend Service Layer (Express + Mongoose)
- Strict single responsibility principle:
  - Controllers handle HTTP transport and status codes.
  - Services execute business rules, pricing math, and recommendation ranking.
  - Repositories isolate database queries from business logic.
- Typed error classes (`AppError`, `NotFoundError`, `ValidationError`) caught by centralized error middleware.

## 3. Production Scaling Strategy
1. **Frontend**: Static assets distributed via Edge CDN (Vercel / Cloudflare). Route-based code splitting and image lazy loading ensure sub-second First Contentful Paint.
2. **Backend**: Stateless Express services horizontally scalable behind an API gateway or load balancer.
3. **Database**: MongoDB with replica sets, index optimization on listing geo-coordinates, dates, and ratings. Future evolution path documents migration to MongoDB Atlas Search or Elasticsearch.
4. **Caching**: Redis layer for high-throughput listing caches and rate limiting.
