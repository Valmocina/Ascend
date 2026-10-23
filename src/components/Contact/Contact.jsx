import SectionLabel from "../SectionLabel/SectionLabel.jsx";
import "./Contact.css";

const contacts = [
  ["Facebook", "facebook.com/ascendbsolutions", "https://www.facebook.com/ascendbsolutions", "contact-card--facebook"],
  ["Messenger", "m.me/ascendbsolutions", "https://m.me/ascendbsolutions", "contact-card--messenger"],
  ["Email Us", "ascend.bsolutions.ph@outlook.com", "mailto:ascend.bsolutions.ph@outlook.com", "contact-card--email"],
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section bg-[#0d0620]">
      <div className="contact-section__layout grid lg:grid-cols-2">
        <div className="relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden bg-[#08041a] px-8 py-14 lg:min-h-[540px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,#8b5cf620_0%,transparent_70%)]" />
          <img className="relative mb-8 h-48 w-48 rounded-full object-cover lg:h-60 lg:w-60" src="/logo.png" alt="Ascend Business Solutions" />
          <div className="relative text-center">
            <div className="mb-2 font-display text-lg text-white">Ascend Business Solutions</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-violet-700">Reliable People. Exceptional Results.</div>
            <div className="brand-bar mx-auto mt-6 w-20" />
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-14 lg:py-14">
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="mb-4 font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-tight text-white">Let's talk about <em className="text-violet-300">your needs.</em></h2>
          <p className="mb-10 text-[1.0625rem] leading-[1.75] text-violet-200">Reach out through any channel below. We respond within a few hours — no bots, no auto-replies.</p>
          <div className="mb-8 flex flex-col gap-3">
            {contacts.map(([title, detail, href, style]) => (
              <a key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={`contact-card ${style}`}>
                <span className="text-xl" aria-hidden="true">{title === "Facebook" ? "f" : title === "Messenger" ? "◉" : "✉"}</span>
                <span className="min-w-0">
                  <span className="block text-base font-semibold text-slate-50">{title}</span>
                  <span className="block break-all text-sm text-slate-400">{detail}</span>
                </span>
                <span className="ml-auto shrink-0 text-slate-600" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.06] pt-5 text-[0.9375rem] font-medium text-slate-300">
            <span>☎ <span className="ml-1">0952 441 6825</span></span>
            <span>⌖ <span className="ml-1">Parañaque, Philippines</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
