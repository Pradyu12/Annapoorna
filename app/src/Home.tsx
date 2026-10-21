import { useEffect, useState, type FormEvent } from 'react';
import './index.css';
import HeroShowcase from './HeroShowcase';

const capabilities = [
  ['Product supply', 'Hygiene, pantry, industrial and packaging materials.'],
  ['Facility services', 'Housekeeping, pest control, electrical and plumbing.'],
  ['Specialist cleaning', 'Carpet, upholstery, sofa and floor deep-cleaning.'],
  ['Tender supply', 'Documented supply for corporate and government tenders.'],
];

const products = [
  {
    title: 'Cleaning & Housekeeping Supplies',
    desc: 'Consumables, chemicals and equipment for daily housekeeping.',
    image: 'https://images.unsplash.com/photo-1755752919883-e5d0912e2321?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Health & Hygiene Products',
    desc: 'Workplace hygiene and washroom consumables.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Pantry & Workplace Supplies',
    desc: 'Pantry provisions and everyday workplace essentials.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Industrial & Packaging Materials',
    desc: 'Industrial consumables and packaging for production and dispatch.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Waste Management & Spill Control',
    desc: 'Waste-handling and spill-control materials.',
    image: 'https://images.unsplash.com/photo-1759219111464-fb972d6557ad?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Facility Maintenance Materials',
    desc: 'Materials for routine facility upkeep and repairs.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
  },
];

const services = [
  ['Housekeeping', 'Daily and periodic housekeeping for offices, plants and institutions.'],
  ['Pest control', 'Scheduled and preventive pest management.'],
  ['Electrical & plumbing', 'Coordinated maintenance and repair support.'],
  ['Painting & general maintenance', 'Repairs, repainting and general facility upkeep.'],
  ['Specialist cleaning', 'Carpet, upholstery, sofa and floor deep-cleaning.'],
  ['Plants & landscaping', 'Indoor plants, landscaping and ongoing care.'],
  ['Government & corporate tenders', 'Documented, compliant supply for tender-based procurement.'],
];

const industries = [
  {
    title: 'Corporate & IT/ITES',
    desc: 'Offices and campuses with ongoing hygiene and pantry demand.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Manufacturing & industrial',
    desc: 'Consumables and packaging for production and dispatch.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Pharma & healthcare',
    desc: 'Hygiene and facility supplies for healthcare and pharmaceutical sites.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Hotels & hospitality',
    desc: 'Housekeeping and amenity supply for hotels and serviced spaces.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Retail & commercial',
    desc: 'Consumables and upkeep for customer-facing spaces.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Education & institutions',
    desc: 'Recurring supply for campuses and institutional facilities.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
  },
];

const reasons = [
  ['Consolidated range', 'Product categories and facility services through a single supplier.'],
  ['Karnataka-wide reach', 'Own warehousing, in-house manpower and redistribution support.'],
  ['Tender-ready', 'Supply aligned to corporate and government procurement requirements.'],
  ['Established since 1998', 'More than two decades of continuous B2B supply experience.'],
];

