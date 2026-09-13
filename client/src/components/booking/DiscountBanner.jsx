import React, { useState } from "react";
import { useBooking } from "../../contexts/BookingContext";
import { Modal } from "../common/Modal";

export function DiscountBanner({ className = "" }) {
  const { isDiscountClaimed, toggleDiscount } = useBooking();
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <div className={`border border-gray-200 bg-white rounded-2xl p-3 sm:p-4 shadow-2xs flex items-center justify-between gap-3 transition ${className}`}>
        {/* Left: Tag Icon and Text */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          {/* Green Luggage/Price Tag Icon matching screenshot */}
          <div className="shrink-0 w-8 h-8 rounded-lg bg-emerald-100/70 text-emerald-600 flex items-center justify-center">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.97 2.59a1.5 1.5 0 0 0-1.06-.44H4.5A2.5 2.5 0 0 0 2 4.65v7.41c0 .4.16.78.44 1.06l8.5 8.5a1.5 1.5 0 0 0 2.12 0l7.41-7.41a1.5 1.5 0 0 0 0-2.12l-7.5-9.5zM6.5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>

          <div className="leading-tight truncate">
            <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
              Get 10% off your next stay.
            </div>
            <button
              type="button"
              onClick={() => setIsTermsOpen(true)}
              className="text-[11px] sm:text-xs text-gray-600 underline hover:text-black cursor-pointer text-left block mt-0.5 font-normal"
            >
              Terms apply
            </button>
          </div>
        </div>

        {/* Right: Claim Button */}
        <button
          type="button"
          onClick={toggleDiscount}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-semibold cursor-pointer transition active:scale-95 shrink-0 ${
            isDiscountClaimed
              ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs"
              : "bg-gray-100 hover:bg-gray-200 text-gray-900"
          }`}
        >
          {isDiscountClaimed ? "Claimed ✓" : "Claim"}
        </button>
      </div>

      {/* Terms Modal */}
      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Promotional Discount Terms"
        maxWidth="max-w-md"
      >
        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed py-2">
          <p className="font-semibold text-gray-900">
            10% Off Candolim Stays Promotion
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
            <li>Applicable to reservations of 3 nights or more at Mirashya UG10 Candolim.</li>
            <li>Discount is calculated on the base nightly rate before taxes and cleaning fees.</li>
            <li>Limited-time offer valid for trips completed in 2026.</li>
            <li>Subject to host availability and standard house rules.</li>
          </ul>
          <div className="pt-2 text-right">
            <button
              onClick={() => setIsTermsOpen(false)}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-black cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
