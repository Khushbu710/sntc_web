
'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced Matrix Characters with technical symbols
    const chars = '01アカサタナハマヤラワン≡∆∇∞∑∏∫∂∇∴∵∈∋∪∩⊂⊃⊆⊇∀∃∄∅∈∉∋∌∖∗∘∙√∛∜∝∞∟∠∡∢∣∤∥∦∧∨∩∪∫∬∭∮∯∰∱∲∳∴∵∶∷∸∹∺∻∼∽∾∿≀≁≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨≩≪≫≬≭≮≯≰≱≲≳≴≵≶≷≸≹≺≻≼≽≾≿⊀⊁⊂⊃⊄⊅⊆⊇⊈⊉⊊⊋⊌⊍⊎⊏⊐⊑⊒⊓⊔⊕⊖⊗⊘⊙⊚⊛⊜⊝⊞⊟⊠⊡⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯⊰⊱⊲⊳⊴⊵⊶⊷⊸⊹⊺⊻⊼⊽⊾⊿⋀⋁⋂⋃⋄⋅⋆⋇⋈⋉⋊⋋⋌⋍⋎⋏⋐⋑⋒⋓⋔⋕⋖⋗⋘⋙⋚⋛⋜⋝⋞⋟⋠⋡⋢⋣⋤⋥⋦⋧⋨⋩⋪⋫⋬⋭⋮⋯⋰⋱⋲⋳⋴⋵⋶⋷⋸⋹⋺⋻⋼⋽⋾⋿{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/\\`~';
    
    // Technical command patterns
    const techCommands = [
      'sudo rm -rf /',
      'SELECT * FROM users',
      'while(true) { hack(); }',
      'import neural_network',
      'decrypt(encrypted_data)',
      'firewall.bypass()',
      'quantum.entangle()',
      'system.override()',
      'neural.link.establish()',
      'crypto.mine(blockchain)',
      'ai.evolve(consciousness)',
      'matrix.reload()',
      'access.mainframe()',
      'inject.payload()',
      'scan.vulnerabilities()',
      'exploit.zero_day()',
      'elevate.privileges()',
      'steganography.hide()',
      'brute_force.password()',
      'social_engineer.target()'
    ];

    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    const speeds: number[] = [];
    const opacities: number[] = [];
    const colors: string[] = [];
    const glitchChance: number[] = [];
    const zoomEffect: number[] = [];

    // Technical phrases for random display
    const techPhrases = [
      'NEURAL NETWORK ACTIVE',
      'QUANTUM DECRYPTION',
      'BLOCKCHAIN VERIFIED',
      'AI CONSCIOUSNESS LOADED',
      'MATRIX PROTOCOLS ENGAGED',
      'CYBER WARFARE INITIATED',
      'DEEP LEARNING ALGORITHM',
      'CRYPTOGRAPHIC HASH',
      'BINARY TREE TRAVERSAL',
      'MACHINE LEARNING MODEL',
      'GENETIC ALGORITHM',
      'FUZZY LOGIC SYSTEM',
      'EXPERT SYSTEM ONLINE',
      'NEURAL PATHWAYS MAPPED',
      'QUANTUM ENTANGLEMENT',
      'CYBERNETIC ENHANCEMENT',
      'DIGITAL CONSCIOUSNESS',
      'SYNTHETIC INTELLIGENCE',
      'BIOMETRIC SCAN COMPLETE',
      'HOLOGRAPHIC PROJECTION'
    ];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
      speeds[i] = Math.random() * 1.5 + 0.3;
      opacities[i] = Math.random() * 0.8 + 0.2;
      colors[i] = ['#00ff41', '#00ffff', '#ff0080', '#ffff00', '#ff8000'][Math.floor(Math.random() * 5)];
      glitchChance[i] = Math.random() * 0.02;
      zoomEffect[i] = Math.random() * 0.5 + 0.8;
    }

    let frameCount = 0;
    let commandIndex = 0;
    let phraseIndex = 0;

    const draw = () => {
      frameCount++;
      
      // Dynamic background with technical noise
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add random technical noise
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + 1;
        ctx.fillStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.1)`;
        ctx.fillRect(x, y, size, size);
      }

      // Enhanced Matrix rain effect
      for (let i = 0; i < drops.length; i++) {
        const isGlitch = Math.random() < glitchChance[i];
        const currentZoom = zoomEffect[i] + Math.sin(frameCount * 0.02 + i) * 0.3;
        
        if (isGlitch) {
          // Glitch effect with random colors and positions
          ctx.fillStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${opacities[i]})`;
          ctx.font = `${fontSize * currentZoom}px 'Courier New', monospace`;
          
          // Random glitch displacement
          const glitchX = i * fontSize + (Math.random() - 0.5) * 10;
          const glitchY = drops[i] + (Math.random() - 0.5) * 5;
          
          const glitchChar = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(glitchChar, glitchX, glitchY);
        } else {
          // Normal matrix character
          const hexColor = colors[i];
          ctx.fillStyle = hexColor.replace('#', 'rgba(') + `, ${opacities[i]})`;
          ctx.font = `${fontSize * currentZoom}px 'Courier New', monospace`;
          
          const text = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(text, i * fontSize, drops[i]);
        }

        // Enhanced fading trail with random effects
        for (let j = 1; j < 20; j++) {
          const alpha = Math.max(0, opacities[i] - j * 0.05);
          const trailY = drops[i] - j * fontSize;
          
          if (trailY > 0) {
            if (Math.random() < 0.1) {
              // Random color bursts in trail
              ctx.fillStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${alpha})`;
            } else {
              ctx.fillStyle = colors[i].replace('#', 'rgba(').replace(')', `, ${alpha})`);
            }
            
            ctx.font = `${fontSize * (currentZoom - j * 0.02)}px 'Courier New', monospace`;
            ctx.fillText(
              chars[Math.floor(Math.random() * chars.length)],
              i * fontSize + (Math.random() - 0.5) * 2,
              trailY
            );
          }
        }

        // Random speed variations
        if (Math.random() < 0.02) {
          speeds[i] = Math.random() * 2 + 0.5;
        }

        // Reset drop with new properties
        if (drops[i] > canvas.height + fontSize * 20) {
          drops[i] = -fontSize * Math.random() * 20;
          speeds[i] = Math.random() * 1.5 + 0.3;
          opacities[i] = Math.random() * 0.8 + 0.2;
          colors[i] = ['#00ff41', '#00ffff', '#ff0080', '#ffff00', '#ff8000'][Math.floor(Math.random() * 5)];
          glitchChance[i] = Math.random() * 0.03;
          zoomEffect[i] = Math.random() * 0.5 + 0.8;
        }

        drops[i] += speeds[i] * fontSize;
      }

      // Random technical commands overlay
      if (frameCount % 180 === 0) {
        const command = techCommands[commandIndex % techCommands.length];
        const x = Math.random() * (canvas.width - 300);
        const y = Math.random() * canvas.height;
        
        ctx.fillStyle = 'rgba(0, 255, 255, 0.7)';
        ctx.font = '16px "Courier New", monospace';
        ctx.fillText(command, x, y);
        
        commandIndex++;
      }

      // Random technical phrases
      if (frameCount % 240 === 0) {
        const phrase = techPhrases[phraseIndex % techPhrases.length];
        const x = Math.random() * (canvas.width - 400);
        const y = Math.random() * canvas.height;
        
        ctx.fillStyle = 'rgba(255, 0, 128, 0.6)';
        ctx.font = 'bold 20px "Courier New", monospace';
        ctx.fillText(phrase, x, y);
        
        phraseIndex++;
      }

      // Random data streams
      if (frameCount % 60 === 0) {
        const streamCount = Math.floor(Math.random() * 5) + 1;
        for (let s = 0; s < streamCount; s++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const data = Array.from({length: 20}, () => Math.random() > 0.5 ? '1' : '0').join('');
          
          ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
          ctx.font = '12px "Courier New", monospace';
          ctx.fillText(data, x, y);
        }
      }

      // Scanning lines with zoom effect
      const scanY = Math.sin(frameCount * 0.02) * canvas.height * 0.5 + canvas.height * 0.5;
      const scanX = Math.cos(frameCount * 0.015) * canvas.width * 0.5 + canvas.width * 0.5;
      
      // Horizontal scan with distortion
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      for (let x = 0; x < canvas.width; x += 10) {
        const distortion = Math.sin(x * 0.01 + frameCount * 0.02) * 5;
        ctx.lineTo(x, scanY + distortion);
      }
      ctx.stroke();

      // Vertical scan with distortion
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(scanX, 0);
      for (let y = 0; y < canvas.height; y += 10) {
        const distortion = Math.cos(y * 0.01 + frameCount * 0.02) * 5;
        ctx.lineTo(scanX + distortion, y);
      }
      ctx.stroke();

      // Random zoom effects on characters
      if (frameCount % 30 === 0) {
        const zoomCount = Math.floor(Math.random() * 3) + 1;
        for (let z = 0; z < zoomCount; z++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 30 + 20;
          const char = chars[Math.floor(Math.random() * chars.length)];
          
          ctx.fillStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`;
          ctx.font = `${size}px "Courier New", monospace`;
          ctx.fillText(char, x, y);
        }
      }

      // Random circuit patterns
      if (frameCount % 120 === 0) {
        const circuitCount = Math.floor(Math.random() * 3) + 1;
        for (let c = 0; c < circuitCount; c++) {
          const startX = Math.random() * canvas.width;
          const startY = Math.random() * canvas.height;
          const endX = startX + (Math.random() - 0.5) * 200;
          const endY = startY + (Math.random() - 0.5) * 200;
          
          ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();
          
          // Add circuit nodes
          ctx.fillStyle = ctx.strokeStyle;
          ctx.beginPath();
          ctx.arc(startX, startY, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(endX, endY, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const interval = setInterval(draw, 33); // ~30 FPS for smoother animation

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
