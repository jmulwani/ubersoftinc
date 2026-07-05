import { Monitor, Shield, Cloud, Headphones, Server, Settings } from "lucide-react";
import Reveal from "@/components/anim/Reveal";
import SpotlightCard from "@/components/anim/SpotlightCard";

const services = [
  {
    icon: Monitor,
    title: "IT Consulting",
    desc: "Strategic technology consulting to align your IT infrastructure with business goals and drive digital transformation.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Comprehensive security solutions to protect your organization from evolving threats and ensure compliance.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Migration, management and optimization of cloud infrastructure on AWS, Azure, and hybrid environments.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    desc: "24/7 expert support to keep your systems running smoothly and your team productive with rapid response times.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    desc: "Design, deployment and management of robust IT infrastructure tailored to your specific business needs.",
  },
  {
    icon: Settings,
    title: "System Administration",
    desc: "Proactive system administration including SCCM, Citrix, Active Directory, and enterprise platforms.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Section backdrop */}
      <div className="absolute inset-0 bg-secondary/30" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 right-1/4 w-[460px] h-[460px] rounded-full bg-gold opacity-[0.05] blur-[140px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <p className="text-gold font-semibold text-sm tracking-[0.25em] uppercase mb-4">What We Do</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Services We <span className="text-gradient-gold">Provide</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-muted-foreground">
              End-to-end technology services designed to keep your organization fast, secure and future-proof.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 120}>
              <SpotlightCard className="h-full rounded-2xl bg-card border border-border p-8 group hover:border-gold/30 transition-colors duration-300">
                <div className="relative w-14 h-14 mb-6">
                  <div className="absolute inset-0 rounded-xl bg-gold/10 transition-all duration-500 group-hover:bg-gold/20 group-hover:scale-110 group-hover:rotate-6" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <s.icon className="w-7 h-7 text-gold transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-gold">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-gold/40 to-transparent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
