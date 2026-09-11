import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    listingId: { type: String, required: true, index: true },
    listingTitle: String,
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    nights: { type: Number, required: true },
    guests: {
      adults: { type: Number, default: 1 },
      children: { type: Number, default: 0 },
      infants: { type: Number, default: 0 },
    },
    pricing: {
      basePricePerNight: Number,
      nightsTotal: Number,
      cleaningFee: Number,
      serviceFee: Number,
      totalAmount: Number,
      currency: { type: String, default: "INR" },
    },
    status: {
      type: String,
      enum: ["confirmed", "pending", "cancelled"],
      default: "confirmed",
    },
    contactEmail: String,
    contactName: String,
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", BookingSchema);
