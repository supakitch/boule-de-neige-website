import { useState, useEffect } from "react";
import { TrendingUp, Calendar, Clock, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const ResultatsSection = () => {
  const [counters, setCounters] = useState({
    responseRate: 0,
    meetings: 0, 
    cycleReduction: 0,
    satisfaction: 0
  });

  // Animation des compteurs
  useEffect(() => {
    const duration = 2000; // 2 secondes
    const frames = 60;
    const increment = duration / frames;
    
    const targets = {
      responseRate: 40,
      meetings: 8,
      cycleReduction: 30,
      satisfaction: 4.9
    };

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / frames;
      
      setCounters({
        responseRate: Math.floor(targets.responseRate * progress),
        meetings: Math.floor(targets.meetings * progress), 
        cycleReduction: Math.floor(targets.cycleReduction * progress),
        satisfaction: Number((targets.satisfaction * progress).toFixed(1))
      });

      if (frame >= frames) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      text: "En 3 mois, on est passé de 2 à 15 RDV qualifiés par semaine. L'équipe Boule2neige a transformé notre approche commerciale.",
      author: "Thomas L.",
      company: "CEO, Fintech"
    },
    {
      text: "Leur méthode multicanale est redoutable. Nos taux de conversion ont explosé et l'équipe commerciale est enfin sereine.",
      author: "Marie K.", 
      company: "CMO, SaaS B2B"
    },
    {
      text: "Plus qu'une prestation, c'est un vrai coaching. Ils nous ont appris à pêcher, pas juste donné du poisson.",
      author: "Alexandre R.",
      company: "Sales Director"
    }
  ];

  return (
    <section id="resultats" className="py-20 bg-background" aria-labelledby="resultats-title">
      <div className="container mx-auto px-4">
        <div className="text-left lg:text-center mb-16">
          <h2 id="resultats-title" className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Des résultats qui parlent d'eux-mêmes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl lg:mx-auto">
            Nos clients ne le disent pas par politesse. Les chiffres parlent.
          </p>
        </div>

        {/* KPIs animés */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" role="list">
          <div className="text-center bg-card-secondary rounded-xl p-8" role="listitem">
            <TrendingUp className="w-12 h-12 text-accent-orange mx-auto mb-4" aria-hidden="true" />
            <div className="text-4xl font-bold text-primary mb-2" aria-label="Plus 40 pourcent">+{counters.responseRate}%</div>
            <div className="text-muted-foreground">Taux de réponse moyen</div>
          </div>
          
          <div className="text-center bg-card-secondary rounded-xl p-8" role="listitem">
            <Calendar className="w-12 h-12 text-accent-pink mx-auto mb-4" aria-hidden="true" />
            <div className="text-4xl font-bold text-primary mb-2" aria-label="Huit rendez-vous">{counters.meetings}</div>
            <div className="text-muted-foreground">RDV qualifiés / semaine</div>
          </div>
          
          <div className="text-center bg-card-secondary rounded-xl p-8" role="listitem">
            <Clock className="w-12 h-12 text-accent-orange mx-auto mb-4" aria-hidden="true" />
            <div className="text-4xl font-bold text-primary mb-2" aria-label="Moins 30 pourcent">-{counters.cycleReduction}%</div>
            <div className="text-muted-foreground">Cycles de vente raccourcis</div>
          </div>
          
          <div className="text-center bg-card-secondary rounded-xl p-8" role="listitem">
            <Star className="w-12 h-12 text-accent-pink mx-auto mb-4" aria-hidden="true" />
            <div className="text-4xl font-bold text-primary mb-2" aria-label="Note de 4.9 sur 5">{counters.satisfaction}/5</div>
            <div className="text-muted-foreground">Satisfaction client</div>
          </div>
        </div>

        {/* Témoignages - Carousel mobile, Grid desktop */}
        <div className="md:hidden">
          <Carousel 
            opts={{ loop: true }}
            className="w-full max-w-xs mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-card rounded-xl p-6 border-l-4 border-accent-orange">
                    <blockquote className="text-muted-foreground italic mb-4">
                      "{testimonial.text}"
                    </blockquote>
                    <footer className="space-y-1">
                      <div className="font-semibold text-primary">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </footer>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border-l-4 border-accent-orange">
              <blockquote className="text-muted-foreground italic mb-4">
                "{testimonial.text}"
              </blockquote>
              <footer className="space-y-1">
                <div className="font-semibold text-primary">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};