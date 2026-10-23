import { useState } from "react";
import SectionLabel from "../SectionLabel/SectionLabel.jsx";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import "./FAQ.css";

const questions = [
  ["Where are your VAs based?", "All our virtual assistants are based in the Philippines, operating from Parañaque. We serve businesses worldwide across multiple time zones."],
  ["How quickly can I get started?", "Most clients are matched and fully onboarded within 48–72 hours of their initial consultation call."],
  ["What tools do your VAs use?", "Our VAs are proficient in Google Workspace, Microsoft 365, Asana, Notion, Slack, HubSpot, QuickBooks, and most major CRMs and project management platforms."],
  ["Is there a long-term contract?", "No. Our engagements are flexible. You can scale up, pause, or end the engagement with reasonable notice — no lock-in periods."],
];

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const reveal = useScrollReveal();

  return (
    <section ref={reveal.ref} id="faq" className={`faq-section ${reveal.className} bg-[#021a12] px-5 py-12 sm:px-10 lg:px-16 lg:py-20`}>
      <div className="faq-section__layout grid items-start gap-6 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div className="lg:sticky lg:top-8">
          <SectionLabel color="#34d399" line="#10b981">FAQ</SectionLabel>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-tight text-white">Common <em className="text-emerald-400">questions.</em></h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.75] text-emerald-300">Can't find your answer? Reach out via Messenger or email — we reply fast.</p>
        </div>
        <div className="faq-section__questions reveal-stagger border-t border-white/[0.06]">
          {questions.map(([question, answer], index) => {
            const isOpen = openQuestion === index;
            return (
              <div key={question} className="border-b border-white/[0.03]">
                <button className="flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent py-6 text-left" aria-expanded={isOpen} onClick={() => setOpenQuestion(isOpen ? null : index)}>
                  <span className="text-[1.0625rem] font-semibold tracking-wide text-slate-50">{question}</span>
                  <span className={`shrink-0 text-2xl leading-none text-emerald-500 transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                {isOpen && <p className="pb-6 text-base leading-[1.8] text-emerald-200">{answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
