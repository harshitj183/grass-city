"use client"; // Add this to mark the component as client-side

import React, { useRef } from "react";
export default function Topcontainer() {
  return (
    <>
      <br/>
      <title>Black Friday Sneak Peek</title>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <div className="mx-4 md:mx-[200px]">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-2">
          {/* First Large Banner */}
          <div className="col-span-1 md:col-span-6 bg-black text-white rounded-lg relative flex flex-col justify-center items-center">
            <div className="w-full h-full overflow-hidden">
              <img
                alt="Black Friday Main Banner"
                className="w-full h-full object-cover rounded-lg"
                src="https://www.grasscity.com/media/wysiwyg/Home_page/2024-11-19---early-black-friday---banner-main---617x472-04.jpg"
              />
            </div>
          </div>

          {/* Right Section (Vertical Banner and Small Banners) */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
            {/* Vertical Banner (Half Height of First Banner) */}
            <div className="bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-lg relative overflow-hidden" style={{ height: "50%" }}>
              <img
                alt="Vertical Banner"
                className="w-full h-full object-cover rounded-lg"
                src="https://www.grasscity.com/media/wysiwyg/Home_page/2024-11-19---early-black-friday---product---618x230.jpg"
              />
            </div>

            {/* Small Banners (Side by Side) */}
            <div className="grid grid-cols-2 gap-2">
              {/* Small Banner 1 */}
              <div className="bg-gradient-to-r from-yellow-400 to-green-500 text-white rounded-lg relative overflow-hidden">
                <img
                  alt="Small Banner 1"
                  className="w-full h-full object-cover rounded-lg"
                  src="https://www.grasscity.com/media/wysiwyg/Home_page/2024-11-19---early-black-friday---Category---302x230.jpg"
                />
              </div>

              {/* Small Banner 2 */}
              <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-lg relative overflow-hidden">
                <img
                  alt="Small Banner 2"
                  className="w-full h-full object-cover rounded-lg"
                  src="https://www.grasscity.com/media/wysiwyg/Home_page/2024-11-19---early-black-friday---Brand---302x230.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
