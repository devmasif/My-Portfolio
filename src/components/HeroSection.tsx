import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Muhammad Asif
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground font-light">
            <span className="inline-block">Backend Developer</span>
            <span className="mx-3 text-primary">|</span>
            <span className="inline-block">CS Student</span>
            <span className="mx-3 text-primary">|</span>
            <span className="inline-block">Tech Explorer</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate about building robust backend systems and exploring cutting-edge technologies. 
          Currently pursuing BSCS at FAST Islamabad with hands-on experience in APIs, authentication, and AI integration.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('projects')} 
            className="glow-button text-primary-foreground px-8 py-3 text-lg"
          >
            View Projects
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')} 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 text-lg"
          >
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 pt-8">
          <a 
            href="https://github.com/devmasif" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://linkedin.com/in/muhamd-asif" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="mailto:m.ali83075@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;