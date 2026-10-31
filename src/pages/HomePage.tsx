import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Eye, Sliders, DollarSign, Check } from 'lucide-react';
import { FindYourState } from '../components/FindYourState';
import { SITE_CONFIG } from '../config/siteConfig';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO WITH BACKGROUND VIDEO (Exact Reference Implementation) */}
      <section className="relative w-full min-h-[560px] lg:h-[calc(100vh-48px)] flex items-end overflow-hidden bg-gray-950 text-white">
        {/* Background Looping Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/media/hero-poster.webp"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        >
          <source src="/assets/media/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Ambient Gradient Overlay matching reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 sm:pb-10 lg:pb-12 w-full">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-white leading-[1.15]">
              We put solar panels, battery storage, and EV charging together in one system, tailored to your lifestyle.
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-xl font-normal">
              Break up with your electric bill and build the whole-home solar energy system your future self will thank you for.
            </p>

            <div className="pt-2">
              <Link
                to="/get-a-quote"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-bold text-[#191919] bg-[#7aefb1] hover:bg-[#68e2a0] transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
              >
                <span>Get a quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR (Matching reference trust-bar) */}
      <section className="bg-[#191919] text-gray-200 py-3.5 sm:py-4 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 text-xs sm:text-sm text-gray-200 font-medium">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#7aefb1] flex-shrink-0" strokeWidth={2.5} />
              <span>15,000+ systems installed</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#7aefb1] flex-shrink-0" strokeWidth={2.5} />
              <span>1,500+ 5-star reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#7aefb1] flex-shrink-0" strokeWidth={2.5} />
              <span>Local W-2 crews</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#7aefb1] flex-shrink-0" strokeWidth={2.5} />
              <span>Service built in</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SWITCHING TO SOLAR IS EASY & AFFORDABLE */}
      <section className="py-20 lg:py-28 bg-[#f5f7f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-950 tracking-tight leading-tight">
              We make switching to solar easy and affordable
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Smart Way Solar’s all-in-one system combines solar panels, battery storage, and smart electrical controls to lower your monthly costs and keep your home powered through any blackout.
            </p>
          </div>

          {/* 4. PRODUCTS SLIDER / CARDS (Using Verified Original Assets) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITE_CONFIG.solutions.slice(0, 5).map((item) => (
              <Link
                key={item.slug}
                to={`/solutions/${item.slug}`}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-teal-700 group-hover:text-teal-800">
                    <span>Explore {item.title}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}

            {/* Whole-Home System Card */}
            <Link
              to="/solutions/whole-home-solar"
              className="group flex flex-col rounded-3xl overflow-hidden bg-gray-900 text-white border border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-gray-950">
                <img
                  src="/assets/media/whole-home-diagram.webp"
                  alt="Whole-Home Solar diagram"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Whole-Home Solar</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Unify solar generation, battery storage, and smart electrical load management into a single cohesive system.
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#e3ff75]">
                  <span>Explore Whole-Home System</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FIND YOUR STATE (With Location Map Video & Exactly the 8 Ordered Locations) */}
      <FindYourState />

      {/* 6. REVIEWS / TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-950 tracking-tight">
              1,500+ 5-Star Reviews
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Hear directly from verified homeowners who switched to clean solar energy with Smart Way Solar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_CONFIG.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#f5f7f6] border border-gray-200/80 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed italic">
                    “{t.quote}”
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-300/60">
                  <div className="font-bold text-gray-950 text-sm">{t.author}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{t.location} • {t.system}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "TRADITIONAL ELECTRIC COULD NEVER BE THIS GOOD TO YOU" (Using modern-home-dusk.webp) */}
      <section className="relative py-24 sm:py-32 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/media/modern-home-dusk.webp"
            alt="Modern home at dusk powered by solar energy"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Traditional electric could never be this good to you.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              Solar power gives you what traditional electric utilities can’t — and there’s never been a better time to take control of your energy future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gray-900/80 border border-gray-800 backdrop-blur-md space-y-4">
              <div className="p-3 rounded-2xl bg-teal-500/10 text-[#e3ff75] inline-block">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Visibility</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                See exactly where your electricity comes from and where it goes. Real-time smartphone monitoring shows solar production and consumption down to individual circuits.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-900/80 border border-gray-800 backdrop-blur-md space-y-4">
              <div className="p-3 rounded-2xl bg-teal-500/10 text-[#e3ff75] inline-block">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Control</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Manage your home energy automatically. Store cheap power in battery backup and power essential circuits when severe weather disrupts the utility grid.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-900/80 border border-gray-800 backdrop-blur-md space-y-4">
              <div className="p-3 rounded-2xl bg-teal-500/10 text-[#e3ff75] inline-block">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Predictability</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Say goodbye to runaway utility rate increases. Lock in lower, predictable monthly solar energy costs backed by our 25-year comprehensive system warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HIGH-IMPACT SERVICE TRUCK BANNER */}
      <section className="relative w-full h-80 sm:h-96 lg:h-[480px] overflow-hidden">
        <img
          src="/assets/aistudio/Gemini_Generated_Image_ro5l8cro5l8cro5l_56346b7e.jpg"
          alt="Smart Way Solar electric service truck parked in front of garage at dusk"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 max-w-7xl mx-auto px-4 text-white">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e3ff75]">
            Full-Time Certified Electricians & Technicians
          </span>
          <p className="text-sm sm:text-base font-medium text-gray-100 mt-1">
            Prompt, dedicated service trucks deployed across our regional divisions.
          </p>
        </div>
      </section>

      {/* 9. PLANS & SERVICES SPLIT (Matching Reference Section 8) */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100">
                Plans & Services
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-950 tracking-tight leading-tight">
                A plan for every home and every budget
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Find the perfect solar energy solution and payment plan with $0-down options. We offer various financing and purchase paths designed for your goals:
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-800 font-medium">
                    <strong>EZ Plan:</strong> 25-year lease/PPA with $0 upfront cost and immediate bill savings.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-800 font-medium">
                    <strong>Finance-to-own:</strong> Fixed monthly loan payments with full 30% Federal ITC credit retention.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-800 font-medium">
                    <strong>Direct Purchase:</strong> Highest lifetime ROI with zero monthly payments forever.
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/plans-services/pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 transition-colors shadow-md"
                >
                  <span>Compare All 3 Pricing Plans</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border border-gray-200">
                <img
                  src="/assets/media/aerial-sunlit-roof.webp"
                  alt="Aerial view of sunlit rooftop solar installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. WHOLE-HOME ENERGY DIAGRAM (Matching Reference Section 9) */}
      <section className="py-20 lg:py-28 bg-[#f5f7f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100">
                Integrated Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-950 tracking-tight leading-tight">
                One smart system. Total control.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Traditional solar only makes power. Our whole-home systems help you use it better, managing your energy automatically between rooftop generation, battery storage, and high-draw appliances.
              </p>
              <div className="pt-2">
                <Link
                  to="/solutions/whole-home-solar"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 transition-colors shadow-xs"
                >
                  <span>Learn about whole-home solar</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-4 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-lg">
                <img
                  src="/assets/media/whole-home-diagram.webp"
                  alt="Diagram of a modern house with solar panels on the roof, battery storage, and electric vehicle charging"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CLOSING HERO BANNER WITH LOOPING GRASS VIDEO (Matching Reference Section 10) */}
      <section className="relative w-full min-h-[460px] flex items-center justify-center overflow-hidden bg-gray-950 text-white text-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        >
          <source src="/assets/media/grass-wind.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-950/50 z-10" />

        <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white">
            Power your life, your way.
          </h2>
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            Get an instant custom quote and see how much you can save with Smart Way Solar.
          </p>
          <div>
            <Link
              to="/get-a-quote"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-gray-950 bg-[#e3ff75] hover:bg-[#d4f55f] transition-all duration-200 shadow-xl active:scale-95"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
