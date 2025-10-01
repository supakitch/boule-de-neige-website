import { CheckCircle, XCircle } from "lucide-react";

export const ProblmeSolutionSection = () => {
  const problemes = [
    "Ciblage flou qui fait perdre du temps",
    "Du cold blast uniquement sur email/LinkedIn, sans signaux d'affaires ni personnalisation", 
    "Manque de cadence multicanale coordonnée",
    "Cycles de vente qui s'éternisent"
  ];

  const solutions = [
    "ICP ultra-précis et personas détaillés",
    "Séquences multicanales intégrant signaux d'affaires (email, LinkedIn, cold calling, ads, etc.)",
    "Coaching équipe commerciale et automatisation",
    "Reporting en temps réel et optimisation continue"
  ];

  return (
    <section id="probleme-solution" className="py-20 bg-primary relative overflow-hidden" aria-labelledby="probleme-title" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)' }}>
      <div className="container mx-auto px-4 relative z-10 pb-16">
        <div className="text-center mb-16">
          <h2 id="probleme-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Le problème, on le connaît par cœur
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            La plupart des stratégies outbound souffrent des mêmes maux : canaux en silo, messages génériques, séquences qui s'essoufflent et manque de coordination multicanale, elles gaspillent du temps et de l'énergie — sans obtenir les résultats attendus.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Problèmes */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Ce qui ne marche pas
            </h3>
            <ul className="space-y-4">
              {problemes.map((probleme, index) => (
                <li key={index} className="flex items-start bg-white/5 backdrop-blur-sm rounded-xl p-4">
                  <XCircle className="w-6 h-6 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-base text-white/90">{probleme}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Notre approche Boule2neige
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start bg-white/5 backdrop-blur-sm rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-base text-white/90">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};