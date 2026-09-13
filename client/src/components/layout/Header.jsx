import React, { useState } from "react";
import { Search, Globe, Menu, Sparkles } from "lucide-react";
import { useConcierge } from "../../contexts/ConciergeContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openConcierge } = useConcierge();

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-16 md:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo matching Screenshot */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center cursor-pointer select-none shrink-0"
        >
          <img
            src="/airbnb-logo-cropped.png"
            alt="Airbnb"
            className="h-7 sm:h-8 w-auto object-contain transition hover:opacity-95"
          />
        </div>

        {/* Center Search Pill — Desktop Full Matching Screenshot */}
        <div
          onClick={openConcierge}
          className="hidden sm:flex items-center border border-gray-200 rounded-full py-2 pl-3.5 pr-2 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition cursor-pointer text-xs md:text-sm font-medium bg-white"
        >
          {/* House with Tree Miniature Graphic */}
          <div className="flex items-center gap-2 pr-3 border-r border-gray-200">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 28 28" fill="none">
              {/* Green tree foliage */}
              <circle cx="21" cy="11" r="5" fill="#84CC16" />
              <rect x="20" y="14" width="2" height="7" fill="#78350F" rx="0.5" />
              {/* Sloped Modern House */}
              <path d="M4 14.5L13 6l9 7.5v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-11z" fill="#9CA3AF" stroke="#4B5563" strokeWidth="1.2" />
              <path d="M3 14l10-8.5L23 14" stroke="#1F2937" strokeWidth="1.6" strokeLinecap="round" />
              {/* Red Front Door */}
              <rect x="10.5" y="16" width="5" height="9.5" fill="#EF4444" rx="0.5" />
              <circle cx="14.2" cy="21" r="0.6" fill="#FEE2E2" />
            </svg>
            <span className="text-gray-900 font-semibold">Anywhere</span>
          </div>

          <div className="px-3 border-r border-gray-200 text-gray-900 font-semibold">
            Anytime
          </div>

          <div className="px-3 text-gray-400 font-normal">
            Add guests
          </div>

          {/* Coral Circular Search Button */}
          <div className="bg-[#FF385C] hover:bg-[#E00B41] text-white p-2 rounded-full transition ml-1">
            <Search className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </div>

        {/* Center Search Pill — Mobile Compact */}
        <div
          onClick={openConcierge}
          className="flex sm:hidden flex-1 min-w-0 max-w-[210px] items-center gap-2 border border-gray-300 rounded-full py-1.5 px-3 shadow-xs text-xs font-semibold text-gray-900 cursor-pointer"
        >
          <Search className="w-3.5 h-3.5 text-[#FF385C] shrink-0 stroke-[2.5]" />
          <span className="truncate">Anywhere · Anytime</span>
        </div>

        {/* Right Section Matching Screenshot */}
        <div className="flex items-center gap-2 sm:gap-2.5 relative shrink-0">
          {/* Become a host link */}
          <button
            onClick={() => alert("Airbnb host onboarding simulated.")}
            className="text-xs sm:text-sm font-semibold text-gray-900 hover:bg-gray-100 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full transition cursor-pointer"
          >
            Become a host
          </button>

          {/* Circular Globe Button */}
          <button
            aria-label="Language & Currency"
            onClick={() => alert("Language: English (US) · Currency: INR (₹)")}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-800 transition cursor-pointer"
          >
            <Globe className="w-4.5 h-4.5 stroke-[1.8]" />
          </button>

          {/* Circular Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Main navigation menu"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-800 transition cursor-pointer"
          >
            <Menu className="w-4.5 h-4.5 stroke-[2]" />
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-12 sm:top-14 w-56 sm:w-60 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50 text-sm animate-in fade-in zoom-in-95 duration-150">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openConcierge();
                }}
                className="w-full text-left px-4 py-2.5 font-semibold text-[#FF385C] hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#FF385C]" />
                AI Travel Concierge
              </button>
              <div className="border-t border-gray-100 my-1" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-left px-4 py-2.5 font-semibold hover:bg-gray-50 cursor-pointer"
              >
                Sign up
              </button>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                Log in
              </button>
              <div className="border-t border-gray-100 my-1" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                Help Centre
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
