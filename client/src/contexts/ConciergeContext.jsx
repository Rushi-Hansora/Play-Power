import React, { createContext, useContext, useState } from "react";

const ConciergeContext = createContext(null);

export function ConciergeProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "msg-welcome",
      sender: "ai",
      text: "Hello! I am your AI Travel Concierge. Tell me your destination, budget, desired rating, or amenities, and I will recommend and rank matching stays.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [recommendations, setRecommendations] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [parsedConstraints, setParsedConstraints] = useState(null);

  const openConcierge = () => setIsOpen(true);
  const closeConcierge = () => setIsOpen(false);

  const value = {
    isOpen,
    openConcierge,
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
  };

  return <ConciergeContext.Provider value={value}>{children}</ConciergeContext.Provider>;
}

export function useConcierge() {
  const context = useContext(ConciergeContext);
  if (!context) {
    throw new Error("useConcierge must be used within a ConciergeProvider");
  }
  return context;
}
