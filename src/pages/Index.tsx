import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblmeSolutionSection } from "@/components/ProblmeSolutionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ResultatsSection } from "@/components/ResultatsSection";
import { MethodeSection } from "@/components/MethodeSection";
import { PhilosophieSection } from "@/components/PhilosophieSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblmeSolutionSection />
      <ServicesSection />
      <ResultatsSection />
      <MethodeSection />
      <PhilosophieSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;