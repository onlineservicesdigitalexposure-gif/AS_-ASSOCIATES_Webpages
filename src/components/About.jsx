import ScrollReveal from "./ScrollReveal.jsx";

export default function About() {
  return (
    <section id="about" className="section section--about">
      <div className="section__inner about__grid">
        <div className="about__content">
          <ScrollReveal as="div" className="about__mark">
            <span className="section-label">01 — About the Firm</span>
          </ScrollReveal>

          <ScrollReveal as="h2" className="section-title">
            A chamber built on discretion and diligence.
          </ScrollReveal>

          <ScrollReveal as="p" delay={80} className="about__para">
            AS Associates is led by Advocate <strong>Ayan Chakraborty</strong>, who holds key government appointments as <strong>Additional Senior Public Prosecutor for the State of West Bengal</strong> and <strong>Special Counsel for the Central Bureau of Investigation (CBI), Kolkata</strong>, with <strong>over 25 years of legal experience</strong>, and Advocate <strong>Sudeshna Basu Roy</strong>, who brings <strong>more than 22 years of experience</strong> to the practice.
          </ScrollReveal>

          <ScrollReveal as="div" delay={120} className="about__appointments">
            <div className="about__appointment-card">
              <span className="about__appointment-badge-label">Official Appointment</span>
              <h4 className="about__appointment-title">Additional Senior Public Prosecutor</h4>
              <p className="about__appointment-sub">State of West Bengal</p>
            </div>
            <div className="about__appointment-card">
              <span className="about__appointment-badge-label">Official Appointment</span>
              <h4 className="about__appointment-title">Special Counsel</h4>
              <p className="about__appointment-sub">Central Bureau of Investigation (CBI), Kolkata</p>
            </div>
          </ScrollReveal>

          <ScrollReveal as="p" delay={160} className="about__para">
            Operating from <strong>Chowringhee</strong> in the heart of Kolkata's historic legal district, just a short walk from the Calcutta High Court and the offices of the Registrar, the chamber provides <strong>trusted legal representation</strong> across criminal defence, matrimonial and family disputes, property due diligence, company law, and tribunal matters. With decades of combined experience, the firm is committed to delivering meticulous legal counsel and personalized attention.
          </ScrollReveal>

          <ScrollReveal as="p" delay={200} className="about__para">
            Every engagement begins with a plain-language reading of the
            client's position, followed by a considered course of action —
            not a one-size answer. The address on Abdul Hamid Street, once
            British India Street, is itself a reminder that this part of
            Kolkata has watched over the city's law for generations.
          </ScrollReveal>

          <ScrollReveal as="div" delay={240} className="about__stats">
            <div className="about__stat">
              <span className="about__stat-num">18+</span>
              <span className="about__stat-label">practice areas covered</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">25+</span>
              <span className="about__stat-label">years of experience</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">6</span>
              <span className="about__stat-label">days a week available</span>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal as="div" delay={120} className="about__image">
          <img src="/images/gallery/details.jpeg" alt="AS Associates — firm details and contact card" />
        </ScrollReveal>
      </div>
    </section>
  );
}
