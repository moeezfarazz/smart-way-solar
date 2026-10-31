import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { QuoteForm } from '../components/QuoteForm';

export const ContactUsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-16 sm:py-24 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-teal-100">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Contact Smart Way Solar
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Have questions about solar panel efficiency, battery backup storage, or our three financing plans? Reach out to our customer care and engineering advisors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-teal-100 text-teal-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">Telephone</h3>
                    <a
                      href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`}
                      className="text-lg font-bold text-gray-950 hover:text-teal-700 transition-colors mt-0.5 block"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <p className="text-xs text-gray-600 mt-1">Available Mon–Fri 8am–7pm, Sat 9am–4pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                  <div className="p-3 rounded-2xl bg-teal-100 text-teal-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-base font-bold text-gray-950 hover:text-teal-700 transition-colors mt-0.5 block"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <p className="text-xs text-gray-600 mt-1">Direct inquiries answered within 1 business day</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                  <div className="p-3 rounded-2xl bg-teal-100 text-teal-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">Corporate Office</h3>
                    <div className="text-sm font-bold text-gray-900 mt-0.5">
                      {SITE_CONFIG.address}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Serving homeowners across 8 regional divisions</p>
                  </div>
                </div>
              </div>

              {/* Service States list */}
              <div className="p-6 rounded-3xl bg-teal-900 text-white space-y-3">
                <h4 className="text-sm font-bold text-teal-200 uppercase tracking-wider">
                  Active Service Areas (8)
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {SITE_CONFIG.locations.map((loc) => (
                    <div key={loc.slug} className="flex items-center gap-1.5 text-gray-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      <span>{loc.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Message / Quote Form */}
            <div className="lg:col-span-7">
              <QuoteForm initialPlan="Direct Contact Message" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
