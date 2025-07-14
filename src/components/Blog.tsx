
import { Calendar, ArrowRight, User, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "[WRITEUP] Advanced SQL Injection Techniques in Modern Web Applications",
      excerpt: "# Deep dive into advanced SQL injection vectors, bypassing modern WAFs, and exploitation techniques that security professionals need to understand.",
      date: "2024-01-15",
      readTime: "12 min read",
      category: "Web Security",
      featured: true,
      status: "[FEATURED]"
    },
    {
      title: "[TUTORIAL] Building Custom Python Tools for Red Team Operations",
      excerpt: "# Learn how to develop custom Python tools for reconnaissance, exploitation, and post-exploitation activities in red team engagements.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Tool Development",
      featured: false,
      status: "[NEW]"
    },
    {
      title: "[CTF-WRITEUP] Shadows of the Realm - Web Exploitation Challenge",
      excerpt: "# Detailed writeup of the web exploitation challenge that helped secure our 2nd place finish in the Shadows of the Realm CTF competition.",
      date: "2024-01-05",
      readTime: "15 min read",
      category: "CTF Writeup",
      featured: false,
      status: "[POPULAR]"
    },
    {
      title: "[ANALYSIS] Malware Analysis with Ghidra: A Practical Approach",
      excerpt: "# Step-by-step guide to analyzing malware samples using Ghidra, covering static analysis techniques and reverse engineering methodologies.",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Malware Analysis",
      featured: false,
      status: "[ARCHIVED]"
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "[FEATURED]": return "text-primary";
      case "[NEW]": return "text-accent";
      case "[POPULAR]": return "text-yellow-500";
      case "[ARCHIVED]": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="blog" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="terminal-border bg-card p-6 inline-block mb-8">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-primary text-glow">
              <Terminal className="inline w-8 h-8 mr-3" />
              tail -f /var/log/blog.log
            </h2>
            <div className="text-sm font-mono text-muted-foreground mt-2">
              # Following security research and writeups
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-accent">[LOG_INFO]</span> Technical writeups, security research, and insights from the cybersecurity frontlines. 
            <span className="text-primary"> Sharing knowledge</span> and contributing to the community.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="terminal-border bg-card overflow-hidden hover:bg-primary/5 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2 bg-primary/5 flex items-center justify-center p-12 border-r border-border">
                  <div className="text-center">
                    <div className="terminal-border bg-primary/20 p-6 mb-4 mx-auto flex items-center justify-center w-24 h-24">
                      <Code className="w-12 h-12 text-primary text-glow" />
                    </div>
                    <p className="text-lg text-primary font-mono">{featuredPost.status}</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary terminal-border text-sm font-mono">
                      {featuredPost.category}
                    </span>
                    <span className={`px-3 py-1 terminal-border text-sm font-mono ${getStatusColor(featuredPost.status)}`}>
                      {featuredPost.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-mono font-bold mb-4 text-primary">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed font-mono text-sm">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground font-mono">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono terminal-border">
                      <Terminal className="w-4 h-4 mr-2" />
                      cat article.md
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.map((post, index) => (
            <article
              key={index}
              className="terminal-border bg-card overflow-hidden hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="h-40 bg-primary/5 flex items-center justify-center border-b border-border">
                <div className="text-center">
                  <div className="terminal-border bg-primary/20 p-3 mb-2 mx-auto flex items-center justify-center w-16 h-16">
                    <Terminal className="w-8 h-8 text-primary group-hover:text-glow" />
                  </div>
                  <p className="text-sm text-primary font-mono">[BLOG_POST]</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent terminal-border text-sm font-mono">
                    {post.category}
                  </span>
                  <span className={`px-2 py-1 terminal-border text-xs font-mono ${getStatusColor(post.status)}`}>
                    {post.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-mono font-bold mb-3 text-primary line-clamp-2 group-hover:text-glow">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3 font-mono">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground font-mono mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono terminal-border">
                  <Terminal className="w-4 h-4 mr-2" />
                  ./read_post.sh
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 font-mono terminal-border"
          >
            <Terminal className="w-5 h-5 mr-2" />
            find /blog -name "*.md" | head -20
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
