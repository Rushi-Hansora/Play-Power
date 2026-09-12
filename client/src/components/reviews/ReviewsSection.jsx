import React, { useState } from "react";
import { Modal } from "../common/Modal";

export function ReviewsSection({ ratings, reviews }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleExpand = (id) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { label: "Cleanliness", score: ratings.categories.cleanliness },
    { label: "Accuracy", score: ratings.categories.accuracy },
    { label: "Communication", score: ratings.categories.communication },
    { label: "Location", score: ratings.categories.location },
    { label: "Check-in", score: ratings.categories.checkIn },
    { label: "Value", score: ratings.categories.value },
  ];

  return (
    <section id="reviews" className="py-6 sm:py-8 border-b border-gray-200" aria-label="Guest reviews">
      {/* Reviews Summary Header */}
      <div className="flex items-center gap-2 mb-6 sm:mb-8">
        <span className="text-xl">★</span>
        <h2 className="text-lg sm:text-xl md:text-[22px] font-semibold text-gray-900">
          {ratings.overall} · {ratings.reviewCount} reviews
        </h2>
      </div>

      {/* Category Ratings Grid — Responsive Borders */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-4 gap-x-3 sm:gap-4 mb-8 pb-6 border-b border-gray-100">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="border-r border-gray-200 even:border-r-0 md:even:border-r md:last:border-r-0 pr-2 sm:pr-3"
          >
            <div className="text-[11px] sm:text-xs text-gray-500 font-medium mb-0.5">{cat.label}</div>
            <div className="text-sm sm:text-base font-bold text-gray-900">{cat.score.toFixed(1)}</div>
          </div>
        ))}
      </div>

      {/* 2-Column Reviews Grid Matching Reference Screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
        {reviews.slice(0, 4).map((review) => {
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
        title={`★ ${ratings.overall} · ${ratings.reviewCount} reviews`}
        maxWidth="max-w-4xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 py-2 sm:py-4">
          {reviews.map((r) => (
            <div key={r.id} className="space-y-2.5 sm:space-y-3 border-b border-gray-100 pb-5 sm:pb-6">
              <div className="flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm text-gray-900">{r.author}</div>
                  <div className="text-xs text-gray-500">{r.tenure}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>★★★★★</span>
                <span>·</span>
                <span>{r.date}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">{r.comment}</p>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
}
