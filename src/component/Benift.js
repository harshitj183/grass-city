"use client"; // Add this to mark the component as client-side

import React from "react";

export default function Benift(props) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0 py-12">
        {/* First Item */}
        <div className="text-center px-4 md:px-0">
          <div className="flex justify-center mb-4">
            <i className="fas fa-store text-yellow-500 text-5xl md:text-6xl" />
          </div>
          <h3 className="text-base md:text-lg font-semibold">The first online smoke shop</h3>
          <p className="text-gray-500 text-sm md:text-base">
            Founded in 2000, Grasscity was the first online smoke shop in the world
          </p>
        </div>
        {/* Second Item */}
        <div className="text-center px-4 md:px-0">
          <div className="flex justify-center mb-4">
            <i className="fas fa-award text-yellow-500 text-5xl md:text-6xl" />
          </div>
          <h3 className="text-base md:text-lg font-semibold">Over 20 years on the market</h3>
          <p className="text-gray-500 text-sm md:text-base">
            World's Most Trusted, reliable and secure head shop 4 20 years
          </p>
        </div>
        {/* Third Item */}
        <div className="text-center px-4 md:px-0">
          <div className="flex justify-center mb-4">
            <i className="fas fa-star text-yellow-500 text-5xl md:text-6xl" />
          </div>
          <h3 className="text-base md:text-lg font-semibold">Over 49K+ positive reviews</h3>
          <p className="text-gray-500 text-sm md:text-base">
            We do our best to ensure Customer Satisfaction
          </p>
        </div>
      </div>
    </>
  );
}
