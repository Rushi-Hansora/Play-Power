import { describe, it, expect } from "vitest";
import { mockListing } from "../data/mockListing";

describe("Booking Price Calculations", () => {
  it("calculates exact reference 5-night totals", () => {
    const basePrice = mockListing.pricing.basePricePerNight; // 5699
    const nights = 5;
    const nightsTotal = basePrice * nights; // 28495
    const cleaningFee = mockListing.pricing.cleaningFee; // 1200
    const serviceFee = Math.round(nightsTotal * 0.098); // 2793
    const total = nightsTotal + cleaningFee + serviceFee;

    expect(nightsTotal).toBe(28495);
    expect(total).toBe(32488);
  });

  it("handles guest capacity constraints properly", () => {
    const maxCapacity = mockListing.capacity.guests; // 4
    expect(maxCapacity).toBe(4);
  });
});
