import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import FloatingElements from "./FloatingElements";
import argusLogo from "@/assets/argus-logo.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center px-4 hero-gradient">
      <FloatingElements />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-3 shadow-lg">
            <img src={argusLogo} alt="Argus PPC" className="w-16 h-16" />
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Haz crecer tu agencia{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            sin complicarte
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Ofrece Paid Media, Growth y performance bajo tu marca. Tus clientes ganan resultados, 
          tu agencia más valor, y nosotros lo hacemos posible desde detrás de escena.
        </p>

        {/* CTA Button */}
        <div className="mb-10">
          <Button variant="hero" size="lg" className="mb-4 text-lg py-6 px-10" onClick={() => window.open('https://calendly.com', '_blank')}>
            Añadir Paid Media a mi oferta
          </Button>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-2 text-white/80 mb-8">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
          </div>
          <span className="ml-2 font-medium">5K Miembros de la comunidad</span>
        </div>

        {/* Partner badges */}
        <div className="flex items-center justify-center gap-6 opacity-80">
          
          
        </div>
      </div>
    </section>;
};
export default HeroSection;