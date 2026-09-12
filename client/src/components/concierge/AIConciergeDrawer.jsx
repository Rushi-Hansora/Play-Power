import React, { useState } from "react";
import { X, Sparkles, Search, MapPin, Star, Check, ArrowRight, Scale, Loader2 } from "lucide-react";
import { useConcierge } from "../../contexts/ConciergeContext";
import { useBooking } from "../../contexts/BookingContext";
import { AIConciergeEngine } from "../../services/ai/aiConciergeService";
import { formatCurrency } from "../../utils/formatters";
import { StayComparisonModal } from "./StayComparisonModal";

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

  const { selectPropertyForBooking } = useBooking();

  // Multi-stage agent thinking simulation
  const [thinkingStep, setThinkingStep] = useState(0);

  // Comparison modal state
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [compareStay1Id, setCompareStay1Id] = useState("listing-candolim-mirashya-ug10");
  const [compareStay2Id, setCompareStay2Id] = useState("listing-calangute-garden-studio");

  const samplePrompts = [
    "Candolim Jacuzzi room under ₹6,000 with rating 4.8+",
    "Budget stay under ₹4,000 with pool in Goa",
    "Luxury cliff villa with sunset sea view in Anjuna",
  ];

  const handleSearch = (searchQuery) => {
    const textToSearch = searchQuery || query;
    if (!textToSearch.trim()) return;

    // 1. Add user prompt to chat
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSearch,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsSearching(true);
    setThinkingStep(1);
    setQuery("");

    // Step 2: Search geographically
    setTimeout(() => {
      setThinkingStep(2);
    }, 600);

    // Step 3: Filter & compare amenities
    setTimeout(() => {
      setThinkingStep(3);
    }, 1200);

    // Step 4: Finalize recommendations
    setTimeout(() => {
      const constraints = AIConciergeEngine.parseConstraints(textToSearch);
      const ranked = AIConciergeEngine.rankCandidates(undefined, constraints);

      setParsedConstraints(constraints);
      setRecommendations(ranked);

      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: `Found ${ranked.length} verified stays in ${constraints.destination}${
          constraints.maxBudget ? ` under ${formatCurrency(constraints.maxBudget)}` : ""
        }${constraints.minRating ? ` with ${constraints.minRating}+ stars` : ""}. I've compared their amenities, beach proximity, and pricing below:`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsSearching(false);
      setThinkingStep(0);
    }, 1900);
  };

  const handleOpenComparison = (stayId) => {
    setCompareStay1Id("listing-candolim-mirashya-ug10");
    if (stayId) {
      setCompareStay2Id(stayId);
    }
    setIsComparisonOpen(true);
  };

  const handleSelectStayAndBook = (item) => {
    closeConcierge();
    selectPropertyForBooking({
      id: item.id,
      title: item.title,
      type: item.type,
      location: item.location,
      pricePerNight: item.pricePerNight,
      ratings: { overall: item.rating, reviewCount: 24 },
      photos: [{ url: item.image, caption: item.title }],
      pricing: {
        basePricePerNight: item.pricePerNight,
        cleaningFee: 1200,
      },
    });
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Travel Concierge Drawer"
        className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      >
        <div className="w-full max-w-full sm:max-w-xl bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-250">
          {/* Header matching Airbnb styling */}
          <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-gray-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="p-1.5 sm:p-2 bg-gray-100 rounded-full text-[#FF385C] shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold text-base sm:text-lg text-[#222222] tracking-tight">
                    Travel Concierge
                  </h2>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                    AI Assistant
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-500">
                  Real-time stay search, feature comparison & booking
                </p>
              </div>
            </div>

            <button
              onClick={closeConcierge}
              aria-label="Close concierge drawer"
              className="p-1.5 sm:p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
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

              {/* Realistic Multi-Step Agent Reasoning Stream (Like ChatGPT) */}
              {isSearching && (
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-3 shadow-2xs animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
                    <Loader2 className="w-3.5 h-3.5 text-[#FF385C] animate-spin" />
                    <span>AI Concierge Reasoning Stream...</span>
                  </div>

                  <div className="space-y-2 text-xs pl-1">
                    <div className={`flex items-center gap-2.5 ${thinkingStep >= 1 ? "text-gray-900 font-medium" : "text-gray-400"}`}>
                      {thinkingStep > 1 ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-[#FF385C] animate-ping shrink-0" />
                      )}
                      <span>Analyzing your travel dates, budget and party constraints...</span>
                    </div>

                    <div className={`flex items-center gap-2.5 ${thinkingStep >= 2 ? "text-gray-900 font-medium" : "text-gray-400"}`}>
                      {thinkingStep > 2 ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      ) : thinkingStep === 2 ? (
                        <span className="w-2 h-2 rounded-full bg-[#FF385C] animate-ping shrink-0" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-gray-300 shrink-0" />
                      )}
                      <span>Searching verified stays near Candolim Beach & North Goa...</span>
                    </div>

                    <div className={`flex items-center gap-2.5 ${thinkingStep >= 3 ? "text-gray-900 font-medium" : "text-gray-400"}`}>
                      {thinkingStep === 3 ? (
                        <span className="w-2 h-2 rounded-full bg-[#FF385C] animate-ping shrink-0" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-gray-300 shrink-0" />
                      )}
                      <span>Comparing private jacuzzi, pool, wifi speed & host response rates...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Comparison Action Banner & Recommendations */}
            {recommendations.length > 0 && !isSearching && (
              <div className="space-y-4 pt-2">
                {/* Compare Trigger Button */}
                <div className="p-3.5 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-white rounded-xl shadow-2xs text-gray-800">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                        Compare Top Stays
                      </h4>
                      <p className="text-[11px] text-gray-500">
                        View side-by-side rates, amenities & beach proximity
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleOpenComparison()}
                    className="px-3 py-1.5 bg-white border border-gray-300 hover:border-gray-900 rounded-lg text-xs font-bold text-gray-800 shadow-2xs transition cursor-pointer"
                  >
                    Compare
                  </button>
                </div>

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

                        {/* Price, Compare & Reserve CTAs */}
                        <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                          <div>
                            <span className="font-bold text-base text-[#222222]">
                              {formatCurrency(item.pricePerNight)}
                            </span>
                            <span className="text-xs text-gray-500 font-normal"> / night</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleOpenComparison(item.id)}
                              className="px-3 py-2 border border-gray-300 hover:border-gray-900 rounded-lg text-xs font-semibold text-gray-700 transition cursor-pointer"
                            >
                              Compare
                            </button>
                            <button
                              onClick={() => handleSelectStayAndBook(item)}
                              className="px-4 py-2 bg-gradient-to-r from-[#FF385C] to-[#E00B41] text-white rounded-lg text-xs font-bold hover:brightness-105 active:scale-98 transition shadow-xs cursor-pointer flex items-center gap-1"
                            >
                              <span>Select & Pay</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Search Bar modeled after Airbnb search pill */}
          <div className="p-3.5 sm:p-4 pb-6 sm:pb-4 border-t border-gray-200 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="flex items-center border border-gray-300 rounded-full pl-3.5 sm:pl-4 pr-1.5 py-1 sm:py-1.5 shadow-xs focus-within:border-black focus-within:shadow-md transition"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask Concierge: e.g. Jacuzzi stay under ₹6,000"
                className="flex-1 text-xs sm:text-sm outline-none text-[#222222] placeholder:text-gray-400 bg-transparent"
              />
              <button
                type="submit"
                disabled={isSearching || !query.trim()}
                aria-label="Search accommodations"
                className="p-2 sm:p-2.5 bg-[#FF385C] hover:bg-[#E00B41] disabled:opacity-40 text-white rounded-full transition cursor-pointer"
              >
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Modal */}
      <StayComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        initialStay1Id={compareStay1Id}
        initialStay2Id={compareStay2Id}
      />
    </>
  );
}

