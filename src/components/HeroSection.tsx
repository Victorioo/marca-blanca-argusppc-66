import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import FloatingElements from "./FloatingElements";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center px-4 hero-gradient">
      <FloatingElements />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-transparent rounded-lg p-3">
            <img src="https://argusppc.com/wp-content/uploads/2024/01/argus_isologo_blanco2-1.png" alt="Argus PPC" className="object-contain w-48" />
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 md:leading-tight">
          Haz tu agencia de marketing más{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            completa y rentable
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">Ayudamos a Agencias de Marketing a escalar su oferta con Paid Media, aumentando el valor de su fee y entregando resultados tangibles a sus clientes, sin ampliar estructura ni asumir costos fijos, gracias a nuestro soporte en "marca blanca".  </p>

        {/* CTA Button */}
        <div className="mb-10">
          <Button variant="hero" size="lg" className="mb-4 text-lg py-6 px-24 transition-all font-semibold" onClick={() => window.open('https://calendly.com/argusppc/sesion-de-consultoria-gratis-para-empresas-de-am-clon', '_blank')}>
            Añadir Paid Media a mi oferta
          </Button>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-2 text-white/80 mb-8">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
          </div>
          <span className="ml-1 font-medium">Más de 3M USD gestionados, presencia en +7 países y +50 clientes</span>
        </div>

        {/* Partner badges */}
        <div className="flex items-center justify-center gap-6 opacity-80">
          
          
        </div>
      </div>
    </section>;
};
export default HeroSection;