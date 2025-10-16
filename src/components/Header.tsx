import logo from "@/assets/logo-horizontal-dark.svg";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <a href="/" aria-label="Retour à l'accueil">
          <img 
            src={logo} 
            alt="Boule2neige - Accélérateurs d'Outreach B2B" 
            className="h-12 w-auto"
          />
        </a>
      </div>
    </header>
  );
};
