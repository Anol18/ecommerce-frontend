import React from "react";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

interface ProductBreadcrumbProps {
  categoryName?: string;
  subCategoryName?: string;
}

export const ProductBreadcrumb: React.FC<ProductBreadcrumbProps> = ({
  categoryName,
  subCategoryName,
}) => {
  return (
    <div className="bg-[#FFF5EE] border-b border-orange-100/60 py-2.5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-gray-600 font-medium">
        <Link
          href="/"
          className="hover:text-[#FF5B00] transition-colors flex items-center gap-1"
        >
          <Home className="w-3.5 h-3.5 text-gray-500" />
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link href="/products" className="hover:text-[#FF5B00] transition-colors">
          Shop
        </Link>

        {categoryName && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-800 font-semibold">{categoryName}</span>
          </>
        )}

        {subCategoryName && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#FF5B00] font-bold">{subCategoryName}</span>
          </>
        )}
      </div>
    </div>
  );
};
