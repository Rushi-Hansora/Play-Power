# Security Architecture & Best Practices

## 1. Defense-in-Depth Strategy
- **Strict Content Security & HTTP Headers**: Express integrates `helmet` to set secure HTTP headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Strict-Transport-Security`).
- **CORS (Cross-Origin Resource Sharing)**: Configured with an explicit whitelist allowing only the authorized client frontend origin (`CLIENT_URL`).
- **Rate Limiting**: Applied via `express-rate-limit` on sensitive endpoints (authentication and AI concierge requests) to prevent Denial of Service and abuse.
- **Input Sanitization & Schema Validation**: All incoming request bodies and query parameters are validated against strict schemas, rejecting unexpected fields.

## 2. Authentication & Token Management
- **JWT (JSON Web Tokens)**:
  - Short-lived Access Tokens (15m expiration)
  - Refresh Tokens (7d expiration) stored securely
  - Token transmission via **HttpOnly**, **Secure**, and **SameSite=Strict** cookies to mitigate Cross-Site Scripting (XSS) token theft.
- **Password Security**: Passwords hashed using bcrypt with salt work factor of 10.

## 3. Data Privacy & Error Safety
- Internal database connection strings and stack traces are suppressed in production mode.
- Centralized `errorHandler` returns consistent sanitized JSON envelopes:
  ```json
  {
    "success": false,
    "errorCode": "RESOURCE_NOT_FOUND",
    "message": "The requested listing could not be found."
  }
  ```
