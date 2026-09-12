import React from "react";
import { useBooking } from "../../contexts/BookingContext";
import { formatCurrency, formatDateRange } from "../../utils/formatters";

export function MobileReservationBar() {
  const {
    basePricePerNight,
    checkIn,
    checkOut,
    setIsBookingModalOpen,
  } = useBooking();

  return (
    <div
      aria-label="Mobile reservation bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-5 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between transition"
    >
      {/* Price and dates */}
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-base font-bold text-[#222222]">
            {formatCurrency(basePricePerNight)}
          </span>
          <span className="text-xs text-gray-500 font-normal"> / night</span>
        </div>
        <button
          onClick={() => {
            const el = document.getElementById("reservation-card");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="text-xs font-semibold underline text-gray-800 hover:text-black cursor-pointer text-left block mt-0.5"
        >
          {formatDateRange(checkIn, checkOut)}
        </button>
      </div>

      {/* Primary Reserve Button */}
      <button
        onClick={() => setIsBookingModalOpen(true)}
        className="px-7 py-3 bg-gradient-to-r from-[#FF385C] to-[#E00B41] text-white rounded-lg text-sm font-bold shadow-xs hover:brightness-105 active:scale-95 transition cursor-pointer"
      >
        Reserve
      </button>
    </div>
  );
}
