"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Layers, Sparkles } from "lucide-react";
import { CATEGORIES_DATA } from "@/data/categories";
import { Category, SubCategory } from "@/types";
import { CategoryIcon } from "@/components/common/CategoryIcon";

interface CategorySidebarProps {
  onHoverCategory?: (category: Category | null) => void;
}

export const CategorySidebar: React.FC<CategorySidebarProps> = ({ onHoverCategory }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const handleMouseEnter = (category: Category) => {
    setActiveCategoryId(category.id);
    if (onHoverCategory) onHoverCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategoryId(null);
    if (onHoverCategory) onHoverCategory(null);
  };

  return (
    <div
      className="relative bg-white rounded-2xl border border-gray-200/90 shadow-xs h-full flex flex-col justify-between py-2 z-30"
      onMouseLeave={handleMouseLeave}
    >
      {/* Category List */}
      <div className="space-y-0.5 px-2">
        {CATEGORIES_DATA.map((category, index) => {
          const isHovered = activeCategoryId === category.id;
          const isNearBottom = index >= CATEGORIES_DATA.length - 3;

          return (
            <div
              key={category.id}
              onMouseEnter={() => handleMouseEnter(category)}
              className="relative group"
            >
              {/* Category Link Row */}
              <Link
                href={`/category/${category.slug}`}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                  isHovered
                    ? "bg-orange-50 text-[#FF5B00] font-bold shadow-2xs"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#FF5B00]"
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isHovered
                        ? "bg-orange-100/80 text-[#FF5B00]"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <CategoryIcon name={category.icon} className="w-4 h-4" />
                  </div>
                  <span className="truncate">{category.name}</span>
                </div>

                <ChevronRight
                  className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                    isHovered ? "text-[#FF5B00] translate-x-0.5" : "text-gray-400"
                  }`}
                />
              </Link>

              {/* Seamless Level-Aligned Flyout Submenu */}
              {isHovered && category.subCategories && category.subCategories.length > 0 && (
                <div
                  className={`absolute left-full pl-2 z-50 animate-in fade-in-50 zoom-in-95 duration-150 ${
                    isNearBottom ? "bottom-0" : "-top-1"
                  }`}
                  onMouseEnter={() => handleMouseEnter(category)}
                >
                  {/* Invisible Mouse Bridge to ensure cursor never drops off */}
                  <div className="absolute top-0 bottom-0 -left-3 w-5" />

                  {/* Flyout Card */}
                  <div className="w-64 bg-white rounded-xl border border-gray-200/90 shadow-xl py-2 px-1.5 max-h-[420px] overflow-y-auto">
                    <div className="space-y-0.5">
                      {category.subCategories.map((sub: SubCategory) => (
                        <Link
                          key={sub.id}
                          href={`/category/${category.slug}/${sub.slug}`}
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-gray-700 hover:bg-orange-50 hover:text-[#FF5B00] transition-colors group/item"
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            {sub.icon && (
                              <div className="w-6 h-6 rounded-md bg-gray-50 flex items-center justify-center text-gray-500 group-hover/item:text-[#FF5B00] group-hover/item:bg-orange-100/60 transition-colors shrink-0">
                                <CategoryIcon name={sub.icon} className="w-3.5 h-3.5" />
                              </div>
                            )}
                            <span className="truncate font-medium">{sub.name}</span>
                          </div>

                          <ChevronRight className="w-3 h-3 text-gray-300 group-hover/item:text-[#FF5B00] opacity-0 group-hover/item:opacity-100 transition-all shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* See all categories */}
        <Link
          href="/products"
          className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-[#FF5B00] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#FF5B00]">
              <Layers className="w-4 h-4" />
            </div>
            <span>See all categories</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        </Link>
      </div>
    </div>
  );
};
