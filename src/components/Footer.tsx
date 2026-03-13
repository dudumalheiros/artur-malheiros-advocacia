import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-navy-deep pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold text-gold-light mb-4">Artur Malheiros Advocacia</h3>
            <div className="w-8 h-px bg-gold mb-4" />
            <p className="font-body text-gold-light/50 text-sm leading-relaxed">
              Advocacia moderna e humanizada com foco na harmonização de conflitos para resultados mais ágeis e humanos.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold-light mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gold-light/60 text-sm font-body">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>(81) 9609-7878</span>
              </div>
              <div className="flex items-center gap-3 text-gold-light/60 text-sm font-body">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>contato@arturmalheiros.adv.br</span>
              </div>
              <div className="flex items-start gap-3 text-gold-light/60 text-sm font-body">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Rua Padre Carapuceiro, 752, Torre Vicente do Rego Monteiro, Sala 203, Recife/PE</span>
              </div>
              <div className="flex items-center gap-3 text-gold-light/60 text-sm font-body">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Seg - Sex: 9h às 18h</span>
              </div>
              <a
                href="https://instagram.com/arturmalheirosadv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gold-light/60 text-sm font-body hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4 text-gold shrink-0" />
                <span>@arturmalheirosadv</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold-light mb-4">Localização</h4>
            <div className="aspect-video rounded-lg bg-navy/50 border border-gold/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-gold/40 mx-auto mb-2" />
                <p className="text-xs text-gold-light/30 font-body">Mapa de Localização</p>
              </div>
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
