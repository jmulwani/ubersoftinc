import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clientDell from "@/assets/client-dell.jpg";
import clientHydroOne from "@/assets/client-hydroone.jpg";
import clientIBM from "@/assets/client-ibm.jpeg";
import clientEnercare from "@/assets/client-enercare.jpeg";
import clientCompucom from "@/assets/client-compucom.jpeg";
import clientBMO from "@/assets/client-bmo.jpeg";
import clientTPS from "@/assets/client-tps.jpg";
import clientComerica from "@/assets/client-comerica.jpg";

const slides = [
  { src: clientDell, alt: "Dell Technologies" },
  { src: clientHydroOne, alt: "Hydro One" },
  { src: clientIBM, alt: "IBM" },
  { src: clientEnercare, alt: "Enercare" },
  { src: clientCompucom, alt: "Compucom" },
  { src: clientBMO, alt: "BMO" },
  { src: clientTPS, alt: "Toronto Police Service" },
  { src: clientComerica, alt: "Comerica Bank" },
];

const ClientsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="clients" className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-2 text-foreground">
          MEET OUR CLIENTS
        </h2>
        <p className="font-body text-center text-muted-foreground italic mb-10 text-lg">
          Learn How We've Helped
        </p>

        <div className="relative max-w-md mx-auto">
          <div className="overflow-hidden rounded-sm">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div key={i} className="min-w-full flex items-center justify-center p-4">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-64 h-64 object-contain rounded-sm"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow-md transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow-md transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-gold" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
