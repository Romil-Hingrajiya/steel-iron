import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A4734] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Information (Left Column) */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Steel</h3>
            <div className="space-y-2 text-sm text-gray-300 mb-6">
              <p>123 Steel Street</p>
              <p>Industrial District, City 12345</p>
              <p>Tel +1 (234) 567-890</p>
              <p>info@steel.com</p>
              <p>VAT No. 12 34 56 78</p>
            </div>
            
            {/* Get in touch link */}
            <Link 
              href="/contact" 
              className="inline-flex items-center text-[#99BF9C] hover:text-white transition-colors text-sm font-medium mb-6"
            >
              <span className="mr-1">{'>'}{'>'}</span>
              Get in touch
            </Link>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#99BF9C] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#99BF9C] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#99BF9C] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Business Segments */}
          <div>
            <h3 className="text-lg font-bold mb-4">Business segments</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/lpg" className="text-white hover:text-[#99BF9C] transition-colors">
                  LPG Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/cng" className="text-white hover:text-[#99BF9C] transition-colors">
                  CNG Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/other" className="text-white hover:text-[#99BF9C] transition-colors">
                  Steel Fabrication
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-[#99BF9C] transition-colors">
                  Gas Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-white hover:text-[#99BF9C] transition-colors">
                  Service and spare parts
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-[#99BF9C] transition-colors">
                  Facility Management
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-[#99BF9C] transition-colors">
                  Technical support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-[#99BF9C] transition-colors">
                  Customer training
                </Link>
              </li>
            </ul>
          </div>

          {/* Who we are */}
          <div>
            <h3 className="text-lg font-bold mb-4">Who we are</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white hover:text-[#99BF9C] transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-[#99BF9C] transition-colors">
                  Our energy approach
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-[#99BF9C] transition-colors">
                  Our values
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-[#99BF9C] transition-colors">
                  Cases
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-[#99BF9C] transition-colors">
                  Job openings
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-[#99BF9C] transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Sign-up (Right Section) */}
          <div>
            <h3 className="text-lg font-bold mb-4">The best industry insight in your mailbox.</h3>
            <p className="text-sm text-gray-300 mb-6">
              Sign up for the Steel newsletter to get insights and news from our world of responsible energy solutions - directly to your mailbox.
            </p>
            <button className="bg-[#99BF9C] hover:bg-[#58915B] text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright and Legal Links (Bottom Bar) */}
        <div className="border-t border-[#99BF9C] border-opacity-20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#2A4734] font-bold text-xs">S</span>
              </div>
              <span className="text-sm text-gray-300">©{currentYear} Steel</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/terms-and-conditions" className="text-sm text-gray-300 hover:text-[#99BF9C] transition-colors">
                Terms of use
              </Link>
              <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-[#99BF9C] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-sm text-gray-300 hover:text-[#99BF9C] transition-colors">
                Cookie information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
