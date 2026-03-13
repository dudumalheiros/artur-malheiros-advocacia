import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: "+15", label: "Anos de experiência" },
  { value: "3", label: "Setores de atuação" },
  { value: "360°", label: "Visão jurídica" },
];

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

            {/* Stats flutuantes */}
            <div className="absolute -left-4 bottom-12 bg-navy-deep border border-gold/20 rounded-lg px-4 py-3 shadow-xl">
              {stats.map((s) => (
                <div key={s.label} className="text-center mb-2 last:mb-0">
                  <div className="font-display text-xl font-bold text-gold">{s.value}</div>
                  <div className="font-body text-[10px] text-gold-light/50 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="reveal" style={{ "--stagger": 1 } as React.CSSProperties}>
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-body font-medium mb-3">
              Quem é o Dr. Artur
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-light mb-6">
              Experiência que Faz a Diferença
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />

            <p className="font-body text-gold-light/65 leading-relaxed mb-4">
              Com <strong className="text-gold-light/90">mais de 15 anos de carreira jurídica</strong>, o Dr. Artur Malheiros construiu uma trajetória sólida em escritórios particulares, órgãos da Administração Pública e empresas privadas de grande porte — incluindo experiência no setor de <strong className="text-gold-light/90">iGaming e gestão de departamentos jurídicos</strong>.
            </p>
            <p className="font-body text-gold-light/65 leading-relaxed mb-4">
              Sua atuação vai além do processo: envolve <strong className="text-gold-light/90">consultoria jurídica e política, treinamentos corporativos, palestras e gerenciamento estratégico</strong> — o que garante uma visão 360° que poucos advogados oferecem.
            </p>
            <p className="font-body text-gold-light/65 leading-relaxed mb-8">
              Especializado em <strong className="text-gold-light/90">Direito das Famílias, Sucessões, Societário e Contratos</strong>, o escritório atende tanto pessoas físicas quanto empresas que precisam de um jurídico de alto nível — com a atenção personalizada que só um escritório boutique proporciona.
            </p>

            {/* Tags de especialidade */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Famílias & Sucessões", "Societário", "Contratos", "Contencioso", "iGaming", "Gestão Jurídica"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-body text-gold/80 border border-gold/25 rounded-full px-3 py-1 bg-navy-deep/40"
                >
                  {tag}
                </span>
              ))}
            </div>

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
