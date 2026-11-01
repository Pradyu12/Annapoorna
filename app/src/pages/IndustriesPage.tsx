import React from 'react';
import { INDUSTRIES_SERVED } from '../data/industries';

interface IndustriesPageProps {
  navigate: (path: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ navigate }) => {
  return (
    <div className="py-12 bg-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="border-b border-[#ECECEC] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F7F7F7] border border-[#ECECEC] text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-3">
            Industry Capabilities
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252525] mb-4">
            Industries & Sectors We Serve
          </h1>
          <p className="text-sm sm:text-base text-[#707070] max-w-3xl leading-relaxed">
            Every sector operates under distinct hygiene compliance, material safety, and procurement constraints. Annapoorna aligns product specifications and facility protocols to each industry’s operational demands.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_SERVED.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-xl border border-[#ECECEC] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="relative h-48 bg-[#252525] overflow-hidden">
                  <img
                    src={ind.imageUrl}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/80 via-transparent to-transparent"></div>
                  <h3 className="absolute bottom-3 left-4 text-base font-bold text-white">
                    {ind.name}
                  </h3>
                </div>

                <div className="p-5">
                  <p className="text-xs text-[#707070] leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  <div className="border-t border-[#ECECEC] pt-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#252525] block mb-2">
                      Key Sector Demands:
                    </span>
                    <ul className="space-y-1 text-xs text-[#707070]">
                      {ind.keyDemands.map((demand) => (
                        <li key={demand} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></span>
                          <span>{demand}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => {
                    navigate(`#/quote?category=${encodeURIComponent(ind.name)}&requirement=${encodeURIComponent('Industry-specific supply scope for ' + ind.name)}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 rounded-lg border border-[#ECECEC] hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white text-[#252525] font-bold text-xs transition-colors"
                >
                  Consult for {ind.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
