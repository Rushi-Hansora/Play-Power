# Airbnb Listing Experience Clone — PlayPower Labs Take-Home Assignment

An original, production-minded recreation of the Airbnb listing experience built for the PlayPower Labs Full-Stack Engineering take-home assessment.

> **Originality & Academic Integrity Notice**:
> This codebase was created independently from first principles. The reference implementation (`https://airbnb-clone-umber-two.vercel.app`) was strictly utilized as a visual and behavioral specification. In full adherence to the assignment guidelines, no source code, markup, stylesheets, or proprietary assets were copied or scraped.

---

## 1. Project Overview & Priority Framework

The application delivers high visual fidelity, seamless micro-animations, and full keyboard accessibility across the core Airbnb listing experience:
- **P0 — Required Assignment**:
  - Full Listing Page with responsive desktop layout.
  - Full-Screen Photo Tour with categorized image gallery.
  - Single-Photo Lightbox with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`) and counter.
- **P1 — Engineering Quality & Polish**:
  - React 19 + Vite 8 + Tailwind CSS + Motion + Lucide React.
  - Server-state handled via TanStack Query; UI-state handled via Context API.
  - WCAG 2.1 AA keyboard navigation, focus trapping, and screen-reader semantics.
- **P2 — Differentiating Standout Feature**:
  - **AI Travel Concierge Prototype**: Deterministic multi-stage agentic workflow parsing natural language travel criteria (budget, rating, location, amenities), ranking candidates, and handing off to a safe booking confirmation.
- **P3 — MERN Backend Foundation**:
  - Node.js + Express 5 + MongoDB / Mongoose layered REST API architecture (`Route -> Controller -> Service -> Repository -> Model`).
- **P4 — DevOps & Automation**:
  - GitHub Actions CI/CD workflows, Vitest unit test suite, and complete living documentation suite.

---

## 2. Core Features

### 2.1 Listing Page (P0)
- **Top Navigation Bar**: Branded Airbnb logo, search pill with `Anywhere | Any week | Add guests`, language selector, and user profile pill with dropdown.
- **5-Photo Hero Collage**: 1 dominant hero image on the left, 4 secondary photos in a 2x2 grid on the right, hover dimming, and a floating "Show all photos" trigger.
- **Sticky SubNav Header**: Scrollspy navigation bar (`Photos`, `Amenities`, `Reviews`, `Location`) with smooth scroll and a sticky pricing snapshot + `Reserve` CTA button when scrolled past the hero.
- **Property Details**: Capacity breakdown (4 guests, 1 bed, 2 beds, 1 bath), "Guest favorite" badge, and host overview with Superhost verification.
- **Sleeping Arrangements**: Dedicated room cards with bed iconography (Bedroom 1: Queen bed, Living room: Sofa bed).
- **Amenities Showcase**: Prominently displays 10 featured amenities (Jacuzzi, Pool, Wi-Fi, Kitchen, AC) and opens a comprehensive modal with 45+ categorized amenities.
- **Reviews Breakdown**: Displays category ratings (Cleanliness 4.9, Accuracy 5.0, Communication 5.0, Location 4.9, Check-in 5.0, Value 4.8) and actual customer reviews from the reference listing.
- **Interactive Location Map**: Stylized canvas representation of Candolim, Goa with coastal water, land highlights, and centered Airbnb pin marker.
- **Sticky Reservation Card**: Floating reservation box with interactive check-in/out date inputs, guest count selector, itemized fees breakdown (`₹5,699 x 5 nights = ₹28,495`), and primary `Reserve` button.

### 2.2 Photo Tour Modal (P0)
- Full-screen modal overlay opened from "Show all photos" or hero photo clicks.
- Categorized photo sections (Living room, Bedroom, Jacuzzi & Bath, Kitchen, Outdoor & Pool).
- Smooth vertical scroll, sticky top navigation bar with back/close, share, and save controls.

### 2.3 Single-Photo Lightbox (P0)
- Dark theater viewer (`bg-black/95`) reachable from any gallery photo thumbnail.
- Previous / Next floating chevron buttons and photo counter (`X / Y`).
- Fully accessible keyboard navigation (`ArrowLeft` / `ArrowRight` to cycle, `Escape` to close).
- Fluid transitions and focus restoration.

### 2.4 Differentiator: AI Travel Concierge Prototype (P2)
- Natural language constraint parser extracting destination, maximum budget, minimum rating, and amenities.
- Multi-factor candidate ranking algorithm computing percentage match scores.
- Transparent "Why this was selected" reasoning bullets.
- Direct booking handoff opening a safe trip review and confirmation dialog.

---

## 3. Technology Stack

| Layer | Technologies | Version |
|---|---|---|
| **Frontend** | React, React DOM, Vite | React 19.3.0, Vite 8.3.0 |
| **Styling** | Tailwind CSS | 4.3.3 |
| **Motion** | Motion for React (Framer Motion) | 13.2.0 |
| **Icons** | Lucide React | 1.45.0 |
| **Server State** | TanStack React Query | 5.102.8 |
| **Client State** | React Context API | React 19 native |
| **HTTP Client** | Axios | 1.20.0 |
| **Testing** | Vitest, React Testing Library, JSDOM | Vitest 3.x / 5.x |
| **Backend** | Node.js, Express.js | Express 5.2.1 |
| **Database** | MongoDB, Mongoose | Mongoose 8.10.1 / 9.10.0 |
| **Security** | Helmet, CORS, BCrypt, JWT | Helmet 8.0.0 |
| **CI/CD** | GitHub Actions | Workflows v4 |

---

## 4. Architecture & System Design

```
+-------------------------------------------------------------------------------------------------+
|                                        Browser Client                                           |
|                           (React 19 + Vite 8 + Tailwind + Motion)                               |
+-----------------------------------------------+-------------------------------------------------+
                                                |
                 +------------------------------+------------------------------+
                 |                                                             |
   [Client UI State: Context API]                               [Server State: TanStack Query]
   - Lightbox active index                                      - Cached property listings
   - Photo Tour modal visibility                                - Reviews & ratings breakdown
   - Check-in/out dates & guests                                - Amenities & location data
   - Concierge drawer toggle                                    - Mutation cache & retry
                 |                                                             |
                 +------------------------------+------------------------------+
                                                |
                                        [Axios HTTP Client]
                                                |
                                     REST API (/api/v1)
                                                |
