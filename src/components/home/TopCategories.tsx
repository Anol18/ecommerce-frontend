"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TOP_CATEGORIES, TopCategoryItem } from "@/data/categories";
import { CategoryIcon } from "@/components/common/CategoryIcon";

export const TopCategories: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(TOP_CATEGORIES.length / itemsPerPage);

  const displayedCategories = TOP_CATEGORIES;

  return (
    <section className="py-8 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Top Categories
          </h2>
          <div className="w-12 h-1 bg-[#FF5B00] mx-auto mt-2 rounded-full" />
        </div>

        {/* Categories Grid / Carousel */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {displayedCategories.map((cat: TopCategoryItem) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="group flex flex-col items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#FFF9F5] border border-orange-100/80 hover:border-orange-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center"
            >
              {/* Category Graphic / Image Container */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 rounded-xl overflow-hidden bg-white/90 p-2 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="80px"
                  className="object-contain p-1"
                />
              </div>

              {/* Title & Icon */}
              <div className="w-full">
                <div className="flex items-center justify-center gap-1.5 mb-1 text-[#FF5B00]">
                  <CategoryIcon name={cat.iconName} className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-bold text-gray-800 line-clamp-1 group-hover:text-[#FF5B00] transition-colors">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Carousel / Pagination Dots (as in the design) */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: 2 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              aria-label={`Page ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentPage === idx ? "w-7 bg-[#FF5B00]" : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
