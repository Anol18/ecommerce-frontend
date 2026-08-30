"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { Truck } from "lucide-react";

export const NavBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200/80 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-11 text-xs md:text-sm font-medium">
        {/* Left Navigation Links */}
        <div className="flex items-center space-x-6 md:space-x-8 overflow-x-auto no-scrollbar py-2">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors whitespace-nowrap py-1 relative ${
                  isActive
                    ? "text-[#FF5B00] font-bold"
                    : "text-gray-700 hover:text-[#FF5B00]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5B00] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Action: Track Order */}
        <div className="shrink-0 pl-4">
          <Link
            href="/track-order"
            className="flex items-center gap-1.5 text-gray-700 hover:text-[#FF5B00] transition-colors font-semibold text-xs md:text-sm whitespace-nowrap"
          >
            <Truck className="w-4 h-4 text-[#FF5B00]" />
            <span>Track Order</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
