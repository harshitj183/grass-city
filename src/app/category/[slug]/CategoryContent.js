'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Mainfooter from "@/component/Mainfooter.js";
import ProductList from '@/component/ProductList.js';
import FilterSidebar from '@/component/FilterSidebar.js';
import { Pagination } from '@/components/ui/pagination';

const Header = dynamic(() => import('@/component/Header.js'), {
  ssr: false
});

// Complete menuItems array with all categories and their submenus
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

// Add these products to your existing products array
const additionalProducts = [
  // Vaporizers
  {
    id: 13,
    name: "Volcano Digital Vaporizer",
    image: "https://storage.googleapis.com/a1aa/image/cc0kZdpGzA6ROxC97xbQCZOm8Qwtj8ebmJXe1vhFWM42UfinA.jpg",
    originalPrice: 599.99,
    price: 499.99,
    material: 'Metal',
    size: 'Large',
    type: 'Desktop Vaporizers'
  },
  {
    id: 14,
    name: "PAX 3 Portable Vaporizer",
    image: "https://storage.googleapis.com/a1aa/image/eJN26PxzzS0RDCgDTNAr2ANrBGOTZIu0nFfkwT90qvQ8UfinA.jpg",
    price: 249.99,
    material: 'Metal',
    size: 'Small',
    type: 'Portable Vaporizers'
  },

  // Herb Grinders
  {
    id: 15,
    name: "4-Piece Metal Grinder",
    image: "https://storage.googleapis.com/a1aa/image/vqAzVKWO0fSVfk5CeSI8hApsDRJApQeeMRYWJhszq0m5m6LeE.jpg",
    originalPrice: 39.99,
    price: 29.99,
    material: 'Metal',
    size: 'Large',
    type: 'Metal Grinders'
  },
  {
    id: 16,
    name: "Electric Herb Grinder",
    image: "https://storage.googleapis.com/a1aa/image/UGWRf9n55TRGC6TUC3wjTt0L9btaX3TShpVWaUoTeGFyUfinA.jpg",
    price: 49.99,
    material: 'Plastic',
    size: 'Medium',
    type: 'Electric Grinders'
  },

  // Glass Bubblers
  {
    id: 17,
    name: "Sherlock Style Bubbler",
    image: "https://storage.googleapis.com/a1aa/image/zeQdfiVwU5lrlkviahjqseuopZUvFGFtflKasrxfCrxfM1X8E.jpg",
    originalPrice: 89.99,
    price: 69.99,
    material: 'Glass',
    size: 'Medium',
    type: 'Sherlock Bubblers'
  },
  {
    id: 18,
    name: "Mini Hammer Bubbler",
    image: "https://storage.googleapis.com/a1aa/image/3ikMYYiG1vqvF1jLqnw4efdrBEdSjN8axffzVHIrwQ1UT9FPB.jpg",
    price: 39.99,
    material: 'Glass',
    size: 'Small',
    type: 'Hammer Bubblers'
  },

  // Smoking Pipes
  {
    id: 19,
    name: "Glass Spoon Pipe",
    image: "https://storage.googleapis.com/a1aa/image/cc0kZdpGzA6ROxC97xbQCZOm8Qwtj8ebmJXe1vhFWM42UfinA.jpg",
    originalPrice: 29.99,
    price: 19.99,
    material: 'Glass',
    size: 'Medium',
    type: 'Glass Pipes'
  },
  {
    id: 20,
    name: "Metal One Hitter",
    image: "https://storage.googleapis.com/a1aa/image/eJN26PxzzS0RDCgDTNAr2ANrBGOTZIu0nFfkwT90qvQ8UfinA.jpg",
    price: 9.99,
    material: 'Metal',
    size: 'Small',
    type: 'One Hitters'
  },

  // Rolling Papers
  {
    id: 21,
    name: "Raw King Size Papers",
    image: "https://storage.googleapis.com/a1aa/image/vqAzVKWO0fSVfk5CeSI8hApsDRJApQeeMRYWJhszq0m5m6LeE.jpg",
    price: 2.99,
    material: 'Hemp',
    size: 'Large',
    type: 'King Size Papers'
  },
  {
    id: 22,
    name: "Juicy Jay's Flavored Papers",
    image: "https://storage.googleapis.com/a1aa/image/UGWRf9n55TRGC6TUC3wjTt0L9btaX3TShpVWaUoTeGFyUfinA.jpg",
    price: 3.99,
    material: 'Paper',
    size: 'Regular',
    type: 'Flavored Papers'
  },

  // 420 Accessories
  {
    id: 23,
    name: "Large Storage Container",
    image: "https://storage.googleapis.com/a1aa/image/zeQdfiVwU5lrlkviahjqseuopZUvFGFtflKasrxfCrxfM1X8E.jpg",
    originalPrice: 24.99,
    price: 19.99,
    material: 'Glass',
    size: 'Large',
    type: 'Storage Containers'
  },
  {
    id: 24,
    name: "Premium Rolling Tray",
    image: "https://storage.googleapis.com/a1aa/image/3ikMYYiG1vqvF1jLqnw4efdrBEdSjN8axffzVHIrwQ1UT9FPB.jpg",
    price: 15.99,
    material: 'Metal',
    size: 'Medium',
    type: 'Rolling Trays'
  },

  // Munchies
  {
    id: 25,
    name: "Assorted Candy Pack",
    image: "https://storage.googleapis.com/a1aa/image/cc0kZdpGzA6ROxC97xbQCZOm8Qwtj8ebmJXe1vhFWM42UfinA.jpg",
    originalPrice: 14.99,
    price: 9.99,
    material: 'Mixed',
    size: 'Large',
    type: 'Candy'
  },
  {
    id: 26,
    name: "Premium Chocolate Bar",
    image: "https://storage.googleapis.com/a1aa/image/eJN26PxzzS0RDCgDTNAr2ANrBGOTZIu0nFfkwT90qvQ8UfinA.jpg",
    price: 7.99,
    material: 'Food',
    size: 'Regular',
    type: 'Chocolates'
  }
];

