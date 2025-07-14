
import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'system' | 'error';
  content: string;
  timestamp?: string;
}

const Terminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Welcome message on mount
  useEffect(() => {
    const welcomeLines: TerminalLine[] = [
      { type: 'system', content: 'Welcome to Haris\' Digital Terminal.' },
      { type: 'system', content: 'Type a command or click an option below to explore' },
      { type: 'system', content: '' },
      { type: 'system', content: 'Available commands: about, projects, skills, contact, blog, help, clear, whoami, theme' },
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

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  const typeText = async (text: string, delay: number = 25) => {
    setIsTyping(true);
    const lines = text.split('\n');
    
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      const line = lines[lineIndex];
      let displayText = '';
      
      for (let i = 0; i < line.length; i++) {
        displayText += line[i];
        setLines(prev => {
          const newLines = [...prev];
          const lastLineIndex = newLines.length - 1;
          if (newLines[lastLineIndex]?.type === 'output') {
            newLines[lastLineIndex].content = displayText;
          } else {
            newLines.push({ type: 'output', content: displayText });
          }
          return newLines;
        });
        await new Promise(resolve => setTimeout(resolve, delay));
      }
      
      if (lineIndex < lines.length - 1) {
        setLines(prev => [...prev, { type: 'output', content: '' }]);
      }
    }
    setIsTyping(false);
  };

  const executeCommand = async (command: string) => {
    const cmd = command.toLowerCase().trim();
    
    // Add to command history
    if (cmd && !commandHistory.includes(cmd)) {
      setCommandHistory(prev => [cmd, ...prev].slice(0, 10));
    }
    setHistoryIndex(-1);
    
    // Add input to terminal
    setLines(prev => [...prev, { type: 'input', content: `$ ${command}` }]);
    
    // Add empty line for output
    setLines(prev => [...prev, { type: 'output', content: '' }]);
    
    switch (cmd) {
      case 'about':
        await typeText(`🧑‍💻 About Me

Cybersecurity student at FAST-NUCES with a strong focus on red teaming, penetration testing, and real-world attack simulations.

🏆 2nd place in "Shadows of the Realm" CTF
🔍 Bug bounty researcher on HackerOne and Bugcrowd
⚡ Experienced in Python tool development, web exploitation, malware analysis
🔐 Active in XSS and IDOR vulnerability research

Passionate about building custom security tools and contributing to the cybersecurity community through practical research and development.`);
        break;
        
      case 'projects':
        // Add projects with clickable links
        setLines(prev => [...prev, { type: 'output', content: '🚀 My GitHub Projects:' }]);
        setLines(prev => [...prev, { type: 'output', content: '' }]);
        
        const projects = [
          { name: 'Multi-file Malware Analyzer', desc: 'A Python-based tool for analyzing and correlating multiple malicious files', url: 'https://github.com/masooma09/Multi-file-Malware-Analyzer' },
          { name: 'EVENT MANAGEMENT SYSTEM', desc: 'A system for managing event creation, registration, and scheduling', url: 'https://github.com/Perister2904/EVENT-MANAGEMENT-SYSTEM' },
          { name: 'Client-Server Quiz Game Application', desc: 'A TCP socket-based multiplayer quiz game using secure communication', url: 'https://github.com/masooma09/-Client-Server-Quiz-Game-Application-' },
          { name: 'IoT Device Risk Management System', desc: 'Evaluates IoT device vulnerabilities and risk exposure', url: 'https://github.com/masooma09/-IoT-Device-Risk-Management-System' },
          { name: 'WiScan – A Brute-Force Dictionary-Based Wi-Fi Audit Tool', desc: 'Audits wireless networks using dictionary attacks to test password strength', url: 'https://github.com/masooma09/WiScan-A-Brute-Force-Dictionary-Based-Wi-Fi-Audit-Tool' },
          { name: 'AI-Powered Connect Four Plus', desc: 'An enhanced Connect Four game featuring AI strategy and fog-of-war mode', url: 'https://github.com/masooma09/AI-Powered-Connect-Four-Plus' }
        ];
        
        for (let i = 0; i < projects.length; i++) {
          const project = projects[i];
          const projectElement = document.createElement('div');
          projectElement.innerHTML = `
            <div class="mb-3">
              <div class="text-green-400 font-bold text-lg mb-1">
                ${i + 1}. <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="hover-underline cursor-pointer">${project.name}</a>
              </div>
              <div class="text-green-200 text-sm ml-4">→ ${project.desc}</div>
            </div>
          `;
          
          setLines(prev => [...prev, { 
            type: 'output', 
            content: `${i + 1}. ${project.name}\n   → ${project.desc}\n   → ${project.url}`
          }]);
          setLines(prev => [...prev, { type: 'output', content: '' }]);
        }
        break;
        
      case 'skills':
        await typeText(`🛠️ Technical Skills

💻 Programming & Scripting:
• Python, Bash, PowerShell, SQL

🔴 Offensive Security:
• SQLi, XSS, Command Injection, Burp Suite, CyberChef
• Shodan, John the Ripper, Hashcat

🔍 Reverse Engineering:
• Ghidra, IDA Pro, x64dbg, Cutter, PE Studio
• YARA, Scylla

🌐 Networking:
• Wireshark, Nmap, Scapy, Cisco Packet Tracer

🎯 Domains:
• Vulnerability Assessment, Digital Forensics
• IoT Security, Cloud Security

🏁 Platforms:
• PortSwigger Labs, TryHackMe (in progress), PicoCTF`);
        break;
        
      case 'contact':
        await typeText(`📬 Get In Touch:

📧 Email: hary.pery161@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/haris-muhammad-696512228/
🐙 GitHub: https://github.com/Perister2904

💼 Available for:
• Security consultations
• CTF collaborations  
• Project discussions
• Bug bounty partnerships

Status: ONLINE - Ready to connect!`);
        break;
        
      case 'blog':
        setLines(prev => [...prev, { type: 'output', content: '📝 Blog Status' }]);
        setLines(prev => [...prev, { type: 'output', content: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' }]);
        setLines(prev => [...prev, { type: 'output', content: '' }]);
        setLines(prev => [...prev, { type: 'output', content: '🛠️ Blog Coming Soon! Stay tuned.' }]);
        setLines(prev => [...prev, { type: 'output', content: '' }]);
        setLines(prev => [...prev, { type: 'output', content: "I'm currently working on some exciting content about:" }]);
        setLines(prev => [...prev, { type: 'output', content: '• Advanced penetration testing techniques' }]);
        setLines(prev => [...prev, { type: 'output', content: '• Malware analysis case studies' }]);
        setLines(prev => [...prev, { type: 'output', content: '• CTF writeups and walkthroughs' }]);
        setLines(prev => [...prev, { type: 'output', content: '• Security tool development' }]);
        setLines(prev => [...prev, { type: 'output', content: '' }]);
        
        // Add clickable GitHub link
        const githubElement = document.createElement('div');
        githubElement.innerHTML = `
          <a href="https://github.com/Perister2904" target="_blank" rel="noopener noreferrer" 
             class="hover-underline cursor-pointer text-green-400 font-bold text-lg">
            🔗 Follow my GitHub for updates on new projects and research!
          </a>
        `;
        
        setLines(prev => [...prev, { 
          type: 'output', 
          content: '🔗 Follow my GitHub for updates on new projects and research!\n   → https://github.com/Perister2904'
        }]);
        break;

      case 'whoami':
        await typeText(`You're a curious explorer 👾

Thanks for checking out my terminal portfolio! 
You seem to know your way around a command line. 
Respect. 🤝`);
        break;

      case 'sudo rm -rf /':
        setLines(prev => [...prev, { type: 'error', content: '⚠️  DANGER: Attempting to delete root filesystem...' }]);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLines(prev => [...prev, { type: 'error', content: '🛡️  Just kidding! Nice try though 😏' }]);
        setLines(prev => [...prev, { type: 'system', content: 'Security tip: Never run suspicious commands!' }]);
        break;

      case 'theme':
        await typeText(`🎨 Theme switched!

Note: This is just a demo - the terminal stays green for that authentic hacker vibe 💚`);
        break;
        
      case 'clear':
        setLines([]);
        return;
        
      case 'help':
        await typeText(`📋 Available Commands

• about    → Learn about me and my background
• projects → View my GitHub projects and descriptions  
• skills   → See my technical skills and expertise
• contact  → Get my contact information
• blog     → Check blog status (coming soon!)
• whoami   → Discover who you are 👾
• theme    → Toggle theme (demo)
• clear    → Clear terminal screen
• help     → Show this help message

💡 Pro tips:
• Use ↑ ↓ arrow keys to navigate command history
• Click the buttons below for quick access
• Try 'sudo rm -rf /' for a surprise 😉`);
        break;
        
      default:
        // Simple autocomplete suggestions
        const suggestions = ['about', 'projects', 'skills', 'contact', 'blog', 'help', 'clear', 'whoami', 'theme']
          .filter(c => c.startsWith(cmd.substring(0, 3)))
          .slice(0, 3);
        
        if (suggestions.length > 0) {
          await typeText(`Command '${command}' not found. Did you mean:\n${suggestions.map(s => `• ${s}`).join('\n')}\n\nType 'help' for all available commands.`);
        } else {
          await typeText(`Command '${command}' not found. Type 'help' for available commands.`);
        }
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
    <div className="w-full max-w-5xl mx-auto">
      {/* Terminal Window */}
      <div className="bg-black border-2 border-green-400 rounded-lg shadow-2xl overflow-hidden terminal-glow">
        {/* Terminal Header */}
        <div className="bg-gray-900 border-b border-green-400 px-4 py-3 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-green-400 font-mono text-sm flex items-center justify-center">
              <TerminalIcon className="w-4 h-4 mr-2" />
              haris@portfolio:~$
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
              <span className={`font-mono block ${
                line.type === 'input' 
                  ? 'text-green-400 text-base' 
                  : line.type === 'system' 
                  ? 'text-green-300 text-sm' 
                  : line.type === 'error'
                  ? 'text-red-400 text-sm'
                  : line.content.includes('📝 Blog Status') || line.content.includes('🚀 My GitHub Projects') || line.content.includes('🧑‍💻 About Me') || line.content.includes('🛠️ Technical Skills') || line.content.includes('📬 Get In Touch') || line.content.includes('📋 Available Commands')
                  ? 'text-green-400 text-xl font-bold'
                  : line.content.startsWith('•') || line.content.startsWith('→') || line.content.includes('.')
                  ? 'text-green-200 text-sm leading-relaxed'
                  : 'text-green-200 text-sm'
              }`}>
                {line.content}
              </span>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-green-400 bg-gray-900 p-4">
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-green-400 font-mono mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
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
        <div className="border-t border-green-400 bg-gray-900 p-4">
          <div className="flex flex-wrap gap-2">
            {['about', 'projects', 'skills', 'contact', 'blog', 'help', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleQuickCommand(cmd)}
                disabled={isTyping}
                className="px-4 py-2 bg-green-900/30 border border-green-400 text-green-400 font-mono text-sm rounded-full hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-400/30 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:border-green-300"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-6">
        <p className="text-green-500 font-mono text-sm opacity-70">
          Interactive Terminal Portfolio • Press TAB for autocomplete • Use ↑↓ for history
        </p>
      </div>
    </div>
  );
};

export default Terminal;
