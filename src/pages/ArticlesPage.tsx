import React, { useState, useMemo } from 'react';
import { Calendar, Clock, ArrowRight, Filter, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: 'Solar Basics' | 'Pricing & Incentives' | 'Battery Storage' | 'Home Energy';
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
}

const ALL_ARTICLES: Article[] = [
  {
    id: 'cost-savings-solar-energy',
    title: 'How Much Can You Really Save with Residential Solar in 2026?',
    excerpt: 'Analyzing real homeowner electricity bills across PA, MD, NY, and NJ to understand net monthly savings after equipment financing and 1-to-1 net metering credits.',
    category: 'Pricing & Incentives',
    readTime: '5 min read',
    date: 'October 2026',
    image: '/assets/media/solar-panels-roof.webp',
    featured: true
  },
  {
    id: 'leases-vs-loans',
    title: 'Financing a Solar System: Leases vs Loans vs Direct Purchase',
    excerpt: 'A comprehensive comparison of the three core residential financing methods: our $0-down EZ Plan subscription, fixed-rate solar ownership loans, and cash purchases.',
    category: 'Pricing & Incentives',
    readTime: '6 min read',
    date: 'October 2026',
    image: '/assets/media/pricing-hero-house.webp'
  },
  {
    id: 'battery-backup-outages',
    title: 'Battery Backup: How to Stay Powered Up Through Grid Blackouts',
    excerpt: 'Why pairing rooftop panels with modern lithium iron phosphate (LFP) home battery storage gives you true storm resilience without running a noisy fossil-fuel generator.',
    category: 'Battery Storage',
    readTime: '4 min read',
    date: 'September 2026',
    image: '/assets/media/modern-house-exterior.webp'
  },
  {
    id: 'federal-solar-tax-credit-guide',
    title: 'The Homeowner Guide to the 30% Federal Clean Energy Tax Credit',
    excerpt: 'How to claim the Section 25D residential credit on your federal tax filing, and how to combine it with state SRECs and utility equipment rebates.',
    category: 'Pricing & Incentives',
    readTime: '7 min read',
    date: 'September 2026',
    image: '/assets/media/pricing-aerial-white-house.webp'
  },
  {
    id: 'solar-panel-efficiency-winter',
    title: 'How Solar Panels Perform in Cold Weather and Snow',
    excerpt: 'Photovoltaic cells actually operate more efficiently at colder temperatures. Learn how snow shedding, ambient light absorption, and angle tilt maintain winter yield.',
    category: 'Solar Basics',
    readTime: '4 min read',
    date: 'August 2026',
    image: '/assets/media/modern-home-dusk.webp'
  },
  {
    id: 'ev-charging-solar-pairing',
    title: 'Powering Your Electric Vehicle with Pure Rooftop Sunshine',
    excerpt: 'Calculate the kilowatt-hours needed to charge an EV at home and how a dedicated Level 2 smart charger integrates with home solar and battery storage.',
    category: 'Home Energy',
    readTime: '5 min read',
    date: 'August 2026',
    image: '/assets/media/aerial-sunlit-roof.webp'
  },
  {
    id: 'microinverters-vs-string-inverters',
    title: 'Why Panel-Level Microinverters Outperform Traditional String Inverters',
    excerpt: 'Explore how independent microinverters eliminate single points of failure, provide panel-level monitoring, and maximize rooftop output in partially shaded areas.',
    category: 'Solar Basics',
    readTime: '6 min read',
    date: 'July 2026',
    image: '/assets/media/solar-sunset-roof.webp'
  },
  {
    id: 'smart-electrical-panels-guide',
    title: 'Smart Electrical Panels: Take Total Control of Home Energy Loads',
    excerpt: 'How intelligent circuit breakers let you prioritize backup power to critical appliances and automate consumption based on peak time-of-use utility rates.',
    category: 'Home Energy',
    readTime: '5 min read',
    date: 'June 2026',
    image: '/assets/media/whole-home-diagram.webp'
  }
];

type CategoryFilter = 'All' | 'Solar Basics' | 'Pricing & Incentives' | 'Battery Storage' | 'Home Energy';

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Solar Basics',
  'Pricing & Incentives',
  'Battery Storage',
  'Home Energy'
];

