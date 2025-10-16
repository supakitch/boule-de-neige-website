import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, TrendingUp } from "lucide-react";
import huskyWink from "@/assets/husky-wink.png";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) * 100) / buttonRef.current.clientWidth;
      const y = ((e.clientY - rect.top) * 100) / buttonRef.current.clientHeight;
      buttonRef.current.style.setProperty('--mouse-x', x.toString());
      buttonRef.current.style.setProperty('--mouse-y', y.toString());
    }
  };

  return (
    <section className="relative bg-gradient-hero py-20 pt-32" aria-labelledby="hero-title">
      <a href="#services" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-card focus:rounded">
        Aller au contenu principal
      </a>
      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 id="hero-title" className="text-6xl font-bold leading-tight text-foreground">
                On remplit ton agenda plus vite qu'une descente de piste noire
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                <span className="font-semibold text-accent-orange">Accélérateurs d'Outreach</span> —{" "}
                Cold call, emailing, LinkedIn, Ads… tout ce qu'il faut pour une avalanche de leads.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://zcal.co/mcomptier/30min" target="_blank" rel="noopener noreferrer">
              <Button 
                ref={buttonRef}
                variant="airbnb" 
                size="lg" 
                className="text-lg px-8 py-6 font-['Jost']" 
                aria-label="Planifier un audit gratuit de 15 minutes"
                onMouseMove={handleMouseMove}
                style={{
                  ['--mouse-x' as string]: '50',
                  ['--mouse-y' as string]: '50',
                  backgroundPosition: 'calc((100 - var(--mouse-x, 50)) * 1%) calc((100 - var(--mouse-y, 50)) * 1%)',
                }}
              >
                Planifier un audit gratuit
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
            </a>
              <a href="#probleme-solution">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" aria-label="Découvrir toutes nos offres d'outreach B2B">
                  Découvrir nos offres
                </Button>
              </a>
            </div>

            {/* Preuve sociale */}
            <div className="space-y-4">
              <blockquote className="italic text-lg text-muted-foreground border-l-4 border-accent-orange pl-4">
                "Depuis qu'on travaille avec Boule2neige, on a multiplié par 3 nos RDV qualifiés. 
                Leur approche est redoutablement efficace !"
                <footer className="text-sm font-semibold text-primary mt-2">
                  — Sarah M., CEO SaaS Startup
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Mascotte */}
          <div className="relative flex justify-center" role="presentation">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-accent rounded-full opacity-20 blur-xl animate-pulse" aria-hidden="true"></div>
              <img src={huskyWink} alt="Mascotte Husky de Boule2neige faisant un clin d'oeil - représentant l'esprit complice et énergique de l'agence" className="relative w-80 h-80 md:w-96 md:h-96 animate-float" width="384" height="384" loading="eager" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a href="#probleme-solution" className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce" aria-label="Défiler vers la section suivante">
        <div className="w-6 h-10 border-2 border-accent-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </a>
    </section>
  );
};