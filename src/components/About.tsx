
import { Shield, Code, Search, Award } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Offensive Security",
      description: "SQL Injection, XSS, Command Injection, and web exploitation using Burp Suite and custom tools."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Scripting & Programming",
      description: "Python, Bash, PowerShell automation for security testing and tool development."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Malware Analysis",
      description: "Reverse engineering with Ghidra, IDA Pro, and memory dump analysis using specialized tools."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "CTF & Bug Bounty",
      description: "Active CTF competitor (2nd place - Shadows of the Realm) and bug bounty researcher."
    }
  ];

  const techStack = [
    "Python", "Burp Suite", "Wireshark", "Ghidra", "IDA Pro", "Nmap", 
    "John the Ripper", "Hashcat", "CyberChef", "Shodan", "YARA", "Scapy"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cybersecurity student at FAST-NUCES with a strong focus on red teaming and offensive security. 
            Experienced in web exploitation, custom Python tool development, and malware analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="leading-relaxed mb-4">
                Currently pursuing Bachelor's in Cybersecurity at FAST-NUCES (GPA: 3.13). 
                Built real-world attack simulations across IoT, network, and blockchain environments.
              </p>
              <p className="leading-relaxed mb-4">
                Proven experience as IT Manager at LandTrack.pk, conducting full-stack web security 
                audits and identifying 10+ vulnerabilities with OWASP-based remediation strategies.
              </p>
              <p className="leading-relaxed">
                Actively pursuing bug bounty research via HackerOne and Bugcrowd, focusing on 
                practical skills and contributing to security testing teams.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">
                      {skill.title}
                    </h4>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Technical Arsenal</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
