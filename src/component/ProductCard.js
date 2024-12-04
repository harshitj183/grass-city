'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or return a skeleton/placeholder
  }

  const toggleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const productSlug = product.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return (
    <Link 
      href={`/product/${productSlug}?id=${product.id}`}
      className="block w-full max-w-[280px]"
    >
      <div className="border rounded-lg p-3 flex flex-col relative bg-white hover:shadow-lg transition-shadow h-[360px]">
        <button 
          onClick={toggleWishlist}
          className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={`w-4 h-4 ${
              isWishlisted 
                ? 'fill-red-500 text-red-500' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          />
        </button>

        <div className="relative h-[200px] mb-3 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col flex-grow">
          <h3 className="text-sm font-medium line-clamp-2 mb-2 text-gray-800 min-h-[40px]">
            {product.name}
          </h3>

          <div className="mt-auto space-y-2">
            <div className="flex flex-col">
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  USD {product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className={`${product.originalPrice ? 'text-red-500' : 'text-gray-900'} font-semibold`}>
                USD {product.price.toFixed(2)}
              </span>
            </div>

            <button 
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic here
              }}
              className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

