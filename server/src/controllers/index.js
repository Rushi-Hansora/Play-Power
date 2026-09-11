import { ListingService } from "../services/listingService.js";
import { BookingService } from "../services/bookingService.js";
import { ConciergeService } from "../services/conciergeService.js";

const listingService = new ListingService();
const bookingService = new BookingService();
const conciergeService = new ConciergeService();

export const getListing = async (req, res, next) => {
  try {
    const listing = await listingService.getListingDetails(req.params.id);
    res.status(200).json({ success: true, data: listing });
  } catch (error) {
    next(error);
  }
};

export const getListings = async (req, res, next) => {
  try {
    const result = await listingService.getAllListings(req.query);
    res.status(200).json({ success: true, data: result.listings, pagination: result.pagination });
  } catch (error) {
    next(error);
  }
};

export const createBooking = async (req, res, next) => {
  try {
    const booking = await bookingService.createBooking(req.body);
    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    next(error);
  }
};

export const handleConciergeQuery = (req, res, next) => {
  try {
    const result = conciergeService.processPrompt(req.body.prompt);
    res.status(200).json({ success: true, ...result });
  } catch (error) {
    next(error);
  }
};
