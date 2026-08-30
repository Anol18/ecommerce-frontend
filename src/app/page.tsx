import React from "react";
import { HeroSection } from "@/components/home/HeroSection/HeroSection";
import { FeatureBanners } from "@/components/home/FeatureBanners";
import { TopCategories } from "@/components/home/TopCategories";
import { FlashDeals } from "@/components/home/FlashDeals";
import { PromoBanners } from "@/components/home/PromoBanners";
import { NewArrivals } from "@/components/home/NewArrivals";

export default function HomePage() {
  return (
    <div className="space-y-2 md:space-y-4">
      {/* 1. Hero Section: Vertical Category Mega Menu & Banner Slider */}
      <HeroSection />

      {/* 2. 3 Featured Promo Categories */}
      <FeatureBanners />

      {/* 3. Top Categories Carousel & Grid */}
      <TopCategories />

      {/* 4. Flash Deals with Live Countdown Timer & Products */}
      <FlashDeals />

      {/* 5. Split Promotional Banners (Baby Essentials + Mega Sale 25% Off) */}
      <PromoBanners />

      {/* 6. New Arrivals with Category Filters & Interactive Cart */}
      <NewArrivals />
    </div>
  );
}
