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

            <ScrollReveal as="ul" delay={160} className="contact-details">
              <li>
                <span className="contact-details__label">Address</span>
                <address>
                  {siteInfo.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </li>
              <li>
                <span className="contact-details__label">Phone</span>
                <a href={`tel:${siteInfo.phoneRaw}`}>{siteInfo.phoneDisplay}</a>
              </li>
              <li>
                <span className="contact-details__label">Email</span>
                <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
              </li>
              <li>
                <span className="contact-details__label">Hours</span>
                <span>{siteInfo.officeHours}</span>
              </li>
            </ScrollReveal>
          </div>

          <ScrollReveal as="form" delay={120} className="contact-form" onSubmit={handleSubmit}>
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