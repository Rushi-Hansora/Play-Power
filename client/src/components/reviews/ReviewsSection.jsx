import React, { useState } from "react";
import { CheckCircle2, Key, MessageSquare, Map, Tag, Search } from "lucide-react";
import { Modal } from "../common/Modal";
import { mockListing } from "../../data/mockListing";

function SprayBottleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3h4M12 3v3M12 6H9l-2 3v3h7V9l-2-3zM8 12l-1 9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l-1-9H8z" />
      <circle cx="17" cy="6" r="0.75" fill="currentColor" />
      <circle cx="20" cy="5" r="0.75" fill="currentColor" />
      <circle cx="19" cy="8.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

const REVIEW_PILLS = [
  { id: "comfort", label: "Comfort", count: 6, emoji: "🛋️" },
  { id: "accuracy", label: "Accuracy", count: 5, emoji: "✅" },
  { id: "hottub", label: "Hot tub", count: 5, emoji: "🪵" },
  { id: "condition", label: "Condition", count: 4, emoji: "🎨" },
  { id: "hospitality", label: "Hospitality", count: 6, emoji: "🎁" },
  { id: "cleanliness", label: "Cleanliness", count: 4, emoji: "🛍️" },
  { id: "amenities", label: "Amenities", count: 2, emoji: "🧁" },
  { id: "balcony", label: "Balcony", count: 3, emoji: "🌅" },
];

function LaurelBranchLeft({ className = "w-11 h-22 sm:w-14 sm:h-28 text-[#222222]" }) {
  return (
    <svg className={className} viewBox="0 0 54 96" fill="currentColor" aria-hidden="true">
      {/* Central curving stem */}
      <path
        d="M 40 92 C 22 76 12 44 32 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Node 1 (Bottom pair) */}
      <path d="M 38 88 C 26 91 16 94 9 96 C 13 89 23 85 35 84 Z" />
      <path d="M 41 84 C 47 79 51 73 53 67 C 48 74 43 78 37 82 Z" />

      {/* Node 2 */}
      <path d="M 28 74 C 17 76 8 76 2 81 C 7 73 17 69 26 69 Z" />
      <path d="M 33 69 C 41 64 46 59 49 53 C 44 59 38 63 30 65 Z" />

      {/* Node 3 (Middle) */}
      <path d="M 21 58 C 10 56 3 53 -2 56 C 3 50 13 48 20 52 Z" />
      <path d="M 25 52 C 34 46 40 40 43 34 C 38 40 32 44 23 48 Z" />

      {/* Node 4 */}
      <path d="M 19 41 C 9 36 3 31 0 33 C 5 27 14 28 19 35 Z" />
      <path d="M 24 35 C 31 28 36 23 38 17 C 34 23 29 28 22 31 Z" />

      {/* Node 5 */}
      <path d="M 21 24 C 14 18 10 13 8 14 C 11 9 19 11 23 18 Z" />
      <path d="M 27 20 C 32 14 36 9 37 4 C 34 9 30 14 25 17 Z" />

      {/* Tip leaf */}
      <path d="M 33 7 C 28 2 28 -4 31 -7 C 33 -3 34 2 31 7 Z" />
    </svg>
  );
}

function LaurelBranchRight({ className = "w-11 h-22 sm:w-14 sm:h-28 text-[#222222]" }) {
  return (
    <svg className={className} viewBox="0 0 54 96" fill="currentColor" style={{ transform: "scaleX(-1)" }} aria-hidden="true">
      <path
        d="M 40 92 C 22 76 12 44 32 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M 38 88 C 26 91 16 94 9 96 C 13 89 23 85 35 84 Z" />
      <path d="M 41 84 C 47 79 51 73 53 67 C 48 74 43 78 37 82 Z" />
      <path d="M 28 74 C 17 76 8 76 2 81 C 7 73 17 69 26 69 Z" />
      <path d="M 33 69 C 41 64 46 59 49 53 C 44 59 38 63 30 65 Z" />
      <path d="M 21 58 C 10 56 3 53 -2 56 C 3 50 13 48 20 52 Z" />
      <path d="M 25 52 C 34 46 40 40 43 34 C 38 40 32 44 23 48 Z" />
      <path d="M 19 41 C 9 36 3 31 0 33 C 5 27 14 28 19 35 Z" />
      <path d="M 24 35 C 31 28 36 23 38 17 C 34 23 29 28 22 31 Z" />
      <path d="M 21 24 C 14 18 10 13 8 14 C 11 9 19 11 23 18 Z" />
      <path d="M 27 20 C 32 14 36 9 37 4 C 34 9 30 14 25 17 Z" />
      <path d="M 33 7 C 28 2 28 -4 31 -7 C 33 -3 34 2 31 7 Z" />
    </svg>
  );
}

