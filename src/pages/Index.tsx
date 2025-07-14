
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
        {/* Pulsing grid background */}
        <div className="absolute inset-0 opacity-20 animate-pulse-grid">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
        
        {/* Animated circuit lines */}
        <div className="absolute inset-0 opacity-15 hidden md:block">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-green-500/20 to-transparent animate-[slide_25s_linear_infinite]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-green-500/15 to-transparent animate-[slideVertical_30s_linear_infinite]"></div>
        </div>
        
        {/* Matrix rain effect */}
        <div className="absolute inset-0 overflow-hidden opacity-20 hidden lg:block">
          <div className="absolute top-0 left-[10%] text-green-400 font-mono text-sm animate-matrix-rain">
            01010011<br/>01100101<br/>01100011<br/>01110101<br/>01110010<br/>01101001<br/>01110100<br/>01111001
          </div>
          <div className="absolute top-0 left-[25%] text-green-400 font-mono text-xs animate-matrix-rain" style={{animationDelay: '3s'}}>
            01001000<br/>01100001<br/>01100011<br/>01101011<br/>01100101<br/>01110010
          </div>
          <div className="absolute top-0 left-[45%] text-green-400 font-mono text-sm animate-matrix-rain" style={{animationDelay: '6s'}}>
            01000011<br/>01111001<br/>01100010<br/>01100101<br/>01110010
          </div>
          <div className="absolute top-0 left-[65%] text-green-400 font-mono text-xs animate-matrix-rain" style={{animationDelay: '9s'}}>
            01010000<br/>01100101<br/>01101110<br/>01110100<br/>01100101<br/>01110011<br/>01110100
          </div>
          <div className="absolute top-0 left-[80%] text-green-400 font-mono text-sm animate-matrix-rain" style={{animationDelay: '12s'}}>
            01010010<br/>01100101<br/>01100100<br/>01010100<br/>01100101<br/>01100001<br/>01101101
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-green-400 rounded-full opacity-60 animate-[float_20s_ease-in-out_infinite]"></div>
          <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-40 animate-[float_25s_ease-in-out_infinite]" style={{animationDelay: '5s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-green-400 rounded-full opacity-50 animate-[float_30s_ease-in-out_infinite]" style={{animationDelay: '10s'}}></div>
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
