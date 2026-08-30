"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FEATURE_PROMOS } from "@/data/banners";
import { ArrowRight } from "lucide-react";

export const FeatureBanners: React.FC = () => {
  return (
    <section className="pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {FEATURE_PROMOS.map((promo) => (
            <Link
              key={promo.id}
              href={`/category/${promo.categorySlug}`}
              className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 aspect-[4/3] bg-gray-100 block"
            >
              {/* Promo Background Image */}
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />

              {/* Text info and CTA */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1 block">
                    {promo.subtitle}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {promo.title}
                  </h3>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#FF5B00] group-hover:scale-110 transition-all duration-300 shrink-0 ml-2">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
