import React from 'react';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

const PrivacyPolicyPage = () => {
  const lastUpdated = '2024-01-15';

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#58915B] to-[#2A4734] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heading level={1} className="text-white mb-6">
              Privacy Policy
            </Heading>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              How we collect, use, and protect your personal information
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
              Introduction
            </Heading>
            <p className="text-lg mb-6">
              At Steel, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website or use our services.
            </p>
            <p className="text-lg mb-8">
              By using our website and services, you consent to the data practices described in this policy. 
              If you do not agree with our policies and practices, please do not use our website.
            </p>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Information We Collect
            </Heading>
            
            <div className="space-y-8">
              <div>
                <Heading level={3} className="mb-4">
                  Personal Information
                </Heading>
                <p className="text-lg mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Company name and job title</li>
                  <li>Information you provide when contacting us or requesting quotes</li>
                  <li>Information you submit through our contact forms</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div>
                <Heading level={3} className="mb-4">
                  Automatically Collected Information
                </Heading>
                <p className="text-lg mb-4">
                  When you visit our website, we automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website and search terms</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              How We Use Your Information
            </Heading>
            
            <p className="text-lg mb-6">
              We use the information we collect for various purposes, including:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Service Provision</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Providing and maintaining our services</li>
                  <li>• Processing your requests and inquiries</li>
                  <li>• Sending you requested information</li>
                  <li>• Responding to your questions and concerns</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Communication</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sending you updates about our services</li>
                  <li>• Providing customer support</li>
                  <li>• Sending marketing communications (with consent)</li>
                  <li>• Notifying you of important changes</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Website Improvement</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Analyzing website usage and trends</li>
                  <li>• Improving our website functionality</li>
                  <li>• Personalizing your experience</li>
                  <li>• Enhancing security measures</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Legal Compliance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Complying with legal obligations</li>
                  <li>• Protecting our rights and property</li>
                  <li>• Preventing fraud and abuse</li>
                  <li>• Ensuring website security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Sharing */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Information Sharing and Disclosure
            </Heading>
            
            <p className="text-lg mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except in the following circumstances:
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Service Providers</h3>
                <p className="text-gray-700">
                  We may share your information with trusted third-party service providers who assist us in operating our 
                  website, conducting business, or servicing you, so long as those parties agree to keep this information confidential.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Legal Requirements</h3>
                <p className="text-gray-700">
                  We may disclose your information when required by law or to protect our rights, property, or safety, 
                  or the rights, property, or safety of others.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Business Transfers</h3>
                <p className="text-gray-700">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part 
                  of that transaction, subject to the same privacy protections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Data Security
            </Heading>
            
            <p className="text-lg mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#2A4734] mb-4">Security Measures</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>SSL encryption for data transmission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Regular security assessments and updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Access controls and authentication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Secure data storage and backup procedures</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#2A4734] mb-4">Your Responsibilities</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#99BF9C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Keep your login credentials secure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#99BF9C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Use strong, unique passwords</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#99BF9C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Log out when using shared devices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#99BF9C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Report any security concerns immediately</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Your Rights and Choices
            </Heading>
            
            <p className="text-lg mb-6">
              You have certain rights regarding your personal information, including:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Access and Update</h3>
                <p className="text-gray-700 mb-3">
                  You can request access to your personal information and update or correct it if it&apos;s inaccurate.
                </p>
                <Button variant="primary" size="sm">
                  Request Access
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Deletion</h3>
                <p className="text-gray-700 mb-3">
                  You can request deletion of your personal information, subject to certain legal obligations.
                </p>
                <Button variant="primary" size="sm">
                  Request Deletion
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Marketing Preferences</h3>
                <p className="text-gray-700 mb-3">
                  You can opt out of marketing communications at any time by following the unsubscribe link.
                </p>
                <Button variant="primary" size="sm">
                  Update Preferences
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Data Portability</h3>
                <p className="text-gray-700 mb-3">
                  You can request a copy of your personal information in a portable format.
                </p>
                <Button variant="primary" size="sm">
                  Request Copy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Cookies and Tracking Technologies
            </Heading>
            
            <p className="text-lg mb-6">
              We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Types of Cookies We Use</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#58915B] mb-2">Essential Cookies</h4>
                    <p className="text-gray-700 text-sm">Required for basic website functionality and security.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#58915B] mb-2">Analytics Cookies</h4>
                    <p className="text-gray-700 text-sm">Help us understand how visitors use our website.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#58915B] mb-2">Functional Cookies</h4>
                    <p className="text-gray-700 text-sm">Remember your preferences and settings.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#58915B] mb-2">Marketing Cookies</h4>
                    <p className="text-gray-700 text-sm">Used for targeted advertising and marketing purposes.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Managing Cookies</h3>
                <p className="text-gray-700 mb-4">
                  You can control and manage cookies through your browser settings. However, disabling certain cookies 
                  may affect the functionality of our website.
                </p>
                <Button variant="outline">
                  Cookie Settings
                </Button>
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
              Contact Us
            </Heading>
            
            <p className="text-lg mb-8">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Email</h3>
                <p className="text-gray-700">privacy@steel.com</p>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
