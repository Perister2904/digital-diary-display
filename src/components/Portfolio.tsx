
import { ExternalLink, Github, Shield, Cpu, Network, Smartphone, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "SmartFuzz",
      description: "ML-based fuzzing tool for detecting vulnerabilities in IoT devices using intelligent input generation and automated vulnerability discovery.",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["Python", "Machine Learning", "IoT Security", "Fuzzing"],
      category: "Security Tool",
      status: "Active",
      githubUrl: "#"
    },
    {
      title: "MedBlock",
      description: "Decentralized electronic health record system built on Ethereum blockchain for secure patient data management and privacy protection.",
      icon: <Shield className="w-8 h-8" />,
      technologies: ["Ethereum", "Solidity", "Blockchain", "Smart Contracts"],
      category: "Blockchain Security",
      status: "Deployed",
      githubUrl: "#"
    },
    {
      title: "PCAP Intrusion Classifier",
      description: "Python tool that analyzes Wireshark PCAP files using machine learning algorithms to detect cyberattacks and network intrusions in real time.",
      icon: <Network className="w-8 h-8" />,
      technologies: ["Python", "Wireshark", "ML", "Network Security"],
      category: "Network Analysis",
      status: "Beta",
      githubUrl: "#"
    },
    {
      title: "Wireless Network Auditor",
      description: "Wi-Fi penetration testing tool that performs dictionary-based attacks to assess password strength and identify encryption vulnerabilities.",
      icon: <Network className="w-8 h-8" />,
      technologies: ["Python", "Wi-Fi Security", "Dictionary Attacks", "Penetration Testing"],
      category: "Wireless Security",
      status: "Active",
      githubUrl: "#"
    },
    {
      title: "IoT Risk Simulator",
      description: "Simulated segmented IoT infrastructure in Cisco Packet Tracer to test attack surfaces, network isolation strategies, and security controls.",
      icon: <Cpu className="w-8 h-8" />,
      technologies: ["Cisco Packet Tracer", "IoT Security", "Network Simulation", "Risk Assessment"],
      category: "IoT Security",
      status: "Complete",
      githubUrl: "#"
    },
    {
      title: "Automated Wireless Testing Tool",
      description: "Python-based penetration testing framework for automated wireless security assessment in academic cybersecurity laboratory environments.",
      icon: <Shield className="w-8 h-8" />,
      technologies: ["Python", "Wireless Security", "Automation", "Penetration Testing"],
      category: "Security Automation",
      status: "Active",
      githubUrl: "#"
    }
  ];

  const achievements = [
    {
      title: "CTF Competition",
      description: "2nd Place - Shadows of the Realm",
      highlight: "Competitive Achievement",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Security Audit",
      description: "Identified 10+ vulnerabilities at LandTrack.pk",
      highlight: "Professional Experience",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Bug Bounty Research",
      description: "Active researcher on HackerOne & Bugcrowd",
      highlight: "Ongoing Research",
      icon: <Terminal className="w-6 h-6" />
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'border-primary text-primary';
      case 'Deployed': return 'border-accent text-accent';
      case 'Beta': return 'border-yellow-500 text-yellow-500';
      case 'Complete': return 'border-green-500 text-green-500';
      default: return 'border-muted text-muted-foreground';
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-primary">
            <Terminal className="inline w-10 h-10 mr-4" />
            ./portfolio.sh --show-all
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono">
            Security projects, tools, and research focusing on offensive security, 
            vulnerability research, and defensive implementations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden card-hover"
            >
              <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-b border-border">
                <div className="text-primary">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-mono font-bold text-primary">
                    {project.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded border font-mono ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="mb-3">
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded font-mono border border-accent/30">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Source
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-mono font-bold mb-6 text-center text-primary">
            <Shield className="inline w-6 h-6 mr-2" />
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center border border-border rounded-lg p-6 card-hover">
                <div className="flex justify-center mb-4 text-primary">
                  {achievement.icon}
                </div>
                <h4 className="font-mono font-semibold text-lg mb-2 text-primary">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded font-mono border border-accent/30">
                  {achievement.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
