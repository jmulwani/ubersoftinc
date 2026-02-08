import { Monitor, Shield, Cloud, Headphones, Server, Settings } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "IT Consulting",
    desc: "Strategic technology consulting to align your IT infrastructure with business goals.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Comprehensive security solutions to protect your organization from evolving threats.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Migration, management and optimization of cloud infrastructure for maximum efficiency.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    desc: "24/7 expert support to keep your systems running smoothly and your team productive.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    desc: "Design, deployment and management of robust IT infrastructure tailored to your needs.",
  },
  {
    icon: Settings,
    title: "System Administration",
    desc: "Proactive system administration including SCCM, Citrix, and enterprise platforms.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Services We Provide
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-lg border border-border bg-card hover:bg-primary transition-colors duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-md bg-secondary/15 group-hover:bg-secondary/20 flex items-center justify-center mb-5 transition-colors">
                <s.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary-foreground mb-3 transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/70 text-sm leading-relaxed transition-colors">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
