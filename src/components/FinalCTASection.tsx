import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Convierte a tu agencia en un{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ecosistema completo
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Escala tus ingresos, agrega Paid Media y gana sin complicarte.
          </p>

          <div className="mb-8">
            <Button 
              variant="hero" 
              size="lg"
              className="text-xl py-8 px-12 group"
              onClick={() => window.open('https://calendly.com/argusppc/sesion-de-consultoria-gratis-para-empresas-de-am-clon', '_blank')}
            >
              Habla con nosotros en confianza
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-lg text-primary font-semibold">
            Haz como otras agencias que ya están creciendo con nosotros.
          </p>

          {/* Contact info */}
          <div className="mt-16 pt-16 border-t border-white/10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-white/60 text-sm mb-2">Email</div>
                <div className="text-white">info@argusppc.com</div>
              </div>
              <div>
                <div className="text-white/60 text-sm mb-2">Llamada directa</div>
                <div className="text-white">Agenda tu sesión gratuita</div>
              </div>
              <div>
                <div className="text-white/60 text-sm mb-2">Respuesta</div>
                <div className="text-white">En menos de 24 horas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;