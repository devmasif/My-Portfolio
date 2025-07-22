import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Code2, Database, Shield, Bot } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "C++", level: 80 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "FastAPI", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "AI/LLMs", level: 60 }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate backend developer with a strong foundation in computer science and
            hands-on experience building scalable systems and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio and Timeline */}
          <div className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center text-primary">
                  <GraduationCap className="mr-3" size={28} />
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-2"></div>
                    <h4 className="font-semibold text-lg">FAST Islamabad</h4>
                    <p className="text-primary font-medium">Bachelor of Science in Computer Science</p>
                    <p className="text-muted-foreground">2022 - 2026 (Expected)</p>
                  </div>
                  <div className="border-l-2 border-muted/30 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-muted rounded-full -left-2 top-2"></div>
                    <h4 className="font-semibold text-lg">Army Public School</h4>
                    <p className="text-muted-foreground">Pre-Engineering</p>
                    <p className="text-muted-foreground">2021 - 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center text-primary">
                  <Briefcase className="mr-3" size={28} />
                  Experience
                </h3>
                <div className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-2"></div>
                  <h4 className="font-semibold text-lg">Codeaza Technologies</h4>
                  <p className="text-primary font-medium">Software Developer Intern</p>
                  <p className="text-muted-foreground mb-3">Summer 2025</p>
                  <p className="text-sm text-muted-foreground">
                    Working on frontend, backend, and LLM integration projects.
                    Developing APIs, authentication systems, and AI-powered tools.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center text-primary">
                  <Code2 className="mr-3" size={28} />
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Specializations</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                    <Database className="mx-auto mb-2 text-primary" size={32} />
                    <p className="font-medium">Backend APIs</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                    <Shield className="mx-auto mb-2 text-primary" size={32} />
                    <p className="font-medium">Authentication</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                    <Code2 className="mx-auto mb-2 text-primary" size={32} />
                    <p className="font-medium">DSA & CP</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                    <Bot className="mx-auto mb-2 text-primary" size={32} />
                    <p className="font-medium">AI Integration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;