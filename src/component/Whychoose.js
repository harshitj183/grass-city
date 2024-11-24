"use client"; // Add this to mark the component as client-side

import React, { useRef } from "react";
export default function Whychoose(props) {
  return (
    <>
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Knowledge-base Articles</h2>
          <a className="text-gray-600 flex items-center" href="#">
            Show more
            <i className="fas fa-chevron-right ml-2"></i>
          </a>
        </div>
        <div
          className="flex overflow-x-auto space-x-4"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitScrollbar: "display: none"
          }}
        >
          <div
            className="bg-green-100 p-4 rounded-lg text-center w-64"
            style={{ scrollSnapAlign: "start", flex: "none" }}
          >
            <img
              alt="Illustration of a glass cleaning process in green theme"
              className="mx-auto mb-2"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/0q4dj3ZGpWY5DVUA8UDcczKBuifKE6Q8qYbxxqOQr3YWsw4JA.jpg"
              width={100}
            />
            <p className="text-sm font-medium">How to clean your glass?</p>
          </div>
          <div
            className="bg-green-100 p-4 rounded-lg text-center w-64"
            style={{ scrollSnapAlign: "start", flex: "none" }}
          >
            <img
              alt="Illustration of a dab pen and vaporizer in green theme"
              className="mx-auto mb-2"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/7lfqUwmc4L0FZqYQub1ACKwgTveGVAS2dSIt1Any2aFoYhxTA.jpg"
              width={100}
            />
            <p className="text-sm font-medium">Dab Pen vs Vaporizers</p>
          </div>
          <div
            className="bg-green-100 p-4 rounded-lg text-center w-64"
            style={{ scrollSnapAlign: "start", flex: "none" }}
          >
            <img
              alt="Illustration of bongs and dab rigs in green theme"
              className="mx-auto mb-2"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/gtSmcjd3OgreLa6MSlJqZ7ENpzQUdgiL3qXIXHZ9qeebxCjnA.jpg"
              width={100}
            />
            <p className="text-sm font-medium">Bongs vs Dab Rigs</p>
          </div>
          <div
            className="bg-green-100 p-4 rounded-lg text-center w-64"
            style={{ scrollSnapAlign: "start", flex: "none" }}
          >
            <img
              alt="Illustration of a grinder in green theme"
              className="mx-auto mb-2"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/S9iIKOM1KA6KDRXtfaT9PP36PAdIAFtNKSfkRtL6lHeeiFGPB.jpg"
              width={100}
            />
            <p className="text-sm font-medium">How to choose right Grinder</p>
          </div>
          <div
            className="bg-green-100 p-4 rounded-lg text-center w-64"
            style={{ scrollSnapAlign: "start", flex: "none" }}
          >
            <img
              alt="Illustration of a carb cap in green theme"
              className="mx-auto mb-2"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/UTOHMkTHwlZUJZLU0rXMeNel1UmET3bZ1jQQnvIXw1dqYhxTA.jpg"
              width={100}
            />
            <p className="text-sm font-medium">Why use a Carb Cap?</p>
          </div>
          <div
            className="bg-green-100 p-4 rounded-lg text-center w-64"
            style={{ scrollSnapAlign: "start", flex: "none" }}
          >
            <img
              alt="Illustration of dabs in green theme"
              className="mx-auto mb-2"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/leROaoe0egUBzoPfpCqay6Piiy6SQ3MRpYFcdyOiAmsDjFGPB.jpg"
              width={100}
            />
            <p className="text-sm font-medium">What are Dabs?</p>
          </div>
        </div>
      </div>

    </>


  );
}

