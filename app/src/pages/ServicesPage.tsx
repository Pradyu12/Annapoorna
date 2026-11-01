import React, { useState } from 'react';
import { SERVICES_CATALOG, type ServiceItem } from '../data/services';

interface ServicesPageProps {
  navigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ navigate }) => {
  const [selectedService, setSelectedService] = useState<string>(SERVICES_CATALOG[0].id);

  const handleRequestServiceQuote = (service: ServiceItem) => {
    navigate(`#/quote?category=${encodeURIComponent(service.name)}&requirement=${encodeURIComponent('Facility service requirement: ' + service.name)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-12 bg-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="border-b border-[#ECECEC] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F7F7F7] border border-[#ECECEC] text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-3">
            Integrated Facility Services
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252525] mb-4">
            Professional Facility Management & Maintenance
          </h1>
          <p className="text-sm sm:text-base text-[#707070] max-w-3xl leading-relaxed">
            Seven dedicated service disciplines delivered under strict SLA governance, background-verified personnel, and single-point vendor accountability across Bengaluru and Karnataka sites.
          </p>

          {/* Delineation Notice */}
          <div className="mt-6 p-4 rounded-lg bg-[#F7F7F7] border-l-4 border-l-[#C8102E] border-t border-r border-b border-[#ECECEC] text-xs text-[#252525]">
            <strong className="font-bold">Clear Operational Distinction:</strong> Annapoorna Enterprises provides direct supply fulfilment of physical consumables and also coordinates hands-on, SLA-governed technical manpower services. Our service teams utilize commercial-grade chemicals and machinery sourced through our own supply chain.
          </div>
        </div>

        {/* Quick Nav Anchors */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" aria-label="Quick jump to service">
          {SERVICES_CATALOG.map((srv) => (
            <button
              key={srv.id}
              type="button"
              onClick={() => {
                setSelectedService(srv.id);
                const el = document.getElementById(srv.id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                selectedService === srv.id
                  ? 'bg-[#252525] text-white'
                  : 'bg-[#F7F7F7] text-[#252525] hover:bg-[#ECECEC]'
              }`}
            >
              {srv.name.replace(' Services', '').replace(' Solutions', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Services Detail List */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {SERVICES_CATALOG.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            className="pt-6 scroll-mt-28 border-b border-[#ECECEC] pb-16 last:border-b-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Image & Quick Info */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-[#ECECEC] shadow-sm bg-[#252525]">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-72 sm:h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#252525]/85 backdrop-blur text-xs font-bold text-white">
                    Service Line 0{idx + 1}
                  </div>
                </div>

                <div className="mt-6 p-5 bg-[#F7F7F7] rounded-xl border border-[#ECECEC]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C8102E] block mb-2">
                    Commercial SLA Guarantee
                  </span>
                  <p className="text-xs text-[#707070] leading-relaxed mb-4">
                    Deployable on recurring monthly maintenance contracts, planned periodic rotations, or documented corporate tender schedules.
                  </p>
                  <button
                    type="button"
                    onClick={() => handleRequestServiceQuote(service)}
                    className="w-full py-2.5 rounded-lg bg-[#C8102E] hover:bg-[#A30D25] text-white text-xs font-bold transition-colors"
                  >
                    Enquire for {service.name}
                  </button>
                </div>
              </div>

              {/* Details & Scope */}
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E] block mb-1">
                  Scope & Disciplines
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] mb-4">
                  {service.name}
                </h2>
                <p className="text-sm text-[#707070] leading-relaxed mb-6">
                  {service.overview}
                </p>

                {/* Scope of Service */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#252525] mb-3">
                    Detailed Scope of Work:
                  </h3>
                  <div className="space-y-2">
                    {service.scopeOfService.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252525]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mt-2 shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Benefits */}
                <div className="p-4 rounded-xl bg-white border border-[#ECECEC] shadow-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#252525] mb-2.5">
                    Strategic Business Benefits:
                  </h3>
                  <ul className="space-y-1.5 text-xs text-[#707070]">
                    {service.businessBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
