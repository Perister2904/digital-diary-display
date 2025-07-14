import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="text-center animate-fade-in">
          <Card className="p-16 bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg ring-1 ring-primary/10 rounded-xl">
            <div className="space-y-8">
              <h1 className="text-5xl font-extrabold text-primary mb-2 tracking-tight">
                📝 Blog Coming Soon
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm working on technical writeups, security research, and insights from the cybersecurity frontlines.
              </p>

              <div className="text-sm text-muted-foreground mt-6">
                Expected launch: <span className="text-foreground font-medium">Q2 2024</span>
              </div>

              <div className="mt-8">
                <a
                  href="https://github.com/Perister2904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-sm font-semibold text-background bg-primary rounded hover:bg-primary/80 transition"
                >
                  🔗 View My GitHub for Updates
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
