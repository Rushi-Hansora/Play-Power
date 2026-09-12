import React, { useState } from "react";
import { CheckCircle2, Key, MessageSquare, Map, Tag } from "lucide-react";
import { Modal } from "../common/Modal";

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

export function ReviewsSection({ ratings, reviews }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [selectedPill, setSelectedPill] = useState(null);

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
    ? reviews.filter((r) =>
        r.comment.toLowerCase().includes(selectedPill.toLowerCase())
      )
    : reviews;

  return (
    <section id="reviews" className="py-8 border-b border-gray-200" aria-label="Guest reviews">
      {/* Top link: How reviews work */}
      <div className="flex justify-end mb-4">
        <a
          href="#reviews"
          onClick={(e) => {
            e.preventDefault();
            alert("Reviews are verified from guests who completed a stay at this property.");
          }}
          className="text-xs sm:text-sm text-gray-800 underline font-medium hover:text-black"
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

      {/* 2-Column Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
        {(filteredReviews.length > 0 ? filteredReviews : reviews).slice(0, 4).map((review) => {
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

      {/* Show all reviews trigger */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full sm:w-auto px-6 py-3 border border-gray-900 rounded-lg text-xs sm:text-sm font-semibold hover:bg-gray-50 transition cursor-pointer text-center"
      >
        Show all {ratings.reviewCount} reviews
      </button>

      {/* Full Reviews Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${ratings.overall} · ${ratings.reviewCount} reviews`}
        maxWidth="max-w-4xl"
      >
        <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0 space-y-2">
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">{review.author}</h4>
                  <p className="text-xs text-gray-500">{review.tenure}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <div className="flex text-black">★★★★★</div>
                <span>·</span>
                <span>{review.date}</span>
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
}
