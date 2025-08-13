'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  faqs: FAQItem[];
  defaultOpenId?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ 
  title = "Frequently Asked Questions", 
  faqs, 
  defaultOpenId 
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || faqs[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A4734] mb-4">
            {title}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                openId === faq.id
                  ? 'border-[#58915B] shadow-lg'
                  : 'border-gray-200 hover:border-[#99BF9C]'
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-[#2A4734] pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-[#58915B] transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer Panel */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 bg-gradient-to-br from-[#58915B] to-[#99BF9C] text-white">
                  <p className="text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
