import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Phone,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { Logo } from './Logo';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

type MenuCategory = 'solutions' | 'plans' | 'locations' | 'explore' | null;

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [activeMenu, setActiveMenu] = useState<MenuCategory>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle outside click to close mega-menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleCategory = (category: MenuCategory) => {
    setActiveMenu((prev) => (prev === category ? null : category));
  };

  return (
    <>
      {/* Backdrop overlay when mega menu is open on desktop */}
      {activeMenu && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 transition-opacity duration-300 hidden lg:block"
          onClick={() => setActiveMenu(null)}
          aria-hidden="true"
        />
      )}

      {/* Main Navigation Container: Normal document flow, relative position at top 12px */}
      <header
        ref={navContainerRef}
        className="relative z-50 transition-all duration-300 pointer-events-auto"
        style={{
          position: 'relative',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 24px)',
          maxWidth: '1280px',
          marginBottom: '-68px',
          zIndex: 50
        }}
      >
        <div
          className={`w-full transition-all duration-300 bg-[#1c191a] text-white border border-white/10 shadow-2xl ${
            activeMenu
              ? 'rounded-2xl lg:rounded-[24px]'
              : 'rounded-2xl'
          }`}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-3 sm:px-8 py-2.5 sm:py-3.5">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Logo variant="light" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Solutions */}
              <button
                type="button"
                onClick={() => toggleCategory('solutions')}
                onMouseEnter={() => activeMenu && setActiveMenu('solutions')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-medium transition-colors cursor-pointer rounded-full ${
                  activeMenu === 'solutions'
                    ? 'text-[#e3ff75] font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
                aria-expanded={activeMenu === 'solutions'}
              >
                <span>Solutions</span>
                {activeMenu === 'solutions' ? (
                  <ChevronUp className="w-3.5 h-3.5 text-[#e3ff75]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-white/60" />
                )}
              </button>

              {/* Plans & Services */}
              <button
                type="button"
                onClick={() => toggleCategory('plans')}
                onMouseEnter={() => activeMenu && setActiveMenu('plans')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-medium transition-colors cursor-pointer rounded-full ${
                  activeMenu === 'plans'
                    ? 'text-[#e3ff75] font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
                aria-expanded={activeMenu === 'plans'}
              >
                <span>Plans & Services</span>
                {activeMenu === 'plans' ? (
                  <ChevronUp className="w-3.5 h-3.5 text-[#e3ff75]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-white/60" />
                )}
              </button>

              {/* Locations */}
              <button
                type="button"
                onClick={() => toggleCategory('locations')}
                onMouseEnter={() => activeMenu && setActiveMenu('locations')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-medium transition-colors cursor-pointer rounded-full ${
                  activeMenu === 'locations'
                    ? 'text-[#e3ff75] font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
                aria-expanded={activeMenu === 'locations'}
              >
                <span>Locations</span>
                {activeMenu === 'locations' ? (
                  <ChevronUp className="w-3.5 h-3.5 text-[#e3ff75]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-white/60" />
                )}
              </button>

              {/* Explore */}
              <button
                type="button"
                onClick={() => toggleCategory('explore')}
                onMouseEnter={() => activeMenu && setActiveMenu('explore')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-medium transition-colors cursor-pointer rounded-full ${
                  activeMenu === 'explore'
                    ? 'text-[#e3ff75] font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
                aria-expanded={activeMenu === 'explore'}
              >
                <span>Explore</span>
                {activeMenu === 'explore' ? (
                  <ChevronUp className="w-3.5 h-3.5 text-[#e3ff75]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-white/60" />
                )}
              </button>
            </nav>

            {/* Desktop Actions: Phone + Get a quote */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={SITE_CONFIG.phoneLink}
                className="text-sm font-semibold text-[#7aefb1] hover:text-[#9df4c5] transition-colors"
              >
                {SITE_CONFIG.phone}
              </a>

              <Link
                to="/get-a-quote"
                onClick={() => setActiveMenu(null)}
                className="inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-bold text-[#191919] bg-[#7aefb1] hover:bg-[#68e2a0] transition-all duration-200 active:scale-95 shadow-sm"
              >
                Get a quote
              </Link>
            </div>

            {/* Mobile Actions: Phone icon, Quote pill, Hamburger */}
            <div className="flex items-center gap-1 sm:gap-2 lg:hidden flex-shrink-0">
              <a
                href={SITE_CONFIG.phoneLink}
                aria-label="Call Smart Way Solar"
                className="p-2 rounded-full text-[#7aefb1] hover:bg-white/10"
              >
                <Phone className="w-4 h-4" />
              </a>

              <Link
                to="/get-a-quote"
                className="hidden min-[380px]:inline-flex px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold text-[#191919] bg-[#7aefb1] whitespace-nowrap"
              >
                Get quote
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-white/90 hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Desktop Mega-Menu Expanded Content Panel */}
          {activeMenu && (
            <div className="hidden lg:block px-8 sm:px-12 pt-6 pb-14 border-t border-[#262626] animate-fadeIn">
              {/* Category 1: SOLUTIONS (Matches image_6b211fa8.png) */}
              {activeMenu === 'solutions' && (
                <div>
                  <div className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">
                    SOLUTIONS
                  </div>

                  <div className="grid grid-cols-12 gap-8 items-start">
                    {/* Left Column: Navigation Links */}
                    <div className="col-span-5 space-y-2">
                      <Link
                        to="/solutions/solar-panels"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        Solar Panels
                      </Link>
                      <Link
                        to="/solutions/battery-backup"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        Battery Backup
                      </Link>
                      <Link
                        to="/solutions/ev-chargers"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        EV Chargers
                      </Link>
                      <Link
                        to="/solutions/microinverters"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        Microinverters
                      </Link>
                      <Link
                        to="/solutions/smart-electrical-panels"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        Smart Electrical Panels
                      </Link>
                      <Link
                        to="/solutions/whole-home-solar"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        Whole Home Solar
                      </Link>

                      <div className="pt-4">
                        <Link
                          to="/solutions"
                          onClick={() => setActiveMenu(null)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#7aefb1] hover:text-[#a0f7c8] transition-colors"
                        >
                          <span>Explore All Solutions</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Two Editorial Cards side-by-side */}
                    <div className="col-span-7 grid grid-cols-2 gap-6 pl-4">
                      {/* Card 1: Battery Backup (Exact match to reference) */}
                      <div className="group">
                        <Link
                          to="/solutions/battery-backup"
                          onClick={() => setActiveMenu(null)}
                          className="block"
                        >
                          <div className="relative aspect-[16/10] rounded-[22px] overflow-hidden bg-black/40 border border-white/5">
                            <img
                              src="/assets/media/modern-house-exterior.webp"
                              alt="Battery Backup installed outside modern home"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <h3 className="text-white font-semibold text-[17px] mt-4 leading-snug group-hover:text-[#e3ff75] transition-colors">
                            Battery Backup: Stay Powered Up!
                          </h3>
                        </Link>
                        <Link
                          to="/solutions/battery-backup"
                          onClick={() => setActiveMenu(null)}
                          className="text-sm text-white underline underline-offset-4 decoration-white/70 hover:decoration-[#7aefb1] hover:text-[#7aefb1] mt-2 inline-block font-medium transition-colors"
                        >
                          Read article
                        </Link>
                      </div>

                      {/* Card 2: Solar Panels Roof */}
                      <div className="group">
                        <Link
                          to="/plans-services/pricing"
                          onClick={() => setActiveMenu(null)}
                          className="block"
                        >
                          <div className="relative aspect-[16/10] rounded-[22px] overflow-hidden bg-black/40 border border-white/5">
                            <img
                              src="/assets/media/solar-panels-roof.webp"
                              alt="All-black solar panels installed on residential roof"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <h3 className="text-white font-semibold text-[17px] mt-4 leading-snug group-hover:text-[#e3ff75] transition-colors">
                            7 Things to Look for When Leasing Solar Panels
                          </h3>
                        </Link>
                        <Link
                          to="/plans-services/pricing"
                          onClick={() => setActiveMenu(null)}
                          className="text-sm text-white underline underline-offset-4 decoration-white/70 hover:decoration-[#7aefb1] hover:text-[#7aefb1] mt-2 inline-block font-medium transition-colors"
                        >
                          Read article
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Category 2: PLANS & SERVICES */}
              {activeMenu === 'plans' && (
                <div>
                  <div className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">
                    PLANS & SERVICES
                  </div>

                  <div className="grid grid-cols-12 gap-8 items-start">
                    <div className="col-span-5 space-y-2">
                      <Link
                        to="/plans-services/pricing"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        Pricing & Costs
                      </Link>
                      <Link
                        to="/plans-services/solar-installation"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        Solar Installation
                      </Link>
                      <Link
                        to="/plans-services/solar-incentives"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        Solar & Battery Incentives
                      </Link>
                      <Link
                        to="/get-a-quote"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        Home Energy Assessment
                      </Link>
                    </div>

                    <div className="col-span-7 grid grid-cols-2 gap-6 pl-4">
                      <div className="group">
                        <Link
                          to="/plans-services/pricing"
                          onClick={() => setActiveMenu(null)}
                          className="block"
                        >
                          <div className="relative aspect-[16/10] rounded-[22px] overflow-hidden bg-black/40 border border-white/5">
                            <img
                              src="/assets/media/pricing-hero-house.webp"
                              alt="Modern solar home showing transparent pricing"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <h3 className="text-white font-semibold text-[17px] mt-4 leading-snug group-hover:text-[#e3ff75] transition-colors">
                            Transparent Solar Pricing: EZ Plan, Finance or Own
                          </h3>
                        </Link>
                        <Link
                          to="/plans-services/pricing"
                          onClick={() => setActiveMenu(null)}
                          className="text-sm text-white underline underline-offset-4 decoration-white/70 hover:decoration-[#7aefb1] hover:text-[#7aefb1] mt-2 inline-block font-medium transition-colors"
                        >
                          Explore pricing
                        </Link>
                      </div>

                      <div className="group">
                        <Link
                          to="/plans-services/solar-installation"
                          onClick={() => setActiveMenu(null)}
                          className="block"
                        >
                          <div className="relative aspect-[16/10] rounded-[22px] overflow-hidden bg-black/40 border border-white/5">
                            <img
                              src="/assets/aistudio/Gemini_Generated_Image_j42dfcj42dfcj42d_a21e5a50.jpg"
                              alt="Smart Way certified solar installation team"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <h3 className="text-white font-semibold text-[17px] mt-4 leading-snug group-hover:text-[#e3ff75] transition-colors">
                            Turnkey In-House Installation & Craftsmanship
                          </h3>
                        </Link>
                        <Link
                          to="/plans-services/solar-installation"
                          onClick={() => setActiveMenu(null)}
                          className="text-sm text-white underline underline-offset-4 decoration-white/70 hover:decoration-[#7aefb1] hover:text-[#7aefb1] mt-2 inline-block font-medium transition-colors"
                        >
                          Read article
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Category 3: LOCATIONS (Exact 8 states) */}
              {activeMenu === 'locations' && (
                <div>
                  <div className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">
                    SERVICE LOCATIONS (8 STATES)
                  </div>

                  <div className="grid grid-cols-12 gap-8 items-start">
                    <div className="col-span-5 grid grid-cols-2 gap-x-6 gap-y-1">
                      {SITE_CONFIG.locations.map((loc) => (
                        <Link
                          key={loc.slug}
                          to={`/locations/${loc.slug}`}
                          onClick={() => setActiveMenu(null)}
                          className="block text-[22px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                        >
                          {loc.name}
                        </Link>
                      ))}

                      <div className="col-span-2 pt-4">
                        <Link
                          to="/plans-services/solar-incentives"
                          onClick={() => setActiveMenu(null)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#7aefb1] hover:text-[#a0f7c8] transition-colors"
                        >
                          <span>Compare State Incentives & SRECs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-7 grid grid-cols-2 gap-6 pl-4">
                      <div className="group">
                        <Link
                          to="/plans-services/solar-incentives"
                          onClick={() => setActiveMenu(null)}
                          className="block"
                        >
                          <div className="relative aspect-[16/10] rounded-[22px] overflow-hidden bg-black/40 border border-white/5">
                            <img
                              src="/assets/media/pricing-aerial-white-house.webp"
                              alt="Aerial solar neighborhood"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <h3 className="text-white font-semibold text-[17px] mt-4 leading-snug group-hover:text-[#e3ff75] transition-colors">
                            State Solar Incentives, Rebates & Net Metering
                          </h3>
                        </Link>
                        <Link
                          to="/plans-services/solar-incentives"
                          onClick={() => setActiveMenu(null)}
                          className="text-sm text-white underline underline-offset-4 decoration-white/70 hover:decoration-[#7aefb1] hover:text-[#7aefb1] mt-2 inline-block font-medium transition-colors"
                        >
                          Check state rules
                        </Link>
                      </div>

                      <div className="group">
                        <Link
                          to="/about-us"
                          onClick={() => setActiveMenu(null)}
                          className="block"
                        >
                          <div className="relative aspect-[16/10] rounded-[22px] overflow-hidden bg-black/40 border border-white/5">
                            <img
                              src="/assets/aistudio/Gemini_Generated_Image_ro5l8cro5l8cro5l_56346b7e.jpg"
                              alt="Smart Way dedicated service vehicle in driveway"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <h3 className="text-white font-semibold text-[17px] mt-4 leading-snug group-hover:text-[#e3ff75] transition-colors">
                            Local Dedicated W-2 Crews Ready Near You
                          </h3>
                        </Link>
                        <Link
                          to="/about-us"
                          onClick={() => setActiveMenu(null)}
                          className="text-sm text-white underline underline-offset-4 decoration-white/70 hover:decoration-[#7aefb1] hover:text-[#7aefb1] mt-2 inline-block font-medium transition-colors"
                        >
                          Learn about our crews
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Category 4: EXPLORE */}
              {activeMenu === 'explore' && (
                <div>
                  <div className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">
                    EXPLORE SMART WAY SOLAR
                  </div>

                  <div className="grid grid-cols-12 gap-8 items-start">
                    <div className="col-span-5 space-y-2">
                      <Link
                        to="/about-us"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        About Us
                      </Link>
                      <Link
                        to="/articles"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        Articles
                      </Link>
                      <Link
                        to="/referrals"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        Referrals
                      </Link>
                      <Link
                        to="/contact-us"
                        onClick={() => setActiveMenu(null)}
                        className="block text-[27px] font-normal text-white hover:text-[#e3ff75] transition-colors py-1.5"
                      >
                        Contact Us
                      </Link>
                    </div>

                    <div className="col-span-7 grid grid-cols-2 gap-6 pl-4">
                      <div className="group">
                        <Link
                          to="/about-us"
                          onClick={() => setActiveMenu(null)}
                          className="block"
                        >
                          <div className="relative aspect-[16/10] rounded-[22px] overflow-hidden bg-black/40 border border-white/5">
                            <img
                              src="/assets/aistudio/Gemini_Generated_Image_2donho2donho2don_462be1a1.jpg"
                              alt="Dedicated Smart Way installation van and technicians"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <h3 className="text-white font-semibold text-[17px] mt-4 leading-snug group-hover:text-[#e3ff75] transition-colors">
                            Our Story: Quality Craftsmanship That Lasts
                          </h3>
                        </Link>
                        <Link
                          to="/about-us"
                          onClick={() => setActiveMenu(null)}
                          className="text-sm text-white underline underline-offset-4 decoration-white/70 hover:decoration-[#7aefb1] hover:text-[#7aefb1] mt-2 inline-block font-medium transition-colors"
                        >
                          Read our story
                        </Link>
                      </div>

                      <div className="group">
                        <Link
                          to="/referrals"
                          onClick={() => setActiveMenu(null)}
                          className="block"
                        >
                          <div className="relative aspect-[16/10] rounded-[22px] overflow-hidden bg-black/40 border border-white/5">
                            <img
                              src="/assets/media/modern-home-dusk.webp"
                              alt="Modern smart home at dusk"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <h3 className="text-white font-semibold text-[17px] mt-4 leading-snug group-hover:text-[#e3ff75] transition-colors">
                            Earn $500 with the Smart Way Referral Program
                          </h3>
                        </Link>
                        <Link
                          to="/referrals"
                          onClick={() => setActiveMenu(null)}
                          className="text-sm text-white underline underline-offset-4 decoration-white/70 hover:decoration-[#7aefb1] hover:text-[#7aefb1] mt-2 inline-block font-medium transition-colors"
                        >
                          Start referring
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden px-5 pt-3 pb-8 space-y-5 border-t border-[#262626] max-h-[80vh] overflow-y-auto">
              <div className="p-3 bg-white/5 rounded-2xl flex items-center justify-between text-xs">
                <span className="text-gray-300">Speak with an advisor:</span>
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="font-bold text-[#7aefb1] flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {SITE_CONFIG.phone}
                </a>
              </div>

              {/* Mobile Sections */}
              <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-[#7aefb1] uppercase mb-2">
                    Solutions
                  </p>
                  <div className="grid grid-cols-1 gap-1">
                    <Link
                      to="/solutions/solar-panels"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 text-base text-white/90 hover:text-[#e3ff75] rounded-lg"
                    >
                      Solar Panels
                    </Link>
                    <Link
                      to="/solutions/battery-backup"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 text-base text-white/90 hover:text-[#e3ff75] rounded-lg"
                    >
                      Battery Backup
                    </Link>
                    <Link
                      to="/solutions/ev-chargers"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 text-base text-white/90 hover:text-[#e3ff75] rounded-lg"
                    >
                      EV Chargers
                    </Link>
                    <Link
                      to="/solutions/microinverters"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 text-base text-white/90 hover:text-[#e3ff75] rounded-lg"
                    >
                      Microinverters
                    </Link>
                    <Link
                      to="/solutions/smart-electrical-panels"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 text-base text-white/90 hover:text-[#e3ff75] rounded-lg"
                    >
                      Smart Electrical Panels
                    </Link>
                    <Link
                      to="/solutions/whole-home-solar"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 text-base text-white/90 hover:text-[#e3ff75] rounded-lg"
                    >
                      Whole Home Solar
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-bold tracking-wider text-[#7aefb1] uppercase mb-2">
                    Plans & Services
                  </p>
                  <div className="grid grid-cols-1 gap-1">
                    <Link
                      to="/plans-services/pricing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 text-base text-white/90 hover:text-[#e3ff75] rounded-lg"
                    >
                      Pricing & Costs
                    </Link>
                    <Link
                      to="/plans-services/solar-installation"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 text-base text-white/90 hover:text-[#e3ff75] rounded-lg"
                    >
                      Solar Installation
                    </Link>
                    <Link
                      to="/plans-services/solar-incentives"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 text-base text-white/90 hover:text-[#e3ff75] rounded-lg"
                    >
                      Solar & Battery Incentives
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-bold tracking-wider text-[#7aefb1] uppercase mb-2">
                    Locations (8 States)
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {SITE_CONFIG.locations.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/locations/${loc.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-2 py-1.5 text-xs text-white/80 hover:text-[#e3ff75] flex items-center gap-1.5"
                      >
                        <MapPin className="w-3 h-3 text-[#7aefb1]" />
                        <span>{loc.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-bold tracking-wider text-[#7aefb1] uppercase mb-2">
                    Explore
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    <Link
                      to="/about-us"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-2 py-1.5 text-sm text-white/80 hover:text-[#e3ff75]"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/articles"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-2 py-1.5 text-sm text-white/80 hover:text-[#e3ff75]"
                    >
                      Articles
                    </Link>
                    <Link
                      to="/referrals"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-2 py-1.5 text-sm text-white/80 hover:text-[#e3ff75]"
                    >
                      Referrals
                    </Link>
                    <Link
                      to="/contact-us"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-2 py-1.5 text-sm text-white/80 hover:text-[#e3ff75]"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/get-a-quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-3 rounded-full text-center font-bold text-[#191919] bg-[#7aefb1] hover:bg-[#68e2a0] transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
