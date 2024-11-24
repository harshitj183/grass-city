"use client"; // Add this to mark the component as a client component

import React, { useState } from 'react';
export default function Mainfooter(props) {
  return (



    
    <footer className="w-full bg-white">
      {/* Features Banner */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 border-b">
        <div className="flex flex-col items-center text-center">
           
           <img src="https://www.grasscity.com/static/version1731406682/frontend/Grasscity/Hyva/en_US/images/benefits/free-shipping.svg"   className="h-30" />
          
          <p className="mt-2 text-sm text-green-600">
            Free Shipping on US Orders
            <br />
            Above $50 USD
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://www.grasscity.com/static/version1731406682/frontend/Grasscity/Hyva/en_US/images/benefits/easy.svg"   className="h-30" />
          <p className="mt-2 text-sm text-green-600">Easy Returns</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://www.grasscity.com/static/version1731406682/frontend/Grasscity/Hyva/en_US/images/benefits/online.svg"   className="h-30" />
          <p className="mt-2 text-sm text-green-600">Oldest Online Smoke Shop</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://www.grasscity.com/static/version1731406682/frontend/Grasscity/Hyva/en_US/images/benefits/over-20.svg"   className="h-30" />
          <p className="mt-2 text-sm text-green-600">Over 22 years on the market</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://www.grasscity.com/static/version1731406682/frontend/Grasscity/Hyva/en_US/images/benefits/over-61.svg"   className="h-30" />
          <p className="mt-2 text-sm text-green-600">Over 61K+ positive reviews</p>
        </div>
      </div>
      {/* Back to top */}
      <div className="container mx-auto px-4 py-4 text-center border-b">
        <button className="text-gray-600 hover:text-gray-900">Back to top ˄</button>
      </div>
      {/* Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Categories */}
          <div>
            <h3 className="footer-section-title flex justify-between items-center font-semibold text-gray-800 mb-4 cursor-pointer md:cursor-default">
              <span>Categories</span>
              <svg
                className="w-4 h-4 transition-transform md:hidden"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </h3>
            <ul className="footer-section-content space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Bongs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Bubblers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Dab Rigs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Smoking Pipes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Vaporizers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Herb Grinders
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Rolling Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="footer-section-title flex justify-between items-center font-semibold text-gray-800 mb-4 cursor-pointer md:cursor-default">
              <span>Support</span>
              <svg
                className="w-4 h-4 transition-transform md:hidden"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </h3>
            <ul className="footer-section-content space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Online Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          {/* Get to Know Us */}
          <div>
            <h3 className="footer-section-title flex justify-between items-center font-semibold text-gray-800 mb-4 cursor-pointer md:cursor-default">
              <span>Get to Know Us</span>
              <svg
                className="w-4 h-4 transition-transform md:hidden"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </h3>
            <ul className="footer-section-content space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Company Details
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Accessibility Statement
                </a>
              </li>
            </ul>
          </div>
          {/* Company Address */}
          <div>
            <h3 className="footer-section-title flex justify-between items-center font-semibold text-gray-800 mb-4 cursor-pointer md:cursor-default">
              <span>Company Address</span>
              <svg
                className="w-4 h-4 transition-transform md:hidden"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </h3>
            <address className="footer-section-content text-gray-600 not-italic">
              SJV B.V.
              <br />
              6255 North Hollywood Boulevard
              <br />
              Suite 145 North Las vegas
              <br />
              United States
              <br />
              <a href="tel:+18883346363" className="hover:text-gray-900">
                +1 (888) 334-6363
              </a>
            </address>
          </div>
        </div>
        {/* Social Media & Payment */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-pink-600 hover:text-pink-700">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-red-600 hover:text-red-700">
                <span className="sr-only">Pinterest</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
            {/* Payment Methods */}
            <div className="flex space-x-4">
              <img src="https://www.grasscity.com/static/version1731406682/frontend/Grasscity/Hyva/en_US/images/footer-visa-logo.svg" alt="Visa" className="h-8" />
              <img src="https://www.grasscity.com/static/version1731406682/frontend/Grasscity/Hyva/en_US/images/footer-mastercard-logo.svg" alt="Mastercard" className="h-8" />
              <img src="https://www.grasscity.com/static/version1731406682/frontend/Grasscity/Hyva/en_US/images/footer-americanexpress-logo.svg" alt="American Express" className="h-8" />
              <img src="https://www.grasscity.com/static/version1731406682/frontend/Grasscity/Hyva/en_US/images/footer-bitcoin-logo.svg" alt="Bitcoin" className="h-8" />
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>
            © 2023 Grasscity.com is a part of High Tide Inc. Company. All Rights
            Reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms &amp; Conditions
            </a>
          </div>
          <p className="mt-4">You must be 21 years or older to use this website</p>
          <p className="text-xs text-gray-500">
           All products are intended for legal dry herb or tobacco use. The statements and products shown on this website have not been evaluated by the US Food and Drug Administration (FDA). These devices are not designed to diagnose, cure, prevent, or treat any disease. Before using a vaporizer, please consult with a licensed health care provider. If you use a vaporizer, you do so at your own risk. Inhalation is inadvisable and may potentially be harmful. Any comments from user-submitted reviews found on this website are related to the users own personal experiences, and are not endorsed, reviewed, or necessarily shared by grasscity.com or its affiliates. Vaporizing does not necessarily eliminate any and all toxins found in vaporized substances, so much care should be taken prior to use. By using grasscity.com, you acknowledge and agree to abide by our Terms of Use page before making any purchase on this website
          </p>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .footer-section-title svg {\n    transform: rotate(0deg);\n    transition: transform 0.3s ease;\n  }\n  \n  .footer-section-title.expanded svg {\n    transform: rotate(180deg);\n  }\n  \n  @media (max-width: 768px) {\n    .footer-section-content {\n      max-height: 0;\n      overflow: hidden;\n      transition: max-height 0.3s ease-out;\n    }\n    \n    .footer-section-title.expanded + .footer-section-content {\n      max-height: 500px;\n    }\n  }\n  \n  @media (min-width: 769px) {\n    .footer-section-content {\n      max-height: none !important;\n    }\n  }\n"
        }}
      />
    </footer>


  );
}

