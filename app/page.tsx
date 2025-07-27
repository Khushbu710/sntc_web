
'use client';

import Header from '@/components/Header';
import MatrixRain from '@/components/MatrixRain';
import TechBackground from '@/components/TechBackground';
import HackerElements from '@/components/HackerElements';
import TypingText from '@/components/TypingText';
import GlitchText from '@/components/GlitchText';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <MatrixRain />
      <TechBackground />
      <HackerElements />
      <Header />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div 
            className="w-full max-w-6xl mx-auto"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20AI%20laboratory%20with%20glowing%20circuits%2C%20holographic%20displays%2C%20and%20digital%20interfaces%20in%20dark%20cyberpunk%20environment%20with%20neon%20blue%20and%20purple%20lighting%2C%20high-tech%20atmosphere%2C%20modern%20technology%20workspace%20with%20transparent%20screens%20and%20data%20visualizations&width=1200&height=800&seq=hero-bg-1&orientation=landscape')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-400/30">
              <div className="text-center">
                <div className="mb-6">
                  <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    <GlitchText text="SNTC" className="font-pacifico" />
                  </h1>
                  <p className="text-2xl md:text-3xl text-cyan-400/80 mb-8">
                    <TypingText text="Science & Technology Committee" speed={80} />
                  </p>
                  <p className="text-lg md:text-xl text-white/80 mb-8">
                    <TypingText text="Indian Institute of Technology Mandi" speed={60} />
                  </p>
                </div>
                
                <div className="space-y-6 mb-8">
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    <TypingText 
                      text="Welcome to the future of innovation. SNTC IIT Mandi is a hub of technological excellence where brilliant minds converge to push the boundaries of science and technology."
                      speed={30}
                    />
                  </p>
                  <p className="text-md md:text-lg text-cyan-400/80">
                    <TypingText 
                      text="Explore our cutting-edge clubs, revolutionary projects, and the elite team driving the next generation of technological advancement."
                      speed={25}
                    />
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/clubs" 
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-shield-user-line mr-2"></i>
                    Access Clubs Database
                  </Link>
                  <Link 
                    href="/team" 
                    className="px-8 py-3 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-team-line mr-2"></i>
                    View Team Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-cyan-400">
                  <GlitchText text="System Overview" />
                </h2>
                <div className="space-y-4 text-lg text-white/90">
                  <p>
                    The Science and Technology Committee of IIT Mandi serves as the central neural network for all technical activities on campus. We orchestrate innovation through our specialized clubs and cells.
                  </p>
                  <p>
                    Our mission is to foster a culture of technological excellence, research, and development that prepares students for the challenges of tomorrow's digital world.
                  </p>
                  <div className="flex items-center space-x-4 mt-6">
                    <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                      <i className="ri-cpu-line text-cyan-400 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-400">Core Functions</h3>
                      <p className="text-white/70">Technical Innovation & Research</p>
                    </div>
                  </div>
                </div>
              </div>
              <div 
                className="relative rounded-xl overflow-hidden"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Advanced%20technology%20research%20laboratory%20with%20holographic%20displays%2C%20quantum%20computers%2C%20AI%20systems%2C%20and%20futuristic%20equipment%20in%20dark%20cyberpunk%20setting%20with%20neon%20lighting%20and%20digital%20interfaces&width=600&height=400&seq=about-img-1&orientation=landscape')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-white/80">Active Clubs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-white/80">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-white/80">Events Organized</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-cyan-400">
              <GlitchText text="Quick Access Panel" />
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/clubs" className="block p-6 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="ri-group-line text-cyan-400 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Clubs & Cells</h3>
                <p className="text-white/80">Access our technical clubs database</p>
              </Link>
              
              <Link href="/offerings" className="block p-6 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20 cursor-pointer">
                <div className="w-16 h-16 bg-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="ri-rocket-line text-purple-400 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Offerings</h3>
                <p className="text-white/80">Explore our projects and services</p>
              </Link>
              
              <Link href="/team" className="block p-6 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-user-line text-cyan-400 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Team Access</h3>
                <p className="text-white/80">View team member profiles</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