+-----------------------------------------------v-------------------------------------------------+
|                                     Express 5 Server Layer                                      |
|                                                                                                 |
|   [Middleware]: Helmet | CORS | RateLimiter | SchemaValidator | CentralizedErrorHandler        |
|                                               |                                                 |
|   [Controllers]: ListingController | BookingController | ConciergeController                    |
|                                               |                                                 |
|   [Services]: ListingService | BookingService | ConciergeEngine (Agent Pipeline)                |
|                                               |                                                 |
|   [Repositories]: ListingRepository | BookingRepository | UserRepository                         |
|                                               |                                                 |
|   [Mongoose Models]: Listing | Booking | User                                                   |
+-------------------------------------------------------------------------------------------------+
```

---

## 5. Folder Structure

```
airbnb-clone/
├── .agents/                    # Google Antigravity Agent Configuration
│   ├── rules/                  # Persistent engineering rules (React, UI fidelity, Backend, Security)
│   ├── skills/                 # Progressive capabilities (visual-fidelity, accessibility, testing, etc.)
│   └── agents/                 # Specialized subagent definitions (planner, ui-reviewer, qa-engineer)
│
├── docs/                       # Project Documentation Suite
│   ├── context.md              # Project context and constraints
│   ├── requirements.md         # Requirements specification
│   ├── plan.md                 # Living sprint roadmap
│   ├── architecture.md         # System architecture and scaling strategy
│   ├── decisions.md            # Architecture Decision Records (ADRs)
│   ├── versions.md             # Pinned dependency versions matrix
│   ├── ui-spec.md              # Design tokens and visual specifications
│   ├── visual-qa.md            # Visual parity checklist
│   ├── testing-strategy.md     # Testing pyramid and test scope
│   ├── security.md             # Security and defense-in-depth policies
│   ├── devops.md               # CI/CD and deployment procedures
│   ├── ai-concierge.md         # AI Travel Concierge architecture
│   ├── smoke-test-checklist.md # 18-point verification checklist
│   ├── storage-strategy.md     # LocalStorage / SessionStorage / Cookie policy
│   ├── seo.md                  # Metadata and semantic hierarchy strategy
│   ├── react-patterns.md       # Documented React design patterns
│   ├── sdlc.md                 # Software development lifecycle
│   └── ai-prompt-sequence.md   # Exact sequence of AI prompts executed
│
├── client/                     # Frontend Application (React 19 + Vite 8)
│   ├── src/
│   │   ├── app/                # App.jsx, AppProviders, queryClient
│   │   ├── components/         # Common, Layout, Gallery, Booking, Property, Reviews, Concierge
│   │   ├── contexts/           # GalleryContext, BookingContext, ConciergeContext
│   │   ├── data/               # High-fidelity mock listing data (Candolim, Goa)
│   │   ├── services/           # AI Concierge Engine & API adapters
│   │   ├── test/               # Vitest unit test suites
│   │   ├── utils/              # formatters.js, cn.js
│   │   ├── index.css           # Tailwind CSS tokens & scrollbar styling
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend API Service (Node.js + Express 5)
│   ├── src/
│   │   ├── config/             # env.js, db.js
│   │   ├── controllers/        # REST API controllers
│   │   ├── services/           # Domain business logic & ranking algorithms
│   │   ├── repositories/       # Data persistence abstractions
│   │   ├── models/             # Mongoose schemas (Listing, Booking, User)
│   │   ├── routes/             # REST endpoints (/api/v1)
│   │   ├── middleware/         # Security, validation, error handler
│   │   ├── errors/             # AppError typed error hierarchy
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
├── .github/                    # GitHub Actions CI/CD Workflows
│   └── workflows/
│       ├── frontend-ci.yml
│       ├── backend-ci.yml
│       └── deploy.yml
│
├── GEMINI.md                   # Antigravity Workspace Brain
├── AGENTS.md                   # Multi-Agent Contract
├── CLAUDE.md                   # Claude / Antigravity Command Guide
├── .env.example
├── .gitignore
└── README.md
```

---

## 6. Installation & Local Setup

### Prerequisites
- Node.js >= 20.x (tested on v25.2.1)
- npm >= 10.x (tested on v11.6.2)

### Step 1: Install Frontend Client
```bash
cd client
npm install
```

### Step 2: Install Backend Server
```bash
cd ../server
npm install
```

---

## 7. Development & Execution Commands

### Start Frontend Application
```bash
cd client
npm run dev
```
Open your browser at `http://localhost:5173`.

