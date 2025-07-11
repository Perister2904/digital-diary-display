
import { Shield, Code, Search, Award, Terminal, Zap, Cpu, Database } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "offensive_security.py",
      description: "SQL Injection, XSS, Command Injection, and web exploitation using Burp Suite and custom tools.",
      tech: ["Burp Suite", "OWASP", "SQLi", "XSS", "CyberChef"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "scripting_arsenal.sh",
      description: "Python, Bash, PowerShell automation for security testing and tool development.",
      tech: ["Python", "Bash", "PowerShell", "SQL", "Scapy"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "malware_analysis.exe",
      description: "Reverse engineering with Ghidra, IDA Pro, and memory dump analysis using specialized tools.",
      tech: ["Ghidra", "IDA Pro", "x64dbg", "YARA", "PE Studio"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "ctf_achievements.log",
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
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="terminal-border bg-card p-6 inline-block mb-8">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-primary text-glow">
              <Terminal className="inline w-8 h-8 mr-3" />
              cat /proc/self/about
            </h2>
            <div className="text-sm font-mono text-muted-foreground mt-2">
              # Process Information Dump
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-accent">[STATUS]</span> Cybersecurity student at FAST-NUCES with expertise in red teaming and offensive security. 
            <span className="text-primary"> Building real-world attack simulations</span> and contributing to security research.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="terminal-border bg-card p-6">
            <div className="flex items-center mb-6">
              <Cpu className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-mono font-bold text-primary">system_info.cfg</h3>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex">
                <span className="text-accent w-20">[USER]</span>
                <span className="text-foreground">Muhammad Haris</span>
              </div>
              <div className="flex">
                <span className="text-accent w-20">[STATUS]</span>
                <span className="text-foreground">Student @ FAST-NUCES (GPA: 3.13)</span>
              </div>
              <div className="flex">
                <span className="text-accent w-20">[ROLE]</span>
                <span className="text-foreground">IT Manager @ LandTrack.pk</span>
              </div>
              <div className="flex">
                <span className="text-accent w-20">[FOCUS]</span>
                <span className="text-foreground">Red Team Operations & Web Exploitation</span>
              </div>
              <div className="flex">
                <span className="text-accent w-20">[CTF]</span>
                <span className="text-primary">2nd Place - Shadows of the Realm</span>
              </div>
              <div className="flex">
                <span className="text-accent w-20">[BOUNTY]</span>
                <span className="text-foreground">HackerOne & Bugcrowd Researcher</span>
              </div>
              <div className="flex">
                <span className="text-accent w-20">[UPTIME]</span>
                <span className="text-primary">2022-Present</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border">
              <div className="text-primary font-mono text-sm mb-2"># Recent Activity</div>
              <div className="text-xs font-mono text-muted-foreground space-y-1">
                <div className="text-primary">$ sudo apt update security-tools</div>
                <div>Reading package lists... Done</div>
                <div className="text-accent">[INFO] Burp Suite Pro updated</div>
                <div className="text-accent">[INFO] New YARA rules installed</div>
                <div className="text-primary">$ ./ctf_practice.py --platform=tryhackme</div>
                <div>Practicing: Web Exploitation, Reverse Engineering</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="terminal-border bg-card p-6 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 terminal-border text-primary bg-primary/10">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-mono font-semibold mb-2 text-primary">
                      {skill.title}
                    </h4>
                    <p className="text-muted-foreground mb-3 text-sm font-mono">
                      # {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 terminal-border bg-accent/10 text-accent text-xs font-mono"
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

        <div className="terminal-border bg-card p-8">
          <div className="flex items-center mb-6">
            <Database className="w-6 h-6 text-primary mr-3" />
            <h3 className="text-xl font-mono font-bold text-primary">
              ls /usr/bin/security-tools/
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="px-3 py-2 terminal-border bg-primary/10 text-primary text-center text-sm font-mono hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs font-mono text-muted-foreground">
            # {techStack.length} tools loaded successfully
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
