const Footer = () => {
  return (
    <footer className="bg-primary py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-lg font-bold text-primary-foreground">
              UBERSOFT <span className="text-gold text-sm font-normal ml-1">CONSULTING</span>
            </span>
          </div>
          <nav className="flex gap-6">
            {["Home", "About", "Services", "Careers", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Ubersoft Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
