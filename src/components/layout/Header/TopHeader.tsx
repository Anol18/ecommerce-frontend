"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Home as HouseIcon, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ALL_PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export const TopHeader: React.FC = () => {
  const { totalItems, setIsCartOpen, setQuickViewProduct } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchResults = searchQuery.trim()
    ? ALL_PRODUCTS.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand?.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <div className="bg-[#FF5B00] text-white py-2.5 px-4 md:px-8 shadow-xs relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#FF5B00] shadow-sm transition-transform group-hover:scale-105">
            <div className="relative flex items-center justify-center">
              <HouseIcon className="w-6 h-6 stroke-[2.5]" />
              <Sparkles className="w-2.5 h-2.5 text-amber-500 absolute -top-1 -right-1" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-0.5">
              Toy House
            </span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-2 md:mx-6 relative">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              placeholder="Search product here..."
              className="w-full h-10 pl-4 pr-11 rounded-lg bg-white text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 shadow-inner"
            />
            <button
              aria-label="Search"
              className="absolute right-1 top-1 h-8 w-9 rounded-md flex items-center justify-center text-gray-500 hover:text-[#FF5B00] transition-colors"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Search Live Dropdown Suggestions */}
          {isSearchFocused && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden text-gray-800">
              <div className="px-3 py-1 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                Matching Products
              </div>
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onMouseDown={() => setQuickViewProduct(product)}
                  className="px-3 py-2 hover:bg-orange-50/70 cursor-pointer flex items-center justify-between text-xs transition-colors border-b last:border-0 border-gray-50"
                >
                  <span className="font-medium text-gray-800 line-clamp-1 flex-1 pr-2">
                    {product.title}
                  </span>
                  <span className="font-bold text-[#FF5B00] shrink-0">
                    {formatPrice(product.price)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Actions: Cart & Sign In */}
        <div className="flex items-center gap-3 md:gap-5 shrink-0 text-sm">
          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-1 text-white hover:text-orange-100 transition-transform active:scale-95 relative p-1.5"
            aria-label="Open Shopping Cart"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 stroke-[2.2]" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-xs border-2 border-[#FF5B00]">
                  {totalItems}
                </span>
              )}
            </div>
          </button>

          {/* Vertical Divider */}
          <span className="text-white/40 h-5 w-[1px] bg-white/40" />

          {/* User Sign in / up */}
          <Link
            href="/login"
            className="flex items-center gap-1.5 font-semibold text-xs md:text-sm text-white hover:text-orange-100 transition-colors"
          >
            <User className="w-4 h-4 md:w-5 md:h-5 stroke-[2.2]" />
            <span className="hidden sm:inline">Sign in / up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
