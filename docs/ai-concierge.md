# AI Travel Concierge Prototype — Feature Architecture

## 1. Overview & Positioning
The **AI Travel Concierge** is the standout differentiating feature (P2) layered on top of the production-quality clone. It allows travelers to express booking constraints naturally (e.g. "I want a room in Goa with a Jacuzzi under ₹4,000 and rating 4.8+") and returns ranked property recommendations with explainable reasoning.

> [!IMPORTANT]
> The AI Concierge is clearly presented as an innovative project differentiator, not an official Airbnb feature.

## 2. Multi-Stage Agentic Workflow

```
               [ Traveler Natural Language Prompt ]
                                |
                                v
                   +--------------------------+
                   |    1. Intent Parser      |
                   +-------------+------------+
                                 |
                                 v
                   +--------------------------+
                   | 2. Constraint Extractor  |
                   | - Destination / Location |
                   | - Max Budget / Night     |
                   | - Min Rating             |
                   | - Required Amenities     |
                   +-------------+------------+
                                 |
                                 v
                   +--------------------------+
                   | 3. Candidate Retrieval   |
                   | & Hard Filtering         |
                   +-------------+------------+
                                 |
                                 v
                   +--------------------------+
                   | 4. Multi-Factor Ranking  |
                   | - Budget Proximity (35%) |
                   | - Rating Quality (35%)   |
                   | - Distance/Match (30%)   |
                   +-------------+------------+
                                 |
                                 v
                   +--------------------------+
                   | 5. Reasoning Generator   |
                   | Transparent explanation  |
                   +-------------+------------+
                                 |
                                 v
                   +--------------------------+
                   | 6. UI Recommendation     |
                   | Cards & Booking Handoff  |
                   +--------------------------+
```

## 3. Extensibility & Real LLM Integration
The service exposes a clean abstract interface `AIConciergeService` with methods:
- `parseConstraints(prompt: string): TravelConstraints`
- `rankCandidates(candidates: Property[], constraints: TravelConstraints): RankedProperty[]`
- `generateReasoning(property: Property, constraints: TravelConstraints): string`

This architecture allows instant drop-in replacement with OpenAI (`gpt-4o-mini`), Google Gemini (`gemini-2.0-flash`), or Anthropic Claude APIs by simply changing the implementation layer without modifying UI components.
