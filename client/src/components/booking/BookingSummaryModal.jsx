import React, { useState } from "react";
import { Modal } from "../common/Modal";
import { useBooking } from "../../contexts/BookingContext";
import { formatCurrency, formatDateRange } from "../../utils/formatters";
import { CheckCircle2, Shield } from "lucide-react";

export function BookingSummaryModal() {
  const {
    listing,
    checkIn,
    checkOut,
    nights,
    totalGuests,
    basePricePerNight,
    nightsTotal,
    cleaningFee,
    serviceFee,
    isDiscountClaimed,
    discountAmount,
    totalBeforeTaxes,
    isBookingModalOpen,
    setIsBookingModalOpen,
  } = useBooking();

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmReservation = () => {
    setIsConfirmed(true);
  };

  const handleClose = () => {
    setIsBookingModalOpen(false);
    setTimeout(() => setIsConfirmed(false), 300);
  };

  return (
    <Modal
      isOpen={isBookingModalOpen}
      onClose={handleClose}
      title={isConfirmed ? "Booking Confirmed!" : "Review your trip"}
      maxWidth="max-w-lg"
    >
      {!isConfirmed ? (
        <div className="space-y-6">
          {/* Listing Summary Snippet */}
          <div className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <img
              src={listing.photos[0].url}
              alt={listing.title}
              className="w-24 h-20 object-cover rounded-lg"
            />
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs text-gray-500">{listing.type}</span>
                <h3 className="font-semibold text-sm text-gray-900 line-clamp-1">
                  {listing.title}
                </h3>
              </div>
              <div className="text-xs text-gray-700">
                ★ <span className="font-semibold">{listing.ratings.overall}</span> ({listing.ratings.reviewCount} reviews)
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="space-y-4 border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-base text-gray-900">Your trip</h4>
            <div className="flex justify-between items-center text-sm">
              <div>
                <div className="font-medium text-gray-900">Dates</div>
                <div className="text-gray-500 text-xs">{formatDateRange(checkIn, checkOut)} ({nights} nights)</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div>
                <div className="font-medium text-gray-900">Guests</div>
                <div className="text-gray-500 text-xs">{totalGuests} guest{totalGuests > 1 ? "s" : ""}</div>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-3 border-b border-gray-200 pb-4 text-sm text-gray-700">
            <h4 className="font-semibold text-base text-gray-900">Price details</h4>
            <div className="flex justify-between">
              <span>{formatCurrency(basePricePerNight)} x {nights} nights</span>
              <span>{formatCurrency(nightsTotal)}</span>
            </div>
            {isDiscountClaimed && (
              <div className="flex justify-between text-emerald-700 font-semibold bg-emerald-50 px-2 py-1 rounded">
                <span>Special 10% discount</span>
                <span>-{formatCurrency(discountAmount)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Cleaning fee</span>
              <span>{formatCurrency(cleaningFee)}</span>
            </div>
            <div className="flex justify-between">
              <span>Airbnb service fee</span>
              <span>{formatCurrency(serviceFee)}</span>
            </div>
            <div className="flex justify-between font-bold text-base text-gray-900 pt-2 border-t border-gray-100">
              <span>Total (INR)</span>
              <span>{formatCurrency(totalBeforeTaxes)}</span>
            </div>
          </div>

          {/* AirCover Protection Notice */}
          <div className="flex items-start gap-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700">
            <Shield className="w-5 h-5 text-[#FF385C] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-gray-900">Protected by AirCover: </span>
              Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleConfirmReservation}
            className="w-full py-3.5 bg-gradient-to-r from-[#FF385C] to-[#E00B41] text-white rounded-xl font-bold text-base hover:brightness-105 transition cursor-pointer"
          >
            Confirm and Pay {formatCurrency(totalBeforeTaxes)}
          </button>
        </div>
      ) : (
        <div className="text-center py-6 space-y-4">
          <div className="inline-flex p-3 bg-green-100 text-green-600 rounded-full">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Reservation Confirmed!</h3>
          <p className="text-sm text-gray-600 max-w-sm mx-auto">
            You're all set for Candolim, Goa from {formatDateRange(checkIn, checkOut)}. Host Nitish will welcome you upon arrival.
          </p>
          <div className="pt-4">
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-black transition cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
