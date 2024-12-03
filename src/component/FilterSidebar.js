'use client'

import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function FilterSidebar({ 
  category,
  selectedMaterials,
  setSelectedMaterials,
  selectedSizes,
  setSelectedSizes,
  selectedTypes,
  setSelectedTypes,
  priceRange,
  setPriceRange,
  initialExpandedSection = 'price'
}) {
  const [expandedSection, setExpandedSection] = useState(initialExpandedSection)

  const materials = [...new Set(category.products.map(product => product.material))]
  const sizes = [...new Set(category.products.map(product => product.size))]

  const handleMaterialChange = (material) => {
    setSelectedMaterials(prev =>
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    )
  }

  const handleSizeChange = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    )
  }

  const handleTypeChange = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <aside className="w-full md:w-64 bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-6">
        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        <span className="ml-2 font-semibold text-gray-800">Filter</span>
      </div>
      
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div 
          className="flex justify-between items-center cursor-pointer mb-4"
          onClick={() => toggleSection('price')}
        >
          <h3 className="font-medium">Price</h3>
          <svg 
            className={`w-4 h-4 transform transition-transform ${expandedSection === 'price' ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {expandedSection === 'price' && (
          <div className="px-2">
            <div className="flex items-center justify-between mb-4">
              <div className="relative">
                <span className="absolute text-gray-500 left-2 top-2">$</span>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-24 pl-6 pr-2 py-1 border border-gray-300 rounded text-sm"
                  min="0"
                  max={priceRange[1]}
                />
              </div>
              <span className="mx-2 text-gray-400">—</span>
              <div className="relative">
                <span className="absolute text-gray-500 left-2 top-2">$</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-24 pl-6 pr-2 py-1 border border-gray-300 rounded text-sm"
                  min={priceRange[0]}
                  max="1000"
                />
              </div>
            </div>
            <div className="mb-4">
              <Slider
                min={0}
                max={1000}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-2"
              />
            </div>
            <button
              onClick={() => setPriceRange([0, 1000])}
              className="w-full bg-green-600 text-white py-2 px-4 rounded text-sm hover:bg-green-700 transition-colors"
            >
              Ok
            </button>
          </div>
        )}
      </div>

      {materials.length > 0 && (
        <div className="border-b border-gray-200 pb-4 mb-4">
          <div 
            className="flex justify-between items-center cursor-pointer mb-2"
            onClick={() => toggleSection('materials')}
          >
            <h3 className="font-medium">Material</h3>
            <svg 
              className={`w-4 h-4 transform transition-transform ${expandedSection === 'materials' ? 'rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {expandedSection === 'materials' && (
            <div className="space-y-2">
              {materials.map(material => (
                <div key={material} className="flex items-center px-2">
                  <Checkbox
                    id={`material-${material}`}
                    checked={selectedMaterials.includes(material)}
                    onCheckedChange={() => handleMaterialChange(material)}
                  />
                  <Label
                    htmlFor={`material-${material}`}
                    className="ml-2 cursor-pointer"
                  >
                    {material}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {sizes.length > 0 && (
        <div className="border-b border-gray-200 pb-4 mb-4">
          <div 
            className="flex justify-between items-center cursor-pointer mb-2"
            onClick={() => toggleSection('sizes')}
          >
            <h3 className="font-medium">Size</h3>
            <svg 
              className={`w-4 h-4 transform transition-transform ${expandedSection === 'sizes' ? 'rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {expandedSection === 'sizes' && (
            <div className="space-y-2">
              {sizes.map(size => (
                <div key={size} className="flex items-center px-2">
                  <Checkbox
                    id={`size-${size}`}
                    checked={selectedSizes.includes(size)}
                    onCheckedChange={() => handleSizeChange(size)}
                  />
                  <Label
                    htmlFor={`size-${size}`}
                    className="ml-2 cursor-pointer"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {category.subItems && category.subItems.length > 0 && (
        <div className="border-b border-gray-200 pb-4 mb-4">
          <div 
            className="flex justify-between items-center cursor-pointer mb-2"
            onClick={() => toggleSection('types')}
          >
            <h3 className="font-medium">Types</h3>
            <svg 
              className={`w-4 h-4 transform transition-transform ${expandedSection === 'types' ? 'rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {expandedSection === 'types' && (
            <div className="space-y-2">
              {category.subItems.map(type => (
                <div key={type.value} className="flex items-center px-2">
                  <Checkbox
                    id={`type-${type.value}`}
                    checked={selectedTypes.includes(type.name)}
                    onCheckedChange={() => handleTypeChange(type.name)}
                  />
                  <Label
                    htmlFor={`type-${type.value}`}
                    className="ml-2 cursor-pointer"
                  >
                    {type.name}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </aside>
  )
}

