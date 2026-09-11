import { Listing } from "../models/Listing.js";

// Seed/Fallback Candolim listing representation
export const fallbackListing = {
  _id: "listing-candolim-mirashya-ug10",
  id: "listing-candolim-mirashya-ug10",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  type: "Entire serviced apartment in Candolim, India",
  location: {
    address: "Candolim, Goa, India",
    city: "Candolim",
    state: "Goa",
    country: "India",
    lat: 15.518,
    lng: 73.766,
    neighborhoodDescription: "Located in the heart of Candolim, Amor do Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions."
  },
  ratings: {
    overall: 4.95,
    reviewCount: 19,
    guestFavorite: true,
    categories: {
      cleanliness: 4.9,
      accuracy: 5.0,
      communication: 5.0,
      location: 4.9,
      checkIn: 5.0,
      value: 4.8
    }
  },
  capacity: { guests: 4, bedrooms: 1, beds: 2, baths: 1 },
  pricing: { basePricePerNight: 5699, cleaningFee: 1200, currency: "INR" },
  host: {
    name: "Nitish",
    isSuperhost: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    tenureYears: 4,
    bio: "Passionate hospitality host in North Goa."
  }
};

export class ListingRepository {
  async findById(id) {
    try {
      const doc = await Listing.findById(id).lean();
      if (doc) return doc;
    } catch {
      // Fallback if Mongo connection is absent or mock id passed
    }
    if (id === fallbackListing.id || !id) {
      return fallbackListing;
    }
    return null;
  }

  async findAll({ limit = 10, skip = 0 }) {
    try {
      const docs = await Listing.find().limit(limit).skip(skip).lean();
      if (docs && docs.length > 0) return docs;
    } catch {
      // Fallback
    }
    return [fallbackListing];
  }
}
