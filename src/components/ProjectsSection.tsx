import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Gamepad2, Server, FileText, Zap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "2D SFML Game (Xonix Style)",
      description: "A complete multiplayer game featuring user authentication, real-time leaderboards using min-heap, and inventory management with AVL trees. Built with advanced data structures for optimal performance.",
      icon: <Gamepad2 className="w-8 h-8" />,
      technologies: ["C++", "SFML", "Data Structures", "Game Logic"],
      features: ["Multiplayer Support", "Login/Auth System", "Min-Heap Leaderboard", "AVL Tree Inventory"],
      github: "https://github.com/devmasif",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "FastAPI + MongoDB Backend",
      description: "A robust backend system with complete JWT authentication, user management, and RESTful API endpoints. Features secure login/logout, password hashing, and comprehensive error handling.",
      icon: <Server className="w-8 h-8" />,
      technologies: ["Python", "FastAPI", "MongoDB", "JWT"],
      features: ["JWT Authentication", "User Management", "RESTful APIs", "Error Handling"],
      github: "https://github.com/devmasif",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Blog API System",
      description: "Full CRUD operations for blog management with user authentication, post categorization, and auto-generated API documentation. Includes search functionality and user interaction features.",
      icon: <FileText className="w-8 h-8" />,
      technologies: ["FastAPI", "MongoDB", "Python", "Swagger"],
      features: ["CRUD Operations", "User Features", "Auto Documentation", "Search System"],
      github: "https://github.com/devmasif",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Plants vs. Zombies (OOP)",
      description: "Object-oriented implementation showcasing advanced OOP concepts including polymorphism, inheritance, and design patterns. Features multiple plant types, zombie varieties, and game mechanics.",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["C++", "OOP", "Design Patterns", "Game Dev"],
      features: ["Polymorphism", "Inheritance", "Design Patterns", "Game Mechanics"],
      github: "https://github.com/devmasif",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in backend development, 
            data structures, and software engineering principles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-card group hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink size={18} />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-primary">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-primary">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={18} />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <Card className="glass-card inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for more projects and contributions.
              </p>
              <Button 
                className="glow-button text-primary-foreground"
                asChild
              >
                <a href="https://github.com/devmasif" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={20} />
                  Visit GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;