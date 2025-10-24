import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María Laura",
      text: "Increíble el detalle y la calidad! Le pedí un Totoro para mi hija y quedó exactamente como lo imaginaba. Se nota el amor con el que está hecho.",
      rating: 5,
      character: "Totoro de Studio Ghibli"
    },
    {
      name: "Carlos",
      text: "Verónica logró hacer realidad a mi personaje favorito de videojuegos. La atención al detalle es impresionante, y la comunicación fue excelente durante todo el proceso.",
      rating: 5,
      character: "Link de Zelda"
    },
    {
      name: "Ana Sofía",
      text: "Compré varios amigurumis como regalos y todos quedaron enamorados. La calidad es excepcional y se nota la experiencia de años. Totalmente recomendable!",
      rating: 5,
      character: "Personajes de Disney"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-soft/50 via-background to-accent-soft/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-soft px-4 py-2 rounded-full text-sm font-medium text-teal mb-6">
            <Star className="w-4 h-4" />
            Testimonios reales
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Lo que dicen <span className="font-handwritten text-primary">nuestros clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de 500 familias ya tienen su amigurumi especial. ¡Leé sus experiencias!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl handmade-border hover:soft-glow transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Author info */}
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary font-medium">{testimonial.character}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 opacity-60">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">4.9/5 estrellas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💜</span>
            <span className="text-sm font-medium">500+ clientes felices</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span className="text-sm font-medium">12 años de experiencia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;