import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const whatsappUrl = "https://wa.me/5401164667963?text=Hola!%20Quiero%20encargar%20un%20amigurumi%20personalizado%20%F0%9F%92%9C";
  const emailUrl = "mailto:verytodeig@gmail.com?subject=Consulta%20sobre%20amigurumis";

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-soft/30 via-background to-secondary-soft/30" id="contacto">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-soft px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
              💜 ¡Hablemos!
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              <span className="font-handwritten text-primary">Escribime</span> por WhatsApp
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              ¿Tenés una idea? ¡Contame todo! Te ayudo a crear el amigurumi perfecto para vos o para regalar.
            </p>
            
            {/* Main CTA */}
            <Button
              variant="artisan"
              size="xl"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="font-handwritten mb-12"
            >
              <MessageCircle className="w-6 h-6" />
              Encargá el tuyo ahora
            </Button>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-2xl text-white mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm mb-3">Respuesta inmediata</p>
              <Button
                variant="soft"
                size="sm"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                011 6466-7963
              </Button>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-2xl text-white mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm mb-3">Para consultas detalladas</p>
              <Button
                variant="soft"
                size="sm"
                onClick={() => window.open(emailUrl, '_blank')}
              >
                verytodeig@gmail.com
              </Button>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-2xl text-white mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Envíos</h3>
              <p className="text-muted-foreground text-sm">Toda Argentina</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal rounded-2xl text-white mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Tiempos</h3>
              <p className="text-muted-foreground text-sm">2-3 semanas aprox.</p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="bg-card rounded-3xl p-8 handmade-border">
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
              ¿Cómo funciona? <span className="font-handwritten text-primary">¡Es súper fácil!</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">1</div>
                <h4 className="font-medium text-foreground mb-2">Contame tu idea</h4>
                <p className="text-sm text-muted-foreground">Describime el personaje que querés o mandame una imagen de referencia</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">2</div>
                <h4 className="font-medium text-foreground mb-2">Confirmamos detalles</h4>
                <p className="text-sm text-muted-foreground">Tamaño, colores, precio y tiempo de entrega. Te mando fotos del progreso</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">3</div>
                <h4 className="font-medium text-foreground mb-2">¡Recibís tu amigurumi!</h4>
                <p className="text-sm text-muted-foreground">Lo enviamos con mucho cuidado hasta tu casa. ¡A disfrutar!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;