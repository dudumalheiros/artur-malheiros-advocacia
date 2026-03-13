import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="sobre" className="py-24 bg-navy" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Photo placeholder */}
          <div className="relative reveal">
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

          {/* Content */}
          <div className="reveal" style={{ "--stagger": 1 } as React.CSSProperties}>
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-body font-medium mb-3">
              Quem Somos
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-light mb-6">
              Dr. Artur Malheiros
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-body text-gold-light/65 leading-relaxed mb-4">
              Fundado em Recife, o escritório <strong className="text-gold-light/90">Artur Malheiros Advocacia</strong> nasceu de uma convicção: <em>a melhor solução jurídica é aquela que respeita as pessoas envolvidas</em>.
            </p>
            <p className="font-body text-gold-light/65 leading-relaxed mb-4">
              Especialista em <strong className="text-gold-light/90">harmonização de conflitos</strong>, nosso escritório une técnica jurídica sólida à sensibilidade necessária para entender o que cada cliente realmente precisa — seja proteger seu patrimônio, reorganizar a vida familiar ou garantir um benefício previdenciário justo.
            </p>
            <p className="font-body text-gold-light/65 leading-relaxed mb-8">
              Aqui, você não é um número de processo. É uma pessoa com uma história que merece ser ouvida.
            </p>
            <Button variant="gold" asChild>
              <a
                href="https://wa.me/558196097878?text=Olá, Dr. Artur. Gostaria de agendar uma conversa."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende uma Conversa
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
