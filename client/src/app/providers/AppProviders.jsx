import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../queryClient/queryClient";
import { GalleryProvider } from "../../contexts/GalleryContext";
import { BookingProvider } from "../../contexts/BookingContext";
import { ConciergeProvider } from "../../contexts/ConciergeContext";

export function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GalleryProvider>
        <BookingProvider>
          <ConciergeProvider>
            {children}
          </ConciergeProvider>
        </BookingProvider>
      </GalleryProvider>
    </QueryClientProvider>
  );
}
