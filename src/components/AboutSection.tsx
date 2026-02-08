import businessLogo from "@/assets/business-logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              Creative and Tailored Solutions to Develop Brands and Businesses
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Ubersoft Consulting was founded in 2012 with a single mission: to be the most
                professional, creative and helpful consulting agency in North America. We approach
                each of our clients with fresh eyes and develop custom-made strategies.
              </p>
              <p>
                Though we've grown since our establishment, we're still the same agency at heart —
                passionate about delivering results that exceed expectations and building long-term
                partnerships with every organization we serve.
              </p>
              <p>
                Our team of experienced professionals brings decades of combined expertise in IT consulting,
                system administration, technical support, and enterprise solutions.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30"></div>
              <img 
                src={businessLogo} 
                alt="Ubersoft Consulting" 
                className="relative z-10 max-w-sm w-full h-auto bg-primary p-12"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "200+", label: "Clients Served" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
