import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, Layers, Users } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Product Strategy & Roadmap Planning",
    description: "Define clear product vision and strategic roadmaps that align with your business goals and market opportunities in Fintech and Web3.",
  },
  {
    icon: Lightbulb,
    title: "Ideation & Concept Development",
    description: "Transform ideas into innovative concepts through collaborative workshops and design thinking methodologies tailored for financial technology.",
  },
  {
    icon: Layers,
    title: "Interactive Prototyping",
    description: "Build high-fidelity prototypes that bring your vision to life, enabling rapid iteration and validation before full-scale development.",
  },
  {
    icon: Users,
    title: "Product Management & Agile Leadership",
    description: "Expert product management and agile coaching to guide your teams through successful product launches and continuous improvement.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for building the future of finance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-neon-blue group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-neon-blue transition-shadow duration-300">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
