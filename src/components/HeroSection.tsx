import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, TrendingUp } from "lucide-react";
import huskyWink from "@/assets/husky-wink.png";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero py-20" aria-labelledby="hero-title">
      <a href="#services" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-card focus:rounded">
        Aller au contenu principal
      </a>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                On remplit ton agenda plus vite qu'une descente de piste noire{" "}
                <span className="inline-block animate-bounce" role="img" aria-label="cible">🎯</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                <span className="font-semibold text-accent-orange">Accélérateurs d'Outreach</span> —{" "}
                Cold call, emailing, LinkedIn, Ads… tout ce qu'il faut pour une avalanche de leads.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                aria-label="Planifier un audit gratuit de 15 minutes"
              >
                Planifier un audit gratuit
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                aria-label="Découvrir toutes nos offres d'outreach B2B"
              >
                Découvrir nos offres
              </Button>
            </div>

            {/* Preuve sociale */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="bg-card-secondary p-3 rounded-lg">
                  <Users className="w-6 h-6 text-accent-pink" />
                </div>
                <div className="bg-card-secondary p-3 rounded-lg">
                  <Target className="w-6 h-6 text-accent-orange" />
                </div>
                <div className="bg-card-secondary p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-accent-pink" />
                </div>
              </div>
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
          <div className="relative flex justify-center lg:justify-end" role="presentation">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent rounded-full opacity-20 blur-xl animate-pulse" aria-hidden="true"></div>
              <img 
                src={huskyWink} 
                alt="Mascotte Husky de Boule2neige faisant un clin d'oeil - représentant l'esprit complice et énergique de l'agence" 
                className="relative w-64 h-64 md:w-80 md:h-80 animate-float"
                width="320"
                height="320"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};