// Add these new products to your products array
const moreProducts = [
  // Bongs
  {
    id: 27,
    name: "Double Percolator Glass Bong",
    image: "https://storage.googleapis.com/a1aa/image/cc0kZdpGzA6ROxC97xbQCZOm8Qwtj8ebmJXe1vhFWM42UfinA.jpg",
    originalPrice: 129.99,
    price: 89.99,
    material: 'Glass',
    size: 'Large',
    type: 'Glass Bongs'
  },
  {
    id: 28,
    name: "Color Changing Glass Bong",
    image: "https://storage.googleapis.com/a1aa/image/eJN26PxzzS0RDCgDTNAr2ANrBGOTZIu0nFfkwT90qvQ8UfinA.jpg",
    price: 79.99,
    material: 'Glass',
    size: 'Medium',
    type: 'Glass Bongs'
  },
  
  // Dab Rigs
  {
    id: 29,
    name: "Puffco Peak Pro",
    image: "https://storage.googleapis.com/a1aa/image/vqAzVKWO0fSVfk5CeSI8hApsDRJApQeeMRYWJhszq0m5m6LeE.jpg",
    originalPrice: 399.99,
    price: 349.99,
    material: 'Glass/Electronic',
    size: 'Medium',
    type: 'Electric Dab Rigs'
  },
  {
    id: 30,
    name: "Scientific Glass Recycler",
    image: "https://storage.googleapis.com/a1aa/image/UGWRf9n55TRGC6TUC3wjTt0L9btaX3TShpVWaUoTeGFyUfinA.jpg",
    price: 199.99,
    material: 'Glass',
    size: 'Medium',
    type: 'Scientific Dab Rigs'
  },

  // More Vaporizers
  {
    id: 31,
    name: "Mighty+ Vaporizer",
    image: "https://storage.googleapis.com/a1aa/image/zeQdfiVwU5lrlkviahjqseuopZUvFGFtflKasrxfCrxfM1X8E.jpg",
    originalPrice: 399.99,
    price: 349.99,
    material: 'Metal/Plastic',
    size: 'Medium',
    type: 'Portable Vaporizers'
  },
  {
    id: 32,
    name: "DynaVap VapCap M",
    image: "https://storage.googleapis.com/a1aa/image/3ikMYYiG1vqvF1jLqnw4efdrBEdSjN8axffzVHIrwQ1UT9FPB.jpg",
    price: 74.99,
    material: 'Metal',
    size: 'Small',
    type: 'Portable Vaporizers'
  },

  // More Accessories
  {
    id: 33,
    name: "UV Glass Cleaning Solution",
    image: "https://storage.googleapis.com/a1aa/image/cc0kZdpGzA6ROxC97xbQCZOm8Qwtj8ebmJXe1vhFWM42UfinA.jpg",
    price: 19.99,
    material: 'Liquid',
    size: 'Medium',
    type: 'Cleaning Supplies'
  },
  {
    id: 34,
    name: "Premium Hemp Wick",
    image: "https://storage.googleapis.com/a1aa/image/eJN26PxzzS0RDCgDTNAr2ANrBGOTZIu0nFfkwT90qvQ8UfinA.jpg",
    originalPrice: 9.99,
    price: 7.99,
    material: 'Hemp',
    size: 'Large',
    type: 'Lighters'
  }
];

