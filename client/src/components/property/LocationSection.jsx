import React, { useState } from "react";
import { Plus, Minus, Search, Home } from "lucide-react";

export function LocationSection({ location }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <section id="location" className="py-8 border-b border-gray-200" aria-label="Location">
      <h2 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-1">
        Where you'll be
      </h2>
      <p className="text-sm text-gray-700 mb-6 font-normal">
        {location.address}
      </p>

      {/* Stylized Interactive Map Canvas matching Screenshot 3 */}
      <div className="relative w-full h-[400px] md:h-[450px] rounded-2xl overflow-hidden border border-gray-200 shadow-xs mb-6 select-none bg-[#E5ECE9]">
        {/* Map SVG Canvas with coastal coastline and zone markers */}
        <svg
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})` }}
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D1DDD5" strokeWidth="0.8" />
            </pattern>
          </defs>

          {/* Background Land */}
          <rect width="1000" height="600" fill="#E8EFEA" />
          <rect width="1000" height="600" fill="url(#grid)" />

          {/* Arabian Sea / Coastal water on the left matching screenshot */}
          <path
            d="M 0 0 L 430 0 L 290 600 L 0 600 Z"
            fill="#A8CEE4"
            opacity="0.9"
          />

          {/* Circular zone highlights on land */}
          <circle cx="348" cy="270" r="58" fill="#C5DDC6" opacity="0.85" />
          <circle cx="640" cy="380" r="85" fill="#C5DDC6" opacity="0.85" />

          {/* Minor roads */}
          <path d="M 430 0 Q 520 200 640 380 T 1000 500" fill="none" stroke="#FFFFFF" strokeWidth="6" opacity="0.7" />
          <path d="M 290 600 Q 400 400 550 300 T 900 100" fill="none" stroke="#FFFFFF" strokeWidth="4" opacity="0.7" />
        </svg>

        {/* Center Airbnb Home Pin Marker matching Screenshot 3 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative flex flex-col items-center">
            {/* Pulse effect */}
            <div className="absolute -inset-4 bg-[#FF385C]/15 rounded-full animate-ping" />
            <div className="relative bg-[#222222] text-white p-3.5 rounded-full shadow-2xl border-2 border-white flex items-center justify-center">
              <Home className="w-5 h-5 fill-white text-white" />
            </div>
          </div>
        </div>

        {/* Map Top-Left Search/Reset Control */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          <button
            onClick={() => setZoomLevel(1)}
            aria-label="Reset map view"
            className="p-2.5 bg-white rounded-lg shadow-md hover:bg-gray-50 text-gray-800 transition cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Map Top-Right Zoom Controls */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-1 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <button
            onClick={() => setZoomLevel((z) => Math.min(1.6, z + 0.15))}
            aria-label="Zoom in"
            className="p-2.5 hover:bg-gray-50 text-gray-800 border-b border-gray-200 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.15))}
            aria-label="Zoom out"
            className="p-2.5 hover:bg-gray-50 text-gray-800 transition cursor-pointer"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="text-xs text-gray-500 mb-6">
        Exact location will be provided after booking.
      </p>

      {/* Neighborhood Highlights */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Neighbourhood highlights
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed max-w-3xl">
          {location.neighborhoodDescription}
        </p>
      </div>
    </section>
  );
}
