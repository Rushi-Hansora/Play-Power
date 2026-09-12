import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { mockNearbyStays } from "../../data/mockNearbyStays";
import { formatCurrency } from "../../utils/formatters";
import { Modal } from "../common/Modal";

export function NearbyStaysSection() {
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedStay, setSelectedStay] = useState(null);

  const totalPages = mockNearbyStays.length;
  const currentStays = mockNearbyStays[pageIndex] || [];

  const handlePrev = () => {
    setPageIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section
      aria-label="More stays nearby"
      className="py-8 border-b border-gray-200 select-none"
    >
      {/* Section Header with Carousel Controls */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl md:text-[22px] font-semibold text-gray-900 tracking-tight">
          More stays nearby
        </h2>

        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-medium text-gray-600">
            {pageIndex + 1} / {totalPages}
          </span>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              aria-label="Previous stays"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-gray-900 hover:bg-gray-50 transition active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next stays"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-gray-900 hover:bg-gray-50 transition active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 5-Card Responsive Carousel Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {currentStays.map((stay) => (
          <div
            key={stay.id}
            onClick={() => setSelectedStay(stay)}
            className="group cursor-pointer flex flex-col"
          >
            {/* Image Container with Subtle Zoom on Hover */}
            <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-gray-100 mb-2.5">
              <img
                src={stay.image}
                alt={stay.title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-95"
                loading="lazy"
              />
            </div>

            {/* Title */}
            <h3 className="font-semibold text-xs sm:text-sm text-gray-900 line-clamp-2 leading-snug group-hover:underline">
              {stay.title}
            </h3>

            {/* Price & Rating */}
            <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-900 font-medium">
              <span>{formatCurrency(stay.price)}</span>
              <span>·</span>
              <div className="flex items-center gap-0.5">
                <Star className="w-3 h-3 fill-current text-black" />
                <span>{stay.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Preview Modal when clicking a stay card */}
      {selectedStay && (
        <Modal
          isOpen={Boolean(selectedStay)}
          onClose={() => setSelectedStay(null)}
          title={selectedStay.title}
          maxWidth="max-w-lg"
        >
          <div className="space-y-4 py-2">
            <div className="aspect-16/9 rounded-xl overflow-hidden bg-gray-100">
              <img
                src={selectedStay.image}
                alt={selectedStay.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500">{selectedStay.location}</span>
                <div className="flex items-center gap-1 text-sm font-semibold text-gray-900 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-current text-black" />
                  <span>{selectedStay.rating} rating</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-base font-bold text-gray-900">
                  {formatCurrency(selectedStay.price)}
                </span>
                <span className="text-xs text-gray-500 block">estimated total</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Experience stunning local hospitality in this premier holiday rental located near Candolim and Calangute beaches. Includes high-speed Wi-Fi, air conditioning, and full concierge support.
            </p>

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => setSelectedStay(null)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Selected "${selectedStay.title}". Redirecting to details.`);
                  setSelectedStay(null);
                }}
                className="px-5 py-2 bg-[#FF385C] hover:bg-[#E00B41] text-white rounded-lg text-xs font-bold transition shadow-xs"
              >
                View Listing
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
