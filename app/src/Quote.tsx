export default function Quote() {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 block">Quote Request</span>
        <h1 className="text-5xl mb-8">Looking for a Reliable Supply Partner?</h1>
        <form className="max-w-4xl bg-white border border-[#E7E7E7] rounded-3xl p-8 grid md:grid-cols-2 gap-5">
          <label className="flex flex-col gap-2"><span className="font-semibold text-sm">Full name</span><input className="px-4 py-3 rounded-xl border border-[#E7E7E7]" required /></label>
          <label className="flex flex-col gap-2"><span className="font-semibold text-sm">Company name</span><input className="px-4 py-3 rounded-xl border border-[#E7E7E7]" required /></label>
          <label className="flex flex-col gap-2"><span className="font-semibold text-sm">Business email</span><input className="px-4 py-3 rounded-xl border border-[#E7E7E7]" type="email" required /></label>
          <label className="flex flex-col gap-2"><span className="font-semibold text-sm">Phone number</span><input className="px-4 py-3 rounded-xl border border-[#E7E7E7]" type="tel" required /></label>
          <button className="px-6 py-4 rounded-xl bg-red-500 text-white font-bold hover:bg-red-700 transition-colors md:col-span-2" type="submit">Submit Enquiry</button>
        </form>
      </div>
    </section>
  );
}