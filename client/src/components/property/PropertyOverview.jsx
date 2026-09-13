import React from "react";
import { Fan, DoorOpen } from "lucide-react";

function OutdoorEntertainmentIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16" />
      <path d="M6 12v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" />
      <path d="M12 4c-1.5 2-2.5 3.5-2.5 5 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.5-1-3-2.5-5z" />
    </svg>
  );
}

function MiniLaurelLeft({ className = "w-4 h-9 text-[#222222]" }) {
  return (
    <svg className={className} viewBox="0 0 16 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M 12 34 C 6 25 4 12 12 2" />
      <path d="M 10 30 C 5 29 4 26 7 24" />
      <path d="M 7 23 C 3 22 2 18 6 16" />
      <path d="M 6 16 C 2 15 2 11 5 9" />
      <path d="M 8 9 C 5 7 5 4 9 3" />
    </svg>
  );
}

function MiniLaurelRight({ className = "w-4 h-9 text-[#222222]" }) {
  return (
    <svg className={className} viewBox="0 0 16 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "scaleX(-1)" }} aria-hidden="true">
      <path d="M 12 34 C 6 25 4 12 12 2" />
      <path d="M 10 30 C 5 29 4 26 7 24" />
      <path d="M 7 23 C 3 22 2 18 6 16" />
      <path d="M 6 16 C 2 15 2 11 5 9" />
      <path d="M 8 9 C 5 7 5 4 9 3" />
    </svg>
  );
}

export function PropertyOverview({ listing }) {
  const safeCapacity = listing?.capacity || { guests: 3, bedrooms: 1, beds: 1, baths: 1 };
  const safeHost = listing?.host || { name: "Mirashya Homes", tenureYears: 2 };
  const safeRatings = listing?.ratings || { overall: 4.95, reviewCount: 19 };

  return (
    <div className="pb-6 border-b border-gray-200">
      {/* Guest Favourite Pill Card — Matching Image 2 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 bg-white border border-gray-200 rounded-3xl mb-7 shadow-2xs">
        <div className="flex items-center gap-4">
          {/* Laurel Wreath Guest Favourite Badge */}
          <div className="flex items-center gap-1.5 text-[#222222] select-none shrink-0">
            <MiniLaurelLeft />
            <div className="text-center font-bold text-xs sm:text-sm text-[#222222] leading-tight px-1">
              <div>Guest</div>
              <div>favourite</div>
            </div>
            <MiniLaurelRight />
          </div>

          <div className="text-xs sm:text-sm text-gray-800 font-medium leading-snug max-w-xs">
            One of the most loved homes on Airbnb, according to guests
          </div>
        </div>

        <div className="flex items-center justify-around sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100 text-center sm:text-right shrink-0">
          <div>
            <div className="text-xl font-extrabold text-[#222222] leading-none mb-1">
              {safeRatings.overall || "4.95"}
            </div>
            <div className="flex text-black text-xs justify-center sm:justify-end tracking-wider">
              ★★★★★
            </div>
          </div>

          <div className="h-9 w-[1px] bg-gray-200" />

          <div>
            <div className="text-xl font-extrabold text-[#222222] leading-none mb-1">
              {safeRatings.reviewCount || "19"}
            </div>
            <div className="text-xs text-gray-700 underline cursor-pointer font-medium">
              Reviews
            </div>
          </div>
        </div>
      </div>

      {/* Host Quick Snapshot with Mirashya Homes avatar matching Image 3 */}
      <div className="flex items-center gap-4 py-4 border-b border-gray-100">
        <div className="w-12 h-12 rounded-full bg-[#1A3830] text-white flex items-center justify-center font-bold text-[10px] tracking-widest select-none shrink-0 shadow-xs">
          MIRASHYA
        </div>
        <div>
          <div className="font-semibold text-base text-gray-900 leading-snug">
            Hosted by {safeHost.name}
          </div>
          <div className="text-xs sm:text-sm text-gray-500 mt-0.5">
            {safeHost.tenureYears || 2} years hosting
          </div>
        </div>
      </div>

      {/* Key Highlights Matching Photo 3 */}
      <div className="space-y-6 pt-6">
        {/* Highlight 1 */}
        <div className="flex items-start gap-4">
          <div className="p-1 text-gray-800 shrink-0 mt-0.5">
            <OutdoorEntertainmentIcon className="w-6 h-6 stroke-[1.6]" />
          </div>
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-gray-900">
              Outdoor entertainment
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5 leading-normal">
              The pool and alfresco dining are great for summer trips.
            </p>
          </div>
        </div>

        {/* Highlight 2 */}
        <div className="flex items-start gap-4">
          <div className="p-1 text-gray-800 shrink-0 mt-0.5">
            <Fan className="w-6 h-6 stroke-[1.6] text-gray-800" />
          </div>
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-gray-900">
              Designed for staying cool
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5 leading-normal">
              Beat the heat with the A/C and ceiling fan.
            </p>
          </div>
        </div>

        {/* Highlight 3 */}
        <div className="flex items-start gap-4">
          <div className="p-1 text-gray-800 shrink-0 mt-0.5">
            <DoorOpen className="w-6 h-6 stroke-[1.6] text-gray-800" />
          </div>
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-gray-900">
              Self check-in
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5 leading-normal">
              You can check in with the building staff.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
