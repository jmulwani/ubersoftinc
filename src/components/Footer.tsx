import logo from "@/assets/ubersoft-logo.png";

const Footer = () => {
  return (
    <footer className="bg-section-dark py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img src={logo} alt="Ubersoft Consulting" className="h-10 w-10 object-contain" />
            <div>
              <span className="font-display text-base font-semibold text-primary-foreground">
                UBERSOFT
              </span>
              <span className="block text-xs text-gold tracking-[0.15em] uppercase -mt-0.5">
                Consulting
              </span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {["Home", "About", "Services", "Careers", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-primary-foreground/60 hover:text-gold text-sm transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-primary-foreground/40 text-sm text-center md:text-right">
            Copyright © {new Date().getFullYear()} Ubersoft Consulting Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
