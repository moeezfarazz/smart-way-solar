import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, ArrowRight, Sun, Award, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FindYourState: React.FC = () => {
  const navigate = useNavigate();
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value;
    setSelectedStateSlug(slug);
    if (slug) {
      navigate(`/locations/${slug}`);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#1f2421] text-white relative overflow-hidden" id="find-your-state">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Title & Text */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#e3ff75] uppercase block">
              Regional Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Let’s just say East Coast utility companies aren’t our biggest fans.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              Join the 15k+ homeowners already powered by Smart Way Solar. Select your state or district below to explore local tax incentives, utility net metering tariffs, and estimated monthly savings.
            </p>

            {/* State Selector Control */}
            <div className="pt-4 max-w-lg">
              <label htmlFor="state-select-dropdown" className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-2 block">
                Find Your State
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <select
                    id="state-select-dropdown"
                    aria-label="Find your state"
                    value={selectedStateSlug}
                    onChange={handleSelectChange}
                    className="w-full bg-gray-900 text-white border border-gray-700 rounded-2xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#e3ff75] cursor-pointer"
                  >
                    <option value="">Select your service territory...</option>
                    {SITE_CONFIG.locations.map((loc, idx) => (
                      <option key={loc.slug} value={loc.slug}>
                        {idx + 1}. {loc.name} ({loc.abbreviation})
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => selectedStateSlug && navigate(`/locations/${selectedStateSlug}`)}
                  disabled={!selectedStateSlug}
                  className={`px-6 py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    selectedStateSlug
                      ? 'bg-[#e3ff75] hover:bg-[#d4f55f] text-gray-950 cursor-pointer shadow-md active:scale-95'
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Video Animation (The actual VH_LocationMap_Option2_NEW.mp4!) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-950 aspect-[4/3]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/media/location-map.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-gray-300 flex items-center justify-between">
                <span className="font-semibold text-white">Interactive Regional Grid</span>
                <span className="text-[#e3ff75]">8 States Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* 8 State Visual Cards in Exact Requested Order */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.locations.map((loc, index) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-[#e3ff75]/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col"
            >
              {/* Image banner with overlay */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={loc.heroImage}
                  alt={`Solar in ${loc.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                <div className="absolute top-3 right-3 bg-gray-950/90 text-[#e3ff75] text-xs font-bold px-2.5 py-1 rounded-lg border border-gray-800 backdrop-blur-sm">
                  #{index + 1}
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#e3ff75] transition-colors">
                    {loc.name}
                  </h3>
                  <span className="text-xs text-gray-300">
                    {loc.abbreviation} Service Area
                  </span>
                </div>
              </div>

              {/* State details & metrics */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center text-gray-400">
                    <span className="flex items-center gap-1">
                      <Sun className="w-3.5 h-3.5 text-amber-400" /> Peak Sun Hours:
                    </span>
                    <span className="font-semibold text-white">{loc.solarHours} hrs/day</span>
                  </div>

                  <div className="flex justify-between items-center text-gray-400">
                    <span className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#e3ff75]" /> Avg Savings:
                    </span>
                    <span className="font-semibold text-[#e3ff75]">{loc.avgMonthlySavings}/mo</span>
                  </div>

                  <div className="flex justify-between items-center text-gray-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Net Metering:
                    </span>
                    <span className="font-semibold text-white truncate max-w-[120px]" title={loc.netMetering}>
                      Active 1:1
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs font-bold text-[#e3ff75] group-hover:text-white">
                  <span>View State Programs</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
