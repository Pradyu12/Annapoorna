import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { EnquiryForm } from '../components/EnquiryForm';

interface ContactPageProps {
  navigate: (path: string) => void;
  initialCategory?: string;
  initialRequirement?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialCategory = 'Cleaning Supplies',
  initialRequirement = '',
}) => {
  return (
    <div className="py-12 bg-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="border-b border-[#ECECEC] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F7F7F7] border border-[#ECECEC] text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-3">
            Corporate Contact & Enquiries
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252525] mb-4">
            Connect with Annapoorna Enterprises
          </h1>
          <p className="text-sm sm:text-base text-[#707070] max-w-3xl leading-relaxed">
            Headquartered in JP Nagar, Bengaluru. Reach out to our procurement coordinators for product quotations, enterprise supply agreements, or integrated facility service assessments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Verified Contact Details & Map Integration */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F7F7F7] rounded-xl border border-[#ECECEC] p-6 space-y-6">
              <h2 className="text-lg font-bold text-[#252525] border-b border-[#ECECEC] pb-3">
                Verified Business Information
              </h2>

              {/* Physical Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#ECECEC] text-[#C8102E] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#707070] block">Corporate Headquarters</span>
                  <p className="text-sm font-semibold text-[#252525] mt-0.5">
                    JP Nagar, 6th Phase, Bengaluru, Karnataka, India
                  </p>
                  <span className="text-xs text-[#707070] mt-0.5 block">Serving facilities across Bengaluru & Karnataka</span>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#ECECEC] text-[#C8102E] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#707070] block">Direct Telephone Lines</span>
                  <div className="flex flex-col text-sm font-semibold text-[#252525] mt-0.5">
                    <a href={`tel:${COMPANY_INFO.contact.phoneRaw1}`} className="hover:text-[#C8102E] transition-colors">
                      {COMPANY_INFO.contact.primaryPhone}
                    </a>
                    <a href={`tel:${COMPANY_INFO.contact.phoneRaw2}`} className="hover:text-[#C8102E] transition-colors">
                      {COMPANY_INFO.contact.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#ECECEC] text-[#C8102E] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#707070] block">Official Email</span>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-sm font-semibold text-[#C8102E] hover:underline mt-0.5 block">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Map Integration Card */}
            <div className="bg-white rounded-xl border border-[#ECECEC] p-6 shadow-sm">
              <h3 className="text-sm font-bold text-[#252525] mb-2">Location & Routing</h3>
              <p className="text-xs text-[#707070] mb-4">
                Our operations and logistics base is strategically positioned in JP Nagar, enabling rapid dispatch across Outer Ring Road, Electronic City, Whitefield, Peenya, and Bidadi corridors.
              </p>
              <a
                href={COMPANY_INFO.location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#252525] hover:bg-black text-white text-xs font-bold transition-colors"
              >
                <span>Open JP Nagar Location in Google Maps</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Business Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm
              defaultCategory={initialCategory}
              defaultRequirement={initialRequirement}
              source="Contact Page Enquiry Desk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
