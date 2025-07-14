
import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'system';
  content: string;
  timestamp?: string;
}

const Terminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Matrix rain effect
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx!.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx!.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx!.fillStyle = '#00ff00';
      ctx!.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx!.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  }, []);

  // Welcome message on mount
  useEffect(() => {
    const welcomeLines: TerminalLine[] = [
      { type: 'system', content: '================================================' },
      { type: 'system', content: 'Welcome to Haris\' Digital Terminal.' },
      { type: 'system', content: 'Type a command or select an option below.' },
      { type: 'system', content: '================================================' },
      { type: 'system', content: 'Available commands: about, projects, skills, contact, blog, clear, help' },
      { type: 'system', content: '' }
    ];
    
    setLines(welcomeLines);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const typeText = async (text: string, delay: number = 30) => {
    setIsTyping(true);
    const chars = text.split('');
    let displayText = '';
    
    for (let i = 0; i < chars.length; i++) {
      displayText += chars[i];
      setLines(prev => {
        const newLines = [...prev];
        if (newLines[newLines.length - 1]?.type === 'output') {
          newLines[newLines.length - 1].content = displayText;
        } else {
          newLines.push({ type: 'output', content: displayText });
        }
        return newLines;
      });
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    setIsTyping(false);
  };

  const executeCommand = async (command: string) => {
    const cmd = command.toLowerCase().trim();
    
    // Add input to terminal
    setLines(prev => [...prev, { type: 'input', content: `$ ${command}` }]);
    
    // Add empty line for output
    setLines(prev => [...prev, { type: 'output', content: '' }]);
    
    switch (cmd) {
      case 'about':
        await typeText(`
Name: Muhammad Haris
Status: Student @ FAST-NUCES (GPA: 3.13)
Role: IT Manager @ LandTrack.pk
Focus: Red Team Operations & Web Exploitation
CTF: 2nd Place - Shadows of the Realm
Bounty: HackerOne & Bugcrowd Researcher

I'm a cybersecurity student with expertise in red teaming and offensive security, 
building real-world attack simulations and contributing to security research.
        `);
        break;
        
      case 'projects':
        await typeText(`
🚀 My GitHub Projects:

1. Multi-file Malware Analyzer
   → Advanced malware analysis tool with ML detection
   → https://github.com/masooma09/Multi-file-Malware-Analyzer

2. Event Management System
   → Full-stack platform with user authentication
   → https://github.com/Perister2904/EVENT-MANAGEMENT-SYSTEM

3. Client-Server Quiz Game
   → Real-time multiplayer quiz with live scoring
   → https://github.com/masooma09/-Client-Server-Quiz-Game-Application-

4. IoT Device Risk Management
   → Security assessment tool for IoT devices
   → https://github.com/masooma09/-IoT-Device-Risk-Management-System

5. WiScan Audit Tool
   → Brute-force Wi-Fi security auditing tool
   → https://github.com/masooma09/WiScan-A-Brute-Force-Dictionary-Based-Wi-Fi-Audit-Tool

6. AI-Powered Connect Four+
   → Enhanced Connect Four with AI opponent
   → https://github.com/masooma09/AI-Powered-Connect-Four-Plus
        `);
        break;
        
      case 'skills':
        await typeText(`
💻 Technical Skills:

Programming Languages:
• Python - Advanced automation & security tools
• Bash - System administration & scripting
• C/C++ - Low-level programming & performance
• JavaScript - Web development & automation

Security Tools:
• Burp Suite Pro - Web application testing
• Ghidra - Reverse engineering & malware analysis
• Wireshark - Network protocol analysis
• Nmap - Network discovery & security auditing
• John the Ripper - Password cracking
• Hashcat - Advanced password recovery

Development Tools:
• Git - Version control & collaboration
• Linux - Primary development environment
• VS Code - Code editing & debugging
• Docker - Containerization & deployment

Specialization Areas:
• Cybersecurity - Offensive security & red teaming
• Machine Learning - AI-powered security tools
• Blockchain - Decentralized applications
• IoT Security - Device vulnerability assessment
        `);
        break;
        
      case 'contact':
        await typeText(`
📞 Get In Touch:

📧 Email: hary.pery161@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/haris-muhammad-696512228
🐙 GitHub: https://github.com/Perister2904
📱 Phone: 0322-2728443
📍 Location: Karachi, Pakistan

💼 Available for:
• Security consultations
• CTF collaborations
• Project discussions
• Bug bounty partnerships

Status: ONLINE - Ready to connect!
        `);
        break;
        
      case 'blog':
        await typeText(`
🛠 Blog Coming Soon! Stay tuned.

I'm currently working on some exciting content about:
• Advanced penetration testing techniques
• Malware analysis case studies
• CTF writeups and walkthroughs
• Security tool development

Follow my GitHub for updates on new projects and research!
        `);
        break;
        
      case 'clear':
        setLines([]);
        return;
        
      case 'help':
        await typeText(`
Available Commands:
• about    - Learn about me
• projects - View my GitHub projects
• skills   - See my technical skills
• contact  - Get my contact information
• blog     - Check blog status
• clear    - Clear terminal screen
• help     - Show this help message

Pro tip: You can also click the buttons below for quick access!
        `);
        break;
        
      default:
        await typeText(`Command '${command}' not found. Type 'help' for available commands.`);
    }
    
    // Add spacing after output
    setLines(prev => [...prev, { type: 'system', content: '' }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim() && !isTyping) {
      executeCommand(currentInput);
      setCurrentInput('');
    }
  };

  const handleQuickCommand = (command: string) => {
    if (!isTyping) {
      executeCommand(command);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Terminal Window */}
      <div className="bg-black border border-green-500 rounded-lg shadow-2xl shadow-green-500/20 overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-900 border-b border-green-500 px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-green-400 font-mono text-sm flex items-center justify-center">
              <TerminalIcon className="w-4 h-4 mr-2" />
              haris@terminal:~$
            </span>
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="h-96 overflow-y-auto p-4 bg-black scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-green-500"
        >
          {lines.map((line, index) => (
            <div key={index} className="mb-1">
              <span className={`font-mono text-sm ${
                line.type === 'input' 
                  ? 'text-green-400' 
                  : line.type === 'system' 
                  ? 'text-green-300' 
                  : 'text-green-200'
              }`}>
                {line.content}
              </span>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-green-500 bg-gray-900 p-4">
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-green-400 font-mono mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              className="flex-1 bg-transparent text-green-400 font-mono outline-none caret-green-400"
              placeholder="Type a command..."
              disabled={isTyping}
              autoFocus
            />
            <span className={`ml-1 text-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
              █
            </span>
          </form>
        </div>

        {/* Quick Command Buttons */}
        <div className="border-t border-green-500 bg-gray-900 p-4">
          <div className="flex flex-wrap gap-2">
            {['about', 'projects', 'skills', 'contact', 'blog', 'clear', 'help'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleQuickCommand(cmd)}
                disabled={isTyping}
                className="px-3 py-1 bg-green-900/30 border border-green-500 text-green-400 font-mono text-sm rounded hover:bg-green-900/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-4">
        <p className="text-green-500 font-mono text-sm opacity-70">
          Welcome to the Matrix. Choose your path wisely.
        </p>
      </div>
    </div>
  );
};

export default Terminal;
