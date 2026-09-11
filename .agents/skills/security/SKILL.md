---
name: security
description: Security best practices, CORS, Helmet, JWT in HttpOnly cookies, rate limiting, and input sanitization.
---

# Security Skill

Use this skill when auditing or implementing security features.

## Checkpoints
- Helmet headers configured on Express app.
- CORS restricted to allowed origins with credentials support.
- Passwords hashed with bcrypt (salt rounds >= 10).
- JWT stored in HttpOnly, Secure, SameSite cookies.
- Rate limiting on sensitive endpoints (e.g. `/api/v1/auth`, `/api/v1/ai/concierge`).
- Schema validation rejecting unknown/unexpected fields.
