import ScrollReveal from "./ScrollReveal.jsx";
import { siteInfo } from "../data/siteInfo.js";

export default function About() {
  return (
    <section id="about" className="section section--about">
      <div className="section__inner about__grid">
        <ScrollReveal as="div" className="about__mark">
          <span className="section-label">01 — About the Firm</span>
        </ScrollReveal>

        <div className="about__content">
          <ScrollReveal as="h2" className="section-title">
            A chamber built on discretion and diligence.
          </ScrollReveal>

          <ScrollReveal as="p" delay={80} className="about__para">
            {siteInfo.firmName} is led by Advocates Ayan Chakraborty and Sudeshna Basu Roy, practising
            from Chowringhee in the heart of Kolkata's old court quarter — a
            short walk from the Calcutta High Court and the offices of the
            Registrar. The chamber takes on criminal defence, matrimonial and
            family matters, property due-diligence, and company and tribunal
            work, offering clients the same close attention whether the matter
            is a single affidavit or a multi-year litigation.
          </ScrollReveal>

          <ScrollReveal as="p" delay={160} className="about__para">
            Every engagement begins with a plain-language reading of the
            client's position, followed by a considered course of action —
            not a one-size answer. The address on Abdul Hamid Street, once
            British India Street, is itself a reminder that this part of
            Kolkata has watched over the city's law for generations.
          </ScrollReveal>

          <ScrollReveal as="div" delay={240} className="about__stats">
            <div className="about__stat">
              <span className="about__stat-num">15+</span>
              <span className="about__stat-label">practice areas covered</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">1</span>
              <span className="about__stat-label">chamber, direct access</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">6</span>
              <span className="about__stat-label">days a week available</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
