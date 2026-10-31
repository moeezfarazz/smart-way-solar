import React from 'react';
import { ShieldCheck, Award, Zap, Sun } from 'lucide-react';
import { QuoteForm } from '../components/QuoteForm';

export const GetAQuotePage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left information */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100">
                Transparent Pricing
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
                Get Your Free Solar & Battery Quote
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Take two minutes to submit your home details. Our engineering team will review your roof layout, sunlight exposure, and utility rates to generate a tailored savings report.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-200 shadow-xs">
                  <div className="p-2 rounded-xl bg-teal-50 text-teal-700 flex-shrink-0">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Custom 3D Satellite Design</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Accurate panel layout designed specifically for your roof's azimuth and pitch.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-200 shadow-xs">
                  <div className="p-2 rounded-xl bg-teal-50 text-teal-700 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">All 3 Financing Plans Compared</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Side-by-side comparison of EZ Plan ($0 down), Finance-to-own, and Direct Purchase.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-200 shadow-xs">
                  <div className="p-2 rounded-xl bg-teal-50 text-teal-700 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Zero Obligation, No Pushy Calls</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Friendly, honest solar advisory backed by our fair pricing guarantee.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Interactive Quote Form */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
