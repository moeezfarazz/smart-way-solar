import React from 'react';
import { ShieldCheck, Users, Sun, Award, Wrench, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config/siteConfig';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO / COMPANY MISSION BANNER */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        {/* Responsive banner container preserving image fidelity with restored original text content */}
        <div className="relative w-full min-h-[400px] sm:min-h-[460px] md:min-h-[500px] flex items-center overflow-hidden bg-gray-950">
          <img
            src="/assets/aistudio/Gemini_Generated_Image_6dplo56dplo56dpl__2__02444f31.jpg"
            alt="About Smart Way Solar company mission and dedicated installation team"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />
          {/* Subtle directional gradient to ensure text readability without obscuring the vehicle and technicians */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-950/90 via-gray-950/65 to-gray-950/25 pointer-events-none" />

          {/* Restored original text content exactly matching previous version */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#e3ff75] uppercase inline-block">
                COMPANY MISSION
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight drop-shadow-sm">
                About Smart Way Solar
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
                We founded Smart Way Solar with a clear conviction: home energy should come with straightforward answers, zero pushy sales tactics, and craftsmanship that stands the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SMART WAY STANDARD: IMAGE & TEXT EDITORIAL SECTION */}
      <section className="py-20 lg:py-28 bg-[#f5f7f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100">
                Our Standard
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-950 tracking-tight leading-tight">
                Built around your home, not a quick sales pitch.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The traditional solar industry was built on aggressive door-to-door sales teams and outsourced subcontractor labor. We started Smart Way Solar to provide an honest, modern alternative.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Every system we engineer begins with your electric bill, roof orientation, and lifestyle needs—whether that means pairing high-efficiency solar with battery storage for blackout protection or adding fast Level-2 EV charging.
              </p>

              <div className="pt-2">
                <Link
                  to="/plans-services/pricing"
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950 transition-colors"
                >
                  <span>Explore Our Transparent Pricing Plans</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100 aspect-[16/11]">
                <img
                  src="/assets/media/modern-house-exterior.webp"
                  alt="Modern residence with integrated clean energy system"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IN-HOUSE CRAFTSMANSHIP: SECOND IMAGE & TEXT SECTION */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-gray-900 aspect-[16/11]">
                <img
                  src="/assets/aistudio/Gemini_Generated_Image_j42dfcj42dfcj42d_a21e5a50.jpg"
                  alt="Certified Smart Way Solar electricians and installation technicians"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100">
                Craftsmanship & Safety
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-950 tracking-tight leading-tight">
                Full-time certified electricians on every roof.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We employ local, certified technicians and licensed master electricians. We never hire transient subcontractors to touch your home's electrical service or roofing.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-gray-800">
                    Industrial-grade triple-seal flashing prevents roof water intrusion
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-gray-800">
                    Clean, concealed conduit runs keep your exterior looking beautiful
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-gray-800">
                    Full permitting, utility interconnection, and inspection handled end-to-end
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPANY VALUES & DIFFERENTIATORS */}
      <section className="py-20 lg:py-28 bg-[#f5f7f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-950 tracking-tight">
              The commitments that guide our work
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Long-term clean energy works when companies operate with integrity and respect for the homeowners they serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-950">100% In-House Work</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every member of our installation crew is a direct, background-checked W-2 employee committed to rigorous craftsmanship standards.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-950">Tier-1 Hardware</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We select all-black monocrystalline panels and individual microinverters engineered for maximum production and 25+ year durability.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-950">Fair, Upfront Pricing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Clear quotes built for sustainable 5–10% operating margins and lifetime support. No inflated initial prices and no fake discount pressure.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-950">25-Year Peace of Mind</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Full comprehensive protection covering equipment performance, microinverters, roof watertightness, and ongoing system monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EIGHT REGIONAL SERVICE AREAS */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100 mb-3">
              Service Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-950 tracking-tight">
              Serving homeowners across 8 regional territories
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Our regional operations centers provide rapid local installation, permitting expertise, and prompt warranty service:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SITE_CONFIG.locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="p-4 rounded-2xl bg-[#f5f7f6] hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-between group border border-gray-200/80"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-600 group-hover:text-[#e3ff75]" />
                  <span className="font-semibold text-sm">{loc.name}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#e3ff75] transform group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-20 lg:py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              Ready to see what clean energy looks like for your home?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Connect with a Smart Way Solar energy specialist for a transparent, customized solar and storage proposal.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/get-a-quote"
                className="px-8 py-4 rounded-full font-bold text-gray-950 bg-[#e3ff75] hover:bg-[#d4f55f] transition-all duration-200 shadow-lg active:scale-95"
              >
                Request a Free Quote
              </Link>
              <Link
                to="/plans-services/pricing"
                className="px-8 py-4 rounded-full font-bold text-white bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700"
              >
                Compare Financing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
