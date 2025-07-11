
import { Calendar, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn how to structure and build React applications that can grow with your team and requirements. We'll explore best practices, patterns, and tools that make scaling easier.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      featured: true
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies that are shaping the future of web development, from AI integration to new frameworks and tools.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Web Development",
      featured: false
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A comprehensive guide to understanding the differences between CSS Grid and Flexbox, with practical examples and use cases for each.",
      date: "2024-01-05",
      readTime: "5 min read",
      category: "CSS",
      featured: false
    },
    {
      title: "TypeScript Best Practices for 2024",
      excerpt: "Modern TypeScript patterns and practices that will make your code more maintainable, type-safe, and developer-friendly.",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "TypeScript",
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I write about web development, programming tips, and the latest technologies. 
            Join me on this journey of continuous learning and sharing knowledge.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-12">
                  <div className="text-white text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-xl mb-4 mx-auto flex items-center justify-center">
                      <User className="w-10 h-10" />
                    </div>
                    <p className="text-lg opacity-90">Featured Article</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg mb-2 mx-auto flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <p className="text-sm opacity-75">Blog Post</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-gray-800 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
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
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
