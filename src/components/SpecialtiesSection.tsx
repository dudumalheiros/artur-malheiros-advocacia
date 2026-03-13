import { Scale, Users, FileText } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const specialties = [
  {
    icon: Scale,
    title: "Civil e Consumidor",
    description:
      "Contratos, indenizações, cobranças e relações de consumo. Defendemos seus direitos com estratégia para evitar que um problema simples se torne uma dor de cabeça.",
  },
  {
    icon: Users,
    title: "Famílias e Sucessões",
    description:
      "Divórcios, guarda, pensão e inventários conduzidos com sensibilidade. Priorizamos acordos que preservam os vínculos e protegem quem mais importa.",
  },
  {
    icon: FileText,
    title: "Previdenciário",
    description:
      "Aposentadorias, auxílios e revisões junto ao INSS. Lutamos para que você receba o benefício que conquistou ao longo da vida — sem burocracia desnecessária.",
  },
];

const SpecialtiesSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="especialidades" className="py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-body font-medium mb-3">
            Áreas de Atuação
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Podemos Ajudar Você
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Cada situação jurídica é única. Por isso, ouvimos primeiro e agimos depois — sempre buscando a solução mais inteligente e humana.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto reveal-stagger">
          {specialties.map((item, i) => (
            <div
              key={item.title}
              className="reveal group bg-card border border-border hover:border-gold/40 rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ "--stagger": i } as React.CSSProperties}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy flex items-center justify-center group-hover:bg-navy-light transition-colors duration-300">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
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

export default SpecialtiesSection;
