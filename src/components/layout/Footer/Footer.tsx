"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FOOTER_SECTIONS, STORE_INFO } from "@/data/navigation";
import {
  ShieldCheck,
  Truck,
  RefreshCcw,
  Headphones,
  Mail,
  Send,
  Home as HouseIcon,
  PhoneCall,
  MapPin
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const { showToast } = useCart();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email address.");
      return;
    }
    showToast("Thank you for subscribing to Toy House newsletter!");
    setEmail("");
  };

  return (
    <footer className="bg-slate-900 text-gray-300 pt-12 pb-24 md:pb-12 border-t border-slate-800">
      {/* Guarantees / Service Highlights */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-10 border-b border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-[#FF5B00] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs md:text-sm font-bold text-white">Super Fast Delivery</h4>
              <p className="text-[11px] text-gray-400">All across Bangladesh</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-[#FF5B00] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs md:text-sm font-bold text-white">100% Genuine Toys</h4>
              <p className="text-[11px] text-gray-400">Certified child-safe products</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-[#FF5B00] shrink-0">
              <RefreshCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs md:text-sm font-bold text-white">7 Days Easy Return</h4>
              <p className="text-[11px] text-gray-400">Hassle-free replacement</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-[#FF5B00] shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs md:text-sm font-bold text-white">24/7 Dedicated Support</h4>
              <p className="text-[11px] text-gray-400">Direct helpline & chat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#FF5B00] flex items-center justify-center text-white">
                <HouseIcon className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Toy House
              </span>
            </Link>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Toy House is Bangladesh&apos;s premier destination for safe, creative, and educational toys, electric ride-ons, baby strollers, and maternal essentials.
            </p>

            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#FF5B00]" />
                <span>{STORE_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF5B00]" />
                <span>{STORE_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF5B00]" />
                <span>{STORE_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#FF5B00] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm md:text-base font-bold text-white">
              Subscribe to Get Exclusive Offers & Coupons
            </h4>
            <p className="text-xs text-gray-400 mt-0.5">
              Receive updates on flash sales, new toy arrivals, and parenting tips.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto max-w-md gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF5B00] flex-1"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#FF5B00] hover:bg-[#E64E00] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-2">
        <p>© 2026 Toy House Ltd. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span>Safe & Secure Payments</span>
          <span>•</span>
          <span>Cash On Delivery Available</span>
        </p>
      </div>
    </footer>
  );
};
