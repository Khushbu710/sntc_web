
'use client';

import { useEffect, useState } from 'react';

export default function HackerElements() {
  const [hackerText, setHackerText] = useState('');
  const [binaryStream, setBinaryStream] = useState<string[]>([]);
  const [systemStatus, setSystemStatus] = useState<string[]>([]);
  const [technicalData, setTechnicalData] = useState<string[]>([]);

  useEffect(() => {
    const hackerPhrases = [
      'NEURAL NETWORK SYNCHRONIZING...',
      'QUANTUM ENCRYPTION PROTOCOLS ACTIVE',
      'BLOCKCHAIN CONSENSUS REACHED',
      'AI CONSCIOUSNESS EXPANDING',
      'CYBERNETIC ENHANCEMENT COMPLETE',
      'MATRIX PROTOCOLS ENGAGED',
      'DEEP LEARNING ALGORITHMS EVOLVING',
      'CRYPTOGRAPHIC HASH VERIFIED',
      'BIOMETRIC SCAN AUTHENTICATED',
      'HOLOGRAPHIC PROJECTION STABLE',
      'SYNTHETIC INTELLIGENCE AWAKENING',
      'DIGITAL CONSCIOUSNESS UPLOADED',
      'CYBER WARFARE PROTOCOLS LOADED',
      'GENETIC ALGORITHM OPTIMIZING',
      'FUZZY LOGIC SYSTEMS ONLINE',
      'EXPERT SYSTEMS CONSULTING',
      'NEURAL PATHWAYS RECONSTRUCTED',
      'QUANTUM ENTANGLEMENT ESTABLISHED',
      'MACHINE LEARNING MODEL TRAINED',
      'ARTIFICIAL SYNAPSES FIRING'
    ];

    const statusMessages = [
      'FIREWALL: BYPASSED',
      'ENCRYPTION: CRACKED',
      'BACKDOOR: INSTALLED',
      'ROOTKIT: DEPLOYED',
      'KEYLOGGER: ACTIVE',
      'PAYLOAD: INJECTED',
      'PRIVILEGES: ESCALATED',
      'NETWORK: COMPROMISED',
      'DATABASE: ACCESSED',
      'MAINFRAME: PENETRATED'
    ];

    const techData = [
      'CPU: 847.2 GHz QUANTUM PROCESSOR',
      'RAM: 2048 TB NEURAL MEMORY',
      'STORAGE: ∞ QUANTUM DRIVES',
      'NETWORK: 999.9 TBPS HYPERNET',
      'SECURITY: LEVEL Ω CLEARANCE',
      'UPTIME: 99.99% SINCE SINGULARITY',
      'THREADS: 1,048,576 PARALLEL PROCESSES',
      'CACHE: 512 TB L4 QUANTUM CACHE',
      'BANDWIDTH: UNLIMITED NEURAL LINK',
      'LATENCY: 0.001ms LIGHT SPEED'
    ];

    const updateHackerText = () => {
      setHackerText(hackerPhrases[Math.floor(Math.random() * hackerPhrases.length)]);
    };

    const updateBinaryStream = () => {
      const newStream = [];
      for (let i = 0; i < 30; i++) {
        newStream.push(Math.random() > 0.5 ? '1' : '0');
      }
      setBinaryStream(newStream);
    };

    const updateSystemStatus = () => {
      const newStatus = [];
      for (let i = 0; i < 5; i++) {
        newStatus.push(statusMessages[Math.floor(Math.random() * statusMessages.length)]);
      }
      setSystemStatus(newStatus);
    };

    const updateTechnicalData = () => {
      const newData = [];
      for (let i = 0; i < 3; i++) {
        newData.push(techData[Math.floor(Math.random() * techData.length)]);
      }
      setTechnicalData(newData);
    };

    updateHackerText();
    updateBinaryStream();
    updateSystemStatus();
    updateTechnicalData();

    const hackerInterval = setInterval(updateHackerText, 2000);
    const binaryInterval = setInterval(updateBinaryStream, 80);
    const statusInterval = setInterval(updateSystemStatus, 3000);
    const dataInterval = setInterval(updateTechnicalData, 4000);

    return () => {
      clearInterval(hackerInterval);
      clearInterval(binaryInterval);
      clearInterval(statusInterval);
      clearInterval(dataInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Enhanced Animated Circuit Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20h80v80h-80zM30 30h60v60h-60zM40 40h40v40h-40z' fill='none' stroke='%2300ffff' stroke-width='0.5' opacity='0.3'/%3E%3Ccircle cx='20' cy='20' r='3' fill='%2300ffff' opacity='0.5'/%3E%3Ccircle cx='100' cy='20' r='3' fill='%23ff0080' opacity='0.5'/%3E%3Ccircle cx='20' cy='100' r='3' fill='%23ffff00' opacity='0.5'/%3E%3Ccircle cx='100' cy='100' r='3' fill='%23ff8000' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
          animation: 'circuit-pulse 3s ease-in-out infinite'
        }}></div>
      </div>

      {/* Multiple Floating Hacker Text Lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Top scrolling text */}
        <div className="absolute top-1/6 left-0 w-full font-mono text-green-400 text-sm opacity-30">
          <div className="animate-marquee-fast whitespace-nowrap">
            {hackerText} • NEURAL LINK ESTABLISHED • QUANTUM PROCESSING ACTIVE • CYBERNETIC ENHANCEMENT COMPLETE • {hackerText}
          </div>
        </div>

        {/* Middle scrolling text */}
        <div className="absolute top-1/2 left-0 w-full font-mono text-cyan-400 text-xs opacity-25">
          <div className="animate-marquee-slow whitespace-nowrap">
            BLOCKCHAIN VERIFIED • AI CONSCIOUSNESS LOADED • MATRIX PROTOCOLS ENGAGED • DEEP LEARNING ALGORITHMS EVOLVING • CRYPTOGRAPHIC HASH VERIFIED
          </div>
        </div>

        {/* Bottom scrolling text */}
        <div className="absolute top-3/4 left-0 w-full font-mono text-purple-400 text-xs opacity-20">
          <div className="animate-marquee-medium whitespace-nowrap">
            BIOMETRIC SCAN AUTHENTICATED • HOLOGRAPHIC PROJECTION STABLE • SYNTHETIC INTELLIGENCE AWAKENING • DIGITAL CONSCIOUSNESS UPLOADED
          </div>
        </div>
      </div>

      {/* Enhanced Binary Stream - Multiple Columns */}
      <div className="absolute top-0 right-0 h-full w-32 opacity-25">
        <div className="font-mono text-green-400 text-xs leading-tight columns-4 gap-2">
          {binaryStream.map((bit, index) => (
            <div key={index} className="animate-pulse break-inside-avoid" style={{ animationDelay: `${index * 30}ms` }}>
              {bit}
            </div>
          ))}
        </div>
      </div>

      {/* Left side technical data stream */}
      <div className="absolute top-0 left-0 h-full w-40 opacity-20">
        <div className="font-mono text-cyan-400 text-xs leading-loose p-4">
          {technicalData.map((data, index) => (
            <div key={index} className="animate-pulse mb-2" style={{ animationDelay: `${index * 500}ms` }}>
              {data}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Glitch Lines with Random Patterns */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-glitch-enhanced"
            style={{
              top: `${15 + i * 12}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              background: `linear-gradient(90deg, transparent, ${['#00ffff', '#ff0080', '#ffff00', '#ff8000'][i % 4]}, transparent)`
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced Radar Sweep with Zoom Effect */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-40">
        <div className="relative w-full h-full border-2 border-cyan-400 rounded-full animate-zoom-pulse">
          <div className="absolute inset-2 border border-cyan-400/50 rounded-full animate-ping"></div>
          <div className="absolute inset-4 border border-cyan-400/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div 
            className="absolute inset-0 border-t-4 border-cyan-400 rounded-full animate-spin"
            style={{ animationDuration: '1.5s' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced System Status with Multiple Panels */}
      <div className="absolute bottom-10 left-10 font-mono text-xs opacity-35">
        <div className="bg-black/80 p-4 rounded border border-cyan-400/30 backdrop-blur-sm">
          <div className="text-cyan-400 mb-2 font-bold">SYSTEM STATUS</div>
          <div className="space-y-1">
            {systemStatus.map((status, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full animate-pulse ${index % 4 === 0 ? 'bg-green-400' : index % 4 === 1 ? 'bg-yellow-400' : index % 4 === 2 ? 'bg-red-400' : 'bg-cyan-400'}`}></div>
                <span className="text-green-400">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications Panel */}
      <div className="absolute bottom-10 right-10 font-mono text-xs opacity-30">
        <div className="bg-black/80 p-4 rounded border border-purple-400/30 backdrop-blur-sm">
          <div className="text-purple-400 mb-2 font-bold">TECH SPECS</div>
          <div className="space-y-1">
            {technicalData.map((spec, index) => (
              <div key={index} className="text-purple-300 animate-pulse" style={{ animationDelay: `${index * 200}ms` }}>
                {spec}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Hexagonal Grid with Animation */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0 animate-hex-rotate" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2300ffff' stroke-width='0.5' opacity='0.4'%3E%3Cpath d='M40 20l20 11.5v23L40 66l-20-11.5v-23L40 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Enhanced Data Streams with Multiple Lines */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-px h-full bg-gradient-to-b from-transparent via-${['cyan', 'purple', 'green', 'yellow', 'red', 'pink'][i]}-400 to-transparent opacity-25 animate-data-stream`}
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Enhanced Floating Particles with Zoom Effects */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-particle-zoom opacity-40`}
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: ['#00ffff', '#ff0080', '#ffff00', '#ff8000', '#00ff00'][Math.floor(Math.random() * 5)],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced Terminal Cursor with Typing Effect */}
      <div className="absolute bottom-5 right-5 font-mono text-green-400 text-lg opacity-50">
        <span className="animate-terminal-cursor">█</span>
      </div>

      {/* Network Connection Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke={['#00ffff', '#ff0080', '#ffff00'][Math.floor(Math.random() * 3)]}
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>

      <style jsx>{`
        @keyframes marquee-fast {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee-slow {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee-medium {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes glitch-enhanced {
          0%, 100% { opacity: 0; transform: translateX(0) scaleX(1); }
          25% { opacity: 1; transform: translateX(-10px) scaleX(1.1); }
          50% { opacity: 1; transform: translateX(5px) scaleX(0.9); }
          75% { opacity: 1; transform: translateX(-3px) scaleX(1.05); }
        }
        
        @keyframes zoom-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes particle-zoom {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(2) rotate(180deg); }
        }
        
        @keyframes data-stream {
          0% { opacity: 0.1; }
          50% { opacity: 0.8; }
          100% { opacity: 0.1; }
        }
        
        @keyframes hex-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes circuit-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes terminal-cursor {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-marquee-fast {
          animation: marquee-fast 12s linear infinite;
        }
        
        .animate-marquee-slow {
          animation: marquee-slow 20s linear infinite;
        }
        
        .animate-marquee-medium {
          animation: marquee-medium 16s linear infinite;
        }
        
        .animate-glitch-enhanced {
          animation: glitch-enhanced 2s ease-in-out infinite;
        }
        
        .animate-zoom-pulse {
          animation: zoom-pulse 2s ease-in-out infinite;
        }
        
        .animate-particle-zoom {
          animation: particle-zoom 3s ease-in-out infinite;
        }
        
        .animate-data-stream {
          animation: data-stream 4s ease-in-out infinite;
        }
        
        .animate-hex-rotate {
          animation: hex-rotate 30s linear infinite;
        }
        
        .animate-terminal-cursor {
          animation: terminal-cursor 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}
