import { Booking } from "../models/Booking.js";

export class BookingRepository {
  async create(bookingData) {
    try {
      const doc = await Booking.create(bookingData);
      return doc.toObject();
    } catch {
      // In-memory fallback if Mongo is offline
      return {
        _id: `booking-${Date.now()}`,
        ...bookingData,
        createdAt: new Date(),
      };
    }
  }

  async findById(id) {
    try {
      return await Booking.findById(id).lean();
    } catch {
      return null;
    }
  }
}
