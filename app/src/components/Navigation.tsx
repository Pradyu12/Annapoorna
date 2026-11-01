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
    { label: 'Products', path: '#/products' },
    { label: 'Services', path: '#/services' },
    { label: 'Industries', path: '#/industries' },
    { label: 'About Us', path: '#/about' },
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

      {/* Corporate Utility Top Bar */}
      <div className="bg-[#1E1E1E] text-white text-xs py-2 px-6 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#C8102E] inline-block"></span>
              Annapoorna Enterprises · Established 1998 · JP Nagar, Bengaluru
            </span>
            <span className="text-white/20">|</span>
            <span className="text-slate-400">B2B Procurement & Facility Maintenance Partner</span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <a href={`tel:${COMPANY_INFO.contact.phoneRaw1}`} className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {COMPANY_INFO.contact.primaryPhone}
            </a>
            <span className="text-white/20">|</span>
            <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#C8102E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {COMPANY_INFO.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Corporate Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/98 shadow-sm border-b border-slate-200 py-3.5' : 'bg-white border-b border-slate-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
          {/* Logo & Brand Identity */}
          <a
            href="#/"
            onClick={(e) => handleLinkClick(e, '#/')}
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Annapoorna Enterprises Corporate Homepage"
          >
            <div className="w-11 h-11 rounded-lg border border-slate-200 bg-white flex items-center justify-center p-1 shadow-xs group-hover:border-[#C8102E]/40 transition-colors">
              <img
                src="./logo.png"
                alt="Annapoorna Enterprises Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-[#1E1E1E] leading-none">
                  Annapoorna
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                  B2B
                </span>
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase font-extrabold text-[#C8102E] mt-0.5">
                Enterprises
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-all duration-150 ${
                    active
                      ? 'text-[#C8102E] bg-red-50/70 font-bold'
                      : 'text-[#1E1E1E] hover:text-[#C8102E] hover:bg-slate-50'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#/quote"
              onClick={(e) => handleLinkClick(e, '#/quote')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#C8102E] text-white text-xs font-bold tracking-wide uppercase shadow-xs hover:bg-[#A30D25] transition-all duration-150 hover:shadow"
            >
              <span>Request Quote</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-[#1E1E1E] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden transition-all duration-200 ease-in-out overflow-hidden border-t border-slate-200 bg-white ${
            mobileMenuOpen ? 'max-h-96 py-4 px-6 opacity-100 shadow-lg' : 'max-h-0 py-0 px-6 opacity-0 pointer-events-none'
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
                  className={`px-4 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                    active ? 'bg-red-50 text-[#C8102E] font-bold' : 'text-[#1E1E1E] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#/quote"
              onClick={(e) => handleLinkClick(e, '#/quote')}
              className="mt-3 text-center px-4 py-3 rounded-md bg-[#C8102E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#A30D25] transition-colors"
            >
              Request Quote
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};
