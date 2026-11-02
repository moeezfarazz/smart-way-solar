import emailjs from '@emailjs/browser';
import { QuoteFormData, validateQuoteForm } from './validation';

export interface EmailJsConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface EmailJsSendResult {
  ok: boolean;
  status: number;
  text?: string;
  error?: string;
  fieldErrors?: Record<string, string>;
}

export const DEFAULT_EMAILJS_CONFIG: EmailJsConfig = {
  serviceId: 'service_s6cygum',
  templateId: 'template_r6p1hve',
  publicKey: 'K0e2EXst9c1gjtNyz',
};

/**
 * Cleans an EmailJS credential string by trimming whitespace and stripping
 * any accidental surrounding square brackets (e.g. "[template_r6p1hve]" -> "template_r6p1hve").
 */
export function sanitizeEmailJsCredential(raw: string | undefined | null, fallback: string): string {
  if (!raw || typeof raw !== 'string') {
    return fallback;
  }
  const cleaned = raw.trim().replace(/^\[+|\]+$/g, '').trim();
  return cleaned.length > 0 ? cleaned : fallback;
}

/**
 * Resolves the active EmailJS configuration from Vite environment variables
 * with fallback to the pre-configured Smart Way Solar EmailJS credentials.
 */
export function getEmailJsConfig(
  env?: Record<string, string | undefined>
): EmailJsConfig {
  const metaEnv =
    env ??
    ((typeof import.meta !== 'undefined' && (import.meta as { env?: Record<string, string | undefined> }).env) ||
      {});

  return {
    serviceId: sanitizeEmailJsCredential(
      metaEnv.VITE_EMAILJS_SERVICE_ID,
      DEFAULT_EMAILJS_CONFIG.serviceId
    ),
    templateId: sanitizeEmailJsCredential(
      metaEnv.VITE_EMAILJS_TEMPLATE_ID,
      DEFAULT_EMAILJS_CONFIG.templateId
    ),
    publicKey: sanitizeEmailJsCredential(
      metaEnv.VITE_EMAILJS_PUBLIC_KEY,
      DEFAULT_EMAILJS_CONFIG.publicKey
    ),
  };
}

/**
 * Maps all QuoteForm fields to EmailJS template variables, supporting:
 * 1. Exact camelCase form field names (firstName, lastName, email, phone, zipCode, monthlyBill, systemInterest, consent)
 * 2. Snake_case template variable names (first_name, last_name, phone_number, zip_code, monthly_bill, system_interest)
 * 3. Standard EmailJS default template variable names (from_name, name, user_name, from_email, user_email, reply_to, title, subject, message, time)
 */
export function buildEmailJsTemplateParams(
  data: QuoteFormData,
  submittedAt: Date = new Date()
): Record<string, string> {
  const firstName = (data.firstName || '').trim();
  const lastName = (data.lastName || '').trim();
  const fullName = `${firstName} ${lastName}`.trim();
  const email = (data.email || '').trim();
  const phone = (data.phone || '').trim();
  const zipCode = (data.zipCode || '').trim();
  const monthlyBill = (data.monthlyBill || '$150 - $250').trim();
  const systemInterest = (data.systemInterest || 'Solar Panels + Battery Storage').trim();
  const consentText = data.consent
    ? 'Yes — Agreed to be contacted by phone or email regarding solar products and savings estimates'
    : 'No';
  const timestamp = submittedAt.toUTCString();
  const subject = `New Solar Quote Request: ${fullName} (ZIP ${zipCode})`;

  const formattedSummary = [
    `Customer Name: ${fullName}`,
    `First Name: ${firstName}`,
    `Last Name: ${lastName}`,
    `Email Address: ${email}`,
    `Phone Number: ${phone}`,
    `ZIP Code: ${zipCode}`,
    `Average Monthly Electric Bill: ${monthlyBill}`,
    `Solutions Interested In: ${systemInterest}`,
    `Contact Consent: ${consentText}`,
    `Submitted At: ${timestamp}`,
  ].join('\n');

  return {
    // Exact camelCase form field names
    firstName,
    lastName,
    email,
    phone,
    zipCode,
    monthlyBill,
    systemInterest,
    consent: consentText,

    // Snake_case template variable names
    first_name: firstName,
    last_name: lastName,
    full_name: fullName,
    phone_number: phone,
    user_phone: phone,
    customer_phone: phone,
    zip_code: zipCode,
    zip: zipCode,
    monthly_bill: monthlyBill,
    electric_bill: monthlyBill,
    average_monthly_bill: monthlyBill,
    system_interest: systemInterest,
    solutions_interested_in: systemInterest,
    solution: systemInterest,
    plan: systemInterest,
    consent_status: consentText,
    submitted_at: timestamp,

    // Standard EmailJS default template variable names
    name: fullName,
    from_name: fullName,
    user_name: fullName,
    customer_name: fullName,
    from_email: email,
    user_email: email,
    customer_email: email,
    reply_to: email,
    title: subject,
    subject,
    time: timestamp,
    date: timestamp,
    message: formattedSummary,
    notes: formattedSummary,
    details: formattedSummary,
  };
}

/**
 * Validates and dispatches the Request a Quote form submission via the official EmailJS SDK.
 * Confirms HTTP 200 acceptance from EmailJS before returning ok: true.
 */
export async function sendQuoteWithEmailJs(
  data: QuoteFormData,
  configOverride?: Partial<EmailJsConfig>,
  sendFn: typeof emailjs.send = emailjs.send
): Promise<EmailJsSendResult> {
  const validation = validateQuoteForm(data);
  if (!validation.isValid) {
    return {
      ok: false,
      status: 400,
      error: 'Please check the highlighted form fields and try again.',
      fieldErrors: validation.errors,
    };
  }

  const baseConfig = getEmailJsConfig();
  const config: EmailJsConfig = {
    serviceId: sanitizeEmailJsCredential(configOverride?.serviceId, baseConfig.serviceId),
    templateId: sanitizeEmailJsCredential(configOverride?.templateId, baseConfig.templateId),
    publicKey: sanitizeEmailJsCredential(configOverride?.publicKey, baseConfig.publicKey),
  };

  const templateParams = buildEmailJsTemplateParams(data);

  try {
    const response = await sendFn(
      config.serviceId,
      config.templateId,
      templateParams,
      {
        publicKey: config.publicKey,
      }
    );

    if (!response || response.status !== 200) {
      return {
        ok: false,
        status: response?.status || 502,
        error:
          'We could not confirm delivery of your quote request right now. Please try again or call us directly at 1 (331) 240-1092.',
      };
    }

    return {
      ok: true,
      status: response.status,
      text: response.text,
    };
  } catch (err: unknown) {
    const errText =
      typeof err === 'object' && err !== null && 'text' in err && typeof (err as { text?: unknown }).text === 'string'
        ? (err as { text: string }).text
        : err instanceof Error
          ? err.message
          : 'Unknown error';

    console.error('EmailJS quote submission failed:', errText);

    return {
      ok: false,
      status:
        typeof err === 'object' && err !== null && 'status' in err && typeof (err as { status?: unknown }).status === 'number'
          ? (err as { status: number }).status
          : 502,
      error:
        'We could not send your quote request right now. Please check your connection and try again, or call us directly at 1 (331) 240-1092.',
    };
  }
}
