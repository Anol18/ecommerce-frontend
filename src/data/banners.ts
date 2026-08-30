import { BannerSlide, FeaturePromo, PromoBanner } from "@/types";

export const HERO_SLIDES: BannerSlide[] = [
  {
    id: "hero-1",
    title: "RIDE INTO FUN & FREEDOM",
    subtitle: "Safe, Stylish & Rechargeable Electric Cars & Bikes for Kids",
    description: "Equipped with parental remote control, shock absorption, and long-life batteries for unlimited outdoor adventures.",
    ctaText: "Explore Collection",
    ctaLink: "/category/ride-on-vehicle-toys",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=1200&auto=format&fit=crop&q=80",
    badge: "New 2026 Models",
    bgColor: "from-blue-950 via-slate-900 to-indigo-950",
    accentColor: "#FF5B00"
  },
  {
    id: "hero-2",
    title: "Smart Parenting Starts Here",
    subtitle: "Premium Strollers & High Chairs - Stylish, Safe & Comfortable",
    description: "Engineered with aircraft-grade aluminum, multi-position reclining, and smooth all-terrain wheels for every journey.",
    ctaText: "Shop Now",
    ctaLink: "/category/mother-baby-essentials",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&auto=format&fit=crop&q=80",
    badge: "Parent's Choice",
    bgColor: "from-amber-950 via-stone-900 to-emerald-950",
    accentColor: "#FF5B00"
  },
  {
    id: "hero-3",
    title: "Inspire Young Builders",
    subtitle: "Montessori & STEM Educational Learning Toys",
    description: "Cultivate problem-solving and critical thinking skills with certified safe, non-toxic sensory magnetic tile systems.",
    ctaText: "Discover STEM",
    ctaLink: "/category/educational-learning-toys",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&auto=format&fit=crop&q=80",
    badge: "Award Winning",
    bgColor: "from-teal-950 via-slate-900 to-cyan-950",
    accentColor: "#FF5B00"
  }
];

export const FEATURE_PROMOS: FeaturePromo[] = [
  {
    id: "promo-1",
    title: "Building & Magnetic Blocks",
    subtitle: "Creativity Unleashed",
    categorySlug: "educational-learning-toys",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "promo-2",
    title: "Pretend & Role Play Sets",
    subtitle: "Kitchen, Doctor & Dollhouse",
    categorySlug: "pretend-role-play",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "promo-3",
    title: "Montessori & Sensory Math",
    subtitle: "Learning Made Delightful",
    categorySlug: "educational-learning-toys",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80"
  }
];

export const SPLIT_BANNERS: PromoBanner[] = [
  {
    id: "banner-baby-essentials",
    tagline: "Everyday Baby",
    title: "Essentials – With Love",
    description: "Safe. Comfortable. Designed for Modern Parents.",
    ctaText: "Explore Essentials",
    ctaLink: "/category/mother-baby-essentials",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80",
    variant: "soft",
    discountText: "Flat 15% OFF"
  },
  {
    id: "banner-mega-sale",
    tagline: "Mega Sale",
    title: "Up to 25% OFF",
    description: "Coolest Electric Cars & Bikes For Kids. Limited Stock!",
    ctaText: "Grab Yours Today",
    ctaLink: "/category/ride-on-vehicle-toys",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&auto=format&fit=crop&q=80",
    variant: "bold",
    discountText: "25% OFF"
  }
];
