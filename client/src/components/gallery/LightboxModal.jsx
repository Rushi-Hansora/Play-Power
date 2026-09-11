import React from "react";
import { X, ChevronLeft, ChevronRight, Share, Heart } from "lucide-react";
import { useGallery } from "../../contexts/GalleryContext";

export function LightboxModal() {
  const {
    isLightboxOpen,
    closeLightbox,
    activePhotoIndex,
    currentPhoto,
    totalPhotos,
    nextPhoto,
    prevPhoto,
  } = useGallery();

  const [isSaved, setIsSaved] = React.useState(false);

  if (!isLightboxOpen || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Single photo viewer"
      className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between select-none animate-in fade-in duration-200"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-5 text-white z-20">
        {/* Close Button */}
        <button
          onClick={closeLightbox}
          aria-label="Close photo viewer"
          className="flex items-center gap-2 p-2 rounded-full hover:bg-white/10 text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
          <span className="text-sm font-medium hidden sm:inline">Close</span>
        </button>

        {/* Counter */}
        <div className="text-sm font-medium text-gray-300">
          {activePhotoIndex + 1} / {totalPhotos}
        </div>

        {/* Share / Save controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: currentPhoto.caption || "Airbnb photo",
                  url: currentPhoto.url,
                }).catch(() => {});
              } else {
                navigator.clipboard.writeText(currentPhoto.url);
                alert("Image link copied!");
              }
            }}
            aria-label="Share photo"
            className="p-2 rounded-full hover:bg-white/10 text-white transition cursor-pointer"
          >
            <Share className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsSaved(!isSaved)}
            aria-label="Save photo"
            className="p-2 rounded-full hover:bg-white/10 text-white transition cursor-pointer"
          >
            <Heart
              className={`w-4 h-4 transition ${
                isSaved ? "fill-[#FF385C] text-[#FF385C]" : "text-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Main Image Stage with Chevrons */}
      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-16 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={prevPhoto}
          aria-label="Previous photo"
          className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition active:scale-95 cursor-pointer backdrop-blur-xs"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Active Photo Container */}
        <div className="max-w-4xl max-h-[75vh] flex items-center justify-center">
          <img
            key={currentPhoto.id || activePhotoIndex}
            src={currentPhoto.url}
            alt={currentPhoto.caption || "Property photo"}
            className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl transition duration-300"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={nextPhoto}
          aria-label="Next photo"
          className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition active:scale-95 cursor-pointer backdrop-blur-xs"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption & Category Footer */}
      <div className="px-6 py-6 text-center text-gray-300 text-sm max-w-2xl mx-auto z-20">
        {currentPhoto.caption && (
          <p className="font-normal text-white">{currentPhoto.caption}</p>
        )}
        {currentPhoto.category && (
          <span className="text-xs text-gray-400 mt-1 inline-block">
            Category: {currentPhoto.category}
          </span>
        )}
      </div>
    </div>
  );
}
