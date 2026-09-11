import React from "react";
import { Sparkles } from "lucide-react";
import { useConcierge } from "../../contexts/ConciergeContext";

export function FloatingConciergeTrigger() {
  const { openConcierge } = useConcierge();

  return (
    <button
      onClick={openConcierge}
      aria-label="Open AI Travel Concierge Assistant"
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20 cursor-pointer group"
    >
      <div className="p-1 bg-white/20 rounded-full group-hover:rotate-12 transition">
        <Sparkles className="w-4 h-4 text-amber-300" />
      </div>
      <span className="text-xs font-bold tracking-wide">AI Concierge</span>
    </button>
  );
}
