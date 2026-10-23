import SectionLabel from "../SectionLabel/SectionLabel.jsx";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import "./Services.css";

const services = [
  ["Executive Assistance", "Proactive executive support including calendar, inbox, travel, meeting coordination, and administrative management.", "#8b5cf6"],
  ["Operations Support", "Process improvement, SOP documentation, CRM management, reporting, and day-to-day operational assistance.", "#3b82f6"],
  ["Cold Calling", "Professional outbound calling to generate leads, qualify opportunities, and schedule sales appointments.", "#10b981"],
  ["Social Media Management", "Content scheduling, community engagement, basic graphic creation, and social media account management.", "#8b5cf6"],
  ["Project Coordination", "Coordinate projects, deadlines, stakeholders, documentation, and workflows to keep operations running efficiently.", "#3b82f6"],
  ["Appointment Setting", "Schedule meetings, manage calendars, qualify prospects, and coordinate appointments with clients and stakeholders.", "#10b981"],
  ["Lead Generation", "Build targeted prospect lists, conduct market research, qualify leads, and support business development initiatives.", "#8b5cf6"],
  ["Customer Support", "Professional customer service via email, chat, and phone with a focus on timely communication and client satisfaction.", "#3b82f6"],
  ["Bookkeeping & Accounting", "Bookkeeping, accounts payable/receivable, bank reconciliations, invoicing, payroll support, and financial reporting.", "#10b981"],
  ["Virtual Assistance", "Reliable virtual support tailored to streamline operations, improve productivity, and reduce administrative workload.", "#8b5cf6"],
];

export default function Services() {
  const reveal = useScrollReveal();

  return (
    <section ref={reveal.ref} id="services" className={`services-section ${reveal.className} bg-[#1e1040] px-5 py-12 sm:px-10 lg:px-16 lg:py-20`}>
      <SectionLabel>What We Offer</SectionLabel>
      <h2 className="mb-3 font-display text-[clamp(1.75rem,4vw,3rem)] leading-tight text-white">Our <em className="text-violet-300">Services</em></h2>
      <p className="mb-10 max-w-2xl text-lg leading-[1.75] text-violet-200">
        Request what you need — we can provide it. From executive support to bookkeeping, our VAs are trained across every business function.
      </p>
      <div className="services-section__grid reveal-stagger grid gap-px bg-white/[0.08]">
        {services.map(([title, description, color]) => (
          <article key={title} className="bg-[#0a0e16] p-7 transition-colors hover:bg-[#0f1420]">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-2 w-2 shrink-0" style={{ backgroundColor: color }} />
              <h3 className="text-[1.0625rem] font-bold tracking-wide text-slate-50">{title}</h3>
            </div>
            <p className="text-[0.9375rem] leading-[1.7] text-slate-300">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