// Update the products array
const products = [
  ...additionalProducts,
  ...moreProducts
];

// Category descriptions
const categoryDescriptions = {
  bongs: "Bongs, also known as water pipes, are a popular choice for smoking dry herbs. They come in various sizes, shapes, and materials, including glass, acrylic, and ceramic. Bongs use water filtration to cool and filter the smoke, providing a smoother and more enjoyable smoking experience.",
  "dab-rigs": "Dab rigs are specialized water pipes designed for concentrates. They feature unique designs and attachments specifically made for vaporizing concentrates, providing intense flavors and effects.",
  vaporizers: "Vaporizers are devices that heat dry herbs or concentrates to a temperature that releases their active ingredients in the form of vapor. Vaporizing is considered a healthier alternative to smoking as it doesn't produce harmful combustion byproducts.",
  "herb-grinders": "Herb grinders are essential tools for breaking down dry herbs into a consistent texture. Available in various materials and sizes, they ensure optimal preparation for smoking or vaporizing.",
  "glass-bubblers": "Glass bubblers combine the convenience of a hand pipe with the smooth filtration of a water pipe. These compact pieces offer water filtration in a portable size.",
  "smoking-pipes": "Smoking pipes are classic smoking devices available in various materials and styles. From traditional designs to modern interpretations, pipes offer a simple and effective way to enjoy dry herbs.",
  "rolling-papers": "Rolling papers are thin sheets used to roll herbs into cigarettes. Available in different sizes and materials, they provide a traditional smoking experience.",
  "420-accessories": "420 accessories include all the essential tools and items needed to enhance your smoking experience. From storage solutions to cleaning supplies, these accessories help maintain your equipment.",
  munchies: "Satisfy your cravings with our selection of snacks and treats. From sweet to savory, we offer a variety of options perfect for any mood."
};

export default function CategoryContent({ slug }) {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');

  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Find the current category's submenu items
  const currentCategory = menuItems.find(item => item.href === `/category/${slug}`);
  const subItems = currentCategory?.subItems || [];

  // Set initial type filter based on URL parameter
  useEffect(() => {
    if (typeParam) {
      // Find the matching submenu item
      const matchingSubItem = subItems.find(item => 
        item.href.includes(`type=${typeParam}`)
      );
      
      if (matchingSubItem) {
        setSelectedTypes([matchingSubItem.name]);
      }
    } else {
      setSelectedTypes([]);
    }
  }, [typeParam, subItems]);

  // Filter products based on all selected filters including types
  const filteredProducts = products.filter(product => 
    (selectedMaterials.length === 0 || selectedMaterials.includes(product.material)) &&
    (selectedSizes.length === 0 || selectedSizes.includes(product.size)) &&
    (selectedTypes.length === 0 || selectedTypes.includes(product.type)) &&
    (product.price >= priceRange[0] && product.price <= priceRange[1])
  );

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of product list
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold capitalize mb-8">
          Category: {slug}
          {typeParam && ` - ${typeParam.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`}
        </h1>
        
        {/* About Category */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            About {slug.charAt(0).toUpperCase() + slug.slice(1)}
          </h2>
          <p className="text-gray-600">
            {categoryDescriptions[slug] || 'No description available for this category.'}
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Filter Sidebar */}
          <div className="md:w-1/4 mb-8 md:mb-0 md:mr-8">
            <FilterSidebar
              category={{ 
                name: slug, 
                products,
                subItems: subItems.map(item => ({
                  name: item.name,
                  value: item.name.toLowerCase()
                }))
              }}
              selectedMaterials={selectedMaterials}
              setSelectedMaterials={setSelectedMaterials}
              selectedSizes={selectedSizes}
              setSelectedSizes={setSelectedSizes}
              selectedTypes={selectedTypes}
              setSelectedTypes={setSelectedTypes}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              initialExpandedSection={typeParam ? 'types' : 'price'}
            />
          </div>

          {/* Product List and Pagination */}
          <div className="md:w-3/4">
            {/* Product Count */}
            <div className="mb-4 text-gray-600">
              Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
            </div>

            {/* Product List */}
            <ProductList products={currentProducts} />

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </main>
      <Mainfooter />
    </>
  );
} 