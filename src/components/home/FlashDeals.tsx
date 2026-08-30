"use client";

import React, { useRef, useMemo } from "react";
import { ProductCard } from "@/components/common/ProductCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FLASH_DEALS_PRODUCTS } from "@/data/products";
import { useCountdown } from "@/hooks/useCountdown";

export const FlashDeals: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize stable future timestamp for the flash deals demo (11h 51m 35s from first mount)
  const targetTimestamp = useMemo(() => {
    return Date.now() + (11 * 3600 + 51 * 60 + 35) * 1000;
  }, []);

  const { days, hours, minutes, seconds } = useCountdown(targetTimestamp);

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

  // Live Animated Countdown Component matching the design
  const CountdownBadge = (
    <div className="flex items-center gap-1.5 sm:gap-2">
      {/* Day */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#FF5B00] text-white flex items-center justify-center font-black text-sm sm:text-base shadow-xs">
          {days.toString().padStart(2, "0")}
        </div>
        <span className="text-[10px] text-gray-500 font-semibold mt-0.5">Day</span>
      </div>

      <span className="text-[#FF5B00] font-black text-xs pb-3">:</span>

      {/* Hour */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#FF5B00] text-white flex items-center justify-center font-black text-sm sm:text-base shadow-xs">
          {hours.toString().padStart(2, "0")}
        </div>
        <span className="text-[10px] text-gray-500 font-semibold mt-0.5">Hour</span>
      </div>

      <span className="text-[#FF5B00] font-black text-xs pb-3">:</span>

      {/* Min */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#FF5B00] text-white flex items-center justify-center font-black text-sm sm:text-base shadow-xs">
          {minutes.toString().padStart(2, "0")}
        </div>
        <span className="text-[10px] text-gray-500 font-semibold mt-0.5">Min</span>
      </div>

      <span className="text-[#FF5B00] font-black text-xs pb-3">:</span>

      {/* Sec */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#FF5B00] text-white flex items-center justify-center font-black text-sm sm:text-base shadow-xs">
          {seconds.toString().padStart(2, "0")}
        </div>
        <span className="text-[10px] text-gray-500 font-semibold mt-0.5">Sec</span>
      </div>
    </div>
  );

  return (
    <section className="py-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header with Title, Countdown & Arrows */}
        <SectionHeader
          title={
            <span className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <span>Flash deals</span>
            </span>
          }
          countdown={CountdownBadge}
          showArrows={true}
          onPrev={scrollPrev}
          onNext={scrollNext}
          actionText="View All Deals"
          actionHref="/deals"
        />

        {/* Products Scroll Container / Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2"
        >
          {FLASH_DEALS_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
