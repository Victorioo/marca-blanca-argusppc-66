import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Cog, Trophy } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Users,
      title: "Tu cliente, tu briefing",
      description: "Tú nos compartes la necesidad y los objetivos.",
      color: "text-blue-400"
    },
    {
      icon: Cog,
      title: "Nosotros ejecutamos en marca blanca",
      description: "Campañas, reporting y optimización.",
      color: "text-primary"
    },
    {
      icon: Trophy,
      title: "Tu cliente celebra contigo",
      description: "Tú presentas resultados, cobras más y refuerzas tu relación.",
      color: "text-green-400"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cómo funciona la alianza
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Somos el motor invisible que impulsa tu agencia para que siempre destaques frente a tus clientes.
          </p>
          <div className="inline-block bg-primary/20 rounded-full px-6 py-3 border border-primary/30">
            <p className="text-primary font-semibold">
              Somos el motor invisible que hace impulsar a tu agencia.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card-shadow bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="outline-white" 
            size="lg"
            className="text-md px-14 py-6"
            onClick={() => window.open('https://calendly.com/argusppc/sesion-de-consultoria-gratis-para-empresas-de-am-clon', '_blank')}
          >
            Explorar cómo funciona
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;