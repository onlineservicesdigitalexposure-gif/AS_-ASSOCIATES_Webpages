import { useRef } from "react";

export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
  as: Tag = "div",
  ...rest
}) {
  const ref = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;

    // Only ever schedule one style update per animation frame, no matter
    // how many mousemove events fire in between — this is what stops the
    // ghost/trail effect from outrunning the browser's paint cycle.
    if (frameRef.current) return;

    frameRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const x = Math.round(e.clientX - (rect.left + rect.width / 2));
      const y = Math.round(e.clientY - (rect.top + rect.height / 2));

      el.style.setProperty("--magnetic-duration", "0.15s");
      el.style.setProperty("--magnetic-ease", "ease-out");
      el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
      frameRef.current = null;
    });
  };

  const handleMouseLeave = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--magnetic-duration", "0.5s");
    el.style.setProperty("--magnetic-ease", "cubic-bezier(0.22, 1, 0.36, 1)");
    el.style.transform = "translate3d(0px, 0px, 0)";
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