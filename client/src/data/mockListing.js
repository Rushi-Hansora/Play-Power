/**
 * High-fidelity mock property dataset representing the Candolim, Goa reference listing.
 * All image assets utilize high-resolution Unsplash architectural and interior photography
 * with proper licensing and attribution.
 */

export const mockListing = {
  id: "listing-candolim-mirashya-ug10",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  type: "Entire serviced apartment in Candolim, India",
  location: {
    address: "Candolim, Goa, India",
    neighborhood: "Amor do Goa, Candolim",
    city: "Candolim",
    state: "Goa",
    country: "India",
    lat: 15.518,
    lng: 73.766,
    neighborhoodDescription:
      "Located in the heart of Candolim, Amor do Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions. Enjoy the vibrant coastal lifestyle, lush tropical greenery, and tranquil ambiance while being only 500 meters from the serene Candolim shoreline."
  },
  ratings: {
    overall: 4.95,
    reviewCount: 19,
    guestFavorite: true,
    categories: {
      cleanliness: 4.9,
      accuracy: 5.0,
      communication: 5.0,
      location: 4.9,
      checkIn: 5.0,
      value: 4.8
    }
  },
  capacity: {
    guests: 3,
    bedrooms: 1,
    beds: 1,
    baths: 1
  },
  pricing: {
    basePricePerNight: 5699,
    defaultNights: 5,
    cleaningFee: 1200,
    serviceFee: 2804,
    currency: "INR",
    currencySymbol: "₹"
  },
  host: {
    name: "Mirashya Homes",
    isSuperhost: true,
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&h=200&q=80",
    tenureYears: 4,
    responseRate: "100%",
    responseTime: "within an hour",
    bio: "Passionate hospitality team at Mirashya Homes in Candolim, North Goa. We ensure every guest experiences luxury, privacy, and impeccable cleanliness.",
    coHosts: ["Mirashya Team", "Gaurav"]
  },
  photos: [
    {
      id: "photo-1",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
      caption: "Spacious contemporary living room with plush seating and warm ambient lighting",
      category: "Living room"
    },
    {
      id: "photo-2",
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      caption: "Private romantic Jacuzzi overlooking private terrace with garden view",
      category: "Jacuzzi & Bath"
    },
    {
      id: "photo-3",
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      caption: "Master bedroom suite with premium queen bed and minimalist wood accents",
      category: "Bedroom"
    },
    {
      id: "photo-4",
      url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      caption: "Fully-equipped modern kitchenette with marble countertop and bar seating",
      category: "Kitchen"
    },
    {
      id: "photo-5",
      url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      caption: "Resort-style outdoor swimming pool surrounded by tropical palm trees",
      category: "Outdoor & Pool"
    },
    {
      id: "photo-6",
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      caption: "Living room lounge with 55-inch smart 4K TV and designer coffee table",
      category: "Living room"
    },
    {
      id: "photo-7",
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      caption: "Luxury walk-in rain shower bathroom with premium organic toiletries",
      category: "Jacuzzi & Bath"
    },
    {
      id: "photo-8",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      caption: "Plush convertible sofa bed in the living area comfortably accommodating 2 guests",
      category: "Bedroom"
    },
    {
      id: "photo-9",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      caption: "Gated residential community Amor do Goa with landscaped gardens and 24/7 security",
      category: "Outdoor & Pool"
    },
    {
      id: "photo-10",
      url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      caption: "Sunny private balcony nook with morning coffee bistro table",
      category: "Outdoor & Pool"
    }
  ],
  sleepingArrangements: [
    {
      room: "Bedroom 1",
      bedType: "1 queen bed",
      icon: "bed-double"
    },
    {
      room: "Living room",
      bedType: "1 sofa bed",
      icon: "sofa"
    }
  ],
  amenities: [
    { name: "Private hot tub / Jacuzzi", category: "Bathroom", featured: true, icon: "bath" },
    { name: "Fast Wi-Fi (120 Mbps)", category: "Internet", featured: true, icon: "wifi" },
    { name: "Resort swimming pool", category: "Outdoor", featured: true, icon: "waves" },
    { name: "Fully equipped kitchen", category: "Kitchen", featured: true, icon: "utensils" },
    { name: "Dedicated workspace", category: "Internet", featured: true, icon: "laptop" },
    { name: "Free parking on premises", category: "Parking", featured: true, icon: "car" },
    { name: "Air conditioning", category: "Cooling", featured: true, icon: "snowflake" },
    { name: "55\" 4K Smart TV with Netflix", category: "Entertainment", featured: true, icon: "tv" },
    { name: "Balcony / Terrace", category: "Outdoor", featured: true, icon: "sun" },
    { name: "Washing machine & dryer", category: "Laundry", featured: false, icon: "shirt" },
    { name: "Microwave & induction cooktop", category: "Kitchen", featured: false, icon: "microwave" },
    { name: "Refrigerator with freezer", category: "Kitchen", featured: false, icon: "refrigerator" },
    { name: "Hot water 24/7", category: "Bathroom", featured: false, icon: "droplets" },
    { name: "Hair dryer", category: "Bathroom", featured: false, icon: "wind" },
    { name: "Iron & ironing board", category: "Laundry", featured: false, icon: "sparkles" },
    { name: "First aid kit & fire extinguisher", category: "Safety", featured: false, icon: "shield-alert" },
    { name: "CCTV in common areas", category: "Safety", featured: false, icon: "camera" },
    { name: "Luggage dropoff allowed", category: "Services", featured: false, icon: "briefcase" },
    { name: "Self check-in with smart keypad", category: "Services", featured: false, icon: "key" },
    { name: "Elevator in building", category: "Facilities", featured: false, icon: "arrow-up-down" }
  ],
  reviews: [
    {
      id: "rev-1",
      author: "Samiksha",
      tenure: "8 months on Airbnb",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "May 2026",
      comment: "the host nitish was really great help. The apartment was spotless and the private jacuzzi made our vacation truly memorable."
    },
    {
      id: "rev-2",
      author: "Vedant",
      tenure: "4 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "May 2026",
      comment: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine."
    },
    {
      id: "rev-3",
      author: "Vaibhav S",
      tenure: "3 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "May 2026",
      comment: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too."
    },
    {
      id: "rev-4",
      author: "Mohd",
      tenure: "5 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "May 2026",
      comment: "Great place. Exactly as described in the listing. Candolim beach is just a brief walk away."
    },
    {
      id: "rev-5",
      author: "Ananya",
      tenure: "2 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "April 2026",
      comment: "Super quiet society, high speed wifi was perfect for remote work. The jacuzzi under the stars is unmatched!"
    }
  ],
  policies: {
    houseRules: [
      "Check-in after 2:00 PM",
      "Checkout before 11:00 AM",
      "Maximum 4 guests",
      "No smoking inside the apartment",
      "Quiet hours after 10:00 PM"
    ],
    safety: [
      "Carbon monoxide alarm installed",
      "Smoke alarm present",
      "Security cameras on exterior building perimeter",
      "First aid kit available in kitchen cabinet"
    ],
    cancellation: "Free cancellation for 48 hours. Cancel before check-in for a partial refund as per host policy."
  }
};
