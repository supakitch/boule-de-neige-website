import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Target, GraduationCap } from "lucide-react";

export const OffresSection = () => {
  return (
    <section className="py-20 bg-background" id="offres">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#311C39]">
            Nos offres
          </h2>
          <p className="text-xl text-[#311C39]/80 max-w-3xl mx-auto">
            Deux pistes, un même objectif : faire de ta prospection un moteur de croissance durable.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Card 1 - Accompagnement */}
          <Card className="bg-white border-none shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E86D2A]/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-[#E86D2A]" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-2xl font-bold text-[#311C39] mb-2">
                Offre 1 — Accompagnement
              </CardTitle>
              <p className="text-lg text-[#311C39]/70 font-medium">
                On revoit tout ton cycle de vente, de la prospection au closing.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-[#311C39]/80">
                En quinze jours, on remet ton process commercial à niveau. Ensuite, tu choisis les leviers à activer avec nos experts dédiés.
              </p>

              <Separator className="bg-[#311C39]/20" />

              <div>
                <h3 className="text-xl font-semibold text-[#311C39] mb-4">
                  Phase 1 — Stratégie et cadrage (15 jours)
                </h3>
                <ul className="space-y-2 text-[#311C39]/80">
                  <li className="flex items-start">
                    <span className="text-[#E86D2A] mr-2 mt-1">•</span>
                    <span>Audit complet du cycle de vente : prospection, qualification, closing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E86D2A] mr-2 mt-1">•</span>
                    <span>Revue de ton ICP, message et proposition de valeur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E86D2A] mr-2 mt-1">•</span>
                    <span>Analyse des canaux, outils et workflows existants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E86D2A] mr-2 mt-1">•</span>
                    <span>Définition d'une stratégie commerciale multicanale cohérente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E86D2A] mr-2 mt-1">•</span>
                    <span>Ateliers collaboratifs avec ton équipe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E86D2A] mr-2 mt-1">•</span>
                    <span>Recommandations pour améliorer conversion et cadence</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#311C39] mb-4">
                  Phase 2 — Exécution à la carte
                </h3>
                <p className="text-[#311C39]/80 mb-4">
                  Chaque mission est menée par un expert de son domaine. On assemble pour toi une équipe sur mesure, adaptée à ton niveau de maturité et à tes objectifs.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-sm text-[#311C39]/80 flex items-center">
                    <span className="text-[#E86D2A] mr-2">→</span>
                    Prospection multicanale
                  </div>
                  <div className="text-sm text-[#311C39]/80 flex items-center">
                    <span className="text-[#E86D2A] mr-2">→</span>
                    Cold & Warm Calling
                  </div>
                  <div className="text-sm text-[#311C39]/80 flex items-center">
                    <span className="text-[#E86D2A] mr-2">→</span>
                    Optimisation du funnel
                  </div>
                  <div className="text-sm text-[#311C39]/80 flex items-center">
                    <span className="text-[#E86D2A] mr-2">→</span>
                    Ads B2B
                  </div>
                  <div className="text-sm text-[#311C39]/80 flex items-center">
                    <span className="text-[#E86D2A] mr-2">→</span>
                    Stack & automatisations
                  </div>
                  <div className="text-sm text-[#311C39]/80 flex items-center">
                    <span className="text-[#E86D2A] mr-2">→</span>
                    Contenu LinkedIn
                  </div>
                  <div className="text-sm text-[#311C39]/80 flex items-center col-span-2">
                    <span className="text-[#E86D2A] mr-2">→</span>
                    Sourcing de talents
                  </div>
                </div>
                <p className="text-sm text-[#311C39]/70 italic">
                  15 jours de cadrage + 3 mois d'exécution selon les modules.
                </p>
              </div>

              <Button 
                className="w-full bg-[#E86D2A] hover:bg-[#E86D2A]/90 text-[#FFF6EB] font-semibold rounded-lg h-12 text-base"
                asChild
              >
                <a href="https://calendar.app.google/yxEhg1x1kR8Btzrz8" target="_blank" rel="noopener noreferrer">
                  Planifier un audit gratuit
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Card 2 - Formation & Coaching */}
          <Card className="bg-white border-none shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E86D2A]/10 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-[#E86D2A]" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-2xl font-bold text-[#311C39] mb-2">
                Offre 2 — Formation & Coaching
              </CardTitle>
              <p className="text-lg text-[#311C39]/70 font-medium">
                Rends ton équipe commerciale autonome et redoutable.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-[#311C39]/80">
                On forme et on coache tes équipes pour qu'elles maîtrisent l'art de la prospection, de la relance et du closing moderne.
              </p>

              <Separator className="bg-[#311C39]/20" />

              <div>
                <h3 className="text-xl font-semibold text-[#311C39] mb-4">
                  Formations disponibles
                </h3>
                <ul className="space-y-3 text-[#311C39]/80">
                  <li className="flex items-start">
                    <span className="text-[#E86D2A] mr-2 mt-1">•</span>
                    <span><strong>Formation SDR / AE (1 à 2 jours) :</strong> prospection, relance, cadence, outils</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E86D2A] mr-2 mt-1">•</span>
                    <span><strong>Coaching individuel ou collectif :</strong> feedback, analyse de calls, structuration du pipe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E86D2A] mr-2 mt-1">•</span>
                    <span><strong>Playbook personnalisé :</strong> cadences, templates et bonnes pratiques documentées</span>
                  </li>
                </ul>
              </div>

              <p className="text-[#311C39]/80 bg-[#FFF6EB] p-4 rounded-lg border border-[#E86D2A]/20">
                Tous nos formateurs sont des experts terrain, issus de startups B2B performantes. Ils transmettent ce qu'ils pratiquent chaque jour.
              </p>

              <p className="text-sm text-[#311C39]/70 italic">
                Formats : présentiel ou distanciel. Durée : 1 à 5 jours.
              </p>

              <div className="h-20"></div>

              <Button 
                className="w-full bg-[#E86D2A] hover:bg-[#E86D2A]/90 text-[#FFF6EB] font-semibold rounded-lg h-12 text-base"
                asChild
              >
                <a href="https://calendar.app.google/yxEhg1x1kR8Btzrz8" target="_blank" rel="noopener noreferrer">
                  Découvrir la formation
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Summary */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-[#311C39]/80 bg-white p-6 rounded-xl shadow-md">
            <strong>Accompagnement :</strong> on fait avec toi. <strong>Formation :</strong> on t'apprend à le faire. 
            Dans les deux cas, tu travailles avec des experts spécialisés sur chaque sujet.
          </p>
        </div>
      </div>
    </section>
  );
};
