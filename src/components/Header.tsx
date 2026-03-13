import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/95 backdrop-blur-sm border-b border-gold/20">
      <div className="w-full px-3 md:px-5 lg:px-7 h-[74px] md:h-[80px] flex items-center justify-between">
        <a href="#inicio" className="flex items-center shrink-0 -ml-0.5 md:ml-0">
          <BrandLogo />
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs lg:text-sm font-body text-gold-light/80 hover:text-gold transition-colors duration-200 tracking-[0.12em] uppercase"
            >
              {item.label}
            </a>
          ))}
          <Button variant="gold" size="sm" asChild>
            <a href="#contato" className="px-1">Agendar Consulta</a>
          </Button>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gold-light"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-navy-deep border-t border-gold/10 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-sm font-body text-gold-light/70 hover:text-gold hover:bg-navy-light/30 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button variant="gold" size="sm" className="w-full" asChild>
              <a href="#contato">Falar com Especialista</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
