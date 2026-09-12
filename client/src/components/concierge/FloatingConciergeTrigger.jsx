import React from "react";
import { Sparkles } from "lucide-react";
import { useConcierge } from "../../contexts/ConciergeContext";

export function FloatingConciergeTrigger() {
  const { openConcierge } = useConcierge();

  return (
    <button
      onClick={openConcierge}
      aria-label="Open AI Travel Concierge"
      className="fixed bottom-20 right-3.5 sm:right-6 lg:bottom-6 lg:right-6 z-30 flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-3 rounded-full bg-[#222222] text-white shadow-xl hover:bg-black hover:scale-102 active:scale-95 transition-all duration-200 border border-black/10 cursor-pointer group"
    >
      <div className="p-1 bg-white/10 rounded-full group-hover:rotate-12 transition shrink-0">
        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF385C]" />
      </div>
      <span className="text-xs sm:text-sm font-semibold tracking-wide">AI Concierge</span>
    </button>
  );
}
