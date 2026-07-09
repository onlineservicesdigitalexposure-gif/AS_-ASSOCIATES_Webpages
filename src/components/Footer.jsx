import { siteInfo } from "../data/siteInfo.js";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src="/images/favicon.png" alt="AS Associates" className="brand__mark brand__mark--footer" />
          <div>
            <p className="site-footer__firm">{siteInfo.firmName}</p>
            <p className="site-footer__advocate">Trusted legal counsel for individuals and businesses across Calcutta. Providing strategic legal advice, effective representation, and personalized solutions across civil, corporate, criminal, property, and family law. We are committed to protecting your rights with integrity, professionalism, and results-driven advocacy.</p>
          </div>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          {LINKS.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>

        <address className="site-footer__address">
          {siteInfo.addressLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <a href={`tel:${siteInfo.phoneRaw}`}>{siteInfo.phoneDisplay}</a>
          <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
        </address>
      </div>

      <div className="site-footer__bar">
        <span>&copy; {year} {siteInfo.firmName}. All rights reserved.</span>
        <span>
          Design and developed by{" "}
          
          <a  href="https://www.teamdeoskolkata.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__credit-link"
          >
            Digital Exposure Online Services
          </a>
        </span>
      </div>
    </footer>
  );
}
