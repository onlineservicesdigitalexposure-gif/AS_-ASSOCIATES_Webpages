import { useEffect, useState } from "react";
import { siteInfo } from "../data/siteInfo.js";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site-header ${scrolled ? "site-header--solid" : ""}`}>
      <div className="site-header__inner">
        <button
        className="brand"
        onClick={() => handleNavClick("home")}
        aria-label="AS Associates, go to home"
      >
        <img src="/images/favicon.png" alt="" className="brand__mark" />
        <span className="brand__text">
          <span className="brand__name">AS Associates</span>
          {/* <span className="brand__sub">{siteInfo.advocateName}</span> */}
        </span>
      </button>

        <nav className="nav nav--desktop" aria-label="Primary">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav__link ${
                    active === item.id ? "nav__link--active" : ""
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* <a className="btn btn--ghost btn--small nav-cta" href={`tel:${siteInfo.phoneRaw}`} style={{ borderRadius: "8px" }}>
          Call Now
        </a> */}

        <button
          className={`menu-toggle ${menuOpen ? "menu-toggle--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`nav--mobile ${menuOpen ? "nav--mobile-open" : ""}`}
        aria-label="Mobile"
      >
        <ul>
          {NAV_ITEMS.map((item, i) => (
            <li key={item.id} style={{ transitionDelay: `${i * 45}ms` }}>
              <button
                className={active === item.id ? "nav__link--active" : ""}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
