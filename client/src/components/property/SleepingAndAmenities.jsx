import React, { useState } from "react";
import {
  BedDouble,
  Sofa,
  Utensils,
  Wifi,
  Monitor,
  Car,
  Waves,
  Bath,
  PawPrint,
  Video,
  BellOff,
  Snowflake,
  Wind,
  Tv,
  Music,
  Sun,
  Coffee,
  Droplets,
  Sparkles,
  Shield,
  Flame,
  Key,
  Briefcase,
  Baby,
  Building,
  Zap,
  Check,
} from "lucide-react";
import { Modal } from "../common/Modal";

function getAmenityIcon(name, iconName, available = true) {
  const iconClass = `w-6 h-6 shrink-0 stroke-[1.6] ${available ? "text-[#222222]" : "text-gray-400"}`;

  if (available === false) {
    if (name?.toLowerCase().includes("smoke")) {
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
        </svg>
      );
    }
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="3" x2="21" y2="21" />
      </svg>
    );
  }

  if (name === "Kitchen") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 3v5a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3" />
        <path d="M6 10v11" />
        <path d="M12 3v18" />
        <path d="M16 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3" />
        <path d="M18 12v9" />
      </svg>
    );
  }

  if (name === "Dedicated workspace") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 14h18v6" />
        <path d="M3 20h4" />
        <path d="M17 20h4" />
        <path d="M3 14v6" />
        <path d="M21 14v6" />
        <path d="M5 14V9a2 2 0 0 1 2-2h1" />
        <path d="M7 7l3-3" />
        <path d="M9 4h3" />
        <rect x="13" y="9" width="6" height="5" rx="1" />
      </svg>
    );
  }

  if (name === "Pool") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 17c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
        <path d="M2 21c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
        <path d="M7 11V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v7" />
        <path d="M7 6h4" />
        <path d="M7 9h4" />
      </svg>
    );
  }

  if (name === "Hot tub") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5z" />
        <path d="M6 5c.5 1 1 2 0 3" />
        <path d="M12 4c.5 1 1 2 0 3" />
        <path d="M18 5c.5 1 1 2 0 3" />
      </svg>
    );
  }

  if (name?.toLowerCase().includes("camera")) {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8h4v12H3z" />
        <path d="M7 10l9-4 2 4-9 4z" />
        <circle cx="17" cy="8" r="1.5" fill="currentColor" />
        <path d="M12 12v4" />
      </svg>
    );
  }

  switch (iconName) {
    case "utensils":
      return <Utensils className={iconClass} />;
    case "wifi":
      return <Wifi className={iconClass} />;
    case "workspace":
    case "laptop":
      return <Monitor className={iconClass} />;
    case "car":
      return <Car className={iconClass} />;
    case "pool":
    case "waves":
      return <Waves className={iconClass} />;
    case "hottub":
    case "bath":
      return <Bath className={iconClass} />;
    case "paw":
      return <PawPrint className={iconClass} />;
    case "camera":
      return <Video className={iconClass} />;
    case "snowflake":
      return <Snowflake className={iconClass} />;
    case "wind":
      return <Wind className={iconClass} />;
    case "tv":
      return <Tv className={iconClass} />;
    case "music":
      return <Music className={iconClass} />;
    case "sun":
      return <Sun className={iconClass} />;
    case "coffee":
      return <Coffee className={iconClass} />;
    case "droplets":
      return <Droplets className={iconClass} />;
    case "sparkles":
      return <Sparkles className={iconClass} />;
    case "shield":
      return <Shield className={iconClass} />;
    case "flame":
      return <Flame className={iconClass} />;
    case "key":
      return <Key className={iconClass} />;
    case "briefcase":
      return <Briefcase className={iconClass} />;
    case "baby":
      return <Baby className={iconClass} />;
    case "building":
      return <Building className={iconClass} />;
    case "zap":
      return <Zap className={iconClass} />;
    default:
      return <Check className={iconClass} />;
  }
}

export function SleepingArrangements({ arrangements }) {
  return (
    <section className="py-8 border-b border-gray-200" aria-label="Sleeping arrangements">
      <h2 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-6">
        Where you'll sleep
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {arrangements.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 transition bg-white shadow-2xs group"
          >
            {item.image && (
              <div className="aspect-16/10 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.room}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-104 group-hover:brightness-95"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-4 sm:p-5">
              <div className="mb-3">
                {item.icon === "bed-double" ? (
                  <BedDouble className="w-6 h-6 text-gray-800 stroke-[1.8]" />
                ) : (
                  <Sofa className="w-6 h-6 text-gray-800 stroke-[1.8]" />
                )}
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-0.5">{item.room}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{item.bedType}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AmenitiesSection({ amenities }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Top 10 featured amenities matching Image 3
  const displayAmenities = amenities.slice(0, 10);

  return (
    <section id="amenities" className="py-8 border-b border-gray-200" aria-label="Amenities">
      <h2 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-6">
        What this place offers
      </h2>

      {/* 2-Column Amenities List Matching Image 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-7">
        {displayAmenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-4 text-gray-800 py-1">
            {getAmenityIcon(amenity.name, amenity.icon, amenity.available)}
            <span
              className={`text-base font-normal ${
                amenity.available === false
                  ? "line-through text-gray-500"
                  : "text-gray-900"
              }`}
            >
              {amenity.name}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 border border-gray-900 rounded-lg text-sm font-semibold hover:bg-gray-50 transition active:scale-98 cursor-pointer"
      >
        Show all 50 amenities
      </button>

      {/* Amenities Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="What this place offers"
        maxWidth="max-w-2xl"
      >
        <div className="space-y-8 py-2">
          {[
            "Bathroom",
            "Bedroom",
            "Kitchen",
            "Outdoor",
            "Internet",
            "Cooling",
            "Entertainment",
            "Safety",
            "Services",
            "Facilities",
          ].map((category) => {
            const items = amenities.filter((a) => a.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category} className="border-b border-gray-100 pb-6 last:border-b-0">
                <h3 className="text-base font-bold text-gray-900 mb-4">{category}</h3>
                <div className="space-y-4">
                  {items.map((a, i) => (
                    <div key={i} className="flex items-center gap-3.5 text-sm">
                      {getAmenityIcon(a.name, a.icon, a.available)}
                      <span
                        className={
                          a.available === false
                            ? "line-through text-gray-400"
                            : "text-gray-800"
                        }
                      >
                        {a.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </section>
  );
}
