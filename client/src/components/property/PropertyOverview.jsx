import React from "react";
import { Star, Award, ShieldCheck, Sparkles } from "lucide-react";

export function PropertyOverview({ listing }) {
  return (
    <div className="py-6 border-b border-gray-200">
      {/* Property Type and Capacity */}
      <h2 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-1">
        {listing.type}
      </h2>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-700 mb-6">
        <li>{listing.capacity.guests} guests</li>
        <li>·</li>
        <li>{listing.capacity.bedrooms} bedroom</li>
        <li>·</li>
        <li>{listing.capacity.beds} beds</li>
        <li>·</li>
        <li>{listing.capacity.baths} bath</li>
      </ol>

      {/* Guest Favorite Pill Bar */}
      <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl mb-6">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-1">
            <span className="text-2xl">🏆</span>
          </div>
          <div>
            <div className="font-bold text-sm text-gray-900">Guest favorite</div>
            <div className="text-xs text-gray-500">
              One of the most loved homes on Airbnb based on ratings, reviews, and reliability
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-right">
          <div>
            <div className="text-lg font-bold text-gray-900">{listing.ratings.overall}</div>
            <div className="flex text-amber-500 text-xs">★★★★★</div>
          </div>
          <div className="h-8 w-[1px] bg-gray-300" />
          <div>
            <div className="text-lg font-bold text-gray-900 underline">
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
          className="w-14 h-14 rounded-full object-cover border border-gray-200"
        />
        <div>
          <div className="font-semibold text-base text-gray-900">
            Hosted by {listing.host.name}
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-2">
            <span>Superhost</span>
            <span>·</span>
            <span>{listing.host.tenureYears} years hosting</span>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="space-y-4 mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-start gap-4">
          <Award className="w-6 h-6 text-gray-700 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-sm text-gray-900">Nitish is a Superhost</div>
            <p className="text-xs text-gray-500">
              Superhosts are experienced, highly rated hosts committed to great stays.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Sparkles className="w-6 h-6 text-gray-700 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-sm text-gray-900">Unmatched cleanliness</div>
            <p className="text-xs text-gray-500">
              Recent guests gave the cleanliness of this place a 4.9-star rating.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-gray-700 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-sm text-gray-900">Free cancellation for 48 hours</div>
            <p className="text-xs text-gray-500">
              Get a full refund if you change your plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
