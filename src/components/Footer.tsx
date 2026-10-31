import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-gray-800 gap-6">
          <div>
            <Logo variant="light" showTagline={true} />
            <p className="mt-3 text-sm text-gray-400 max-w-md">
              Complete residential solar energy systems, high-capacity battery storage, and smart electrification engineered for long-term reliability and lifetime savings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href={SITE_CONFIG.phoneLink}
              className="flex items-center gap-3 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white transition-colors"
            >
              <div className="p-2 rounded-lg bg-teal-600/20 text-teal-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] text-gray-400 font-medium">Customer Support</span>
                <span className="text-sm font-bold text-white">{SITE_CONFIG.phone}</span>
              </div>
            </a>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white transition-colors"
            >
              <div className="p-2 rounded-lg bg-teal-600/20 text-teal-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] text-gray-400 font-medium">Direct Inquiries</span>
                <span className="text-sm font-bold text-white">{SITE_CONFIG.email}</span>
              </div>
            </a>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-gray-800 text-sm">
          {/* Column 1: Solutions */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/solutions/solar-panels" className="text-gray-400 hover:text-white transition-colors">
                  Solar Panels
                </Link>
              </li>
              <li>
                <Link to="/solutions/battery-backup" className="text-gray-400 hover:text-white transition-colors">
                  Battery Backup
                </Link>
              </li>
              <li>
                <Link to="/solutions/ev-chargers" className="text-gray-400 hover:text-white transition-colors">
                  EV Chargers
                </Link>
              </li>
              <li>
                <Link to="/solutions/smart-electrical-panels" className="text-gray-400 hover:text-white transition-colors">
                  Smart Electrical Panels
                </Link>
              </li>
              <li>
                <Link to="/solutions/microinverters" className="text-gray-400 hover:text-white transition-colors">
                  Microinverters
                </Link>
              </li>
              <li>
                <Link to="/solutions/whole-home-solar" className="text-gray-400 hover:text-white transition-colors">
                  Whole-Home Solar
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Plans & Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Plans & Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/plans-services/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing & Costs
                </Link>
              </li>
              <li>
                <Link to="/plans-services/solar-installation" className="text-gray-400 hover:text-white transition-colors">
                  Solar Installation
                </Link>
              </li>
              <li>
                <Link to="/plans-services/solar-incentives" className="text-gray-400 hover:text-white transition-colors">
                  Solar & Battery Incentives
                </Link>
              </li>
              <li>
                <Link to="/get-a-quote" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Locations (Exact 8 in requested order) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Locations</h3>
            <ul className="space-y-2">
              {SITE_CONFIG.locations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="text-gray-400 hover:text-teal-300 transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-teal-500 flex-shrink-0" />
                    <span>{loc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Explore</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-400 hover:text-white transition-colors">
                  Articles & Guides
                </Link>
              </li>
              <li>
                <Link to="/referrals" className="text-gray-400 hover:text-white transition-colors">
                  Referral Program
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Only Facebook, Legal links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            <p>© {currentYear} Smart Way Solar. All rights reserved.</p>
          </div>

          {/* Social Links: FACEBOOK ONLY as explicitly mandated */}
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 transition-colors"
              aria-label="Smart Way Solar on Facebook"
            >
              <svg
                className="w-4 h-4 fill-current text-[#1877F2]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-semibold text-xs">Facebook</span>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-gray-400 transition-colors">
              Terms of Use
            </Link>
            <Link to="/accessibility" className="hover:text-gray-400 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
