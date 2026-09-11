import React from "react";
import { Grid, Share, Heart } from "lucide-react";
import { useGallery } from "../../contexts/GalleryContext";

export function HeroGallery() {
  const { photos, openPhotoTour, openLightbox } = useGallery();
  const [isSaved, setIsSaved] = React.useState(false);

  // Take top 5 photos for hero collage
  const heroPhotos = photos.slice(0, 5);

  return (
    <section id="photos" aria-label="Property photos" className="pt-6">
      {/* Title and Action Buttons Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h1 className="text-2xl md:text-[26px] font-semibold text-[#222222] tracking-tight">
            Romantic Jacuzzi 1BHK Candolim | Mirashya UG10
          </h1>
        </div>

        <div className="flex items-center gap-4 text-sm font-semibold text-gray-800">
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
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition cursor-pointer underline"
          >
            <Share className="w-4 h-4" />
            <span>Share</span>
          </button>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition cursor-pointer underline"
          >
            <Heart
              className={`w-4 h-4 transition ${
                isSaved ? "fill-[#FF385C] text-[#FF385C]" : "text-gray-800"
              }`}
            />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>

      {/* 5-Photo Hero Collage Grid */}
      <div className="relative rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-4 gap-2 h-[380px] md:h-[460px]">
        {/* Large Main Hero Photo (Left - spans 2 cols) */}
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

        {/* 4 Smaller Photos (Right 2 cols in a 2x2 grid) */}
        <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-2 h-full">
          {heroPhotos.slice(1, 5).map((photo, index) => (
            <div
              key={photo.id || index}
              onClick={() => openLightbox(index + 1)}
              className="relative h-[225px] overflow-hidden cursor-pointer group bg-gray-200"
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
          className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-white/95 hover:bg-white text-gray-900 border border-gray-900/80 px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition active:scale-95 cursor-pointer backdrop-blur-xs"
        >
          <Grid className="w-4 h-4" />
          <span>Show all photos</span>
        </button>
      </div>
    </section>
  );
}
