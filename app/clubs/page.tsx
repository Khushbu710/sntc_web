
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MatrixRain from '@/components/MatrixRain';
import TechBackground from '@/components/TechBackground';
import HackerElements from '@/components/HackerElements';
import TypingText from '@/components/TypingText';
import GlitchText from '@/components/GlitchText';

type Club = {
  name: string;
  desc: string;
  website: string;
  logo: string;
  orbitRadius: number;
  color: string;
  activity: number;
};


const clubs = [
  {
    id: 'kamandprompt',
    name: 'Programming Club (KamandPrompt)',
    category: 'Technical',
    status: 'ACTIVE',
    members: 120,
    description: 'Coding contests, workshops, ACM‑style tutorials. The Programming Club at SNTC IIT Mandi focuses on competitive programming, algorithmic problem solving, and software development skills. We conduct regular coding contests, algorithm workshops, and prepare students for technical interviews.',
    activities: ['Weekly coding contests', 'ACM-style tutorials', 'Algorithm workshops', 'Technical interview preparation'],
    website: 'https://kamandprompt.github.io',
    logo: 'https://avatars.githubusercontent.com/u/20802788?s=280&v=4',
    tech: ['C++', 'Python', 'Java', 'Data Structures', 'Algorithms'],
    level: 'CLASSIFIED',
    color: '#00bfff',
    activity: 87,
    image: 'https://readdy.ai/api/search-image?query=Futuristic%20programming%20workspace%20with%20multiple%20monitors%20displaying%20code%2C%20neon%20blue%20terminal%20interfaces%2C%20cyberpunk%20hacker%20environment%20with%20digital%20rain%20effects%20and%20holographic%20displays&width=400&height=300&seq=prog-club-1&orientation=landscape'
  },
  {
    id: 'robotronics',
    name: 'Robotronics Club',
    category: 'Hardware',
    status: 'ACTIVE',
    members: 95,
    description: 'Robotics & electronics innovation platform. The Robotronics Club focuses on building autonomous robots, electronics projects, and participating in national robotics competitions. We work on cutting-edge robotics and automation technologies.',
    activities: ['Robot building workshops', 'Electronics projects', 'Robocon participation', 'Automation systems'],
    website: 'https://robotronics.iitmandi.co.in',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EmazVH1Tk12EhKGZXDsKM-lUCbzCNYYyPA&s',
    tech: ['Arduino', 'Raspberry Pi', 'ROS', 'Python', 'C++'],
    level: 'HIGH SECURITY',
    color: '#f4d03f',
    activity: 74,
    image: 'https://readdy.ai/api/search-image?query=Advanced%20robotics%20laboratory%20with%20robotic%20arms%2C%20AI%20systems%2C%20circuit%20boards%2C%20and%20futuristic%20mechanical%20components%20in%20dark%20cyberpunk%20setting%20with%20yellow%20neon%20lighting&width=400&height=300&seq=robo-club-1&orientation=landscape'
  },
  {
    id: 'stac',
    name: 'Space Technology & Astronomy Cell (STAC)',
    category: 'Space',
    status: 'ACTIVE',
    members: 85,
    description: 'Astronomy outreach, AstraX & Zenith festivals. STAC is dedicated to space technology research, astronomy education, and organizing major space-related events. We conduct stargazing sessions, space workshops, and collaborate on satellite projects.',
    activities: ['Astronomy outreach', 'AstraX festival', 'Zenith events', 'Space workshops'],
    website: 'https://stac.iitmandi.co.in',
    logo: 'https://stac.iitmandi.co.in/static/images/STAClogo.png',
    tech: ['Astrophysics', 'Satellite Tech', 'Telescopes', 'Space Software', 'Mission Planning'],
    level: 'CLASSIFIED',
    color: '#ff5e62',
    activity: 90,
    image: 'https://readdy.ai/api/search-image?query=Space%20technology%20command%20center%20with%20satellite%20displays%2C%20astronomical%20instruments%2C%20star%20charts%2C%20and%20futuristic%20space%20mission%20interfaces%20in%20dark%20cyberpunk%20atmosphere%20with%20red%20neon%20lighting&width=400&height=300&seq=space-club-1&orientation=landscape'
  },
  {
    id: 'ecell',
    name: 'Entrepreneurship Cell (E‑Cell)',
    category: 'Business',
    status: 'ACTIVE',
    members: 70,
    description: 'Startup mentorship & entrepreneurial culture. E-Cell promotes entrepreneurship among students through mentorship programs, startup incubation, and business development workshops. We connect students with industry leaders and investors.',
    activities: ['Startup mentorship', 'Business workshops', 'Investor connections', 'Entrepreneurial events'],
    website: 'https://sntc.iitmandi.co.in/ecell',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcRmTvOct1FOmcHmbqOgSlSrlRuAsHskCcQ&s',
    tech: ['Business Development', 'Marketing', 'Finance', 'Pitch Deck', 'MVP Development'],
    level: 'RESTRICTED',
    color: '#00e4ff',
    activity: 80,
    image: 'https://readdy.ai/api/search-image?query=Entrepreneurship%20hub%20with%20business%20charts%2C%20startup%20displays%2C%20innovation%20boards%2C%20and%20modern%20business%20interfaces%20in%20cyberpunk%20atmosphere%20with%20cyan%20neon%20lighting&width=400&height=300&seq=ecell-1&orientation=landscape'
  },
  {
    id: 'yantrik',
    name: 'Yantrik Club',
    category: 'Mechanical',
    status: 'ACTIVE',
    members: 60,
    description: 'Mechanical & mechatronics workshops & projects. Yantrik Club focuses on mechanical engineering projects, manufacturing processes, and mechatronics systems. We conduct hands-on workshops and work on innovative mechanical solutions.',
    activities: ['Mechanical workshops', 'Manufacturing projects', 'Mechatronics systems', 'Design competitions'],
    website: 'https://yantrikiitmandi.github.io',
    logo: 'https://readdy.ai/api/search-image?query=Mechanical%20engineering%20logo%20with%20gears%2C%20tools%2C%20and%20mechanical%20components%20in%20futuristic%20style%20with%20metallic%20finish&width=100&height=100&seq=yantrik-logo-1&orientation=squarish',
    tech: ['SolidWorks', 'AutoCAD', 'Manufacturing', 'Mechatronics', '3D Printing'],
    level: 'CONFIDENTIAL',
    color: '#ff9500',
    activity: 68,
    image: 'https://readdy.ai/api/search-image?query=Mechanical%20engineering%20workshop%20with%203D%20printers%2C%20robotic%20arms%2C%20precision%20tools%2C%20and%20futuristic%20manufacturing%20equipment%20in%20dark%20cyberpunk%20setting%20with%20orange%20neon%20lighting&width=400&height=300&seq=yantrik-1&orientation=landscape'
  },
  {
    id: 'nirmaan',
    name: 'Nirmaan Club',
    category: 'Civil',
    status: 'ACTIVE',
    members: 55,
    description: 'Civil engineering design & workshops. Nirmaan Club is dedicated to civil engineering projects, structural design, and construction technologies. We organize workshops on modern construction techniques and sustainable building practices.',
    activities: ['Civil engineering workshops', 'Structural design', 'Construction projects', 'Sustainability initiatives'],
    website: 'https://nirmaan.iitmandi.co.in',
    logo: 'https://readdy.ai/api/search-image?query=Civil%20engineering%20logo%20with%20building%20structures%2C%20construction%20elements%2C%20and%20architectural%20designs%20in%20futuristic%20style&width=100&height=100&seq=nirmaan-logo-1&orientation=squarish',
    tech: ['AutoCAD', 'Structural Analysis', 'Building Design', 'Construction Tech', 'Sustainability'],
    level: 'RESTRICTED',
    color: '#8e44ad',
    activity: 65,
    image: 'https://readdy.ai/api/search-image?query=Civil%20engineering%20design%20studio%20with%20architectural%20blueprints%2C%20structural%20models%2C%20construction%20planning%20interfaces%2C%20and%20futuristic%20building%20designs%20in%20dark%20cyberpunk%20atmosphere%20with%20purple%20neon%20lighting&width=400&height=300&seq=nirmaan-1&orientation=landscape'
  }
];

