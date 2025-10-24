import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/5 via-background to-secondary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Brand */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              <span className="font-handwritten text-primary">Verotejiditos</span> Amigurumis
            </h3>
            <p className="text-muted-foreground">
              Transformando lana en personajes llenos de magia desde hace 12 años
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <a 
              href="https://wa.me/5401164667963" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              📱 011 6466-7963
            </a>
            <a 
              href="mailto:verytodeig@gmail.com"
              className="hover:text-primary transition-colors"
            >
              ✉️ verytodeig@gmail.com
            </a>
            <span>🚚 Envíos a toda Argentina</span>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>por Verotejiditos</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span>© 2024 Verotejiditos Amigurumis</span>
              <div className="flex gap-2">
                <span className="text-lg">💜</span>
                <span className="text-lg">🧶</span>
                <span className="text-lg">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;