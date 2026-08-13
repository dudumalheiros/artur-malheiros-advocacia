import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LegalServiceJsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <LegalServiceJsonLd />
      <Header />
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <AboutSection />
        <DifferentialsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
