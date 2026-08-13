"use client";

import {
  Scale,
  Users,
  Building2,
  Home,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const specialties = [
  {
    icon: Users,
    title: "Famílias e Sucessões",
    description:
      "Divórcios, guarda, pensão alimentícia, inventários e planejamento sucessório. Conduzidos com sensibilidade para proteger quem você mais ama — priorizando acordos que preservam os vínculos.",
  },
  {
    icon: Building2,
    title: "Direito Societário",
    description:
      "Constituição e dissolução de empresas, acordos de sócios, reestruturações societárias e governança corporativa. Experiência com empresas de grande porte e ambientes regulados.",
  },
  {
    icon: Scale,
    title: "Contratos",
    description:
      "Elaboração, revisão e negociação de contratos empresariais e civis. Blindamos seus negócios e seus direitos antes que um problema aconteça — com linguagem clara e estratégia sólida.",
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description:
      "Compra e venda de imóveis, ações envolvendo posse, usucapião, aluguéis, loteamentos e condomínios.",
  },
  {
    icon: ShieldCheck,
    title: "Direito Previdenciário",
    description:
      "Pensão por morte, aposentadorias, benefícios por incapacidade e revisões de benefícios. Atuação tanto no Regime Geral (INSS) quanto no Regime Próprio (servidores públicos).",
  },
  {
    icon: HeartHandshake,
    title: "Direito do Consumidor",
    description:
      "Indenizações por responsabilidade civil, negativações indevidas nos órgãos de proteção ao crédito, falhas na prestação de serviços, fraudes bancárias e apostas esportivas.",
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
            Atuação em direito civil e empresarial para pessoas físicas e empresas — do acompanhamento preventivo à representação judicial.
          </p>
        </div>

        {/* Cards — grid 3x2 */}
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
