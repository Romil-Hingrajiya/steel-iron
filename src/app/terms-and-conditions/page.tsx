import React from 'react';
import Heading from '@/components/ui/Heading';

import Button from '@/components/ui/Button';

const TermsAndConditionsPage = () => {
  const lastUpdated = '2024-01-15';

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#58915B] to-[#2A4734] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heading level={1} className="text-white mb-6">
              Terms and Conditions
            </Heading>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our website
            </p>
            <p className="text-lg opacity-90">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Agreement to Terms
            </Heading>
            <p className="text-lg mb-6">
              These Terms and Conditions (&quot;Terms&quot;) govern your use of the Steel website and services. 
              By accessing or using our website, you agree to be bound by these Terms and all applicable 
              laws and regulations.
            </p>
            <p className="text-lg mb-8">
              If you do not agree with any of these terms, you are prohibited from using or accessing 
              this website. The materials contained in this website are protected by applicable copyright 
              and trademark law.
            </p>
          </div>
        </div>
      </section>

      {/* Use License */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Use License
            </Heading>
            
            <p className="text-lg mb-6">
              Permission is granted to temporarily download one copy of the materials (information or software) 
              on Steel&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a 
              license, not a transfer of title, and under this license you may not:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-4">Prohibited Uses</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Modify or copy the materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Use the materials for any commercial purpose</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Attempt to reverse engineer any software</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Remove any copyright or proprietary notations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-4">Permitted Uses</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>View website content for personal use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Contact us for business inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Request quotes and information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Access product information</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-lg mt-6">
              This license shall automatically terminate if you violate any of these restrictions and may be 
              terminated by Steel at any time. Upon terminating your viewing of these materials or upon the 
              termination of this license, you must destroy any downloaded materials in your possession whether 
              in electronic or printed format.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Disclaimer
            </Heading>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Information Accuracy</h3>
                <p className="text-gray-700">
                  The materials on Steel&apos;s website are provided on an &apos;as is&apos; basis. Steel makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including without 
                  limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
                  or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Limitations</h3>
                <p className="text-gray-700">
                  In no event shall Steel or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or 
                  inability to use the materials on Steel&apos;s website, even if Steel or a Steel authorized representative 
                  has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">External Links</h3>
                <p className="text-gray-700">
                  Steel has not reviewed all of the sites linked to its website and is not responsible for the 
                  contents of any such linked site. The inclusion of any link does not imply endorsement by Steel 
                  of the site. Use of any such linked website is at the user&apos;s own risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Responsibilities */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              User Responsibilities
            </Heading>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#2A4734] mb-4">Acceptable Use</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Use the website for lawful purposes only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Provide accurate information when contacting us</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Respect intellectual property rights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Maintain the security of your information</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#2A4734] mb-4">Prohibited Activities</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Attempting to gain unauthorized access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Interfering with website functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Transmitting harmful code or malware</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Harassing or threatening behavior</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy and Data */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Privacy and Data Protection
            </Heading>
            
            <p className="text-lg mb-6">
              Your privacy is important to us. Our collection and use of personal information is governed by 
              our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Data Collection</h3>
                <p className="text-gray-700 mb-3">
                  We may collect personal information when you:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Contact us through our website</li>
                  <li>• Request quotes or information</li>
                  <li>• Subscribe to our newsletter</li>
                  <li>• Use our contact forms</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Data Usage</h3>
                <p className="text-gray-700 mb-3">
                  We use your information to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Respond to your inquiries</li>
                  <li>• Provide requested services</li>
                  <li>• Improve our website</li>
                  <li>• Send relevant communications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Intellectual Property Rights
            </Heading>
            
            <p className="text-lg mb-6">
              All content on this website, including but not limited to text, graphics, logos, images, 
              audio clips, digital downloads, data compilations, and software, is the property of Steel 
              or its content suppliers and is protected by international copyright laws.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#2A4734] mb-4">Protected Content</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Website design and layout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Product descriptions and specifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Company logos and branding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Technical documentation</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#2A4734] mb-4">Usage Restrictions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Reproducing without permission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Distributing copyrighted materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Creating derivative works</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Commercial use without license</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Termination and Modifications
            </Heading>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Termination</h3>
                <p className="text-gray-700">
                  We may terminate or suspend your access to our website immediately, without prior notice or 
                  liability, for any reason whatsoever, including without limitation if you breach the Terms. 
                  Upon termination, your right to use the website will cease immediately.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Modifications</h3>
                <p className="text-gray-700">
                  Steel may revise these Terms of Service for its website at any time without notice. By using 
                  this website, you are agreeing to be bound by the then current version of these Terms of Service.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Governing Law</h3>
                <p className="text-gray-700">
                  These terms and conditions are governed by and construed in accordance with the laws of the 
                  jurisdiction in which Steel operates, and you irrevocably submit to the exclusive jurisdiction 
                  of the courts in that location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2} className="mb-6">
              Contact Information
            </Heading>
            
            <p className="text-lg mb-8">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Email</h3>
                <p className="text-gray-700">legal@steel.com</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Phone</h3>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Mailing Address</h3>
              <p className="text-gray-700">
                Steel Company<br />
                123 Industrial Way<br />
                City, State 12345<br />
                United States
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="primary" size="lg">
                Contact Legal Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditionsPage;
