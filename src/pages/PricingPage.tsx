import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Zap, ArrowRight, Check } from 'lucide-react';
import { PricingCards } from '../components/PricingCards';
import { PricingTable } from '../components/PricingTable';
import { WhySmartWaySolar } from '../components/WhySmartWaySolar';
import { FaqAccordion } from '../components/FaqAccordion';
import { QuoteForm } from '../components/QuoteForm';

export const PricingPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO WITH VERIFIED REFERENCE HOUSE IMAGE */}
      <section className="relative w-full min-h-[500px] lg:min-h-[580px] flex items-center overflow-hidden bg-gray-950 text-white">
        {/* Background Image from Reference Site */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/media/pricing-hero-house.webp"
            alt="A modern, single-story house illuminated by outdoor lights powered by rooftop solar panels"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
          <div className="max-w-2xl space-y-4">
            {/* Breadcrumbs matching reference */}
            <div className="text-xs uppercase tracking-widest text-[#e3ff75] font-bold flex items-center gap-2">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Plans & Services</span>
              <span>/</span>
              <span className="text-white">Pricing & Costs</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-white leading-tight">
              Solar Pricing & Costs
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200 font-normal leading-relaxed">
              Ready to break up with your electric bill? Enjoy custom solar and instant savings for $0 down.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-2">
              We’re making solar accessible to every homeowner with various financing plans designed to fit your budget and make your switch to clean energy affordable.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#pricing-plans"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-gray-950 bg-[#e3ff75] hover:bg-[#d4f55f] transition-all shadow-md active:scale-95"
              >
                <span>View 3 Financing Options</span>
              </a>
              <a
                href="#quote-section"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gray-900/80 hover:bg-gray-800 border border-gray-700 transition-colors"
              >
                <span>Get a custom quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THREE PRICING PLANS (EZ Plan, Finance-to-own, Direct Purchase)
          Strictly NO Prepaid Solar Service plan */}
      <PricingCards />

      {/* 3. TRANSITION VIDEO BANNER (Looping Grass Wind Video from Reference) */}
      <section className="relative w-full h-48 sm:h-64 lg:h-80 overflow-hidden bg-gray-950">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/assets/media/grass-wind.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </section>

      {/* 4. THE "WHY SMART WAY SOLAR?" SECTION
          - Heading: Everything Included. Including Fair Pricing.
          - 4 list items with decorative solar icons
          - Founders' names removed
          - Image space preserved cleanly without photograph for user to upload later */}
      <WhySmartWaySolar />

      {/* 5. SIDE-BY-SIDE SOLAR SYSTEM PRICING COMPARISON TABLE (No Prepaid Plan) */}
      <PricingTable />

      {/* 6. HOMEOWNER TESTIMONIAL HIGHLIGHT (Matching Reference Section 7) */}
      <section className="py-20 bg-[#f5f7f6] border-y border-gray-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100">
            Super Company
          </span>
          <blockquote className="text-2xl sm:text-3xl font-medium text-gray-950 leading-relaxed italic">
            “Smart Way Solar was extremely informative and helpful. Reviewed two different solar options for me – leasing and financing. Because of my credit situation, I had to opt for their no credit check option, which was a lease. I didn’t even know there was a no credit check option! I can’t wait to see my savings roll in!”
          </blockquote>
          <div className="pt-2">
            <span className="font-bold text-gray-950 block">— Charles</span>
            <span className="text-xs text-gray-600">Verified Solar Installation</span>
          </div>
        </div>
      </section>

      {/* 7. FEDERAL & STATE INCENTIVES SPLIT (Using verified sleek-durable-desktop.webp) */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100">
                Incentives & Rebates
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-950 tracking-tight leading-tight">
                Federal and state solar incentives can supercharge your savings
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Incentives and rebates can significantly lower the cost of your solar system. Combine the 30% Federal Investment Tax Credit (ITC) with state and local programs for maximum financial returns.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-teal-100 text-teal-700">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    30% Federal Residential Clean Energy Tax Credit (Section 25D)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-teal-100 text-teal-700">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    State tax credits up to $5,000 depending on location
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-teal-100 text-teal-700">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    100% sales tax exemption on clean energy equipment
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-teal-100 text-teal-700">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    Property tax exemptions on home value added by solar
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/plans-services/solar-incentives"
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 group"
                >
                  <span>Explore All State & Federal Solar Programs</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border border-gray-200">
                <img
                  src="/assets/media/pricing-aerial-white-house.webp"
                  alt="Aerial view of a modern white house with solar panels, showcasing efficient solar installation pricing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQS ACCORDION */}
      <FaqAccordion />

      {/* 9. TALK TO A SOLAR EXPERT (Quote Form Section) */}
      <section className="py-20 lg:py-28 bg-[#f5f7f6]" id="quote-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100">
                Free Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-950 tracking-tight leading-tight">
                Talk to a solar expert
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Fill out the form, and our team will be in touch with a free quote based on your local incentives and payment options.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-800">Direct Office Support</div>
                <div className="text-lg font-bold text-gray-900">1 (800) 555-7652</div>
                <div className="text-xs text-gray-600">contact@smartwaysolar.com</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
