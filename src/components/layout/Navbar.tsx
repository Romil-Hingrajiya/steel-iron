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
      return 'bg-transparent'; // Transparent when at top
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
            <span className="text-xl font-bold text-[#58915B]">Steel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <div className="relative">
                    <button
                      className={`px-3 py-2 text-sm font-medium text-[#58915B] relative transition-colors ${
                        isActiveLink(item.href)
                          ? 'text-[#58915B]'
                          : 'hover:text-[#99BF9C]'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.label}
                      <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {/* Animated underline */}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-[#99BF9C] transition-all duration-300 ease-out ${
                        isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </button>
                    
                    {/* Mega Dropdown */}
                    {activeDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 w-96 bg-white shadow-lg rounded-lg border border-gray-200 py-4 z-50"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="grid grid-cols-1 gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex flex-col px-4 py-3 hover:bg-[#99BF9C] hover:bg-opacity-10 transition-colors relative group"
                            >
                              <span className="font-medium text-[#2A4734]">{child.label}</span>
                              {child.description && (
                                <span className="text-sm text-gray-600 mt-1">{child.description}</span>
                              )}
                              {/* Animated underline for dropdown items */}
                              <span className="absolute bottom-0 left-0 h-0.5 bg-[#58915B] w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                            </Link>
                          ))}
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
                      <button
                        className={`w-full text-left px-3 py-2 text-sm font-medium text-white transition-colors relative group ${
                          isActiveLink(item.href)
                            ? 'text-[#99BF9C]'
                            : 'hover:text-[#99BF9C]'
                        }`}
                        onClick={() => handleDropdownToggle(item.label)}
                      >
                        {item.label}
                        <svg className={`inline-block w-4 h-4 ml-1 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        {/* Animated underline for mobile */}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-[#99BF9C] transition-all duration-300 ease-out ${
                          isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                      </button>
                      
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
