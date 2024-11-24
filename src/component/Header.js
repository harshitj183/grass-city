"use client"; // Add this to mark the component as a client component

import React, { useState } from "react";
import { Search, ShoppingCart, User2, Heart, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const menuItems = [
    { name: "Bongs", subItems: ["Glass Bongs", "Acrylic Bongs", "Mini Bongs"] },
    { name: "Dab Rigs", subItems: ["Electric Dab Rigs", "Mini Dab Rigs"] },
    { name: "Vaporizers", subItems: ["Dry Herb Vaporizers", "Wax Vaporizers"] },
    { name: "Herb Grinders", subItems: [] },
    { name: "Glass Bubblers", subItems: [] },
    { name: "Smoking Pipes", subItems: [] },
    { name: "Rolling Papers", subItems: [] },
    { name: "420 Accessories", subItems: [] },
    { name: "SALE", subItems: [] },
  ];

  return (
    <header className="w-full bg-white border-b border-[#E5E7EB]">
      <div className="container mx-auto px-4">
        {/* Top Header Section */}
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#374151]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <svg
                className="text-[#95C11F]"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  d="M16 4C12.3 4 8.7 5.4 6 8.1C0.5 13.6 0.5 22.4 6 27.9C6.2 28.1 6.5 28.1 6.7 27.9C6.9 27.7 6.9 27.4 6.7 27.2C1.5 22 1.5 14 6.7 8.8C11.9 3.6 19.9 3.6 25.1 8.8C30.3 14 30.3 22 25.1 27.2C24.9 27.4 24.9 27.7 25.1 27.9C25.2 28 25.3 28 25.4 28C25.5 28 25.6 28 25.7 27.9C31.2 22.4 31.2 13.6 25.7 8.1C23.3 5.4 19.7 4 16 4Z"
                  fill="currentColor"
                />
              </svg>
              <div className="ml-2">
                <div className="text-[#95C11F] font-bold text-xl">Grasscity</div>
                <div className="text-[#6B7280] text-[10px]">
                  World's best online headshop
                </div>
              </div>
            </div>
          </a>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 items-center justify-center px-4">
            <form className="w-full max-w-lg relative">
              <input
                type="search"
                placeholder="Search"
                className="w-full pl-4 pr-10 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#95C11F] focus:ring-1 focus:ring-[#95C11F]"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-3 bg-[#95C11F] text-white rounded-r-md"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <a
                href="/sale"
                className="text-[#374151] hover:text-[#95C11F]"
              >
                Sale
              </a>
              <a
                href="/blog"
                className="text-[#374151] hover:text-[#95C11F]"
              >
                Blog
              </a>
              <a
                href="/support"
                className="text-[#374151] hover:text-[#95C11F]"
              >
                Support
              </a>
            </div>
            <button
              className="text-[#374151] hover:text-[#95C11F]"
              aria-label="Account"
            >
              <User2 className="h-6 w-6" />
            </button>
            <button
              className="text-[#374151] hover:text-[#95C11F]"
              aria-label="Wishlist"
            >
              <Heart className="h-6 w-6" />
            </button>
            <button
              className="text-[#374151] hover:text-[#95C11F]"
              aria-label="Cart"
            >
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="flex md:hidden mt-2">
          <form className="w-full relative">
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-4 pr-10 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#95C11F] focus:ring-1 focus:ring-[#95C11F]"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-3 bg-[#95C11F] text-white rounded-r-md"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Menu - Mobile */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button
                    className="w-full flex justify-between items-center py-2 px-4 text-left bg-[#F9FAFB] hover:bg-[#E5E7EB] text-[#374151]"
                    onClick={() =>
                      setOpenSubMenu(openSubMenu === index ? null : index)
                    }
                  >
                    {item.name}
                    {item.subItems.length > 0 && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openSubMenu === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {item.subItems.length > 0 && openSubMenu === index && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-1 px-4 text-[#6B7280] hover:text-[#95C11F]"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Menu - Desktop */}
        <nav className="hidden md:flex space-x-6 mt-4">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <button className="text-[#374151] hover:text-[#95C11F]">
                {item.name}
              </button>
              {item.subItems.length > 0 && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-[#E5E7EB] shadow-lg rounded-md hidden group-hover:block z-50">
                  {item.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="py-2 px-4 text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#95C11F]"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
