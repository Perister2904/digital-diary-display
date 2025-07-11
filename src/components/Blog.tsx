
import { Calendar, ArrowRight, User, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Advanced SQL Injection Techniques in Modern Web Applications",
      excerpt: "Deep dive into advanced SQL injection vectors, bypassing modern WAFs, and exploitation techniques that security professionals need to understand.",
      date: "2024-01-15",
      readTime: "12 min read",
      category: "Web Security",
      featured: true
    },
    {
      title: "Building Custom Python Tools for Red Team Operations",
      excerpt: "Learn how to develop custom Python tools for reconnaissance, exploitation, and post-exploitation activities in red team engagements.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Tool Development",
      featured: false
    },
    {
      title: "CTF Writeup: Shadows of the Realm - Web Exploitation Challenge",
      excerpt: "Detailed writeup of the web exploitation challenge that helped secure our 2nd place finish in the Shadows of the Realm CTF competition.",
      date: "2024-01-05",
      readTime: "15 min read",
      category: "CTF Writeup",
      featured: false
    },
    {
      title: "Malware Analysis with Ghidra: A Practical Approach",
      excerpt: "Step-by-step guide to analyzing malware samples using Ghidra, covering static analysis techniques and reverse engineering methodologies.",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Malware Analysis",
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-primary">
            <Terminal className="inline w-10 h-10 mr-4" />
            ./blog --latest
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono">
            Technical writeups, security research, and insights from the cybersecurity frontlines. 
            Sharing knowledge and contributing to the community.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="bg-card border border-border rounded-lg overflow-hidden card-hover">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-12 border-r border-border">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 border border-primary rounded-lg mb-4 mx-auto flex items-center justify-center">
                      <Code className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-lg text-primary font-mono">[FEATURED_POST]</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary border border-primary rounded text-sm font-mono">
                      {featuredPost.category}
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent border border-accent rounded text-sm font-mono">
                      FEATURED
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-mono font-bold mb-4 text-primary">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
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
                    
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono">
                      Read More
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
              className="bg-card border border-border rounded-lg overflow-hidden card-hover"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-b border-border">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 border border-primary rounded-lg mb-2 mx-auto flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-primary font-mono">[BLOG_POST]</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent border border-accent rounded text-sm font-mono">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-mono font-bold mb-3 text-primary line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground font-mono mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono">
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 font-mono"
          >
            <Terminal className="w-5 h-5 mr-2" />
            ./show_all_posts.sh
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
