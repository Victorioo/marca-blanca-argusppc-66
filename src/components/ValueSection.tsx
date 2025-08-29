import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ValueSection = () => {
  const benefits = [
    "Añade Paid Media a tu portafolio.",
    "Brinda servicios escalables y basados en datos.",
    "Cobra más ofreciendo un servicio premium.",
    "Mantén a tu agencia como la única cara visible."
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Convierte tu agencia en una{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              solución integral
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Tus clientes esperan cada vez más de ti, pero crecer tu oferta suele significar más equipo, 
            más procesos y más costos. Con Argus PPC, sumas servicios de performance sin aumentar tu estructura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Benefits list */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-white/90">{benefit}</p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="card-shadow bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Listo para comenzar?
              </h3>
              <p className="text-white/80 mb-6">
                Agenda una llamada y descubre cómo podemos impulsar tu agencia juntos.
              </p>
              <Button 
                variant="cta" 
                size="lg"
                className="w-full"
                onClick={() => window.open('https://calendly.com/argusppc/sesion-de-consultoria-gratis-para-empresas-de-am-clon', '_blank')}
              >
                Agendar una llamada
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;