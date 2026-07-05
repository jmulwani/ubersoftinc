import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/anim/Reveal";
import CountUp from "@/components/anim/CountUp";
import AzureConsole from "@/components/anim/AzureConsole";

const highlights = [
  "Custom-made strategies for every client",
  "Decades of combined enterprise expertise",
  "Long-term partnerships, not one-off projects",
];

const stats = [
  { end: 10, suffix: "+", label: "Years Experience" },
  { end: 200, suffix: "+", label: "Clients Served" },
  { end: 98, suffix: "%", label: "Satisfaction Rate" },
  { literal: "24/7", label: "Support Available" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div
        className="absolute top-1/3 -left-40 w-[420px] h-[420px] rounded-full bg-gold opacity-[0.05] blur-[130px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="text-gold font-semibold text-sm tracking-[0.25em] uppercase mb-4">About Us</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight">
                Creative and Tailored Solutions to{" "}
                <span className="text-gradient-gold">Develop Brands</span> and Businesses
              </h2>
            </Reveal>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <Reveal delay={200}>
                <p>
                  Ubersoft Consulting was founded in 2012 with a single mission: to be the most
                  professional, creative and helpful consulting agency in North America. We approach
                  each of our clients with fresh eyes and develop custom-made strategies.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p>
                  Though we've grown since our establishment, we're still the same agency at heart —
                  passionate about delivering results that exceed expectations. Our team brings decades
                  of combined expertise in IT consulting, system administration, technical support, and
                  enterprise solutions.
                </p>
              </Reveal>
            </div>

            <ul className="mt-8 space-y-3">
              {highlights.map((h, i) => (
                <Reveal key={h} delay={400 + i * 100}>
                  <li className="flex items-center gap-3 text-foreground/90">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    <span>{h}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal direction="right" delay={200}>
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-blue-500/10 blur-2xl"
                aria-hidden="true"
              />
              <AzureConsole />
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-24 rounded-2xl overflow-hidden border border-border bg-border">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} className="bg-card">
              <div className="text-center py-10 px-4 transition-colors duration-300 hover:bg-secondary group">
                <p className="text-4xl md:text-5xl font-display font-bold text-gold mb-2 transition-transform duration-300 group-hover:scale-110">
                  {"literal" in stat && stat.literal ? (
                    stat.literal
                  ) : (
                    <CountUp end={stat.end!} suffix={stat.suffix} />
                  )}
                </p>
                <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-[0.15em]">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
