# DevOps & CI/CD Strategy

## 1. Automation Workflows (.github/workflows/)

### 1.1 Frontend CI (`frontend-ci.yml`)
- Triggered on push / pull request affecting `client/**`.
- Steps:
  1. Node.js setup (v25.x).
  2. Install dependencies with `npm ci`.
  3. Run linter (`npm run lint`).
  4. Run unit and component test suites (`npm run test`).
  5. Run production build check (`npm run build`).

### 1.2 Backend CI (`backend-ci.yml`)
- Triggered on push / pull request affecting `server/**`.
- Steps:
  1. Node.js setup (v25.x).
  2. Install dependencies with `npm ci`.
  3. Run backend linting and unit tests (`npm test`).
  4. Check health endpoint responsiveness.

### 1.3 Production Deployment (`deploy.yml`)
- Automates continuous deployment to Vercel (frontend) upon merge to `main`.
- Validates bundle size limits, asset compression, and required environment variables.

## 2. Environment Configuration
- All sensitive variables (`MONGO_URI`, `JWT_SECRET`) are configured as repository secrets.
- Developers use `.env.example` as a template for local setups.
