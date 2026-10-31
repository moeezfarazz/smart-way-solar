import React from 'react';
import { Award, DollarSign, ShieldCheck, Zap } from 'lucide-react';
import { FindYourState } from '../components/FindYourState';
import { QuoteForm } from '../components/QuoteForm';

export const IncentivesPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero with authentic dusk home photo */}
      <section className="relative py-20 lg:py-28 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/media/pricing-hero-house.webp"
            alt="Solar powered residence in the Northeast"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#e3ff75] uppercase block">
              Government & Utility Programs
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              Solar & Battery Incentives
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed font-normal">
              Federal legislation and state clean energy policies offer thousands of dollars in direct tax credits, equipment rebates, and ongoing solar certificate payments to homeowners who switch to clean power.
            </p>
          </div>
        </div>
      </section>

      {/* Incentives Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#f5f7f6] border border-gray-200/80 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-2xl">
                30%
              </div>
              <h3 className="text-xl font-bold text-gray-950">Federal Tax Credit (ITC)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Under the Federal Residential Clean Energy Credit (Section 25D), deduct a full 30% of total solar equipment and installation expenses directly from your federal income taxes.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#f5f7f6] border border-gray-200/80 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl">
                SREC
              </div>
              <h3 className="text-xl font-bold text-gray-950">Solar Renewable Energy Credits</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                In states like PA, MD, DC, and NJ, homeowners earn tradeable SRECs for every megawatt-hour produced, generating quarterly cash income over 10 to 15 years.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#f5f7f6] border border-gray-200/80 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl">
                100%
              </div>
              <h3 className="text-xl font-bold text-gray-950">Tax Shield & Exemptions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Solar systems typically enjoy 100% sales tax exemptions on hardware purchases, and 100% real property tax protection so your home assessment does not trigger higher taxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* State selector section with Location Map video */}
      <FindYourState />

      {/* Form */}
      <section className="py-20 bg-[#f5f7f6] border-t border-gray-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm initialPlan="Incentives Calculation Request" />
        </div>
      </section>
    </div>
  );
};
