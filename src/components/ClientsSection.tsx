import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";

const slides = [
  { src: client1, alt: "Computer Store Client" },
  { src: client2, alt: "IT Infrastructure Client" },
  { src: client3, alt: "Corporate Consulting Client" },
  { src: client4, alt: "Data Center Client" },
];

const ClientsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
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

        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-sm">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <img
                key={i}
                src={slide.src}
                alt={slide.alt}
                className="min-w-full h-[375px] object-cover"
                loading="lazy"
              />
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 rounded-full p-2 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 rounded-full p-2 transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-gold" : "bg-background/60"
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
