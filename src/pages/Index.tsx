
import Terminal from "@/components/Terminal";

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 z-0">
        <canvas id="matrix-canvas" className="w-full h-full opacity-20"></canvas>
      </div>
      
      {/* Terminal Interface */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Terminal />
      </div>
    </div>
  );
};

export default Index;
