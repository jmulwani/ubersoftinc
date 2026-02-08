import { Target, Users, Award } from "lucide-react";

const stats = [
  { icon: Target, value: "10+", label: "Years Experience" },
  { icon: Users, value: "200+", label: "Clients Served" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Creative & Tailored Solutions to Develop Brands
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ubersoft Consulting was founded in 2012 with a single mission: to be the most
              professional, creative and helpful consulting agency in North America. We approach
              each of our clients with fresh eyes and develop custom-made strategies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Though we've grown since our establishment, we're still the same agency at heart —
              passionate about delivering results that exceed expectations and building long-term
              partnerships with every organization we serve.
            </p>
          </div>

          <div className="grid gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-5 bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-md bg-gold flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground font-display">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
