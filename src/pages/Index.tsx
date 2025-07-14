
import { useEffect } from "react";
import Terminal from "@/components/Terminal";

const Index = () => {
  useEffect(() => {
    document.title = "Haris | Terminal Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-black to-green-900/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Terminal Interface */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Terminal />
      </div>
    </div>
  );
};

export default Index;
