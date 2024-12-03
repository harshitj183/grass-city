"use client"; // Add this to mark the component as a client component

import React, { useState } from 'react';
import MobileFooterMenu from './MobileFooterMenu';

export default function Mainfooter() {
  return (
    <footer className="bg-white">
      {/* Your existing footer content */}
      
      {/* Mobile Footer Menu */}
      <MobileFooterMenu />
      
      {/* Copyright section */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        <p>© 2024 Grasscity. All rights reserved.</p>
      </div>
    </footer>
  );
}

