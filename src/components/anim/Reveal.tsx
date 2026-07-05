import { createElement, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Direction the element travels from */
  direction?: "up" | "left" | "right" | "scale";
  /** Delay in ms before the reveal starts */
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

/** Fades and slides children in the first time they scroll into view. */
const Reveal = ({ children, className, direction = "up", delay = 0, as: Tag = "div" }: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return createElement(
    Tag,
    {
      ref,
      className: cn(
        "reveal-hidden",
        direction === "left" && "reveal-left",
        direction === "right" && "reveal-right",
        direction === "scale" && "reveal-scale",
        visible && "reveal-visible",
        className
      ),
      style: { "--reveal-delay": `${delay}ms` } as React.CSSProperties,
    },
    children
  );
};

export default Reveal;
