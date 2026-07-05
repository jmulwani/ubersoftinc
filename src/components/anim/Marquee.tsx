import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Seconds for one full loop */
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

/** Infinite horizontal scroller. Children are duplicated to create a seamless loop. */
const Marquee = ({ children, className, duration = 30, reverse = false, pauseOnHover = true }: MarqueeProps) => {
  return (
    <div className={cn("overflow-hidden", pauseOnHover && "marquee-paused", className)}>
      <div
        className={cn("flex w-max items-center", reverse ? "marquee-track-reverse" : "marquee-track")}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex items-center shrink-0">{children}</div>
        <div className="flex items-center shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
