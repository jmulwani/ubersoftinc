const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-hero-dark overflow-hidden"
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 border border-gold/30 rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-gold/20 rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/10 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <p className="text-gold font-semibold text-sm tracking-[0.3em] uppercase mb-8">
          Ubersoft Consulting At Your Service
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8">
          We Help Organizations
          <br />
          <span className="text-gold">Improve Their Performance</span>
        </h1>
        <p className="text-primary-foreground/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body leading-relaxed">
          Creative and tailored solutions to develop brands and businesses across North America since 2012.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-block bg-gold text-section-dark font-semibold px-10 py-4 hover:bg-gold/90 transition-colors text-sm uppercase tracking-wider"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-10 py-4 hover:border-gold hover:text-gold transition-colors text-sm uppercase tracking-wider"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
