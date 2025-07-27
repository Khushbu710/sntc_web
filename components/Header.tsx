
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/clubs', label: 'Clubs & Cells' },
    { href: '/offerings', label: 'Offerings' },
    { href: '/team', label: 'Team' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-cyan-400/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <i className="ri-cpu-line text-black text-xl"></i>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl tracking-wide group-hover:text-cyan-400 transition-colors">
                SNTC
              </h1>
              <p className="text-cyan-400/80 text-sm">IIT Mandi</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-cyan-400 transition-colors relative group px-3 py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white/80 hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