const processSteps = [
  ['01', 'Requirement', 'We review the scope, quantities and delivery schedule.'],
  ['02', 'Quotation', 'A clear, itemised quotation based on the agreed scope.'],
  ['03', 'Sourcing & fulfilment', 'Products are sourced, stocked and prepared for dispatch.'],
  ['04', 'Delivery & support', 'Scheduled delivery, with follow-up on recurring requirements.'],
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

  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? '').trim();
    const subject = `Quote request from ${value('company') || value('name') || 'website visitor'}`;
    const body = [
      `Name: ${value('name')}`,
      `Company: ${value('company')}`,
      `Email: ${value('email')}`,
      `Phone: ${value('phone')}`,
      `Category: ${value('category')}`,
      '',
      'Requirements:',
      value('message'),
    ].join('\n');
    window.location.href = `mailto:sales@annapoornaentp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-white text-[#171717]">
      <header className={`sticky top-0 z-50 backdrop-blur bg-white/85 border-b border-[#E7E7E7] transition-shadow ${scrolled ? 'shadow-lg shadow-black/5' : ''}`}>
        <div className="mx-auto max-w-7xl px-6 min-h-[92px] flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 font-[Manrope] font-extrabold text-2xl">
            <img src="./logo.png" alt="Annapoorna" className="h-12 w-12 rounded-xl object-cover" />
            Annapoorna
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {['Home','About','Products','Services','Industries','Contact'].map((item, i) => (
              <a key={item} href={`#${i === 0 ? 'top' : item.toLowerCase()}`} className="px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#F7F7F7] hover:text-red-500 transition-colors">{item}</a>
            ))}
            <a href="#quote" className="ml-2 px-5 py-3 rounded-full bg-red-500 text-white font-bold text-sm hover:bg-red-700 transition-colors">Request a Quote</a>
          </nav>
          <button className="lg:hidden h-11 w-11 rounded-xl border border-[#E7E7E7]" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? '✕' : '☰'}</button>
        </div>
      </header>
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${menuOpen ? 'max-h-[560px] border-y border-[#E7E7E7] bg-white px-6 py-4 opacity-100' : 'max-h-0 border-transparent opacity-0'}`} aria-hidden={!menuOpen}>
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
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:pt-20 lg:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-5">
                <span className="h-[2px] w-7 bg-red-500" />Established 1998 · Bengaluru, Karnataka
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98] mb-5">
                The supply partner behind <span className="text-red-500">well-run facilities.</span>
              </h1>
              <p className="text-[#666666] text-lg max-w-xl mb-8">
                Annapoorna Enterprises supplies hygiene, pantry, industrial and packaging materials to
                organisations across Karnataka — and coordinates the cleaning, maintenance and landscaping
                services around them.
              </p>
              <div className="flex flex-wrap gap-4 mb-5">
                <a href="#quote" className="px-6 py-4 rounded-xl bg-red-500 text-white font-bold shadow-lg shadow-red-500/20 hover:bg-red-700 transition-colors">Request a quote</a>
                <a href="#products" className="px-6 py-4 rounded-xl border-2 border-[#E7E7E7] font-bold hover:border-red-500 hover:text-red-500 transition-colors">Explore product categories</a>
              </div>
              <p className="text-sm text-[#666666]">Bengaluru · Karnataka-wide reach · Corporate and government tenders</p>
            </div>
            <div className="relative">
              <HeroShowcase />
            </div>
      </div>
        </section>

        <section className="border-y border-[#E7E7E7] bg-[#F7F7F7]">
          <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
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

        <section id="about" className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="rounded-3xl overflow-hidden bg-[#F7F7F7] aspect-[4/3] lg:aspect-[4/4.4]">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80" alt="" className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 block">About Annapoorna</span>
              <h2 className="text-4xl md:text-5xl mb-5">Built for the realities of commercial procurement.</h2>
              <p className="text-[#666666] mb-4">
                Annapoorna Enterprises is a Bengaluru-based B2B supply and facility partner, founded in
                1998 by Shashi Kumar Mariyappa and Satish Kumar Mariyappa. We supply hygiene and cleaning
                materials, pantry provisions, industrial and packaging materials, and coordinate the
                facility services that keep sites operating.
              </p>
              <p className="text-[#666666] mb-6">
                Our reach covers Karnataka through our own warehousing in strategic locations, backed by
                in-house manpower and redistribution support. Procurement teams work with us because the
                range is consolidated, the quotation is clear and the delivery is dependable.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  ['Sourcing and warehousing', 'Own warehousing in strategic locations, with Karnataka-wide redistribution.'],
                  ['One accountable partner', 'Products and services coordinated through a single point of contact.'],
                  ['Procurement discipline', 'Clear quotations, documented supply and dependable delivery schedules.'],
                ].map(([title, desc], i) => (
                  <div key={title} className="flex gap-4">
                    <span className="grid place-items-center h-8 w-8 rounded-xl bg-red-500 text-white font-bold shrink-0">{i + 1}</span>
                    <div>
                      <h3 className="text-lg mb-1">{title}</h3>
                      <p className="text-[#666666] text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="inline-flex px-6 py-4 rounded-xl bg-red-500 text-white font-bold hover:bg-red-700 transition-colors">Talk to our team</a>
            </div>
          </div>
        </section>

        <section id="products" className="py-24 bg-[#F7F7F7]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-10">
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-3 block">Product categories</span>
              <h2 className="text-4xl md:text-5xl mb-4">Six categories. One supplier.</h2>
              <p className="text-[#666666]">Recurring commercial and institutional demand, sourced and stocked across six supply categories.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((item, index) => (
                <a
                  key={item.title}
                  href="#quote"
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
                  </div>
                  <div className="px-1">
                    <h3 className="text-xl font-[Manrope] transition-colors duration-300 group-hover:text-red-500">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#666666]">{item.desc}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-red-500">
                        Request a quote
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
              <h2 className="text-4xl md:text-5xl mb-4">Facility services, coordinated around your operations.</h2>
              <p className="text-white/80">Seven service lines, delivered and coordinated under one point of contact.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(([title, desc]) => (
                <article key={title} className="bg-white/10 border border-white/20 backdrop-blur rounded-2xl p-6 hover:bg-white/15 transition-colors">
                  <div className="h-11 w-11 rounded-xl bg-white text-red-500 grid place-items-center font-extrabold mb-4">✓</div>
                  <h3 className="text-xl mb-2">{title}</h3>
                  <p className="text-white/80 text-sm mb-4">{desc}</p>
                  <a href="#quote" className="font-bold">Enquire now →</a>
                </article>
              ))}
              <article className="rounded-2xl border border-white/25 bg-white/5 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl mb-2">Not sure which service you need?</h3>
                  <p className="text-white/75 text-sm mb-4">Describe the site and we will recommend the right scope.</p>
                </div>
                <a href="#quote" className="font-bold">Talk to our team →</a>
              </article>
            </div>
          </div>
        </section>

        <section id="industries" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-10">
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-3 block">Industries</span>
              <h2 className="text-4xl md:text-5xl mb-4">Sectors we supply.</h2>
              <p className="text-[#666666]">Built for organisations with recurring, compliance-aware procurement.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {industries.map((item) => (
                <div key={item.title} className="relative h-56 rounded-2xl overflow-hidden bg-[#171717] text-white flex items-end p-6">
                  <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" loading="eager" />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                  <div className="relative">
                    <h3 className="font-[Manrope] font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/75 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F7F7F7]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-10">
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-3 block">How we work</span>
              <h2 className="text-4xl md:text-5xl mb-4">From requirement to delivery.</h2>
            </div>
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map(([num, title, desc]) => (
                <div key={num} className="text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-white border-2 border-red-500 text-red-500 grid place-items-center font-extrabold mb-4 shadow-lg shadow-red-500/10">{num}</div>
                  <h3 className="text-lg mb-2">{title}</h3>
                  <p className="text-[#666666] text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="rounded-3xl bg-[#F7F7F7] aspect-[4/3] lg:aspect-[4/4.4] overflow-hidden order-last lg:order-none"><img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80" alt="" className="h-full w-full object-cover" /></div>
            <div>
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 block">Why Annapoorna</span>
              <h2 className="text-4xl md:text-5xl mb-6">Why procurement teams work with us.</h2>
              <div className="space-y-4">
                {reasons.map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <span className="grid place-items-center h-6 w-6 rounded-full bg-red-500 text-white text-xs font-bold shrink-0 mt-1">✓</span>
                    <div>
                      <h3 className="text-lg mb-1">{title}</h3>
                      <p className="text-[#666666] text-sm">{desc}</p>
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
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-3 block">Request a quote</span>
              <h2 className="text-4xl md:text-5xl mb-4">Let us scope your requirement.</h2>
              <p className="text-[#666666]">Share what your facility needs and we will respond with a quotation. For urgent requirements, call us directly.</p>
            </div>
            <form onSubmit={handleQuoteSubmit} className="max-w-4xl bg-white border border-[#E7E7E7] rounded-3xl p-8 grid md:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2"><span className="font-semibold text-sm">Full name</span><input name="name" className="px-4 py-3 rounded-xl border border-[#E7E7E7] focus:border-red-500 focus:outline-none" required /></label>
              <label className="flex flex-col gap-2"><span className="font-semibold text-sm">Company name</span><input name="company" className="px-4 py-3 rounded-xl border border-[#E7E7E7] focus:border-red-500 focus:outline-none" required /></label>
              <label className="flex flex-col gap-2"><span className="font-semibold text-sm">Business email</span><input name="email" className="px-4 py-3 rounded-xl border border-[#E7E7E7] focus:border-red-500 focus:outline-none" type="email" required /></label>
              <label className="flex flex-col gap-2"><span className="font-semibold text-sm">Phone number</span><input name="phone" className="px-4 py-3 rounded-xl border border-[#E7E7E7] focus:border-red-500 focus:outline-none" type="tel" required /></label>
              <label className="md:col-span-2 flex flex-col gap-2"><span className="font-semibold text-sm">Product or service category</span>
                <select name="category" className="px-4 py-3 rounded-xl border border-[#E7E7E7] focus:border-red-500 focus:outline-none">
                  <option>Cleaning & housekeeping supplies</option>
                  <option>Health & hygiene products</option>
                  <option>Pantry & workplace supplies</option>
                  <option>Industrial & packaging materials</option>
                  <option>Waste management & spill control</option>
                  <option>Facility maintenance materials</option>
                  <option>Facility services</option>
                  <option>Government or corporate tender</option>
                </select>
              </label>
              <label className="md:col-span-2 flex flex-col gap-2"><span className="font-semibold text-sm">Requirements</span><textarea name="message" className="px-4 py-3 rounded-xl border border-[#E7E7E7] focus:border-red-500 focus:outline-none min-h-32" placeholder="Categories, approximate quantities, site locations and delivery schedule." /></label>
              <div className="md:col-span-2">
                <button className="px-6 py-4 rounded-xl bg-red-500 text-white font-bold hover:bg-red-700 transition-colors" type="submit">Submit enquiry</button>
                <p className="mt-3 text-xs text-[#666666]">Submitting opens your email app with these details filled in. Nothing is stored on this site.</p>
              </div>
            </form>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-8">
              <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-3 block">Contact</span>
              <h2 className="text-4xl md:text-5xl mb-4">Talk to our team.</h2>
              <p className="text-[#666666]">Based in JP Nagar, Bengaluru, and supplying organisations across Karnataka.</p>
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
                  <a className="px-5 py-3 rounded-xl border border-[#E7E7E7] font-bold hover:border-red-500 hover:text-red-500 transition-colors" href="#quote">Request a quote</a>
                </div>
              </div>
              <div className="bg-white border border-[#E7E7E7] rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl mb-5">Visit us</h3>
                  <p className="text-[#666666] text-sm mb-1">JP Nagar, 6th Phase</p>
                  <p className="text-[#666666] text-sm mb-4">Bengaluru, Karnataka</p>
                  <p className="text-[#666666] text-sm">Serving corporate, industrial, healthcare, hospitality and institutional clients across Karnataka.</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=JP+Nagar+6th+Phase+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-red-500 hover:text-red-700 transition-colors"
                >
                  Open in Google Maps
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#171717] text-white/80 mt-20">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="h-[3px] rounded-full bg-gradient-to-r from-red-500 to-red-700 mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 font-[Manrope] font-extrabold text-2xl text-white mb-4">
                <img src="./logo.png" alt="Annapoorna" className="h-12 w-12 rounded-xl object-cover" />
                Annapoorna
              </div>
              <p className="text-white/65">
                Annapoorna Enterprises is a Bengaluru-based B2B supply and facility partner, serving
                corporate, industrial, healthcare, hospitality and institutional clients across Karnataka
                since 1998.
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4 font-[Manrope]">Quick links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#top" className="hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#products" className="hover:text-white">Products</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#industries" className="hover:text-white">Industries</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 font-[Manrope]">Product categories</h4>
              <ul className="space-y-2 text-sm">
                <li>Cleaning & housekeeping</li>
                <li>Health & hygiene</li>
                <li>Pantry & workplace</li>
                <li>Industrial & packaging</li>
                <li>Waste management & spill control</li>
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
            <span>© 2026 Annapoorna Enterprises. All rights reserved.</span>
            <span>Bengaluru, Karnataka</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
