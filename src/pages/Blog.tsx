
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="text-center animate-fade-in">
          <Card className="p-16 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold text-primary mb-4">Coming Soon</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm working on creating technical writeups, security research, and insights 
                from the cybersecurity frontlines. Stay tuned for in-depth articles on 
                penetration testing, malware analysis, and CTF walkthroughs.
              </p>
              <div className="text-sm text-muted-foreground mt-8">
                Expected launch: Q2 2024
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
