'use client';

import React, { useState } from 'react';
import Heading from '@/components/ui/Heading';
import CTASection from '@/components/sections/CTASection';
import FAQAccordion from '@/components/ui/FAQAccordion';
import Image from 'next/image';

export default function MultiValvesPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productData = {
    name: 'Multi Valves',
    description: 'Advanced multi-function valves designed for simpler LPG application layout. These integrated valves combine multiple functions in a single unit, providing space-saving solutions with enhanced safety and operational efficiency.',
    images: [
      '/products/1_multi-valve.webp',
      '/products/2_multi-valve.webp',
      '/products/3_multi-valve.webp',
      '/products/4_multi-valve.webp'
    ],
    features: [
      'Integrated multiple functions in single unit',
      'Space-saving design for compact installations',
      'Pressure relief and service valve combination',
      'Automatic safety shut-off features',
      'Easy maintenance and inspection access',
      'UL listed and ASME certified components'
    ],
    applications: [
      'LPG storage tanks',
      'Gas distribution systems',
      'Commercial installations',
      'Industrial gas applications',
      'Safety protection systems',
      'Compact equipment layouts'
    ]
  };

  const specifications = [
    {
      title: 'Material',
      icon: '🔧',
      items: [
        'Body: Brass, aluminium rod, upper cold rolled steel, lower ductile iron',
        'Liner: Stainless steel',
        'Spring guide: Aluminium, brass, stainless steel, coated steel',
        'Spring: Coated steel, stainless steel, corrosion resistant steel',
        'Seat disc: PTFE'
      ]
    },
    {
      title: 'Specifications',
      icon: '⚙️',
      items: [
        'Gas types: LPG (Propane, Butane), NH3',
        'Connections: Thread NPT',
        'Pressure range: Max. 27 bar (391 psi)',
        'Capacity: 10,390 SCFM (Air at 120% of set pressure)',
        'Series available: 3135, A3149, AA3135, W3132G',
        'Sizes and ranges: 1/4" to 2½"',
        'Standards: UL listed, ASME, CE, PED'
      ]
    },
    {
      title: 'Features',
      icon: '🔍',
      items: [
        'Multiple functions integrated into single valve',
        'Space-saving design for compact applications',
        'Automatic reseating of relief valves after discharging',
        "'Bubble tight' seal technology",
        'Easy access for maintenance and inspection',
        'Temperature compensation and pressure monitoring'
      ]
    }
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateModal = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => prev > 0 ? prev - 1 : productData.images.length - 1);
    } else {
      setCurrentImageIndex(prev => prev < productData.images.length - 1 ? prev + 1 : 0);
    }
  };

  const handleModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'Escape':
          setIsModalOpen(false);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          navigateModal('prev');
          break;
        case 'ArrowRight':
          e.preventDefault();
          navigateModal('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2A4734] h-[40vh] via-[#1a2f1f] to-[#0f1a0f] text-white py-20">
        <div className="container h-full flex flex-col justify-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heading level={1} className="text-white">
              {productData.name}
            </Heading>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="bg-white py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Title and Description */}
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {productData.description}
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#58915B] mb-4">Key Features:</h3>
                <ul className="space-y-2">
                  {productData.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <svg className="w-4 h-4 text-[#58915B] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#58915B] mb-4">Applications:</h3>
                <div className="flex flex-wrap gap-2">
                  {productData.applications.map((app, index) => (
                    <span key={index} className="px-3 py-1 bg-[#99BF9C] bg-opacity-20 text-[#2A4734] rounded-full text-sm">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Image Gallery */}
            <div className="space-y-4">
              {/* Main Image with Navigation */}
              <div className="relative group">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer" onClick={openModal}>
                  <Image
                    src={productData.images[currentImageIndex]}
                    alt={`${productData.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateModal('prev');
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateModal('next');
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-2">
                {productData.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative aspect-square w-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                      currentImageIndex === index ? 'ring-2 ring-[#58915B]' : 'hover:ring-2 hover:ring-gray-300'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={image}
                      alt={`${productData.name} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-6">
              Product Specifications
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technical specifications and features of our Multi Valves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{spec.icon}</span>
                  <h3 className="text-lg font-semibold text-[#2A4734]">{spec.title}</h3>
                </div>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                      <svg className="w-3 h-3 text-[#58915B] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic">
              *Materials and specifications are subject to generalisation. Our experienced people are ready to help you find the correct fit for your application.
            </p>
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
          onClick={handleModalBackdropClick}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 bg-red-500 bg-opacity-80 hover:bg-opacity-100 hover:scale-105 rounded-full transition-all duration-200"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={() => navigateModal('prev')}
            className="absolute left-4 top-1/2 cursor-pointer transform -translate-y-1/2 z-10 p-3 bg-[#58915B] bg-opacity-80 hover:bg-opacity-100 rounded-full transition-all duration-200"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => navigateModal('next')}
            className="absolute right-4 top-1/2 cursor-pointer transform -translate-y-1/2 z-10 p-3 bg-[#58915B] bg-opacity-80 hover:bg-opacity-100 rounded-full transition-all duration-200"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="relative max-w-full max-h-full">
              <Image
                src={productData.images[currentImageIndex]}
                alt={`${productData.name} - Image ${currentImageIndex + 1}`}
                width={800}
                height={800}
                className="max-w-full max-h-[90vh] object-contain"
                priority
              />
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                {currentImageIndex + 1} of {productData.images.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <FAQAccordion
        title="Frequently Asked Questions"
        faqs={[
          {
            id: 'multi-functions',
            question: 'What functions are integrated into the Multi Valve?',
            answer: 'Our Multi Valves combine pressure relief, service valve, and safety shut-off functions in a single integrated unit. This design eliminates the need for multiple separate valves, saving space and simplifying installation while maintaining all safety features.'
          },
          {
            id: 'installation',
            question: 'How are Multi Valves installed?',
            answer: 'Installation requires professional expertise. The valves are typically installed on LPG storage tanks using NPT threaded connections. The integrated design simplifies the installation process compared to multiple separate valves. We recommend having our certified technicians perform the installation.'
          },
          {
            id: 'maintenance',
            question: 'What maintenance is required for Multi Valves?',
            answer: 'Regular maintenance includes annual inspections, pressure testing, and cleaning of valve components. The integrated design makes maintenance more efficient as all functions can be serviced in one location. We offer comprehensive maintenance services and training programs.'
          },
          {
            id: 'certifications',
            question: 'What certifications do Multi Valves have?',
            answer: 'Our Multi Valves are UL listed, ASME certified, and comply with CE and PED standards. Each integrated function meets the same safety requirements as individual valves, ensuring comprehensive protection for your LPG applications.'
          },
          {
            id: 'space-saving',
            question: 'How much space do Multi Valves save compared to separate valves?',
            answer: 'Multi Valves typically save 40-60% of installation space compared to using separate pressure relief and service valves. This compact design is especially beneficial for applications with limited space or where multiple functions are required.'
          },
          {
            id: 'warranty',
            question: 'What warranty do you provide for Multi Valves?',
            answer: 'We provide a comprehensive warranty covering materials and workmanship for all integrated functions. The warranty period varies by application and usage conditions. All Multi Valves undergo rigorous testing before shipment to ensure they meet our quality standards.'
          }
        ]}
        defaultOpenId="multi-functions"
      />

      {/* CTA Section */}
      <CTASection 
        title="Get in touch!"
        description="Whether you already know what you need, or you would like the opinion of an expert, we are always ready to help you out."
        buttonText="Contact us now"
        buttonLink="/contact"
      />
    </>
  );
}
