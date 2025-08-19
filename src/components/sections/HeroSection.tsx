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
            backgroundImage: 'url(/hero-bg.jpg)',
          }}
        />
      </div>
      
      {/* Green Blur Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A4734]/90 via-[#1a2f1f]/85 to-[#0f1a0f]/90 z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="min-h-screen flex items-center">
          {/* Left Side Content Only */}
          <div className="text-left max-w-3xl">
            {/* Tagline */}
            <div className="mb-4">
              <span className="text-sm font-medium text-white opacity-90 tracking-wide">
                ANNUAL REVIEW 2024
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Precision-engineered valves and rotogages built for accuracy, reliability, and lasting performance.
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


    </section>
  );
};

export default HeroSection;
