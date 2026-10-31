import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Zap } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { QuoteForm } from '../components/QuoteForm';

export const SolutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const solution = SITE_CONFIG.solutions.find((s) => s.slug === slug);

  if (!solution) {
    return <Navigate to="/solutions/solar-panels" replace />;
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100">
                Home Energy Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
                {solution.title}
              </h1>
              <p className="text-lg sm:text-xl text-teal-700 font-medium">
                {solution.tagline}
              </p>
              <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                {solution.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/get-a-quote"
                  className="px-6 py-3.5 rounded-full text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm"
                >
                  Get a Free Quote for {solution.title}
                </Link>
                <Link
                  to="/plans-services/pricing"
                  className="px-6 py-3.5 rounded-full text-sm font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border border-gray-200">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Technical Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Features */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-950">
                Engineered for Peak Performance
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Smart Way Solar installs only tier-1 equipment tested against extreme heat, snow loads, and severe weather.
              </p>

              <div className="space-y-4 pt-2">
                {solution.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-gray-50/70 border border-gray-200/80">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-800 leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Card */}
            <div className="lg:col-span-5">
              <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
                <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-4 h-4" />
                  <span>Technical Specifications</span>
                </div>
                <h3 className="text-xl font-bold">Standard Hardware Specs</h3>

                <div className="divide-y divide-gray-800 text-sm">
                  {solution.specs.map((spec, i) => (
                    <div key={i} className="py-3.5 flex justify-between items-center">
                      <span className="text-gray-400">{spec.label}</span>
                      <span className="font-semibold text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-gray-400 leading-relaxed border-t border-gray-800">
                  Backed by our comprehensive 25-Year Smart Way Solar warranty covering equipment, roof penetrations, and installation workmanship.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-20 bg-gray-50/60 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm initialPlan={solution.title} />
        </div>
      </section>
    </div>
  );
};
