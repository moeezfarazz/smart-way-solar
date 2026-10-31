import React from 'react';
import { Check, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingTable: React.FC = () => {
  const rows = [
    {
      feature: 'Upfront Payment',
      ez: '$0 down*',
      finance: '$0 down*',
      purchase: 'Full system cost',
    },
    {
      feature: 'System Ownership',
      ez: 'Smart Way Solar',
      finance: 'You (100% Homeowner)',
      purchase: 'You (100% Homeowner)',
    },
    {
      feature: 'Monthly Solar Payment',
      ez: 'Low predictable lease payment',
      finance: 'Fixed financing payment',
      purchase: 'None ($0 / month)',
    },
    {
      feature: 'Payment Terms',
      ez: 'Monthly subscription agreement',
      finance: '5 – 25 flexible years',
      purchase: 'None (Completed at install)',
    },
    {
      feature: 'Federal 30% Tax Credit',
      ez: 'Reflected in low monthly rate',
      finance: 'Directly received by you',
      purchase: 'Directly received by you',
    },
    {
      feature: 'State & Local Incentives / SRECs',
      ez: 'Included in plan value',
      finance: 'Kept 100% by homeowner',
      purchase: 'Kept 100% by homeowner',
    },
    {
      feature: 'Care, Maintenance & Inverter Service',
      ez: true,
      finance: true,
      purchase: true,
    },
    {
      feature: '24/7 Energy Monitoring App',
      ez: true,
      finance: true,
      purchase: true,
    },
    {
      feature: '25-Year Complete System Warranty',
      ez: true,
      finance: true,
      purchase: true,
    },
    {
      feature: 'Roof Penetration Guarantee',
      ez: true,
      finance: true,
      purchase: true,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight">
            Solar System Pricing & Comparison
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Compare all three Smart Way Solar financing pathways side-by-side to determine which solution best aligns with your financial strategy.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-gray-50/90 border-b border-gray-200">
                <th className="py-5 px-6 text-sm font-bold text-gray-900 w-1/4">
                  Plan Feature
                </th>
                <th className="py-5 px-6 text-sm font-bold text-gray-900 w-1/4">
                  <div className="text-lg font-bold text-gray-950">EZ Plan</div>
                  <div className="text-xs font-normal text-gray-600 mt-0.5">Lease / PPA</div>
                </th>
                <th className="py-5 px-6 text-sm font-bold text-teal-800 w-1/4 bg-teal-50/50">
                  <div className="text-lg font-bold text-teal-900">Finance-to-own</div>
                  <div className="text-xs font-normal text-teal-700 mt-0.5">Flexible Loan</div>
                </th>
                <th className="py-5 px-6 text-sm font-bold text-gray-900 w-1/4">
                  <div className="text-lg font-bold text-gray-950">Direct Purchase</div>
                  <div className="text-xs font-normal text-gray-600 mt-0.5">Cash / Equity</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}
                >
                  <td className="py-4 px-6 font-semibold text-gray-800">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    {typeof row.ez === 'boolean' ? (
                      <span className="inline-flex items-center gap-1.5 font-medium text-teal-700">
                        <Check className="w-4 h-4 text-teal-600" />
                        <span>Included</span>
                      </span>
                    ) : (
                      row.ez
                    )}
                  </td>
                  <td className="py-4 px-6 text-teal-950 bg-teal-50/20 font-medium">
                    {typeof row.finance === 'boolean' ? (
                      <span className="inline-flex items-center gap-1.5 font-medium text-teal-700">
                        <Check className="w-4 h-4 text-teal-600" />
                        <span>Included</span>
                      </span>
                    ) : (
                      row.finance
                    )}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    {typeof row.purchase === 'boolean' ? (
                      <span className="inline-flex items-center gap-1.5 font-medium text-teal-700">
                        <Check className="w-4 h-4 text-teal-600" />
                        <span>Included</span>
                      </span>
                    ) : (
                      row.purchase
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50/90 border-t border-gray-200">
                <td className="py-5 px-6 font-semibold text-gray-700 text-xs">
                  Ready to explore your numbers?
                </td>
                <td className="py-5 px-6">
                  <Link
                    to="/get-a-quote"
                    className="inline-flex items-center text-xs font-bold text-teal-700 hover:text-teal-800"
                  >
                    <span>Get EZ Plan Quote</span>
                    <LinkIcon className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </td>
                <td className="py-5 px-6 bg-teal-50/40">
                  <Link
                    to="/get-a-quote"
                    className="inline-flex items-center text-xs font-bold text-teal-800 hover:text-teal-900"
                  >
                    <span>Get Financing Quote</span>
                    <LinkIcon className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </td>
                <td className="py-5 px-6">
                  <Link
                    to="/get-a-quote"
                    className="inline-flex items-center text-xs font-bold text-teal-700 hover:text-teal-800"
                  >
                    <span>Get Purchase Quote</span>
                    <LinkIcon className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};
