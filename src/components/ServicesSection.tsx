import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield, Database, Bot, Code, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Server className="w-12 h-12" />,
      title: "Backend APIs",
      description: "Build robust and scalable RESTful APIs with proper documentation, error handling, and performance optimization.",
      features: ["RESTful Design", "Auto Documentation", "Error Handling", "Performance Tuning"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Authentication Systems",
      description: "Implement secure login/auth systems with JWT tokens, password hashing, and session management.",
      features: ["JWT Implementation", "Password Security", "Session Management", "Role-based Access"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "FastAPI + MongoDB",
      description: "Complete backend setup with FastAPI framework and MongoDB database for modern web applications.",
      features: ["FastAPI Framework", "MongoDB Integration", "Data Modeling", "Query Optimization"]
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI Tool Integration",
      description: "Integrate AI and LLMs into applications using Hugging Face, Gradio, and custom AI workflows.",
      features: ["LLM Integration", "Hugging Face APIs", "Gradio Interfaces", "AI Workflows"]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Data Structures & Algorithms",
      description: "Implement efficient algorithms and data structures for optimal performance and scalability.",
      features: ["Algorithm Design", "Performance Analysis", "Data Structure Implementation", "Competitive Programming"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "System Architecture",
      description: "Design and implement scalable system architectures with proper separation of concerns and modularity.",
      features: ["System Design", "Microservices", "Scalability Planning", "Architecture Patterns"]
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Services & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized in backend development and system architecture with expertise in 
            modern frameworks, databases, and AI integration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary group-hover:text-accent transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={feature} 
                      className="flex items-center text-sm text-muted-foreground"
                      style={{ animationDelay: `${(index * 100) + (featureIndex * 50)}ms` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-card inline-block max-w-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your project requirements and build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="glow-button text-primary-foreground px-8 py-3"
                >
                  Get In Touch
                </button>
                <a 
                  href="https://github.com/devmasif" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-primary/50 text-primary hover:bg-primary/10 rounded-lg transition-colors duration-300 font-medium"
                >
                  View My Work
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;