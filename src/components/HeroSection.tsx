import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-secondary font-medium text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          Ubersoft Consulting At Your Service
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          We Help Organizations
          <br />
          <span className="text-gold">Improve Their Performance</span>
        </h1>
        <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
          Creative and tailored solutions to develop brands and businesses across North America.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-3.5 rounded-md hover:border-secondary hover:text-secondary transition-colors text-sm uppercase tracking-wider"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
