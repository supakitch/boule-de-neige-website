import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import huskyTongue from "@/assets/husky-tongue.png";

export const CTASection = () => {
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
    <section id="contact" className="py-20 bg-gradient-hero" aria-labelledby="cta-title">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <img 
              src={huskyTongue} 
              alt="Mascotte Husky joyeuse tirant la langue - prête à démarrer votre stratégie d'outreach" 
              className="w-32 h-32 mx-auto mb-8 animate-bounce"
              style={{ animationDuration: '2s' }}
              width="128"
              height="128"
              loading="lazy"
            />
            
            <h2 id="cta-title" className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Prêt pour ton avalanche de leads ?
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Arrête de subir ta prospection. Prends le contrôle et transforme-la en 
              véritable machine à générer des opportunités qualifiées.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="https://zcal.co/mcomptier/30min" target="_blank" rel="noopener noreferrer">
              <Button 
                ref={buttonRef}
                variant="airbnb" 
                size="lg" 
                className="text-lg px-10 py-6 font-['Jost']"
                aria-label="Planifier un audit gratuit de 15 minutes avec notre équipe"
                onMouseMove={handleMouseMove}
                style={{
                  ['--mouse-x' as string]: '50',
                  ['--mouse-y' as string]: '50',
                  backgroundPosition: 'calc((100 - var(--mouse-x, 50)) * 1%) calc((100 - var(--mouse-y, 50)) * 1%)',
                }}
              >
                <Calendar className="mr-2 w-6 h-6" aria-hidden="true" />
                Planifier un audit gratuit
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
            </a>
            
            <a href="mailto:camille@boule2neige.fr">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-6 bg-card hover:bg-card-secondary hover:text-foreground"
                aria-label="Nous contacter pour discuter de votre projet"
              >
                <MessageCircle className="mr-2 w-6 h-6" aria-hidden="true" />
                Nous contacter
              </Button>
            </a>
          </div>

          {/* Garanties / Preuves sociales finales */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-accent-orange mb-2">15 min</div>
              <div className="text-muted-foreground">Audit gratuit par téléphone</div>
            </div>
            
            <div className="bg-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-accent-pink mb-2">7 jours</div>
              <div className="text-muted-foreground">Premiers résultats visibles</div>
            </div>
            
            <div className="bg-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-accent-orange mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction garantie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};