import React from 'react';
import { COMPANY_INFO } from '../data/company';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="py-12 bg-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="border-b border-[#ECECEC] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F7F7F7] border border-[#ECECEC] text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-3">
            Company Profile & Heritage
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252525] mb-4">
            About Annapoorna Enterprises
          </h1>
          <p className="text-sm sm:text-base text-[#707070] max-w-3xl leading-relaxed">
            Established in 1998, Annapoorna Enterprises has grown into one of Bengaluru’s most reliable B2B supply and integrated facility solution partners, serving leading enterprises across Karnataka.
          </p>
        </div>
      </div>

      {/* Main Narrative */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-[#252525] text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-[#252525] mb-3">
                Over Two Decades of B2B Supply-Chain Stability
              </h2>
              <p className="text-[#707070]">
                Annapoorna Enterprises was founded in 1998 in JP Nagar, Bengaluru, by Shashi Kumar Mariyappa and Satish Kumar Mariyappa. Originating as a specialized hygiene and commercial consumable distributor, the firm progressively expanded its operational reach to meet the evolving demands of Karnataka's booming IT, manufacturing, healthcare, and corporate sectors.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#252525] mb-2">
                Our Business Philosophy
              </h3>
              <p className="text-[#707070]">
                Corporate facilities cannot afford downtime, delayed dispatches, or substandard consumables. Our operational philosophy is anchored in three non-negotiable principles:
              </p>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#252525]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mt-2 shrink-0"></span>
                  <span><strong>Zero Spec Deviation:</strong> We supply verified manufacturer grades without substituting inferior materials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mt-2 shrink-0"></span>
                  <span><strong>Disciplined Logistics:</strong> Scheduled deliveries coordinated from our strategic warehousing nodes directly to client loading docks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mt-2 shrink-0"></span>
                  <span><strong>Single-Point Accountability:</strong> One consolidated quotation and account management team covering both materials and facility technicians.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#252525] mb-2">
                Infrastructure & Redistribution Reach
              </h3>
              <p className="text-[#707070]">
                Backed by in-house warehousing, dedicated delivery fleets, and experienced procurement personnel, Annapoorna manages routine supply cycles across Greater Bengaluru and extended industrial corridors throughout Karnataka. We participate in corporate annual rate contracts (ARCs) as well as documented public and private tenders.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl overflow-hidden border border-[#ECECEC] shadow-sm bg-[#252525]">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Warehousing and Logistics Facility"
                className="w-full h-72 object-cover"
              />
            </div>

            <div className="p-6 bg-[#F7F7F7] rounded-xl border border-[#ECECEC]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-3">
                Corporate Factsheet
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#ECECEC]">
                  <span className="text-[#707070]">Official Name:</span>
                  <span className="font-bold text-[#252525]">{COMPANY_INFO.legalName}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#ECECEC]">
                  <span className="text-[#707070]">Founded:</span>
                  <span className="font-bold text-[#252525]">{COMPANY_INFO.establishedYear}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#ECECEC]">
                  <span className="text-[#707070]">Headquarters:</span>
                  <span className="font-bold text-[#252525]">JP Nagar 6th Phase, Bengaluru</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#ECECEC]">
                  <span className="text-[#707070]">Service Territory:</span>
                  <span className="font-bold text-[#252525]">Bengaluru & Karnataka-wide</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#ECECEC]">
                  <span className="text-[#707070]">Core Divisions:</span>
                  <span className="font-bold text-[#252525]">Products Supply & Facility Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="pt-12 border-t border-[#ECECEC] mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E] block mb-1">
              Core Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525]">
              Product and Service Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-[#ECECEC] bg-[#F7F7F7]">
              <div className="w-10 h-10 rounded-lg bg-[#C8102E] text-white flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-[#252525] mb-2">
                Consolidated Products Supply
              </h3>
              <p className="text-xs text-[#707070] leading-relaxed">
                Direct distribution of cleaning chemicals, washroom tissue, breakroom beverages, industrial packaging, and anti-fatigue matting.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#ECECEC] bg-[#F7F7F7]">
              <div className="w-10 h-10 rounded-lg bg-[#C8102E] text-white flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-[#252525] mb-2">
                Coordinated Facility Services
              </h3>
              <p className="text-xs text-[#707070] leading-relaxed">
                SLA-driven technical personnel for routine housekeeping, pest eradication, low-voltage electrical work, plumbing, and horticulture.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#ECECEC] bg-[#F7F7F7]">
              <div className="w-10 h-10 rounded-lg bg-[#C8102E] text-white flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-[#252525] mb-2">
                Tender & ARC Compliance
              </h3>
              <p className="text-xs text-[#707070] leading-relaxed">
                Documented, compliant supply agreements with complete invoicing integrity, GST compliance, and audit-ready tracking.
              </p>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="bg-[#252525] rounded-xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Ready to streamline your facility supplies?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl">
              Connect with our JP Nagar corporate office to schedule an operational requirement review.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => {
                navigate('#/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-lg bg-[#C8102E] hover:bg-[#A30D25] text-white text-xs font-bold transition-colors"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
