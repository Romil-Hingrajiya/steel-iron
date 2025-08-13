'use client';

import React from 'react';
import Link from 'next/link';
import Heading from '@/components/ui/Heading';

interface BusinessSegment {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageUrl: string;
}

const businessSegments: BusinessSegment[] = [
  {
    id: 'lpg',
    title: 'LPG Solutions',
    description: 'With over 80 years of experience in gas handling, we are a leading destination for LPG cylinder filling. We offer turnkey solutions from planning to facility management, ensuring reliable and efficient gas distribution systems.',
    linkText: '>> Our Gas Solutions',
    linkHref: '/products/lpg',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'cryogenic',
    title: 'Cryogenic Solutions',
    description: 'Liquefied Natural Gas (LNG) and Liquefied Biogas (LBG) are fuels that benefit shipping and transport sectors\' climate ambitions. We develop low-emission technology for liquefaction, bunkering, and refuelling.',
    linkText: '>> Our Cryogenic Solutions',
    linkHref: '/products/cng',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'equipment',
    title: 'Gas Equipment',
    description: 'Our product range includes a wide variety of gas equipment for LPG, NH3, LNG, and other cryogenic gases. We meet customer goals and ensure business success with reliable, high-quality equipment solutions.',
    linkText: '>> Our Gas Equipment',
    linkHref: '/products',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'recycling',
    title: 'Plastic Waste Recycling',
    description: 'With growing demand for responsible practices, there is a shift towards resource-efficient solutions. Our EnviroTech department plays a central role, supporting circular economies and balanced resource use.',
    linkText: '>> Our innovative business',
    linkHref: '/products/other',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'
  }
];

const BusinessSegmentsSection: React.FC = () => {
  return (
    <section className="bg-[#58915B] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <Heading level={2} className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Our Business Segments
          </Heading>
        </div>

        {/* Business Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {businessSegments.map((segment) => (
            <div key={segment.id} className="flex flex-col h-full">
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="aspect-[4/3] bg-gray-800 relative">
                  <img
                    src={segment.imageUrl}
                    alt={segment.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Placeholder fallback */}
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-[#2A4734] to-[#99BF9C] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <span className="text-white font-medium">{segment.title}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-white">
                  {segment.title}
                </h3>

                {/* Description */}
                <p className="text-white text-opacity-90 mb-6 leading-relaxed flex-grow">
                  {segment.description}
                </p>

                {/* Call to Action Link */}
                <Link 
                  href={segment.linkHref}
                  className="inline-flex items-center text-[#99BF9C] hover:text-white transition-colors font-medium text-sm mt-auto"
                >
                  <span className="mr-1">{'>'}{'>'}</span>
                  {segment.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessSegmentsSection;
