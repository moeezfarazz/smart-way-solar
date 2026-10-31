import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

// Custom 8-point geometric solar/sparkle icon matching the reference screenshot exactly
const SolarSparkleIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5 text-gray-900' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Center dot/hub */}
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    {/* 4 cardinal rays */}
    <path d="M12 3v4" />
    <path d="M12 17v4" />
    <path d="M3 12h4" />
    <path d="M17 12h4" />
    {/* 4 diagonal rays with split lobes like reference screenshot */}
    <path d="M5.64 5.64l2.83 2.83" />
    <path d="M15.53 15.53l2.83 2.83" />
    <path d="M5.64 18.36l2.83-2.83" />
    <path d="M15.53 8.47l2.83-2.83" />
  </svg>
);

export const WhySmartWaySolar: React.FC = () => {
  const points = [
    'Pricing designed for 5–10% profit and long-term service',
    'No pushy sales tactics. Just helpful, honest conversations',
    'A decade of experience and a reputation we’re proud to protect',
    'Clear, straightforward quotes, even if we’re not the lowest'
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Introductory Eyebrow */}
            <span className="text-sm font-semibold text-gray-700 tracking-wide block">
              Why Smart Way Solar?
            </span>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-gray-950 tracking-tight leading-[1.15]">
              Everything Included. Including Fair Pricing.
            </h2>

            {/* Explanatory Paragraphs */}
            <div className="space-y-5 text-base sm:text-[17px] text-gray-800 leading-relaxed max-w-2xl pt-2">
              <p>
                We believe your home energy system should come with clear answers and no surprises. That includes pricing. We build solutions designed to last, and we price them to support quality work and long-term service.
              </p>

              <p>
                System costs vary based on your home, equipment, permitting, roofing, and local labor. Some homes may also need electrical upgrades or utility approvals that affect price. We’ll take the time to understand your home and give you a transparent, upfront quote with no pressure.
              </p>
            </div>

            {/* Introductory Sentence for List */}
            <div className="pt-2">
              <p className="text-base sm:text-[17px] font-medium text-gray-900">
                Here’s what else you can count on:
              </p>
            </div>

            {/* 4 List Items with Decorative Icons */}
            <div className="space-y-4 pt-1 pb-2">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 mt-0.5">
                    <SolarSparkleIcon className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-base sm:text-[17px] text-gray-900 leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Closing Paragraph */}
            <p className="text-base sm:text-[17px] text-gray-800 leading-relaxed max-w-2xl pt-2">
              We’re not here for the quickest sale. We’re here to do it right, and stand behind it for decades.
            </p>

            {/* Note: Founders' names (Alex Yackery & Alex Giles) and attribution are intentionally and strictly removed */}
          </div>

          {/* Right Column: Image Container
              Maintains the exact positioning, alignment, dimensions, and aspect ratio of the reference
              without founder photograph, without replacement people, and cleanly prepared for future upload */}
          <div className="lg:col-span-5 w-full">
            <div
              className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-w-[520px] mx-auto rounded-3xl overflow-hidden bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200/80 border border-gray-200/80 shadow-sm flex items-center justify-center transition-all"
              style={{ minHeight: '480px' }}
              aria-label="Smart Way Solar presentation container"
            >
              {SITE_CONFIG.founderPhotoUrl ? (
                <img
                  src={SITE_CONFIG.founderPhotoUrl}
                  alt="Smart Way Solar"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-3xl"
                />
              ) : (
                /* Completely clean, empty image area preserving exact position, dimensions and aspect ratio with neutral styling */
                <div className="w-full h-full bg-gray-100/90 rounded-3xl" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
