import React from "react";
import { Header } from "../components/layout/Header";
import { SubNavHeader } from "../components/layout/SubNavHeader";
import { MobileReservationBar } from "../components/layout/MobileReservationBar";
import { Footer } from "../components/layout/Footer";
import { HeroGallery } from "../components/gallery/HeroGallery";
import { PhotoTourModal } from "../components/gallery/PhotoTourModal";
import { LightboxModal } from "../components/gallery/LightboxModal";
import { PropertyOverview } from "../components/property/PropertyOverview";
import { SleepingArrangements, AmenitiesSection } from "../components/property/SleepingAndAmenities";
import { CalendarSection } from "../components/property/CalendarSection";
import { ReviewsSection } from "../components/reviews/ReviewsSection";
import { LocationSection } from "../components/property/LocationSection";
import { HostAndPoliciesSection } from "../components/property/HostAndPoliciesSection";
import { NearbyStaysSection } from "../components/property/NearbyStaysSection";
import { StickyReservationCard } from "../components/booking/StickyReservationCard";
import { DiscountBanner } from "../components/booking/DiscountBanner";
import { BookingSummaryModal } from "../components/booking/BookingSummaryModal";
import { AIConciergeDrawer } from "../components/concierge/AIConciergeDrawer";
import { FloatingConciergeTrigger } from "../components/concierge/FloatingConciergeTrigger";
import { useBooking } from "../contexts/BookingContext";

export function App() {
  const { listing } = useBooking();

  return (
    <div className="min-h-screen bg-white text-[#222222] flex flex-col font-sans pb-28 lg:pb-0">
      {/* Global Top Header */}
      <Header />

      {/* Sticky Subnav Bar with ScrollSpy (Photos, Amenities, Reviews, Location + Sticky Reserve on desktop) */}
      <SubNavHeader />

      {/* Main Listing View Container with Responsive Padding */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full space-y-6 sm:space-y-8">
        {/* P0: 5-Photo Hero Collage */}
        <HeroGallery />

        {/* Listing Subheader & Discount Promo Row — Matching Photo 4 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-1">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-[24px] font-semibold text-[#222222] leading-snug">
              Entire serviced apartment in Candolim, India
            </h2>
            <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-700 mt-1 font-normal">
              <li>{listing?.capacity?.guests || 3} guests</li>
              <li>·</li>
              <li>{listing?.capacity?.bedrooms || 1} bedroom</li>
              <li>·</li>
              <li>{listing?.capacity?.beds || 1} bed</li>
              <li>·</li>
              <li>{listing?.capacity?.baths || 1} bathroom</li>
            </ol>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <DiscountBanner />
          </div>
        </div>

        {/* 2-Column Core Layout: Property Details on Left, Movable Sticky Reservation Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-1">
          {/* Left Column (Details, Sleep, Amenities, Calendar) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-2">
            <PropertyOverview listing={listing} />
            <SleepingArrangements arrangements={listing.sleepingArrangements} />
            <AmenitiesSection amenities={listing.amenities} />
            <CalendarSection />
          </div>

          {/* Right Column (Sticky Movable Reservation Card on Desktop, Inline on Mobile) */}
          <div className="lg:col-span-5 xl:col-span-4 relative h-full">
            <div className="lg:sticky lg:top-24 w-full">
              <StickyReservationCard />
            </div>
          </div>
        </div>

        {/* Full Width Sections */}
        <ReviewsSection ratings={listing.ratings} reviews={listing.reviews} />
        <LocationSection location={listing.location} />
        <HostAndPoliciesSection host={listing.host} policies={listing.policies} />
        <NearbyStaysSection />
      </main>

      {/* Modals and Overlay Experiences */}
      <PhotoTourModal />
      <LightboxModal />
      <BookingSummaryModal />
      <AIConciergeDrawer />
      <FloatingConciergeTrigger />

      {/* Mobile Sticky Reservation Bar at Viewport Bottom (< lg) */}
      <MobileReservationBar />

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default App;
