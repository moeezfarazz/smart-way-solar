import React, { useState } from 'react';
import { Gift, CheckCircle, Users, Send } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const ReferralsPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    friendName: '',
    friendPhone: '',
    friendState: 'Pennsylvania',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.yourName && formData.friendName) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-white">
      <section className="relative py-16 sm:py-24 text-white overflow-hidden bg-[#0d1f2d]">
        {/* Photorealistic rooftop solar panel photograph with right-aligned focus */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-[center_right] sm:bg-[80%_center]"
          style={{
            backgroundImage: "url('/assets/media/solar-panels-roof.webp')"
          }}
        />
        {/* Subtle dark navy-to-transparent gradient: strongest on left behind text, lighter toward the right to showcase solar panels */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0d1f2d] via-[#0d1f2d]/90 via-45% to-transparent pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-teal-300 uppercase bg-teal-950/80 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-teal-800">
              Community Rewards
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-sm">
              Smart Way Solar Referral Program
            </h1>
            <p className="mt-4 text-lg text-teal-100 leading-relaxed drop-shadow-sm">
              Earn $500 for every homeowner you introduce to Smart Way Solar who activates their clean rooftop solar energy system. No limit on referral rewards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-bold text-gray-950">How the Referral Program Works</h2>

              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">Share with Friends & Neighbors</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Tell friends, family, or neighbors about your experience with Smart Way Solar and submit their details via the referral form.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">We Provide an Honest Consultation</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Our team gives them a pressure-free solar analysis with customized options tailored to their roof and electrical usage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">Get Paid $500 Upon Installation</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Once their solar system is installed and approved, we immediately send your $500 check or direct deposit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-950 mb-2">Submit a Referral</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Fill in your details and your friend's contact information below.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-3">
                    <CheckCircle className="w-10 h-10 text-teal-600 mx-auto" />
                    <h4 className="text-lg font-bold text-gray-900">Referral Successfully Received!</h4>
                    <p className="text-xs text-gray-600">
                      Thank you, {formData.yourName}. We will reach out to {formData.friendName} with a courteous solar consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.yourName}
                        onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.yourEmail}
                        onChange={(e) => setFormData({ ...formData, yourEmail: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    <div className="pt-2 border-t border-gray-200">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Friend's Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.friendName}
                        onChange={(e) => setFormData({ ...formData, friendName: e.target.value })}
                        placeholder="Friend's Name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Friend's Phone or Email</label>
                      <input
                        type="text"
                        required
                        value={formData.friendPhone}
                        onChange={(e) => setFormData({ ...formData, friendPhone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Friend's State</label>
                      <select
                        value={formData.friendState}
                        onChange={(e) => setFormData({ ...formData, friendState: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-teal-500 focus:outline-none bg-white"
                      >
                        {SITE_CONFIG.locations.map((loc) => (
                          <option key={loc.slug} value={loc.name}>
                            {loc.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Submit Referral ($500 Reward)</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
