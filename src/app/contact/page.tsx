import Heading from '@/components/ui/Heading';
import ContactForm from '@/components/forms/ContactForm';
import FAQAccordion from '@/components/ui/FAQAccordion';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-[#58915B] text-sm font-medium">
                • Our Area Installations
              </span>
            </div>
            <Heading level={1} className="text-black mb-8 text-4xl font-bold">
              Contact Us
            </Heading>
            <p className="text-lg text-black max-w-4xl mx-auto leading-relaxed mb-12">
              Coming full circle, the internet&apos;s remixing of the now infamous lorem ipsum passage has officially elevated it to pop culture status.
            </p>
            
            {/* World Map Image */}
            <div className="max-w-4xl mx-auto">
              <img 
                src="/contact-intro-map.png" 
                alt="World map showing our global installations" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-6">
              Send Us a Message
            </Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we&apos;ll get back to you as soon as possible. 
              For urgent matters, please call our emergency hotline.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Additional Contact Information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Office Hours */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#58915B] bg-opacity-10 rounded-lg flex items-center justify-center text-[#58915B] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2A4734] mb-3">Office Hours</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  <strong>Emergency Support:</strong> 24/7 available
                </p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#58915B] bg-opacity-10 rounded-lg flex items-center justify-center text-[#58915B] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2A4734] mb-3">Quick Contact</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-[#2A4734]">Main Office:</p>
                  <a href="tel:+1234567890" className="text-[#58915B] hover:text-[#2A4734] transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <p className="font-medium text-[#2A4734]">Emergency:</p>
                  <a href="tel:+1234567890" className="text-[#58915B] hover:text-[#2A4734] transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
                <div>
                  <p className="font-medium text-[#2A4734]">Email:</p>
                  <a href="mailto:info@steel.com" className="text-[#58915B] hover:text-[#2A4734] transition-colors">
                    info@steel.com
                  </a>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#58915B] bg-opacity-10 rounded-lg flex items-center justify-center text-[#58915B] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2A4734] mb-3">Service Areas</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>We provide services across:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Industrial Districts</li>
                  <li>Commercial Zones</li>
                  <li>Manufacturing Facilities</li>
                  <li>Construction Sites</li>
                  <li>And more...</li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  <strong>Coverage:</strong> 100+ mile radius
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion
        title="Frequently Asked Questions"
        faqs={[
          {
            id: 'gas-solutions',
            question: 'What types of gas solutions do you provide?',
            answer: 'We offer comprehensive LPG and CNG solutions, including storage systems, distribution networks, safety equipment, and monitoring systems for industrial and commercial applications.'
          },
          {
            id: 'installation-services',
            question: 'Do you provide installation services?',
            answer: 'Yes, we provide complete installation services including site assessment, system design, installation, testing, and commissioning. Our certified technicians ensure safe and proper installation.'
          },
          {
            id: 'safety-measures',
            question: 'What safety measures do you implement?',
            answer: 'We follow strict safety protocols including leak detection systems, emergency shutdown procedures, regular maintenance schedules, and comprehensive safety training for all personnel.'
          },
          {
            id: 'emergency-response',
            question: 'How quickly can you respond to emergencies?',
            answer: 'We provide 24/7 emergency support with response times typically under 2 hours for critical situations. Our emergency hotline is always available.'
          },
          {
            id: 'service-areas',
            question: 'What areas do you serve?',
            answer: 'We provide services across industrial districts, commercial zones, manufacturing facilities, and construction sites with coverage extending to a 100+ mile radius from our main office.'
          },
          {
            id: 'maintenance',
            question: 'Do you offer maintenance services?',
            answer: 'Yes, we provide comprehensive maintenance services including regular inspections, preventive maintenance, emergency repairs, and system upgrades to ensure optimal performance and safety.'
          }
        ]}
        defaultOpenId="gas-solutions"
      />
    </>
  );
}
