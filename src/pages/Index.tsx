
import { useEffect } from "react";
import Terminal from "@/components/Terminal";

const Index = () => {
  useEffect(() => {
    document.title = "Haris | Terminal Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 z-0 bg-black">
        {/* Matrix-style animated grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-black to-green-900/5 animate-pulse"></div>
        
        {/* Animated circuit pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-green-500/10 to-transparent animate-[slide_20s_linear_infinite]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-[slideVertical_25s_linear_infinite]"></div>
        </div>
        
        {/* Dot grid pattern */}
        <div className="absolute inset-0 hidden md:block" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'float 30s ease-in-out infinite'
        }}></div>
        
        {/* Binary rain effect (subtle) */}
        <div className="absolute inset-0 overflow-hidden opacity-10 hidden lg:block">
          <div className="absolute top-0 left-1/4 text-green-400 font-mono text-xs animate-[fall_15s_linear_infinite]">
            01010011<br/>01100101<br/>01100011<br/>01110101
          </div>
          <div className="absolute top-0 left-3/4 text-green-400 font-mono text-xs animate-[fall_20s_linear_infinite] delay-[5s]">
            01110010<br/>01101001<br/>01110100<br/>01111001
          </div>
          <div className="absolute top-0 right-1/4 text-green-400 font-mono text-xs animate-[fall_18s_linear_infinite] delay-[10s]">
            01001000<br/>01100001<br/>01100011<br/>01101011
          </div>
        </div>
      </div>
      
      {/* Terminal Interface */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Terminal />
      </div>
    </div>
  );
};

export default Index;
