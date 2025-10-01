import React, { useRef } from "react";
import { Mail, Phone, Linkedin, Megaphone, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) * 100) / buttonRef.current.clientWidth;
      const y = ((e.clientY - rect.top) * 100) / buttonRef.current.clientHeight;
      buttonRef.current.style.setProperty('--mouse-x', x.toString());
      buttonRef.current.style.setProperty('--mouse-y', y.toString());
    }
  };

  const services = [
    {
      icon: Mail,
      title: "Cold Emailing",
      description: "Séquences personnalisées qui convertissent",
      color: "text-accent-orange"
    },
    {
      icon: Phone,
      title: "Cold Calling", 
      description: "Scripts rodés et coaching commercial",
      color: "text-accent-pink"
    },
    {
      icon: Linkedin,
      title: "LinkedIn Outreach",
      description: "Automatisation intelligente et humaine", 
      color: "text-accent-orange"
    },
    {
      icon: Megaphone,
      title: "Ads B2B",
      description: "Campagnes paid qui génèrent des leads",
      color: "text-accent-pink"
    },
    {
      icon: Users,
      title: "Allbound",
      description: "Inbound + Outbound coordonnés",
      color: "text-accent-orange"
    },
    {
      icon: Zap,
      title: "Automation & Coaching",
      description: "Outils + formation pour ton équipe",
      color: "text-accent-pink"
    }
  ];

  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#ffece8' }} aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="services-title" className="text-4xl md:text-5xl font-bold text-primary mb-6">
           Ton matos outbound pour rider les opportunités
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six leviers d'acquisition synchronisés pour une approche complète et redoutable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article 
                key={index}
                className="bg-card rounded-xl p-8 hover:scale-105 transition-transform duration-300 hover:shadow-lg group"
              >
                <div className={`w-16 h-16 ${service.color} mb-6 group-hover:animate-shake`} aria-hidden="true">
                  <IconComponent className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold font-jost text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            ref={buttonRef}
            variant="airbnb" 
            size="lg" 
            className="text-lg px-8 py-6 font-['Jost']"
            aria-label="Voir le détail de toutes nos solutions d'outreach B2B"
            onMouseMove={handleMouseMove}
            style={{
              ['--mouse-x' as string]: '50',
              ['--mouse-y' as string]: '50',
              backgroundPosition: 'calc((100 - var(--mouse-x, 50)) * 1%) calc((100 - var(--mouse-y, 50)) * 1%)',
            }}
          >
            Voir toutes nos solutions
          </Button>
        </div>
      </div>
    </section>
  );
};