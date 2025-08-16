'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

const CertificatesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set());

  const imagesPerPage = 10;
  const totalImages = 14;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  // Generate image paths
  const generateImagePath = (index: number) => {
    const path = `/certificates/certificate-gaslin-belgeler-${index + 1}.jpg`;
    // console.log(`Generated path for index ${index}: ${path}`);
    return path;
  };



  // Get current page images
  const getCurrentPageImages = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = Math.min(startIndex + imagesPerPage, totalImages);
    return Array.from({ length: endIndex - startIndex }, (_, i) => startIndex + i);
  };

  // Preload images for modal navigation
  useEffect(() => {
    if (isModalOpen) {
      const preloadIndexes = [
        currentImageIndex - 1,
        currentImageIndex + 1
      ].filter(index => index >= 0 && index < totalImages);

      preloadIndexes.forEach(index => {
        if (!preloadedImages.has(index)) {
          const img = new window.Image();
          img.src = generateImagePath(index);
          setPreloadedImages(prev => new Set([...prev, index]));
        }
      });
    }
  }, [isModalOpen, currentImageIndex, preloadedImages, totalImages]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'Escape':
          setIsModalOpen(false);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setCurrentImageIndex(prev => prev > 0 ? prev - 1 : totalImages - 1);
          break;
        case 'ArrowRight':
          e.preventDefault();
          setCurrentImageIndex(prev => prev < totalImages - 1 ? prev + 1 : 0);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, totalImages]);

  // Open modal
  const openModal = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Navigate in modal
  const navigateModal = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => prev > 0 ? prev - 1 : totalImages - 1);
    } else {
      setCurrentImageIndex(prev => prev < totalImages - 1 ? prev + 1 : 0);
    }
  };

  // Handle modal backdrop click
  const handleModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2A4734] via-[#1a2f1f] to-[#0f1a0f] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl py-6">
            <h2 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-left">
            Recognitions That Reflect Our Commitment to Excellence
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore our collection of professional certifications, each a testament to our skills, standards, and dedication to delivering quality you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Gallery Section */}
      <section className="max-w-7xl mx-auto bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-6">
              Our Certificates
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of professional certifications, each a testament to our skills, standards, and dedication to delivering quality you can trust.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
            {getCurrentPageImages().map((imageIndex) => (
                                            <div
                 key={imageIndex}
                 className="aspect-[3/4] relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gray-100"
                 onClick={() => openModal(imageIndex)}
               >
                 <img
                   src={generateImagePath(imageIndex)}
                   alt={`Certificate ${imageIndex + 1}`}
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                   style={{ zIndex: 999 }}
                                       onError={(e) => {
                      // console.error(`Failed to load image: ${generateImagePath(imageIndex)}`);
                      // console.error('Error:', e);
                      // Add a visible error indicator
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = '#ff0000';
                      target.style.border = '2px solid red';
                    }}
                    onLoad={() => {
                      // console.log(`Successfully loaded image: ${generateImagePath(imageIndex)}`);
                    }}
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 z-50">
                   <p className="text-white text-sm font-medium">Certificate {imageIndex + 1}</p>
                 </div>
               </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium text-[#58915B] bg-white border border-[#58915B] rounded-lg hover:bg-[#58915B] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      currentPage === page
                        ? 'bg-[#58915B] text-white'
                        : 'text-[#58915B] bg-white border border-[#58915B] hover:bg-[#58915B] hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium text-[#58915B] bg-white border border-[#58915B] rounded-lg hover:bg-[#58915B] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={handleModalBackdropClick}
        >
                     {/* Close Button */}
           <button
             onClick={closeModal}
             className="absolute top-4 right-4 cursor-pointer z-10 p-2 bg-red-500 bg-opacity-80 hover:bg-opacity-100 hover:scale-105 rounded-full transition-all duration-200"
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
                src={generateImagePath(currentImageIndex)}
                alt={`Certificate ${currentImageIndex + 1}`}
                width={800}
                height={1000}
                className="max-w-full max-h-[90vh] object-contain"
                priority
              />
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                {currentImageIndex + 1} of {totalImages}
              </div>
            </div>
          </div>
        </div>
      )}

             {/* CTA Section */}
       <CTASection 
         title="Get in touch!"
         description="Whether you already know what you need, or you would like the opinion of an expert, we are always ready to help you out."
         buttonText="Contact us now"
         buttonLink="/contact"
       />
    </>
  );
};

export default CertificatesPage;