export const ArticlesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') return ALL_ARTICLES;
    return ALL_ARTICLES.filter((art) => art.category === selectedCategory);
  }, [selectedCategory]);

  const featuredArticle = ALL_ARTICLES.find((art) => art.featured) || ALL_ARTICLES[0];
  const gridArticles = filteredArticles.filter((art) => selectedCategory !== 'All' || art.id !== featuredArticle.id);
  const displayedArticles = gridArticles.slice(0, visibleCount);

  return (
    <div className="bg-white">
      {/* 1. EDITORIAL HEADER SECTION */}
      <section className="relative py-16 sm:py-24 border-b border-gray-200/80 overflow-hidden bg-gray-100">
        {/* Background Image with professional cover treatment */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center sm:bg-[center_top] bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/aistudio/Gemini_Generated_Image_j42dfcj42dfcj42d_a21e5a50.jpg')"
          }}
        />
        {/* Subtle dark gradient overlay: ~45% dark on left behind text, fading to ~15% on right over photo */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/50 via-black/35 to-black/15" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e3ff75]">
              <Link to="/" className="text-white hover:text-[#e3ff75] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
              <span className="text-[#e3ff75]">Articles & Guides</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight drop-shadow-sm">
              Solar Knowledge & Guides
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              Clear, practical advice on residential solar equipment, battery storage, net metering rules, and clean energy financing from our in-house energy experts.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="mt-10 flex flex-wrap gap-2.5 pt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(6);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#e3ff75] text-gray-950 font-bold shadow-md ring-1 ring-[#e3ff75]'
                    : 'bg-black/40 text-white hover:bg-black/60 border border-white/30 backdrop-blur-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE (Shown when "All" is active) */}
      {selectedCategory === 'All' && featuredArticle && (
        <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[32px] overflow-hidden bg-[#f5f7f6] border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-gray-300 transition-all duration-300 group">
              {/* Image side */}
              <div className="lg:col-span-7 h-72 sm:h-96 lg:h-full relative overflow-hidden bg-gray-900">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5 bg-gray-950/80 backdrop-blur-sm text-[#e3ff75] text-xs font-bold px-3 py-1.5 rounded-full">
                  Featured Guide
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:pl-4 lg:pr-10 space-y-4">
                <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                  <span className="text-teal-800 font-bold uppercase tracking-wider">{featuredArticle.category}</span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-medium text-gray-950 leading-snug group-hover:text-teal-800 transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-3">
                  <Link
                    to="/plans-services/pricing"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#191919] group-hover:text-teal-800 underline underline-offset-4 decoration-black/30 group-hover:decoration-teal-800 transition-colors"
                  >
                    <span>Read article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. EDITORIAL ARTICLE GRID */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-100">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-950">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h3>
            <span className="text-xs sm:text-sm text-gray-500 font-medium">
              Showing {displayedArticles.length} of {gridArticles.length} guides
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((art) => (
              <div
                key={art.id}
                className="group flex flex-col rounded-[24px] overflow-hidden bg-white border border-gray-200/90 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gray-950/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {art.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-950 leading-snug group-hover:text-teal-800 transition-colors">
                      {art.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      to="/plans-services/pricing"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#191919] group-hover:text-teal-800 underline underline-offset-4 decoration-black/30 group-hover:decoration-teal-800 transition-colors"
                    >
                      <span>Read article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button if more articles available */}
          {displayedArticles.length < gridArticles.length && (
            <div className="mt-14 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="px-8 py-3.5 rounded-full text-sm font-bold bg-[#f5f7f6] hover:bg-gray-200 text-gray-900 border border-gray-300 transition-all cursor-pointer"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. NEWSLETTER / ADVICE CTA */}
      <section className="py-16 bg-[#1f2421] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e3ff75]">
              Expert Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight">
              Have questions about your specific utility company or roof?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Our regional solar engineers can model your roof production, calculate peak sun hours, and show you transparent financing options for your property.
            </p>
            <div className="pt-3">
              <Link
                to="/get-a-quote"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-gray-950 bg-[#e3ff75] hover:bg-[#d4f55f] transition-all shadow-md active:scale-95"
              >
                <span>Request a Free Roof Assessment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
