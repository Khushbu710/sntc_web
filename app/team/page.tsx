
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MatrixRain from '@/components/MatrixRain';
import TechBackground from '@/components/TechBackground';
import HackerElements from '@/components/HackerElements';
import TypingText from '@/components/TypingText';
import GlitchText from '@/components/GlitchText';

const team = [
  {
    id: 'director',
    name: 'Dr. Rajesh Kumar',
    role: 'Faculty Director',
    department: 'Computer Science',
    clearance: 'LEVEL 10',
    status: 'ACTIVE',
    specialization: 'AI/ML Research',
    experience: '15 years',
    email: 'rajesh.kumar@iitmandi.ac.in',
    bio: 'Dr. Rajesh Kumar is a renowned researcher in artificial intelligence and machine learning. He leads the SNTC with a vision to promote technical excellence and innovation among students.',
    achievements: ['50+ research papers', 'AI Excellence Award 2023', 'Best Faculty Award', 'Industry collaborations'],
    image: 'https://readdy.ai/api/search-image?query=Professional%20tech%20director%20in%20futuristic%20office%20with%20holographic%20displays%20and%20advanced%20computer%20systems%2C%20cyberpunk%20style%20portrait%20with%20neon%20lighting&width=300&height=400&seq=director-1&orientation=portrait'
  },
  {
    id: 'coord1',
    name: 'Arjun Sharma',
    role: 'Overall Coordinator',
    department: 'Computer Science',
    clearance: 'LEVEL 8',
    status: 'ACTIVE',
    specialization: 'Full Stack Development',
    experience: '4 years',
    email: 'arjun.sharma@students.iitmandi.ac.in',
    bio: 'Final year student with expertise in web development and system architecture. Coordinates all technical activities and manages inter-club collaborations.',
    achievements: ['GSoC 2023 participant', 'Open source contributor', 'Hackathon winner', 'Technical mentor'],
    image: 'https://readdy.ai/api/search-image?query=Young%20tech%20coordinator%20working%20on%20multiple%20monitors%20with%20coding%20interfaces%2C%20cyberpunk%20hacker%20aesthetic%20with%20blue%20neon%20lighting%20and%20futuristic%20setup&width=300&height=400&seq=coord1-1&orientation=portrait'
  },
  {
    id: 'coord2',
    name: 'Priya Patel',
    role: 'Technical Coordinator',
    department: 'Electronics',
    clearance: 'LEVEL 8',
    status: 'ACTIVE',
    specialization: 'Embedded Systems',
    experience: '3 years',
    email: 'priya.patel@students.iitmandi.ac.in',
    bio: 'Electronics engineering student specializing in IoT and robotics. Manages technical workshops and coordinates hardware-related activities.',
    achievements: ['Robotics competition winner', 'IoT project lead', 'Technical workshop organizer', 'Research assistant'],
    image: 'https://readdy.ai/api/search-image?query=Female%20tech%20coordinator%20in%20advanced%20electronics%20lab%20with%20circuit%20boards%20and%20robotic%20components%2C%20cyberpunk%20style%20with%20purple%20neon%20lighting&width=300&height=400&seq=coord2-1&orientation=portrait'
  },
  {
    id: 'proghead',
    name: 'Vikram Singh',
    role: 'Programming Club Head',
    department: 'Computer Science',
    clearance: 'LEVEL 7',
    status: 'ACTIVE',
    specialization: 'Competitive Programming',
    experience: '3 years',
    email: 'vikram.singh@students.iitmandi.ac.in',
    bio: 'Competitive programming enthusiast with excellent problem-solving skills. Leads coding contests and algorithm workshops.',
    achievements: ['ICPC regionalist', 'CodeChef 6-star', 'Contest organizer', 'Algorithm expert'],
    image: 'https://readdy.ai/api/search-image?query=Programming%20club%20leader%20at%20workstation%20with%20multiple%20screens%20showing%20code%20and%20algorithms%2C%20cyberpunk%20hacker%20environment%20with%20green%20terminal%20interfaces&width=300&height=400&seq=proghead-1&orientation=portrait'
  },
  {
    id: 'aihead',
    name: 'Sneha Reddy',
    role: 'AI/ML Club Head',
    department: 'Computer Science',
    clearance: 'LEVEL 7',
    status: 'ACTIVE',
    specialization: 'Deep Learning',
    experience: '2 years',
    email: 'sneha.reddy@students.iitmandi.ac.in',
    bio: 'Deep learning researcher working on computer vision and NLP projects. Organizes AI workshops and research collaborations.',
    achievements: ['Research publications', 'Kaggle competitions', 'AI project lead', 'Workshop organizer'],
    image: 'https://readdy.ai/api/search-image?query=AI%20research%20leader%20working%20with%20neural%20network%20visualizations%20and%20machine%20learning%20models%2C%20futuristic%20lab%20with%20holographic%20brain%20interfaces&width=300&height=400&seq=aihead-1&orientation=portrait'
  },
  {
    id: 'robothead',
    name: 'Rahul Gupta',
    role: 'Robotics Club Head',
    department: 'Mechanical',
    clearance: 'LEVEL 7',
    status: 'ACTIVE',
    specialization: 'Autonomous Systems',
    experience: '3 years',
    email: 'rahul.gupta@students.iitmandi.ac.in',
    bio: 'Mechanical engineering student with passion for robotics and automation. Leads robot development projects and competitions.',
    achievements: ['Robocon participant', 'Autonomous robot developer', 'Workshop leader', 'Team captain'],
    image: 'https://readdy.ai/api/search-image?query=Robotics%20club%20leader%20working%20with%20robotic%20arms%20and%20mechanical%20components%2C%20cyberpunk%20workshop%20with%20blue%20neon%20lighting%20and%20futuristic%20machinery&width=300&height=400&seq=robothead-1&orientation=portrait'
  },
  {
    id: 'sechead',
    name: 'Amit Verma',
    role: 'Cybersecurity Head',
    department: 'Computer Science',
    clearance: 'LEVEL 9',
    status: 'CLASSIFIED',
    specialization: 'Penetration Testing',
    experience: '4 years',
    email: 'amit.verma@students.iitmandi.ac.in',
    bio: 'Cybersecurity expert specializing in ethical hacking and digital forensics. Leads security awareness programs and CTF competitions.',
    achievements: ['CTF winner', 'Security researcher', 'Ethical hacker', 'Conference speaker'],
    image: 'https://readdy.ai/api/search-image?query=Cybersecurity%20specialist%20in%20command%20center%20with%20security%20monitoring%20screens%20and%20hacker%20interfaces%2C%20dark%20cyberpunk%20atmosphere%20with%20red%20warning%20lights&width=300&height=400&seq=sechead-1&orientation=portrait'
  },
  {
    id: 'webhead',
    name: 'Kavya Joshi',
    role: 'Web Dev Cell Head',
    department: 'Computer Science',
    clearance: 'LEVEL 6',
    status: 'ACTIVE',
    specialization: 'Frontend Architecture',
    experience: '2 years',
    email: 'kavya.joshi@students.iitmandi.ac.in',
    bio: 'Frontend developer with expertise in modern web technologies. Manages web development projects and UI/UX workshops.',
    achievements: ['UI/UX designer', 'Frontend mentor', 'Project leader', 'Workshop organizer'],
    image: 'https://readdy.ai/api/search-image?query=Web%20development%20lead%20working%20on%20responsive%20design%20interfaces%20and%20modern%20web%20applications%2C%20cyberpunk%20workspace%20with%20purple%20neon%20accents&width=300&height=400&seq=webhead-1&orientation=portrait'
  }
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isPopupActive, setIsPopupActive] = useState(false);

  const handleMemberAccess = (member) => {
    setSelectedMember(member);
    setIsPopupActive(true);
  };

  const closePopup = () => {
    setIsPopupActive(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <MatrixRain />
      <TechBackground />
      <HackerElements />
      <Header />
      
      <main className="relative z-10 pt-20">
        {/* Terminal Access */}
        <section className="py-12 px-4 border-b border-cyan-400/30">
          <div className="max-w-6xl mx-auto">
            <div className="bg-black/90 rounded-lg p-6 border border-cyan-400/50 font-mono">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-cyan-400 ml-4">SECURE-TERMINAL v3.0.1</span>
              </div>
              <div className="text-green-400">
                <TypingText text="root@sntc-secure:~$ access team_database --level=restricted" speed={50} />
              </div>
              <div className="text-cyan-400 mt-2">
                <TypingText text="[SECURITY] Verifying clearance level..." speed={30} />
              </div>
              <div className="text-green-400 mt-1">
                <TypingText text="[ACCESS GRANTED] Team member profiles unlocked" speed={30} />
              </div>
            </div>
          </div>
        </section>

        {/* Header */}
        <section className={`py-12 px-4 transition-all duration-500 ${isPopupActive ? 'blur-md opacity-30' : ''}`}>
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              <GlitchText text="TEAM DATABASE" className="text-cyan-400" />
            </h1>
            <p className="text-xl text-white/80 mb-8">
              <TypingText text="[CLASSIFIED] Elite Technical Personnel Records" speed={40} />
            </p>
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 font-mono">
              <div className="text-red-400">
                <TypingText text="⚠️ WARNING: Unauthorized access is prohibited and monitored" speed={30} />
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className={`py-12 px-4 transition-all duration-500 ${isPopupActive ? 'blur-md opacity-30' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={member.id}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => handleMemberAccess(member)}
                >
                  {/* Member Image */}
                  <div 
                    className="h-64 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${member.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* Security Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        member.status === 'ACTIVE' 
                          ? 'bg-green-500/80 text-white' 
                          : member.status === 'CLASSIFIED'
                          ? 'bg-red-500/80 text-white'
                          : 'bg-yellow-500/80 text-black'
                      }`}>
                        {member.status}
                      </span>
                    </div>

                    {/* Clearance Level */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 bg-purple-500/80 text-white rounded text-xs font-bold font-mono">
                        {member.clearance}
                      </span>
                    </div>

                    {/* Scanning Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400 animate-pulse"></div>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-4">
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-purple-400 text-sm font-semibold">
                        {member.role}
                      </p>
                      <p className="text-white/60 text-xs">
                        {member.department}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">Specialization:</span>
                        <span className="text-cyan-400">{member.specialization}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">Experience:</span>
                        <span className="text-green-400">{member.experience}</span>
                      </div>
                    </div>

                    {/* Access Button */}
                    <button className="w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 text-sm whitespace-nowrap">
                      <i className="ri-shield-check-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
                      VIEW PROFILE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Member Detail Popup */}
        {selectedMember && (
          <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
            isPopupActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closePopup}></div>
            
            <div className={`relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl border-2 border-cyan-400/60 p-8 max-w-2xl w-full mx-4 transform transition-all duration-500 ${
              isPopupActive ? 'scale-100 translate-y-0' : 'scale-75 translate-y-10'
            }`}>
              {/* Holographic Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-2xl animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-t-2xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-b-2xl"></div>

              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-6 right-6 text-cyan-400 hover:text-white transition-colors"
              >
                <i className="ri-close-line text-2xl w-8 h-8 flex items-center justify-center"></i>
              </button>

              {/* Member Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-6">
                  {/* Member Image */}
                  <div className="flex-shrink-0">
                    <div 
                      className="w-32 h-40 bg-cover bg-center rounded-lg border border-cyan-400/30"
                      style={{ backgroundImage: `url(${selectedMember.image})` }}
                    >
                      <div className="w-full h-full bg-black/20 rounded-lg"></div>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="px-2 py-1 bg-purple-500/80 text-white rounded text-xs font-bold">
                        {selectedMember.clearance}
                      </span>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-cyan-400 mb-1">
                        <GlitchText text={selectedMember.name} />
                      </h2>
                      <p className="text-purple-400 font-semibold">{selectedMember.role}</p>
                      <p className="text-white/60 text-sm">{selectedMember.department}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm">
                        <span className="text-cyan-400">{selectedMember.specialization}</span>
                        <span className="text-green-400">{selectedMember.experience}</span>
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          selectedMember.status === 'ACTIVE' 
                            ? 'bg-green-500/80 text-white' 
                            : selectedMember.status === 'CLASSIFIED'
                            ? 'bg-red-500/80 text-white'
                            : 'bg-yellow-500/80 text-black'
                        }`}>
                          {selectedMember.status}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Biography</h3>
                      <p className="text-white/90 leading-relaxed text-sm">
                        {selectedMember.bio}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Key Achievements</h3>
                      <ul className="space-y-1">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li key={index} className="text-white/80 text-sm flex items-center">
                            <i className="ri-star-line text-yellow-400 mr-2 w-4 h-4 flex items-center justify-center"></i>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Contact</h3>
                      <p className="text-white/80 text-sm font-mono">
                        <i className="ri-mail-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
                        {selectedMember.email}
                      </p>
                    </div>

                    <div className="flex space-x-4">
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 text-sm whitespace-nowrap">
                        <i className="ri-mail-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
                        Contact
                      </button>
                      <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg font-semibold hover:from-purple-400 hover:to-cyan-500 transition-all duration-300 text-sm whitespace-nowrap">
                        <i className="ri-user-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Access Log */}
        <section className={`py-12 px-4 transition-all duration-500 ${isPopupActive ? 'blur-md opacity-30' : ''}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              <GlitchText text="ACCESS LOG" />
            </h2>
            <div className="bg-black/90 rounded-lg p-6 border border-cyan-400/50 font-mono text-sm">
              <div className="space-y-2">
                <div className="text-cyan-400">
                  <TypingText text="[2024-01-15 14:30:22] User authenticated successfully" speed={20} />
                </div>
                <div className="text-green-400">
                  <TypingText text="[2024-01-15 14:30:25] Database connection established" speed={20} />
                </div>
                <div className="text-yellow-400">
                  <TypingText text="[2024-01-15 14:30:28] Security protocols active" speed={20} />
                </div>
                <div className="text-green-400">
                  <TypingText text="[2024-01-15 14:30:31] Team profiles loaded successfully" speed={20} />
                </div>
                <div className="text-cyan-400">
                  <TypingText text="[2024-01-15 14:30:34] All systems operational" speed={20} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className={`py-12 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 transition-all duration-500 ${isPopupActive ? 'blur-md opacity-30' : ''}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
              <GlitchText text="SECURE COMMUNICATION" />
            </h2>
            <p className="text-white/90 mb-8">
              <TypingText text="For official communications and team coordination" speed={30} />
            </p>
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 font-mono">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">SECURE CHANNEL</h3>
                  <p className="text-white/80">sntc.team@iitmandi.ac.in</p>
                </div>
                <div>
                  <h3 className="text-purple-400 font-semibold mb-2">EMERGENCY CONTACT</h3>
                  <p className="text-white/80">+91-XXX-XXX-XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
