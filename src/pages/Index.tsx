import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen font-body">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
