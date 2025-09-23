import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

export const ProblmeSolutionSection = () => {
  const problemes = [
    "Ciblage flou qui fait perdre du temps",
    "Campagnes qui plafonnent après quelques semaines", 
    "Manque de cadence multicanale coordonnée",
    "Cycles de vente qui s'éternisent"
  ];

  const solutions = [
    "ICP ultra-précis et personas détaillés",
    "Séquences multicanales (email, LinkedIn, WhatsApp, calls)",
    "Coaching équipe commerciale et automatisation",
    "Reporting en temps réel et optimisation continue"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Le problème, on le connaît par cœur
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La plupart des entreprises peinent à générer des rendez-vous qualifiés. 
            Entre ciblage imprécis, séquences qui s’essoufflent et manque de coordination multicanale, elles gaspillent du temps et de l’énergie… 
            sans obtenir les résultats attendus.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problèmes */}
          <div className="bg-card-secondary rounded-2xl p-8 border-l-4 border-destructive">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <XCircle className="w-7 h-7 text-destructive mr-3" />
              Ce qui ne marche pas
            </h3>
            <ul className="space-y-4">
              {problemes.map((probleme, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="w-5 h-5 text-destructive mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-foreground">{probleme}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-card rounded-2xl p-8 border-l-4 border-accent-orange">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <CheckCircle className="w-7 h-7 text-accent-orange mr-3" />
              Notre approche Boule2neige
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-orange mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Flèche de transition */}
        <div className="flex justify-center mt-12">
          <div className="bg-gradient-accent p-4 rounded-full animate-pulse-glow">
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};