# SEO & Semantic Markup Strategy

## 1. Single Page Application (SPA) SEO Considerations
Even though Vite produces a client-side Single Page Application (SPA), we incorporate essential SEO best practices to ensure search engine crawlability, social graph sharing, and accessibility.

## 2. Implemented Strategies
- **Semantic HTML5 Hierarchy**:
  - `header`, `nav`, `main`, `section`, `article`, and `footer` landmarks.
  - Exactly one `<h1>` per page representing the listing title (`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10`).
  - Strict hierarchical `<h2>` for major sections (Photos, Amenities, Reviews, Location, Policies).
- **Meta & Open Graph Tags**:
  - `title`: `Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 - Airbnb Clone`
  - `meta name="description"`: High-fidelity description summarizing property details, rating (4.95), and location in Candolim, Goa.
  - `og:title`, `og:description`, `og:image`, and `og:type` tags for rich link previews.
- **Descriptive Image Alt Text**:
  - Every photo element includes descriptive alt tags (e.g. `Romantic Jacuzzi suite with warm ambient lighting`, `Spacious living room with modern sofa bed`).
- **Future SSR Migration Path**:
  - The feature-oriented component architecture is decoupled from DOM-specific APIs (`window`, `document`), allowing smooth future transition to Next.js or React Router v7 framework mode if server-side rendering is required for high-volume indexing.
