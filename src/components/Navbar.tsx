import { Button } from "@/components/ui/button";
import argusLogo from "@/assets/argus-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-lg p-2">
            <img src={argusLogo} alt="Argus PPC" className="w-8 h-8" />
          </div>
          <span className="text-white font-bold text-xl">ARGUS PPC</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-white/80 hover:text-white transition-colors">
            Servicios
          </a>
          <a href="#como-funciona" className="text-white/80 hover:text-white transition-colors">
            Cómo funciona
          </a>
          <a href="#casos" className="text-white/80 hover:text-white transition-colors">
            Casos de éxito
          </a>
        </div>

        {/* CTA */}
        <Button 
          variant="cta" 
          size="sm"
          onClick={() => window.open('https://calendly.com', '_blank')}
        >
          Agendar llamada
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;