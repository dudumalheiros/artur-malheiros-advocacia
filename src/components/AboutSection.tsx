"use client";

import Image from "next/image";

import retrato from "@/assets/artur-malheiros.jpg";
import { Button } from "@/components/Button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { whatsappLink } from "@/lib/contact";

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
        <div className="grid md:grid-cols-[264px_1fr] gap-12 lg:gap-16 items-center max-w-5xl mx-auto">

          {/* Retrato do Dr. Artur.
              O único arquivo que temos é a foto de perfil do WhatsApp: 528×528,
              sem EXIF, já recomprimida. Por isso o quadro é travado em 264px —
              em tela retina (2x) isso consome exatamente os 528px nativos e a
              foto sai nítida. Se o original do fotógrafo aparecer, dá pra
              voltar aos 400px de antes (ajustar aqui, no `sizes` e na coluna
              do grid acima). */}
          <div className="reveal">
            <div className="relative w-[264px] max-w-full mx-auto md:mx-0">
              <div className="aspect-square rounded-lg bg-navy-light/50 border border-gold/20 overflow-hidden">
                {/* q=90 (liberado em next.config.ts): o original já vem
                    comprimido do WhatsApp e recomprimir no padrão q=75
                    empilharia artefato sobre artefato. */}
                <Image
                  src={retrato}
                  alt="Dr. Artur Malheiros, advogado"
                  sizes="264px"
                  quality={90}
                  placeholder="blur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-2 border-gold/30 rounded-lg" />
            </div>

            {/* Stats em faixa horizontal sob o retrato. Antes era um card
                flutuante sobreposto, mas num quadro de 264px ele cobria metade
                do rosto. */}
            <div className="mt-8 w-[264px] max-w-full mx-auto md:mx-0 bg-navy-deep border border-gold/20 rounded-lg px-3 py-3 shadow-xl flex divide-x divide-gold/15">
              {stats.map((s) => (
                <div key={s.label} className="flex-1 text-center px-1">
                  <div className="font-display text-lg font-bold text-gold">{s.value}</div>
                  <div className="font-body text-[9px] text-gold-light/50 uppercase tracking-wider leading-snug mt-1">{s.label}</div>
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
              Com <strong className="text-gold-light/90">mais de 15 anos de carreira jurídica</strong>, o Dr. Artur Malheiros construiu uma trajetória sólida em escritório particular, com foco na resolução estratégica dos problemas jurídicos — incluindo experiência com <strong className="text-gold-light/90">Contratos, Direito do Consumidor e o setor de iGaming</strong>.
            </p>
            <p className="font-body text-gold-light/65 leading-relaxed mb-4">
              Sua atuação vai além do processo: envolve <strong className="text-gold-light/90">consultoria jurídica, assessoria à governança empresarial, palestras e gerenciamento estratégico</strong> — o que garante uma visão 360° que poucos advogados oferecem.
            </p>
            <p className="font-body text-gold-light/65 leading-relaxed mb-8">
              Especializado em <strong className="text-gold-light/90">Direito das Famílias, Sucessões, Societário e Contratos</strong>, o escritório atende tanto pessoas físicas quanto empresas que precisam de um jurídico de alto nível — com a atenção personalizada que só um escritório boutique proporciona.
            </p>

            {/* Tags de especialidade */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Famílias & Sucessões", "Societário", "Contratos", "Imobiliário", "Previdenciário", "Consumidor", "iGaming"].map((tag) => (
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
                href={whatsappLink(
                  "Olá, Dr. Artur. Gostaria de agendar uma conversa.",
                )}
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
