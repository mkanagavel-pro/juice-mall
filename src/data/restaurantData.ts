export interface MenuItem {
  id: string;
  name: string;
  category: 'Popular' | 'Juices' | 'Milkshakes' | 'Falooda' | 'Pizza' | 'Quick Bites' | 'Desserts' | 'Cakes';
  description: string;
  priceNote: string;
  isVeg: boolean;
  isPopular?: boolean;
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Drinks' | 'Cakes' | 'Ambience' | 'Celebrations';
  imageUrl: string;
  aspect: string;
}

export const BUSINESS_INFO = {
  name: "Juice Maall",
  tagline: "Cafe • Cakes & Party Hall",
  tamilName: "ஜுஸ் மால்",
  category: "Family Restaurant / Cafe / Cakes / Party Hall",
  googleRating: "4.8",
  reviewCount: "7,749+",
  priceRange: "₹200–₹400 per person",
  address: "110, Trichy Main Rd, Gugai, Salem (M.Corp.), Tamil Nadu 636006",
  shortAddress: "Gugai, Salem, Tamil Nadu",
  phone: "096003 20001",
  phoneIntl: "+919600320001",
  phoneDial: "tel:09600320001",
  whatsappNumber: "919600320001",
  websiteUrl: "https://juicemall.business.site",
  swiggySearchUrl: "https://www.swiggy.com/restaurants/juice-maall-trichy-main-road-salem-636006",
  googleMapsUrl: "https://maps.google.com/?q=Juice+Maall+110+Trichy+Main+Rd+Gugai+Salem+Tamil+Nadu+636006",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.727931393683!2d78.14872297592476!3d11.642732988563829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1b6f685bf95%3A0xe9f79bcf3c95a043!2sTrichy%20Main%20Rd%2C%20Gugai%2C%20Salem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  hours: "10:00 AM – 11:00 PM Daily",
  services: [
    "Dine-in",
    "Takeaway",
    "No-contact delivery",
    "Table reservation / enquiry",
    "Party hall enquiries",
    "Cake enquiries"
  ],
  demoDisclaimer: "Concept website demo by KEAGROW — Not the official website."
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m-1",
    name: "Chicken Tikka Pizza",
    category: "Pizza",
    description: "Crisp hand-stretched crust topped with tender clay-oven chicken tikka chunks, crunchy bell peppers, onions, and rich melted mozzarella cheese.",
    priceNote: "Price available on enquiry",
    isVeg: false,
    isPopular: true,
    image: "/src/assets/images/hero_juice_spread_1790665542301.jpg"
  },
  {
    id: "m-2",
    name: "Peri Peri French Fries",
    category: "Quick Bites",
    description: "Golden fried crispy potato batons tossed in our signature hot and zesty peri peri blend. A crowd favourite starter.",
    priceNote: "Price available on enquiry",
    isVeg: true,
    isPopular: true,
    image: "/src/assets/images/hero_juice_spread_1790665542301.jpg"
  },
  {
    id: "m-3",
    name: "Classic Royal Falooda",
    category: "Falooda",
    description: "Traditional chilled royal indulgence layered with basil seeds, rose syrup, fine vermicelli, rich milk, and topped with premium vanilla ice cream.",
    priceNote: "Price available on enquiry",
    isVeg: true,
    isPopular: true,
    image: "/src/assets/images/hero_juice_spread_1790665542301.jpg"
  },
  {
    id: "m-4",
    name: "Red Velvet Falooda",
    category: "Falooda",
    description: "A signature specialty combining velvet sponge crumbles, condensed milk vermicelli, berry drizzle, and decadent rich scoop.",
    priceNote: "Price available on enquiry",
    isVeg: true,
    isPopular: true,
    image: "/src/assets/images/hero_juice_spread_1790665542301.jpg"
  },
  {
    id: "m-5",
    name: "Black Forest Cake",
    category: "Cakes",
    description: "Classic European confection with moist chocolate sponge layers, whipped fresh cream frosting, and red cherry compote.",
    priceNote: "Price available on enquiry",
    isVeg: true,
    isPopular: true,
    image: "/src/assets/images/celebration_cakes_1790665570904.jpg"
  },
  {
    id: "m-6",
    name: "Thick Handcrafted Milkshakes",
    category: "Milkshakes",
    description: "Ultra-thick, velvety shakes churned with premium ice cream and dairy. Flavours available: Belgian Chocolate, Strawberry, Mango, and Oreo.",
    priceNote: "Price available on enquiry",
    isVeg: true,
    isPopular: true,
    image: "/src/assets/images/hero_juice_spread_1790665542301.jpg"
  },
  {
    id: "m-7",
    name: "Tender Coconut Special Shake",
    category: "Milkshakes",
    description: "Chilled tropical beverage crafted with fresh tender coconut water, sweet coconut malai pulp, and creamy dairy blend.",
    priceNote: "Price available on enquiry",
    isVeg: true,
    image: "/src/assets/images/hero_juice_spread_1790665542301.jpg"
  },
  {
    id: "m-8",
    name: "Fresh Exotic Fruit Juices",
    category: "Juices",
    description: "100% natural, freshly pressed seasonal fruit extracts served ice-chilled with zero artificial flavours or preservatives.",
    priceNote: "Price available on enquiry",
    isVeg: true,
    image: "/src/assets/images/hero_juice_spread_1790665542301.jpg"
  },
  {
    id: "m-9",
    name: "Paneer Tikka Pizza",
    category: "Pizza",
    description: "Tandoori marinated paneer cubes, roasted capsicum, caramelized red onion, and generous cheese on herb crust.",
    priceNote: "Price available on enquiry",
    isVeg: true,
    image: "/src/assets/images/hero_juice_spread_1790665542301.jpg"
  },
  {
    id: "m-10",
    name: "Garlic Bread Supreme",
    category: "Quick Bites",
    description: "Oven-toasted French baguette slices infused with herb garlic butter and topped with bubbling melted mozzarella.",
    priceNote: "Price available on enquiry",
    isVeg: true,
    image: "/src/assets/images/hero_juice_spread_1790665542301.jpg"
  },
  {
    id: "m-11",
    name: "Sizzling Chocolate Brownie",
    category: "Desserts",
    description: "Warm, fudgy dark chocolate walnut brownie accompanied by a scoop of vanilla ice cream and hot chocolate fudge drizzle.",
    priceNote: "Price available on enquiry",
    isVeg: true,
    image: "/src/assets/images/celebration_cakes_1790665570904.jpg"
  },
  {
    id: "m-12",
    name: "Chocolate Truffle Celebration Cake",
    category: "Cakes",
    description: "Decadent pure chocolate ganache cake crafted for celebrations with silky chocolate glaze and chocolate shavings.",
    priceNote: "Price available on enquiry",
    isVeg: true,
    image: "/src/assets/images/celebration_cakes_1790665570904.jpg"
  }
];

