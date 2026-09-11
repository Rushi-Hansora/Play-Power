---
name: ai-concierge
description: Multi-stage agentic workflow for travel constraint extraction, candidate filtering, ranking, and recommendation explanations.
---

# AI Concierge Skill

Use this skill when designing or enhancing the AI Travel Concierge differentiator.

## Pipeline
1. **User Request Input**: Natural language string (e.g. "I want a room under ₹4,000 with rating 4+ within 10 km of Candolim Beach").
2. **Intent & Constraint Parser**: Extracts destination, max budget, min rating, radius km, amenities.
3. **Property Search & Filtering**: Filters candidates matching hard constraints.
4. **Ranking Engine**: Computes match scores (0-100%) based on budget closeness, rating, and distance.
5. **Reasoning Generator**: Generates transparent human-readable explanations for why each candidate was selected.
6. **Booking Handoff**: Connects recommendation card to the reservation workflow.
