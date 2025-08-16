import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#2A4734] via-[#1a2f1f] to-[#0f1a0f] text-white min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='1200' height='800' viewBox='0 0 1200 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='industrial' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect width='100' height='100' fill='%232A4734'/%3E%3Ccircle cx='20' cy='20' r='3' fill='%2358915B' opacity='0.3'/%3E%3Ccircle cx='80' cy='80' r='2' fill='%2399BF9C' opacity='0.2'/%3E%3Crect x='40' y='40' width='20' height='20' fill='%2358915B' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23industrial)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      {/* Dark Green Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-[#2A4734] bg-opacity-80 z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="min-h-screen flex items-center">
          {/* Left Side Content Only */}
          <div className="text-left max-w-2xl">
            {/* Tagline */}
            <div className="mb-4">
              <span className="text-sm font-medium text-white opacity-90 tracking-wide">
                ANNUAL REVIEW 2024
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Packed with great
              <span className="block">stories and insights</span>
            </h1>
            
            {/* Call to Action Button */}
            <Link href="/about">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-[#99BF9C] hover:bg-[#58915B] text-[#2A4734] font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Dive into it here
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  );
};

export default HeroSection;
