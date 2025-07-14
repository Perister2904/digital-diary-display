
import { ArrowDown, Github, Linkedin, Mail, Shield, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-background to-background/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Terminal className="w-12 h-12 text-primary" />
            <Code className="w-10 h-10 text-accent" />
            <Shield className="w-11 h-11 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-primary">Muhammad</span>{" "}
            <span className="text-foreground">Haris</span>
          </h1>
          
          <div className="bg-card p-6 rounded-lg shadow-lg inline-block mb-6">
            <div className="text-sm text-accent mb-2">#!/bin/bash</div>
            <div className="text-primary font-mono text-lg">
              echo "Red Team & Penetration Testing Enthusiast"
            </div>
            <div className="text-muted-foreground text-sm mt-2">
              # Cybersecurity Student @ FAST-NUCES | CTF Competitor | Bug Bounty Hunter
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="text-accent font-semibold">Specializations:</span> Web Exploitation • Malware Analysis • Network Security • Custom Tool Development
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3"
              asChild
            >
              <Link to="/projects">
                <Terminal className="w-5 h-5 mr-2" />
                View Projects
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3"
              asChild
            >
              <Link to="/contact">
                <Shield className="w-5 h-5 mr-2" />
                Get In Touch
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-12">
            <a
              href="https://github.com/Perister2904"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card hover:bg-card/80 transition-colors duration-300 rounded-lg shadow-md"
            >
              <Github className="w-8 h-8 text-primary mx-auto" />
              <div className="text-xs mt-2 text-muted-foreground">GitHub</div>
            </a>
            <a
              href="https://www.linkedin.com/in/haris-muhammad-696512228"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card hover:bg-card/80 transition-colors duration-300 rounded-lg shadow-md"
            >
              <Linkedin className="w-8 h-8 text-accent mx-auto" />
              <div className="text-xs mt-2 text-muted-foreground">LinkedIn</div>
            </a>
            <a
              href="mailto:hary.pery161@gmail.com"
              className="p-4 bg-card hover:bg-card/80 transition-colors duration-300 rounded-lg shadow-md"
            >
              <Mail className="w-8 h-8 text-primary mx-auto" />
              <div className="text-xs mt-2 text-muted-foreground">Email</div>
            </a>
          </div>

          <div className="flex justify-center">
            <Link to="/about" className="p-2 bg-card rounded-full shadow-md">
              <ArrowDown className="w-6 h-6 text-accent animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
