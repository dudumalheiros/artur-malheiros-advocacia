"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { whatsappLink } from "@/lib/contact";

// ─── Fotos reais do escritório ──────────────────────────────────────────────
// escritorio5.jpg é byte-a-byte idêntico ao escritorio3.jpg, então está fora
// da rotação. Quando chegar uma 5ª foto de verdade, é só importar e somar aqui.
import slide1 from "@/assets/escritorio1.jpg";
import slide2 from "@/assets/escritorio2.jpg";
import slide3 from "@/assets/escritorio3.jpg";
import slide4 from "@/assets/escritorio4.jpg";

const slides = [slide1, slide2, slide3, slide4];

const INTERVAL = 5000; // ms entre cada troca

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  // Troca automática
  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* ── Camadas de imagens com cross-fade ── */}
      {slides.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt=""
          role="presentation"
          fill
          sizes="100vw"
          priority={i === 0}
          placeholder="blur"
          className="object-cover transition-opacity duration-1000"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : i === prev ? 0 : -1,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/75 to-navy-deep/90 z-10" />

      {/* ── Conteúdo ── */}
      <div className="relative z-20 container mx-auto px-4 text-center max-w-3xl pt-20">
        <div className="w-16 h-px bg-gold mx-auto mb-8 opacity-60" />

        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold font-body font-medium mb-5 animate-fade-in-up">
          +15 Anos de Experiência · Advocacia Estratégica
        </p>

        <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gold-light leading-[1.15] mb-6 animate-fade-in-up">
          Soluções Jurídicas de Alto Nível para
          <span className="text-gradient-gold"> Pessoas e Empresas</span>
        </h1>

        <p
          className="font-body text-lg md:text-xl text-gold-light/65 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Direito das Famílias, Sucessões, Societário e Contratos em Recife.
          Mais de 15 anos de trajetória jurídica —{" "}
          <strong className="text-gold-light/90">a favor do seu caso</strong>.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button variant="gold" size="lg" className="text-base px-10 py-6" asChild>
            <a
              href={whatsappLink(
                "Olá, Dr. Artur. Gostaria de agendar uma consulta.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com o Escritório
            </a>
          </Button>
          <Button variant="outline-gold" size="lg" className="text-base px-10 py-6" asChild>
            <a href="#especialidades">Conheça Nossas Áreas</a>
          </Button>
        </div>

        <div className="w-16 h-px bg-gold mx-auto mt-12 opacity-40" />
      </div>

      {/* ── Indicadores de slide (bolinhas) ── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i); }}
            aria-label={`Ir para slide ${i + 1}`}
            className="transition-all duration-300"
          >
            <div
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-gold"
                  : "w-2 h-2 bg-gold/30 hover:bg-gold/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-gold/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-gold/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
