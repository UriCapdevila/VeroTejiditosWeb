import { Shield, Heart, Truck, Sparkles } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguridad garantizada",
      description: "Todas las piezas están cosidas con cuidado para que también puedan usarse como juguetes seguros."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hecho con amor",
      description: "Cada amigurumi está creado a mano con dedicación, amor y paciencia. Sin prisa, con alma."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Totalmente personalizado",
      description: "Tu personaje favorito hecho a medida. Colores, tamaño y detalles únicos para vos."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Envíos a toda Argentina",
      description: "Recibí tu amigurumi en la comodidad de tu casa, sin importar dónde estés en el país."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary-soft px-4 py-2 rounded-full text-sm font-medium text-secondary mb-6">
            💜 Por qué elegirnos
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            <span className="font-handwritten text-primary">Más que</span> un amigurumi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada pieza que creo lleva mi experiencia de 12 años y el compromiso de brindarte algo realmente especial.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl text-white mb-6 artisan-shadow group-hover:soft-glow">
                {benefit.icon}
              </div>
              
              <h3 className="font-semibold text-lg text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16 space-x-8 opacity-30">
          <span className="text-4xl rotate-12">🧶</span>
          <span className="text-3xl -rotate-12">💜</span>
          <span className="text-4xl rotate-6">✨</span>
          <span className="text-3xl -rotate-6">🌸</span>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;