import mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema({
  id: String,
  url: { type: String, required: true },
  caption: String,
  category: { type: String, default: "General" },
});

const AmenitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  featured: { type: Boolean, default: false },
  icon: String,
});

const ListingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, index: true },
    type: { type: String, required: true },
    location: {
      address: String,
      city: String,
      state: String,
      country: String,
      lat: Number,
      lng: Number,
      neighborhoodDescription: String,
    },
    ratings: {
      overall: { type: Number, default: 0 },
      reviewCount: { type: Number, default: 0 },
      guestFavorite: { type: Boolean, default: false },
      categories: {
        cleanliness: Number,
        accuracy: Number,
        communication: Number,
        location: Number,
        checkIn: Number,
        value: Number,
      },
    },
    capacity: {
      guests: { type: Number, required: true },
      bedrooms: { type: Number, default: 1 },
      beds: { type: Number, default: 1 },
      baths: { type: Number, default: 1 },
    },
    pricing: {
      basePricePerNight: { type: Number, required: true },
      currency: { type: String, default: "INR" },
      cleaningFee: { type: Number, default: 0 },
    },
    host: {
      name: String,
      avatar: String,
      isSuperhost: { type: Boolean, default: false },
      tenureYears: Number,
      bio: String,
    },
    photos: [PhotoSchema],
    amenities: [AmenitySchema],
  },
  { timestamps: true }
);

export const Listing = mongoose.model("Listing", ListingSchema);
