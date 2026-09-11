import React, { useState } from "react";
import { X, Sparkles, Send, MapPin, Star, CheckCircle, ArrowRight } from "lucide-react";
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
        text: `I parsed your criteria: looking around ${constraints.destination}${
          constraints.maxBudget ? ` under ₹${constraints.maxBudget.toLocaleString()}` : ""
        }${constraints.minRating ? ` with ${constraints.minRating}+ stars` : ""}. I found ${
          ranked.length
        } matching stays ranked by suitability.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsSearching(false);
      setQuery("");
    }, 450);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="AI Travel Concierge drawer"
      className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-250">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/15 rounded-lg">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="font-bold text-base tracking-tight">AI Travel Concierge</h2>
              <p className="text-[11px] text-purple-200">PlayPower Labs Project Differentiator</p>
            </div>
          </div>
          <button
            onClick={closeConcierge}
            aria-label="Close concierge drawer"
            className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Quick Prompt Suggestions */}
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
              Try a sample travel prompt
            </div>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => handleSearch(p)}
                  className="text-xs text-left px-3 py-1.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200 hover:bg-purple-100 transition cursor-pointer"
                >
                  "{p}"
                </button>
              ))}
            </div>
          </div>

          {/* Parsed Constraint Chips if available */}
          {parsedConstraints && (
            <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2">
                Agent Extracted Constraints
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 bg-white border border-gray-300 rounded-md font-medium text-gray-800">
                  📍 {parsedConstraints.destination}
                </span>
                {parsedConstraints.maxBudget && (
                  <span className="px-2.5 py-1 bg-white border border-gray-300 rounded-md font-medium text-gray-800">
                    💰 Max {formatCurrency(parsedConstraints.maxBudget)}
                  </span>
                )}
                {parsedConstraints.minRating && (
                  <span className="px-2.5 py-1 bg-white border border-gray-300 rounded-md font-medium text-gray-800">
                    ★ Min {parsedConstraints.minRating}
                  </span>
                )}
                {parsedConstraints.requestedAmenities?.map((a, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-purple-100 text-purple-900 rounded-md font-medium"
                  >
                    ✨ {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Chat Messages */}
          <div className="space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`p-3.5 rounded-2xl text-sm max-w-[85%] ${
                    msg.sender === "user"
                      ? "bg-[#222222] text-white rounded-br-xs"
                      : "bg-gray-100 text-gray-800 rounded-bl-xs"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}
          </div>

          {/* Recommendations List */}
          {recommendations.length > 0 && (
            <div className="space-y-4 pt-2">
              <h3 className="font-bold text-base text-gray-900 flex items-center justify-between">
                <span>Top Ranked Matches</span>
                <span className="text-xs font-normal text-gray-500">
                  {recommendations.length} properties
                </span>
              </h3>

              <div className="space-y-4">
                {recommendations.map((item, idx) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition bg-white"
                  >
                    <div className="relative h-44 overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Match Score Badge */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-purple-900 font-extrabold text-xs px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                        <span>{item.matchScore}% Match</span>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">
                            {item.type}
                          </span>
                          <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                            <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                            <span>{item.rating}</span>
                          </div>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900 mt-1">{item.title}</h4>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          <span>{item.location} ({item.distanceKm} km from center)</span>
                        </p>
                      </div>

                      {/* Why Selected Reasoning */}
                      <div className="p-2.5 bg-purple-50/70 rounded-xl space-y-1">
                        <div className="text-[10px] font-bold text-purple-900 uppercase tracking-wider">
                          Why this was selected
                        </div>
                        {item.reasoning.map((r, ri) => (
                          <div
                            key={ri}
                            className="text-xs text-purple-950 flex items-start gap-1.5"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price & Action */}
                      <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-base text-gray-900">
                            {formatCurrency(item.pricePerNight)}
                          </span>
                          <span className="text-xs text-gray-500"> / night</span>
                        </div>

                        <button
                          onClick={() => {
                            closeConcierge();
                            setIsBookingModalOpen(true);
                          }}
                          className="px-4 py-2 bg-gradient-to-r from-[#FF385C] to-[#E00B41] text-white rounded-lg text-xs font-bold hover:brightness-105 transition cursor-pointer flex items-center gap-1"
                        >
                          <span>Book Now</span>
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

        {/* Bottom Search Input Bar */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Under ₹5,000 in Candolim with jacuzzi..."
              className="flex-1 text-sm border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
            />
            <button
              type="submit"
              disabled={isSearching || !query.trim()}
              aria-label="Send query"
              className="p-3 bg-purple-700 hover:bg-purple-800 disabled:opacity-40 text-white rounded-xl transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
