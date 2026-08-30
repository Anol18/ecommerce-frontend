"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, ShoppingBag, Check, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import confetti from "canvas-confetti";

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, setIsCartOpen } = useCart();
  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  const handleBuyNow = () => {
    addToCart(quickViewProduct, qty);
    setQuickViewProduct(null);
    setIsCartOpen(true);
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
      });
    } catch {
      // ignore
    }
  };

  const handleAddToCart = () => {
    addToCart(quickViewProduct, qty);
    setQuickViewProduct(null);
  };

  return (
    <Dialog open={!!quickViewProduct} onOpenChange={(open) => !open && setQuickViewProduct(null)}>
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Product Image preview */}
          <div className="relative bg-gray-50 p-6 flex items-center justify-center min-h-[300px]">
            {quickViewProduct.discountBadge && (
              <Badge variant="discount" className="absolute top-4 left-4 z-10 text-xs px-2.5 py-1">
                {quickViewProduct.discountBadge}
              </Badge>
            )}
            <div className="relative w-full h-64 md:h-80">
              <Image
                src={quickViewProduct.image}
                alt={quickViewProduct.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-[#FF5B00] uppercase tracking-wider">
                    {quickViewProduct.brand || "Toy House Official"}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> In Stock
                  </span>
                </div>
                <DialogTitle className="text-lg font-bold text-gray-900 leading-snug">
                  {quickViewProduct.title}
                </DialogTitle>
              </DialogHeader>

              {/* Ratings and reviews */}
              <div className="flex items-center gap-3 my-2.5 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-gray-900">{quickViewProduct.rating || 5.0}</span>
                  <span>({quickViewProduct.reviewCount || 0} reviews)</span>
                </div>
                <span>•</span>
                <span className="font-semibold text-gray-700">{quickViewProduct.soldCount} Units Sold</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 my-3">
                <span className="text-2xl font-black text-gray-900">
                  {formatPrice(quickViewProduct.price)}
                </span>
                {quickViewProduct.originalPrice && quickViewProduct.originalPrice > quickViewProduct.price && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(quickViewProduct.originalPrice)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                {quickViewProduct.description ||
                  "Crafted with child-safe durable materials ensuring hours of fun, active learning, and creative entertainment."}
              </p>

              {/* Quantity selector */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold rounded-l-lg"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-xs font-semibold text-gray-900">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <Button
                  onClick={handleBuyNow}
                  className="w-full bg-[#FF5B00] hover:bg-[#E64E00] text-white text-xs font-bold h-10 gap-2 shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Buy Now
                </Button>
                <Button
                  onClick={handleAddToCart}
                  variant="cartOutline"
                  className="w-full text-xs font-semibold h-10 gap-2 border-gray-200"
                >
                  <ShoppingCart className="w-4 h-4 text-gray-600" />
                  Add to Cart
                </Button>
              </div>

              {/* Perks */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#FF5B00]" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF5B00]" />
                  <span>100% Authentic</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-[#FF5B00]" />
                  <span>7 Days Return</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
