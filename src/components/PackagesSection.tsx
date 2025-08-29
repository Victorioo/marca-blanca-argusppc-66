import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
const PackagesSection = () => {
  const packages = [{
    name: "Essential",
    description: "Gestión de campañas básicas",
    features: ["Meta Ads", "Google Ads", "Reporting mensual", "Optimización básica"]
  }, {
    name: "Smart Growth",
    description: "Estrategia creativa completa",
    features: ["Todo de Essential", "Estrategia creativa", "Copies y diseño de anuncios", "Reporting semanal"],
    popular: true
  }, {
    name: "Full Scale",
    description: "Solución completa de performance",
    features: ["Todo de Smart Growth", "Video Ads", "Email Marketing", "Optimización avanzada", "Soporte prioritario"]
  }];
  return <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Paquetes{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              escalables
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-4">
            Elige el nivel de servicio que mejor se adapte a las necesidades de tu agencia.
          </p>
          <p className="text-lg text-primary font-semibold">Desde $500 al mes. Estos paquetes ya han ayudado a agencias a aumentar sus fees hasta un 30% sin sumar equipo interno.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => <div key={index} className={`relative ${pkg.popular ? 'transform scale-105' : ''}`}>
              {pkg.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  
                </div>}
              
              <div className={`card-shadow backdrop-blur-sm rounded-2xl p-8 border h-full ${pkg.popular ? 'bg-primary/10 border-primary/30 glow-effect' : 'bg-card/30 border-white/10'}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-white/80">{pkg.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </div>)}
                </div>

                <Button variant={pkg.popular ? "cta" : "outline-white"} className="w-full" onClick={() => window.open('https://calendly.com/argusppc/sesion-de-consultoria-gratis-para-empresas-de-am-clon', '_blank')}>
                  Elegir {pkg.name}
                </Button>
              </div>
            </div>)}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" onClick={() => window.open('https://calendly.com/argusppc/sesion-de-consultoria-gratis-para-empresas-de-am-clon', '_blank')}>
            Quiero conocer estos paquetes
          </Button>
        </div>
      </div>
    </section>;
};
export default PackagesSection;