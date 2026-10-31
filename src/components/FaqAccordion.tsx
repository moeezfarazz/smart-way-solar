import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50/70 border-b border-gray-100" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-teal-100">
            Clear Answers, No Surprises
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Everything you need to know about solar warranties, installation, zero-down financing, and electric bill savings.
          </p>
        </div>

        <div className="space-y-3">
          {SITE_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer hover:bg-gray-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-gray-100 text-gray-600 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-teal-100 text-teal-700' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
