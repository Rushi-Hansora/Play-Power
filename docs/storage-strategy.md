# Browser Storage Strategy

## 1. Storage Classification Matrix

| Mechanism | Purpose | Scope | Security / Sensitivity |
|---|---|---|---|
| **localStorage** | Persistent user preferences, favorite listing IDs, theme preference | Long-term cross-session | Non-sensitive data only. Never store JWTs or passwords. |
| **sessionStorage** | Ephemeral search filters, active booking draft, temporary checkout dates | Tab-specific lifecycle | Intermediate UI state; cleared upon browser tab close. |
| **HttpOnly Cookies** | Authentication JWTs (access token, refresh token) | Domain-scoped | Maximum security; inaccessible to client-side JS (XSS protected). |
| **TanStack Query Cache** | In-memory server-state cache for listings, reviews, properties | In-memory (active SPA session) | Fast access, automatic background revalidation, zero persistence risk. |

## 2. Decision Rationale
- **Zero Sensitive Data in localStorage**: Storing authentication tokens in `localStorage` exposes users to XSS token exfiltration attacks. In production, authentication tokens are conveyed via HttpOnly, Secure, SameSite cookies.
- **In-Memory Query Cache**: Server responses for property metadata, reviews, and availability are kept in the TanStack Query client memory cache with a 5-minute `staleTime`, eliminating redundant HTTP calls while navigating between views.
