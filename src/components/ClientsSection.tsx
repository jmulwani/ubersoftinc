import Reveal from "@/components/anim/Reveal";
import Marquee from "@/components/anim/Marquee";
import clientDell from "@/assets/client-dell.jpg";
import clientHydroOne from "@/assets/client-hydroone.jpg";
import clientIBM from "@/assets/client-ibm.jpeg";
import clientEnercare from "@/assets/client-enercare.jpeg";
import clientCompucom from "@/assets/client-compucom.jpeg";
import clientBMO from "@/assets/client-bmo.jpeg";
import clientTPS from "@/assets/client-tps.jpg";
import clientComerica from "@/assets/client-comerica.jpg";

const clients = [
  { src: clientDell, alt: "Dell Technologies" },
  { src: clientHydroOne, alt: "Hydro One" },
  { src: clientIBM, alt: "IBM" },
  { src: clientEnercare, alt: "Enercare" },
  { src: clientCompucom, alt: "Compucom" },
  { src: clientBMO, alt: "BMO" },
  { src: clientTPS, alt: "Toronto Police Service" },
  { src: clientComerica, alt: "Comerica Bank" },
];

const LogoCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="mx-4 group">
    <div className="w-44 h-28 md:w-52 md:h-32 rounded-2xl bg-white flex items-center justify-center p-5 border border-border transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-[0_12px_40px_hsl(43_96%_56%/0.2)]">
      <img src={src} alt={alt} className="max-w-full max-h-full object-contain" loading="lazy" />
    </div>
    <p className="mt-3 text-center text-xs text-muted-foreground tracking-wide opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      {alt}
    </p>
  </div>
);

const ClientsSection = () => {
  return (
    <section id="clients" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-4 mb-14">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-gold font-semibold text-sm tracking-[0.25em] uppercase mb-4">Our Clients</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Trusted by <span className="text-gradient-gold">Industry Leaders</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-muted-foreground italic">Learn how we've helped organizations of every scale.</p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={200}>
        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10" />

          <Marquee duration={40}>
            {clients.map((c) => (
              <LogoCard key={c.alt} {...c} />
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
};

export default ClientsSection;
