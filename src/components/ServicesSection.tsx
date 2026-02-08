import { Monitor, Shield, Cloud, Headphones, Server, Settings } from "lucide-react";

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
    <section id="services" className="py-24 bg-hero-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            Services We Provide
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 border border-white/10 bg-white/5 hover:bg-gold hover:border-gold transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 border border-gold/50 group-hover:border-section-dark flex items-center justify-center mb-6 transition-colors">
                <s.icon className="w-7 h-7 text-gold group-hover:text-section-dark transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground group-hover:text-section-dark mb-4 transition-colors">
                {s.title}
              </h3>
              <p className="text-primary-foreground/60 group-hover:text-section-dark/80 text-sm leading-relaxed transition-colors">
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
