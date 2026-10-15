const categories = [
  { title: 'Corporate offices and IT companies', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { title: 'Manufacturing and industrial facilities', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
  { title: 'Healthcare and pharmaceutical organizations', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80' },
  { title: 'Hotels and hospitality businesses', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
  { title: 'Retail and commercial establishments', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
  { title: 'Educational and institutional facilities', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80' },
];

export default function Industries() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 block">Industries</span>
        <h1 className="text-5xl mb-8">Solutions for Every Working Environment.</h1>
        <div className="grid md:grid-cols-3 gap-5">
          {categories.map((item) => (
            <div key={item.title} className="relative h-56 rounded-2xl overflow-hidden bg-[#171717] grid place-items-center text-white font-[Manrope] font-bold text-lg text-center px-6">
              <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-65" loading="eager" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <span className="relative">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}