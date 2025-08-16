import Link from 'next/link';
import Heading from '@/components/ui/Heading';

export default function ProductsPage() {
  const products = [
    {
      id: 'lpg',
      title: 'LPG Solutions',
      subtitle: 'Liquefied Petroleum Gas',
      description: 'Comprehensive LPG systems for industrial and commercial applications. Our LPG solutions are designed for safety, efficiency, and reliability.',
      features: [
        'High-pressure storage systems',
        'Safety monitoring equipment',
        'Automated distribution systems',
        'Emergency shutdown systems',
        'Leak detection technology',
        '24/7 monitoring support'
      ],
      applications: ['Manufacturing', 'Food Processing', 'Heating Systems', 'Automotive'],
      href: '/products/lpg',
      color: 'from-[#58915B] to-[#2A4734]'
    },
    {
      id: 'cng',
      title: 'CNG Systems',
      subtitle: 'Compressed Natural Gas',
      description: 'Environmentally friendly CNG solutions for sustainable energy needs. Our CNG systems offer cost-effective and clean energy alternatives.',
      features: [
        'Compression stations',
        'Storage facilities',
        'Distribution networks',
        'Vehicle fueling systems',
        'Pressure monitoring',
        'Environmental compliance'
      ],
      applications: ['Transportation', 'Power Generation', 'Industrial Heating', 'Fleet Operations'],
      href: '/products/cng',
      color: 'from-[#99BF9C] to-[#58915B]'
    },
    {
      id: 'other',
      title: 'Other Solutions',
      subtitle: 'Specialized Gas & Steel',
      description: 'Custom gas and steel solutions for specialized requirements. We provide tailored solutions to meet unique industry needs.',
      features: [
        'Custom steel fabrication',
        'Specialized gas systems',
        'Technical consulting',
        'Installation services',
        'Maintenance programs',
        'Training and support'
      ],
      applications: ['Mining', 'Construction', 'Aerospace', 'Research Facilities'],
      href: '/products/other',
      color: 'from-[#2A4734] to-[#99BF9C]'
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
                Our Products
              </span>
            </div>
            <Heading level={1} className="text-white mb-6">
              Gas & Steel Solutions
            </Heading>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of gas solutions and steel products designed 
              to meet the diverse needs of industrial and commercial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-6">
              Comprehensive Product Range
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From LPG and CNG systems to specialized steel solutions, we offer everything 
              you need for your gas and steel requirements.
            </p>
          </div>

          <div className="space-y-12">
            {products.map((product, index) => (
              <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#58915B] bg-opacity-10 text-[#58915B] rounded-full text-sm font-medium">
                      {product.subtitle}
                    </span>
                  </div>
                  <Heading level={3} className="mb-4">
                    {product.title}
                  </Heading>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#2A4734] mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-[#58915B] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#2A4734] mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, appIndex) => (
                        <span key={appIndex} className="px-3 py-1 bg-[#99BF9C] bg-opacity-20 text-[#2A4734] rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={product.href}>
                    <button className="inline-flex items-center px-6 py-3 bg-[#58915B] text-white font-medium rounded-lg hover:bg-[#2A4734] transition-colors">
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </Link>
                </div>

                {/* Visual */}
                <div className={`bg-gradient-to-br ${product.color} rounded-xl p-8 text-white ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="text-white text-opacity-90">
                      {product.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-6">
              Why Choose Our Products?
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver quality, safety, and innovation in every product we offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Assured',
                description: 'All products meet international safety and quality standards.',
                icon: '🏆'
              },
              {
                title: 'Expert Support',
                description: '24/7 technical support and maintenance services.',
                icon: '🛠️'
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored solutions to meet your specific requirements.',
                icon: '⚙️'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-[#2A4734] mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
