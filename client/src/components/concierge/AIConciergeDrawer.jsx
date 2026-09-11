import React from "react";
import { X, Sparkles, Search, MapPin, Star, Check, ArrowRight } from "lucide-react";
import { useConcierge } from "../../contexts/ConciergeContext";
import { useBooking } from "../../contexts/BookingContext";
import { AIConciergeEngine } from "../../services/ai/aiConciergeService";
import { formatCurrency } from "../../utils/formatters";

export function AIConciergeDrawer() {
  const {
    isOpen,
    closeConcierge,
    query,
    setQuery,
    messages,
    setMessages,
    recommendations,
    setRecommendations,
    isSearching,
    setIsSearching,
    parsedConstraints,
    setParsedConstraints,
  } = useConcierge();

  const { setIsBookingModalOpen } = useBooking();

  const samplePrompts = [
    "Candolim Jacuzzi room under ₹6,000 with rating 4.8+",
    "Budget stay under ₹4,000 with pool in Goa",
    "Luxury cliff villa with sunset sea view in Anjuna",
  ];

  const handleSearch = (searchQuery) => {
    const textToSearch = searchQuery || query;
    if (!textToSearch.trim()) return;

    // Add user message
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSearch,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsSearching(true);

    // Run agent pipeline
    setTimeout(() => {
      const constraints = AIConciergeEngine.parseConstraints(textToSearch);
      const ranked = AIConciergeEngine.rankCandidates(undefined, constraints);

      setParsedConstraints(constraints);
      setRecommendations(ranked);

      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: `Here are the top matches in ${constraints.destination}${
          constraints.maxBudget ? ` under ${formatCurrency(constraints.maxBudget)}` : ""
        }${constraints.minRating ? ` with ${constraints.minRating}+ stars` : ""}. Ranked based on your criteria:`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsSearching(false);
      setQuery("");
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Travel Concierge Drawer"
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-250">
        {/* Header matching Airbnb styling */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-100 rounded-full text-[#FF385C]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-lg text-[#222222] tracking-tight">
                  Travel Concierge
                </h2>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                  AI Assistant
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Personalized recommendations matching your criteria
              </p>
            </div>
          </div>

          <button
            onClick={closeConcierge}
            aria-label="Close concierge drawer"
            className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Popular Filter Prompt Pills */}
          <div>
            <div className="text-xs font-semibold text-gray-700 mb-2.5">
              Popular searches
            </div>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => handleSearch(p)}
                  className="text-xs text-left px-3.5 py-1.5 rounded-full bg-white text-[#222222] border border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition shadow-2xs font-medium cursor-pointer"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Extracted Criteria Chips */}
          {parsedConstraints && (
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl">
              <div className="text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2">
                Identified Filters
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg font-medium text-[#222222] shadow-2xs">
                  📍 {parsedConstraints.destination}
                </span>
                {parsedConstraints.maxBudget && (
                  <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg font-medium text-[#222222] shadow-2xs">
                    💰 Max {formatCurrency(parsedConstraints.maxBudget)}
                  </span>
                )}
                {parsedConstraints.minRating && (
                  <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg font-medium text-[#222222] shadow-2xs">
                    ★ Min {parsedConstraints.minRating}
                  </span>
                )}
                {parsedConstraints.requestedAmenities?.map((a, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg font-medium text-gray-800 shadow-2xs"
                  >
                    ✨ {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Chat / Dialogue Stream */}
          <div className="space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`p-3.5 text-sm max-w-[85%] leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#222222] text-white rounded-2xl rounded-tr-xs"
                      : "bg-gray-50 border border-gray-200 text-[#222222] rounded-2xl rounded-tl-xs shadow-2xs"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}
          </div>

          {/* Ranked Property Cards matching Airbnb Listing Style */}
          {recommendations.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <h3 className="font-semibold text-base text-[#222222]">
                  Recommended Places to Stay
                </h3>
                <span className="text-xs text-gray-500">
                  {recommendations.length} available
                </span>
              </div>

              <div className="space-y-4">
                {recommendations.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition bg-white"
                  >
                    {/* Image Header with Match Score */}
                    <div className="relative aspect-16/9 overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#222222] font-bold text-xs px-2.5 py-1 rounded-full shadow-xs border border-gray-200 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>{item.matchScore}% Match</span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-4 space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-gray-500 uppercase tracking-wide">
                            {item.type}
                          </span>
                          <div className="flex items-center gap-1 font-semibold text-[#222222]">
                            <Star className="w-3.5 h-3.5 fill-current text-black" />
                            <span>{item.rating}</span>
                          </div>
                        </div>
                        <h4 className="font-semibold text-sm text-[#222222] mt-1">{item.title}</h4>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          <span>{item.location} · {item.distanceKm} km to beach</span>
                        </p>
                      </div>

                      {/* Why Selected Box in Neutral Airbnb Gray */}
                      <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1.5 text-xs text-gray-700">
                        <div className="font-semibold text-[11px] text-gray-900">
                          Why this matches your search
                        </div>
                        {item.reasoning.map((r, ri) => (
                          <div key={ri} className="flex items-start gap-1.5 leading-tight text-gray-600">
                            <Check className="w-3.5 h-3.5 text-gray-900 shrink-0 mt-0.5" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price & Reserve CTA */}
                      <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-base text-[#222222]">
                            {formatCurrency(item.pricePerNight)}
                          </span>
                          <span className="text-xs text-gray-500 font-normal"> / night</span>
                        </div>

                        <button
                          onClick={() => {
                            closeConcierge();
                            setIsBookingModalOpen(true);
                          }}
                          className="px-5 py-2.5 bg-gradient-to-r from-[#FF385C] to-[#E00B41] text-white rounded-lg text-xs font-bold hover:brightness-105 active:scale-98 transition shadow-xs cursor-pointer flex items-center gap-1.5"
                        >
                          <span>Reserve</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Search Bar modeled after Airbnb search pill */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex items-center border border-gray-300 rounded-full pl-4 pr-1.5 py-1.5 shadow-xs focus-within:border-black focus-within:shadow-md transition"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Where do you want to stay in Goa?"
              className="flex-1 text-sm outline-none text-[#222222] placeholder:text-gray-400 bg-transparent"
            />
            <button
              type="submit"
              disabled={isSearching || !query.trim()}
              aria-label="Search accommodations"
              className="p-2.5 bg-[#FF385C] hover:bg-[#E00B41] disabled:opacity-40 text-white rounded-full transition cursor-pointer"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
