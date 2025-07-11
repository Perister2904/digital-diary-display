
import { ExternalLink, Github, Shield, Cpu, Network, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "SmartFuzz",
      description: "ML-based fuzzing tool for detecting vulnerabilities in IoT devices using intelligent input generation and automated vulnerability discovery.",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["Python", "Machine Learning", "IoT Security", "Fuzzing"],
      category: "Security Tool",
      githubUrl: "#"
    },
    {
      title: "MedBlock",
      description: "Decentralized electronic health record system built on Ethereum blockchain for secure patient data management and privacy protection.",
      icon: <Shield className="w-8 h-8" />,
      technologies: ["Ethereum", "Solidity", "Blockchain", "Smart Contracts"],
      category: "Blockchain Security",
      githubUrl: "#"
    },
    {
      title: "PCAP Intrusion Classifier",
      description: "Python tool that analyzes Wireshark PCAP files using machine learning algorithms to detect cyberattacks and network intrusions in real time.",
      icon: <Network className="w-8 h-8" />,
      technologies: ["Python", "Wireshark", "ML", "Network Security"],
      category: "Network Analysis",
      githubUrl: "#"
    },
    {
      title: "Wireless Network Auditor",
      description: "Wi-Fi penetration testing tool that performs dictionary-based attacks to assess password strength and identify encryption vulnerabilities.",
      icon: <Network className="w-8 h-8" />,
      technologies: ["Python", "Wi-Fi Security", "Dictionary Attacks", "Penetration Testing"],
      category: "Wireless Security",
      githubUrl: "#"
    },
    {
      title: "IoT Risk Simulator",
      description: "Simulated segmented IoT infrastructure in Cisco Packet Tracer to test attack surfaces, network isolation strategies, and security controls.",
      icon: <Cpu className="w-8 h-8" />,
      technologies: ["Cisco Packet Tracer", "IoT Security", "Network Simulation", "Risk Assessment"],
      category: "IoT Security",
      githubUrl: "#"
    },
    {
      title: "Automated Wireless Testing Tool",
      description: "Python-based penetration testing framework for automated wireless security assessment in academic cybersecurity laboratory environments.",
      icon: <Shield className="w-8 h-8" />,
      technologies: ["Python", "Wireless Security", "Automation", "Penetration Testing"],
      category: "Security Automation",
      githubUrl: "#"
    }
  ];

  const achievements = [
    {
      title: "CTF Competition",
      description: "2nd Place - Shadows of the Realm",
      highlight: "Competitive Achievement"
    },
    {
      title: "Security Audit",
      description: "Identified 10+ vulnerabilities at LandTrack.pk",
      highlight: "Professional Experience"
    },
    {
      title: "Bug Bounty Research",
      description: "Active researcher on HackerOne & Bugcrowd",
      highlight: "Ongoing Research"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Security Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of cybersecurity projects, tools, and research focusing on offensive security, 
            vulnerability research, and defensive implementations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-sm opacity-90">{achievement.description}</p>
                </div>
                <span className="text-xs bg-white/30 px-3 py-1 rounded-full">
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
