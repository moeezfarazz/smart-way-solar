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
