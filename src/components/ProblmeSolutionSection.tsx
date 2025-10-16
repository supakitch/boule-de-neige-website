import { CheckCircle, XCircle } from "lucide-react";
import { SnowballAnimation } from "./SnowballAnimation";

export const ProblmeSolutionSection = () => {
  const problemes = [
    "Ciblage flou qui fait perdre du temps",
    "Du cold message uniquement sur email/LinkedIn, sans signaux d'affaires ni personnalisation",
    "Manque de cadence multicanale coordonnée",
    "Cycles de vente qui s'éternisent",
  ];

  const solutions = [
    "ICP ultra-précis et personas détaillés",
    "Séquences multicanales intégrant signaux d'affaires (email, LinkedIn, cold calling, ads, etc.)",
    "Coaching équipe commerciale et automatisation",
    "Reporting en temps réel et optimisation continue",
  ];

  return (
    <section
      id="probleme-solution"
      className="relative bg-primary py-20 overflow-hidden"
      aria-labelledby="probleme-title"
    >
      <div className="container mx-auto px-4 pb-12">
        <div className="text-left lg:text-center mb-16">
          <h2 id="probleme-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Le problème, on le connaît par cœur
          </h2>
          <p className="text-lg text-white/70 max-w-3xl lg:mx-auto">
            La plupart des stratégies outbound souffrent des mêmes maux : canaux en silo, messages génériques, séquences
            qui s'essoufflent et manque de coordination multicanale, elles gaspillent du temps et de l'énergie, sans
            obtenir les résultats attendus.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problèmes */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Ce qui ne marche pas</h3>
            <ul className="space-y-4">
              {problemes.map((probleme, index) => (
                <li key={index} className="flex items-start bg-white/5 rounded-lg p-5 backdrop-blur-sm">
                  <XCircle className="w-6 h-6 text-red-400 mt-0.5 mr-4 flex-shrink-0" />
                  <span className="text-white/90">{probleme}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Notre approche Boule2neige</h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start bg-white/5 rounded-lg p-5 backdrop-blur-sm">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 mr-4 flex-shrink-0" />
                  <span className="text-white/90">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bordure diagonale en bas - côté gauche plus haut, descend vers la droite */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          backgroundColor: "#ffece8",
          clipPath: "polygon(0 30%, 100% 100%, 100% 100%, 0 100%)",
        }}
      />
      
      <SnowballAnimation />
    </section>
  );
};
