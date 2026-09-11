# UI & Visual Specification — Airbnb Clone

## 1. Color Palette & Design Tokens
- **Airbnb Brand Coral**: `#FF385C` (Hover: `#E00B41`, Active: `#D70466`)
- **Charcoal Text (Primary)**: `#222222` (High contrast, clean typography)
- **Soft Slate Text (Secondary)**: `#717171` (Subtitles, ratings count, dates)
- **Light Border Gray**: `#DDDDDD` (Card borders, dividers)
- **Subtle Surface Border**: `#EBEBEB` (Table headers, secondary separators)
- **Background Light Gray**: `#F7F7F7` (Pill hover, subtle backgrounds)
- **White (Surface)**: `#FFFFFF`

## 2. Typography
- **Font Family**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Scale**:
  - Main Listing Title: `26px` (Font weight: `600`)
  - Section Headings: `22px` (Font weight: `600`)
  - Card Headings / Subsections: `16px` - `18px` (Font weight: `600`)
  - Body Copy: `15px` - `16px` (Font weight: `400`, line height: `1.5`)
  - Captions & Badges: `12px` - `14px` (Font weight: `500` - `600`)

## 3. Spacing & Container Width
- **Max Width**: `1280px` (`max-w-7xl mx-auto px-6 md:px-12`)
- **Vertical Spacing**: `py-8` between major sections with subtle horizontal dividers (`border-b border-gray-200`).

## 4. Key Interactive Components Specification

### 4.1 Header & Navigation
- Fixed/Static top header with Airbnb icon, centered search pill (`Anywhere | Any week | Add guests` + search button), right profile menu.
- Dropdown menu with avatar pill (`hamburger icon + user avatar circle`).

### 4.2 Hero Image Gallery (5-Photo Collage)
- Left photo: `col-span-2 row-span-2`, aspect ratio ~4:3 or full height.
- Right photos: 4 photos in a 2x2 grid.
- Border radius: `rounded-2xl overflow-hidden`.
- Image hover: subtle dark overlay transition (`brightness-95`).
- "Show all photos" floating pill: bottom right, white background with border, subtle shadow, `14px font-medium`, grid icon.

### 4.3 SubNavHeader (Scrollspy Sticky Bar)
- Appears when user scrolls past the hero gallery.
- Sticky at `top-0 z-40 bg-white border-b border-gray-200`.
- Left: navigation tabs with active underline indicator (`Photos`, `Amenities`, `Reviews`, `Location`).
- Right: reservation snapshot with `₹28,499 for 5 nights`, `★ 4.95 · 19 reviews`, and compact pink `Reserve` CTA button.

### 4.4 Sticky Reservation Card
- Sticky side card inside right column (`top-28`).
- Border: `1px solid #DDDDDD`, Box shadow: `shadow-xl`, Border radius: `rounded-xl`.
- Header: Price per night (`₹5,699 / night`) or total price (`₹28,499 for 5 nights`).
- Selector block: Two-column check-in/checkout dates, bottom full-width guest count selector.
- Full-width pink `Reserve` button with subtle gradient.
- Calculation table:
  - `₹5,699 x 5 nights`: `₹28,495`
  - `Cleaning fee`: `₹1,200`
  - `Airbnb service fee`: `₹2,804`
  - `Total before taxes`: `₹32,499`

### 4.5 Full-Screen Photo Tour
- Modal overlay with `bg-white fixed inset-0 z-50 overflow-y-auto`.
- Top sticky header with back button, share, and save icons.
- Categorized sections: Living room, Bedroom, Bathroom, Amenities, Exterior.
- Thumbnail grid layout with smooth scroll.

### 4.6 Single-Photo Lightbox
- Full-screen black/dark overlay (`bg-black/95 fixed inset-0 z-50`).
- Top bar: Close `X` button, photo counter (`1 / 25`), share and heart icons.
- Floating circular chevron buttons on left (`<`) and right (`>`) with hover states.
- Animated image transitions with keyboard navigation support (`ArrowLeft`, `ArrowRight`, `Escape`).
