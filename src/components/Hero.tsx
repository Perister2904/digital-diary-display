
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Hello, I'm
            <br />
            <span className="block mt-2">Muhammad Haris</span>
          </h1>
          
          <div className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            <span className="font-semibold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              Red Team & Penetration Testing Enthusiast
            </span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            CTF Competitor | Cybersecurity Student | Offensive Security Specialist
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
            >
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Perister2904"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/haris-muhammad-696512228"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="mailto:hary.pery161@gmail.com"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-purple-600" />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
