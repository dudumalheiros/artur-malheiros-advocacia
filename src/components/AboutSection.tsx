import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-navy">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg bg-navy-light/50 border border-gold/20 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-navy-deep border-2 border-gold/30 flex items-center justify-center">
                  <span className="font-display text-3xl text-gold">AM</span>
                </div>
                <p className="text-sm text-gold-light/40 font-body">Foto Profissional</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-lg" />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-body font-medium mb-3">Sobre</p>
             <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-light mb-6">
              Dr. Artur Malheiros
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-body text-gold-light/60 leading-relaxed mb-8">
              Com atuação em Recife, o escritório Artur Malheiros Advocacia nasceu com o propósito de oferecer uma advocacia moderna e humanizada. Especialista em harmonização de conflitos, nossa missão é encontrar a solução mais eficiente e menos desgastante para cada cliente, unindo técnica jurídica e sensibilidade.
            </p>
            <Button variant="gold" asChild>
              <a href="#contato">Entre em Contato</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
