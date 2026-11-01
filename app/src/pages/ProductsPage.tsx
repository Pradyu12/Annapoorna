import React, { useState, useMemo } from 'react';
import { PRODUCT_CATEGORIES, PRODUCTS_CATALOG, type ProductItem } from '../data/products';

interface ProductsPageProps {
  navigate: (path: string) => void;
  initialCategory?: string;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ navigate, initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProductModal, setActiveProductModal] = useState<ProductItem | null>(null);

  const categories = useMemo(() => {
    return ['All', ...PRODUCT_CATEGORIES.map((c) => c.name)];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleRequestQuote = (product: ProductItem) => {
    setActiveProductModal(null);
    navigate(`#/quote?category=${encodeURIComponent(product.category)}&requirement=${encodeURIComponent('Quotation request for ' + product.name + ' (' + product.packaging + ')')}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-12 bg-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="border-b border-[#ECECEC] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F7F7F7] border border-[#ECECEC] text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-3">
            Enterprise Product Catalogue
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252525] mb-4">
            B2B Commercial & Institutional Supplies
          </h1>
          <p className="text-sm sm:text-base text-[#707070] max-w-3xl leading-relaxed">
            Consolidated procurement across seven structured categories. Built for continuous supply agreements, volume contracts, and corporate site facilities across Bengaluru and Karnataka.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none" aria-label="Filter products by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#C8102E] text-white shadow-xs'
                    : 'bg-[#F7F7F7] text-[#252525] hover:bg-[#ECECEC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, applications, or specs..."
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-[#ECECEC] text-xs text-[#252525] bg-white focus:border-[#C8102E] focus:outline-none transition-colors"
            />
            <svg
              className="w-4 h-4 text-[#707070] absolute left-3 top-3 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-[#707070] hover:text-[#252525]"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {filteredProducts.length === 0 ? (
          <div className="p-16 text-center rounded-xl bg-[#F7F7F7] border border-[#ECECEC]">
            <div className="w-12 h-12 rounded-full bg-white border border-[#ECECEC] text-[#C8102E] flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#252525] mb-1">No products found</h3>
            <p className="text-xs text-[#707070] max-w-sm mx-auto mb-4">
              We couldn't find items matching "{searchQuery}". You can clear your filters or contact our sales desk for custom product inquiries.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#252525] text-white text-xs font-bold rounded-lg hover:bg-black transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-[#ECECEC] overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  <div className="relative h-48 bg-[#252525] overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-white/90 backdrop-blur text-[10px] font-bold text-[#252525] shadow-xs">
                      {product.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#252525] group-hover:text-[#C8102E] transition-colors mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#707070] line-clamp-3 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-1.5 border-t border-[#ECECEC] pt-3 text-[11px] text-[#707070]">
                      <div>
                        <strong className="text-[#252525]">Standard Packaging:</strong> {product.packaging}
                      </div>
                      <div>
                        <strong className="text-[#252525]">Applications:</strong> {product.applications.join(', ')}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveProductModal(product)}
                    className="py-2 px-3 rounded-lg border border-[#ECECEC] text-xs font-bold text-[#252525] hover:bg-[#F7F7F7] transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRequestQuote(product)}
                    className="py-2 px-3 rounded-lg bg-[#C8102E] hover:bg-[#A30D25] text-xs font-bold text-white transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {activeProductModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl border border-[#ECECEC] max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="relative h-56 bg-[#252525]">
              <img
                src={activeProductModal.imageUrl}
                alt={activeProductModal.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveProductModal(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#252525] font-bold flex items-center justify-center hover:bg-white shadow"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#252525]/85 text-xs font-bold text-white">
                {activeProductModal.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#252525] mb-2">
                {activeProductModal.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#707070] leading-relaxed mb-4">
                {activeProductModal.description}
              </p>

              <div className="p-3.5 bg-[#F7F7F7] rounded-lg border border-[#ECECEC] space-y-2 text-xs mb-6">
                <div>
                  <span className="font-bold text-[#252525]">Commercial Packaging:</span>{' '}
                  <span className="text-[#707070]">{activeProductModal.packaging}</span>
                </div>
                <div>
                  <span className="font-bold text-[#252525]">Primary Site Applications:</span>{' '}
                  <span className="text-[#707070]">{activeProductModal.applications.join(', ')}</span>
                </div>
                <div>
                  <span className="font-bold text-[#252525]">Fulfilled By:</span>{' '}
                  <span className="text-[#707070]">Annapoorna Enterprises Logistics (Bengaluru / Karnataka)</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveProductModal(null)}
                  className="px-4 py-2 rounded-lg border border-[#ECECEC] text-xs font-bold text-[#252525] hover:bg-[#F7F7F7] transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => handleRequestQuote(activeProductModal)}
                  className="px-5 py-2 rounded-lg bg-[#C8102E] hover:bg-[#A30D25] text-xs font-bold text-white transition-colors"
                >
                  Request a Product Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
