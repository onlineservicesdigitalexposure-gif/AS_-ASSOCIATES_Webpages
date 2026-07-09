import ScrollReveal from "./ScrollReveal.jsx";
import Magnetic from "./Magnetic.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <section id="services" className="section section--services">
      <div className="section__inner">
        <ScrollReveal as="p" className="section-label section-label--center">
          02 — Practice Areas
        </ScrollReveal>
        <ScrollReveal as="h2" delay={60} className="section-title section-title--center">
          Our Services
        </ScrollReveal>
        <ScrollReveal
          as="p"
          delay={100}
          className="section-intro section-intro--center"
        >
          Every matter the chamber accepts is filed under one of the areas
          below. Select a concern to see how the firm can help.
        </ScrollReveal>

        <ul className="docket">
          {services.map((service, i) => (
            <ScrollReveal
              as="li"
              key={service.code}
              delay={(i % 4) * 70}
              className="docket__cell"
            >
              <Magnetic as="div" strength={0.25} className="docket__item">
                <span className="docket__code">{service.code}</span>
                <div className="docket__body">
                  <h3 className="docket__title">{service.title}</h3>
                  <p className="docket__desc">{service.description}</p>
                </div>
              </Magnetic>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
