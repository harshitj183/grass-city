"use client"; // Add this to mark the component as client-side

import React, { useRef } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CustomerAlsoBought() {
  const products = [
    {
      id: 1,
      name: "Cheech & Chong's Up In Smoke Grinder",
      image: "https://storage.googleapis.com/a1aa/image/pPEAJhufgwS6WafISfhSKYdigAQ9Rtfan6baSErqqFee49X8E.jpg",
      originalPrice: 29.99,
      salePrice: 11.99
    },
    {
      id: 2,
      name: "Black Leaf ELITE Beaker Base 6-Arm Perc Ice",
      image: "https://storage.googleapis.com/a1aa/image/Ts599MgxgF6IE9XuYovcwcHeoadlDZbjCbfSf3eyULfe59X8E.jpg",
      originalPrice: 119.99,
      salePrice: 79.99
    },
    {
      id: 3,
      name: "ROOR Blue Series Bong | 250ml | 14.5mm",
      image: "https://storage.googleapis.com/a1aa/image/ymf6jfnAefv6WQE2L71QSgL1cRWTxIsPJzZHK2h8FGhheeX8E.jpg",
      originalPrice: 175.99,
      salePrice: 140.99
    },
    {
      id: 4,
      name: "Glasscity Limited Edition Royal Highness",
      image: "https://storage.googleapis.com/a1aa/image/erb7RbOfyeOfiSiWoAZf4KMcEBVMpvbGFW9bryDUNlrG8eX8E.jpg",
      originalPrice: 249.99,
      salePrice: 99.99
    },
    {
      id: 5,
      name: "Glasscity Limited Edition Beaker Ice Bong",
      image: "https://storage.googleapis.com/a1aa/image/6h0btEHqxRZaJNeDc2S9e3UKS3OvGDn5didqg3Lq20eLvfFPB.jpg",
      originalPrice: 199.99,
      salePrice: 99.99
    },

    {
      id: 6,
      name: "ROOR Blue Series Bong | 250ml | 14.5mm",
      image: "https://storage.googleapis.com/a1aa/image/ymf6jfnAefv6WQE2L71QSgL1cRWTxIsPJzZHK2h8FGhheeX8E.jpg",
      originalPrice: 175.99,
      salePrice: 140.99
    },
    {
      id: 7,
      name: "Glasscity Limited Edition Royal Highness",
      image: "https://storage.googleapis.com/a1aa/image/erb7RbOfyeOfiSiWoAZf4KMcEBVMpvbGFW9bryDUNlrG8eX8E.jpg",
      originalPrice: 249.99,
      salePrice: 99.99
    },
    {
      id: 8,
      name: "Glasscity Limited Edition Beaker Ice Bong",
      image: "https://storage.googleapis.com/a1aa/image/6h0btEHqxRZaJNeDc2S9e3UKS3OvGDn5didqg3Lq20eLvfFPB.jpg",
      originalPrice: 199.99,
      salePrice: 99.99
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="relative max-w-6xl w-full">
        <h2 className="text-xl font-semibold mb-4">Customer Also Bought</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {products.map((product) => (
            <div key={product.id} className="flex-none w-48 border rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-contain mb-2"
                height={150}
                width={150}
              />
              <p className="text-sm">{product.name}</p>
              <p className="text-gray-500 line-through">USD {product.originalPrice.toFixed(2)}</p>
              <p className="text-red-500 font-semibold">USD {product.salePrice.toFixed(2)}</p>
              <button className="mt-2 bg-green-500 text-white p-2 rounded-full">
                <ShoppingCart size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow-md">
          <ChevronLeft size={16} />
        </button>
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow-md">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
