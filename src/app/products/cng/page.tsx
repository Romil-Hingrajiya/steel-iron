import React from 'react';
import Heading from '@/components/ui/Heading';

import Button from '@/components/ui/Button';
import Link from 'next/link';

const CNGPage = () => {
  const cngProducts = [
    {
      name: 'CNG Storage Systems',
      description: 'High-pressure storage solutions for industrial and commercial applications',
      features: ['High capacity storage', 'Safety compliance', 'Modular design', 'Easy installation'],
      applications: ['Manufacturing', 'Transportation', 'Power generation']
    },
    {
      name: 'CNG Dispensing Units',
      description: 'Advanced dispensing systems for efficient gas distribution',
      features: ['Precise metering', 'Automated controls', 'Safety interlocks', 'Remote monitoring'],
      applications: ['Fuel stations', 'Fleet operations', 'Industrial facilities']
    },
    {
      name: 'CNG Compression Systems',
      description: 'High-efficiency compression solutions for natural gas processing',
      features: ['Multi-stage compression', 'Energy efficient', 'Low maintenance', 'Smart controls'],
      applications: ['Gas processing plants', 'Pipeline operations', 'Storage facilities']
    }
  ];

  const benefits = [
    {
      title: 'Environmental Benefits',
      description: 'CNG is a cleaner alternative to traditional fuels, reducing emissions and environmental impact.',
      icon: '🌱'
    },
    {
      title: 'Cost Efficiency',
      description: 'Lower fuel costs compared to diesel and gasoline, with stable pricing.',
      icon: '💰'
    },
    {
      title: 'Energy Security',
      description: 'Domestic natural gas resources provide energy independence and security.',
      icon: '🛡️'
    },
    {
      title: 'Performance',
      description: 'High energy density and consistent performance across various applications.',
      icon: '⚡'
    }
  ];

  const safetyFeatures = [
    'Pressure monitoring systems',
    'Emergency shutdown capabilities',
    'Leak detection sensors',
    'Fire suppression systems',
    'Regular safety inspections',
    'Compliance with international standards'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#58915B] to-[#2A4734] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heading level={1} className="text-white mb-6">
              CNG Solutions
            </Heading>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Advanced Compressed Natural Gas systems for industrial, commercial, and transportation applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Get Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2A4734]">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-6">
                What is CNG?
              </Heading>
              <p className="text-lg mb-6">
                Compressed Natural Gas (CNG) is natural gas that has been compressed to less than 1% of its volume at standard atmospheric pressure. 
                It&apos;s stored and distributed in hard containers at a pressure of 20-25 MPa (2,900-3,600 psi).
              </p>
              <p className="text-lg mb-8">
                Our CNG solutions provide efficient, safe, and environmentally friendly alternatives to traditional fuels, 
                making them ideal for various industrial and commercial applications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#58915B]">25%</div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#58915B]">90%</div>
                  <div className="text-sm text-gray-600">Emission Reduction</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-6xl mb-4">⛽</div>
              <h3 className="text-xl font-semibold mb-4">CNG Applications</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#58915B] rounded-full mr-3"></span>
                  Transportation fleets
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#58915B] rounded-full mr-3"></span>
                  Industrial heating
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#58915B] rounded-full mr-3"></span>
                  Power generation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#58915B] rounded-full mr-3"></span>
                  Manufacturing processes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#58915B] rounded-full mr-3"></span>
                  Commercial buildings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Our CNG Products & Systems
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive CNG solutions designed for efficiency, safety, and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cngProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-[#58915B] to-[#99BF9C] p-6">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#2A4734] mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#58915B] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#2A4734] mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {product.applications.map((app, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#99BF9C] rounded-full mr-2"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="primary" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Why Choose CNG?
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of switching to Compressed Natural Gas solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-6">
                Safety & Compliance
              </Heading>
              <p className="text-lg mb-6">
                Safety is our top priority. All our CNG systems are designed and manufactured to meet or exceed 
                international safety standards and regulations.
              </p>
              <p className="text-lg mb-8">
                We provide comprehensive safety training, regular maintenance services, and 24/7 technical support 
                to ensure your CNG systems operate safely and efficiently.
              </p>
              <Button variant="primary" size="lg">
                Safety Documentation
              </Button>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#2A4734] mb-6">Safety Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#2A4734] to-[#58915B] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heading level={2} className="text-white mb-6">
              Ready to Switch to CNG?
            </Heading>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our experts today to discuss your CNG requirements and get a customized solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Contact Sales
              </Button>
              <Link href="/products">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2A4734]">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CNGPage;
