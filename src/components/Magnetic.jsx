import { useRef } from "react";

/**
 * Wraps any element and makes it "stick" to the cursor within its bounds,
 * then spring back when the cursor leaves. Pass `strength` (0–1) to control
 * how far it follows — lower = subtler pull.
 *
 * Use `as` to render the magnetic element itself as the visual card
 * (e.g. as="div" with your card's border/background classes) so the
 * border moves together with the content, not just the text inside it.
 */
export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
  as: Tag = "div",
  ...rest
}) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // Only touch the transform-specific transition speed via CSS variables,
    // so any other transitions the card defines (hover background, border,
    // shadow, etc.) in CSS keep working undisturbed.
    el.style.setProperty("--magnetic-duration", "0.15s");
    el.style.setProperty("--magnetic-ease", "ease-out");
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--magnetic-duration", "0.5s");
    el.style.setProperty("--magnetic-ease", "cubic-bezier(0.22, 1, 0.36, 1)");
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <Tag
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
