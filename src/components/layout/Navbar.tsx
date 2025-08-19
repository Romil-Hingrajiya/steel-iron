'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  { 
    label: 'Products', 
    href: '/products',
    children: [
      { label: 'LPG', href: '/products/lpg', description: 'Liquefied Petroleum Gas solutions' },
      { label: 'CNG', href: '/products/cng', description: 'Compressed Natural Gas systems' },
      { label: 'Other', href: '/products/other', description: 'Additional gas solutions' },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;
      
      // Show navbar when scrolling up by at least 5px, hide when scrolling down
      if (scrollDifference < -5) {
        // Scrolling up by more than 5px
        setIsVisible(true);
      } else if (scrollDifference > 0) {
        // Scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Determine navbar background based on scroll position
  const getNavbarBackground = () => {
    if (lastScrollY < 10) {
      return 'bg-[#2A4734] shadow-lg'; // Transparent when at top
    }
    return 'bg-[#2A4734] shadow-lg'; // Dark green background when scrolled
  };

  return (
    <nav className={`fixed top-0 w-full ${getNavbarBackground()} text-white transition-transform duration-300 z-50 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#58915B] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-white">Steel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <div 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`px-3 py-2 text-sm font-medium text-white relative transition-colors ${
                          isActiveLink(item.href)
                            ? 'text-[#58915B]'
                            : 'hover:text-[#99BF9C]'
                        }`}
                      >
                        {item.label}
                        {/* Animated underline */}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-[#99BF9C] transition-all duration-300 ease-out ${
                          isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                      </Link>
                      <div className="px-1 py-2 text-sm font-medium text-white relative transition-colors">
                        <svg className="inline-block w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Mega Dropdown */}
                    {activeDropdown === item.label && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl bg-gradient-to-br from-white via-gray-50 to-white shadow-2xl rounded-xl border border-gray-200 py-8 z-50"
                        style={{ 
                          maxWidth: 'min(95vw, 72rem)'
                        }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-8">
                          {/* Column 1: Product Categories */}
                          <div className="space-y-6">
                            <h3 className="text-lg font-bold text-[#2A4734] border-b border-[#58915B] pb-2">
                              Product Categories
                            </h3>
                            <div className="space-y-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-[#58915B]/10 hover:to-[#99BF9C]/10 transition-all duration-300 group"
                                >
                                  <div className="w-10 h-10 bg-gradient-to-br from-[#58915B] to-[#99BF9C] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-sm">{child.label.charAt(0)}</span>
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-[#2A4734] group-hover:text-[#58915B] transition-colors">
                                      {child.label}
                                    </h4>
                                    {child.description && (
                                      <p className="text-sm text-gray-600 mt-1">{child.description}</p>
                                    )}
                                  </div>
                                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#58915B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              ))}
                            </div>
                          </div>

                                            {/* Column 2: LPG Products */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-[#2A4734] border-b border-[#58915B] pb-2">
                      LPG Products
                    </h3>
                    <div className="space-y-4 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#58915B] scrollbar-track-gray-100">
                      <div className="bg-gradient-to-br from-[#58915B]/5 to-[#99BF9C]/5 p-4 rounded-lg border border-[#58915B]/20">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-[#2A4734]">Internal Pressure Relief Valves</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          High-performance internal safety valves for industrial gas applications
                        </p>
                        <Link href="/products/lpg/internal-pressure-relief-valves" className="text-[#58915B] text-sm font-medium hover:underline">
                          Learn More →
                        </Link>
                      </div>

                      <div className="bg-gradient-to-br from-[#58915B]/5 to-[#99BF9C]/5 p-4 rounded-lg border border-[#58915B]/20">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-[#2A4734]">External Pressure Relief Valves</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          External safety valves for enhanced pressure control systems
                        </p>
                        <Link href="/products/lpg/external-pressure-relief-valves" className="text-[#58915B] text-sm font-medium hover:underline">
                          Learn More →
                        </Link>
                      </div>

                      <div className="bg-gradient-to-br from-[#58915B]/5 to-[#99BF9C]/5 p-4 rounded-lg border border-[#58915B]/20">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-[#2A4734]">Multi Valves</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Advanced multi-function valve systems for complex operations
                        </p>
                        <Link href="/products/lpg/multi-valves" className="text-[#58915B] text-sm font-medium hover:underline">
                          Learn More →
                        </Link>
                      </div>

                      <div className="bg-gradient-to-br from-[#58915B]/5 to-[#99BF9C]/5 p-4 rounded-lg border border-[#58915B]/20">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-[#2A4734]">Service Valves (Liquid)</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Specialized liquid service valves for precise flow control
                        </p>
                        <Link href="/products/lpg/service-valves-liquid" className="text-[#58915B] text-sm font-medium hover:underline">
                          Learn More →
                        </Link>
                      </div>

                      <div className="bg-gradient-to-br from-[#58915B]/5 to-[#99BF9C]/5 p-4 rounded-lg border border-[#58915B]/20">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-[#2A4734]">Service Valves (Vapour)</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Vapour service valves for gas phase applications
                        </p>
                        <Link href="/products/lpg/service-valves-vapour" className="text-[#58915B] text-sm font-medium hover:underline">
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </div>

                          {/* Column 3: Quick Actions */}
                          <div className="space-y-6">
                            <h3 className="text-lg font-bold text-[#2A4734] border-b border-[#58915B] pb-2">
                              Quick Actions
                            </h3>
                            <div className="space-y-4">
                              <Link href="/products" className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-[#58915B] to-[#99BF9C] text-white hover:shadow-lg transition-all duration-300 group">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                <span className="font-medium">View All Products</span>
                              </Link>
                              
                              <Link href="/contact" className="flex items-center space-x-3 p-3 rounded-lg border-2 border-[#58915B] text-[#58915B] hover:bg-[#58915B] hover:text-white transition-all duration-300 group">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span className="font-medium">Get Quote</span>
                              </Link>
                              
                              <div className="bg-gradient-to-br from-[#58915B]/10 to-[#99BF9C]/10 p-4 rounded-lg border border-[#58915B]/20">
                                <h4 className="font-semibold text-[#2A4734] mb-2">Need Help?</h4>
                                <p className="text-sm text-gray-600 mb-3">
                                  Our experts are ready to assist you with product selection
                                </p>
                                <Link href="/contact" className="text-[#58915B] text-sm font-medium hover:underline">
                                  Contact Support →
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium text-white relative transition-colors group ${
                      isActiveLink(item.href)
                        ? 'text-[#99BF9C]'
                        : 'hover:text-[#99BF9C]'
                    }`}
                  >
                    {item.label}
                    {/* Animated underline */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#99BF9C] transition-all duration-300 ease-out ${
                      isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                )}
              </div>
            ))}
            
            {/* Get in Touch Button */}
            <Button 
              variant="primary" 
              size="sm"
              className="bg-[#58915B] hover:bg-[#99BF9C] text-white border-none"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-white hover:text-[#99BF9C] hover:bg-[#99BF9C] hover:bg-opacity-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#99BF9C] border-opacity-20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className={`flex-1 text-left px-3 py-2 text-sm font-medium text-white transition-colors relative group ${
                            isActiveLink(item.href)
                              ? 'text-[#99BF9C]'
                              : 'hover:text-[#99BF9C]'
                          }`}
                        >
                          {item.label}
                          {/* Animated underline for mobile */}
                          <span className={`absolute bottom-0 left-0 h-0.5 bg-[#99BF9C] transition-all duration-300 ease-out ${
                            isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}></span>
                        </Link>
                        <button
                          className="px-3 py-2 text-sm font-medium text-white transition-colors"
                          onClick={() => handleDropdownToggle(item.label)}
                        >
                          <svg className={`inline-block w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-[#99BF9C] hover:text-white hover:bg-[#99BF9C] hover:bg-opacity-10 rounded-md transition-colors relative group"
                            >
                              {child.label}
                              {/* Animated underline for mobile dropdown items */}
                              <span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-sm font-medium text-white transition-colors relative group ${
                        isActiveLink(item.href)
                          ? 'text-[#99BF9C]'
                          : 'hover:text-[#99BF9C]'
                      }`}
                    >
                      {item.label}
                      {/* Animated underline for mobile */}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-[#99BF9C] transition-all duration-300 ease-out ${
                        isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Get in Touch Button */}
              <div className="pt-2">
                <Button 
                  variant="primary" 
                  size="sm"
                  className="w-full bg-[#58915B] hover:bg-[#99BF9C] text-white border-none"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
