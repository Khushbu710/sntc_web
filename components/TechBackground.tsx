
'use client';

import { useEffect, useRef } from 'react';

export default function TechBackground() {
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

    // Particles for floating effect
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: Math.random() > 0.5 ? '#00ffff' : '#ff00ff',
        opacity: Math.random() * 0.5 + 0.3
      });
    }

    // // Network connections
    // const connections: Array<{
    //   x1: number;
    //   y1: number;
    //   x2: number;
    //   y2: number;
    //   opacity: number;
    // }> = [];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Create connections between nearby particles
        particles.forEach((other, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              const opacity = (100 - distance) / 100 * 0.3;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      // Draw animated grid
      const gridSize = 50;
      const time = Date.now() * 0.001;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const opacity = Math.sin(time + x * 0.01 + y * 0.01) * 0.1 + 0.1;
          ctx.beginPath();
          ctx.rect(x, y, gridSize, gridSize);
          ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Draw scanning lines
      const scanY = (Math.sin(time * 2) * 0.5 + 0.5) * canvas.height;
      const scanX = (Math.cos(time * 1.5) * 0.5 + 0.5) * canvas.width;

      // Horizontal scan
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.6)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Vertical scan
      ctx.beginPath();
      ctx.moveTo(scanX, 0);
      ctx.lineTo(scanX, canvas.height);
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.6)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw digital noise
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + 1;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${Math.random() * 0.5})`;
        ctx.fill();
      }
    };

    const interval = setInterval(draw, 16);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
}