export const CAKE_SHOWCASE = [
  {
    id: "c-1",
    name: "Black Forest Gateau",
    category: "Birthday Cakes",
    description: "Light chocolate sponge layered with sweet kirsch-style cherry compote and chantilly whipped cream.",
    badge: "Most Requested",
    image: "/src/assets/images/celebration_cakes_1790665570904.jpg"
  },
  {
    id: "c-2",
    name: "Royal Dutch Truffle",
    category: "Chocolate Cakes",
    description: "Dense dark chocolate cake filled with smooth Belgian cocoa ganache and a mirror-like chocolate drip finish.",
    badge: "Signature",
    image: "/src/assets/images/celebration_cakes_1790665570904.jpg"
  },
  {
    id: "c-3",
    name: "Red Velvet Cream Cheese",
    category: "Celebration Cakes",
    description: "Vibrant crimson cocoa cake paired with velvety smooth cream cheese frosting, ideal for romantic anniversaries.",
    badge: "Anniversary Favorite",
    image: "/src/assets/images/celebration_cakes_1790665570904.jpg"
  },
  {
    id: "c-4",
    name: "Custom Milestone Tier Cake",
    category: "Custom Cakes",
    description: "Multi-tiered showpiece cake customized for grand 1st birthdays, jubilees, and family festivities in Salem.",
    badge: "Bespoke Design",
    image: "/src/assets/images/celebration_cakes_1790665570904.jpg"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "r-1",
    author: "Salem Food Explorer",
    rating: 5,
    date: "Google Verified Review",
    text: "Very tasty 😍😍",
    tag: "Taste & Quality"
  },
  {
    id: "r-2",
    author: "Family Dining Visitor",
    rating: 5,
    date: "Google Verified Review",
    text: "Very Good Ambience to Hangout with Family and friends.",
    tag: "Atmosphere & Seating"
  },
  {
    id: "r-3",
    author: "Local Guide - Salem",
    rating: 5,
    date: "Google Verified Review",
    text: "Great place with a nice ambience.",
    tag: "Recommended Spot"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Signature Juices & Food Spread",
    category: "Food",
    imageUrl: "/src/assets/images/hero_juice_spread_1790665542301.jpg",
    aspect: "col-span-12 md:col-span-8 aspect-[16/10]"
  },
  {
    id: "g-2",
    title: "Celebration Cakes Showcase",
    category: "Cakes",
    imageUrl: "/src/assets/images/celebration_cakes_1790665570904.jpg",
    aspect: "col-span-12 md:col-span-4 aspect-[4/3]"
  },
  {
    id: "g-3",
    title: "Welcoming Cafe Ambience",
    category: "Ambience",
    imageUrl: "/src/assets/images/cafe_ambience_1790665556821.jpg",
    aspect: "col-span-12 md:col-span-4 aspect-[4/3]"
  },
  {
    id: "g-4",
    title: "Celebration Party Hall",
    category: "Celebrations",
    imageUrl: "/src/assets/images/party_hall_space_1790665583341.jpg",
    aspect: "col-span-12 md:col-span-8 aspect-[16/10]"
  }
];
