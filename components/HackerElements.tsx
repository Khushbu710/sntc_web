'use client';

import { useEffect, useState } from 'react';

export default function HackerElements() {
  const [hackerText, setHackerText] = useState('');
  const [binaryStream, setBinaryStream] = useState<string[]>([]);
  const [systemStatus, setSystemStatus] = useState<string[]>([]);
  const [technicalData, setTechnicalData] = useState<string[]>([]);

  // New states for random patterns currently generated inside JSX:
  const [glitchLines, setGlitchLines] = useState<
    { top: string; animationDelay: string; animationDuration: string; color: string }[]
  >([]);
  const [particles, setParticles] = useState<
    {
      width: number;
      height: number;
      backgroundColor: string;
      left: string;
      top: string;
      animationDelay: string;
      animationDuration: string;
    }[]
  >([]);
  const [networkLines, setNetworkLines] = useState<
    { x1: string; y1: string; x2: string; y2: string; stroke: string }[]
  >([]);

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

    // Generate glitch lines once, store in state:
    const newGlitchLines = [...Array(8)].map((_, i) => {
      const colors = ['#00ffff', '#ff0080', '#ffff00', '#ff8000'];
      return {
        top: `${15 + i * 12}%`,
        animationDelay: `${i * 0.3}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
        color: colors[i % colors.length],
      };
    });
    setGlitchLines(newGlitchLines);

    // Generate particles once, store in state:
    const newParticles = [...Array(50)].map(() => {
      const colors = ['#00ffff', '#ff0080', '#ffff00', '#ff8000', '#00ff00'];
      return {
        width: 2 + Math.random() * 4,
        height: 2 + Math.random() * 4,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      };
    });
    setParticles(newParticles);

    // Generate network lines once, store in state:
    const newNetworkLines = [...Array(10)].map(() => {
      const colors = ['#00ffff', '#ff0080', '#ffff00'];
      return {
        x1: `${Math.random() * 100}%`,
        y1: `${Math.random() * 100}%`,
        x2: `${Math.random() * 100}%`,
        y2: `${Math.random() * 100}%`,
        stroke: colors[Math.floor(Math.random() * colors.length)],
      };
    });
    setNetworkLines(newNetworkLines);

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
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20h80v80h-80zM30 30h60v60h-60zM40 40h40v40h-40z' fill='none' stroke='%2300ffff' stroke-width='0.5' opacity='0.3'/%3E%3Ccircle cx='20' cy='20' r='3' fill='%2300ffff' opacity='0.5'/%3E%3Ccircle cx='100' cy='20' r='3' fill='%23ff0080' opacity='0.5'/%3E%3Ccircle cx='20' cy='100' r='3' fill='%23ffff00' opacity='0.5'/%3E%3Ccircle cx='100' cy='100' r='3' fill='%23ff8000' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
            animation: 'circuit-pulse 3s ease-in-out infinite',
          }}
        ></div>
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
        <div className="absolute top-3/4 left-0 w-full font-mono text-pink-400 text-xs opacity-20">
          <div className="animate-marquee-fast whitespace-nowrap">
            SYSTEM OVERRIDE • NETWORK BREACHED • ROOT ACCESS GRANTED • PAYLOAD DEPLOYED • FIREWALL DISABLED • SYSTEM OVERRIDE
          </div>
        </div>
      </div>

      {/* Binary Stream */}
      <div className="absolute bottom-0 right-0 font-mono text-green-500 text-xs opacity-70 p-4 bg-black bg-opacity-30 rounded-md max-w-xs">
        {binaryStream.join('')}
      </div>

      {/* System Status Messages */}
      <div className="absolute top-0 right-0 p-4 font-mono text-yellow-400 text-sm space-y-1 max-w-xs">
        {systemStatus.map((status, idx) => (
          <div key={idx}>{status}</div>
        ))}
      </div>

      {/* Technical Data */}
      <div className="absolute bottom-0 left-0 p-4 font-mono text-cyan-300 text-xs space-y-1 max-w-xs">
        {technicalData.map((data, idx) => (
          <div key={idx}>{data}</div>
        ))}
      </div>

      {/* Glitch Lines */}
      {glitchLines.map(({ top, animationDelay, animationDuration, color }, idx) => (
        <div
          key={idx}
          className="absolute left-0 right-0 h-px opacity-60"
          style={{
            top,
            backgroundColor: color,
            animationDelay,
            animationDuration,
            animationName: 'glitch-line',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }}
        />
      ))}

      {/* Particles */}
      {particles.map(({ width, height, backgroundColor, left, top, animationDelay, animationDuration }, idx) => (
        <div
          key={idx}
          className="absolute rounded-full opacity-70"
          style={{
            width,
            height,
            backgroundColor,
            left,
            top,
            animationDelay,
            animationDuration,
            animationName: 'particle-float',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
          }}
        />
      ))}

      {/* Network Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {networkLines.map(({ x1, y1, x2, y2, stroke }, idx) => (
          <line
            key={idx}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={stroke}
            strokeWidth={0.5}
            opacity={0.5}
            style={{ animation: 'network-line-pulse 3s ease-in-out infinite' }}
          />
        ))}
      </svg>

      <style jsx>{`
        @keyframes glitch-line {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.3;
          }
        }

        @keyframes network-line-pulse {
          0%, 100% {
            stroke-opacity: 0.5;
          }
          50% {
            stroke-opacity: 0.2;
          }
        }

        @keyframes circuit-pulse {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-marquee-fast {
          animation: marquee 8s linear infinite;
        }

        .animate-marquee-slow {
          animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
