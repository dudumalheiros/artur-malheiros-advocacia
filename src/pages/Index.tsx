import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SpecialtiesSection />
      <AboutSection />
      <DifferentialsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
