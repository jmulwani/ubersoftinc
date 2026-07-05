import logo from "@/assets/ubersoft-logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 py-12 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 justify-center md:justify-start group">
            <img
              src={logo}
              alt="Ubersoft Consulting"
              className="h-10 w-10 object-contain transition-transform duration-500 group-hover:rotate-[360deg]"
            />
            <div>
              <span className="font-display text-base font-bold text-foreground">UBERSOFT</span>
              <span className="block text-[10px] text-gold tracking-[0.25em] uppercase -mt-0.5">Consulting</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {["Home", "About", "Services", "Careers", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="relative text-muted-foreground hover:text-gold text-sm transition-colors duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-gold after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-muted-foreground/70 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Ubersoft Consulting Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
