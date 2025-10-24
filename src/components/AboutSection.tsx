import veronicaWorking from "@/assets/veronica-working.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background" id="sobre-nosotros">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <img
                src={veronicaWorking}
                alt="Verónica tejiendo amigurumis en su taller con dedicación y amor"
                className="w-full rounded-3xl artisan-shadow"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/15 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-secondary-soft px-4 py-2 rounded-full text-sm font-medium text-secondary mb-6">
              ✨ Conocé mi historia
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Sobre <span className="font-handwritten text-primary">Verotejiditos</span>
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hace más de <strong className="text-primary font-semibold">12 años</strong> que transformo lana en personajes llenos de magia. Cada pieza está hecha a mano con dedicación, amor y paciencia, pensada para quienes disfrutan de lo artesanal y quieren un objeto único.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Mi pasión por el crochet comenzó como un hobby, pero rápidamente se convirtió en mi forma de crear momentos especiales para otras personas. Cada amigurumi que sale de mis manos lleva un pedacito de mi corazón.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-primary-soft rounded-2xl">
                <div className="text-2xl font-bold text-primary font-handwritten">12+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="text-center p-4 bg-accent-soft rounded-2xl">
                <div className="text-2xl font-bold text-accent font-handwritten">500+</div>
                <div className="text-sm text-muted-foreground">Amigurumis creados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;