import { useEffect } from "react";

export default function Lightbox({ image, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        &times;
      </button>
      <button
        className="lightbox__arrow lightbox__arrow--left"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        &#8249;
      </button>

      <figure
        className="lightbox__figure"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image.src} alt={image.alt} />
        <figcaption>{image.caption}</figcaption>
      </figure>

      <button
        className="lightbox__arrow lightbox__arrow--right"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        &#8250;
      </button>
    </div>
  );
}