export default function ClubsPage() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [animationPhase, setAnimationPhase] = useState('closed');

  const handleClubClick = (club: Club) => {
    setSelectedClub(club);
    setAnimationPhase('centering');
    
    // Phase 1: Center the logo (300ms)
    setTimeout(() => {
      setAnimationPhase('split');
    }, 300);
    
    // Phase 2: Split reveal (500ms)
    setTimeout(() => {
      setAnimationPhase('open');
    }, 800);
  };

  const handleClose = () => {
    setAnimationPhase('centering');
    setTimeout(() => {
      setAnimationPhase('closed');
      setSelectedClub(null);
    }, 500);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <MatrixRain />
      <TechBackground />
      <HackerElements />

      {/* Enhanced High-Tech Background Animations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-purple-900/10"></div>
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px),
              linear-gradient(0deg, rgba(0,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        {/* Scanning Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-vertical"></div>
          <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-scan-horizontal"></div>
        </div>

        {/* Hexagonal Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                background: `radial-gradient(circle, ${i % 2 === 0 ? '#00bfff' : '#ff00ff'}40 0%, transparent 70%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 6}s`
              }}
            ></div>
          ))}
        </div>

        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300ffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      <Header />

      <main className="relative z-10 pt-20">
        {/* Terminal Header */}
        <section className={`py-12 px-4 border-b border-cyan-400/30 transition-all duration-700 ${animationPhase !== 'closed' ? 'blur-sm opacity-30' : ''}`}>
          <div className="max-w-6xl mx-auto">
            <div className="bg-black/80 rounded-lg p-6 border border-cyan-400/50 font-mono backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-cyan-400 ml-4">SNTC-TERMINAL v2.1.0</span>
              </div>
              <div className="text-green-400">
                <TypingText text="root@sntc-server:~$ access clubs_database" speed={50} />
              </div>
              <div className="text-cyan-400 mt-2">
                <TypingText text="[INFO] Accessing SNTC Clubs & Cells Database..." speed={30} />
              </div>
              <div className="text-green-400 mt-1">
                <TypingText text="[SUCCESS] Database connection established" speed={30} />
              </div>
            </div>
          </div>
        </section>

        {/* Main Database Interface */}
        <section className={`py-12 px-4 transition-all duration-700 ${animationPhase !== 'closed' ? 'blur-sm opacity-30' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">
                <GlitchText text="CLUBS & CELLS DATABASE" className="text-cyan-400" />
              </h1>
              <p className="text-xl text-white/80">
                <TypingText text="[CLASSIFIED] Access Level: AUTHORIZED PERSONNEL ONLY" speed={40} />
              </p>
            </div>

            {/* Club Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club, index) => (
                <div
                  key={club.id}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleClubClick(club)}
                  style={{
                    boxShadow: `0 0 20px ${club.color}20`,
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Club Logo as Main Image */}
                  <div className="h-48 relative bg-gradient-to-br from-gray-800 to-black flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-all duration-300" style={{
                      background: `radial-gradient(circle at center, ${club.color}40 0%, transparent 70%)`
                    }}></div>

                    {/* Enhanced Club Logo Sizing */}
                    <img
                      src={club.logo}
                      alt={club.name}
                      className={`z-10 relative group-hover:scale-110 transition-transform duration-300 ${
                        club.id === 'kamandprompt' ? 'w-44 h-44 object-cover' :
                          club.id === 'robotronics' ? 'w-44 h-44 object-cover' :
                            'w-40 h-40 object-contain'
                      }`}
                    />

                    {/* Animated Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300" style={{
                      background: `radial-gradient(circle at center, ${club.color}30 0%, transparent 70%)`,
                      animation: 'pulse 2s infinite'
                    }}></div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className={`px-2 py-1 rounded text-xs font-bold backdrop-blur-sm ${club.status === 'ACTIVE' ? 'bg-green-500/80 text-white' : 'bg-red-500/80 text-white'}`}>
                        {club.status}
                      </span>
                    </div>

                    {/* Level Badge */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-2 py-1 bg-purple-500/80 text-white rounded text-xs font-bold backdrop-blur-sm">
                        {club.level}
                      </span>
                    </div>

                    {/* Color Accent */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 z-20 group-hover:h-2 transition-all duration-300"
                      style={{ backgroundColor: club.color }}
                    ></div>
                  </div>

                  {/* Club Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {club.name}
                      </h3>
                      <span className="text-sm text-purple-400 font-mono">{club.category}</span>
                    </div>

                    <p className="text-white/80 text-sm mb-4 leading-relaxed line-clamp-2">
                      {club.description.split('.').slice(0, 2).join('.')}.
                    </p>

                    {/* Activity Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-white/60">Activity Level</span>
                        <span className="text-cyan-400 font-mono">{club.activity}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-1000 animate-pulse"
                          style={{
                            width: `${club.activity}%`,
                            backgroundColor: club.color
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <i className="ri-user-line text-cyan-400 w-4 h-4 flex items-center justify-center"></i>
                        <span className="text-white/80">{club.members} members</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="ri-shield-check-line text-green-400 w-4 h-4 flex items-center justify-center"></i>
                        <span className="text-green-400 font-mono">VERIFIED</span>
                      </div>
                    </div>

                    {/* Access Button */}
                    <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 whitespace-nowrap transform hover:scale-105 hover:shadow-lg">
                      <i className="ri-eye-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
                      ACCESS DETAILS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Animated Club Detail View */}
        {selectedClub && (
          <div
            className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-all duration-500 ${animationPhase === 'closed' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={handleBackdropClick}
          >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20"></div>
              <div className="absolute inset-0 animate-pulse" style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, ${selectedClub.color}20 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            {/* Animated Logo - Now on Left */}
            <div
              className={`absolute transition-all duration-700 ease-out ${animationPhase === 'centering' ? 'left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-150' : animationPhase === 'split' || animationPhase === 'open' ? 'left-8 md:left-16 lg:left-24 top-1/2 transform -translate-y-1/2 scale-100' : 'left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-100'}`}
            >
              <div
                className={`relative p-8 rounded-2xl transition-all duration-700 ${animationPhase === 'centering' ? 'shadow-2xl' : 'shadow-lg'}`}
                style={{
                  backgroundColor: `${selectedClub.color}20`,
                  border: `2px solid ${selectedClub.color}`,
                  boxShadow: `0 0 40px ${selectedClub.color}40`
                }}
              >
                <img
                  src={selectedClub.logo}
                  alt={selectedClub.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/90 p-4 mx-auto"
                />
                <div className="absolute inset-0 rounded-2xl animate-pulse" style={{
                  background: `linear-gradient(45deg, transparent, ${selectedClub.color}20, transparent)`,
                  backgroundSize: '400% 400%'
                }}></div>
              </div>
            </div>

            {/* Animated Description Panel - Now on Right */}
            <div
              className={`absolute right-8 md:right-16 lg:right-24 top-1/2 transform -translate-y-1/2 max-w-xl w-full transition-all duration-700 ease-out ${animationPhase === 'split' || animationPhase === 'open' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
            >
              <div
                className="bg-black/90 rounded-2xl p-8 border-2 backdrop-blur-sm"
                style={{
                  borderColor: selectedClub.color,
                  boxShadow: `0 0 30px ${selectedClub.color}30`
                }}
              >
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-cyan-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <i className="ri-close-line text-xl w-6 h-6 flex items-center justify-center"></i>
                </button>

                {/* Club Header */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2" style={{ color: selectedClub.color }}>
                    <GlitchText text={selectedClub.name} />
                  </h2>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="px-3 py-1 bg-purple-500/80 text-white rounded-full font-semibold">
                      {selectedClub.category}
                    </span>
                    <span className="text-green-400 font-mono">{selectedClub.members} members</span>
                    <span className="text-yellow-400 font-mono">{selectedClub.level}</span>
                  </div>
                </div>

                {/* Activity Level */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white/80">Activity Level</span>
                    <span className="font-mono" style={{ color: selectedClub.color }}>{selectedClub.activity}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ${animationPhase === 'open' ? 'animate-pulse' : ''}`}
                      style={{
                        width: animationPhase === 'open' ? `${selectedClub.activity}%` : '0%',
                        backgroundColor: selectedClub.color
                      }}
                    ></div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: selectedClub.color }}>Description</h3>
                  <p className="text-white/90 leading-relaxed text-sm">
                    {selectedClub.description}
                  </p>
                </div>

                {/* Activities */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: selectedClub.color }}>Key Activities</h3>
                  <ul className="space-y-2">
                    {selectedClub.activities.map((activity, index) => (
                      <li key={index} className="text-white/80 flex items-center text-sm">
                        <i className="ri-arrow-right-line mr-2 w-4 h-4 flex items-center justify-center" style={{ color: selectedClub.color }}></i>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: selectedClub.color }}>Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedClub.tech.map((tech, index) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 ${animationPhase === 'open' ? 'animate-pulse' : ''}`}
                        style={{
                          backgroundColor: `${selectedClub.color}20`,
                          color: selectedClub.color,
                          borderColor: `${selectedClub.color}40`,
                          animationDelay: `${index * 100}ms`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={selectedClub.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap flex items-center justify-center hover:scale-105 transform"
                  style={{
                    backgroundColor: selectedClub.color,
                    color: 'white',
                    boxShadow: `0 0 20px ${selectedClub.color}40`
                  }}
                >
                  <i className="ri-external-link-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Visit Official Website
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Access Terminal */}
        <section className={`py-12 px-4 bg-gradient-to-r from-cyan-900/10 to-purple-900/10 transition-all duration-700 ${animationPhase !== 'closed' ? 'blur-sm opacity-30' : ''}`}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/90 rounded-lg p-6 border border-cyan-400/50 font-mono backdrop-blur-sm">
              <div className="text-cyan-400 mb-4">
                <TypingText text="[SYSTEM] Club access requests logged" speed={50} />
              </div>
              <div className="text-green-400 mb-2">
                <TypingText text="[INFO] All clubs operational and accepting new members" speed={30} />
              </div>
              <div className="text-yellow-400 mb-2">
                <TypingText text="[WARNING] Some clubs require additional security clearance" speed={30} />
              </div>
              <div className="text-cyan-400">
                <TypingText text="[NOTICE] Contact respective coordinators for membership inquiries" speed={30} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scan-vertical {
          0% { top: -2px; }
          100% { top: 100%; }
        }

        @keyframes scan-horizontal {
          0% { left: -2px; }
          100% { left: 100%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .animate-scan-vertical {
          animation: scan-vertical 4s linear infinite;
        }

        .animate-scan-horizontal {
          animation: scan-horizontal 6s linear infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}