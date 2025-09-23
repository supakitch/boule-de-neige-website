import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-faustina">Boule2neige</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Accélérateurs d'Outreach. On remplit ton agenda plus vite qu'une descente de piste noire.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Cold Emailing</li>
              <li>Cold Calling</li>
              <li>LinkedIn Outreach</li>
              <li>Ads B2B</li>
              <li>Allbound</li>
              <li>Automation & Coaching</li>
            </ul>
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
                placeholder="Ton email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="sm">
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
            
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">RGPD</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">CGV</a>
            </div>
            
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-primary-foreground/60 hover:text-primary-foreground transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};