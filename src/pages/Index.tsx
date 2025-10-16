import { HeroSection } from "@/components/HeroSection";
import { ProblmeSolutionSection } from "@/components/ProblmeSolutionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ResultatsSection } from "@/components/ResultatsSection";
import { MethodeSection } from "@/components/MethodeSection";
import { PhilosophieSection } from "@/components/PhilosophieSection";
import { OffresSection } from "@/components/OffresSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblmeSolutionSection />
      <ServicesSection />
      <ResultatsSection />
      <PhilosophieSection />
      <OffresSection />
      <MethodeSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;