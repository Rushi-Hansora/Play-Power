import React from "react";
import { Grid, Share, Heart } from "lucide-react";
import { useGallery } from "../../contexts/GalleryContext";

export function HeroGallery() {
  const { photos, openPhotoTour, openLightbox } = useGallery();
  const [isSaved, setIsSaved] = React.useState(false);

  // Take top 5 photos for hero collage
  const heroPhotos = photos.slice(0, 5);

  return (
    <section id="photos" aria-label="Property photos" className="pt-4 md:pt-6">
      {/* Title and Action Buttons Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-[#222222] tracking-tight leading-snug">
            Romantic Jacuzzi 1BHK Candolim | Mirashya UG10
          </h1>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-gray-800 self-start sm:self-auto">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Romantic Jacuzzi 1BHK Candolim",
                  url: window.location.href,
                }).catch(() => {});
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Listing link copied to clipboard!");
              }
            }}
            className="flex items-center gap-1.5 p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition cursor-pointer underline"
          >
            <Share className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Share</span>
          </button>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-1.5 p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition cursor-pointer underline"
          >
            <Heart
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition ${
                isSaved ? "fill-[#FF385C] text-[#FF385C]" : "text-gray-800"
              }`}
            />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>

      {/* Hero Collage Grid — Responsive Height */}
      <div className="relative rounded-xl md:rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-4 gap-2 h-[260px] sm:h-[350px] md:h-[460px]">
        {/* Large Main Hero Photo */}
        {heroPhotos[0] && (
          <div
            onClick={() => openLightbox(0)}
            className="md:col-span-2 relative h-full overflow-hidden cursor-pointer group bg-gray-200"
          >
            <img
              src={heroPhotos[0].url}
              alt={heroPhotos[0].caption}
              className="w-full h-full object-cover transition duration-300 group-hover:brightness-90 group-hover:scale-102"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
          </div>
        )}

        {/* 4 Smaller Photos (Hidden on mobile, visible on tablet/desktop) */}
        <div className="hidden md:grid md:col-span-2 grid-cols-2 grid-rows-2 gap-2 h-full">
          {heroPhotos.slice(1, 5).map((photo, index) => (
            <div
              key={photo.id || index}
              onClick={() => openLightbox(index + 1)}
              className="relative h-full overflow-hidden cursor-pointer group bg-gray-200"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition duration-300 group-hover:brightness-90 group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
            </div>
          ))}
        </div>

        {/* Floating "Show all photos" Pill Button */}
        <button
          onClick={openPhotoTour}
          aria-label="Show all photos"
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex items-center gap-1.5 sm:gap-2 bg-white/95 hover:bg-white text-gray-900 border border-gray-900/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition active:scale-95 cursor-pointer backdrop-blur-xs"
        >
          <Grid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Show all photos</span>
        </button>
      </div>
    </section>
  );
}
