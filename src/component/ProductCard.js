'use client';

import { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e) => {
    e.preventDefault(); // Prevent navigation when clicking wishlist
    setIsWishlisted(!isWishlisted);
  };

  // Create URL-friendly slug from product name
  const productSlug = product.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return (
    <Link 
      href={`/product/${productSlug}?id=${product.id}`}
      className="block"
    >
      <div className="flex-none w-full border rounded-lg p-3 sm:p-4 flex flex-col relative bg-white hover:shadow-lg transition-shadow">
        <button 
          onClick={toggleWishlist}
          className="absolute top-2 right-2 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              isWishlisted 
                ? 'fill-red-500 text-red-500' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          />
        </button>

        <div className="relative aspect-square mb-2 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col flex-grow">
          <h3 className="text-sm sm:text-base line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] mb-1">
            {product.name}
          </h3>

          <div className="mt-auto">
            <div className="space-y-1 mb-2">
              {product.originalPrice && (
                <p className="text-xs sm:text-sm text-gray-500 line-through">
                  USD {product.originalPrice.toFixed(2)}
                </p>
              )}
              <p className={`${product.originalPrice ? 'text-red-500' : 'text-gray-900'} font-bold text-sm sm:text-base`}>
                USD {product.price.toFixed(2)}
              </p>
            </div>

            <button 
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation when clicking add to cart
                // Add to cart logic here
              }}
              className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-full flex items-center justify-center gap-2 transition-colors group"
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

