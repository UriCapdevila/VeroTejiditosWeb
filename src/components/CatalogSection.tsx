import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";
import amigurumiCollection from "@/assets/amigurumi-collection.jpg";

const CatalogSection = () => {
  const whatsappUrl = "https://wa.me/5401164667963?text=Hola!%20Me%20interesa%20ver%20más%20del%20catálogo%20%F0%9F%92%9C";

  const categories = [
    {
      title: "Personajes de Animé",
      description: "Tus personajes favoritos cobran vida",
      icon: "🌸",
      examples: ["Pikachu", "Totoro", "Sailor Moon", "Naruto"]
    },
    {
      title: "Videojuegos",
      description: "Los héroes de tus juegos preferidos",
      icon: "🎮",
      examples: ["Mario", "Kirby", "Link", "Sonic"]
    },
    {
      title: "Películas y Series",
      description: "Personajes icónicos del cine",
      icon: "🎬",
      examples: ["Disney", "Pixar", "Marvel", "Star Wars"]
    },
    {
      title: "Personalizados",
      description: "Tu idea, mi creatividad",
      icon: "✨",
      examples: ["Mascotas", "Personas", "Creaciones únicas"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30" id="catalogo">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-soft px-4 py-2 rounded-full text-sm font-medium text-teal mb-6">
            <Star className="w-4 h-4" />
            Catálogo único
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            <span className="font-handwritten text-primary">Elegí</span> tu favorito
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O pedime el personaje que más te gusta. Cada amigurumi es una obra de arte única.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative mb-16">
          <img
            src={amigurumiCollection}
            alt="Colección de amigurumis: personajes de animé, videojuegos y películas hechos a mano"
            className="w-full max-w-4xl mx-auto rounded-3xl artisan-shadow"
          />
          <div className="absolute -top-4 -right-4 text-4xl animate-bounce">💜</div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl handmade-border hover:soft-glow transition-all duration-300 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {category.examples.map((example, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-primary-soft text-primary px-2 py-1 rounded-full"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="artisan"
            size="xl"
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="font-handwritten"
          >
            <MessageCircle className="w-5 h-5" />
            Ver catálogo completo
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Consultá precios y tiempos de entrega por WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;