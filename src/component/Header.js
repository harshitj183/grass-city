"use client";

import { useState, memo } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  User2,
  Heart,
  Menu,
  X,
  ChevronDown,
  Mic,
} from "lucide-react";

const menuItems = [
  { 
    name: "Bongs", 
    href: "/category/bongs",
    subItems: [
      { name: "Glass Bongs", href: "/category/bongs?type=glass" },
      { name: "Acrylic Bongs", href: "/category/bongs?type=acrylic" },
      { name: "Mini Bongs", href: "/category/bongs?type=mini" },
      { name: "Beaker Base Bongs", href: "/category/bongs?type=beaker" },
      { name: "Straight Tube Bongs", href: "/category/bongs?type=straight" },
      { name: "Recycler Bongs", href: "/category/bongs?type=recycler" }
    ] 
  },
  { 
    name: "Dab Rigs", 
    href: "/category/dab-rigs",
    subItems: [
      { name: "Electric Dab Rigs", href: "/category/dab-rigs?type=electric" },
      { name: "Mini Dab Rigs", href: "/category/dab-rigs?type=mini" },
      { name: "Recycler Dab Rigs", href: "/category/dab-rigs?type=recycler" },
      { name: "Scientific Dab Rigs", href: "/category/dab-rigs?type=scientific" },
      { name: "Dab Tools", href: "/category/dab-rigs?type=tools" }
    ] 
  },
  { 
    name: "Vaporizers", 
    href: "/category/vaporizers",
    subItems: [
      { name: "Dry Herb Vaporizers", href: "/category/vaporizers?type=dry-herb" },
      { name: "Wax Vaporizers", href: "/category/vaporizers?type=wax" },
      { name: "Desktop Vaporizers", href: "/category/vaporizers?type=desktop" },
      { name: "Portable Vaporizers", href: "/category/vaporizers?type=portable" },
      { name: "Vaporizer Parts", href: "/category/vaporizers?type=parts" }
    ] 
  },
  { 
    name: "Herb Grinders", 
    href: "/category/herb-grinders",
    subItems: [
      { name: "Metal Grinders", href: "/category/herb-grinders?type=metal" },
      { name: "Wooden Grinders", href: "/category/herb-grinders?type=wooden" },
      { name: "Electric Grinders", href: "/category/herb-grinders?type=electric" },
      { name: "Large Grinders", href: "/category/herb-grinders?type=large" },
      { name: "Small Grinders", href: "/category/herb-grinders?type=small" }
    ] 
  },
  { 
    name: "Glass Bubblers", 
    href: "/category/glass-bubblers",
    subItems: [
      { name: "Hammer Bubblers", href: "/category/glass-bubblers?type=hammer" },
      { name: "Sherlock Bubblers", href: "/category/glass-bubblers?type=sherlock" },
      { name: "Mini Bubblers", href: "/category/glass-bubblers?type=mini" },
      { name: "Scientific Bubblers", href: "/category/glass-bubblers?type=scientific" }
    ] 
  },
  { 
    name: "Smoking Pipes", 
    href: "/category/smoking-pipes",
    subItems: [
      { name: "Glass Pipes", href: "/category/smoking-pipes?type=glass" },
      { name: "Metal Pipes", href: "/category/smoking-pipes?type=metal" },
      { name: "Wooden Pipes", href: "/category/smoking-pipes?type=wooden" },
      { name: "One Hitters", href: "/category/smoking-pipes?type=one-hitter" },
      { name: "Chillums", href: "/category/smoking-pipes?type=chillum" }
    ] 
  },
  { 
    name: "Rolling Papers", 
    href: "/category/rolling-papers",
    subItems: [
      { name: "Regular Papers", href: "/category/rolling-papers?type=regular" },
      { name: "King Size Papers", href: "/category/rolling-papers?type=king-size" },
      { name: "Flavored Papers", href: "/category/rolling-papers?type=flavored" },
      { name: "Hemp Papers", href: "/category/rolling-papers?type=hemp" },
      { name: "Rolling Accessories", href: "/category/rolling-papers?type=accessories" }
    ] 
  },
  { 
    name: "420 Accessories", 
    href: "/category/420-accessories",
    subItems: [
      { name: "Storage Containers", href: "/category/420-accessories?type=storage" },
      { name: "Cleaning Supplies", href: "/category/420-accessories?type=cleaning" },
      { name: "Lighters", href: "/category/420-accessories?type=lighters" },
      { name: "Ashtrays", href: "/category/420-accessories?type=ashtrays" },
      { name: "Rolling Trays", href: "/category/420-accessories?type=rolling-trays" }
    ] 
  },
  { 
    name: "Munchies", 
    href: "/category/munchies",
    subItems: [
      { name: "Snacks", href: "/category/munchies?type=snacks" },
      { name: "Drinks", href: "/category/munchies?type=drinks" },
      { name: "Candy", href: "/category/munchies?type=candy" },
      { name: "Chocolates", href: "/category/munchies?type=chocolates" },
      { name: "Healthy Options", href: "/category/munchies?type=healthy" }
    ] 
  }
];

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <header className="w-full bg-white border-b border-gray-300 relative z-50">
      <div className="container mx-auto px-4">
        {/* Top Header Section */}
        <div className="flex h-16 items-center justify-between relative z-50">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg
              className="text-green-600"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 4C12.3 4 8.7 5.4 6 8.1C0.5 13.6 0.5 22.4 6 27.9C6.2 28.1 6.5 28.1 6.7 27.9C6.9 27.7 6.9 27.4 6.7 27.2C1.5 22 1.5 14 6.7 8.8C11.9 3.6 19.9 3.6 25.1 8.8C30.3 14 30.3 22 25.1 27.2C24.9 27.4 24.9 27.7 25.1 27.9C25.2 28 25.3 28 25.4 28C25.5 28 25.6 28 25.7 27.9C31.2 22.4 31.2 13.6 25.7 8.1C23.3 5.4 19.7 4 16 4Z" />
            </svg>
            <div>
              <div className="text-green-600 font-bold text-xl">Grasscity</div>
              <div className="text-gray-500 text-xs">
                World's best online headshop
              </div>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <form className="w-full max-w-xl relative flex items-center">
              <div className="flex items-center w-full bg-gray-100 rounded-full shadow-md">
                <button
                  type="button"
                  className="text-gray-500 ml-4"
                  aria-label="Voice search"
                >
                  <Mic className="h-5 w-5" />
                </button>
                <input
                  type="search"
                  placeholder="Search"
                  className="flex-grow px-4 py-3 text-gray-700 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-r-full hover:bg-green-600 transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5 text-white" />
                </button>
              </div>
            </form>
          </div>

          {/* Right-Side Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6">
              {["Sale", "Blog", "Support"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-green-600"
                >
                  {item}
                </Link>
              ))}
            </div>
            {[User2, Heart, ShoppingCart].map((Icon, index) => (
              <button
                key={index}
                className="text-gray-700 hover:text-green-600"
                aria-label={Icon.name}
              >
                <Icon className="h-6 w-6" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Search Bar - Always visible */}
        <div className="md:hidden py-2 border-t border-gray-200">
          <form className="w-full relative flex items-center">
            <div className="flex items-center w-full bg-gray-100 rounded-full shadow-md">
              <button
                type="button"
                className="text-gray-500 ml-4"
                aria-label="Voice search"
              >
                <Mic className="h-5 w-5" />
              </button>
              <input
                type="search"
                placeholder="Search"
                className="flex-grow px-4 py-3 text-gray-700 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-r-full hover:bg-green-600 transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-white" />
              </button>
            </div>
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="mt-4 relative z-40">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <div className="w-full">
                    <Link
                      href={item.href}
                      className="flex justify-between items-center py-2 px-4 bg-gray-100 text-left hover:bg-gray-200 text-gray-700 w-full"
                      onClick={() => item.subItems.length > 0 && setOpenSubMenu(openSubMenu === index ? null : index)}
                    >
                      {item.name}
                      {item.subItems.length > 0 && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openSubMenu === index ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>
                    {item.subItems.length > 0 && openSubMenu === index && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className="block py-1 px-4 text-gray-500 hover:text-green-600"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 mt-4 relative z-40">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              {/* Main menu item */}
              <div className="inline-flex items-center gap-1 cursor-pointer group-hover:text-green-600">
                <Link 
                  href={item.href} 
                  className="text-gray-700 hover:text-green-600"
                >
                  {item.name}
                </Link>
                {item.subItems.length > 0 && (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>

              {/* Submenu */}
              {item.subItems.length > 0 && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-gray-300 shadow-lg rounded-md w-48 relative z-50">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-green-600 whitespace-nowrap"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
