import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  BatteryCharging,
  Zap,
  Sliders,
  Cpu,
  Home,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingDown,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const SolutionsOverviewPage: React.FC = () => {
  const solutions = [
    {
      slug: 'solar-panels',
      title: 'Solar Panels',
      tagline: 'High-Efficiency All-Black Monocrystalline Modules',
      description:
        'Sleek, low-profile tier-1 solar panels designed to deliver superior energy yield even in low light and high temperatures, backed by a 25-year performance warranty.',
      image: '/assets/media/solar-panels-roof.webp',
      icon: Sun,
      benefits: [
        'Up to 22.8% module efficiency',
        'All-black aesthetic blends into your roofline',
        '25-year equipment and power production guarantee',
        'Engineered for extreme snow and 140+ mph wind loads'
      ]
    },
    {
      slug: 'battery-backup',
      title: 'Battery Backup',
      tagline: 'Whole-Home Resilient Energy Storage',
      description:
        'Store excess daytime solar power to run your essentials throughout the evening or keep your entire house running during grid outages with zero flicker.',
      image: '/assets/media/battery-backup.webp',
      icon: BatteryCharging,
      benefits: [
        'Instant blackout protection (under 100ms switchover)',
        'Modular capacity scalable from 5kWh to 40kWh+',
        'Safe, cobalt-free Lithium Iron Phosphate (LFP) chemistry',
        'Time-of-Use smart discharge to minimize peak utility rates'
      ]
    },
    {
      slug: 'ev-chargers',
      title: 'EV Chargers',
      tagline: 'Fast Level 2 Home Vehicle Charging',
      description:
        'Fuel your electric vehicle directly from your rooftop solar panels. Charge up to 9x faster than a standard wall outlet with integrated solar-only charging modes.',
      image: '/assets/media/ev-charging-driveway.webp',
      icon: Zap,
      benefits: [
        'Up to 48A (11.5 kW) Level 2 high-speed charging',
        'Solar-prioritized charging saves thousands versus gas',
        'Universal J1772 and NACS (Tesla) connector options',
        'Mobile app scheduling and energy tracking'
      ]
    },
    {
      slug: 'microinverters',
      title: 'Microinverters',
      tagline: 'Independent Panel-Level Optimization',
      description:
        'Every solar panel operates independently. Shading on one panel never pulls down the rest of your system, ensuring maximum year-round energy harvest and safety.',
      image: '/assets/media/microinverter-hardware.webp',
      icon: Cpu,
      benefits: [
        '97.5% peak CEC conversion efficiency',
        'Rapid panel-level shutdown exceeds strict safety codes',
        'No single point of system failure',
        '25-year manufacturer warranty'
      ]
    },
    {
      slug: 'smart-electrical-panels',
      title: 'Smart Electrical Panels',
      tagline: 'Circuit-Level Control and Smart Load Management',
      description:
        'Replace your old breaker box with intelligent energy computing. Prioritize refrigeration, medical equipment, and HVAC while deferring non-essential loads.',
      image: '/assets/media/electrical-panel-work.webp',
      icon: Sliders,
      benefits: [
        'Control and automate every individual circuit from your smartphone',
        'Extends battery run-time up to 2.5x during extended blackouts',
        'Avoids costly utility service panel upgrades',
        'Real-time power analytics per appliance'
      ]
    },
    {
      slug: 'whole-home-solar',
      title: 'Whole-Home Solar Ecosystem',
      tagline: 'Complete Harmonized Home Clean Energy',
      description:
        'When generation, storage, and intelligent distribution communicate seamlessly, your home transforms into an independent personal clean power station.',
      image: '/assets/media/whole-home-diagram.webp',
      icon: Home,
      benefits: [
        'Single integrated mobile app for complete visibility',
        'Full 25-year bumper-to-bumper system warranty',
        'Installed 100% by certified in-house W-2 craftsmen',
        'Zero-stress permitting, utility interconnection, and inspection'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#191919] text-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/assets/media/solar-sunset-roof.webp"
            alt="Solar home at sunset"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-[#7aefb1] border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Way Energy Ecosystem</span>
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Home energy solutions designed to work as one.
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
              From high-efficiency solar capture to intelligent battery storage and circuit-level automation, we engineer every component to deliver maximum independence and reliable savings.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/get-a-quote"
                className="px-8 py-3.5 rounded-full font-bold text-[#191919] bg-[#7aefb1] hover:bg-[#68e2a0] transition-colors shadow-lg"
              >
                Get your custom system design
              </Link>
              <Link
                to="/plans-services/pricing"
                className="px-8 py-3.5 rounded-full font-bold text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
              >
                View pricing plans
              </Link>
            </div>
          </div>

          {/* Trust stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#7aefb1]">15,000+</div>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">Systems installed</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#7aefb1]">1,500+</div>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">5-Star customer reviews</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#7aefb1]">100%</div>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">In-house W-2 certified crews</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#7aefb1]">25 Years</div>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">Comprehensive warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#246345] uppercase bg-[#e9f9f0] px-4 py-1.5 rounded-full inline-block">
            Comprehensive Energy Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191919] tracking-tight">
            Six interconnected systems for total home power autonomy.
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Each technology stands at the pinnacle of reliability, operating together through unified software to lower your monthly utility costs.
          </p>
        </div>

        <div className="space-y-20">
          {solutions.map((item, idx) => {
            const isEven = idx % 2 === 1;
            const Icon = item.icon;

            return (
              <div
                key={item.slug}
                id={item.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-[28px] overflow-hidden shadow-xl aspect-[16/11] bg-gray-100 group border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md text-[#7aefb1]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                      Solution {idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-gray-500">
                      {item.tagline}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#191919] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {item.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-gray-800">{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/solutions/${item.slug}`}
                      className="inline-flex items-center gap-2 font-bold text-sm text-teal-800 hover:text-teal-900 group"
                    >
                      <span>Explore {item.title} specifications</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link
                      to="/get-a-quote"
                      className="text-sm font-semibold text-gray-700 hover:text-teal-700"
                    >
                      Request a quote
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Whole Home Diagram Banner */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#191919] rounded-[32px] p-8 sm:p-14 text-white overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#7aefb1]">
                  Connected Intelligence
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Everything communicates in real time.
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Your panels feed the microinverters, which power your home and charge your battery. When the grid fluctuates, the system disconnects automatically to keep your power running without interruption.
                </p>
                <div className="pt-2">
                  <Link
                    to="/plans-services/pricing"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-[#191919] bg-[#7aefb1] hover:bg-[#68e2a0] transition-colors"
                  >
                    View transparent pricing options
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
                  <img
                    src="/assets/media/whole-home-diagram.webp"
                    alt="Diagram showing integrated whole-home solar, storage, and EV system"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
