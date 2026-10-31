import React from 'react';
import { COMPANY_INFO } from '../data/company';

interface NavigationProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPath, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '#/' },
    { label: 'About Us', path: '#/about' },
    { label: 'Products', path: '#/products' },
    { label: 'Services', path: '#/services' },
    { label: 'Industries', path: '#/industries' },
    { label: 'Contact Us', path: '#/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => {
    if (path === '#/' && (currentPath === '#/' || currentPath === '' || currentPath === '#')) {
      return true;
    }
    return currentPath.startsWith(path);
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-[#C8102E] text-white font-bold rounded shadow-lg"
      >
        Skip to main content
      </a>

      {/* Top utility contact bar */}
      <div className="bg-[#252525] text-white/90 text-xs py-2 px-6 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></span>
              Established 1998 · JP Nagar, Bengaluru
            </span>
            <span className="text-white/40">|</span>
            <span>Serving Enterprise & Institutional Clients Across Karnataka</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY_INFO.contact.phoneRaw1}`} className="hover:text-white transition-colors">
              Tel: {COMPANY_INFO.contact.primaryPhone}
            </a>
            <span className="text-white/40">|</span>
            <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
              {COMPANY_INFO.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md border-b border-[#ECECEC] py-3' : 'bg-white/95 backdrop-blur-md border-b border-[#ECECEC] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
          {/* Logo & Brand */}
          <a
            href="#/"
            onClick={(e) => handleLinkClick(e, '#/')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Annapoorna Enterprises Homepage"
          >
            <img
              src="./logo.png"
              alt="Annapoorna Enterprises Logo"
              className="h-11 w-11 rounded-lg object-contain bg-white p-0.5 border border-[#ECECEC] transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#252525] leading-none">
                Annapoorna
              </span>
              <span className="text-[10px] tracking-[0.16em] uppercase font-bold text-[#C8102E] mt-0.5">
                Enterprises
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                    active
                      ? 'text-[#C8102E] bg-[#F7F7F7] font-bold shadow-xs'
                      : 'text-[#252525] hover:text-[#C8102E] hover:bg-[#F7F7F7]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#/quote"
              onClick={(e) => handleLinkClick(e, '#/quote')}
              className="px-5 py-2.5 rounded-lg bg-[#C8102E] text-white text-sm font-bold shadow-sm hover:bg-[#A30D25] transition-all duration-200 hover:shadow-md"
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-[#252525] hover:bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-[#ECECEC] bg-white ${
            mobileMenuOpen ? 'max-h-96 py-4 px-6 opacity-100' : 'max-h-0 py-0 px-6 opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    active ? 'bg-[#F7F7F7] text-[#C8102E] font-bold' : 'text-[#252525] hover:bg-[#F7F7F7]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#/quote"
              onClick={(e) => handleLinkClick(e, '#/quote')}
              className="mt-3 text-center px-4 py-3 rounded-lg bg-[#C8102E] text-white text-sm font-bold hover:bg-[#A30D25] transition-colors"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};
