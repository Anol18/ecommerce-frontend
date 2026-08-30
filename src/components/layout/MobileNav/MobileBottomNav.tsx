"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, ShoppingBag, Truck, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-2 py-1.5 flex items-center justify-around shadow-lg">
      <Link
        href="/"
        className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-medium transition-colors ${
          pathname === "/" ? "text-[#FF5B00] font-bold" : "text-gray-600"
        }`}
      >
        <Home className="w-5 h-5 mb-0.5" />
        <span>Home</span>
      </Link>

      <Link
        href="/products"
        className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-medium transition-colors ${
          pathname === "/products" ? "text-[#FF5B00] font-bold" : "text-gray-600"
        }`}
      >
        <LayoutGrid className="w-5 h-5 mb-0.5" />
        <span>Categories</span>
      </Link>

      {/* Cart Trigger */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-medium text-gray-600 relative"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5 mb-0.5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-2 bg-[#FF5B00] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
        <span>Cart</span>
      </button>

      <Link
        href="/track-order"
        className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-medium transition-colors ${
          pathname === "/track-order" ? "text-[#FF5B00] font-bold" : "text-gray-600"
        }`}
      >
        <Truck className="w-5 h-5 mb-0.5" />
        <span>Track</span>
      </Link>

      <Link
        href="/login"
        className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-medium transition-colors ${
          pathname === "/login" ? "text-[#FF5B00] font-bold" : "text-gray-600"
        }`}
      >
        <User className="w-5 h-5 mb-0.5" />
        <span>Account</span>
      </Link>
    </div>
  );
};
