export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  monthlyBill?: string;
  systemInterest?: string;
  consent: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateQuoteForm(data: Partial<QuoteFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.firstName || !data.firstName.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!data.lastName || !data.lastName.trim()) {
    errors.lastName = 'Last name is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !data.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  const cleanPhone = (data.phone || '').replace(/\D/g, '');
  if (!data.phone || !data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (cleanPhone.length < 10) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }

  const zipRegex = /^\d{5}$/;
  if (!data.zipCode || !data.zipCode.trim()) {
    errors.zipCode = 'ZIP code is required';
  } else if (!zipRegex.test(data.zipCode.trim())) {
    errors.zipCode = 'Please enter a valid 5-digit ZIP code';
  }

  if (!data.consent) {
    errors.consent = 'You must agree to the terms to receive a quote';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function sanitizePricingPlans<T extends { title: string }>(plans: T[]): T[] {
  return plans.filter(p => !p.title.toLowerCase().includes('prepaid'));
}
