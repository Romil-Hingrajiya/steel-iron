'use client';

import React from 'react';
// import Image from 'next/image';
import Button from '@/components/ui/Button';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Get in touch",
  description = "Whether you already know what you need, or you would like the opinion of an expert, we are always ready to help you out.",
  buttonText = "Contact us now",
  buttonLink = "/contact",
  onButtonClick,
  className = ""
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (buttonLink) {
      window.location.href = buttonLink;
    }
  };

     return (
     <section 
       className={`max-w-7xl mx-auto my-16 py-8 relative overflow-hidden ${className}`}
       style={{
         backgroundImage: 'url(/CTA-bg.jpg)',
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
         backgroundAttachment: 'fixed',
       }}
     >
       {/* Dark Overlay */}
       <div className="absolute inset-0 bg-black/20 z-10"></div>
      
             {/* Content */}
       <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 py-20">
         <div className="max-w-2xl">
           {/* Text Content */}
           <div className="text-white">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
               {title}
             </h2>
             <p className="text-xl md:text-2xl mb-8 leading-relaxed">
               {description}
             </p>
             <Button
               variant="primary"
               size="lg"
               onClick={handleButtonClick}
               className="bg-[#58915B] hover:bg-[#99BF9C] text-white border-none px-8 py-4 text-lg font-semibold"
             >
               {buttonText}
             </Button>
           </div>
         </div>
       </div>
    </section>
  );
};

export default CTASection;
