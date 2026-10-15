const categories = [
  { title: 'Cleaning & Housekeeping Supplies', image: 'https://images.unsplash.com/photo-1755752919883-e5d0912e2321?auto=format&fit=crop&w=600&q=80' },
  { title: 'Health & Hygiene Products', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80' },
  { title: 'Pantry & Workplace Supplies', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { title: 'Industrial & Packaging Materials', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
  { title: 'Waste Management & Spill Control', image: 'https://images.unsplash.com/photo-1759219111464-fb972d6557ad?auto=format&fit=crop&w=600&q=80' },
  { title: 'Facility Maintenance Materials', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
];

export default function Products() {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 block">Products</span>
        <h1 className="text-5xl mb-8">Products That Keep Your Business Moving.</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((item) => (
            <div key={item.title} className="bg-white border border-[#E7E7E7] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all">
              <div className="h-44 bg-[#F7F7F7]">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="eager" />
              </div>
              <div className="p-6">
                <h2 className="text-xl mb-2">{item.title}</h2>
                <p className="text-[#666666] text-sm mb-4">Category overview without unverified product claims.</p>
                <span className="inline-flex items-center gap-2 text-red-500 font-bold text-sm">View category</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}