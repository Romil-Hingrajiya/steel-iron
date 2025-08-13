import React from 'react';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section with Banner */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/about-banner.webp"
            alt="Gas Equipment Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark Green Overlay */}
        <div className="absolute inset-0 bg-[#2A4734] bg-opacity-80 z-10"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            {/* Tagline */}
            <div className="mb-4">
              <span className="text-sm font-medium text-white opacity-90 tracking-wide uppercase">
                Steel Gas Equipment
              </span>
            </div>
            
            {/* Main Heading */}
            <Heading level={1} className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Who we are
            </Heading>
            
            {/* Description */}
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl">
              Steel Gas Equipment offer a wide range of components and equipment along with expert guidance from the beginning to the end of your project. In that way, we provide you with much more than just a product.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the About Page Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Heading level={2} className="text-[#2A4734] mb-6">
                About Steel
              </Heading>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are a leading provider of gas solutions and steel products, serving industrial and commercial clients worldwide. 
                With decades of experience, we deliver innovative solutions that meet the highest standards of quality and safety.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our commitment to excellence, combined with cutting-edge technology and a dedicated team of professionals, 
                ensures that we provide reliable, efficient, and sustainable solutions for all your gas and steel needs.
              </p>
              
              <Button variant="primary" size="lg">
                Learn More About Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#58915B] mb-2">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#58915B] mb-2">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#58915B] mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Heading level={3} className="text-[#2A4734] mb-4">
                Our Mission
              </Heading>
              <p className="text-gray-600 leading-relaxed">
                To provide innovative gas and steel solutions that empower industries to operate safely, efficiently, and sustainably. 
                We strive to be the trusted partner for all gas equipment and steel product needs.
              </p>
            </div>
            <div>
              <Heading level={3} className="text-[#2A4734] mb-4">
                Our Vision
              </Heading>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in gas equipment and steel solutions, driving industry advancement through innovation, 
                quality, and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Heading level={2} className="text-[#2A4734] text-center mb-12">
            Our Core Values
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#58915B] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[#2A4734] mb-3">Quality</h4>
              <p className="text-gray-600">We maintain the highest standards in all our products and services.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#58915B] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[#2A4734] mb-3">Innovation</h4>
              <p className="text-gray-600">Constantly evolving and adopting new technologies to serve our clients better.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#58915B] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[#2A4734] mb-3">Reliability</h4>
              <p className="text-gray-600">Trusted by businesses worldwide for consistent, dependable service.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
