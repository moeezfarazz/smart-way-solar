import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, Ruler, FileText, Wrench, Zap, CheckCircle2 } from 'lucide-react';
import { QuoteForm } from '../components/QuoteForm';

export const SolarInstallationPage: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Precision Site Survey & Drone Scan',
      desc: 'Our certified surveyors conduct a 3D drone roof analysis, evaluate your attic rafters, inspect the main electrical panel, and analyze shading patterns.',
      icon: Ruler
    },
    {
      step: '02',
      title: 'Custom Engineering & CAD Design',
      desc: 'In-house structural and electrical engineers design a bespoke solar layout maximizing annual kilowatt-hour production while honoring roof aesthetics.',
      icon: ClipboardCheck
    },
    {
      step: '03',
      title: 'Permitting & Utility Approvals',
      desc: 'We handle 100% of the paperwork: city building permits, HOA reviews, electrical filings, and utility interconnection agreements.',
      icon: FileText
    },
    {
      step: '04',
      title: 'One-Day Professional Installation',
      desc: 'Our full-time certified electricians and solar installers mount racking, microinverters, tier-1 panels, and battery storage with zero subcontractor outsourcing.',
      icon: Wrench
    },
    {
      step: '05',
      title: 'Permission to Operate (PTO) & Energization',
      desc: 'After municipal inspection passes, your utility installs your net meter. We turn on the system, configure your monitoring mobile app, and you start producing clean energy.',
      icon: Zap
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero with authentic installer image */}
      <section className="relative py-20 lg:py-28 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/media/installers-mounting.webp"
            alt="Smart Way Solar crew carefully setting up and maintaining efficient solar panels"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#e3ff75] uppercase block">
              In-House Craftsmanship
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              Turnkey Solar Installation
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed font-normal">
              From the initial drone survey to the moment your system is energised, Smart Way Solar manages every single step of your installation with full-time, licensed W-2 crews.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-950">Our 5-Step Installation Journey</h2>
            <p className="mt-3 text-base text-gray-600">
              No stress, no surprise fees, and no subcontractors. Just clean workmanship.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-3xl bg-[#f5f7f6] border border-gray-200/80 shadow-xs"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-700 text-white font-bold text-lg shadow-sm">
                    {item.step}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-950">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Photo gallery of real installs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 aspect-[4/3]">
              <img
                src="/assets/media/solar-installers-roof.webp"
                alt="Solar technicians securing monocrystalline panels on roof"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 aspect-[4/3]">
              <img
                src="/assets/media/solar-sunset-roof.webp"
                alt="Finished rooftop solar installation at sunset"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-20 bg-[#f5f7f6] border-t border-gray-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm initialPlan="Solar Installation Inquiry" />
        </div>
      </section>
    </div>
  );
};
