import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MapPin,
  Sun,
  Award,
  ShieldCheck,
  CheckCircle,
  Building2,
  TrendingDown,
  ArrowRight
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { QuoteForm } from '../components/QuoteForm';

export const StatePage: React.FC = () => {
  const { stateSlug } = useParams<{ stateSlug: string }>();

  const location = SITE_CONFIG.locations.find((l) => l.slug === stateSlug);

  if (!location) {
    return <Navigate to="/plans-services/pricing" replace />;
  }

  return (
    <div className="bg-white">
      {/* State Hero Banner */}
      <section className="relative py-16 sm:py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={location.heroImage}
            alt={`Solar homes in ${location.name}`}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-700/80 text-teal-400 text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Smart Way Solar Regional Office • {location.abbreviation}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Solar Energy & Incentives in {location.name}
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-gray-200 leading-relaxed">
              {location.description}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-4xl">
            <div className="p-5 rounded-2xl bg-gray-800/80 border border-gray-700 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
                <Sun className="w-4 h-4" />
                <span>Peak Sunlight</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {location.solarHours} hrs/day
              </div>
              <div className="text-xs text-gray-400 mt-1">Average annual solar irradiance</div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-800/80 border border-gray-700 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase">
                <Award className="w-4 h-4" />
                <span>Expected Monthly Savings</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 mt-1">
                {location.avgMonthlySavings}
              </div>
              <div className="text-xs text-gray-400 mt-1">Depending on roof size & usage</div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-800/80 border border-gray-700 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Net Energy Metering</span>
              </div>
              <div className="text-lg font-bold text-white mt-1 truncate" title={location.netMetering}>
                Retail Net Metering
              </div>
              <div className="text-xs text-gray-400 mt-1 truncate">{location.netMetering}</div>
            </div>
          </div>
        </div>
      </section>

      {/* State-specific Incentives & Utility Providers */}
      <section className="py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                  Localized Savings
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 mt-1">
                  Why {location.name} is primed for residential solar
                </h2>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  Homeowners in {location.name} have access to substantial state and federal programs that reduce upfront costs and increase long-term utility bill savings.
                </p>
              </div>

              {/* Key Benefits List */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Key Solar Advantages in {location.name}:
                </h3>
                <div className="grid gap-3">
                  {location.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-200">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-800 font-medium leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supported Regional Utilities */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>Approved Interconnections</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Top Electric Utilities in {location.name}
                </h3>
                <p className="text-xs text-gray-600 mb-4">
                  Our engineering team handles all interconnection permits, net metering applications, and meter upgrades with your local utility:
                </p>
                <div className="flex flex-wrap gap-2">
                  {location.topUtilities.map((util, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-gray-100 text-gray-800 border border-gray-200"
                    >
                      {util}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: State Quote Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <QuoteForm initialPlan={`Rooftop Solar in ${location.name}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other 7 locations fast switch */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-950">
              Other Smart Way Solar Service Territories
            </h3>
            <span className="text-xs text-gray-600">8 active regional divisions</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {SITE_CONFIG.locations
              .filter((l) => l.slug !== location.slug)
              .map((otherLoc) => (
                <Link
                  key={otherLoc.slug}
                  to={`/locations/${otherLoc.slug}`}
                  className="p-3 rounded-xl border border-gray-200 hover:border-teal-500 hover:bg-teal-50/40 text-center transition-all group"
                >
                  <div className="text-xs font-bold text-gray-900 group-hover:text-teal-700">
                    {otherLoc.name}
                  </div>
                  <div className="text-[10px] text-gray-600 mt-0.5">
                    {otherLoc.abbreviation}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
