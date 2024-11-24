"use client"; // Add this to mark the component as client-side

import React, { useRef } from "react";
export default function Popularcategories(props) {
  return (
    <>
      <div className="flex justify-center">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-8">Popular Categories</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Dab Rigs */}
            <div className="bg-green-200 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">Dab Rigs</h2>
              <img
                alt="Dab rigs"
                className="w-full h-48 object-cover rounded-lg mb-4"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/s4XAJ2KNtRLZENJY0QVjqT6haNrUhwqVY2QUjZlecJYftfinA.jpg"
                width={300}
              />
              <button className="bg-white text-black py-2 px-4 rounded-full">
                Shop Rigs
              </button>
            </div>

            {/* Vaporizers (Span 2 columns on portrait and full width) */}
            <div className="bg-purple-200 rounded-lg p-4 md:col-span-2">
              <h2 className="text-xl font-bold mb-2">Vaporizers</h2>
              <img
                alt="Hand holding a vaporizer"
                className="w-full h-96 object-cover rounded-lg mb-4"
                height={400}
                src="https://storage.googleapis.com/a1aa/image/mtdCAV6I6p6eGaGrg3jEzZu61IIPmRm0W7avLFtrzGHetfinA.jpg"
                width={300}
              />
              <button className="bg-white text-black py-2 px-4 rounded-full">
                Shop Vapes
              </button>
            </div>

            {/* Pipes */}
            <div className="bg-blue-200 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">Pipes</h2>
              <img
                alt="Various pipes"
                className="w-full h-48 object-cover rounded-lg mb-4"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/ehOFSyLxyIxvFipq3lGeO3QLpiP5vz9gPJA3G88smeqwbfFPB.jpg"
                width={300}
              />
              <button className="bg-white text-black py-2 px-4 rounded-full">
                Shop Pipes
              </button>
            </div>

            {/* Bongs */}
            <div className="bg-yellow-200 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">Bongs</h2>
              <img
                alt="Various bongs"
                className="w-full h-48 object-cover rounded-lg mb-4"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/lQcK41IMzLpgGBfMqtlTkcnR5N8vXReWXCwYR28ceuz1bfFPB.jpg"
                width={300}
              />
              <button className="bg-white text-black py-2 px-4 rounded-full">
                Shop Bongs
              </button>
            </div>

            {/* Grinders */}
            <div className="bg-pink-200 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">Grinders</h2>
              <img
                alt="Various grinders"
                className="w-full h-48 object-cover rounded-lg mb-4"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/bcCS6qb73LpkOpWfzIzdt8rRHmlLWV90TIDfFUr8see83eLeE.jpg"
                width={300}
              />
              <button className="bg-white text-black py-2 px-4 rounded-full">
                Shop Grinders
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
