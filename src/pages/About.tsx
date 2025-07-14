
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Code, Search, Award, Terminal, Zap, Cpu, Database } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Offensive Security",
      description: "SQL Injection, XSS, Command Injection, and web exploitation using Burp Suite and custom tools.",
      tech: ["Burp Suite", "OWASP", "SQLi", "XSS", "CyberChef"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Scripting & Automation",
      description: "Python, Bash, PowerShell automation for security testing and tool development.",
      tech: ["Python", "Bash", "PowerShell", "SQL", "Scapy"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Malware Analysis",
      description: "Reverse engineering with Ghidra, IDA Pro, and memory dump analysis using specialized tools.",
      tech: ["Ghidra", "IDA Pro", "x64dbg", "YARA", "PE Studio"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "CTF & Bug Bounty",
      description: "Active CTF competitor (2nd place - Shadows of the Realm) and bug bounty researcher.",
      tech: ["HackerOne", "Bugcrowd", "CTF", "TryHackMe"]
    }
  ];

  const techStack = [
    "Python", "Burp Suite", "Wireshark", "Ghidra", "IDA Pro", "Nmap", 
    "John the Ripper", "Hashcat", "CyberChef", "Shodan", "YARA", "Scapy",
    "x64dbg", "PE Studio", "Cutter", "Cisco Packet Tracer"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-primary">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cybersecurity student at FAST-NUCES with expertise in red teaming and offensive security. 
            Building real-world attack simulations and contributing to security research.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <Card className="p-6 animate-fade-in">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Cpu className="w-6 h-6 text-primary mr-3" />
                <CardTitle className="text-xl">System Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex">
                  <span className="text-primary w-20 font-medium">Name:</span>
                  <span>Muhammad Haris</span>
                </div>
                <div className="flex">
                  <span className="text-primary w-20 font-medium">Status:</span>
                  <span>Student @ FAST-NUCES (GPA: 3.13)</span>
                </div>
                <div className="flex">
                  <span className="text-primary w-20 font-medium">Role:</span>
                  <span>IT Manager @ LandTrack.pk</span>
                </div>
                <div className="flex">
                  <span className="text-primary w-20 font-medium">Focus:</span>
                  <span>Red Team Operations & Web Exploitation</span>
                </div>
                <div className="flex">
                  <span className="text-primary w-20 font-medium">CTF:</span>
                  <span className="text-accent">2nd Place - Shadows of the Realm</span>
                </div>
                <div className="flex">
                  <span className="text-primary w-20 font-medium">Bounty:</span>
                  <span>HackerOne & Bugcrowd Researcher</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2 text-primary">
                      {skill.title}
                    </h4>
                    <p className="text-muted-foreground mb-3 text-sm">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 animate-fade-in">
          <CardHeader>
            <div className="flex items-center mb-6">
              <Database className="w-6 h-6 text-primary mr-3" />
              <CardTitle className="text-xl">Technical Skills</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="px-3 py-2 bg-primary/10 text-primary text-center text-sm rounded hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              {techStack.length} tools and technologies
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
