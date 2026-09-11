import { describe, it, expect } from "vitest";
import { AIConciergeEngine } from "../services/ai/aiConciergeService";

describe("AI Concierge Agent Pipeline", () => {
  it("extracts constraints accurately from natural language prompts", () => {
    const prompt = "I want a room in Candolim with Jacuzzi under ₹6,000 and rating 4.8+";
    const constraints = AIConciergeEngine.parseConstraints(prompt);

    expect(constraints.destination).toBe("Candolim");
    expect(constraints.maxBudget).toBe(6000);
    expect(constraints.minRating).toBe(4.8);
    expect(constraints.requestedAmenities).toContain("Jacuzzi");
  });

  it("ranks candidate properties and generates transparent reasoning", () => {
    const constraints = {
      destination: "Candolim",
      maxBudget: 6000,
      minRating: 4.8,
      requestedAmenities: ["Jacuzzi"],
    };

    const ranked = AIConciergeEngine.rankCandidates(undefined, constraints);

    expect(ranked.length).toBeGreaterThan(0);
    const topPick = ranked[0];
    // Candolim Mirashya UG10 should rank #1 because it has jacuzzi in Candolim under 6000 with 4.95 rating
    expect(topPick.id).toBe("listing-candolim-mirashya-ug10");
    expect(topPick.matchScore).toBeGreaterThanOrEqual(90);
    expect(topPick.reasoning.length).toBeGreaterThan(0);
  });
});
