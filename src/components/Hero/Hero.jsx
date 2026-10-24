import useScrollReveal from "../../hooks/useScrollReveal.js";
import "./Hero.css";

export default function Hero() {
  const reveal = useScrollReveal();

  return (
    <section ref={reveal.ref} id="top" className={`hero-section ${reveal.className}`}>
      <div className="hero-section__stars" aria-hidden="true" />
      <a className="hero-section__scroll hero-section__scroll--left" href="#services">Scroll to explore</a>
      <a className="hero-section__scroll hero-section__scroll--right" href="#services">Scroll to explore</a>

      <div className="hero-section__content">
        <p className="hero-section__eyebrow"><span /> Philippines · Supporting businesses worldwide</p>
        <h1>Reliable people.<br /><span>Exceptional results.</span></h1>
        <p className="hero-section__intro">
          Your next chapter starts with the right support.
        </p>
        <a className="hero-section__cta" href="#contact">Meet your team <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
