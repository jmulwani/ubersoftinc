import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees; 0 disables tilt */
  tilt?: number;
}

/**
 * Card with a cursor-tracked radial spotlight and a subtle 3D tilt.
 * Pair with the `spotlight-card` / `glow-border` CSS utilities.
 */
const SpotlightCard = ({ children, className, tilt = 5 }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);

    if (tilt > 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const px = x / rect.width - 0.5;
      const py = y / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * tilt}deg) rotateX(${-py * tilt}deg) translateY(-2px)`;
    }
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("spotlight-card glow-border transition-transform duration-300 ease-out", className)}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
