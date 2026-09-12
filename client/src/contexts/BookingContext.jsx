import React, { createContext, useContext, useState, useMemo } from "react";
import { mockListing } from "../data/mockListing";
import { calculateNights } from "../utils/formatters";

const BookingContext = createContext(null);

export function BookingProvider({ children, listing = mockListing }) {
  const defaultListing = listing || mockListing;

  // Default 5-night stay matching reference (10/18/2026 to 10/23/2026)
  const [checkIn, setCheckIn] = useState("2026-10-18");
  const [checkOut, setCheckOut] = useState("2026-10-23");
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const [activeProperty, setActiveProperty] = useState(defaultListing);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDiscountClaimed, setIsDiscountClaimed] = useState(false);
  const [isOwnerDiscountApproved, setIsOwnerDiscountApproved] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card' | 'upi' | 'netbanking'

  const totalGuests = guests.adults + guests.children;
  const nights = useMemo(() => calculateNights(checkIn, checkOut), [checkIn, checkOut]);

  // Pricing math using activeProperty
  const basePricePerNight = activeProperty?.pricing?.basePricePerNight || activeProperty?.pricePerNight || listing.pricing.basePricePerNight;
  const nightsTotal = basePricePerNight * nights;
  const cleaningFee = activeProperty?.pricing?.cleaningFee || 1200;
  const serviceFee = Math.round(nightsTotal * 0.098); // ~9.8% service fee
  const hasDiscount = isDiscountClaimed || isOwnerDiscountApproved;
  const discountAmount = hasDiscount ? Math.round(nightsTotal * 0.1) : 0;
  const totalBeforeTaxes = nightsTotal - discountAmount + cleaningFee + serviceFee;

  const toggleDiscount = () => {
    setIsDiscountClaimed((prev) => !prev);
  };

  const toggleOwnerDiscount = () => {
    setIsOwnerDiscountApproved((prev) => !prev);
  };

  const selectPropertyForBooking = (property) => {
    if (property) {
      setActiveProperty(property);
    } else {
      setActiveProperty(defaultListing);
    }
    setIsBookingModalOpen(true);
  };

  const updateGuests = (type, delta) => {
    setGuests((prev) => {
      const current = prev[type];
      const updated = Math.max(0, current + delta);
      // Adults minimum 1
      if (type === "adults" && updated < 1) return prev;
      // Maximum capacity constraint
      const maxAllowed = activeProperty?.capacity?.guests || listing.capacity.guests;
      if ((type === "adults" || type === "children") && prev.adults + prev.children + delta > maxAllowed) {
        return prev;
      }
      return { ...prev, [type]: updated };
    });
  };

  const value = {
    listing: defaultListing,
    defaultListing,
    activeProperty: activeProperty || defaultListing,
    bookedStay: activeProperty || defaultListing,
    setActiveProperty,
    selectPropertyForBooking,
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
    isDiscountClaimed,
    isOwnerDiscountApproved,
    setIsOwnerDiscountApproved,
    toggleOwnerDiscount,
    discountAmount,
    toggleDiscount,
    paymentMethod,
    setPaymentMethod,
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

