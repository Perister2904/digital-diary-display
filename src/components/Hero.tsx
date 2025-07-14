
import { ArrowDown, Github, Linkedin, Mail, Shield, Terminal, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const commands = [
    "whoami",
    "cat /etc/passwd | grep haris",
    "ps aux | grep security",
    "nmap -sS target.com",
    "./exploit.py --target webapp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden matrix-bg">
      {/* Matrix Rain Background */}
      <div className="matrix-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="matrix-column matrix-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {Array.from({ length: 30 }, () => 
              String.fromCharCode(0x30A0 + Math.random() * 96)
            ).join('\n')}
          </div>
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="terminal-border bg-card p-8 mb-8">
          <div className="flex items-center mb-4 text-primary">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <span className="font-mono text-sm">terminal@kali-linux:~$</span>
          </div>
          
          <div className="text-left font-mono text-sm space-y-2 mb-6">
            <div className="text-muted-foreground">
              $ {commands[currentCommand]}<span className="blink">|</span>
            </div>
            <div className="text-primary">
              [+] Muhammad Haris - Red Team Specialist
            </div>
            <div className="text-accent">
              [INFO] Status: Active | Role: Penetration Tester
            </div>
            <div className="text-muted-foreground">
              [DEBUG] Skills: Web Exploitation, Malware Analysis, CTF
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Terminal className="w-16 h-16 text-primary text-glow" />
            <Code className="w-12 h-12 text-accent" />
            <Shield className="w-14 h-14 text-primary text-glow" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 text-glow leading-tight">
            <span className="text-primary">root@</span>
            <span className="text-foreground">haris</span>
            <span className="text-accent">:~$</span>
            <span className="blink text-primary ml-2">_</span>
          </h1>
          
          <div className="terminal-border bg-card p-4 inline-block mb-6">
            <div className="text-sm font-mono text-accent mb-2">#!/bin/bash</div>
            <div className="text-primary font-mono">
              echo "Red Team & Penetration Testing Enthusiast"
            </div>
            <div className="text-muted-foreground font-mono text-sm mt-2">
              # Cybersecurity Student @ FAST-NUCES | CTF Competitor | Bug Bounty Hunter
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-accent">[SPECIALIZATIONS]</span> Web Exploitation • Malware Analysis • Network Security • Custom Tool Development
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 font-mono border-glow terminal-border"
            >
              <Terminal className="w-5 h-5 mr-2" />
              ./execute_portfolio.sh
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 font-mono terminal-border"
            >
              <Shield className="w-5 h-5 mr-2" />
              cat resume.pdf
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-12">
            <a
              href="https://github.com/Perister2904"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 terminal-border bg-card hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="w-8 h-8 text-primary mx-auto group-hover:text-glow" />
              <div className="text-xs font-mono mt-2 text-muted-foreground">github</div>
            </a>
            <a
              href="https://www.linkedin.com/in/haris-muhammad-696512228"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 terminal-border bg-card hover:bg-accent/10 transition-all duration-300 group"
            >
              <Linkedin className="w-8 h-8 text-accent mx-auto" />
              <div className="text-xs font-mono mt-2 text-muted-foreground">linkedin</div>
            </a>
            <a
              href="mailto:hary.pery161@gmail.com"
              className="p-4 terminal-border bg-card hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 text-primary mx-auto group-hover:text-glow" />
              <div className="text-xs font-mono mt-2 text-muted-foreground">email</div>
            </a>
          </div>

          <div className="flex justify-center">
            <div className="terminal-border p-2 bg-card">
              <ArrowDown className="w-6 h-6 text-accent animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
