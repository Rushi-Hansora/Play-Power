import { ListingRepository } from "../repositories/listingRepository.js";
import { NotFoundError } from "../errors/AppError.js";

export class ListingService {
  constructor(repository = new ListingRepository()) {
    this.repository = repository;
  }

  async getListingDetails(id) {
    const listing = await this.repository.findById(id);
    if (!listing) {
      throw new NotFoundError("Listing");
    }
    return listing;
  }

  async getAllListings(query = {}) {
    const page = parseInt(query.page, 10) || 1;
    const limit = parseInt(query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    const listings = await this.repository.findAll({ limit, skip });
    return {
      listings,
      pagination: {
        page,
        limit,
        total: listings.length,
        totalPages: Math.ceil(listings.length / limit),
      },
    };
  }
}
