import { Router } from "express";
import {
  getListing,
  getListings,
  createBooking,
  handleConciergeQuery,
} from "../controllers/index.js";

export const apiRouter = Router();

// Listings REST APIs
apiRouter.get("/listings", getListings);
apiRouter.get("/listings/:id", getListing);

// Booking REST APIs
apiRouter.post("/bookings", createBooking);

// AI Travel Concierge REST API
apiRouter.post("/ai/concierge", handleConciergeQuery);
