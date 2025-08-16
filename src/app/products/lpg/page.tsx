import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';
import Link from 'next/link';

export default function LPGPage() {
  const lpgProducts = [
    {
      id: 'internal-pressure-relief-valves',
      name: 'Internal Pressure Relief Valves',
      description: 'Advanced pressure relief valves designed specifically for LPG/NH3 equipment protection. Ensures maximum safety and equipment longevity.',
      shortDescription: 'For LPG/NH3 equipment protection',
      image: '/products/lpg/internal-relief-valve.jpg',
      features: ['Pressure rated up to 27 bar', 'Corrosion resistant materials', 'Automatic reseating', 'Bubble tight seal'],
      applications: ['LPG storage tanks', 'NH3 equipment', 'Industrial gas systems', 'Safety protection']
    },
    {
      id: 'external-pressure-relief-valves',
      name: 'External Pressure Relief Valves',
      description: 'External pressure relief valves providing comprehensive LPG overpressure protection for storage and distribution systems.',
      shortDescription: 'For LPG overpressure protection',
      image: '/products/1_external-relief-valves_lpg_nh3.webp',
      features: ['Max pressure 27 bar (391 psi)', 'Thread connections NPT', 'UL listed & ASME certified', 'Direct vent piping attachment'],
      applications: ['LPG storage facilities', 'Distribution systems', 'Commercial installations', 'Industrial applications']
    },
    {
      id: 'multi-valves',
      name: 'Multi Valves',
      description: 'Simplified LPG application layout with multi-valve systems designed for efficient gas control and distribution.',
      shortDescription: 'For simpler LPG application layout',
      image: '/products/1_multi-valve.webp',
      features: ['Multiple valve integration', 'Space-saving design', 'Easy maintenance', 'Standard connections'],
      applications: ['LPG distribution', 'Gas control systems', 'Commercial installations', 'Industrial facilities']
    },
    {
      id: 'service-valves-liquid',
      name: 'Service Valves for Liquid Withdrawal',
      description: 'Specialized service valves designed for safe and efficient withdrawal of liquid LPG from storage units.',
      shortDescription: 'For withdrawing liquids from LPG storage units',
      image: '/products/1_service-valves_liquid.webp',
      features: ['Liquid phase operation', 'High flow capacity', 'Safety interlocks', 'Leak-proof design'],
      applications: ['LPG storage tanks', 'Liquid transfer', 'Industrial processes', 'Commercial dispensing']
    },
    {
      id: 'service-valves-vapour',
      name: 'Service Valves for Vapour Withdrawal',
      description: 'Dedicated service valves for LPG vapour withdrawal, ensuring optimal gas delivery and system efficiency.',
      shortDescription: 'For LPG vapour withdrawal',
      image: '/products/1_service-valves_vapour.webp',
      features: ['Vapour phase operation', 'Precise flow control', 'Pressure regulation', 'Temperature compensation'],
      applications: ['Gas distribution', 'Vapour systems', 'Commercial heating', 'Industrial processes']
    }
  ];

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
        'Gas types: LPG (Propane, Butane)',
        'Connections: Thread NPT',
        'Pressure range: Max. 27 bar (391 psi)',
        'Capacity: 10,390 SCFM (Air at 120% of set pressure)',
        'Series available: 3135, A3149, AA3135, W3132G and others',
        'Sizes and ranges: 1/4" to 2½"',
        'Standards: UL listed, ASME, CE, PED'
      ]
    },
    {
      title: 'Features',
      icon: '🔍',
      items: [
        '"Pop-action" = max. protection, min. product loss',
        'Automatic reseating of relief valves after discharging',
        "'Bubble tight' seal",
        'Available in configurations that permit direct attachment of vent piping when required',
        'Optional pipeaway adapters'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2A4734] via-[#1a2f1f] to-[#0f1a0f] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium backdrop-blur-sm">
                LPG Solutions
              </span>
            </div>
            <Heading level={1} className="text-white mb-6">
              Liquefied Petroleum Gas
            </Heading>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive LPG solutions for industrial and commercial applications. 
              Safe, efficient, and reliable gas systems designed for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-6">
              LPG Products & Systems
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete range of LPG equipment and systems for industrial and commercial applications.
            </p>
          </div>

          <div className="space-y-6">
            {lpgProducts.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#2A4734] mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-3">{product.shortDescription}</p>
                    <p className="text-sm text-gray-500">{product.description}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Link
                      href={`/products/lpg/${product.id}`}
                      className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 bg-[#58915B] hover:bg-[#99BF9C] text-white border-none focus:outline-none focus:ring-2 focus:ring-[#58915B] focus:ring-offset-2"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


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
