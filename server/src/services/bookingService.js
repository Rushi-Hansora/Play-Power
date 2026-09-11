import { BookingRepository } from "../repositories/bookingRepository.js";
import { ListingRepository } from "../repositories/listingRepository.js";
import { ValidationError, NotFoundError } from "../errors/AppError.js";

export class BookingService {
  constructor(
    bookingRepo = new BookingRepository(),
    listingRepo = new ListingRepository()
  ) {
    this.bookingRepo = bookingRepo;
    this.listingRepo = listingRepo;
  }

  async createBooking(payload) {
    const { listingId, checkIn, checkOut, guests } = payload;

    if (!listingId || !checkIn || !checkOut) {
      throw new ValidationError("listingId, checkIn, and checkOut are required.");
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      throw new ValidationError("Invalid check-in or checkout date format.");
    }

    if (checkOutDate <= checkInDate) {
      throw new ValidationError("Checkout date must be after check-in date.");
    }

    const listing = await this.listingRepo.findById(listingId);
    if (!listing) {
      throw new NotFoundError("Listing");
    }

    const diffDays = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const nights = diffDays > 0 ? diffDays : 1;

    const basePrice = listing.pricing.basePricePerNight || 5699;
    const cleaningFee = listing.pricing.cleaningFee || 1200;
    const nightsTotal = basePrice * nights;
    const serviceFee = Math.round(nightsTotal * 0.098);
    const totalAmount = nightsTotal + cleaningFee + serviceFee;

    const bookingRecord = {
      listingId,
      listingTitle: listing.title,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      nights,
      guests: guests || { adults: 2, children: 0, infants: 0 },
      pricing: {
        basePricePerNight: basePrice,
        nightsTotal,
        cleaningFee,
        serviceFee,
        totalAmount,
        currency: "INR",
      },
      status: "confirmed",
    };

    return await this.bookingRepo.create(bookingRecord);
  }
}
