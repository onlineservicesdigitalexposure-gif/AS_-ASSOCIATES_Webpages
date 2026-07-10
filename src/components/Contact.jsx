import { useState } from "react";
import ScrollReveal from "./ScrollReveal.jsx";
import { siteInfo } from "../data/siteInfo.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation request from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section section--contact">
      <div className="section__inner">
        <div className="contact__grid">
          <div>
            <ScrollReveal as="p" className="section-label">
              04 — Contact
            </ScrollReveal>
            <ScrollReveal as="h2" delay={60} className="section-title">
              Schedule a Consultation
            </ScrollReveal>
            <ScrollReveal as="p" delay={100} className="section-intro">
              Reach the chamber directly by phone or email, or send the details
              of your matter below.
            </ScrollReveal>

            {/* <ScrollReveal as="div" delay={140} className="ornamental-rule">
              <span className="ornamental-rule__glyph">❦</span>
            </ScrollReveal> */}

            <ScrollReveal as="div" delay={160} className="contact-info-panel">
              <img src="/images/favicon.png" alt="" className="contact-seal" aria-hidden="true" />
              <ul className="contact-details">
                <li className="contact-details__row">
                  
                  <a  href={`https://maps.google.com/maps?q=${encodeURIComponent(siteInfo.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-details__item contact-details__item--link"
                  >
                    <span className="contact-details__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </span>
                    <span className="contact-details__content">
                      <span className="contact-details__label">Address</span>
                      <address className="contact-details__value">
                        1 Abdul Hamid Street (Previously known as British India Street) Chowringhee, North Esplanade (Landmark: Great Eastern Hotel) Kolkata, West Bengal, 700069
                      </address>
                    </span>
                  </a>
                </li>
                <li className="contact-details__row">
                  <a href={`tel:${siteInfo.phoneRaw}`} className="contact-details__item contact-details__item--link">
                    <span className="contact-details__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
                      </svg>
                    </span>
                    <span className="contact-details__content">
                      <span className="contact-details__label">Phone</span>
                      <span className="contact-details__value">{siteInfo.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
                <li className="contact-details__row">
                  <a href={`mailto:${siteInfo.email}`} className="contact-details__item contact-details__item--link">
                    <span className="contact-details__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    </span>
                    <span className="contact-details__content">
                      <span className="contact-details__label">Email</span>
                      <span className="contact-details__value">{siteInfo.email}</span>
                    </span>
                  </a>
                </li>
                <li className="contact-details__row">
                  <div className="contact-details__item">
                    <span className="contact-details__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3.5 2" />
                      </svg>
                    </span>
                    <span className="contact-details__content">
                      <span className="contact-details__label">Hours</span>
                      <span className="contact-details__value">{siteInfo.officeHours}</span>
                    </span>
                  </div>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal as="form" delay={120} className="contact-form" onSubmit={handleSubmit}>
            <p className="contact-form__label">Case Enquiry</p>
            <label>
              Full Name
              <input type="text" required value={form.name} onChange={update("name")} placeholder="Your name" />
            </label>
            <label>
              Phone Number
              <input type="tel" required value={form.phone} onChange={update("phone")} placeholder="Your contact number" />
            </label>
            <label>
              Briefly describe your matter
              <textarea
                required
                rows={3}
                value={form.message}
                onChange={update("message")}
                placeholder="e.g. I need help with a property title search"
              />
            </label>
            <button type="submit" className="btn btn--primary">
              {sent ? "Opening your mail app…" : "Send Enquiry"}
            </button>
              <p className="contact-form__note">
                Submitting opens your email app with these details pre-filled to{" "}
                {siteInfo.email}.
              </p>
          </ScrollReveal>
        </div>

        <ScrollReveal as="div" delay={200} className="contact-map contact-map--full">
          <iframe
            title="Office location map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(siteInfo.mapQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}