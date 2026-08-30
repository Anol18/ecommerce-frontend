"use client";

import React, { useState, useMemo } from "react";
import { ProductBreadcrumb } from "@/components/products/ProductBreadcrumb";
import { ProductFiltersSidebar } from "@/components/products/ProductFiltersSidebar";
import { ProductGridHeader } from "@/components/products/ProductGridHeader";
import { ProductPagination } from "@/components/products/ProductPagination";
import { ProductCard } from "@/components/common/ProductCard";
import { SHOP_PRODUCTS } from "@/data/shopProducts";
import { ALL_PRODUCTS } from "@/data/products";
import { Product } from "@/types";

export default function AllProductsPage() {
  // Combine all store products for full catalog
  const fullCatalog = useMemo(() => {
    const map = new Map<string, Product>();
    [...SHOP_PRODUCTS, ...ALL_PRODUCTS].forEach((p) => map.set(p.id, p));
    return Array.from(map.values());
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<string>("default");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClearAll = () => {
    setSelectedCategory("");
    setSelectedSubCategory("");
    setMinPrice(0);
    setMaxPrice(100000);
    setSortBy("default");
    setCurrentPage(1);
  };

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
    setCurrentPage(1);
  };

  // Filter products based on active criteria
  const filteredProducts = useMemo(() => {
    return fullCatalog.filter((product) => {
      // Price filter
      if (product.price < minPrice || product.price > maxPrice) {
        return false;
      }
      // Category filter
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }
      // Subcategory filter
      if (selectedSubCategory && product.subCategory !== selectedSubCategory) {
        return false;
      }
      return true;
    });
  }, [fullCatalog, minPrice, maxPrice, selectedCategory, selectedSubCategory]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "popular") {
      list.sort((a, b) => b.soldCount - a.soldCount);
    }
    return list;
  }, [filteredProducts, sortBy]);

  // If no filters matched, show all available products gracefully
  const displayProducts = sortedProducts.length > 0 ? sortedProducts : fullCatalog;

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-16">
      {/* 1. Breadcrumb Bar */}
      <ProductBreadcrumb
        categoryName={selectedCategory ? selectedCategory.replace(/-/g, " ").toUpperCase() : undefined}
        subCategoryName={selectedSubCategory ? selectedSubCategory.replace(/-/g, " ") : undefined}
      />

      {/* 2. Main Shop Layout: Sidebar + Product Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Left Sidebar Filter */}
          <aside className="lg:col-span-1">
            <ProductFiltersSidebar
              selectedCategory={selectedCategory}
              onSelectCategory={(slug) => {
                setSelectedCategory((prev) => (prev === slug ? "" : slug));
                setSelectedSubCategory("");
                setCurrentPage(1);
              }}
              selectedSubCategory={selectedSubCategory}
              onSelectSubCategory={(subSlug) => {
                setSelectedSubCategory((prev) => (prev === subSlug ? "" : subSlug));
                setCurrentPage(1);
              }}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onPriceChange={handlePriceChange}
              onClearAll={handleClearAll}
            />
          </aside>

          {/* Right Product Listing Area */}
          <main className="lg:col-span-3">
            {/* Header: Result count, sort, view toggles */}
            <ProductGridHeader
              totalProducts={1186}
              displayedCount={displayProducts.length}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            {/* Products Grid */}
            <div
              className={`mt-6 ${
                viewMode === "grid"
                  ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-4"
                  : "grid grid-cols-1 sm:grid-cols-2 gap-4"
              }`}
            >
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination Controls */}
            <ProductPagination
              currentPage={currentPage}
              totalPages={100}
              onPageChange={setCurrentPage}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
