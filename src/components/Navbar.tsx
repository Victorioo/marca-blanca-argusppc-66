import { Button } from "@/components/ui/button";
import argusLogo from "@/assets/argus-logo.png";
const Navbar = () => {
  return <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        

        {/* Navigation */}
        

        {/* CTA */}
        <Button variant="cta" size="sm" onClick={() => window.open('https://calendly.com', '_blank')}>
          Agendar llamada
        </Button>
      </div>
    </nav>;
};
export default Navbar;