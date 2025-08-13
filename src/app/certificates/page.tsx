import React from 'react';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

const CertificatesPage = () => {
  const certificates = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      category: 'Quality Management',
      validUntil: '2025-12-31',
      issuer: 'International Organization for Standardization',
      status: 'Active'
    },
    {
      name: 'ISO 14001:2015',
      description: 'Environmental Management System Certification',
      category: 'Environmental Management',
      validUntil: '2025-12-31',
      issuer: 'International Organization for Standardization',
      status: 'Active'
    },
    {
      name: 'OHSAS 18001:2007',
      description: 'Occupational Health and Safety Management',
      category: 'Health & Safety',
      validUntil: '2025-12-31',
      issuer: 'British Standards Institution',
      status: 'Active'
    },
    {
      name: 'ASME BPVC',
      description: 'Boiler and Pressure Vessel Code Certification',
      category: 'Pressure Equipment',
      validUntil: '2025-12-31',
      issuer: 'American Society of Mechanical Engineers',
      status: 'Active'
    },
    {
      name: 'API Q1',
      description: 'Quality Management System for Petroleum Industry',
      category: 'Petroleum Industry',
      validUntil: '2025-12-31',
      issuer: 'American Petroleum Institute',
      status: 'Active'
    },
    {
      name: 'AWS D1.1',
      description: 'Structural Welding Code Certification',
      category: 'Welding Standards',
      validUntil: '2025-12-31',
      issuer: 'American Welding Society',
      status: 'Active'
    }
  ];

  const complianceDocuments = [
    {
      name: 'Safety Data Sheets',
      description: 'Comprehensive safety information for all products',
      category: 'Safety Documentation',
      lastUpdated: '2024-01-15'
    },
    {
      name: 'Technical Specifications',
      description: 'Detailed technical specifications for all equipment',
      category: 'Technical Documentation',
      lastUpdated: '2024-02-20'
    },
    {
      name: 'Installation Manuals',
      description: 'Step-by-step installation and commissioning guides',
      category: 'Installation Guides',
      lastUpdated: '2024-01-30'
    },
    {
      name: 'Maintenance Procedures',
      description: 'Preventive and corrective maintenance procedures',
      category: 'Maintenance Documentation',
      lastUpdated: '2024-02-10'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#58915B] to-[#2A4734] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heading level={1} className="text-white mb-6">
              Certificates & Compliance
            </Heading>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Our commitment to quality, safety, and environmental responsibility is backed by internationally recognized certifications
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-6">
              Quality Assurance & Compliance
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of quality, safety, and environmental responsibility. 
              Our certifications demonstrate our commitment to excellence and compliance with international standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Quality Excellence</h3>
              <p className="text-gray-600">ISO 9001 certified quality management system ensuring consistent excellence</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Environmental Responsibility</h3>
              <p className="text-gray-600">ISO 14001 environmental management system for sustainable operations</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Safety First</h3>
              <p className="text-gray-600">OHSAS 18001 health and safety management for workplace protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Our Certifications
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Internationally recognized certifications that validate our commitment to quality and safety
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-[#58915B] to-[#99BF9C] p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                    <span className="px-3 py-1 bg-white text-[#58915B] text-sm font-semibold rounded-full">
                      {cert.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#2A4734]">Category:</span>
                      <span className="text-gray-600">{cert.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#2A4734]">Issuer:</span>
                      <span className="text-gray-600">{cert.issuer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#2A4734]">Valid Until:</span>
                      <span className="text-gray-600">{cert.validUntil}</span>
                    </div>
                  </div>
                  
                  <Button variant="primary" className="w-full mt-6">
                    View Certificate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Documents */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Compliance Documentation
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential documentation for safety, installation, and maintenance of our products
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {complianceDocuments.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#2A4734] mb-2">{doc.name}</h3>
                    <p className="text-gray-600 mb-3">{doc.description}</p>
                  </div>
                  <div className="text-3xl">📄</div>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span className="font-semibold">{doc.category}</span>
                  <span>Updated: {doc.lastUpdated}</span>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="primary" size="sm">
                    Download PDF
                  </Button>
                  <Button variant="outline" size="sm">
                    View Online
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Regulations */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-6">
                Standards & Regulations
              </Heading>
              <p className="text-lg mb-6">
                Our products and services comply with international standards and regulations, ensuring 
                safety, quality, and environmental responsibility in all our operations.
              </p>
              <p className="text-lg mb-8">
                We regularly update our processes and documentation to maintain compliance with the latest 
                industry standards and regulatory requirements.
              </p>
              <Button variant="primary" size="lg">
                Download Compliance Guide
              </Button>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#2A4734] mb-6">Key Standards We Follow</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">International Organization for Standardization (ISO)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">American Society of Mechanical Engineers (ASME)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">American Petroleum Institute (API)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">American Welding Society (AWS)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#58915B] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">National Fire Protection Association (NFPA)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-[#2A4734] to-[#58915B] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heading level={2} className="text-white mb-6">
              Need More Information?
            </Heading>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our compliance team for detailed information about our certifications and documentation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Contact Compliance Team
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2A4734]">
                Request Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificatesPage;
