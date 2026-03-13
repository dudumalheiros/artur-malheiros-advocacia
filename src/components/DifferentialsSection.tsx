import { Heart, Eye, Zap } from "lucide-react";

const differentials = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cada cliente é tratado com empatia e respeito. Entendemos que questões jurídicas podem ser delicadas e oferecemos suporte completo.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Comunicação clara e honesta em todas as etapas do processo. Você sempre saberá exatamente o que está acontecendo no seu caso.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Respostas rápidas e acompanhamento proativo. Valorizamos o seu tempo e trabalhamos para resolver questões com eficiência.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-body font-medium mb-3">Por que nos escolher</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Diferenciais</h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="relative bg-card border border-border rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-gold/30 group"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center border-4 border-background group-hover:bg-navy-light transition-colors">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-4">{item.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
