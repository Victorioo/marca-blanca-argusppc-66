import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, BarChart3, Award, Shield, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Más tiempo para enfocarte en clientes y creatividad",
      description: "Libérate de la operación técnica y dedícate a lo que mejor sabes hacer."
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad: toma más proyectos sin sumar equipo",
      description: "Crece tu cartera de clientes sin preocuparte por contratar especialistas."
    },
    {
      icon: BarChart3,
      title: "Resultados claros con reportes bajo tu marca",
      description: "Presenta informes profesionales que refuerzan tu reputación."
    },
    {
      icon: Award,
      title: "Mejor reputación: tu agencia luce más completa",
      description: "Ofrece servicios integrales que posicionan tu agencia como líder."
    },
    {
      icon: Shield,
      title: "Cero riesgo: sin costos fijos de performance",
      description: "Solo pagas por proyectos activos, sin comprometer tu flujo de caja."
    },
    {
      icon: Zap,
      title: "Expertise al día en Ads y Growth, siempre actualizado",
      description: "Accede a conocimiento especializado y estrategias de vanguardia."
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que ganas con{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Argus
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-shadow bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-smooth group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/80 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://calendly.com/argusppc/sesion-de-consultoria-gratis-para-empresas-de-am-clon', '_blank')}
          >
            Quiero ganar más con mi agencia
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;