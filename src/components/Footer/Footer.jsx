import logo from "../../../logo.png";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import "./Footer.css";

const serviceLinks = ["Executive Assistance", "Operations Support", "Cold Calling", "Social Media", "Lead Generation", "Bookkeeping"];
const contactLinks = [
  ["Facebook", "https://www.facebook.com/profile.php?id=61562351609924"],
  ["Messenger", "https://m.me/61562351609924"],
  ["LinkedIn", "https://www.linkedin.com/company/ascend-business-solutions-ph/home/"],
  ["ascend.bsolutions.ph@outlook.com", "mailto:ascend.bsolutions.ph@outlook.com"],
  ["0952 441 6825", "tel:+639524416825"],
];
const socialLinks = [
  ["FB", contactLinks[0][1], 0],
  ["MSG", contactLinks[1][1], 1],
  ["in", contactLinks[2][1], 2],
  ["✉", contactLinks[3][1], 3],
];

function FooterLink({ href, children, external = false }) {
  return (
    <a className="footer-link mb-3 block break-words text-[0.9375rem] text-slate-300 no-underline transition hover:text-violet-300" href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      {children}
    </a>
  );
}

export default function Footer() {
  const reveal = useScrollReveal();

  return (
    <footer ref={reveal.ref} className={`footer-section ${reveal.className} bg-[#020408] px-5 py-10 sm:px-10 lg:px-16`}>
      <div className="footer-section__columns reveal-stagger mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-12">
        <div>
          <img className="mb-4 h-[100px] w-[100px] rounded-full object-cover" src={logo} alt="Ascend Business Solutions" />
          <p className="mb-6 max-w-xs text-base leading-[1.7] text-slate-400">Reliable People. Exceptional Results. — Serving businesses worldwide from the Philippines.</p>
          <div className="flex gap-2">
            {socialLinks.map(([label, href, index]) => (
              <a key={label} href={href} target={index < 3 ? "_blank" : undefined} rel={index < 3 ? "noopener noreferrer" : undefined} className={`footer-social footer-social--${index}`}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-100">Services</h3>
          {serviceLinks.map((label) => <FooterLink key={label} href="#services">{label}</FooterLink>)}
        </div>
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-100">Contact</h3>
          {contactLinks.map(([label, href]) => (
            <FooterLink key={label} href={href} external={href.startsWith("https://")}>{label}</FooterLink>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-sm text-slate-500">
        <p>© 2025 Ascend Business Solutions. All rights reserved.</p>
        <p>Parañaque, Philippines · Serving Businesses Worldwide</p>
      </div>
    </footer>
  );
}
