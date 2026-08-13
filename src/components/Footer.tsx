"use client";

import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/Button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  ADDRESS,
  EMAIL,
  INSTAGRAM_HANDLE,
  MAPS_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  whatsappLink,
} from "@/lib/contact";

const Footer = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <footer id="contato" className="bg-navy-deep pt-16 pb-8" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* CTA banner */}
        <div className="reveal text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-body font-medium mb-3">
            Dê o Primeiro Passo
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-light mb-4">
            Seu Caso Merece um Advogado Experiente
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <p className="font-body text-gold-light/55 text-sm leading-relaxed mb-6">
            Mais de 15 anos resolvendo questões jurídicas complexas para pessoas e empresas. A primeira conversa é sem compromisso — e pode mudar o rumo do seu caso.
          </p>
          <Button variant="gold" size="lg" className="text-base px-10 py-6" asChild>
            <a
              href={whatsappLink(
                "Olá, Dr. Artur. Gostaria de conversar sobre um caso jurídico.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar pelo WhatsApp
            </a>
          </Button>
        </div>

        <div className="border-t border-gold/10 pt-12" />

        <div className="grid md:grid-cols-3 gap-12 mb-12 reveal">
          {/* About column */}
          <div>
            <h3 className="font-display text-xl font-bold text-gold-light mb-4">
              Artur Malheiros Advocacia
            </h3>
            <div className="w-8 h-px bg-gold mb-4" />
            <p className="font-body text-gold-light/50 text-sm leading-relaxed">
              Advocacia moderna e humanizada com foco na harmonização de conflitos. Soluções ágeis e respeitosas para quem busca justiça sem desgaste.
            </p>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-light mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href={`tel:+${PHONE_E164}`}
                className="flex items-center gap-3 text-gold-light/60 text-sm font-body hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-gold-light/60 text-sm font-body hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{EMAIL}</span>
              </a>
              <div className="flex items-start gap-3 text-gold-light/60 text-sm font-body">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3 text-gold-light/60 text-sm font-body">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Seg – Sex: 9h às 18h</span>
              </div>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gold-light/60 text-sm font-body hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4 text-gold shrink-0" />
                <span>@{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

          {/* Map column */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-light mb-4">Localização</h4>
            <div className="aspect-video rounded-lg overflow-hidden border border-gold/10">
              <iframe
                title="Localização do escritório Artur Malheiros Advocacia"
                src={MAPS_EMBED_URL}
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 text-center">
          <p className="text-xs text-gold-light/30 font-body">
            © {new Date().getFullYear()} Artur Malheiros Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
