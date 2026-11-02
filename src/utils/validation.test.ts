import test from 'node:test';
import assert from 'node:assert/strict';
import { validateQuoteForm, formatPhoneNumber, sanitizePricingPlans } from './validation';

test('validates correct quote form data', () => {
  const result = validateQuoteForm({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    phone: '2155551234',
    zipCode: '19104',
    consent: true,
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('catches missing required fields and invalid formats', () => {
  const result = validateQuoteForm({
    firstName: '',
    lastName: '',
    email: 'invalid-email',
    phone: '123',
    zipCode: '9021',
    consent: false,
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.firstName);
  assert.ok(result.errors.lastName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.zipCode);
  assert.ok(result.errors.consent);
});

test('formats phone numbers cleanly', () => {
  assert.equal(formatPhoneNumber('2155551234'), '(215) 555-1234');
  assert.equal(formatPhoneNumber('215'), '215');
});

test('ensures prepaid solar plan is strictly excluded', () => {
  const rawPlans = [
    { title: 'EZ Plan' },
    { title: 'Finance-to-own' },
    { title: 'Direct Purchase' },
    { title: 'Prepaid Solar Service' },
  ];

  const sanitized = sanitizePricingPlans(rawPlans);
  assert.equal(sanitized.length, 3);
  assert.equal(sanitized.some(p => p.title.toLowerCase().includes('prepaid')), false);
  assert.deepEqual(sanitized.map(p => p.title), ['EZ Plan', 'Finance-to-own', 'Direct Purchase']);
});

test('verifies exact 8 state sequence and absence of Massachusetts', async () => {
  const { SITE_CONFIG } = await import('../config/siteConfig');
  const expectedStates = [
    'Pennsylvania',
    'Maryland',
    'District of Columbia',
    'Virginia',
    'New York',
    'California',
    'New Jersey',
    'Texas'
  ];

  const actualStates = SITE_CONFIG.locations.map(l => l.name);
  assert.deepEqual(actualStates, expectedStates);

  const hasMassachusetts = SITE_CONFIG.locations.some(
    l => l.name.toLowerCase().includes('massachusetts') || l.slug.toLowerCase().includes('massachusetts')
  );
  assert.equal(hasMassachusetts, false);

  const maryland = SITE_CONFIG.locations.find(l => l.slug === 'maryland');
  assert.ok(maryland);
  assert.equal(maryland.abbreviation, 'MD');
  assert.ok(maryland.netMetering.includes('1-to-1'));
});

test('sanitizes EmailJS credentials and resolves default Smart Way Solar configuration', async () => {
  const { sanitizeEmailJsCredential, getEmailJsConfig } = await import('./emailjsClient');

  assert.equal(sanitizeEmailJsCredential('[template_r6p1hve]', 'fallback'), 'template_r6p1hve');
  assert.equal(sanitizeEmailJsCredential(' [K0e2EXst9c1gjtNyz] ', 'fallback'), 'K0e2EXst9c1gjtNyz');

  const config = getEmailJsConfig({});
  assert.equal(config.serviceId, 'service_s6cygum');
  assert.equal(config.templateId, 'template_r6p1hve');
  assert.equal(config.publicKey, 'K0e2EXst9c1gjtNyz');
});

test('maps every QuoteForm field to camelCase, snake_case, and standard EmailJS template variables', async () => {
  const { buildEmailJsTemplateParams } = await import('./emailjsClient');

  const params = buildEmailJsTemplateParams(
    {
      firstName: 'Alex',
      lastName: 'Rivera',
      email: 'alex.rivera@customer.org',
      phone: '(215) 555-0199',
      zipCode: '19104',
      monthlyBill: '$250 - $400',
      systemInterest: 'Solar Panels + Battery Storage',
      consent: true,
    },
    new Date('2026-11-01T12:00:00Z')
  );

  // CamelCase form fields
  assert.equal(params.firstName, 'Alex');
  assert.equal(params.lastName, 'Rivera');
  assert.equal(params.email, 'alex.rivera@customer.org');
  assert.equal(params.phone, '(215) 555-0199');
  assert.equal(params.zipCode, '19104');
  assert.equal(params.monthlyBill, '$250 - $400');
  assert.equal(params.systemInterest, 'Solar Panels + Battery Storage');

  // Snake_case & standard EmailJS template variables
  assert.equal(params.first_name, 'Alex');
  assert.equal(params.last_name, 'Rivera');
  assert.equal(params.full_name, 'Alex Rivera');
  assert.equal(params.name, 'Alex Rivera');
  assert.equal(params.from_name, 'Alex Rivera');
  assert.equal(params.user_name, 'Alex Rivera');
  assert.equal(params.from_email, 'alex.rivera@customer.org');
  assert.equal(params.user_email, 'alex.rivera@customer.org');
  assert.equal(params.reply_to, 'alex.rivera@customer.org');
  assert.equal(params.phone_number, '(215) 555-0199');
  assert.equal(params.zip_code, '19104');
  assert.equal(params.monthly_bill, '$250 - $400');
  assert.equal(params.system_interest, 'Solar Panels + Battery Storage');
  assert.ok(params.message.includes('Alex Rivera'));
  assert.ok(params.message.includes('(215) 555-0199'));
  assert.ok(params.message.includes('19104'));
  assert.ok(params.message.includes('$250 - $400'));
  assert.ok(params.message.includes('Solar Panels + Battery Storage'));
});

test('confirms EmailJS status 200 before returning ok: true and handles errors cleanly', async () => {
  const { sendQuoteWithEmailJs } = await import('./emailjsClient');

  const validSubmission = {
    firstName: 'Alex',
    lastName: 'Rivera',
    email: 'alex.rivera@customer.org',
    phone: '(215) 555-0199',
    zipCode: '19104',
    monthlyBill: '$250 - $400',
    systemInterest: 'Solar Panels + Battery Storage',
    consent: true,
  };

  let capturedCall: {
    serviceId: string;
    templateId: string;
    params?: Record<string, unknown>;
    options?: unknown;
  } | null = null;

  const mockSendSuccess = async (
    serviceId: string,
    templateId: string,
    params?: Record<string, unknown>,
    options?: unknown
  ) => {
    capturedCall = { serviceId, templateId, params, options };
    return { status: 200, text: 'OK' };
  };

  const successResult = await sendQuoteWithEmailJs(validSubmission, undefined, mockSendSuccess);
  assert.equal(successResult.ok, true);
  assert.equal(successResult.status, 200);
  assert.equal(successResult.text, 'OK');
  assert.ok(capturedCall);
  assert.equal((capturedCall as { serviceId: string }).serviceId, 'service_s6cygum');
  assert.equal((capturedCall as { templateId: string }).templateId, 'template_r6p1hve');
  assert.deepEqual((capturedCall as { options: unknown }).options, {
    publicKey: 'K0e2EXst9c1gjtNyz',
  });

  const mockSendError = async () => {
    throw { status: 400, text: 'Template not found' };
  };

  const failureResult = await sendQuoteWithEmailJs(validSubmission, undefined, mockSendError);
  assert.equal(failureResult.ok, false);
  assert.equal(failureResult.status, 400);
  assert.ok(failureResult.error);
});


