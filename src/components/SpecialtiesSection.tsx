import { Scale, Users, FileText } from "lucide-react";

const specialties = [
  {
    icon: Scale,
    title: "Civil e Consumidor",
    description: "Proteção de direitos contratuais, responsabilidade civil e relações de consumo com foco estratégico.",
  },
  {
    icon: Users,
    title: "Famílias e Sucessões",
    description: "Resolução de inventários, divórcios e questões familiares através da mediação e harmonização.",
  },
  {
    icon: FileText,
    title: "Previdenciário",
    description: "Assessoria completa para benefícios do INSS, aposentadorias e revisão de direitos previdenciários.",
  },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-body font-medium mb-3">Áreas de Atuação</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Especialidades</h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="group bg-card border border-border hover:border-gold/40 rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy flex items-center justify-center group-hover:bg-navy-light transition-colors duration-300">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
