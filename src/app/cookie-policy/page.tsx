import React from 'react';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

const CookiePolicyPage = () => {
  const lastUpdated = '2024-01-15';

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      purpose: 'Basic website functionality, security, and user authentication',
      duration: 'Session to 1 year',
      examples: ['Authentication cookies', 'Security cookies', 'Load balancing cookies']
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      purpose: 'Website analytics, performance monitoring, and user behavior analysis',
      duration: '2 years',
      examples: ['Google Analytics', 'Page view tracking', 'User journey analysis']
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      purpose: 'Remember user preferences, settings, and improve user experience',
      duration: '1 month to 1 year',
      examples: ['Language preferences', 'Theme settings', 'Form data retention']
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track marketing campaigns.',
      purpose: 'Targeted advertising, campaign tracking, and marketing optimization',
      duration: '3 months to 2 years',
      examples: ['Google Ads', 'Social media pixels', 'Retargeting cookies']
    }
  ];

  const thirdPartyCookies = [
    {
      provider: 'Google Analytics',
      purpose: 'Website analytics and performance monitoring',
      dataCollected: 'Page views, user behavior, device information',
      privacyPolicy: 'https://policies.google.com/privacy'
    },
    {
      provider: 'Google Ads',
      purpose: 'Advertising and remarketing',
      dataCollected: 'Ad interactions, conversion tracking',
      privacyPolicy: 'https://policies.google.com/privacy'
    },
    {
      provider: 'Facebook Pixel',
      purpose: 'Social media advertising and analytics',
      dataCollected: 'Page views, ad interactions, user behavior',
      privacyPolicy: 'https://www.facebook.com/policy.php'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#58915B] to-[#2A4734] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heading level={1} className="text-white mb-6">
              Cookie Policy
            </Heading>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              How we use cookies and similar technologies on our website
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
              What Are Cookies?
            </Heading>
            <p className="text-lg mb-6">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) 
              when you visit our website. They help us provide you with a better experience by remembering 
              your preferences and analyzing how you use our site.
            </p>
            <p className="text-lg mb-8">
              This Cookie Policy explains what cookies we use, why we use them, and how you can control them. 
              By continuing to use our website, you consent to our use of cookies as described in this policy.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-8 text-center">
              Types of Cookies We Use
            </Heading>
            
            <div className="space-y-8">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#2A4734] mb-2">{cookie.name}</h3>
                      <p className="text-gray-600 mb-3">{cookie.description}</p>
                    </div>
                    <div className="text-3xl">🍪</div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#58915B] mb-2">Purpose</h4>
                      <p className="text-gray-700 text-sm">{cookie.purpose}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#58915B] mb-2">Duration</h4>
                      <p className="text-gray-700 text-sm">{cookie.duration}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold text-[#58915B] mb-2">Examples</h4>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, idx) => (
                        <li key={idx} className="text-gray-700 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#99BF9C] rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Third Party Cookies */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Third-Party Cookies
            </Heading>
            
            <p className="text-lg mb-6">
              We also use third-party cookies from trusted partners to help us analyze website usage, 
              provide advertising services, and improve our website functionality.
            </p>
            
            <div className="space-y-6">
              {thirdPartyCookies.map((provider, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#2A4734] mb-2">{provider.provider}</h3>
                      <p className="text-gray-600 mb-3">{provider.purpose}</p>
                    </div>
                    <div className="text-2xl">🔗</div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-[#58915B] mb-2">Data Collected</h4>
                      <p className="text-gray-700 text-sm">{provider.dataCollected}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#58915B] mb-2">Privacy Policy</h4>
                      <a 
                        href={provider.privacyPolicy} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#58915B] hover:text-[#2A4734] text-sm underline"
                      >
                        View Privacy Policy
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Managing Your Cookie Preferences
            </Heading>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#2A4734] mb-4">Browser Settings</h3>
                <p className="text-gray-700 mb-4">
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Block all cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Block third-party cookies only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Delete existing cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#58915B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Set cookie preferences</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#2A4734] mb-4">Cookie Consent</h3>
                <p className="text-gray-700 mb-4">
                  When you first visit our website, you&apos;ll see a cookie consent banner that allows you to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#99BF9C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Accept all cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#99BF9C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Customize your preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#99BF9C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Reject non-essential cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#99BF9C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Update preferences anytime</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="primary" size="lg">
                Manage Cookie Preferences
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact of Disabling Cookies */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Impact of Disabling Cookies
            </Heading>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-4">⚠️ What May Not Work</h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>User login and authentication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Personalized content and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Form data retention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Some website features</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">✅ What Will Still Work</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Basic website navigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Viewing product information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Contact forms (with manual entry)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Core website functionality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates to Policy */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="mb-6">
              Updates to This Policy
            </Heading>
            
            <p className="text-lg mb-6">
              We may update this Cookie Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors. When we make changes, we will:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Notification</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Update the &quot;Last updated&quot; date</li>
                  <li>• Post the updated policy on our website</li>
                  <li>• Notify users of significant changes</li>
                  <li>• Provide advance notice when possible</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2A4734] mb-3">Your Rights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Review updated policies</li>
                  <li>• Update your cookie preferences</li>
                  <li>• Contact us with questions</li>
                  <li>• Opt out of new cookie types</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gradient-to-r from-[#2A4734] to-[#58915B] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2} className="text-white mb-6">
              Questions About Cookies?
            </Heading>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p>cookies@steel.com</p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicyPage;
