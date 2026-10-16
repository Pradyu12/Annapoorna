import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const nav = ['Home','About','Products','Services','Industries','Contact'];

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, [location]);

  return (
    <div className="min-h-screen bg-white text-[#171717]">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 bg-red-500/15">
        <div className="h-full bg-red-500 transition-[width] duration-150 ease-out" style={{ width: `${scrollProgress * 100}%` }} />
      </div>
      <header className={`sticky top-0 z-50 backdrop-blur bg-white/85 border-b border-[#E7E7E7] transition-shadow ${scrolled ? 'shadow-lg shadow-black/5' : ''}`}>
        <div className="mx-auto max-w-7xl px-6 min-h-[92px] flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 font-[Manrope] font-extrabold text-2xl">
            <img src="./logo.png" alt="Annapoorna" className="h-12 w-12 rounded-xl object-cover" />
            Annapoorna
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#F7F7F7] hover:text-red-500 transition-colors">{item}</Link>
            ))}
            <Link to="/quote" className="ml-2 px-5 py-3 rounded-full bg-red-500 text-white font-bold text-sm hover:bg-red-700 transition-colors">Request a Quote</Link>
          </nav>
          <button className="lg:hidden h-11 w-11 rounded-xl border border-[#E7E7E7]" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? '✕' : '☰'}</button>
        </div>
      </header>
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${menuOpen ? 'max-h-[560px] border-y border-[#E7E7E7] bg-white px-6 py-4 opacity-100' : 'max-h-0 border-transparent opacity-0'}`} aria-hidden={!menuOpen}>
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {['Home','About','Products','Services','Industries','Contact'].map((item) => (
              <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1} className="rounded-xl px-4 py-3 font-semibold hover:bg-[#F7F7F7] hover:text-red-500 transition-colors">
                {item}
              </Link>
            ))}
            <Link to="/quote" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1} className="mt-2 rounded-xl bg-red-500 px-4 py-3 text-center font-bold text-white hover:bg-red-700 transition-colors">
              Request a Quote
            </Link>
          </nav>
      </div>
      <div key={location.pathname} className="animate-route-enter">
        <Outlet />
      </div>      <footer className="bg-[#171717] text-white/80 mt-20">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="h-[3px] rounded-full bg-gradient-to-r from-red-500 to-red-700 mb-10" />
          <div className="grid md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 font-[Manrope] font-extrabold text-2xl text-white mb-4">
                <img src="./logo.png" alt="Annapoorna" className="h-12 w-12 rounded-xl object-cover" />
                Annapoorna
              </div>
              <p className="text-white/65">Reliable hygiene products, industrial supplies and facility solutions that keep your business running smoothly.</p>
            </div>
            <div>
              <h4 className="text-white mb-4 font-[Manrope]">Quick links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/products" className="hover:text-white">Products</Link></li>
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 font-[Manrope]">Product categories</h4>
              <ul className="space-y-2 text-sm">
                <li>Cleaning supplies</li>
                <li>Health & hygiene</li>
                <li>Pantry supplies</li>
                <li>Industrial materials</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 font-[Manrope]">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>JP Nagar, 6th Phase</li>
                <li>Bengaluru, Karnataka</li>
                <li><a href="tel:+919108653934" className="hover:text-white">9108653934</a></li>
                <li><a href="mailto:sales@annapoornaentp.com" className="hover:text-white">sales@annapoornaentp.com</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-5 flex flex-wrap justify-between gap-3 text-sm text-white/45">
            <span>© 2026 Annapoorna. All rights reserved.</span>
            <span>Privacy Policy · Terms and Conditions</span>
          </div>
        </div>
      </footer>
    </div>
  );
}