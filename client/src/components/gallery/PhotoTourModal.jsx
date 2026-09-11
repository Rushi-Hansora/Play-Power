import React, { useMemo } from "react";
import { ChevronLeft, Share, Heart } from "lucide-react";
import { useGallery } from "../../contexts/GalleryContext";

export function PhotoTourModal() {
  const { photos, isPhotoTourOpen, closePhotoTour, openLightbox } = useGallery();
  const [isSaved, setIsSaved] = React.useState(false);

  // Group photos by category
  const categorizedPhotos = useMemo(() => {
    const groups = {};
    photos.forEach((photo, globalIndex) => {
      const cat = photo.category || "General";
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push({ ...photo, globalIndex });
    });
    return groups;
  }, [photos]);

  if (!isPhotoTourOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full-screen photo tour"
      className="fixed inset-0 z-50 bg-white overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <button
          onClick={closePhotoTour}
          aria-label="Close photo tour"
          className="flex items-center gap-1 p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-800 transition cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold text-sm">Photos</span>
        </button>

        <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Romantic Jacuzzi 1BHK Candolim",
                  url: window.location.href,
                }).catch(() => {});
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied!");
              }
            }}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition cursor-pointer"
          >
            <Share className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition cursor-pointer"
          >
            <Heart
              className={`w-4 h-4 transition ${
                isSaved ? "fill-[#FF385C] text-[#FF385C]" : "text-gray-800"
              }`}
            />
            <span className="hidden sm:inline">{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>

      {/* Main Categorized Photos Grid */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="space-y-12">
          {Object.entries(categorizedPhotos).map(([category, items]) => (
            <section key={category} aria-labelledby={`cat-${category}`}>
              <h2
                id={`cat-${category}`}
                className="text-xl font-bold text-gray-900 mb-4 tracking-tight"
              >
                {category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => openLightbox(photo.globalIndex)}
                    className="group cursor-pointer overflow-hidden rounded-xl bg-gray-100 relative"
                  >
                    <div className="aspect-4/3 overflow-hidden">
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-full object-cover transition duration-300 group-hover:scale-103 group-hover:brightness-95"
                        loading="lazy"
                      />
                    </div>
                    {photo.caption && (
                      <div className="p-3 bg-white">
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {photo.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
