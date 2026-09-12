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
        <li>{listing.capacity.beds} beds</li>
        <li>·</li>
        <li>{listing.capacity.baths} bath</li>
      </ol>

      {/* Guest Favorite Pill Bar — Responsive Stacking */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl mb-6">
        <div className="flex items-center gap-3">
          <div className="text-2xl shrink-0">🏆</div>
          <div>
            <div className="font-bold text-sm text-gray-900">Guest favorite</div>
            <div className="text-xs text-gray-500 leading-normal">
              One of the most loved homes on Airbnb based on ratings and reviews
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around sm:justify-end gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-200 text-center sm:text-right">
          <div>
            <div className="text-base sm:text-lg font-bold text-gray-900">{listing.ratings.overall}</div>
            <div className="flex text-amber-500 text-xs justify-center sm:justify-end">★★★★★</div>
          </div>
          <div className="h-8 w-[1px] bg-gray-300" />
          <div>
            <div className="text-base sm:text-lg font-bold text-gray-900 underline">
              {listing.ratings.reviewCount}
            </div>
            <div className="text-xs text-gray-500">Reviews</div>
          </div>
        </div>
      </div>

      {/* Host Quick Snapshot */}
      <div className="flex items-center gap-4 py-3">
        <img
          src={listing.host.avatar}
          alt={listing.host.name}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-gray-200"
        />
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
