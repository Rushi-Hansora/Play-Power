# 05 — Security Rules

- Never commit passwords, API keys, or JWT secrets. Use `.env` and provide defaults in `.env.example`.
- Passwords must be hashed using bcrypt with salt rounds >= 10.
- JWT tokens should ideally be placed in HttpOnly, Secure, SameSite cookies.
- Apply Helmet for secure HTTP headers.
- Configure strict CORS to only allow authorized frontend origins.
- Apply rate limiting on authentication and AI concierge endpoints.
- Validate and sanitize all incoming request parameters.
