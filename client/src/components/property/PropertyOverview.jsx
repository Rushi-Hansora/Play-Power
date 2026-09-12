import React from "react";
import { Star, Award, ShieldCheck, Sparkles } from "lucide-react";

export function PropertyOverview({ listing }) {
  return (
    <div className="py-4 sm:py-6 border-b border-gray-200">
      {/* Property Type and Capacity */}
      <h2 className="text-lg sm:text-xl md:text-[22px] font-semibold text-gray-900 mb-1">
        {listing.type}
      </h2>
      <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-700 mb-5 sm:mb-6">
        <li>{listing.capacity.guests} guests</li>
        <li>·</li>
        <li>{listing.capacity.bedrooms} bedroom</li>
        <li>·</li>
        <li>{listing.capacity.beds} bed</li>
        <li>·</li>
        <li>{listing.capacity.baths} bathroom</li>
      </ol>

      {/* Guest Favourite Pill Bar — Matching Reference Image */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl mb-6 shadow-2xs">
        <div className="flex items-center gap-4">
          {/* Laurel Wreath Guest Favourite Badge */}
          <div className="flex items-center gap-1 text-[#222222] select-none shrink-0">
            {/* Left Laurel Branch */}
            <svg className="w-5 h-8 text-gray-800" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 4 C10 10, 4 20, 6 36" />
              <path d="M18 4 C14 8, 14 12, 11 12" />
              <path d="M14 14 C10 17, 8 21, 6 20" />
              <path d="M9 22 C6 25, 4 29, 4 28" />
              <path d="M6 30 C5 33, 4 35, 6 36" />
            </svg>

            <div className="text-center font-bold text-xs sm:text-sm text-[#222222] leading-tight px-1">
              <div>Guest</div>
              <div>favourite</div>
            </div>

            {/* Right Laurel Branch */}
            <svg className="w-5 h-8 text-gray-800" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 4 C14 10, 20 20, 18 36" />
              <path d="M6 4 C10 8, 10 12, 13 12" />
              <path d="M10 14 C14 17, 16 21, 18 20" />
              <path d="M15 22 C18 25, 20 29, 20 28" />
              <path d="M18 30 C19 33, 20 35, 18 36" />
            </svg>
          </div>

          <div className="text-xs sm:text-sm text-gray-800 font-medium leading-tight max-w-xs">
            One of the most loved homes on Airbnb, according to guests
          </div>
        </div>

        <div className="flex items-center justify-around sm:justify-end gap-5 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100 text-center sm:text-right shrink-0">
          <div>
            <div className="text-lg sm:text-xl font-extrabold text-[#222222] leading-none mb-1">
              4.95
            </div>
            <div className="flex text-black text-[10px] sm:text-xs justify-center sm:justify-end tracking-widest">
              ★★★★★
            </div>
          </div>

          <div className="h-9 w-[1px] bg-gray-200" />

          <div>
            <div className="text-lg sm:text-xl font-extrabold text-[#222222] leading-none mb-1">
              19
            </div>
            <div className="text-xs text-gray-600 underline cursor-pointer font-medium">
              Reviews
            </div>
          </div>
        </div>
      </div>

      {/* Host Quick Snapshot with Mirashya Homes avatar */}
      <div className="flex items-center gap-4 py-3">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1A3C34] text-white flex items-center justify-center font-bold text-[10px] sm:text-xs tracking-wider border-2 border-emerald-900/20 shadow-xs shrink-0 select-none">
          MIRASHYA
        </div>
        <div>
          <div className="font-semibold text-sm sm:text-base text-gray-900">
            Hosted by {listing.host.name}
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-1.5 sm:gap-2">
            <span>Superhost</span>
            <span>·</span>
            <span>{listing.host.tenureYears} years hosting</span>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="space-y-4 mt-5 pt-5 border-t border-gray-100">
        <div className="flex items-start gap-3.5 sm:gap-4">
          <Award className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-xs sm:text-sm text-gray-900">Nitish is a Superhost</div>
            <p className="text-xs text-gray-500 leading-normal">
              Superhosts are experienced, highly rated hosts committed to great stays.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5 sm:gap-4">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-xs sm:text-sm text-gray-900">Unmatched cleanliness</div>
            <p className="text-xs text-gray-500 leading-normal">
              Recent guests gave the cleanliness of this place a 4.9-star rating.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5 sm:gap-4">
          <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-xs sm:text-sm text-gray-900">Free cancellation for 48 hours</div>
            <p className="text-xs text-gray-500 leading-normal">
              Get a full refund if you change your plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
