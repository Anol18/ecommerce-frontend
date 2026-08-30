export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  itemCount?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string; // Lucide icon identifier or custom SVG representation
  subCategories?: SubCategory[];
  isSpecial?: boolean;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  image: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string; // e.g. "৳ 6,300 off", "৳ 950 off"
  rating: number;
  reviewCount: number;
  soldCount: number;
  category: string;
  subCategory?: string;
  brand?: string;
  isFlashDeal?: boolean;
  isNewArrival?: boolean;
  description?: string;
  inStock?: boolean;
  features?: string[];
}

export interface BannerSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  badge?: string;
  bgColor?: string;
  accentColor?: string;
}

export interface FeaturePromo {
  id: string;
  title: string;
  subtitle: string;
  categorySlug: string;
  image: string;
}

export interface PromoBanner {
  id: string;
  tagline: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  variant: "soft" | "bold";
  discountText?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}
