import { Heart, Eye, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const differentials = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description:
      "Sabemos que por trás de cada caso existe uma pessoa. Por isso, tratamos você com empatia e escuta real — sem pressa, sem jargões, sem frieza.",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    description:
      "Nada de surpresas. Cada etapa do seu processo é comunicada de forma clara, para que você tome decisões com segurança e tranquilidade.",
  },
  {
    icon: Zap,
    title: "Agilidade Estratégica",
    description:
      "Tempo é justiça. Respondemos rápido, acompanhamos de perto e usamos todas as ferramentas legais para resolver o seu caso no menor prazo possível.",
  },
];

const DifferentialsSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="diferenciais" className="py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-body font-medium mb-3">
            Por que nos escolher
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Nos Torna Diferentes
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto reveal-stagger">
          {differentials.map((item, i) => (
            <div
              key={item.title}
              className="reveal relative bg-card border border-border rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-gold/30 group"
              style={{ "--stagger": i } as React.CSSProperties}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center border-4 border-background group-hover:bg-navy-light transition-colors">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-4">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
