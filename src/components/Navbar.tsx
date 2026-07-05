import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/ubersoft-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass shadow-lg shadow-black/30" : "bg-transparent border-b border-transparent"
      )}
    >
      {/* Scroll progress */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-gold via-yellow-300 to-gold transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%`, backgroundColor: "hsl(var(--gold))" }}
      />

      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Ubersoft Consulting"
            className="h-11 w-11 object-contain transition-transform duration-500 group-hover:rotate-[360deg]"
          />
          <div className="hidden sm:block">
            <span className="font-display text-lg font-bold text-foreground tracking-wide">UBERSOFT</span>
            <span className="block text-[10px] text-gold tracking-[0.3em] uppercase -mt-1">Consulting</span>
          </div>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-colors duration-300",
                  active === l.href
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute left-4 right-4 -bottom-0.5 h-px bg-gold transition-transform duration-300 origin-left",
                    active === l.href ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </a>
            </li>
          ))}
          <li className="ml-4">
            <a
              href="#contact"
              className="btn-shine inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_24px_hsl(43_96%_56%/0.45)]"
            >
              Start a Project
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden glass overflow-hidden transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
        )}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map((l, i) => (
            <li
              key={l.href}
              className={cn(
                "transition-all duration-500",
                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              )}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-6 py-3 text-sm font-medium tracking-wide transition-colors",
                  active === l.href ? "text-gold" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
