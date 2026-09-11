import React, { createContext, useContext, useState, useMemo } from "react";
import { mockListing } from "../data/mockListing";
import { calculateNights } from "../utils/formatters";

const BookingContext = createContext(null);

export function BookingProvider({ children, listing = mockListing }) {
  // Default 5-night stay matching reference
  const [checkIn, setCheckIn] = useState("2026-05-15");
  const [checkOut, setCheckOut] = useState("2026-05-20");
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const totalGuests = guests.adults + guests.children;
  const nights = useMemo(() => calculateNights(checkIn, checkOut), [checkIn, checkOut]);

  // Pricing math
  const basePricePerNight = listing.pricing.basePricePerNight;
  const nightsTotal = basePricePerNight * nights;
  const cleaningFee = listing.pricing.cleaningFee;
  const serviceFee = Math.round(nightsTotal * 0.098); // ~9.8% service fee
  const totalBeforeTaxes = nightsTotal + cleaningFee + serviceFee;

  const updateGuests = (type, delta) => {
    setGuests((prev) => {
      const current = prev[type];
      const updated = Math.max(0, current + delta);
      // Adults minimum 1
      if (type === "adults" && updated < 1) return prev;
      // Maximum capacity constraint
      if ((type === "adults" || type === "children") && prev.adults + prev.children + delta > listing.capacity.guests) {
        return prev;
      }
      return { ...prev, [type]: updated };
    });
  };

  const value = {
    listing,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    nights,
    guests,
    totalGuests,
    updateGuests,
    basePricePerNight,
    nightsTotal,
    cleaningFee,
    serviceFee,
    totalBeforeTaxes,
    isDatePickerOpen,
    setIsDatePickerOpen,
    isGuestSelectorOpen,
    setIsGuestSelectorOpen,
    isBookingModalOpen,
    setIsBookingModalOpen,
  };

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
