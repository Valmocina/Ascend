import { useState } from "react";
import logo from "../../../logo.png";
import "./Sidebar.css";

const navigation = [
  ["Services", "#services"],
  ["Process", "#process"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="site-header__brand" href="#top" aria-label="Ascend Business Solutions home">
        <img src={logo} alt="" />
        <span>Ascend <small>Business Solutions</small></span>
      </a>
      <nav id="site-navigation" className={`site-header__nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
        {navigation.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </nav>
      <a className="site-header__contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
      <button
        className="site-header__toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
}
