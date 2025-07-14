
import { ExternalLink, Github, Terminal, Shield, Code, Database, Wifi, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "SmartFuzz",
      category: "ML Security Tool",
      description: "ML-based fuzzing tool for detecting vulnerabilities in IoT devices using intelligent input generation.",
      tech: ["Python", "Machine Learning", "IoT Security", "Fuzzing"],
      icon: <Shield className="w-6 h-6" />,
      status: "[ACTIVE]"
    },
    {
      title: "MedBlock",
      category: "Blockchain Security",
      description: "Decentralized electronic health record system built on Ethereum for secure patient data management.",
      tech: ["Ethereum", "Solidity", "Web3", "Healthcare"],
      icon: <Lock className="w-6 h-6" />,
      status: "[DEPLOYED]"
    },
    {
      title: "PCAP Intrusion Classifier",
      category: "Network Analysis",
      description: "Python tool that analyzes Wireshark PCAP files using machine learning to detect cyberattacks in real time.",
      tech: ["Python", "Wireshark", "ML", "Network Security"],
      icon: <Database className="w-6 h-6" />,
      status: "[BETA]"
    },
    {
      title: "Wireless Network Auditor",
      category: "Wi-Fi Security",
      description: "Wi-Fi auditing tool that performs dictionary-based attacks to assess password strength and encryption flaws.",
      tech: ["Python", "Wi-Fi Security", "Dictionary Attack", "WPA/WEP"],
      icon: <Wifi className="w-6 h-6" />,
      status: "[TESTING]"
    },
    {
      title: "IoT Risk Simulator",
      category: "Infrastructure Security",
      description: "Simulated segmented IoT infrastructure in Cisco Packet Tracer to test attack surfaces and isolation strategies.",
      tech: ["Cisco Packet Tracer", "IoT", "Network Segmentation", "Risk Assessment"],
      icon: <Shield className="w-6 h-6" />,
      status: "[RESEARCH]"
    },
    {
      title: "Automated Wireless Testing Tool",
      category: "Penetration Testing",
      description: "Python-based penetration testing tool for assessing wireless security in academic cybersecurity labs.",
      tech: ["Python", "Penetration Testing", "Wireless Security", "Automation"],
      icon: <Code className="w-6 h-6" />,
      status: "[PRODUCTION]"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "[ACTIVE]": return "text-primary";
      case "[DEPLOYED]": return "text-accent";
      case "[BETA]": return "text-yellow-500";
      case "[TESTING]": return "text-orange-500";
      case "[RESEARCH]": return "text-purple-500";
      case "[PRODUCTION]": return "text-primary";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="terminal-border bg-card p-6 inline-block mb-8">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-primary text-glow">
              <Terminal className="inline w-8 h-8 mr-3" />
              ls -la /projects/
            </h2>
            <div className="text-sm font-mono text-muted-foreground mt-2">
              # Listing security projects and research work
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-accent">[INFO]</span> Collection of cybersecurity tools, research projects, and practical implementations 
            in offensive security, malware analysis, and penetration testing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="terminal-border bg-card hover:bg-primary/5 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 terminal-border bg-primary/10 text-primary group-hover:text-glow">
                    {project.icon}
                  </div>
                  <span className={`text-xs font-mono px-2 py-1 terminal-border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <CardTitle className="text-lg font-mono text-primary group-hover:text-glow">
                  {project.title}
                </CardTitle>
                <CardDescription className="font-mono text-accent">
                  # {project.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm font-mono leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-accent/10 terminal-border text-accent text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-mono terminal-border"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    ./source
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-mono terminal-border"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    ./demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="terminal-border bg-card p-8 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-mono font-bold text-primary mb-2">
              <Code className="inline w-6 h-6 mr-2" />
              Additional Research & CTF Work
            </h3>
            <div className="text-sm font-mono text-muted-foreground">
              # Bug bounty hunting and competitive cybersecurity
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <div className="text-primary font-mono font-semibold">Bug Bounty Research:</div>
              <div className="font-mono text-sm text-muted-foreground space-y-1">
                <div><span className="text-accent">[PLATFORM]</span> HackerOne, Bugcrowd</div>
                <div><span className="text-accent">[FOCUS]</span> Web Application Security</div>
                <div><span className="text-accent">[TECHNIQUES]</span> XSS, IDOR, SQLi Discovery</div>
                <div><span className="text-accent">[STATUS]</span> <span className="text-primary">Active Researcher</span></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-primary font-mono font-semibold">CTF Achievements:</div>
              <div className="font-mono text-sm text-muted-foreground space-y-1">
                <div><span className="text-accent">[EVENT]</span> Shadows of the Realm</div>
                <div><span className="text-accent">[RANK]</span> <span className="text-primary">2nd Place</span></div>
                <div><span className="text-accent">[CATEGORIES]</span> Web, Reverse Engineering</div>
                <div><span className="text-accent">[PLATFORM]</span> TryHackMe (In Progress)</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono terminal-border px-8"
            >
              <Terminal className="w-5 h-5 mr-2" />
              ./view_all_projects.sh --verbose
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
