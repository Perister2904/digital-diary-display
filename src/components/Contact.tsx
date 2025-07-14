
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
          <div className="terminal-border bg-card p-6 inline-block mb-8">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-primary text-glow">
              <Terminal className="inline w-8 h-8 mr-3" />
              netcat -l 4444
            </h2>
            <div className="text-sm font-mono text-muted-foreground mt-2">
              # Listening for incoming connections...
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-accent">[CONNECTION_ESTABLISHED]</span> Ready to collaborate on security projects or discuss cybersecurity? 
            <span className="text-primary"> Let's establish a secure channel</span> and build something together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="terminal-border bg-card p-8">
              <div className="flex items-center mb-6">
                <Terminal className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-mono font-bold text-primary">
                  cat /etc/contact.conf
                </h3>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex">
                  <span className="text-accent w-20">[EMAIL]</span>
                  <span className="text-foreground">hary.pery161@gmail.com</span>
                </div>
                <div className="flex">
                  <span className="text-accent w-20">[PHONE]</span>
                  <span className="text-foreground">0322-2728443</span>
                </div>
                <div className="flex">
                  <span className="text-accent w-20">[LOCATION]</span>
                  <span className="text-foreground">Karachi, Pakistan</span>
                </div>
                <div className="flex">
                  <span className="text-accent w-20">[STATUS]</span>
                  <span className="text-primary">AVAILABLE</span>
                </div>
                <div className="flex">
                  <span className="text-accent w-20">[SERVICES]</span>
                  <span className="text-foreground">Security Consulting</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <div className="text-primary font-mono text-sm mb-2"># Recent Activity</div>
                <div className="text-xs font-mono text-muted-foreground space-y-1">
                  <div className="text-primary">$ whoami</div>
                  <div>Muhammad Haris - Red Team Specialist</div>
                  <div className="text-accent">[INFO] Available for security projects</div>
                  <div className="text-accent">[INFO] CTF team collaborations welcome</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono font-semibold text-primary mb-4">
                ls /usr/bin/social-links/
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/Perister2904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 terminal-border bg-card hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 text-primary group-hover:text-glow" />
                  <div>
                    <div className="font-mono text-sm text-primary">github</div>
                    <div className="font-mono text-xs text-muted-foreground">./repositories</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/haris-muhammad-696512228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 terminal-border bg-card hover:bg-accent/10 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-mono text-sm text-accent">linkedin</div>
                    <div className="font-mono text-xs text-muted-foreground">./professional</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="terminal-border bg-card p-8">
            <div className="flex items-center mb-6">
              <Terminal className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-mono font-bold text-primary">send_message.py</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-accent mb-2">
                    --name="required"
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="bg-background terminal-border focus:border-primary focus:ring-primary font-mono"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-accent mb-2">
                    --email="required"
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@domain.com"
                    className="bg-background terminal-border focus:border-primary focus:ring-primary font-mono"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-mono text-accent mb-2">
                  --subject="required"
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Security Consultation | CTF Collaboration | Project Discussion"
                  className="bg-background terminal-border focus:border-primary focus:ring-primary font-mono"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-accent mb-2">
                  --message="required"
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="# Describe your security project, consultation needs, or collaboration ideas..."
                  className="bg-background terminal-border focus:border-primary focus:ring-primary resize-none font-mono"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono terminal-border border-glow"
              >
                <Send className="w-5 h-5 mr-2" />
                ./execute_transmission.sh --send
              </Button>
            </form>
            
            <div className="mt-6 pt-4 border-t border-border">
              <div className="text-xs font-mono text-muted-foreground space-y-1">
                <div className="text-primary">$ echo "Message encrypted with PGP"</div>
                <div>[INFO] Secure transmission protocol enabled</div>
                <div>[INFO] Response time: 24-48 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
