import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { validateQuoteForm, formatPhoneNumber, QuoteFormData } from '../utils/validation';
import { sendQuoteWithEmailJs } from '../utils/emailjsClient';
import { SITE_CONFIG } from '../config/siteConfig';

interface QuoteFormProps {
  initialPlan?: string;
  className?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialPlan = '', className = '' }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    monthlyBill: '$150 - $250',
    systemInterest: initialPlan || 'Solar Panels + Battery Storage',
    consent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === 'phone') {
      setFormData((prev) => ({ ...prev, phone: formatPhoneNumber(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (submitError) {
      setSubmitError(null);
    }

    // Clear error for field if active
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const validation = validateQuoteForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    const result = await sendQuoteWithEmailJs(formData);

    if (!result.ok || result.status !== 200) {
      if (result.fieldErrors) {
        setErrors(result.fieldErrors);
      }
      setSubmitError(
        result.error ||
          `We could not confirm delivery of your quote request right now. Please try again or call us directly at ${SITE_CONFIG.phone}.`
      );
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-3xl p-8 sm:p-10 border border-teal-200 shadow-xl text-center ${className}`}>
        <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">
          Thank You, {formData.firstName}!
        </h3>
        <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
          Your solar estimate request has been received. A Smart Way Solar energy specialist will review your satellite roof profile and contact you at <span className="font-semibold text-gray-900">{formData.phone}</span>.
        </p>

        <div className="mt-6 p-4 rounded-2xl bg-gray-50 border border-gray-200 text-left text-xs text-gray-600 space-y-1">
          <div className="font-bold text-gray-800 uppercase tracking-wider mb-1">
            Request Summary:
          </div>
          <div><span className="font-semibold">Contact:</span> {formData.firstName} {formData.lastName} ({formData.email})</div>
          <div><span className="font-semibold">ZIP Code:</span> {formData.zipCode}</div>
          <div><span className="font-semibold">Selected System:</span> {formData.systemInterest}</div>
          <div><span className="font-semibold">Monthly Electric Bill:</span> {formData.monthlyBill}</div>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setSubmitError(null);
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              zipCode: '',
              monthlyBill: '$150 - $250',
              systemInterest: 'Solar Panels + Battery Storage',
              consent: true,
            });
          }}
          className="mt-6 inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl relative ${className}`}
      id="quote-form"
    >
      <div className="mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Request Your Free Solar Quote
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Get a custom solar and battery design tailored to your home with transparent pricing and zero obligation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label htmlFor="quote-firstName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="quote-firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Jane"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
              errors.firstName
                ? 'border-red-400 bg-red-50/30 focus:ring-2 focus:ring-red-200'
                : 'border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100'
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 flex-shrink-0" />
              <span>{errors.firstName}</span>
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="quote-lastName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="quote-lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Smith"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
              errors.lastName
                ? 'border-red-400 bg-red-50/30 focus:ring-2 focus:ring-red-200'
                : 'border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100'
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 flex-shrink-0" />
              <span>{errors.lastName}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="quote-email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="quote-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="jane@example.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
              errors.email
                ? 'border-red-400 bg-red-50/30 focus:ring-2 focus:ring-red-200'
                : 'border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 flex-shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="quote-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="quote-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="(555) 000-0000"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
              errors.phone
                ? 'border-red-400 bg-red-50/30 focus:ring-2 focus:ring-red-200'
                : 'border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 flex-shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* ZIP Code */}
        <div>
          <label htmlFor="quote-zipCode" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            ZIP Code <span className="text-red-500">*</span>
          </label>
          <input
            id="quote-zipCode"
            type="text"
            name="zipCode"
            maxLength={5}
            value={formData.zipCode}
            onChange={handleInputChange}
            placeholder="19104"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
              errors.zipCode
                ? 'border-red-400 bg-red-50/30 focus:ring-2 focus:ring-red-200'
                : 'border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100'
            }`}
          />
          {errors.zipCode && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 flex-shrink-0" />
              <span>{errors.zipCode}</span>
            </p>
          )}
        </div>

        {/* Average Monthly Electric Bill */}
        <div>
          <label htmlFor="quote-monthlyBill" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Average Monthly Electric Bill
          </label>
          <select
            id="quote-monthlyBill"
            name="monthlyBill"
            value={formData.monthlyBill}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 bg-white"
          >
            <option value="Under $100">Under $100 / month</option>
            <option value="$100 - $150">$100 - $150 / month</option>
            <option value="$150 - $250">$150 - $250 / month</option>
            <option value="$250 - $400">$250 - $400 / month</option>
            <option value="$400+">$400+ / month (High usage)</option>
          </select>
        </div>
      </div>

      {/* System Interest */}
      <div className="mt-4">
        <label htmlFor="quote-systemInterest" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
          Solutions You’re Interested In
        </label>
        <select
          id="quote-systemInterest"
          name="systemInterest"
          value={formData.systemInterest}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 bg-white"
        >
          <option value="Solar Panels + Battery Storage">Whole-Home Solar + Battery Storage (Recommended)</option>
          <option value="Rooftop Solar Panels Only">Rooftop Solar Panels Only</option>
          <option value="Home Battery Backup Add-On">Home Battery Storage Add-On</option>
          <option value="Solar + EV Charger">Solar Panels + Level-2 EV Charger</option>
          <option value="EZ Plan (Zero Down Lease)">EZ Plan (Zero Down Lease/PPA)</option>
          <option value="Finance-to-own">Finance-to-own</option>
          <option value="Direct Purchase">Direct Purchase</option>
        </select>
      </div>

      {/* Consent Checkbox */}
      <div className="mt-5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            className="mt-1 w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
          />
          <span className="text-xs text-gray-500 leading-relaxed">
            By submitting, I agree that Smart Way Solar may contact me by phone or email regarding solar products and savings estimates. No high-pressure sales tactics.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 flex-shrink-0" />
            <span>{errors.consent}</span>
          </p>
        )}
      </div>

      {submitError && (
        <div
          role="alert"
          className="mt-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5"
        >
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Calculating Your Solar Design...</span>
            </>
          ) : (
            <>
              <span>Get My Free Quote</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Trust reassurance */}
      <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-gray-600">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" /> 100% Free Consultation
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" /> No Obligation
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" /> Fast Response
        </span>
      </div>
    </form>
  );
};
