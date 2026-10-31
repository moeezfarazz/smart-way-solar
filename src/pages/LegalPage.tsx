import React from 'react';
import { useLocation } from 'react-router-dom';

export const LegalPage: React.FC = () => {
  const location = useLocation();

  let title = 'Privacy Policy';
  let content = (
    <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
      <p>
        At Smart Way Solar LLC, we respect your privacy and are committed to protecting personal information provided through our website. This policy explains how we collect, use, and safeguard your details when requesting solar quotes and service information.
      </p>
      <h3 className="text-base font-bold text-gray-900 pt-2">Information We Collect</h3>
      <p>
        When you submit an estimate or quote inquiry, we collect information including your name, contact phone number, email address, property ZIP code, and approximate monthly electric bills. This information is utilized solely to calculate satellite solar feasibility and provide an accurate proposal.
      </p>
      <h3 className="text-base font-bold text-gray-900 pt-2">No Sale of Personal Data</h3>
      <p>
        Smart Way Solar never sells, rents, or distributes your contact details to third-party telemarketers or lead aggregators. Your information is held securely by our in-house advisory staff.
      </p>
    </div>
  );

  if (location.pathname === '/terms-of-use') {
    title = 'Terms of Use';
    content = (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <p>
          Welcome to the Smart Way Solar website. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
        </p>
        <h3 className="text-base font-bold text-gray-900 pt-2">Solar Estimates & Financing Terms</h3>
        <p>
          Calculations, incentive numbers, and estimated savings presented on this website are for illustrative and educational purposes based on prevailing regional utility rates and typical solar production curves. Final terms, monthly lease or loan amounts, and production guarantees are formalized in official engineering site survey agreements.
        </p>
        <h3 className="text-base font-bold text-gray-900 pt-2">Intellectual Property</h3>
        <p>
          All trademarks, service marks, copy, layouts, and logos are the property of Smart Way Solar LLC.
        </p>
      </div>
    );
  } else if (location.pathname === '/accessibility') {
    title = 'Accessibility Statement';
    content = (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <p>
          Smart Way Solar is committed to ensuring digital accessibility for people of all abilities. We continually improve the user experience for everyone and apply relevant accessibility standards, following WCAG 2.1 AA guidelines.
        </p>
        <h3 className="text-base font-bold text-gray-900 pt-2">Keyboard Navigation & Contrast</h3>
        <p>
          Our interface is built using semantic HTML, accessible ARIA disclosures, sufficient color contrast, and visible keyboard focus rings across all forms, selectors, and dropdown navigation menus.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mb-6">{title}</h1>
        <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
          {content}
        </div>
      </div>
    </div>
  );
};
