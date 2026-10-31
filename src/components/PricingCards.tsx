import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, PricingPlan } from '../config/siteConfig';
import { sanitizePricingPlans } from '../utils/validation';

interface PricingCardsProps {
  onSelectPlan?: (planTitle: string) => void;
}

export const PricingCards: React.FC<PricingCardsProps> = ({ onSelectPlan }) => {
  // Ensure strict guarantee that only the 3 plans exist and never any prepaid plan
  const plans: PricingPlan[] = sanitizePricingPlans(SITE_CONFIG.pricingPlans);

  return (
    <section className="py-16 sm:py-24 bg-gray-50/60" id="pricing-plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-teal-100">
            Tailored Financing Options
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Solar Financing Built Around Your Goals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Choose how you want to switch to clean solar energy: zero upfront capital, flexible loan ownership, or maximum lifetime return with a direct purchase.
          </p>
        </div>

        {/* Exactly THREE evenly balanced pricing cards on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isFeatured = plan.id === 'finance-to-own';

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-white border-2 border-teal-600 shadow-xl ring-4 ring-teal-600/10 scale-100 lg:-translate-y-2'
                    : 'bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'
                }`}
              >
                {/* Optional Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full shadow-sm ${
                        isFeatured
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-900 text-white'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="border-b border-gray-100 pb-6 mb-6">
                  <h3 className="text-2xl font-bold text-gray-950">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-gray-700 mt-2 font-medium">
                    {plan.subtitle}
                  </p>
                  <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Quick Highlights */}
                <div className="mb-6 space-y-2 text-sm bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-700">Upfront Investment:</span>
                    <span className="font-bold text-gray-900">{plan.upfrontCost}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-700">Ownership:</span>
                    <span className="font-bold text-gray-900">{plan.ownership}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-700">Payment Structure:</span>
                    <span className="font-bold text-gray-900">{plan.monthlyPayment}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="flex-1 space-y-3.5 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                    What’s Included:
                  </span>
                  <ul className="space-y-3">
                    {plan.bulletPoints.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <div className="p-0.5 rounded-full bg-teal-100 text-teal-700 flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan CTA */}
                <div className="mt-auto pt-4">
                  <Link
                    to="/get-a-quote"
                    onClick={() => onSelectPlan && onSelectPlan(plan.title)}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-200 active:scale-95 ${
                      isFeatured
                        ? 'bg-[#7aefb1] hover:bg-[#6be0a3] text-[#231f20] shadow-md hover:shadow-lg'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer note */}
        <p className="mt-10 text-center text-xs text-gray-600 max-w-3xl mx-auto leading-relaxed">
          *$0-down options are subject to credit approval. Smart Way Solar makes no guarantees that every individual will qualify for zero-down financing. Potential borrowers undergo standard credit checks to determine qualified rates and terms.
        </p>
      </div>
    </section>
  );
};
