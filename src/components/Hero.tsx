import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useTheme } from "next-themes";
import logoDark from "@/assets/breakout-labs-logo-dark.png";
import logoLight from "@/assets/breakout-labs-logo-light.png";

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orbiting particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-orbit opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-orbit opacity-40" 
             style={{ animationDelay: "5s", animationDuration: "25s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-orbit opacity-30"
             style={{ animationDelay: "10s", animationDuration: "30s" }} />
        
        {/* Gradient glows */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-glow opacity-20 blur-3xl animate-glow-pulse"
             style={{ animationDelay: "1s" }} />
        
        {/* Circuit-like lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(190, 100%, 50%)" />
              <stop offset="100%" stopColor="hsl(150, 100%, 50%)" />
            </linearGradient>
          </defs>
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#circuit-gradient)" strokeWidth="1" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#circuit-gradient)" strokeWidth="1" />
          <circle cx="25%" cy="25%" r="4" fill="hsl(190, 100%, 50%)" />
          <circle cx="75%" cy="75%" r="4" fill="hsl(150, 100%, 50%)" />
          <circle cx="75%" cy="25%" r="4" fill="hsl(190, 100%, 50%)" />
          <circle cx="25%" cy="75%" r="4" fill="hsl(150, 100%, 50%)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <img 
            src={theme === "dark" ? logoDark : logoLight} 
            alt="Breakout Labs" 
            className="w-96 h-auto mx-auto mb-12 object-contain"
            style={{ clipPath: 'inset(28% 0 28% 0)' }}
          />
          
          <p className="text-2xl md:text-3xl font-light mb-8 text-foreground">
            Designing Tomorrow's Finance, <span className="text-accent font-semibold">Today</span>
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Bold innovation meets futuristic vision. We specialize in product strategy, 
            ideation, prototyping, and management for Fintech and Web3.
          </p>

          <a href="mailto:hello@breakoutlabs.cc">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-neon-green hover:shadow-neon-blue transition-all duration-300 bg-accent hover:bg-primary text-accent-foreground font-bold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
