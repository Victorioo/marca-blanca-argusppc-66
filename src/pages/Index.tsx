import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PackagesSection from "@/components/PackagesSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueSection />
      <HowItWorksSection />
      <PackagesSection />
      <TargetAudienceSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
