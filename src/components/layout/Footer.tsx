import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-green-900 via-green-900 to-green-950 text-white overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Steel Gas Equipment</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Precision-engineered valves and rotogages built for accuracy, reliability, and lasting performance. 
              Your trusted partner in gas equipment solutions.
            </p>
            
            {/* Get in Touch Section */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <div className="flex space-x-3">
                {/* Twitter */}
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#58915B] hover:scale-110 hover:shadow-lg transition-all duration-300"
                  aria-label="Follow us on Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#58915B] hover:scale-110 hover:shadow-lg transition-all duration-300"
                  aria-label="Connect with us on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                {/* WhatsApp */}
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#58915B] hover:scale-110 hover:shadow-lg transition-all duration-300"
                  aria-label="Contact us on WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                
                {/* Email */}
                <a 
                  href="mailto:info@steel.com" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#58915B] hover:scale-110 hover:shadow-lg transition-all duration-300"
                  aria-label="Send us an email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className='lg:pl-16'>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/certificates" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    Certificates
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/products/lpg" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    LPG
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <Link 
                      href="/products/lpg/internal-pressure-relief-valves" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      <span className="relative">
                        Internal Pressure Relief Valves
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/products/lpg/external-pressure-relief-valves" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      <span className="relative">
                        External Pressure Relief Valves
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/products/lpg/multi-valves" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      <span className="relative">
                        Multi Valves
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/products/lpg/service-valves-liquid" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      <span className="relative">
                        Service Valves Liquid
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/products/lpg/service-valves-vapour" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      <span className="relative">
                        Service Valves Vapour
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link 
                  href="/products/cng" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    CNG
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <Link 
                      href="/products/cng" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      <span className="relative">
                        CNG Solutions
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/products/cng" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      <span className="relative">
                        CNG Equipment
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link 
                  href="/products/other" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    Other
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <Link 
                      href="/products/other" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      <span className="relative">
                        Steel Fabrication
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/products/other" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      <span className="relative">
                        Gas Equipment
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              {/* Working Hours */}
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-[#58915B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-sm">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#58915B] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </div>
              
              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#58915B] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@steel.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@steel.com
                </a>
              </div>
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-[#58915B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Steel Industrial Zone</p>
                  <p className="text-gray-300 text-sm">Gas Equipment District</p>
                  <p className="text-gray-300 text-sm">Manufacturing Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Steel Gas Equipment. All rights reserved.
            </div>
                         <div className="flex flex-wrap gap-6">
               <Link 
                 href="/privacy-policy" 
                 className="text-gray-300 hover:text-white transition-colors text-sm relative group"
               >
                 <span className="relative">
                   Privacy Policy
                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                 </span>
               </Link>
               <Link 
                 href="/terms-and-conditions" 
                 className="text-gray-300 hover:text-white transition-colors text-sm relative group"
               >
                 <span className="relative">
                   Terms
                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                 </span>
               </Link>
               <Link 
                 href="/cookie-policy" 
                 className="text-gray-300 hover:text-white transition-colors text-sm relative group"
               >
                 <span className="relative">
                   Cookie Policy
                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58915B] group-hover:w-full transition-all duration-300"></span>
                 </span>
               </Link>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
