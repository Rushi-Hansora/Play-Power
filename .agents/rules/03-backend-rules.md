# 03 — Backend Architecture Rules

- Follow strict layer separation:
  Route -> Controller -> Service -> Repository -> Mongoose Model -> Database.
- Controllers are thin: parse requests, call services, format JSON response envelope `{ success, data, pagination }`.
- Services contain all business logic, validation rules, and AI concierge recommendation calculations.
- Repositories encapsulate database access and querying abstractions.
- Centralized error handling using typed `AppError` subclasses. Never leak stack traces in production.
- All mutating endpoints require request validation middleware.
