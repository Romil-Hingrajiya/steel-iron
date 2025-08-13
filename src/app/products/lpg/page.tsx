import Heading from '@/components/ui/Heading';


export default function LPGPage() {
  const products = [
    {
      name: 'LPG Storage Tanks',
      description: 'High-capacity storage solutions for industrial LPG applications.',
      features: ['Pressure rated up to 250 PSI', 'Corrosion resistant', 'Safety monitoring systems', 'Automated filling systems'],
      applications: ['Industrial heating', 'Manufacturing processes', 'Food processing', 'Chemical production']
    },
    {
      name: 'LPG Distribution Systems',
      description: 'Automated distribution networks for efficient gas delivery.',
      features: ['Pipeline networks', 'Pressure regulation', 'Flow monitoring', 'Emergency shutdown'],
      applications: ['Multi-building facilities', 'Industrial complexes', 'Commercial centers', 'Residential areas']
    },
    {
      name: 'LPG Safety Equipment',
      description: 'Comprehensive safety systems for LPG operations.',
      features: ['Leak detection sensors', 'Emergency shutdown valves', 'Ventilation systems', 'Fire suppression'],
      applications: ['Storage facilities', 'Processing plants', 'Distribution centers', 'All LPG installations']
    },
    {
      name: 'LPG Monitoring Systems',
      description: 'Real-time monitoring and control systems for LPG operations.',
      features: ['24/7 monitoring', 'Remote access', 'Alert systems', 'Data logging'],
      applications: ['Large-scale operations', 'Critical facilities', 'Compliance monitoring', 'Performance tracking']
    }
  ];

  const benefits = [
    {
      title: 'Cost Effective',
      description: 'LPG offers significant cost savings compared to other fuel sources.',
      icon: '💰'
    },
    {
      title: 'Clean Burning',
      description: 'LPG burns cleanly with minimal emissions and environmental impact.',
      icon: '🌱'
    },
    {
      title: 'High Energy Density',
      description: 'Provides more energy per unit volume than many alternatives.',
      icon: '⚡'
    },
    {
      title: 'Reliable Supply',
      description: 'Consistent and dependable fuel supply for your operations.',
      icon: '🔄'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#58915B] via-[#99BF9C] to-[#2A4734] text-white py-20">
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

      {/* Overview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-6">
                LPG Solutions Overview
              </Heading>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our LPG (Liquefied Petroleum Gas) solutions provide a versatile and cost-effective 
                energy source for various industrial and commercial applications. LPG is a clean-burning 
                fuel that offers excellent energy efficiency and environmental benefits.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We design and install complete LPG systems including storage, distribution, safety, 
                and monitoring components. Our solutions are tailored to meet your specific requirements 
                and comply with all safety regulations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#99BF9C] bg-opacity-10 rounded-lg">
                  <div className="text-2xl font-bold text-[#58915B]">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-[#99BF9C] bg-opacity-10 rounded-lg">
                  <div className="text-2xl font-bold text-[#58915B]">500+</div>
                  <div className="text-sm text-gray-600">Installations</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#58915B] to-[#2A4734] rounded-xl p-8 text-white">
              <div className="text-center">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">LPG Advantages</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#99BF9C] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    High energy efficiency
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#99BF9C] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Clean burning fuel
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#99BF9C] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cost effective solution
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#99BF9C] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Reliable supply chain
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-[#58915B] mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-3 h-3 text-[#58915B] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-[#58915B] mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, appIndex) => (
                      <span key={appIndex} className="px-2 py-1 bg-[#99BF9C] bg-opacity-20 text-[#2A4734] rounded text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-6">
              Why Choose LPG?
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              LPG offers numerous advantages for industrial and commercial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-[#2A4734] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-6">
                Safety & Compliance
              </Heading>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Safety is our top priority. All our LPG systems are designed and installed 
                in compliance with international safety standards and local regulations.
              </p>
              <ul className="space-y-3">
                {[
                  'NFPA 58 compliance',
                  'ASME pressure vessel standards',
                  'Regular safety inspections',
                  'Emergency response procedures',
                  'Staff safety training',
                  '24/7 monitoring systems'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-[#58915B] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#2A4734] mb-4">Get Started</h3>
              <p className="text-gray-600 mb-6">
                Ready to implement LPG solutions for your facility? Contact our experts 
                for a comprehensive assessment and customized solution.
              </p>
              <button className="w-full px-6 py-3 bg-[#58915B] text-white font-medium rounded-lg hover:bg-[#2A4734] transition-colors">
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
