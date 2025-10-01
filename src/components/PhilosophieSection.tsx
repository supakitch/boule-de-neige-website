import huskyHappy from "@/assets/husky-happy.png";

export const PhilosophieSection = () => {
  return (
    <section id="philosophie" className="py-20 bg-background" aria-labelledby="philosophie-title">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Citation */}
            <div className="space-y-8">
              <h2 id="philosophie-title" className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Notre philosophie
              </h2>
              
              <blockquote className="relative">
                <div className="text-6xl text-accent-orange font-faustina absolute -top-4 -left-2">"</div>
                <p className="text-2xl md:text-3xl font-faustina italic text-primary leading-relaxed pl-8">
                  Je t'offre pas un igloo, je t'apprends à le construire pour que tu traverses tous les hivers.
                </p>
                <div className="text-6xl text-accent-orange font-faustina absolute -bottom-8 right-4 rotate-180">"</div>
              </blockquote>
              
              <div className="bg-card-secondary p-6 rounded-xl">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chez Boule2neige, on ne fait pas que du consulting. On forme, on accompagne, 
                  on transmet. L'objectif ? Que tu sois autonome et que ton équipe maîtrise 
                  parfaitement tous les leviers d'acquisition.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-accent-orange mb-1 break-words">Formation</div>
                  <div className="text-sm text-muted-foreground">Transmission des méthodes</div>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-accent-pink mb-1 break-words">Accompagnement</div>
                  <div className="text-sm text-muted-foreground">Coaching personnalisé</div>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-accent-orange mb-1 break-words">Autonomie</div>
                  <div className="text-sm text-muted-foreground">Indépendance totale</div>
                </div>
              </div>
            </div>

            {/* Mascotte */}
            <div className="flex justify-center lg:justify-end" role="presentation">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-accent rounded-full opacity-10 blur-2xl" aria-hidden="true"></div>
                <img 
                  src={huskyHappy} 
                  alt="Mascotte Husky heureuse illustrant la philosophie Boule2neige de transmission et coaching" 
                  className="relative w-72 h-72 md:w-96 md:h-96 animate-float"
                  width="384"
                  height="384"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};