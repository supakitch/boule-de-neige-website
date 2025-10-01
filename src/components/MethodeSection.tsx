import { CheckCircle2 } from "lucide-react";

export const MethodeSection = () => {
  const etapes = [
    {
      numero: "01",
      titre: "Cadrage piste",
      description: "ICP précis, personas détaillés, mapping des points de douleur"
    },
    {
      numero: "02", 
      titre: "Préparation",
      description: "Création des séquences, messages personnalisés, configuration des outils"
    },
    {
      numero: "03",
      titre: "Lancement", 
      description: "Déploiement multicanal progressif avec monitoring en temps réel"
    },
    {
      numero: "04",
      titre: "Accélération",
      description: "Optimisation continue des taux de conversion et scaling des campagnes"
    },
    {
      numero: "05",
      titre: "Transmission",
      description: "Formation de ton équipe pour l'autonomie complète"
    }
  ];

  return (
    <section id="methode" className="py-20 bg-muted" aria-labelledby="methode-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="methode-title" className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Notre méthode en 5 étapes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une approche structurée et éprouvée pour des résultats garantis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {etapes.map((etape, index) => (
            <div key={index} className="relative">
              {/* Ligne de connexion */}
              
              <div className="flex items-center gap-6 mb-12">
                {/* Numéro */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {etape.numero}
                  </div>
                </div>
                
                {/* Contenu */}
                <div className="bg-card rounded-xl p-6 flex-grow hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-bold text-primary">{etape.titre}</h3>
                    <CheckCircle2 className="w-5 h-5 text-accent-orange ml-2" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {etape.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};