import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { INDUSTRIES_SERVED } from '../data/industries';
import { EnquiryForm } from '../components/EnquiryForm';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col bg-white">
      {/* 1. PROFESSIONAL CORPORATE HERO SECTION */}
      <section className="relative bg-[#FAFAFA] border-b border-slate-200 overflow-hidden bg-grid-pattern">
        {/* Subtle radial glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-300 text-xs font-semibold text-slate-700 shadow-xs mb-6">
                <span className="w-2 h-2 rounded-full bg-[#C8102E]"></span>
                <span className="font-bold text-[#1E1E1E]">Established 1998</span>
                <span className="text-slate-300">·</span>
                <span>Bengaluru B2B Supply & Facility Partner</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#1E1E1E] tracking-tight leading-[1.15] mb-6">
                Your Trusted Partner in{' '}
                <span className="text-[#C8102E]">Hygiene, Facility & Industrial Supplies.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
                {COMPANY_INFO.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleNav('#/products')}
                  className="px-7 py-3.5 rounded-md bg-[#C8102E] hover:bg-[#A30D25] text-white text-sm font-bold shadow-sm transition-all duration-150 hover:shadow-md flex items-center gap-2"
                >
                  <span>Explore Our Solutions</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('#/quote')}
                  className="px-7 py-3.5 rounded-md bg-white hover:bg-slate-50 border border-slate-300 text-[#1E1E1E] text-sm font-bold shadow-xs transition-all duration-150"
                >
                  Request a Quote
                </button>
              </div>

              {/* Verified Trust Metrics Bar */}
              <div className="mt-12 pt-8 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-slate-600">
                <div className="border-l-2 border-[#C8102E] pl-3">
                  <strong className="block text-[#1E1E1E] text-lg font-extrabold">1998</strong>
                  <span className="text-slate-500 font-medium">Founded in Bengaluru</span>
                </div>
                <div className="border-l-2 border-[#C8102E] pl-3">
                  <strong className="block text-[#1E1E1E] text-lg font-extrabold">7 Areas</strong>
                  <span className="text-slate-500 font-medium">Product Categories</span>
                </div>
                <div className="border-l-2 border-[#C8102E] pl-3">
                  <strong className="block text-[#1E1E1E] text-lg font-extrabold">7 Services</strong>
                  <span className="text-slate-500 font-medium">Facility Solutions</span>
                </div>
                <div className="border-l-2 border-[#C8102E] pl-3">
                  <strong className="block text-[#1E1E1E] text-lg font-extrabold">Direct B2B</strong>
                  <span className="text-slate-500 font-medium">Account Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Grade Corporate Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm relative">
                {/* Visual header */}
                <div className="relative rounded-lg overflow-hidden h-52 mb-6 border border-slate-100 bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                    alt="Annapoorna Corporate Facility and Operations"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-bold tracking-wide">JP Nagar Corporate Facility</span>
                    <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur text-[10px] uppercase font-bold">Karnataka</span>
                  </div>
                </div>

                {/* Quick Procurement Support Box */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Corporate Account Desk</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Accepting RFQs
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct access for facility managers and procurement officers requiring contract supply schedules, GST documentation, or facility maintenance scopes.
                  </p>

                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80 space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Corporate Hotline</div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 font-bold text-sm text-[#1E1E1E]">
                      <a href={`tel:${COMPANY_INFO.contact.phoneRaw1}`} className="hover:text-[#C8102E] transition-colors">
                        {COMPANY_INFO.contact.primaryPhone}
                      </a>
                      <span className="hidden sm:inline text-slate-300">/</span>
                      <a href={`tel:${COMPANY_INFO.contact.phoneRaw2}`} className="hover:text-[#C8102E] transition-colors">
                        {COMPANY_INFO.contact.secondaryPhone}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleNav('#/contact')}
                    className="w-full py-2.5 rounded-md bg-[#1E1E1E] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Contact Procurement Desk
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                  alt="Annapoorna Corporate Facility Environment"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1E1E1E] to-transparent p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">Corporate Heritage</span>
                  <p className="text-sm font-semibold mt-1">Founded in 1998 in JP Nagar, Bengaluru</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 rounded text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-3">
                Company Introduction
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1E1E] leading-tight mb-5">
                {COMPANY_INFO.introHeading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Annapoorna Enterprises is a premier Bengaluru-based B2B supply and facility management partner established in 1998. We specialize in providing comprehensive commercial supplies and dependable operational services to corporate offices, IT campuses, industrial factories, healthcare institutions, and hospitality venues across Karnataka.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Rather than juggling multiple fragmented vendors for cleaning consumables, breakroom pantry provisions, industrial packaging, and facility technicians, procurement teams rely on Annapoorna as a single accountable partner with transparent pricing, disciplined delivery schedules, and verified product specifications.
              </p>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {COMPANY_INFO.capabilities.slice(0, 4).map((cap) => (
                  <div key={cap.title} className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#C8102E]"></span>
                      <h4 className="text-sm font-bold text-[#1E1E1E]">{cap.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleNav('#/about')}
                  className="px-6 py-2.5 rounded-md bg-[#1E1E1E] hover:bg-black text-white text-xs font-bold transition-colors"
                >
                  Learn More About Annapoorna
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('#/services')}
                  className="px-6 py-2.5 rounded-md border border-slate-300 hover:border-[#C8102E] text-[#1E1E1E] hover:text-[#C8102E] text-xs font-bold transition-colors"
                >
                  View Facility Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS CATEGORIES SECTION */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E] block mb-2">
              Three Distinct Divisions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1E1E]">
              Integrated Business Categories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Structured capabilities designed to fulfill recurring procurement needs and hands-on facility maintenance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_INFO.businessCategories.map((cat, idx) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <img
                      src={cat.imageUrl}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#1E1E1E]/80 backdrop-blur text-[11px] font-bold text-white">
                      Division 0{idx + 1}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#1E1E1E] group-hover:text-[#C8102E] transition-colors mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {cat.desc}
                    </p>

                    <div className="border-t border-slate-200 pt-4 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        Key Capabilities:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {cat.offerings.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleNav(cat.route)}
                    className="w-full py-2.5 rounded-md border border-slate-300 group-hover:border-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white text-[#1E1E1E] font-bold text-xs transition-all duration-150 flex items-center justify-center gap-2"
                  >
                    <span>Explore More</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE ANNAPOORNA? (EDITORIAL ENTERPRISE LAYOUT) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E] block mb-2">
              Competitive Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1E1E]">
              Why Leading Procurement Teams Choose Annapoorna
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              We structure our operations around the accountability, regulatory compliance, and consistency that enterprise organizations demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_INFO.whyChooseUs.map((reason, index) => (
              <div
                key={reason.title}
                className="p-6 rounded-lg border-l-4 border-l-[#C8102E] border-t border-r border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors"
              >
                <div className="text-xs font-extrabold text-[#C8102E] mb-2 tracking-wider">
                  0{index + 1}
                </div>
                <h3 className="text-base font-bold text-[#1E1E1E] mb-2">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E] block mb-2">
                Target Sectors
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1E1E]">
                Industries We Serve
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                Tailored supply coordination and facilities support matching the distinct operational standards of diverse commercial sectors.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleNav('#/industries')}
              className="mt-4 md:mt-0 text-xs font-bold text-[#C8102E] hover:underline flex items-center gap-1.5"
            >
              View Detailed Sector Profiles
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES_SERVED.slice(0, 7).map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-md transition-shadow"
              >
                <div className="h-40 overflow-hidden relative bg-slate-900">
                  <img
                    src={ind.imageUrl}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <h4 className="absolute bottom-3 left-3 text-sm font-bold text-white">
                    {ind.name}
                  </h4>
                </div>
                <div className="p-4">
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {ind.headline}
                  </p>
                </div>
              </div>
            ))}

            {/* Custom CTA card for 8th slot */}
            <div className="bg-[#1E1E1E] text-white rounded-xl p-6 flex flex-col justify-between border border-[#1E1E1E]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8102E] block mb-2">
                  Multi-Site Facilities
                </span>
                <h4 className="text-base font-bold text-white mb-2">
                  Need a Customized Supply Scope?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We formulate custom procurement schedules and dedicated account management for multi-location enterprises.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleNav('#/contact')}
                className="mt-6 w-full py-2.5 bg-[#C8102E] hover:bg-[#A30D25] text-white rounded-md text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Speak with Account Manager
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR SUPPLY PROCESS (HORIZONTAL TIMELINE ON DESKTOP, VERTICAL ON MOBILE) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E] block mb-2">
              Disciplined Coordination
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1E1E]">
              Our Four-Step Supply Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              From requirement definition to ongoing scheduled replenishment, our framework guarantees reliability at every stage.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-slate-200 z-0"></div>

            {COMPANY_INFO.supplyProcess.map((step) => (
              <div key={step.step} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#C8102E] text-[#C8102E] font-extrabold text-base flex items-center justify-center mb-4 shadow-xs">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-[#1E1E1E] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT AND LEAD GENERATION SECTION */}
      <section id="quote-section" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E] block mb-2">
                Bengaluru Procurement Desk
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1E1E] mb-4">
                Partner with Annapoorna Enterprises
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Whether you need scheduled cleaning chemicals, breakroom supplies, anti-fatigue matting, or an integrated team for commercial housekeeping and maintenance, share your details below.
              </p>

              {/* Verified Contact Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 mb-6 shadow-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Office Location</span>
                  <p className="text-sm font-semibold text-[#1E1E1E] mt-0.5">
                    JP Nagar, 6th Phase, Bengaluru, Karnataka, India
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Direct Contact Numbers</span>
                  <div className="flex flex-col text-sm font-semibold text-[#1E1E1E] mt-0.5">
                    <a href={`tel:${COMPANY_INFO.contact.phoneRaw1}`} className="hover:text-[#C8102E] transition-colors">
                      {COMPANY_INFO.contact.primaryPhone}
                    </a>
                    <a href={`tel:${COMPANY_INFO.contact.phoneRaw2}`} className="hover:text-[#C8102E] transition-colors">
                      {COMPANY_INFO.contact.secondaryPhone}
                    </a>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Official Email</span>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-sm font-semibold text-[#C8102E] hover:underline block mt-0.5">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-slate-200 text-xs text-slate-600">
                <strong className="text-slate-800">Procurement Notice:</strong> We do not fabricate pricing or product stock. Quotations are formally itemized and aligned directly with verified manufacturer batches.
              </div>
            </div>

            <div className="lg:col-span-7">
              <EnquiryForm source="Homepage Consultation Form" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
