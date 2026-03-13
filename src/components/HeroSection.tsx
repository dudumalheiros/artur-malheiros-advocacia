import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background image with lazy decode */}
      <img
        src={heroBg}
        alt=""
        role="presentation"
        decoding="async"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/75 to-navy-deep/90" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl pt-20">
        {/* Decorative line */}
        <div className="w-16 h-px bg-gold mx-auto mb-8 opacity-60" />

        {/* Tagline */}
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold font-body font-medium mb-5 animate-fade-in-up">
          +15 Anos de Experiência · Advocacia Estratégica
        </p>

        {/* Headline — copy persuasivo */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gold-light leading-[1.15] mb-6 animate-fade-in-up">
          Soluções Jurídicas de Alto Nível para
          <span className="text-gradient-gold"> Pessoas e Empresas</span>
        </h1>

        {/* Sub-headline — prova de autoridade + empatia */}
        <p
          className="font-body text-lg md:text-xl text-gold-light/65 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Direito das Famílias, Sucessões, Societário e Contratos em Recife.
          Experiência em escritórios, empresas de grande porte e Administração Pública —{" "}
          <strong className="text-gold-light/90">a favor do seu caso</strong>.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button variant="gold" size="lg" className="text-base px-10 py-6" asChild>
            <a href="https://wa.me/558196097878?text=Olá, Dr. Artur. Gostaria de agendar uma consulta." target="_blank" rel="noopener noreferrer">
              Falar com Especialista
            </a>
          </Button>
          <Button variant="outline-gold" size="lg" className="text-base px-10 py-6" asChild>
            <a href="#especialidades">Conheça Nossas Áreas</a>
          </Button>
        </div>

        {/* Decorative line */}
        <div className="w-16 h-px bg-gold mx-auto mt-12 opacity-40" />
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-gold/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-gold/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
