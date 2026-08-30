"use client";

import React from "react";
import { CategorySidebar } from "./CategorySidebar";
import { HeroSlider } from "./HeroSlider";

export const HeroSection: React.FC = () => {
  return (
    <section className="py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
          {/* Left Vertical Categories Sidebar (Desktop only) */}
          <div className="hidden lg:block lg:col-span-3 h-full min-h-[440px]">
            <CategorySidebar />
          </div>

          {/* Right Hero Banner Slider */}
          <div className="lg:col-span-9 h-full">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
