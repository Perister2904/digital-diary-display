
import { Mail, MapPin, Phone, Send, Terminal, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-primary">
            <Terminal className="inline w-10 h-10 mr-4" />
            ./contact.py --init
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono">
            Ready to collaborate on security projects or discuss cybersecurity? 
            Let's connect and build something secure together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-mono font-bold mb-6 text-primary">
                <Terminal className="inline w-6 h-6 mr-2" />
                Connection Established
              </h3>
              <div className="space-y-6 font-mono text-sm">
                <div className="flex items-start">
                  <span className="text-accent w-16">[EMAIL]</span>
                  <span className="text-foreground">hary.pery161@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent w-16">[PHONE]</span>
                  <span className="text-foreground">0322-2728443</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent w-16">[LOC]</span>
                  <span className="text-foreground">Karachi, Pakistan</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent w-16">[STATUS]</span>
                  <span className="text-primary">Available for Security Projects</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono font-semibold text-primary mb-4">Social Links:</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Perister2904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 bg-card border border-border rounded-lg hover:border-primary transition-colors card-hover"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/haris-muhammad-696512228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 bg-card border border-border rounded-lg hover:border-accent transition-colors card-hover"
                >
                  <Linkedin className="w-5 h-5 text-accent" />
                  <span className="font-mono text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Terminal className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-mono font-bold text-primary">send_message.py</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-accent mb-2">
                    --name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="bg-background border-border focus:border-primary focus:ring-primary font-mono"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-accent mb-2">
                    --email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@domain.com"
                    className="bg-background border-border focus:border-primary focus:ring-primary font-mono"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-mono text-accent mb-2">
                  --subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project Collaboration | Security Consultation"
                  className="bg-background border-border focus:border-primary focus:ring-primary font-mono"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-accent mb-2">
                  --message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Describe your security project or consultation needs..."
                  className="bg-background border-border focus:border-primary focus:ring-primary resize-none font-mono"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono border-glow"
              >
                <Send className="w-5 h-5 mr-2" />
                ./send_message.sh --execute
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
