import React from 'react';

interface NotFoundPageProps {
  navigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ navigate }) => {
  return (
    <div className="py-20 bg-white min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#F7F7F7] border border-[#ECECEC] text-[#C8102E] font-extrabold text-2xl flex items-center justify-center mx-auto mb-4">
          404
        </div>
        <h1 className="text-2xl font-extrabold text-[#252525] mb-2">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-[#707070] leading-relaxed mb-6">
          The requested page could not be located in the Annapoorna Enterprises corporate directory. You can return to our homepage or explore our product and service catalogues.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              navigate('#/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-lg bg-[#C8102E] hover:bg-[#A30D25] text-white text-xs font-bold transition-colors"
          >
            Return to Homepage
          </button>
          <button
            type="button"
            onClick={() => {
              navigate('#/products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-lg border border-[#ECECEC] text-[#252525] text-xs font-bold hover:bg-[#F7F7F7] transition-colors"
          >
            Browse Products
          </button>
        </div>
      </div>
    </div>
  );
};
