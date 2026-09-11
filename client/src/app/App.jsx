import React from "react";
import { Header } from "../components/layout/Header";
import { SubNavHeader } from "../components/layout/SubNavHeader";
import { Footer } from "../components/layout/Footer";
import { HeroGallery } from "../components/gallery/HeroGallery";
import { PhotoTourModal } from "../components/gallery/PhotoTourModal";
import { LightboxModal } from "../components/gallery/LightboxModal";
import { PropertyOverview } from "../components/property/PropertyOverview";
import { SleepingArrangements, AmenitiesSection } from "../components/property/SleepingAndAmenities";
import { ReviewsSection } from "../components/reviews/ReviewsSection";
import { LocationSection } from "../components/property/LocationSection";
import { HostAndPoliciesSection } from "../components/property/HostAndPoliciesSection";
import { StickyReservationCard } from "../components/booking/StickyReservationCard";
import { BookingSummaryModal } from "../components/booking/BookingSummaryModal";
import { AIConciergeDrawer } from "../components/concierge/AIConciergeDrawer";
import { FloatingConciergeTrigger } from "../components/concierge/FloatingConciergeTrigger";
import { useBooking } from "../contexts/BookingContext";

export function App() {
  const { listing } = useBooking();

  return (
    <div className="min-h-screen bg-white text-[#222222] flex flex-col font-sans">
      {/* Global Top Header */}
      <Header />

      {/* Sticky Subnav Bar with ScrollSpy (Photos, Amenities, Reviews, Location + Sticky Reserve) */}
      <SubNavHeader />

      {/* Main Listing View Container */}
      <main className="flex-1 max-w-7xl mx-auto px-6 md:px-10 w-full space-y-8">
        {/* P0: 5-Photo Hero Collage */}
        <HeroGallery />

        {/* 2-Column Core Layout: Property Details on Left, Sticky Reservation Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-2 items-start">
          {/* Left Column (Details, Amenities, Sleep) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-2">
            <PropertyOverview listing={listing} />
            <SleepingArrangements arrangements={listing.sleepingArrangements} />
            <AmenitiesSection amenities={listing.amenities} />
          </div>

          {/* Right Column (Sticky Reservation Card) */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28">
            <StickyReservationCard />
          </div>
        </div>

        {/* Full Width Sections */}
        <ReviewsSection ratings={listing.ratings} reviews={listing.reviews} />
        <LocationSection location={listing.location} />
        <HostAndPoliciesSection host={listing.host} policies={listing.policies} />
      </main>

      {/* Modals and Overlay Experiences */}
      <PhotoTourModal />
      <LightboxModal />
      <BookingSummaryModal />
      <AIConciergeDrawer />
      <FloatingConciergeTrigger />

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default App;
