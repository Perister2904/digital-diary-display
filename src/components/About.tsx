
import { Shield, Code, Search, Award, Terminal, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Offensive Security",
      description: "SQL Injection, XSS, Command Injection, and web exploitation using Burp Suite and custom tools.",
      tech: ["Burp Suite", "OWASP", "SQLi", "XSS"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Scripting & Programming",
      description: "Python, Bash, PowerShell automation for security testing and tool development.",
      tech: ["Python", "Bash", "PowerShell", "SQL"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Malware Analysis",
      description: "Reverse engineering with Ghidra, IDA Pro, and memory dump analysis using specialized tools.",
      tech: ["Ghidra", "IDA Pro", "x64dbg", "YARA"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "CTF & Bug Bounty",
      description: "Active CTF competitor (2nd place - Shadows of the Realm) and bug bounty researcher.",
      tech: ["HackerOne", "Bugcrowd", "CTF", "Recon"]
    }
  ];

  const techStack = [
    "Python", "Burp Suite", "Wireshark", "Ghidra", "IDA Pro", "Nmap", 
    "John the Ripper", "Hashcat", "CyberChef", "Shodan", "YARA", "Scapy"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-primary">
            <Terminal className="inline w-10 h-10 mr-4" />
            ./about_me.py
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono">
            Cybersecurity student at FAST-NUCES with expertise in red teaming and offensive security. 
            Building real-world attack simulations and contributing to security research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="bg-card border border-border rounded-lg p-8 card-hover">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-2xl font-mono font-bold text-primary">sys.info()</h3>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex">
                  <span className="text-accent w-24">[STATUS]</span>
                  <span className="text-foreground">Active Student @ FAST-NUCES (GPA: 3.13)</span>
                </div>
                <div className="flex">
                  <span className="text-accent w-24">[ROLE]</span>
                  <span className="text-foreground">IT Manager @ LandTrack.pk</span>
                </div>
                <div className="flex">
                  <span className="text-accent w-24">[FOCUS]</span>
                  <span className="text-foreground">Red Team Operations & Web Exploitation</span>
                </div>
                <div className="flex">
                  <span className="text-accent w-24">[CTF]</span>
                  <span className="text-foreground">2nd Place - Shadows of the Realm</span>
                </div>
                <div className="flex">
                  <span className="text-accent w-24">[RESEARCH]</span>
                  <span className="text-foreground">Bug Bounty via HackerOne & Bugcrowd</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 border border-primary rounded-lg text-primary">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-mono font-semibold mb-2 text-primary">
                      {skill.title}
                    </h4>
                    <p className="text-muted-foreground mb-3 text-sm">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-accent/10 border border-accent text-accent text-xs font-mono rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-mono font-bold mb-6 text-center text-primary">
            <Code className="inline w-6 h-6 mr-2" />
            Technical Arsenal
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-primary/10 border border-primary text-primary text-center text-sm font-mono rounded hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
