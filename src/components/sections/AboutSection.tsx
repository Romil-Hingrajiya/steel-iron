import React from 'react';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support' },
  ];

  const values = [
    {
      title: 'Quality',
      description: 'We maintain the highest standards in all our products and services.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'Constantly evolving and adopting new technologies to serve our clients better.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: 'Reliability',
      description: 'Trusted by businesses worldwide for consistent, dependable service.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="bg-gray-50 py-16">
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
            
            <Link href="/about">
              <Button variant="primary" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#58915B] mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <Heading level={3} className="text-[#2A4734] text-center mb-12">
            Our Core Values
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#58915B] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#2A4734] mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
