import { Mail, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/anim/Reveal";
import SpotlightCard from "@/components/anim/SpotlightCard";

const channels = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@ubersoftinc.com",
    href: "mailto:info@ubersoftinc.com",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-gold opacity-[0.06] blur-[140px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <p className="text-gold font-semibold text-sm tracking-[0.25em] uppercase mb-4">Get In Touch</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              Let's Build Something
              <br />
              <span className="text-gradient-gold">Great Together</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-muted-foreground text-lg">
              Tell us about your project — we'll get back to you within one business day.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 max-w-md mx-auto">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={300 + i * 120}>
              <a href={c.href} className="block h-full">
                <SpotlightCard className="h-full rounded-2xl bg-card border border-border p-8 group hover:border-gold/40 transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-gold group-hover:rotate-6">
                      <c.icon className="w-6 h-6 text-gold transition-colors duration-500 group-hover:text-primary-foreground" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all duration-300 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="text-muted-foreground text-sm uppercase tracking-[0.15em] mb-2">{c.label}</p>
                  <p className="text-foreground font-medium text-lg group-hover:text-gold transition-colors duration-300 break-all">
                    {c.value}
                  </p>
                </SpotlightCard>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
