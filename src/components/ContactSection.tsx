import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-hero-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            Contact Us
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-2xl mx-auto">
          <a
            href="mailto:info@ubersoftinc.com"
            className="flex items-center gap-4 group"
          >
            <div className="w-14 h-14 border border-gold/50 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
              <Mail className="w-6 h-6 text-gold group-hover:text-section-dark transition-colors" />
            </div>
            <span className="text-primary-foreground/80 group-hover:text-gold transition-colors text-lg">
              info@ubersoftinc.com
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
