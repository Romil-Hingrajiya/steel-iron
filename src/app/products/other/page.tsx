import React from 'react';
import Heading from '@/components/ui/Heading';

import Button from '@/components/ui/Button';
import Link from 'next/link';

const OtherProductsPage = () => {
  const otherProducts = [
    {
      name: 'Steel Fabrication Services',
      description: 'Custom steel fabrication for industrial and commercial applications',
      features: ['Custom design', 'Precision cutting', 'Welding services', 'Quality assurance'],
      applications: ['Construction', 'Manufacturing', 'Infrastructure', 'Custom projects']
    },
    {
      name: 'Gas Distribution Systems',
      description: 'Complete gas distribution networks for industrial facilities',
      features: ['Pipeline design', 'Pressure regulation', 'Safety systems', 'Monitoring'],
      applications: ['Industrial plants', 'Commercial buildings', 'Multi-site operations']
    },
    {
      name: 'Safety Equipment & PPE',
      description: 'Comprehensive safety equipment for gas and steel operations',
      features: ['Gas detection', 'Fire protection', 'Personal safety', 'Emergency response'],
      applications: ['Workplace safety', 'Emergency preparedness', 'Compliance requirements']
    },
    {
      name: 'Maintenance & Support',
      description: 'Ongoing maintenance and technical support services',
      features: ['Preventive maintenance', '24/7 support', 'Training programs', 'Spare parts'],
      applications: ['Equipment maintenance', 'Operator training', 'System optimization']
    }
  ];

  const services = [
    {
      title: 'Consulting Services',
      description: 'Expert consultation for gas and steel solutions',
      icon: '💼',
      features: ['Project planning', 'Technical advice', 'Cost optimization', 'Safety assessment']
    },
    {
      title: 'Installation & Commissioning',
      description: 'Professional installation and system commissioning',
      icon: '🔧',
      features: ['Expert installation', 'System testing', 'Performance optimization', 'Documentation']
    },
    {
      title: 'Training & Certification',
      description: 'Comprehensive training programs for operators and technicians',
      icon: '🎓',
      features: ['Operator training', 'Safety certification', 'Maintenance training', 'Refresher courses']
    },
    {
      title: 'Emergency Services',
      description: '24/7 emergency response and support services',
      icon: '🚨',
      features: ['Emergency repairs', 'Technical support', 'Rapid response', 'Backup systems']
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Steel and gas solutions for manufacturing facilities',
      icon: '🏭'
    },
    {
      name: 'Construction',
      description: 'Steel fabrication and gas systems for construction projects',
      icon: '🏗️'
    },
    {
      name: 'Energy',
      description: 'Gas distribution and steel solutions for energy sector',
      icon: '⚡'
    },
    {
      name: 'Transportation',
      description: 'Gas fueling and steel infrastructure for transportation',
      icon: '🚛'
    },
    {
      name: 'Agriculture',
      description: 'Gas solutions for agricultural applications',
      icon: '🌾'
    },
    {
      name: 'Healthcare',
      description: 'Specialized gas systems for healthcare facilities',
      icon: '🏥'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#58915B] to-[#2A4734] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heading level={1} className="text-white mb-6">
              Additional Solutions
            </Heading>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive steel fabrication, gas distribution, and support services for all your industrial needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Get Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2A4734]">
                Download Catalog
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
                Beyond LPG & CNG
              </Heading>
              <p className="text-lg mb-6">
                While LPG and CNG are our core products, we offer a comprehensive range of additional solutions 
                including steel fabrication, gas distribution systems, safety equipment, and ongoing support services.
              </p>
              <p className="text-lg mb-8">
                Our expertise extends across multiple industries, providing integrated solutions that combine 
                quality steel products with efficient gas systems and professional support services.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#58915B]">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#58915B]">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-6xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-4">Our Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#58915B] rounded-full mr-3"></span>
                  Custom steel fabrication
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#58915B] rounded-full mr-3"></span>
                  Gas distribution systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#58915B] rounded-full mr-3"></span>
                  Safety equipment supply
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#58915B] rounded-full mr-3"></span>
                  Maintenance services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#58915B] rounded-full mr-3"></span>
                  Technical consulting
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
              Our Additional Products & Services
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions beyond traditional gas products
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {otherProducts.map((product, index) => (
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

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Professional Services
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete support services to ensure your systems operate efficiently and safely
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-[#58915B] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Industries We Serve
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our solutions are designed to meet the unique requirements of various industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-6">
                Quality Assurance
              </Heading>
              <p className="text-lg mb-6">
                All our products and services meet the highest quality standards. We maintain rigorous 
                quality control processes throughout design, manufacturing, and installation.
              </p>
              <p className="text-lg mb-8">
                Our team of certified professionals ensures that every project is completed to the highest 
                standards of safety, efficiency, and reliability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#58915B]">ISO</div>
                  <div className="text-sm text-gray-600">9001 Certified</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#58915B]">100%</div>
                  <div className="text-sm text-gray-600">Quality Tested</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#2A4734] mb-6">Certifications & Standards</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">ISO 9001:2015 Quality Management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">ASME Boiler & Pressure Vessel Code</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">API Standards for Gas Equipment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">AWS Welding Standards</span>
                </div>
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
              Need Custom Solutions?
            </Heading>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific requirements and get a tailored solution
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

export default OtherProductsPage;
