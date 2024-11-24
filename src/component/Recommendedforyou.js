"use client"; // Add this to mark the component as client-side

import React, { useRef } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function RecommendedAndBestsellers() {
  const products = [
    {
      id: 1,
      name: "Glasscity Straight Cylinder Ice Bong | 10...",
      image: "https://storage.googleapis.com/a1aa/image/cc0kZdpGzA6ROxC97xbQCZOm8Qwtj8ebmJXe1vhFWM42UfinA.jpg",
      originalPrice: 59.99,
      salePrice: 35.99
    },
    {
      id: 2,
      name: "Glasscity Limited Edition Royal Highness...",
      image: "https://storage.googleapis.com/a1aa/image/eJN26PxzzS0RDCgDTNAr2ANrBGOTZIu0nFfkwT90qvQ8UfinA.jpg",
      originalPrice: 249.99,
      salePrice: 99.99
    },
    {
      id: 3,
      name: "Glasscity Limited Edition Beaker Ice Bong | Blue...",
      image: "https://storage.googleapis.com/a1aa/image/vqAzVKWO0fSVfk5CeSI8hApsDRJApQeeMRYWJhszq0m5m6LeE.jpg",
      originalPrice: 64.99,
      salePrice: 39.99
    },
    {
      id: 4,
      name: "Cheech & Chong's Strawberry Mini Beaker...",
      image: "https://storage.googleapis.com/a1aa/image/UGWRf9n55TRGC6TUC3wjTt0L9btaX3TShpVWaUoTeGFyUfinA.jpg",
      originalPrice: 89.99,
      salePrice: 39.99
    },
    {
      id: 5,
      name: "Beaker Ice Bong with Glow in the Dark Cobra...",
      image: "https://storage.googleapis.com/a1aa/image/zeQdfiVwU5lrlkviahjqseuopZUvFGFtflKasrxfCrxfM1X8E.jpg",
      originalPrice: 79.99,
      salePrice: 39.99
    },
    {
      id: 6,
      name: "DHC Monster Beaker Bong...",
      image: "https://storage.googleapis.com/a1aa/image/3ikMYYiG1vqvF1jLqnw4efdrBEdSjN8axffzVHIrwQ1UT9FPB.jpg",
      originalPrice: 49.99,
      salePrice: 24.99
    }
  ];

  const scrollContainer = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainer.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Recommended for you</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 border rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 border rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainer}
        className="flex overflow-x-auto gap-4 pb-4 mb-4 scroll-smooth scrollbar-hide"
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {products.map((product) => (
          <div key={product.id} className="flex-none w-[280px] border rounded-lg p-4 flex flex-col">
            <div className="flex justify-center mb-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-w-[150px] object-contain"
                width={150}
                height={150}
              />
            </div>
            <p className="mt-2 text-sm line-clamp-2 min-h-[40px]">{product.name}</p>
            <div className="mt-auto">
              <p className="line-through text-gray-500 text-sm">
                USD {product.originalPrice.toFixed(2)}
              </p>
              <p className="text-red-500 font-bold">
                USD {product.salePrice.toFixed(2)}
              </p>
              <button 
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full mt-2 w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
