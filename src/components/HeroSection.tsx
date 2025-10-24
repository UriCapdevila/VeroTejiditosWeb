import { Button } from "@/components/ui/button";
import { Heart, MessageCircle } from "lucide-react";
import verotejiditsLogo from "@/assets/verotejiditos-logo.png";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/5401164667963?text=Hola!%20Me%20interesa%20encargar%20un%20amigurumi%20%F0%9F%92%9C";

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-soft via-background to-accent-soft">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-soft px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
              <Heart className="w-4 h-4" />
              12 años creando magia
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
              <span className="font-handwritten text-primary">Verotejiditos</span>
              <br />
              Amigurumis
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-2">
              Inspirados en animé, videojuegos y películas
            </p>
            <p className="text-base text-muted-foreground mb-8">
              Cada pieza está hecha a mano con dedicación, amor y paciencia
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="artisan" 
                size="xl"
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="font-handwritten"
              >
                <MessageCircle className="w-5 h-5" />
                Encargá el tuyo ahora
              </Button>
              <Button 
                variant="soft" 
                size="xl"
                onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver catálogo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 float-animation">
              <img
                src={verotejiditsLogo}
                alt="Logotipo de Verotejiditos Amigurumis - Ovillo de lana colorido con gancho de crochet"
                className="w-full max-w-md mx-auto rounded-3xl artisan-shadow"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 rotate-12">🧶</div>
      <div className="absolute bottom-32 right-16 text-4xl opacity-20 -rotate-12">💜</div>
      <div className="absolute top-40 right-8 text-5xl opacity-20 rotate-45">✨</div>
    </section>
  );
};

export default HeroSection;