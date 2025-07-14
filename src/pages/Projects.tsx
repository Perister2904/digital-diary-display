
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multi-file Malware Analyzer",
      description: "Advanced malware analysis tool supporting multiple file formats with automated detection capabilities.",
      tech: ["Python", "Machine Learning", "Malware Analysis", "Security"],
      github: "https://github.com/masooma09/Multi-file-Malware-Analyzer"
    },
    {
      title: "Event Management System",
      description: "Comprehensive event management platform with user authentication and booking functionality.",
      tech: ["Full Stack", "Database Management", "Web Development", "UI/UX"],
      github: "https://github.com/Perister2904/EVENT-MANAGEMENT-SYSTEM"
    },
    {
      title: "Client-Server Quiz Game",
      description: "Real-time multiplayer quiz application with client-server architecture and live scoring.",
      tech: ["Socket Programming", "Real-time", "Game Development", "Networking"],
      github: "https://github.com/masooma09/-Client-Server-Quiz-Game-Application-"
    },
    {
      title: "IoT Device Risk Management System",
      description: "Security assessment tool for IoT devices with vulnerability scanning and risk analysis.",
      tech: ["IoT Security", "Risk Assessment", "Network Security", "Python"],
      github: "https://github.com/masooma09/-IoT-Device-Risk-Management-System"
    },
    {
      title: "WiScan - Wi-Fi Audit Tool",
      description: "Brute-force dictionary-based Wi-Fi security auditing tool for penetration testing.",
      tech: ["Wi-Fi Security", "Penetration Testing", "Security Auditing", "Python"],
      github: "https://github.com/masooma09/WiScan-A-Brute-Force-Dictionary-Based-Wi-Fi-Audit-Tool"
    },
    {
      title: "AI-Powered Connect Four Plus",
      description: "Enhanced Connect Four game with AI opponent using advanced algorithms and strategic gameplay.",
      tech: ["Artificial Intelligence", "Game AI", "Algorithm Design", "Python"],
      github: "https://github.com/masooma09/AI-Powered-Connect-Four-Plus"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-primary">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Collection of cybersecurity tools, research projects, and practical implementations 
            in offensive security, malware analysis, and penetration testing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg text-primary line-clamp-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
