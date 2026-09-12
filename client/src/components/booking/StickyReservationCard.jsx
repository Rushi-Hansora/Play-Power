import React from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { useBooking } from "../../contexts/BookingContext";
import { formatCurrency } from "../../utils/formatters";

export function StickyReservationCard() {
  const {
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
    isGuestSelectorOpen,
    setIsGuestSelectorOpen,
    setIsBookingModalOpen,
  } = useBooking();

  return (
    <aside
      id="reservation-card"
      aria-label="Reservation card"
      className="bg-white border border-gray-300 rounded-2xl p-4 sm:p-6 shadow-xl space-y-5 sm:space-y-6 w-full max-w-full lg:max-w-[370px] mx-auto lg:ml-auto select-none"
    >
      {/* Header with price and reviews */}
      <div className="flex items-baseline justify-between">
        <div>
          <span className="text-xl sm:text-2xl font-bold text-gray-900">
            {formatCurrency(basePricePerNight)}
          </span>
          <span className="text-xs sm:text-sm text-gray-600 font-normal"> / night</span>
        </div>

        <div className="flex items-center gap-1 text-xs text-gray-700">
          <span>★</span>
          <span className="font-semibold">{listing.ratings.overall}</span>
          <span>·</span>
          <span className="text-gray-500 underline">{listing.ratings.reviewCount} reviews</span>
        </div>
      </div>

      {/* Date & Guest Selection Widget Box */}
      <div className="border border-gray-400 rounded-xl overflow-hidden text-left text-xs">
        {/* Date Row */}
        <div className="grid grid-cols-2 border-b border-gray-400">
          <div className="p-2.5 sm:p-3 border-r border-gray-400 bg-white hover:bg-gray-50 transition cursor-pointer">
            <label className="block text-[10px] font-bold tracking-wider text-gray-800 uppercase">
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              min="2026-05-01"
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-xs font-medium text-gray-700 outline-none bg-transparent cursor-pointer mt-0.5"
            />
          </div>

          <div className="p-2.5 sm:p-3 bg-white hover:bg-gray-50 transition cursor-pointer">
            <label className="block text-[10px] font-bold tracking-wider text-gray-800 uppercase">
              Checkout
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-xs font-medium text-gray-700 outline-none bg-transparent cursor-pointer mt-0.5"
            />
          </div>
        </div>

        {/* Guests Row */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsGuestSelectorOpen(!isGuestSelectorOpen)}
            className="w-full p-2.5 sm:p-3 flex items-center justify-between bg-white hover:bg-gray-50 transition text-left cursor-pointer"
          >
            <div>
              <span className="block text-[10px] font-bold tracking-wider text-gray-800 uppercase">
                Guests
              </span>
              <span className="text-xs text-gray-800">
                {totalGuests} guest{totalGuests > 1 ? "s" : ""}
                {guests.infants > 0 ? `, ${guests.infants} infant` : ""}
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>

          {/* Guest Selector Dropdown Menu */}
          {isGuestSelectorOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-300 rounded-xl shadow-xl p-4 z-30 space-y-4 animate-in fade-in zoom-in-95 duration-150">
              {/* Adults */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-900">Adults</div>
                  <div className="text-xs text-gray-500">Age 13+</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => updateGuests("adults", -1)}
                    disabled={guests.adults <= 1}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 disabled:opacity-30 hover:border-gray-900"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-semibold w-4 text-center">{guests.adults}</span>
                  <button
                    type="button"
                    onClick={() => updateGuests("adults", 1)}
                    disabled={totalGuests >= listing.capacity.guests}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 disabled:opacity-30 hover:border-gray-900"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-900">Children</div>
                  <div className="text-xs text-gray-500">Ages 2–12</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => updateGuests("children", -1)}
                    disabled={guests.children <= 0}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 disabled:opacity-30 hover:border-gray-900"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-semibold w-4 text-center">{guests.children}</span>
                  <button
                    type="button"
                    onClick={() => updateGuests("children", 1)}
                    disabled={totalGuests >= listing.capacity.guests}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 disabled:opacity-30 hover:border-gray-900"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsGuestSelectorOpen(false)}
                  className="text-xs font-bold text-gray-900 underline hover:text-black cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Primary Reserve Button */}
      <button
        onClick={() => setIsBookingModalOpen(true)}
        className="w-full py-3.5 px-4 bg-gradient-to-r from-[#FF385C] to-[#E00B41] text-white rounded-xl font-bold text-sm sm:text-base hover:brightness-105 active:scale-98 transition shadow-sm cursor-pointer"
      >
        Reserve
      </button>

      <p className="text-center text-xs text-gray-500 font-normal">
        You won't be charged yet
      </p>

      {/* Itemized Calculation Breakdown */}
      <div className="space-y-2.5 sm:space-y-3 pt-2 text-xs sm:text-sm text-gray-700">
        <div className="flex justify-between items-center">
          <span className="underline">
            {formatCurrency(basePricePerNight)} x {nights} nights
          </span>
          <span>{formatCurrency(nightsTotal)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="underline">Cleaning fee</span>
          <span>{formatCurrency(cleaningFee)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="underline">Airbnb service fee</span>
          <span>{formatCurrency(serviceFee)}</span>
        </div>

        <div className="border-t border-gray-200 pt-3 sm:pt-4 flex justify-between items-center font-bold text-sm sm:text-base text-gray-900">
          <span>Total before taxes</span>
          <span>{formatCurrency(totalBeforeTaxes)}</span>
        </div>
      </div>
    </aside>
  );
}
