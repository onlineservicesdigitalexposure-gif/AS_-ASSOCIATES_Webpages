import { useState } from "react";
import ScrollReveal from "./ScrollReveal.jsx";
import Lightbox from "./Lightbox.jsx";
import { gallery } from "../data/gallery.js";


const INITIAL_COUNT = 6;

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setActiveIndex((i) => (i + 1) % gallery.length);

  const visibleImages = showAll ? gallery : gallery.slice(0, INITIAL_COUNT);
  const hasMore = gallery.length > INITIAL_COUNT;

  return (
    <section id="gallery" className="section section--gallery">
      <div className="section__inner">
        <ScrollReveal as="p" className="section-label">
          03 — Gallery
        </ScrollReveal>
        <ScrollReveal as="h2" delay={60} className="section-title">
          A Glimpse of the Chamber
        </ScrollReveal>

        <div className="gallery-grid">
          {visibleImages.map((image, i) => (
            <ScrollReveal
              as="div"
              key={image.src}
              delay={(i % 3) * 90}
              className="gallery-grid__item"
            >
              <span
                className="gallery-grid__item-inner"
                onClick={() => setActiveIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActiveIndex(i)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <span className="gallery-grid__caption">{image.caption}</span>
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
      {hasMore && (
        <div className="gallery-more">
          <button className="btn btn--ghost" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Show Less" : `View More (${gallery.length - INITIAL_COUNT})`}
          </button>
        </div>
      )}
      {activeIndex !== null && (
        <Lightbox
          image={gallery[activeIndex]}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
