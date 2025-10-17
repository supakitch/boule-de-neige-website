import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Phone, Target, Users, TrendingUp, Megaphone, Code, BookOpen, Mic, Book } from "lucide-react";

const OffresSection = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#ffece8" }}>
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nos Offres.
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            On s'adapte à la piste. Que tu sois en plein schuss ou que tu prépares ton premier virage.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Stratégie et cadrage */}
          <Card className="bg-white border-none rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex flex-col">
            <CardContent className="p-8 flex flex-col flex-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-accent-orange mb-2">
                  Stratégie et cadrage
                </h3>
                <p className="text-sm text-accent-orange/90 font-medium">
                  15 jours de cadrage
                </p>
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                On revoit tout ton cycle de vente, de la prospection au closing. En quinze jours, on remet ton process commercial à niveau. Ensuite, tu choisis les leviers à activer avec nos experts dédiés.
              </p>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <Check className="text-accent-orange mt-1 flex-shrink-0" size={20} />
                  <p className="text-foreground/80 text-sm">
                    Audit complet du cycle de vente : prospection, qualification, closing
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent-orange mt-1 flex-shrink-0" size={20} />
                  <p className="text-foreground/80 text-sm">
                    Revue de ton ICP, message et proposition de valeur
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent-orange mt-1 flex-shrink-0" size={20} />
                  <p className="text-foreground/80 text-sm">
                    Analyse des canaux, outils et workflows existants
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent-orange mt-1 flex-shrink-0" size={20} />
                  <p className="text-foreground/80 text-sm">
                    Définition d'une stratégie commerciale multicanale cohérente
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent-orange mt-1 flex-shrink-0" size={20} />
                  <p className="text-foreground/80 text-sm">
                    Ateliers collaboratifs avec ton équipe
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent-orange mt-1 flex-shrink-0" size={20} />
                  <p className="text-foreground/80 text-sm">
                    Recommandations pour améliorer conversion et cadence
                  </p>
                </div>
              </div>

              <Button 
                className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white rounded-xl py-6 text-base font-semibold"
              >
                Planifier un audit gratuit
              </Button>
            </CardContent>
          </Card>

          {/* Card 2 - Exécution à la carte */}
          <Card className="bg-white border-none rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex flex-col">
            <CardContent className="p-8 flex flex-col flex-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-accent-pink mb-2">
                  Exécution à la carte
                </h3>
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                Chaque mission est menée par un expert de son domaine. On assemble pour toi une équipe sur mesure, adaptée à ton niveau de maturité et à tes objectifs.
              </p>

              <div className="mb-6 flex-1">
                <p className="text-foreground font-semibold mb-6">Modules possibles :</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-accent-pink/5 p-4 rounded-xl flex items-center gap-2.5">
                    <Target className="text-accent-pink flex-shrink-0" size={20} />
                    <span className="text-sm text-foreground">Prospection<br/>multicanale</span>
                  </div>
                  
                  <div className="bg-accent-pink/5 p-4 rounded-xl flex items-center gap-2.5">
                    <Phone className="text-accent-pink flex-shrink-0" size={20} />
                    <span className="text-sm text-foreground">Cold & Warm<br/>Calling</span>
                  </div>
                  
                  <div className="bg-accent-pink/5 p-4 rounded-xl flex items-center gap-2.5">
                    <Megaphone className="text-accent-pink flex-shrink-0" size={20} />
                    <span className="text-sm text-foreground">Ads B2B</span>
                  </div>
                  
                  <div className="bg-accent-pink/5 p-4 rounded-xl flex items-center gap-2.5">
                    <TrendingUp className="text-accent-pink flex-shrink-0" size={20} />
                    <span className="text-sm text-foreground">Contenu<br/>LinkedIn</span>
                  </div>
                  
                  <div className="bg-accent-pink/5 p-4 rounded-xl flex items-center gap-2.5 col-span-2">
                    <Users className="text-accent-pink flex-shrink-0" size={20} />
                    <span className="text-sm text-foreground">Sourcing de talents</span>
                  </div>
                </div>

                <div className="bg-accent-pink/10 border-l-4 border-accent-pink p-4 rounded-r-lg">
                  <p className="text-sm text-foreground/70 italic">
                    3 mois d'engagement pour chaque module.
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <Button 
                  className="w-full bg-accent-pink hover:bg-accent-pink/90 text-white rounded-xl py-6 text-base font-semibold"
                >
                  Discuter de nos modules
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 - Formation & Coaching */}
          <Card className="bg-white border-none rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex flex-col">
            <CardContent className="p-8 flex flex-col flex-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-accent-orange mb-2">
                  Formation & Coaching
                </h3>
                <p className="text-sm text-accent-orange/90 font-medium">
                  Formats : 1 à 5 jours
                </p>
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                Rends ton équipe commerciale autonome et redoutable. On forme et on coache tes équipes pour qu'elles maîtrisent l'art de la prospection, de la relance et du closing moderne.
              </p>

              <div className="mb-6">
                <p className="text-foreground font-semibold mb-4">Formations disponibles :</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="text-accent-orange mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Formation SDR / AE (1-2 jours) :</p>
                      <p className="text-foreground/70 text-sm">prospection, relance, cadence, outils.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mic className="text-accent-orange mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Coaching :</p>
                      <p className="text-foreground/70 text-sm">feedback, analyse de calls, structuration du pipe.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Book className="text-accent-orange mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Playbook personnalisé :</p>
                      <p className="text-foreground/70 text-sm">cadences, templates et bonnes pratiques.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent-orange/10 border-l-4 border-accent-orange p-4 rounded-r-lg mt-6">
                  <p className="text-sm text-foreground/70 italic">
                    Tous nos formateurs sont des experts terrain, issus de startups B2B performantes.
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <Button 
                  className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white rounded-xl py-6 text-base font-semibold"
                >
                  Découvrir la formation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Summary */}
        <div className="text-center mt-12 max-w-4xl mx-auto">
          <p className="text-foreground/70 text-base leading-relaxed">
            <strong>Accompagnement :</strong> on fait avec toi. <strong>Formation :</strong> on t'apprend à le faire. 
            Dans les deux cas, tu travailles avec des experts spécialisés sur chaque sujet.
          </p>
        </div>
      </div>
    </section>
  );
};

export { OffresSection };
