import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-navy-deep/80" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <div className="w-16 h-px bg-gold mx-auto mb-8 opacity-60" />
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light leading-tight mb-6 animate-fade-in-up">
          Soluções Jurídicas com Foco na Resolução e Equilíbrio
        </h1>
        <p className="font-body text-lg md:text-xl text-gold-light/60 mb-10 max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Atuação especializada em Direito Civil, Família e Previdenciário em Recife, priorizando a harmonização de conflitos para resultados mais ágeis e humanos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.4s" }}>
          <Button variant="gold" size="lg" className="text-base px-10 py-6" asChild>
            <a href="#contato">Falar com Especialista</a>
          </Button>
          <Button variant="outline-gold" size="lg" className="text-base px-10 py-6" asChild>
            <a href="#especialidades">Conheça Nossas Áreas</a>
          </Button>
        </div>
        <div className="w-16 h-px bg-gold mx-auto mt-12 opacity-40" />
      </div>
    </section>
  );
};

export default HeroSection;
