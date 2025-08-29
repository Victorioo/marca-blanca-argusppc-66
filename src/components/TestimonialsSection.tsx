import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
const TestimonialsSection = () => {
  const testimonials = [{
    quote: "Aumentamos 25% nuestros ingresos en 3 meses al sumar Paid Media con Argus. Nuestros clientes están encantados con los resultados.",
    author: "María González",
    company: "Agencia Boutique Creative",
    metrics: "+25% ingresos en 3 meses"
  }, {
    quote: "Por fin podemos ofrecer servicios completos sin tener que contratar un equipo interno. La calidad del trabajo es excepcional.",
    author: "Carlos Rodríguez",
    company: "Estudio de Diseño Premium",
    metrics: "100% servicios integrales"
  }, {
    quote: "Nuestros clientes ahora nos ven como verdaderos partners estratégicos. Los reportes bajo nuestra marca son impecables.",
    author: "Ana Martínez",
    company: "Freelance Marketing Consultant",
    metrics: "Upgrade a partner estratégico"
  }];
  return <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Casos de{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              éxito
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Descubre los Casos de Éxitos que hemos tenido en Paid Media</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-white/40 mb-4" />
              <p className="text-white/90 text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-white/20 pt-6">
                <p className="text-white font-semibold text-lg">{testimonial.author}</p>
                <p className="text-white/70">{testimonial.company}</p>
                <p className="text-primary font-medium mt-2">{testimonial.metrics}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline-white" size="lg" onClick={() => window.open('https://calendly.com', '_blank')}>
            Conoce los Casos de Éxito aquí
          </Button>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;