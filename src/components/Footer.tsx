import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-faustina">Boule2neige</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Accélérateurs d'Outreach. On remplit ton agenda plus vite qu'une descente de piste noire.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span className="text-primary-foreground/80">contact@boule2neige.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span className="text-primary-foreground/80">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span className="text-primary-foreground/80">Paris, France</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter "Piste Verte"</h4>
            <p className="text-primary-foreground/80 text-sm">
              Tips outbound et actualités business chaque semaine.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email"
                placeholder="Ton email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                aria-label="Adresse email pour la newsletter"
              />
              <Button variant="secondary" size="sm" aria-label="S'inscrire à la newsletter Piste Verte">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2025 Boule2neige. Tous droits réservés.
            </div>
            
            <nav className="flex space-x-6 text-sm text-primary-foreground/60" aria-label="Liens légaux">
              <a href="#mentions-legales" className="hover:text-primary-foreground transition-colors">Mentions légales</a>
              <a href="#rgpd" className="hover:text-primary-foreground transition-colors">RGPD</a>
              <a href="#cgv" className="hover:text-primary-foreground transition-colors">CGV</a>
            </nav>
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/boule2neige" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur LinkedIn">
                <Linkedin className="w-5 h-5 text-primary-foreground/60 hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};