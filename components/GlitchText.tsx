
'use client';

import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    const glitchEffect = () => {
      if (Math.random() > 0.95) {
        const glitchedText = text
          .split('')
          .map(char => 
            Math.random() > 0.9 
              ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
              : char
          )
          .join('');
        
        setGlitchText(glitchedText);
        
        setTimeout(() => setGlitchText(text), 100);
      }
    };

    const interval = setInterval(glitchEffect, 3000);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`${className} transition-all duration-100`}>
      {glitchText}
    </span>
  );
}
