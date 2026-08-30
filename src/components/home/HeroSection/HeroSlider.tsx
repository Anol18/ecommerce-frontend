"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HERO_SLIDES } from "@/data/banners";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div
      className="relative rounded-2xl overflow-hidden h-[360px] sm:h-[420px] md:h-[440px] shadow-lg group border border-gray-100 bg-slate-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      {HERO_SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background image with overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent z-10" />
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 75vw"
          />

          {/* Banner Glowing Card Glass Effect (as seen in the design mockup) */}
          <div className="absolute inset-0 z-20 flex items-center p-6 sm:p-10 md:p-12">
            <div className="max-w-md sm:max-w-lg space-y-4 text-white">
              {/* Badge */}
              {s.badge && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-300 border border-white/20 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{s.badge}</span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-md leading-tight">
                {s.title}
              </h1>

              {/* Subtitle / Description */}
              <p className="text-sm sm:text-base text-gray-200 font-medium line-clamp-2 drop-shadow-xs max-w-sm sm:max-w-md">
                {s.subtitle}
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href={s.ctaLink}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-[#FF5B00] hover:bg-[#E64E00] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <span>{s.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-[#FF5B00] text-white backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-[#FF5B00] text-white backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slider Pagination Indicators (matching pill style in reference) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "w-8 bg-[#FF5B00] shadow-sm"
                : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
