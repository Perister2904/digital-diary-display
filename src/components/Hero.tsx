
import { ArrowDown, Github, Linkedin, Mail, Shield, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Terminal className="w-12 h-12 text-primary mr-4" />
            <Shield className="w-12 h-12 text-accent" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 text-glow leading-tight">
            <span className="text-primary">&gt;</span> Muhammad Haris
          </h1>
          
          <div className="text-lg md:text-xl text-accent mb-4 font-mono">
            <span className="border border-accent px-4 py-2 rounded bg-accent/10">
              Red Team & Penetration Testing Enthusiast
            </span>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-mono">
            [CTF_Competitor] | [Cybersecurity_Student] | [Offensive_Security_Specialist]
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-mono border-glow"
            >
              <Terminal className="w-5 h-5 mr-2" />
              ./view_projects.sh
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-mono"
            >
              <Shield className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Perister2904"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 card-hover"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/haris-muhammad-696512228"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded bg-card border border-border hover:border-accent transition-all duration-300 hover:scale-110 card-hover"
            >
              <Linkedin className="w-6 h-6 text-accent" />
            </a>
            <a
              href="mailto:hary.pery161@gmail.com"
              className="p-3 rounded bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 card-hover"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-accent mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
