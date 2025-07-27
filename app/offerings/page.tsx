
'use client';

import Header from '@/components/Header';
import MatrixRain from '@/components/MatrixRain';
import TechBackground from '@/components/TechBackground';
import HackerElements from '@/components/HackerElements';
import TypingText from '@/components/TypingText';
import GlitchText from '@/components/GlitchText';

const offerings = [
  {
    id: 'projects',
    title: 'Research Projects',
    description: 'Cutting-edge research initiatives spanning AI, robotics, cybersecurity, and emerging technologies.',
    features: [
      'AI/ML Research Programs',
      'Robotics Development',
      'Cybersecurity Solutions',
      'Blockchain Applications',
      'IoT Implementations'
    ],
    icon: 'ri-flask-line',
    color: 'cyan',
    image: 'https://readdy.ai/api/search-image?query=Advanced%20research%20laboratory%20with%20AI%20systems%2C%20robotic%20prototypes%2C%20holographic%20displays%2C%20and%20futuristic%20technology%20projects%20in%20cyberpunk%20environment%20with%20neon%20lighting&width=500&height=300&seq=research-1&orientation=landscape'
  },
  {
    id: 'workshops',
    title: 'Technical Workshops',
    description: 'Intensive training programs designed to upgrade skills and knowledge in cutting-edge technologies.',
    features: [
      'Hands-on Coding Bootcamps',
      'Hardware Development',
      'AI/ML Masterclasses',
      'Cybersecurity Training',
      'Industry Certifications'
    ],
    icon: 'ri-tools-line',
    color: 'purple',
    image: 'https://readdy.ai/api/search-image?query=Futuristic%20technical%20workshop%20with%20multiple%20workstations%2C%20coding%20interfaces%2C%20hardware%20components%2C%20and%20training%20modules%20in%20dark%20cyberpunk%20setting%20with%20purple%20neon%20accents&width=500&height=300&seq=workshop-1&orientation=landscape'
  },
  {
    id: 'competitions',
    title: 'Tech Competitions',
    description: 'Platform for showcasing technical prowess through hackathons, coding contests, and innovation challenges.',
    features: [
      'Hackathon Events',
      'Coding Competitions',
      'Innovation Challenges',
      'Tech Olympiads',
      'Inter-college Contests'
    ],
    icon: 'ri-trophy-line',
    color: 'cyan',
    image: 'https://readdy.ai/api/search-image?query=Competitive%20programming%20arena%20with%20multiple%20screens%20showing%20leaderboards%2C%20coding%20interfaces%2C%20and%20futuristic%20gaming%20setup%20in%20cyberpunk%20environment%20with%20glowing%20displays&width=500&height=300&seq=competition-1&orientation=landscape'
  },
  {
    id: 'mentorship',
    title: 'Mentorship Programs',
    description: 'Guidance and support systems connecting students with industry experts and senior developers.',
    features: [
      'One-on-One Mentoring',
      'Industry Connections',
      'Career Guidance',
      'Skill Development',
      'Project Collaboration'
    ],
    icon: 'ri-user-star-line',
    color: 'purple',
    image: 'https://readdy.ai/api/search-image?query=Futuristic%20mentorship%20environment%20with%20holographic%20meeting%20rooms%2C%20digital%20collaboration%20tools%2C%20and%20advanced%20communication%20interfaces%20in%20cyberpunk%20setting%20with%20blue%20lighting&width=500&height=300&seq=mentorship-1&orientation=landscape'
  },
  {
    id: 'infrastructure',
    title: 'Tech Infrastructure',
    description: 'State-of-the-art facilities and resources for development, testing, and deployment of technical projects.',
    features: [
      'High-Performance Computing',
      'Cloud Resources',
      'Development Environments',
      'Testing Facilities',
      '24/7 Lab Access'
    ],
    icon: 'ri-server-line',
    color: 'cyan',
    image: 'https://readdy.ai/api/search-image?query=Advanced%20technology%20infrastructure%20with%20server%20rooms%2C%20high-performance%20computers%2C%20networking%20equipment%2C%20and%20futuristic%20data%20centers%20in%20cyberpunk%20environment%20with%20green%20matrix%20lighting&width=500&height=300&seq=infrastructure-1&orientation=landscape'
  },
  {
    id: 'events',
    title: 'Tech Events',
    description: 'Regular technical events, seminars, and conferences featuring industry leaders and emerging technologies.',
    features: [
      'Guest Lectures',
      'Tech Talks',
      'Industry Seminars',
      'Innovation Showcases',
      'Networking Events'
    ],
    icon: 'ri-calendar-event-line',
    color: 'purple',
    image: 'https://readdy.ai/api/search-image?query=Futuristic%20tech%20conference%20venue%20with%20holographic%20presentations%2C%20advanced%20audio-visual%20systems%2C%20and%20cyberpunk%20auditorium%20design%20with%20neon%20lighting%20and%20digital%20displays&width=500&height=300&seq=events-1&orientation=landscape'
  }
];

export default function OfferingsPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <MatrixRain />
      <TechBackground />
      <HackerElements />
      <Header />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section 
          className="py-20 px-4 relative"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20technology%20command%20center%20with%20holographic%20displays%2C%20advanced%20interfaces%2C%20and%20cyberpunk%20atmosphere%20with%20neon%20blue%20and%20purple%20lighting%20showcasing%20various%20tech%20offerings%20and%20services&width=1200&height=600&seq=offerings-hero-1&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <GlitchText text="TECH OFFERINGS" className="text-cyan-400" />
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              <TypingText text="Advanced Technology Solutions & Services" speed={50} />
            </p>
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 font-mono">
              <div className="text-cyan-400 mb-2">
                <TypingText text="[SYSTEM] Initializing offerings database..." speed={30} />
              </div>
              <div className="text-green-400">
                <TypingText text="[SUCCESS] All services operational and ready for access" speed={30} />
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((offering, _index) => (
                <div
                  key={offering.id}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden"
                >
                  {/* Image */}
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${offering.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 bg-${offering.color}-400/20 rounded-lg flex items-center justify-center`}>
                        <i className={`${offering.icon} text-${offering.color}-400 text-2xl`}></i>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="px-2 py-1 bg-green-500/80 text-white rounded text-xs font-bold">
                        ACTIVE
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                      {offering.title}
                    </h3>
                    <p className="text-white/80 mb-4 leading-relaxed">
                      {offering.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {offering.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <i className="ri-arrow-right-line text-cyan-400 text-sm"></i>
                          <span className="text-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 whitespace-nowrap">
                      <i className="ri-arrow-right-line mr-2"></i>
                      Access Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">
              <GlitchText text="Request Access" />
            </h2>
            <p className="text-xl text-white/90 mb-8">
              <TypingText text="Connect with us to explore our offerings and join our technical ecosystem" speed={30} />
            </p>
            
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/30">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="ri-mail-line text-cyan-400 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Email</h3>
                  <p className="text-white/80">sntc@iitmandi.ac.in</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="ri-phone-line text-purple-400 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Contact</h3>
                  <p className="text-white/80">+91-XXX-XXX-XXXX</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="ri-map-pin-line text-cyan-400 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Location</h3>
                  <p className="text-white/80">IIT Mandi, Himachal Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