export function ReviewsSection({ ratings = { overall: 4.95, reviewCount: 19 }, reviews = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [selectedPill, setSelectedPill] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Guarantee all 19 reviews are available
  const safeReviews = reviews && reviews.length >= 19 ? reviews : mockListing.reviews;

  const toggleExpand = (id) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const ratingCategories = [
    { label: "Cleanliness", score: "5.0", icon: SprayBottleIcon },
    { label: "Accuracy", score: "5.0", icon: CheckCircle2 },
    { label: "Check-in", score: "5.0", icon: Key },
    { label: "Communication", score: "5.0", icon: MessageSquare },
    { label: "Location", score: "4.8", icon: Map },
    { label: "Value", score: "4.8", icon: Tag },
  ];

  const filteredReviews = selectedPill
    ? safeReviews.filter((r) =>
        r.comment.toLowerCase().includes(selectedPill.toLowerCase())
      )
    : safeReviews;

  return (
    <section id="reviews" className="py-8 border-b border-gray-200" aria-label="Guest reviews">
      {/* Centered Laurel Wreath Hero Header — Matching Photo 2 */}
      <div className="flex flex-col items-center justify-center text-center pt-2 pb-8 select-none">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <LaurelBranchLeft />
          <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#222222] tracking-tight">
            {ratings?.overall ? Number(ratings.overall).toFixed(2) : "4.95"}
          </span>
          <LaurelBranchRight />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mt-3">
          Guest favourite
        </h2>

        <p className="text-xs sm:text-sm text-gray-600 max-w-sm sm:max-w-md mx-auto mt-1 leading-snug">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>

        <a
          href="#reviews"
          onClick={(e) => {
            e.preventDefault();
            alert("Reviews are verified from guests who completed a stay at this property.");
          }}
          className="text-xs sm:text-sm text-gray-900 underline font-semibold hover:text-black mt-3 transition cursor-pointer"
        >
          How reviews work
        </a>
      </div>

      {/* Ratings Overview Row (Overall distribution + 6 Vertical Columns with Icons) */}
      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0 border-b border-gray-200 pb-8 mb-6 overflow-x-auto no-scrollbar">
        {/* Overall Rating 5-bar distribution */}
        <div className="lg:w-48 shrink-0 pr-6 lg:border-r lg:border-gray-200">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Overall rating</h3>
          <div className="space-y-1">
            {[
              { star: 5, pct: "95%" },
              { star: 4, pct: "5%" },
              { star: 3, pct: "0%" },
              { star: 2, pct: "0%" },
              { star: 1, pct: "0%" },
            ].map((row) => (
              <div key={row.star} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                <span className="w-2">{row.star}</span>
                <div className="w-24 sm:w-28 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-black rounded-full"
                    style={{ width: row.pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Category Columns with Icons */}
        <div className="flex-1 grid grid-cols-3 sm:grid-cols-6 divide-x divide-gray-200 pl-0 lg:pl-4">
          {ratingCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div key={idx} className="flex flex-col justify-between px-3 sm:px-4 py-1">
                <div>
                  <div className="text-xs font-semibold text-gray-900 leading-tight">{cat.label}</div>
                  <div className="text-base sm:text-lg font-bold text-gray-900 mt-1">{cat.score}</div>
                </div>
                <div className="mt-4 pt-2">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5] text-gray-900" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter Pills matching Image 2 */}
      <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-2 mb-8">
        {REVIEW_PILLS.map((pill) => {
          const isSelected = selectedPill === pill.label;
          return (
            <button
              key={pill.id}
              onClick={() => setSelectedPill(isSelected ? null : pill.label)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-medium whitespace-nowrap transition cursor-pointer ${
                isSelected
                  ? "border-black bg-black text-white"
                  : "border-gray-200 bg-white text-gray-800 hover:border-gray-900"
              }`}
            >
              <span>{pill.emoji}</span>
              <span>{pill.label}</span>
              <span className={`text-xs ${isSelected ? "text-gray-300" : "text-gray-500"}`}>{pill.count}</span>
            </button>
          );
        })}
      </div>

      {/* 2-Column Reviews Grid (Shows first 6 reviews, including Vaibhav S matching Image 4) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
        {(filteredReviews.length > 0 ? filteredReviews : safeReviews).slice(0, 6).map((review) => {
          const isLong = review.comment.length > 140;
          const isExpanded = expandedReviews[review.id];

          return (
            <div key={review.id} className="space-y-2.5 sm:space-y-3">
              {/* Reviewer Header */}
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">{review.author}</h3>
                  <p className="text-xs text-gray-500">{review.tenure}</p>
                </div>
              </div>

              {/* Stars & Date */}
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <div className="flex text-black text-xs">★★★★★</div>
                <span>·</span>
                <span className="font-medium text-gray-600">{review.date}</span>
              </div>

              {/* Review Body */}
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                {isLong && !isExpanded
                  ? `${review.comment.slice(0, 140)}...`
                  : review.comment}
              </p>

              {isLong && (
                <button
                  onClick={() => toggleExpand(review.id)}
                  className="text-xs sm:text-sm font-semibold underline text-gray-900 hover:text-black cursor-pointer"
                >
                  {isExpanded ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Show all reviews trigger — Matching Image 4 */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full sm:w-auto px-6 py-3 border border-gray-900 rounded-lg text-xs sm:text-sm font-semibold hover:bg-gray-50 transition cursor-pointer text-center"
      >
        Show all {safeReviews.length} reviews
      </button>

      {/* Full Reviews Modal Showing All 19 Reviews with Search */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`★ ${ratings.overall} · ${safeReviews.length} reviews`}
        maxWidth="max-w-4xl"
      >
        <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2">
          {/* Search Box in Modal */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search all reviews (e.g. jacuzzi, clean, host, wifi)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl outline-none focus:border-black font-normal"
            />
          </div>

          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Showing {safeReviews.filter((r) => !searchQuery || r.comment.toLowerCase().includes(searchQuery.toLowerCase()) || r.author.toLowerCase().includes(searchQuery.toLowerCase())).length} of {safeReviews.length} reviews
          </div>

          {/* All 19 Reviews List */}
          <div className="divide-y divide-gray-100">
            {safeReviews
              .filter((r) => !searchQuery || r.comment.toLowerCase().includes(searchQuery.toLowerCase()) || r.author.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((review) => (
                <div key={review.id} className="py-5 first:pt-0 last:pb-0 space-y-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">{review.author}</h4>
                      <p className="text-xs text-gray-500">{review.tenure}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-700">
                    <div className="flex text-black">★★★★★</div>
                    <span>·</span>
                    <span className="font-medium text-gray-600">{review.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">{review.comment}</p>
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </section>
  );
}
