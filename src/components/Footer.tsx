import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 bg-background/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Muhammad Asif
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Backend Developer & CS Student passionate about building robust systems 
              and exploring cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm animated-underline"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/devmasif" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:scale-110 transition-transform duration-300"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://linkedin.com/in/muhamd-asif" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="mailto:m.ali83075@gmail.com"
                className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:scale-110 transition-transform duration-300"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              Open to opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Muhammad Asif. All rights reserved.
          </p>
          <div className="flex items-center text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-primary fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;