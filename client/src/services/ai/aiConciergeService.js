/**
 * Deterministic AI Travel Concierge Engine.
 * Implements an agentic pipeline: Intent Parsing -> Constraint Extraction -> Multi-Criteria Ranking -> Reasoning Generation.
 * Designed with an abstract interface so an external LLM (Gemini, Claude, GPT) can replace it cleanly.
 */

export const mockConciergeDataset = [
  {
    id: "listing-candolim-mirashya-ug10",
    title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
    type: "Serviced apartment",
    location: "Candolim, Goa",
    pricePerNight: 5699,
    rating: 4.95,
    distanceKm: 0.5,
    amenities: ["Jacuzzi", "Pool", "Wi-Fi", "Kitchen", "AC", "Workspace"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
    highlights: "Private outdoor jacuzzi, walking distance to Candolim beach, Superhost."
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
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80",
    highlights: "Lush tropical palm garden, resort pool, great value under ₹4,000."
  },
  {
    id: "listing-anjuna-sunset-villa",
    title: "Luxury Sunset Cliff Villa & Plunge Pool",
    type: "Entire villa",
    location: "Anjuna, Goa",
    pricePerNight: 8999,
    rating: 4.98,
    distanceKm: 7.5,
    amenities: ["Private Pool", "Sea View", "Wi-Fi", "Jacuzzi", "Chef"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    highlights: "Panoramic Arabian sea sunset views, private plunge pool, luxury finish."
  },
  {
    id: "listing-baga-beachside-penthouse",
    title: "Minimalist Beachside Penthouse with Jacuzzi",
    type: "Penthouse",
    location: "Baga, Goa",
    pricePerNight: 6200,
    rating: 4.88,
    distanceKm: 4.2,
    amenities: ["Jacuzzi", "Wi-Fi", "Balcony", "AC"],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    highlights: "Top-floor ocean breeze, rooftop jacuzzi tub, close to nightlife."
  },
  {
    id: "listing-panjim-heritage-homestay",
    title: "Heritage Portuguese 2BHK Homestay",
    type: "Heritage house",
    location: "Fontainhas, Panjim",
    pricePerNight: 4200,
    rating: 4.91,
    distanceKm: 9.8,
    amenities: ["Wi-Fi", "Kitchen", "Workspace", "AC"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
    highlights: "Historic Latin Quarter architecture, serene neighborhood, high-speed fiber."
  }
];

export class AIConciergeEngine {
  /**
   * Parses natural language input into structured travel constraints
   */
  static parseConstraints(prompt) {
    const text = prompt.toLowerCase();

    // 1. Budget extraction (e.g. "under 4000", "₹5000", "budget 6000", "6k")
    let maxBudget = null;
    const budgetMatch = text.match(/(?:under|below|budget|max|₹|\b)\s*(\d{1,2}(?:,\d{3})*|\d+k?)\s*(?:inr|rs|rupees|\/|\b)/i) ||
                        text.match(/(?:₹|rs\.?)\s*(\d+)/i);

    if (budgetMatch) {
      let raw = budgetMatch[1].replace(/,/g, "");
      if (raw.endsWith("k")) raw = parseFloat(raw) * 1000;
      maxBudget = parseInt(raw, 10);
    }

    // 2. Rating extraction (e.g. "rating 4+", "4.5+", "4.8 rating")
    let minRating = null;
    const ratingMatch = text.match(/(?:rating|rated|stars?)\s*(?:of\s*)?(\d(?:\.\d)?)\+?/i) ||
                        text.match(/(\d(?:\.\d)?)\s*\+\s*(?:rating|stars?)/i);
    if (ratingMatch) {
      minRating = parseFloat(ratingMatch[1]);
    }

    // 3. Location extraction
    let destination = "Goa";
    if (text.includes("candolim")) destination = "Candolim";
    else if (text.includes("calangute")) destination = "Calangute";
    else if (text.includes("anjuna")) destination = "Anjuna";
    else if (text.includes("baga")) destination = "Baga";
    else if (text.includes("panjim") || text.includes("fontainhas")) destination = "Panjim";

    // 4. Amenities extraction
    const requestedAmenities = [];
    if (text.includes("jacuzzi") || text.includes("hot tub")) requestedAmenities.push("Jacuzzi");
    if (text.includes("pool") || text.includes("swimming")) requestedAmenities.push("Pool");
    if (text.includes("wifi") || text.includes("wi-fi") || text.includes("work")) requestedAmenities.push("Wi-Fi");
    if (text.includes("kitchen") || text.includes("cook")) requestedAmenities.push("Kitchen");
    if (text.includes("sea") || text.includes("beach") || text.includes("sunset")) requestedAmenities.push("Sea View");

    return {
      destination,
      maxBudget,
      minRating,
      requestedAmenities,
      rawPrompt: prompt
    };
  }

  /**
   * Scores and ranks properties based on constraint alignment
   */
  static rankCandidates(dataset = mockConciergeDataset, constraints) {
    return dataset
      .map((item) => {
        let score = 100;
        const reasons = [];

        // Location alignment
        if (item.location.toLowerCase().includes(constraints.destination.toLowerCase())) {
          reasons.push(`Located directly in desired area (${item.location})`);
        } else {
          score -= 10;
        }

        // Budget alignment
        if (constraints.maxBudget) {
          if (item.pricePerNight <= constraints.maxBudget) {
            score += 15;
            reasons.push(`Well within your budget of ₹${constraints.maxBudget.toLocaleString()} (at ₹${item.pricePerNight.toLocaleString()}/night)`);
          } else {
            const overagePct = (item.pricePerNight - constraints.maxBudget) / constraints.maxBudget;
            score -= Math.min(40, Math.round(overagePct * 50));
            reasons.push(`Slightly above target budget, but offers premium amenities`);
          }
        }

        // Rating alignment
        if (constraints.minRating) {
          if (item.rating >= constraints.minRating) {
            score += 10;
            reasons.push(`Meets high rating criteria with a stellar ${item.rating} ★`);
          } else {
            score -= 20;
          }
        } else if (item.rating >= 4.9) {
          score += 10;
          reasons.push(`Top-tier guest rating of ${item.rating} ★`);
        }

        // Amenity matching
        if (constraints.requestedAmenities.length > 0) {
          const matched = constraints.requestedAmenities.filter((amenity) =>
            item.amenities.some((a) => a.toLowerCase().includes(amenity.toLowerCase()))
          );
          if (matched.length > 0) {
            score += matched.length * 15;
            reasons.push(`Features requested amenities: ${matched.join(", ")}`);
          }
        }

        // Normalize score between 60 and 99%
        const normalizedScore = Math.min(99, Math.max(60, Math.round(score)));

        return {
          ...item,
          matchScore: normalizedScore,
          reasoning: reasons.slice(0, 3)
        };
      })
      .sort((a, b) => b.matchScore - a.matchScore);
  }
}
