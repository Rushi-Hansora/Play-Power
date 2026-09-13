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
      cleanliness: 5.0,
      accuracy: 5.0,
      communication: 5.0,
      location: 4.8,
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
    tenureYears: 2,
    totalReviews: "1,463",
    hostRating: 4.68,
    bornIn: "Born in the 80s",
    school: "Where I went to school: NICMAR GOA",
    responseRate: "100%",
    responseTime: "within an hour",
    bio: "Passionate hospitality team at Mirashya Homes in Candolim, North Goa. We ensure every guest experiences luxury, privacy, and impeccable cleanliness.",
    coHosts: [
      { name: "Sharath", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80" },
      { name: "Aman Dev Pahwa", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100&q=80" },
      { name: "Maria Karen Priyanka", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80" },
      { name: "Simran", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" },
      { name: "Pallavi", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" },
      { name: "Sanyukta", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" },
      { name: "Shruti", initial: "S", bg: "bg-pink-100 text-pink-700" },
      { name: "Amisha", initial: "A", bg: "bg-blue-100 text-blue-700" },
    ]
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
      icon: "bed-double",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
    },
    {
      room: "Living room",
      bedType: "1 sofa bed",
      icon: "sofa",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    }
  ],
  amenities: [
    // Top 10 Featured Amenities matching Image 3 exactly
    { name: "Kitchen", category: "Kitchen", featured: true, icon: "utensils", available: true },
    { name: "Wifi", category: "Internet", featured: true, icon: "wifi", available: true },
    { name: "Dedicated workspace", category: "Internet", featured: true, icon: "workspace", available: true },
    { name: "Free parking on premises", category: "Parking", featured: true, icon: "car", available: true },
    { name: "Pool", category: "Outdoor", featured: true, icon: "pool", available: true },
    { name: "Hot tub", category: "Bathroom", featured: true, icon: "hottub", available: true },
    { name: "Pets allowed", category: "Services", featured: true, icon: "paw", available: true },
    { name: "Exterior security cameras on property", category: "Safety", featured: true, icon: "camera", available: true },
    { name: "Carbon monoxide alarm", category: "Safety", featured: true, icon: "crossed-alarm", available: false },
    { name: "Smoke alarm", category: "Safety", featured: true, icon: "crossed-alarm", available: false },

    // Additional 40 Categorized Amenities for "Show all 50 amenities" Modal
    { name: "Air conditioning", category: "Cooling", icon: "snowflake", available: true },
    { name: "Ceiling fan", category: "Cooling", icon: "wind", available: true },
    { name: "55\" 4K Smart TV with Netflix & Prime", category: "Entertainment", icon: "tv", available: true },
    { name: "Sound system with Bluetooth", category: "Entertainment", icon: "music", available: true },
    { name: "Private balcony / terrace", category: "Outdoor", icon: "sun", available: true },
    { name: "Outdoor dining area", category: "Outdoor", icon: "sun", available: true },
    { name: "Sun loungers", category: "Outdoor", icon: "sun", available: true },
    { name: "Garden view", category: "Outdoor", icon: "sun", available: true },
    { name: "Microwave", category: "Kitchen", icon: "microwave", available: true },
    { name: "Induction cooktop", category: "Kitchen", icon: "utensils", available: true },
    { name: "Refrigerator with freezer", category: "Kitchen", icon: "refrigerator", available: true },
    { name: "Dishes and silverware", category: "Kitchen", icon: "utensils", available: true },
    { name: "Cooking basics (pots, pans, oil, salt)", category: "Kitchen", icon: "utensils", available: true },
    { name: "Electric kettle", category: "Kitchen", icon: "coffee", available: true },
    { name: "Coffee maker", category: "Kitchen", icon: "coffee", available: true },
    { name: "Toaster", category: "Kitchen", icon: "utensils", available: true },
    { name: "Wine glasses", category: "Kitchen", icon: "wine", available: true },
    { name: "Hot water 24/7", category: "Bathroom", icon: "droplets", available: true },
    { name: "Hair dryer", category: "Bathroom", icon: "wind", available: true },
    { name: "Shampoo & conditioner", category: "Bathroom", icon: "sparkles", available: true },
    { name: "Body soap & shower gel", category: "Bathroom", icon: "sparkles", available: true },
    { name: "Cleaning products", category: "Bathroom", icon: "sparkles", available: true },
    { name: "Cotton towels & bed linens", category: "Bedroom", icon: "bed", available: true },
    { name: "Extra pillows and blankets", category: "Bedroom", icon: "bed", available: true },
    { name: "Room-darkening shades", category: "Bedroom", icon: "moon", available: true },
    { name: "Clothing storage (closet with hangers)", category: "Bedroom", icon: "shirt", available: true },
    { name: "Iron & ironing board", category: "Laundry", icon: "shirt", available: true },
    { name: "Drying rack for clothing", category: "Laundry", icon: "shirt", available: true },
    { name: "First aid kit", category: "Safety", icon: "shield", available: true },
    { name: "Fire extinguisher", category: "Safety", icon: "flame", available: true },
    { name: "24-hour gated security", category: "Safety", icon: "shield", available: true },
    { name: "Self check-in with digital lock", category: "Services", icon: "key", available: true },
    { name: "Luggage dropoff allowed", category: "Services", icon: "briefcase", available: true },
    { name: "Daily housekeeping available", category: "Services", icon: "sparkles", available: true },
    { name: "Long-term stays allowed (28+ days)", category: "Services", icon: "calendar", available: true },
    { name: "High chair upon request", category: "Family", icon: "baby", available: true },
    { name: "Elevator access in residential tower", category: "Facilities", icon: "arrow-up-down", available: true },
    { name: "Shared resort clubhouse", category: "Facilities", icon: "building", available: true },
    { name: "Power backup generator (inverter)", category: "Facilities", icon: "zap", available: true },
    { name: "High-speed Ethernet connection", category: "Internet", icon: "wifi", available: true },
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
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80",
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
    },
    {
      id: "rev-6",
      author: "Rohan",
      tenure: "1 year on Airbnb",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "April 2026",
      comment: "The jacuzzi on the terrace was super clean and relaxing after a day exploring North Goa. Mirashya Homes was an outstanding and courteous host team."
    },
    {
      id: "rev-7",
      author: "Priya M",
      tenure: "3 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "April 2026",
      comment: "Loved the quiet gated community feel of Amor do Goa. Very safe for solo female travelers and families. The kitchenette has everything you need."
    },
    {
      id: "rev-8",
      author: "Kunal",
      tenure: "2 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "March 2026",
      comment: "Awesome location in Candolim! Close to great cafes, beach shacks, and supermarkets. The A/C cooled down the room in minutes."
    },
    {
      id: "rev-9",
      author: "Neha Sharma",
      tenure: "4 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "March 2026",
      comment: "Everything matches the photos 100%. The host arranged early check-in without any hesitation. Will definitely book again next trip."
    },
    {
      id: "rev-10",
      author: "Arjun",
      tenure: "6 months on Airbnb",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "March 2026",
      comment: "Super clean, aesthetic minimalist interior, and the private hot tub is an absolute treat. 10/10 stay."
    },
    {
      id: "rev-11",
      author: "Sneha Patel",
      tenure: "2 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "February 2026",
      comment: "Crisp white linen, high water pressure, fast reliable WiFi, and a peaceful private terrace. We loved every minute."
    },
    {
      id: "rev-12",
      author: "Rahul Verma",
      tenure: "5 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "February 2026",
      comment: "Security staff at Amor do Goa were very polite and helpful. The self check-in was seamless. Excellent value for money in North Goa."
    },
    {
      id: "rev-13",
      author: "Divya K",
      tenure: "1 year on Airbnb",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "January 2026",
      comment: "A true slice of paradise in Candolim. The jacuzzi was impeccably sanitized and ready when we arrived. Host responds instantly."
    },
    {
      id: "rev-14",
      author: "Aman Gupta",
      tenure: "3 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "January 2026",
      comment: "Best stay experience in North Goa so far. Peaceful and secluded yet minutes away from all popular beach clubs."
    },
    {
      id: "rev-15",
      author: "Ritu Sengupta",
      tenure: "4 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "December 2025",
      comment: "Celebrated our anniversary here and the romantic ambiance was magical. Mirashya Homes even recommended great local Goan seafood spots."
    },
    {
      id: "rev-16",
      author: "Siddharth",
      tenure: "2 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "December 2025",
      comment: "Very comfortable bed, spotless bathroom, and great swimming pool downstairs. The automatic power backup is a great bonus."
    },
    {
      id: "rev-17",
      author: "Meera Joshi",
      tenure: "3 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "November 2025",
      comment: "Felt like home away from home. Spotlessly clean with lots of natural tropical light. Candolim beach is an easy 7-minute stroll."
    },
    {
      id: "rev-18",
      author: "Nikhil T",
      tenure: "1 year on Airbnb",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "November 2025",
      comment: "One of the best Airbnb properties we have stayed at in India. Loved the jacuzzi jets and the quiet morning coffee on the terrace."
    },
    {
      id: "rev-19",
      author: "Tanvi",
      tenure: "4 years on Airbnb",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "October 2025",
      comment: "Fantastic hospitality from Mirashya Homes! Clean, modern, serene, and exactly as pictured. Would rate 6 stars if I could."
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
