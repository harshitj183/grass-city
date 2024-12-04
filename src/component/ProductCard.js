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
      <div className="border rounded-lg p-4 flex flex-col relative bg-white hover:shadow-lg transition-shadow">
        <button 
          onClick={toggleWishlist}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={`w-5 h-5 ${
              isWishlisted 
                ? 'fill-red-500 text-red-500' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          />
        </button>

        <div className="relative h-[200px] mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col flex-grow">
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              {'★'.repeat(5)}
            </div>
            <span className="text-sm text-blue-500 ml-1">1 Review</span>
          </div>

          <h3 className="text-sm font-medium line-clamp-2 mb-3 text-gray-800">
            {product.name}
          </h3>

          <div className="mt-auto">
            <div className="flex items-baseline gap-2">
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className={`${product.originalPrice ? 'text-red-500' : 'text-gray-900'} text-lg font-semibold`}>
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

