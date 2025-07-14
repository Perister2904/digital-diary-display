
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-primary">Contact Me</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on security projects or discuss cybersecurity? 
            Let's connect and build something together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="p-8 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl mb-6">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground text-sm">hary.pery161@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground text-sm">0322-2728443</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground text-sm">Karachi, Pakistan</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4 animate-fade-in">
              <h4 className="font-semibold text-primary mb-4">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/Perister2904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-card hover:bg-card/80 transition-colors duration-300 rounded-lg"
                >
                  <Github className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm font-medium">GitHub</div>
                    <div className="text-xs text-muted-foreground">Code repositories</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/haris-muhammad-696512228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-card hover:bg-card/80 transition-colors duration-300 rounded-lg"
                >
                  <Linkedin className="w-6 h-6 text-accent" />
                  <div>
                    <div className="text-sm font-medium">LinkedIn</div>
                    <div className="text-xs text-muted-foreground">Professional profile</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <Card className="p-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl mb-6">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@domain.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Security Consultation | CTF Collaboration | Project Discussion"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your security project, consultation needs, or collaboration ideas..."
                    className="resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