### Start Backend API Server
```bash
cd server
npm run dev
# Or production start:
npm start
```
Server runs at `http://localhost:5000`. Health check: `http://localhost:5000/health`.

---

## 8. Testing Commands

### Frontend Unit & Component Tests (Vitest)
```bash
cd client
npm test
```
Executes all test suites:
- `bookingMath.test.js`: Nightly price calculations, cleaning fees, service fees.
- `aiConcierge.test.js`: Natural language constraint parser and ranking engine.
- `formatters.test.js`: Currency formatting and date range calculations.

### Frontend Production Build Verification
```bash
cd client
npm run build
```

---

## 9. Antigravity AI-Native Workflow

This project was developed using **Google Antigravity's progressive disclosure framework**:
1. **Workspace Rules** (`.agents/rules/`): Persistent constraints enforcing zero-plagiarism, state separation, and security.
2. **Specialized Skills** (`.agents/skills/`): Modular capabilities loaded dynamically (`ui-implementation`, `visual-fidelity`, `react-engineering`, `accessibility`, `backend-engineering`, `ai-concierge`, `testing`).
3. **Subagent Personas** (`.agents/agents/`): Role-defined engineering agents (`planner`, `frontend-engineer`, `backend-engineer`, `ui-reviewer`, `qa-engineer`, `security-reviewer`, `devops-engineer`).
4. **Living Documentation** (`docs/`): Real-time ADRs, audit logs, and prompt sequence tracking.

Refer to [`docs/ai-prompt-sequence.md`](docs/ai-prompt-sequence.md) for the exact 12-step AI prompt history used during development.

---

## 10. License & Submission
Developed as an engineering assignment submission for **PlayPower Labs**.
Private repository — not for public distribution.
