import React from 'react';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import FAQAccordion from '@/components/ui/FAQAccordion';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-[#2A4734] via-[#1a2f1f] to-[#0f1a0f] text-white min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/contact-bg.png)',
            }}
          />
        </div>
        
        {/* Green Blur Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A4734]/90 via-[#1a2f1f]/85 to-[#0f1a0f]/90 z-10"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="min-h-screen flex items-center">
            {/* Left Side Content Only */}
            <div className="text-left max-w-3xl">
              {/* Tagline */}
              <div className="mb-4">
                <span className="text-sm font-medium text-white opacity-90 tracking-wide uppercase">
                  Get In Touch
                </span>
              </div>
              
              {/* Main Heading */}
              <Heading level={1} className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Contact Us
              </Heading>
              
              {/* Description */}
              <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                We&apos;re here to help you with all your gas equipment and steel solutions needs. Get in touch with our expert team for professional guidance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="bg-white py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            
            {/* Mail Us Card */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#a5d2a7] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group relative">
              
              {/* Icon */}
              <div className="w-12 h-12 bg-[#58915B] bg-opacity-10 rounded-lg flex items-center justify-center text-[#58915B] mb-4">
                <svg className="w-6 h-6" fill="white" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-[#2A4734] mb-3">Mail Us 24/7</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>info@steel.com</p>
                <p>support@steel.com</p>
              </div>
              
              {/* Arrow Button */}
              <div className="absolute -bottom-4 -right-4">
                <div className="w-12 h-12 bg-[#58915B] rounded-full flex items-center justify-center text-white group-hover:rotate-220 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Our Location Card */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#a5d2a7] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group relative">
              
              {/* Icon */}
              <div className="w-12 h-12 bg-[#58915B] bg-opacity-10 rounded-lg flex items-center justify-center text-[#58915B] mb-4">
                <svg className="w-6 h-6" fill="white" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-[#2A4734] mb-3">Our Location</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>Steel Industrial Zone</p>
                <p>Gas Equipment District</p>
                <p>Manufacturing Hub</p>
              </div>
              
              {/* Arrow Button */}
              <div className="absolute -bottom-4 -right-4">
                <div className="w-12 h-12 bg-[#58915B] rounded-full flex items-center justify-center text-white group-hover:rotate-220 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Call Us Card */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#a5d2a7] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group relative">
              
              {/* Icon */}
              <div className="w-12 h-12 bg-[#58915B] bg-opacity-10 rounded-lg flex items-center justify-center text-[#58915B] mb-4">
                <svg className="w-6 h-6" fill="white" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-[#2A4734] mb-3">Call Us 24/7</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>Phone: +1 (234) 567-890</p>
                <p>Mobile: +1 (234) 567-8900</p>
              </div>
              
              {/* Arrow Button */}
              <div className="absolute -bottom-4 -right-4">
                <div className="w-12 h-12 bg-[#58915B] rounded-full flex items-center justify-center text-white group-hover:rotate-220 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Working Days Card */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#a5d2a7] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group relative">
              
              {/* Icon */}
              <div className="w-12 h-12 bg-[#58915B] bg-opacity-10 rounded-lg flex items-center justify-center text-[#58915B] mb-4">
                <svg className="w-6 h-6" fill="white" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-[#2A4734] mb-3">Working Days</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              
              {/* Arrow Button */}
              <div className="absolute -bottom-4 -right-4">
                <div className="w-12 h-12 bg-[#58915B] rounded-full flex items-center justify-center text-white group-hover:rotate-220 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="flex flex-col justify-between bg-gray-50 p-8 rounded-lg border-2 border-gray-300 shadow-inner shadow-gray-300">
              <div className="">
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Contact Us</span>
                <h2 className="text-3xl font-bold text-[#2A4734] mt-2">We&apos;re Here to Help Get in Touch!</h2>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                We carefully screen all of our equipment and solutions, so you can rest assured that your project would receive the absolute highest quality of service and support.
              </p>
              
              {/* Call Us Section */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-[#58915B] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Call Us Anytime</p>
                  <p className="text-xl font-bold text-[#2A4734]">+1 (234) 567-890</p>
                </div>
              </div>
              </div>
              
              {/* Follow Me Section */}
              <div className="bg-[#2A4734] p-4 rounded-lg">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="text-white mb-4 md:mb-0">
                    <span className="text-lg font-medium">Follow Me:</span>
                  </div>
                  <div className="flex space-x-3">
                    {/* Social Media Icons */}
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2A4734] hover:bg-[#58915B] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2A4734] hover:bg-[#58915B] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2A4734] hover:bg-[#58915B] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2A4734] hover:bg-[#58915B] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2A4734] hover:bg-[#58915B] hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* <Button variant="primary" size="lg" className="w-full">
                Book A Free Consultation
              </Button> */}
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg border-2 border-[#58915B] shadow-md relative overflow-hidden">
              {/* Glass Blur Background with Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#58915B]/10 to-[#99BF9C]/10 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              
              {/* Sweep Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#2A4734]">Fill The Contact Form</h3>
                  <p className="text-gray-600">Get Free Consultation For Gas Solutions</p>
                </div>
                
                <form className="space-y-4">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border-2 border-[#58915B] rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#58915B] focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border-2 border-[#58915B] rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#58915B] focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 border-2 border-[#58915B] rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#58915B] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  {/* Message */}
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-[#58915B] rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#58915B] focus:border-transparent transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  
                  {/* Checkbox */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="save-info"
                      className="w-4 h-4 text-[#58915B] border-[#58915B] rounded focus:ring-[#58915B]"
                    />
                    <label htmlFor="save-info" className="text-sm text-gray-600">
                      Save my name, email, and phone in this browser for the next time I contact.
                    </label>
                  </div>
                  
                  {/* Submit Button */}
                  <Button variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* World Map Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2A4734] mb-8">
              Our Global Presence
            </h2>
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
