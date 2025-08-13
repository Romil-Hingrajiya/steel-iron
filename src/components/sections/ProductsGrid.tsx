import React from 'react';
import Link from 'next/link';
import Heading from '@/components/ui/Heading';


const ProductsGrid: React.FC = () => {
  const products = [
    {
      id: 'body-leak-detector',
      title: 'Body leak detector',
      description: 'The electronically controlled body leak detector is designed with a rotating platform for stationary installation on the floor, with a connection to a chain conveyor system via automatic inlet and outlet units.',
      image: '/product-1.webp',
      href: '/products/lpg/body-leak-detector'
    },
    {
      id: 'static-check-scale',
      title: 'Static check scale manual stand-alone',
      description: 'The electronically controlled static check scale is designed for stand-alone installation.',
      image: '/product-2.webp',
      href: '/products/lpg/static-check-scale'
    },
    {
      id: 'valve-leak-detector',
      title: 'Valve leak detector manual stand-alone',
      description: 'The manually operated valve leak detector is an independent unit designed for stand-alone installation.',
      image: '/product-3.webp',
      href: '/products/lpg/valve-leak-detector'
    },
    {
      id: 'infrared-leak-test',
      title: 'Infrared leak test head CIR-II',
      description: 'The inherently and intrinsically safe infrared leak test head CIR-II is designed to be mounted on LPG leak detection units/machines that can fully automatically or manually test filled LPG cylinders for possible gas leaks.',
      image: '/product-4.webp',
      href: '/products/lpg/infrared-leak-test'
    }
  ];

  return (
    <section id="products" className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading level={2} className="text-[#2A4734] mb-4">
            LPG CHECKING EQUIPMENT
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden">
              {/* Product Image */}
              <div className="relative h-64 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#2A4734] mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {product.description}
                </p>

                {/* CTA Button */}
                <Link href={product.href}>
                  <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded transition-colors">
                    Go to product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ProductsGrid;
