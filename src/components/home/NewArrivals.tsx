"use client";

import React, { useRef, useState } from "react";
import { ProductCard } from "@/components/common/ProductCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { NEW_ARRIVALS_PRODUCTS } from "@/data/products";
import { Sparkles } from "lucide-react";

export const NewArrivals: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const scrollPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const filteredProducts =
    selectedFilter === "all"
      ? NEW_ARRIVALS_PRODUCTS
      : NEW_ARRIVALS_PRODUCTS.filter((p) => p.category === selectedFilter);

  return (
    <section className="py-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <SectionHeader
          title={
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF5B00]" />
              <span>New Arrivals</span>
            </span>
          }
          subtitle="Explore the latest trending toys, models, and sensory learning gear"
          showArrows={true}
          onPrev={scrollPrev}
          onNext={scrollNext}
          actionText="See All New"
          actionHref="/products?filter=new"
        />

        {/* Category Pill Filter (Scalable DRY filtering) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-6 pb-1">
          {[
            { label: "All Items", value: "all" },
            { label: "Outdoor & Blasters", value: "outdoor-physical-play" },
            { label: "Action Figures & Robots", value: "special-categories" },
            { label: "Vehicles & Stunts", value: "ride-on-vehicle-toys" },
            { label: "Montessori & Learning", value: "educational-learning-toys" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedFilter(tab.value)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedFilter === tab.value
                  ? "bg-[#FF5B00] text-white shadow-xs"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid / Carousel */}
        <div
          ref={containerRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
