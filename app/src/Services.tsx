const items = ['Professional housekeeping','Pest-control services','Electrical & plumbing maintenance','Painting & general maintenance','Carpet, chair, sofa & floor cleaning','Plant care & landscaping'];
export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-red-500 to-red-700 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-white/80 font-bold text-xs tracking-[0.18em] uppercase mb-4 block">Services</span>
        <h1 className="text-5xl mb-8">Complete Solutions Beyond Products.</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item} className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <h2 className="text-xl mb-2">{item}</h2>
              <p className="text-white/80 text-sm">Reliable facility support service.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}