import React from "react";
import { Sparkles } from "lucide-react";
import { useConcierge } from "../../contexts/ConciergeContext";

export function FloatingConciergeTrigger() {
  const { openConcierge } = useConcierge();

  return (
    <button
      onClick={openConcierge}
      aria-label="Open AI Travel Concierge"
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#222222] text-white shadow-xl hover:bg-black hover:scale-102 active:scale-98 transition-all duration-200 border border-black/10 cursor-pointer group"
    >
      <div className="p-1 bg-white/10 rounded-full group-hover:rotate-12 transition">
        <Sparkles className="w-4 h-4 text-[#FF385C]" />
      </div>
      <span className="text-sm font-semibold tracking-wide">AI Concierge</span>
    </button>
  );
}
