import { siteInfo } from "../data/siteInfo.js";
import Magnetic from "./Magnetic.jsx";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <div className="hero__plate" aria-hidden="true" />
      <div className="hero__inner">
        <p className="hero__eyebrow hero-anim hero-anim--1">
          Ayan Chakraborty &middot; Sudeshna Basu Roy 
        </p>

        <h1 className="hero__title">
          <span className="hero-anim hero-anim--2">Judicious counsel,</span>
          <span className="hero-anim hero-anim--3">rooted in old Calcutta.</span>
        </h1>

        <p className="hero__lede hero-anim hero-anim--4">
          {siteInfo.firmName} is the practice of Advocate Ayan Chakraborty and Advocate Sudeshna Basu Roy, located a few
          steps from the Great Eastern Hotel, handling criminal, matrimonial,
          property and corporate matters before the Calcutta High Court and
          subordinate courts.
        </p>

        <div className="hero__actions hero-anim hero-anim--5">
          <Magnetic as="button" strength={0.3} className="btn btn--primary" onClick={() => scrollTo("contact")} style={{ borderRadius: "12px" }}>
            Book a Consultation
          </Magnetic>
          <Magnetic as="button" strength={0.3} className="btn btn--ghost" onClick={() => scrollTo("services")} style={{ borderRadius: "12px" }}>
            View Practice Areas
          </Magnetic>
        </div>
      </div>

      <div className="hero__seal" aria-hidden="true">
        <img src="/images/logo.png" alt="" className="hero__seal-img" />
      </div>

      {/* <button
        className="scroll-cue"
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
      >
        <span className="scroll-cue__line" />
        Scroll
      </button> */}
    </section>
  );
}
