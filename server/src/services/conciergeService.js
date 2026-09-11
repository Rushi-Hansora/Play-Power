export const serverMockCandidates = [
  {
    id: "listing-candolim-mirashya-ug10",
    title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
    type: "Serviced apartment",
    location: "Candolim, Goa",
    pricePerNight: 5699,
    rating: 4.95,
    distanceKm: 0.5,
    amenities: ["Jacuzzi", "Pool", "Wi-Fi", "Kitchen", "AC"],
  },
  {
    id: "listing-calangute-garden-studio",
    title: "Tropical Garden Studio with Shared Pool",
    type: "Studio apartment",
    location: "Calangute, Goa",
    pricePerNight: 3899,
    rating: 4.82,
    distanceKm: 2.8,
    amenities: ["Pool", "Wi-Fi", "Kitchen", "AC"],
  },
  {
    id: "listing-anjuna-sunset-villa",
    title: "Luxury Sunset Cliff Villa & Plunge Pool",
    type: "Entire villa",
    location: "Anjuna, Goa",
    pricePerNight: 8999,
    rating: 4.98,
    distanceKm: 7.5,
    amenities: ["Private Pool", "Sea View", "Wi-Fi", "Jacuzzi"],
  },
];

export class ConciergeService {
  processPrompt(prompt) {
    if (!prompt || typeof prompt !== "string") {
      return { recommendations: [], message: "Please provide a valid prompt." };
    }

    const lower = prompt.toLowerCase();
    let destination = "Goa";
    if (lower.includes("candolim")) destination = "Candolim";
    else if (lower.includes("anjuna")) destination = "Anjuna";
    else if (lower.includes("calangute")) destination = "Calangute";

    let maxBudget = null;
    const bMatch = lower.match(/(?:under|below|budget|₹)\s*(\d+)/);
    if (bMatch) maxBudget = parseInt(bMatch[1], 10);

    const scored = serverMockCandidates.map((c) => {
      let score = 90;
      const reasons = [];

      if (c.location.includes(destination)) {
        score += 5;
        reasons.push(`Direct match in ${destination}`);
      }

      if (maxBudget && c.pricePerNight <= maxBudget) {
        score += 5;
        reasons.push(`Within ₹${maxBudget} budget`);
      }

      if (lower.includes("jacuzzi") && c.amenities.includes("Jacuzzi")) {
        score += 5;
        reasons.push("Features your requested Jacuzzi");
      }

      return {
        ...c,
        matchScore: Math.min(99, score),
        reasons,
      };
    });

    scored.sort((a, b) => b.matchScore - a.matchScore);

    return {
      success: true,
      constraints: { destination, maxBudget },
      recommendations: scored,
    };
  }
}
