import { ArrowRight, Sparkles } from "lucide-react";
import ParticleNetwork from "@/components/anim/ParticleNetwork";
import Typewriter from "@/components/anim/Typewriter";
import Reveal from "@/components/anim/Reveal";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <ParticleNetwork className="absolute inset-0" />
      <div
        className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-gold opacity-[0.07] blur-[140px] animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500 opacity-[0.08] blur-[140px] animate-float"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col items-center justify-center text-center pt-28 pb-16">
        <Reveal delay={0}>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot absolute inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Trusted IT Consulting <span className="text-gold">·</span> Since 2012
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6 max-w-5xl">
            We Help Organizations
            <br />
            <span className="text-gradient-gold">
              <Typewriter
                words={[
                  "Improve Their Performance",
                  "Secure Their Systems",
                  "Scale Their Infrastructure",
                  "Accelerate Their Growth",
                ]}
              />
            </span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Creative and tailored IT solutions to develop brands and businesses across
            North America — from cloud and security to enterprise infrastructure.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_hsl(43_96%_56%/0.45)] hover:-translate-y-0.5"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full glass px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-gold/60 hover:text-gold hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              Get In Touch
            </a>
          </div>
        </Reveal>

        {/* Scroll indicator */}
        <Reveal delay={600} className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <a href="#about" aria-label="Scroll to about section">
            <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex items-start justify-center p-1.5 animate-bounce">
              <div className="w-1 h-2 bg-gold rounded-full" />
            </div>
          </a>
        </Reveal>
      </div>

      {/* Soft fade into the next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

export default HeroSection;
