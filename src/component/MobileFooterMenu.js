'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function MobileFooterMenu() {
  const [expandedSection, setExpandedSection] = useState(null);

  const footerSections = [
    {
      title: 'Categories',
      items: [
        { name: 'Bongs', href: '/category/bongs' },
        { name: 'Bubblers', href: '/category/bubblers' },
        { name: 'Dab Rigs', href: '/category/dab-rigs' },
        { name: 'Smoking Pipes', href: '/category/smoking-pipes' },
        { name: 'Vaporizers', href: '/category/vaporizers' },
        { name: 'Herb Grinders', href: '/category/herb-grinders' },
        { name: 'Rolling Papers', href: '/category/rolling-papers' },
        { name: 'Accessories', href: '/category/accessories' },
        { name: 'New Items', href: '/new-items' },
        { name: 'Sale', href: '/sale' },
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Online Support', href: '/support' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Knowledge Base', href: '/knowledge-base' },
        { name: 'Grasscity Blog', href: '/blog' },
        { name: 'Sitemap', href: '/sitemap' },
      ]
    },
    {
      title: 'Partnership',
      items: [
        { name: 'Affiliate Program', href: '/affiliate' },
      ]
    },
    {
      title: 'Get to Know Us',
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Company Details', href: '/company-details' },
        { name: 'Accessibility Statement', href: '/accessibility' },
      ]
    },
    {
      title: 'Company Address',
      items: [
        { name: 'SJV B.V.', href: null },
        { name: '6255 North Hollywood Boulevard', href: null },
        { name: 'Suite 145 North Las vegas', href: null },
        { name: 'United States', href: null },
        { name: '+1 (888) 334-6363', href: 'tel:+18883346363' },
      ]
    }
  ];

  return (
    <div className="md:hidden border-t border-gray-200">
      {footerSections.map((section, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => setExpandedSection(expandedSection === index ? null : index)}
            className="w-full px-4 py-3 flex justify-between items-center"
          >
            <span className="font-medium text-gray-900">{section.title}</span>
            <ChevronDown 
              className={`w-5 h-5 text-gray-500 transition-transform ${
                expandedSection === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {expandedSection === index && (
            <div className="px-4 pb-3 space-y-2">
              {section.items.map((item, itemIndex) => (
                item.href ? (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="block py-1 text-gray-600 hover:text-green-600"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <p key={itemIndex} className="py-1 text-gray-600">
                    {item.name}
                  </p>
                )
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 