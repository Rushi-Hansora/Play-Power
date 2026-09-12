import React, { useState } from "react";
import { Modal } from "../common/Modal";
import { Star, Check, X, ArrowRight, Shield, Sparkles, MapPin } from "lucide-react";
import { mockConciergeDataset } from "../../services/ai/aiConciergeService";
import { useBooking } from "../../contexts/BookingContext";
import { formatCurrency } from "../../utils/formatters";

export function StayComparisonModal({ isOpen, onClose, initialStay1Id, initialStay2Id }) {
  const { selectPropertyForBooking } = useBooking();

  const [stay1Id, setStay1Id] = useState(initialStay1Id || "listing-candolim-mirashya-ug10");
  const [stay2Id, setStay2Id] = useState(initialStay2Id || "listing-calangute-garden-studio");

  const stay1 = mockConciergeDataset.find((s) => s.id === stay1Id) || mockConciergeDataset[0];
  const stay2 = mockConciergeDataset.find((s) => s.id === stay2Id) || mockConciergeDataset[1];

  const handleSelectStay = (stay) => {
    onClose();
    selectPropertyForBooking({
      id: stay.id,
      title: stay.title,
      type: stay.type,
      location: stay.location,
      pricePerNight: stay.pricePerNight,
      ratings: { overall: stay.rating, reviewCount: 24 },
      photos: [{ url: stay.image, caption: stay.title }],
      pricing: {
        basePricePerNight: stay.pricePerNight,
        cleaningFee: 1200,
      },
    });
  };

  const comparisonRows = [
    {
      feature: "Nightly Rate",
      val1: `${formatCurrency(stay1.pricePerNight)} / night`,
      val2: `${formatCurrency(stay2.pricePerNight)} / night`,
      highlight1: stay1.pricePerNight < stay2.pricePerNight,
      highlight2: stay2.pricePerNight < stay1.pricePerNight,
    },
    {
      feature: "Guest Rating",
      val1: `★ ${stay1.rating} (Superhost)`,
      val2: `★ ${stay2.rating}`,
      highlight1: stay1.rating >= stay2.rating,
      highlight2: stay2.rating > stay1.rating,
    },
    {
      feature: "Distance to Beach",
      val1: `${stay1.distanceKm} km (Walking distance)`,
      val2: `${stay2.distanceKm} km`,
      highlight1: stay1.distanceKm <= stay2.distanceKm,
      highlight2: stay2.distanceKm < stay1.distanceKm,
    },
    {
      feature: "Private Jacuzzi / Tub",
      val1: stay1.amenities.includes("Jacuzzi") ? "Yes (Private outdoor)" : "No",
      val2: stay2.amenities.includes("Jacuzzi") ? "Yes" : "No (Shared pool only)",
      highlight1: stay1.amenities.includes("Jacuzzi"),
      highlight2: stay2.amenities.includes("Jacuzzi"),
    },
    {
      feature: "Swimming Pool",
      val1: stay1.amenities.includes("Pool") ? "Resort pool access" : "No",
      val2: stay2.amenities.includes("Pool") ? "Shared garden pool" : "No",
      highlight1: stay1.amenities.includes("Pool"),
      highlight2: stay2.amenities.includes("Pool"),
    },
    {
      feature: "Wi-Fi & Work Desk",
      val1: "High-speed 100 Mbps + Desk",
      val2: "Standard Wi-Fi",
      highlight1: true,
      highlight2: false,
    },
    {
      feature: "Owner Direct Discount",
      val1: "10% Host Permission Available",
      val2: "Standard Rates",
      highlight1: true,
      highlight2: false,
    },
    {
      feature: "Cancellation Policy",
      val1: "Free cancellation up to 48 hrs",
      val2: "Moderate policy",
      highlight1: true,
      highlight2: false,
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Side-by-Side Stay Comparison"
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6 pb-2">
        <p className="text-xs sm:text-sm text-gray-500">
          Compare key features, nightly rates, amenities, and locations to choose the ideal stay for your trip.
        </p>

        {/* 2-Column Comparison Cards Header */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {/* Stay 1 Column */}
          <div className="border border-gray-200 rounded-2xl p-3 sm:p-4 bg-white shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">
                Option A
              </span>
              <select
                value={stay1Id}
                onChange={(e) => setStay1Id(e.target.value)}
                className="text-xs border border-gray-200 rounded-lg px-2 py-1 bg-gray-50 text-gray-700 outline-none"
              >
                {mockConciergeDataset.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title.slice(0, 24)}...
                  </option>
                ))}
              </select>
            </div>

            <div className="aspect-16/10 rounded-xl overflow-hidden bg-gray-100 relative">
              <img src={stay1.image} alt={stay1.title} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-white/95 px-2 py-0.5 rounded-full text-[11px] font-bold text-gray-900 border border-gray-200">
                ★ {stay1.rating}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm sm:text-base text-gray-900 line-clamp-1">{stay1.title}</h4>
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-gray-400" />
                <span>{stay1.location}</span>
              </p>
            </div>

            <div className="pt-2">
              <div className="font-extrabold text-base sm:text-lg text-gray-900">
                {formatCurrency(stay1.pricePerNight)}
                <span className="text-xs font-normal text-gray-500"> / night</span>
              </div>
            </div>

            <button
              onClick={() => handleSelectStay(stay1)}
              className="w-full py-2.5 bg-gradient-to-r from-[#FF385C] to-[#E00B41] text-white rounded-xl text-xs sm:text-sm font-bold hover:brightness-105 active:scale-98 transition shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Select Option A</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Stay 2 Column */}
          <div className="border border-gray-200 rounded-2xl p-3 sm:p-4 bg-white shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">
                Option B
              </span>
              <select
                value={stay2Id}
                onChange={(e) => setStay2Id(e.target.value)}
                className="text-xs border border-gray-200 rounded-lg px-2 py-1 bg-gray-50 text-gray-700 outline-none"
              >
                {mockConciergeDataset.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title.slice(0, 24)}...
                  </option>
                ))}
              </select>
            </div>

            <div className="aspect-16/10 rounded-xl overflow-hidden bg-gray-100 relative">
              <img src={stay2.image} alt={stay2.title} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-white/95 px-2 py-0.5 rounded-full text-[11px] font-bold text-gray-900 border border-gray-200">
                ★ {stay2.rating}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm sm:text-base text-gray-900 line-clamp-1">{stay2.title}</h4>
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-gray-400" />
                <span>{stay2.location}</span>
              </p>
            </div>

            <div className="pt-2">
              <div className="font-extrabold text-base sm:text-lg text-gray-900">
                {formatCurrency(stay2.pricePerNight)}
                <span className="text-xs font-normal text-gray-500"> / night</span>
              </div>
            </div>

            <button
              onClick={() => handleSelectStay(stay2)}
              className="w-full py-2.5 bg-gray-900 hover:bg-black text-white rounded-xl text-xs sm:text-sm font-bold active:scale-98 transition shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Select Option B</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Feature-by-Feature Comparison Table */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200 font-semibold text-xs text-gray-700 uppercase tracking-wider">
            Detailed Comparison
          </div>

          <div className="divide-y divide-gray-100">
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-12 px-4 py-3 text-xs sm:text-sm hover:bg-gray-50/60 transition">
                <div className="col-span-4 font-medium text-gray-700">{row.feature}</div>
                <div
                  className={`col-span-4 pr-2 font-semibold ${
                    row.highlight1 ? "text-emerald-700" : "text-gray-900"
                  }`}
                >
                  {row.val1}
                </div>
                <div
                  className={`col-span-4 pl-2 font-semibold ${
                    row.highlight2 ? "text-emerald-700" : "text-gray-900"
                  }`}
                >
                  {row.val2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
