export default function Contact() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 block">Contact</span>
        <h1 className="text-5xl mb-8">Professional Contact Area</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#E7E7E7] rounded-2xl p-7">
            <h2 className="text-2xl mb-5">Contact details</h2>
            <div className="space-y-4 text-sm">
              <div><strong className="block text-xs uppercase tracking-wider text-[#666666] mb-1">Location</strong>JP Nagar, 6th Phase, Bengaluru, Karnataka</div>
              <div><strong className="block text-xs uppercase tracking-wider text-[#666666] mb-1">Phone</strong><a className="text-red-500 font-bold" href="tel:+919108653934">9108653934</a> / <a className="text-red-500 font-bold" href="tel:+919845006172">9845006172</a></div>
              <div><strong className="block text-xs uppercase tracking-wider text-[#666666] mb-1">Email</strong><a className="text-red-500 font-bold" href="mailto:sales@annapoornaentp.com">sales@annapoornaentp.com</a></div>
            </div>
          </div>
          <div className="bg-white border border-[#E7E7E7] rounded-2xl p-7 grid place-items-center text-[#666666]">
            Map placeholder — add map after confirming the precise business address.
          </div>
        </div>
      </div>
    </section>
  );
}