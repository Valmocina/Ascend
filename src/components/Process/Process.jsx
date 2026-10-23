import SectionLabel from "../SectionLabel/SectionLabel.jsx";
import "./Process.css";

const steps = [
  ["01", "Free Consultation", "Tell us your needs and goals. We identify the right VA profile and service mix for your business.", "#8b5cf6", "#0f1e38"],
  ["02", "Match & Onboard", "We match you with a trained VA aligned to your industry and tools, onboarded within 48–72 hours.", "#3b82f6", "#0c1930"],
  ["03", "Delegate & Scale", "Your VA gets to work immediately, proactively supporting your operations so you can grow faster.", "#10b981", "#091525"],
];

export default function Process() {
  return (
    <section id="process" className="process-section bg-[#0a1628] px-5 py-12 sm:px-10 lg:px-16 lg:py-20">
      <SectionLabel color="#60a5fa" line="#3b82f6">How It Works</SectionLabel>
      <h2 className="mb-12 font-display text-[clamp(1.75rem,4vw,3rem)] leading-tight text-white">Up and running in <em className="text-blue-400">three steps.</em></h2>
      <div className="process-section__grid grid gap-6 lg:grid-cols-3">
        {steps.map(([number, title, description, color, background]) => (
          <article key={number} className="border-t-[3px] p-7" style={{ backgroundColor: background, borderColor: color }}>
            <div className="mb-5 font-display text-6xl leading-none opacity-30" style={{ color }}>{number}</div>
            <h3 className="mb-2.5 font-display text-2xl text-white">{title}</h3>
            <p className="text-base leading-[1.75] text-slate-300">{description}</p>
          </article>
        ))}
      </div>
      <a href="#contact" className="mt-10 inline-block bg-gradient-to-br from-violet-500 to-blue-500 px-8 py-3.5 text-sm font-bold text-white no-underline shadow-[0_0_24px_#3b82f630]">
        Book a Free Consultation →
      </a>
    </section>
  );
}
