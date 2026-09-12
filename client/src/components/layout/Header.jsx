import React, { useState } from "react";
import { Search, Globe, Menu, User, Sparkles } from "lucide-react";
import { useConcierge } from "../../contexts/ConciergeContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openConcierge } = useConcierge();

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-16 md:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center cursor-pointer select-none shrink-0"
        >
          <img
            src="/airbnb-logo.jpg"
            alt="Airbnb"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain mix-blend-multiply"
          />
        </div>

        {/* Center Search Pill — Desktop Full */}
        <div className="hidden sm:flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-xs hover:shadow-md transition cursor-pointer text-xs md:text-sm font-medium">
          <button className="px-2.5 md:px-3 border-r border-gray-200 text-gray-900 font-semibold">
            Anywhere
          </button>
          <button className="px-2.5 md:px-3 border-r border-gray-200 text-gray-900 font-semibold">
            Any week
          </button>
          <button className="px-2.5 md:px-3 text-gray-500">
            Add guests
          </button>
          <div className="bg-[#FF385C] text-white p-1.5 md:p-2 rounded-full ml-1.5 md:ml-2">
            <Search className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>

        {/* Center Search Pill — Mobile Compact */}
        <div className="flex sm:hidden flex-1 min-w-0 max-w-[200px] items-center gap-2 border border-gray-300 rounded-full py-1.5 px-3 shadow-xs text-xs font-semibold text-gray-900 cursor-pointer">
          <Search className="w-3.5 h-3.5 text-[#FF385C] shrink-0 stroke-[2.5]" />
          <span className="truncate">Anywhere · Any week</span>
        </div>

        {/* Right User Navigation */}
        <div className="flex items-center gap-2 sm:gap-3 relative shrink-0">
          {/* AI Travel Concierge quick action button (Desktop) */}
          <button
            onClick={openConcierge}
            aria-label="Open AI Travel Concierge"
            className="hidden lg:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full border border-gray-300 text-[#222222] hover:border-gray-900 hover:shadow-xs transition bg-white"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF385C]" />
            <span>AI Concierge</span>
          </button>

          <button className="hidden md:block text-sm font-semibold text-gray-800 hover:bg-gray-100 px-3.5 py-2.5 rounded-full transition">
            Airbnb your home
          </button>

          <button
            aria-label="Select language and currency"
            className="hidden sm:block p-2.5 text-gray-700 hover:bg-gray-100 rounded-full transition"
          >
            <Globe className="w-4 h-4" />
          </button>

          {/* User Profile Menu Pill */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="User navigation menu"
            className="flex items-center gap-2 sm:gap-3 border border-gray-300 rounded-full p-1.5 sm:p-2 hover:shadow-md transition cursor-pointer"
          >
            <Menu className="w-4 h-4 text-gray-600" />
            <div className="bg-gray-700 text-white rounded-full p-1">
              <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-12 sm:top-14 w-56 sm:w-60 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 text-sm animate-in fade-in zoom-in-95 duration-150">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openConcierge();
                }}
                className="w-full text-left px-4 py-2.5 font-semibold text-[#FF385C] hover:bg-rose-50 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#FF385C]" />
                AI Travel Concierge
              </button>
              <div className="border-t border-gray-100 my-1" />
              <button className="w-full text-left px-4 py-2.5 font-semibold hover:bg-gray-50">
                Sign up
              </button>
              <button className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50">
                Log in
              </button>
              <div className="border-t border-gray-100 my-1" />
              <button className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50">
                Airbnb your home
              </button>
              <button className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50">
                Help Center
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
