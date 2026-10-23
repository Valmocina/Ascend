import { useState } from "react";
import logo from "../../../logo.png";
import "./Sidebar.css";

const navigation = [
  ["Services", "#services", "#8b5cf6"],
  ["Process", "#process", "#3b82f6"],
  ["FAQ", "#faq", "#10b981"],
  ["Contact", "#contact", "#8b5cf6"],
];

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[200] flex h-[54px] items-center justify-between border-b border-white/[0.04] bg-[#04060a] px-5 lg:hidden">
        <a href="#top" aria-label="Ascend Business Solutions home">
          <img className="h-8 w-8 rounded-full object-cover" src={logo} alt="Ascend Business Solutions" />
        </a>
        <button
          className="cursor-pointer border-0 bg-transparent text-[1.375rem] text-white"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      <nav id="mobile-drawer" aria-label="Mobile navigation" className={`mobile-drawer ${menuOpen ? "flex" : "hidden"} fixed inset-x-0 bottom-0 top-[54px] z-[199] flex-col overflow-y-auto bg-[#04060a] px-5 py-6 lg:hidden`}>
        {navigation.map(([label, href, color]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)} className="border-b border-white/[0.03] py-4 pl-3.5 text-[0.9375rem] font-semibold uppercase tracking-[0.06em] text-slate-500 no-underline" style={{ borderLeft: `3px solid ${color}` }}>
            {label}
          </a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-6 bg-gradient-to-br from-violet-600 to-blue-500 px-3.5 py-3.5 text-center font-bold text-white no-underline">
          Get in Touch →
        </a>
      </nav>
      <aside className="fixed inset-y-0 left-0 z-[100] hidden w-[260px] flex-col overflow-y-auto border-r border-white/[0.04] bg-[#04060a] lg:flex">
        <a href="#top" className="border-b border-white/[0.04] p-6 no-underline">
          <img className="block h-[130px] w-[130px] rounded-full object-cover" src={logo} alt="Ascend Business Solutions logo" />
        </a>
        <nav className="flex flex-1 flex-col gap-0.5 py-5" aria-label="Main navigation">
          {navigation.map(([label, href, color]) => (
            <a key={label} href={href} className="sidebar__link group flex items-center gap-3 border-l-[3px] border-transparent px-6 py-3 text-base font-semibold uppercase tracking-[0.07em] text-slate-500 no-underline transition hover:bg-white/[0.02] hover:text-slate-100" style={{ "--link-color": color }}>
              <span className="h-1.5 w-1.5 shrink-0" style={{ backgroundColor: color }} />
              {label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2.5 border-t border-white/[0.04] px-6 py-5 text-sm leading-snug text-slate-600">
          <p>☎ <span className="ml-1">0952 441 6825</span></p>
          <p className="break-all">✉ <span className="ml-1">ascend.bsolutions.ph@outlook.com</span></p>
          <p>⌖ <span className="ml-1">Parañaque, Philippines</span></p>
        </div>
        <div className="border-t border-white/[0.04] p-6">
          <a href="#contact" className="block bg-gradient-to-br from-violet-600 to-blue-500 p-3.5 text-center text-[0.95rem] font-bold tracking-wide text-white no-underline transition-opacity hover:opacity-85">
            Get in Touch →
          </a>
        </div>
      </aside>
    </>
  );
}
