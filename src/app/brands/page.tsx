"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ALL_BRANDS, BrandItem } from "@/data/brands";
import { Search, Sparkles } from "lucide-react";

export default function AllBrandsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBrands = ALL_BRANDS.filter((b) =>
    b.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-20">
      {/* 1. Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Pages", href: "/brands" },
          { label: "All Brands" },
        ]}
      />

      {/* 2. Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Page Top Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            All Brands
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            Toy house all brands
          </p>
        </div>

        {/* Section Header: Brands */}
        <div className="text-center mb-8">
          <div className="inline-block relative">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight pb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#FF5B00]" />
              <span>Brands</span>
            </h2>
            <div className="w-10 h-0.5 bg-[#FF5B00] mx-auto rounded-full" />
          </div>
        </div>

        {/* Optional Search / Quick Filter for Brands */}
        <div className="max-w-md mx-auto mb-8 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search toy or baby brand..."
            className="w-full h-10 pl-10 pr-4 text-xs sm:text-sm bg-white border border-gray-200 rounded-xl shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#FF5B00] transition-all"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* Brands Grid (5 Columns on Desktop as in Reference Design) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {filteredBrands.map((brand: BrandItem) => (
            <Link
              key={brand.id}
              href={`/brand/${brand.slug}`}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-[#FFF9F5] border border-orange-100/80 hover:border-orange-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center min-h-[140px] relative overflow-hidden"
            >
              {/* Brand Logo / Representation */}
              <div className="relative w-28 h-12 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                {/* Brand Name Typography Graphic or Logo */}
                <span className="text-base sm:text-lg font-black tracking-tight text-gray-900 group-hover:text-[#FF5B00] transition-colors">
                  {brand.name}
                </span>
              </div>

              {/* Subtitle / Item Count */}
              <div className="text-[11px] text-gray-400 font-medium group-hover:text-gray-600 transition-colors">
                {brand.itemCount} Products
              </div>

              {/* Subtle bottom orange highlight line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5B00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
