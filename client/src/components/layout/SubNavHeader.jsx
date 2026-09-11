import React, { useState, useEffect } from "react";
import { useBooking } from "../../contexts/BookingContext";
import { formatCurrency } from "../../utils/formatters";

export function SubNavHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("photos");
  const { listing, nightsTotal, nights, setIsBookingModalOpen } = useBooking();

  const navItems = [
    { id: "photos", label: "Photos" },
    { id: "amenities", label: "Amenities" },
    { id: "reviews", label: "Reviews" },
    { id: "location", label: "Location" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Reveal sticky subnav when scrolled past 600px (hero gallery height)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // ScrollSpy logic to detect active section
      const sections = ["photos", "amenities", "reviews", "location"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <nav
      aria-label="Listing subsections navigation"
      className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-xs animate-in slide-in-from-top-2 duration-150"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 h-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative h-full flex items-center text-sm font-semibold transition cursor-pointer ${
                  isActive ? "text-[#222222]" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#222222] rounded-t-sm" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Sticky Reservation Snapshot */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="flex items-baseline justify-end gap-1.5">
              <span className="font-bold text-base text-[#222222]">
                {formatCurrency(nightsTotal)}
              </span>
              <span className="text-xs text-gray-500 font-normal">
                for {nights} nights
              </span>
            </div>
            <div className="flex items-center justify-end gap-1 text-xs text-gray-700">
              <span className="text-xs">★</span>
              <span className="font-semibold">{listing.ratings.overall}</span>
              <span className="text-gray-400">·</span>
              <span className="text-gray-500 underline cursor-pointer" onClick={() => scrollToSection("reviews")}>
                {listing.ratings.reviewCount} reviews
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              const bookingCard = document.getElementById("reservation-card");
              if (bookingCard) {
                bookingCard.scrollIntoView({ behavior: "smooth", block: "center" });
              } else {
                setIsBookingModalOpen(true);
              }
            }}
            className="bg-gradient-to-r from-[#FF385C] to-[#E00B41] text-white px-7 py-3 rounded-lg font-semibold text-sm hover:brightness-105 active:scale-98 transition shadow-sm cursor-pointer"
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
}
