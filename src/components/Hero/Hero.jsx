import "./Hero.css";

const stats = [
  ["10+", "Service specialties", "#8b5cf6"],
  ["100%", "Remote ready", "#3b82f6"],
  ["24/7", "Flexible coverage", "#10b981"],
  ["PH", "Based & trusted", "#8b5cf6"],
];

export default function Hero() {
  return (
    <section id="top" className="hero-section bg-[#04060a] px-5 py-12 sm:px-10 lg:px-16 lg:py-20">
      <div className="brand-bar mb-12" />
      <div className="mb-8 flex items-center gap-3">
        <span className="h-2 w-2 shrink-0 bg-emerald-500" />
        <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-emerald-500">Philippines · Serving Businesses Worldwide</span>
      </div>
      <h1 className="mb-2 font-display text-[clamp(2.5rem,5.5vw,6rem)] leading-[0.95] tracking-[-0.02em] text-white">Reliable People.</h1>
      <h1 className="brand-gradient mb-12 font-display text-[clamp(2.5rem,5.5vw,6rem)] leading-[0.95] tracking-[-0.02em]">Exceptional Results.</h1>
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="border-b border-white/[0.06] pb-8 lg:border-b-0 lg:border-r lg:border-white/[0.06] lg:pb-0 lg:pr-12">
          <p className="mb-8 text-lg font-normal leading-[1.75] text-slate-200">
            Ascend Business Solutions provides elite Filipino virtual assistants to help founders and business leaders streamline operations, reduce workload, and scale with confidence.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="bg-gradient-to-br from-violet-600 to-blue-500 px-7 py-3.5 text-sm font-bold text-white no-underline shadow-[0_0_28px_#7c3aed40]" href="#contact">Get in Touch →</a>
            <a className="border border-white/[0.08] px-5 py-3.5 text-sm font-semibold text-slate-400 no-underline" href="#services">Our Services</a>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-6 lg:pl-12 lg:pt-0">
          {stats.map(([value, label, color], index) => (
            <div key={label} className={`p-5 ${index % 2 === 0 ? "border-r border-white/[0.03]" : ""} ${index < 2 ? "border-b border-white/[0.03]" : ""}`}>
              <div className="font-display text-4xl leading-none" style={{ color }}>{value}</div>
              <div className="mt-1 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
