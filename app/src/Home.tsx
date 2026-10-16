import { lazy, Suspense, useEffect, useState } from 'react';
import './index.css';

const WarehouseModel = lazy(() => import('./WarehouseModel'));

const capabilities = [
  ['Hygiene & Cleaning', 'Everyday workplace hygiene consumables.'],
  ['Facility Maintenance', 'Housekeeping, pest control, electrical, plumbing.'],
  ['Industrial Products', 'Packaging, dairy and institutional materials.'],
  ['Institutional Supply', 'Compliant bulk sourcing and delivery.'],
];

const products = [
  { title: 'Cleaning & Housekeeping Supplies', image: 'https://images.unsplash.com/photo-1755752919883-e5d0912e2321?auto=format&fit=crop&w=600&q=80' },
  { title: 'Health & Hygiene Products', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80' },
  { title: 'Pantry & Workplace Supplies', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { title: 'Industrial & Packaging Materials', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
  { title: 'Waste Management & Spill Control', image: 'https://images.unsplash.com/photo-1759219111464-fb972d6557ad?auto=format&fit=crop&w=600&q=80' },
  { title: 'Facility Maintenance Materials', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
];

const services = [
  ['Professional housekeeping', 'Reliable facility housekeeping support.'],
  ['Pest-control services', 'Scheduled and preventive control.'],
  ['Electrical & plumbing maintenance', 'Coordinated upkeep and repair support.'],
  ['Painting & general maintenance', 'Facility improvement and repairs.'],
  ['Carpet, chair, sofa & floor cleaning', 'Specialist deep-cleaning solutions.'],
  ['Plant care & landscaping', 'Greenery installation and maintenance.'],
];

const industries = [
  { title: 'Corporate offices and IT companies', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { title: 'Manufacturing and industrial facilities', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
  { title: 'Healthcare and pharmaceutical organizations', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80' },
  { title: 'Hotels and hospitality businesses', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
  { title: 'Retail and commercial establishments', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
  { title: 'Educational and institutional facilities', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80' },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#171717]">
      <header className={`sticky top-0 z-50 backdrop-blur bg-white/85 border-b border-[#E7E7E7] transition-shadow ${scrolled ? 'shadow-lg shadow-black/5' : ''}`}>
        <div className="mx-auto max-w-7xl px-6 min-h-[92px] flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 font-[Manrope] font-extrabold text-2xl">
            <img src="./logo.png" alt="Annapoorna" className="h-12 w-12 rounded-xl object-cover" />
            Annapoorna
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {['Home','About','Products','Services','Industries','Contact'].map((item, i) => (
              <a key={item} href={`#${i === 0 ? 'top' : item.toLowerCase()}`} className="px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#F7F7F7] hover:text-red-500 transition-colors">{item}</a>
            ))}
            <a href="#quote" className="ml-2 px-5 py-3 rounded-full bg-red-500 text-white font-bold text-sm hover:bg-red-700 transition-colors">Request a Quote</a>
          </nav>
          <button className="md:hidden h-11 w-11 rounded-xl border border-[#E7E7E7]" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? '✕' : '☰'}</button>
        </div>
      </header>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${menuOpen ? 'max-h-[560px] border-y border-[#E7E7E7] bg-white px-6 py-4 opacity-100' : 'max-h-0 border-transparent opacity-0'}`} aria-hidden={!menuOpen}>
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {['Home','About','Products','Services','Industries','Contact'].map((item, i) => (
              <a key={item} href={`#${i === 0 ? 'top' : item.toLowerCase()}`} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1} className="rounded-xl px-4 py-3 font-semibold hover:bg-[#F7F7F7] hover:text-red-500 transition-colors">
                {item}
              </a>
            ))}
            <a href="#quote" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1} className="mt-2 rounded-xl bg-red-500 px-4 py-3 text-center font-bold text-white hover:bg-red-700 transition-colors">
              Request a Quote
            </a>
          </nav>
      </div>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-5">
                <span className="h-[2px] w-7 bg-red-500" />Your Trusted Business Supply Partner
              </span>
              <h1 className="text-5xl md:text-7xl leading-[0.95] mb-5">
                Everything Your Business Needs. <span className="text-red-500">One Reliable Partner.</span>
              </h1>
              <p className="text-[#666666] text-lg max-w-xl mb-8">
                Reliable hygiene products, industrial supplies and facility solutions that keep your business running smoothly.
              </p>
              <div className="flex flex-wrap gap-4 mb-5">
                <a href="#products" className="px-6 py-4 rounded-xl bg-red-500 text-white font-bold shadow-lg shadow-red-500/20 hover:bg-red-700 transition-colors">Explore Our Products</a>
                <a href="#contact" className="px-6 py-4 rounded-xl border-2 border-[#E7E7E7] font-bold hover:border-red-500 hover:text-red-500 transition-colors">Talk to Our Team</a>
              </div>
              <p className="text-sm text-[#666666]">Serving businesses and institutions with dependable supply solutions.</p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80" alt="" className="mt-6 h-[300px] w-full rounded-3xl border border-[#E7E7E7] object-cover shadow-xl shadow-black/10 md:hidden" />
            <div className="relative hidden h-[480px] items-center justify-center [perspective:1200px] md:flex">
              <Suspense fallback={null}>
                <WarehouseModel />
              </Suspense>
            </div>
      </div>
      </div>
        </section>

        <section className="border-y border-[#E7E7E7] bg-[#F7F7F7]">
          <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {capabilities.map(([title, desc]) => (
              <div key={title} className="flex items-center gap-4">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-red-500 text-white font-extrabold">✓</span>
                <div>
                  <strong className="block font-[Manrope]">{title}</strong>
                  <small className="text-[#666666] text-xs">{desc}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14 items-center">
            <div className="rounded-3xl overflow-hidden bg-[#F7F7F7] aspect-[4/4.4] order-first md:order-none">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80" alt="" className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 block">About Annapoorna</span>
              <h2 className="text-4xl md:text-5xl mb-5">Supporting Better Workplaces Through Reliable Supply.</h2>
              <p className="text-[#666666] mb-6">
                Annapoorna Enterprises provides businesses and institutions with a broad range of hygiene products, cleaning materials, facility-maintenance services and commercial supplies.
              </p>
              <div className="space-y-4 mb-8">
                {['Reliable sourcing','Business-focused solutions','Long-term customer relationships'].map((item, i) => (
                  <div key={item} className="flex gap-4">
                    <span className="grid place-items-center h-8 w-8 rounded-xl bg-red-500 text-white font-bold shrink-0">{i + 1}</span>
                    <div>
                      <h3 className="text-lg mb-1">{item}</h3>
                      <p className="text-[#666666] text-sm">Dependable support aligned to operational needs.</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#about" className="inline-flex px-6 py-4 rounded-xl bg-red-500 text-white font-bold hover:bg-red-700 transition-colors">Discover Our Company</a>
            </div>
          </div>
        </section>

        <section id="products" className="py-24 bg-[#F7F7F7]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-10">
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-3 block">Product Categories</span>
              <h2 className="text-4xl md:text-5xl mb-4">Products That Keep Your Business Moving.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((item, index) => (
                <a
                  key={item.title}
                  href="#products"
                  className="group relative block overflow-hidden rounded-3xl border border-[#E7E7E7] bg-white p-4 shadow-[0_18px_45px_-28px_rgba(23,23,23,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-red-500/30 hover:shadow-[0_28px_60px_-28px_rgba(215,25,32,0.35)]"
                >
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-red-500 shadow-sm backdrop-blur">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="relative mb-5 h-48 overflow-hidden rounded-2xl bg-[#F7F7F7]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.6,0.3,1)] group-hover:scale-110"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-85" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/85">Product category</p>
                      <strong className="block font-[Manrope] text-lg">{item.title}</strong>
                    </div>
                  </div>
                  <div className="px-1">
                    <h3 className="text-xl font-[Manrope] transition-colors duration-300 group-hover:text-red-500">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#666666]">Category overview without unverified product claims.</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-red-500">
                        View category
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                      <span className="h-8 w-8 rounded-full border border-[#E7E7E7] text-[#666666] transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-white flex items-center justify-center">+</span>
                    </div>
                  </div>
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-red-500 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-gradient-to-br from-red-500 to-red-700 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-10">
              <span className="text-white/80 font-bold text-xs tracking-[0.18em] uppercase mb-3 block">Services</span>
              <h2 className="text-4xl md:text-5xl mb-4">Complete Solutions Beyond Products.</h2>
              <p className="text-white/80">Professional services for facility operations and upkeep.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map(([title, desc]) => (
                <article key={title} className="bg-white/10 border border-white/20 backdrop-blur rounded-2xl p-6 hover:bg-white/15 transition-colors">
                  <div className="h-11 w-11 rounded-xl bg-white text-red-500 grid place-items-center font-extrabold mb-4">✓</div>
                  <h3 className="text-xl mb-2">{title}</h3>
                  <p className="text-white/80 text-sm mb-4">{desc}</p>
                  <a href="#quote" className="font-bold">Enquire Now →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-10">
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-3 block">Industries</span>
              <h2 className="text-4xl md:text-5xl mb-4">Solutions for Every Working Environment.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {industries.map((item) => (
                <div key={item.title} className="relative h-52 rounded-2xl overflow-hidden bg-[#171717] grid place-items-center text-white font-[Manrope] font-bold text-lg text-center px-6">
                  <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-65" loading="eager" />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                  <span className="relative">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F7F7F7]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-10">
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-3 block">Process</span>
              <h2 className="text-4xl md:text-5xl mb-4">How Our Supply Process Works</h2>
            </div>
            <div className="relative grid md:grid-cols-4 gap-8">
              {[
                ['01', 'Requirement', 'Understand the requested product or service scope.'],
                ['02', 'Quotation', 'Prepare a quotation based on scope and quantities.'],
                ['03', 'Procurement', 'Arrange required products and prepare delivery.'],
                ['04', 'Delivery & Support', 'Deliver and coordinate follow-up.'],
              ].map(([num, title, desc]) => (
                <div key={num} className="text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-white border-2 border-red-500 text-red-500 grid place-items-center font-extrabold mb-4 shadow-lg shadow-red-500/10">{num}</div>
                  <h3 className="text-lg mb-2">{title}</h3>
                  <p className="text-[#666666] text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14 items-center">
            <div className="rounded-3xl bg-[#F7F7F7] aspect-[4/4.4] overflow-hidden"><img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80" alt="" className="h-full w-full object-cover" /></div>
            <div>
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl mb-6">A Dependable Partner for Your Business.</h2>
              <div className="space-y-4">
                {['Broad range of product categories','Multiple facility-related service offerings','Business-oriented procurement support','Solutions tailored to customer needs'].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="grid place-items-center h-6 w-6 rounded-full bg-red-500 text-white text-xs font-bold shrink-0 mt-1">✓</span>
                    <div>
                      <h3 className="text-lg mb-1">{item}</h3>
                      <p className="text-[#666666] text-sm">Convenient coordination for recurring requirements.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="quote" className="py-24 bg-[#F7F7F7]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-8">
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-3 block">Quote Request</span>
              <h2 className="text-4xl md:text-5xl mb-4">Looking for a Reliable Supply Partner?</h2>
              <p className="text-[#666666]">Tell us what your business needs. Our team can help you explore the right products and services.</p>
            </div>
            <form className="max-w-4xl bg-white border border-[#E7E7E7] rounded-3xl p-8 grid md:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2"><span className="font-semibold text-sm">Full name</span><input className="px-4 py-3 rounded-xl border border-[#E7E7E7] focus:border-red-500 focus:outline-none" required /></label>
              <label className="flex flex-col gap-2"><span className="font-semibold text-sm">Company name</span><input className="px-4 py-3 rounded-xl border border-[#E7E7E7] focus:border-red-500 focus:outline-none" required /></label>
              <label className="flex flex-col gap-2"><span className="font-semibold text-sm">Business email</span><input className="px-4 py-3 rounded-xl border border-[#E7E7E7] focus:border-red-500 focus:outline-none" type="email" required /></label>
              <label className="flex flex-col gap-2"><span className="font-semibold text-sm">Phone number</span><input className="px-4 py-3 rounded-xl border border-[#E7E7E7] focus:border-red-500 focus:outline-none" type="tel" required /></label>
              <label className="md:col-span-2 flex flex-col gap-2"><span className="font-semibold text-sm">Product / service category</span>
                <select className="px-4 py-3 rounded-xl border border-[#E7E7E7] focus:border-red-500 focus:outline-none">
                  <option>Cleaning & Housekeeping</option>
                  <option>Health & Hygiene</option>
                  <option>Pantry Supplies</option>
                  <option>Industrial</option>
                  <option>Maintenance</option>
                </select>
              </label>
              <label className="md:col-span-2 flex flex-col gap-2"><span className="font-semibold text-sm">Message / requirements</span><textarea className="px-4 py-3 rounded-xl border border-[#E7E7E7] focus:border-red-500 focus:outline-none min-h-32" /></label>
              <div className="md:col-span-2">
                <button className="px-6 py-4 rounded-xl bg-red-500 text-white font-bold hover:bg-red-700 transition-colors" type="submit">Submit Enquiry</button>
              </div>
            </form>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-8">
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-3 block">Contact</span>
              <h2 className="text-4xl md:text-5xl mb-4">Professional Contact Area</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E7E7E7] rounded-2xl p-7">
                <h3 className="text-2xl mb-5">Contact details</h3>
                <div className="space-y-4 text-sm">
                  <div><strong className="block text-xs uppercase tracking-wider text-[#666666] mb-1">Location</strong>JP Nagar, 6th Phase, Bengaluru, Karnataka</div>
                  <div><strong className="block text-xs uppercase tracking-wider text-[#666666] mb-1">Phone</strong><a className="text-red-500 font-bold" href="tel:+919108653934">9108653934</a> / <a className="text-red-500 font-bold" href="tel:+919845006172">9845006172</a></div>
                  <div><strong className="block text-xs uppercase tracking-wider text-[#666666] mb-1">Email</strong><a className="text-red-500 font-bold" href="mailto:sales@annapoornaentp.com">sales@annapoornaentp.com</a></div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a className="px-5 py-3 rounded-xl bg-red-500 text-white font-bold hover:bg-red-700 transition-colors" href="tel:+919108653934">Call</a>
                  <a className="px-5 py-3 rounded-xl border border-[#E7E7E7] font-bold hover:border-red-500 hover:text-red-500 transition-colors" href="mailto:sales@annapoornaentp.com">Email</a>
                  <a className="px-5 py-3 rounded-xl border border-[#E7E7E7] font-bold hover:border-red-500 hover:text-red-500 transition-colors" href="#quote">Request Quote</a>
                </div>
              </div>
              <div className="bg-white border border-[#E7E7E7] rounded-2xl p-7 grid place-items-center text-[#666666]">
                Map placeholder — add map after confirming the precise business address.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#171717] text-white/80 mt-20">
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
                <li><a href="#top" className="hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#products" className="hover:text-white">Products</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
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