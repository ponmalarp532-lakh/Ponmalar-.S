import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Terminal, Clock, ShieldAlert, Wrench, Cpu,
  Award, Calendar, BookOpen, User, ArrowUp, ChevronDown,
  Download, FileText, Mail, Github, Linkedin, ExternalLink,
  CheckCircle2, Server, Search, Radio, Compass, Info
} from 'lucide-react';

import { Navbar } from './components/Navbar';
import { CyberCanvas } from './components/CyberCanvas';
import { TypingText } from './components/TypingText';
import { StatsDashboard } from './components/StatsDashboard';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ContactPanel } from './components/ContactPanel';
import { ResumeViewer } from './components/ResumeViewer';

import { SKILLS_DATA, PROJECTS_DATA, TIMELINE_DATA, CERTIFICATIONS_DATA } from './data';
import { Project } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingLines, setLoadingLines] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Filter skills by category
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('All');

  // Diagnostic bootup simulation
  useEffect(() => {
    const diagnosticSequences = [
      '⚡ SYSTEM BOOTSTRAPPING DETECTED...',
      '[ OK ] Initializing core portfolio modules.',
      '[ OK ] Decompressing style variables and typography rules.',
      '[ OK ] Resolving virtual network nodes and security subnets.',
      '[ OK ] Authenticating guest secure terminal credentials.',
      '🔓 [SUCCESS] Decrypted portfolio dossier for PONMALAR.'
    ];

    diagnosticSequences.forEach((line, index) => {
      setTimeout(() => {
        setLoadingLines((prev) => [...prev, line]);
        if (index === diagnosticSequences.length - 1) {
          setTimeout(() => {
            setIsLoading(false);
          }, 600);
        }
      }, (index + 1) * 250);
    });
  }, []);

  // Track window scroll for active section selection & back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'resume', 'contact-cta'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section === 'contact-cta' ? 'contact' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'contact') {
      setIsContactOpen(true);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for fixed nav
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  const skillCategories = ['All', 'Security Tools', 'Core Cyber Concepts', 'Networking', 'Development & Labs'];
  const filteredSkills = selectedSkillCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === selectedSkillCategory);

  return (
    <div className="min-h-screen bg-cyber-black text-gray-300 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Diagnostic System Bootloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#05070c] z-50 flex flex-col justify-center items-center p-6 scanlines"
          >
            <div className="w-full max-w-lg bg-black/90 p-6 rounded-xl border border-cyan-500/20 font-mono text-xs text-cyan-400 space-y-2.5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-cyan-500/10 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-400 animate-spin" />
                  <span className="font-bold uppercase tracking-wider">CYBER_SECURE_BOOT_v2.6</span>
                </div>
                <span className="text-[10px] text-cyan-500/60 font-semibold uppercase tracking-widest animate-pulse">
                  STATUS: TRACING
                </span>
              </div>
              
              <div className="space-y-1.5 font-mono min-h-[140px] select-none text-left">
                {loadingLines.map((line, idx) => {
                  let isSuccess = line.includes('[SUCCESS]');
                  return (
                    <div
                      key={idx}
                      className={`${isSuccess ? 'text-emerald-400 font-semibold' : 'text-cyan-400/80'} leading-relaxed`}
                    >
                      &gt; {line}
                    </div>
                  );
                })}
              </div>
              
              <div className="pt-3 border-t border-cyan-500/10 text-center font-mono text-[9px] text-gray-500 uppercase tracking-widest animate-pulse">
                INITIALIZING ENCRYPTED INTERFACE
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio View */}
      {!isLoading && (
        <div className="relative">
          {/* Global Ambient Glow Nodes and Cyber Canvas */}
          <div className="absolute inset-0 w-full h-full min-h-screen pointer-events-none overflow-hidden z-0">
            <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-[120px]" />
            <div className="absolute bottom-[30%] right-[15%] w-[500px] h-[500px] bg-cyan-500/[0.02] rounded-full blur-[140px]" />
          </div>

          {/* Navigation */}
          <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

          {/* 1. Landing Page (Hero Section) */}
          <header
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden scanlines bg-gradient-to-b from-[#05070c] via-cyber-dark to-[#05070c]"
          >
            {/* Embedded Interactive Canvas Network */}
            <div className="absolute inset-0 w-full h-full z-0 opacity-40">
              <CyberCanvas />
            </div>

            {/* Futuristic Tech Grid background layer */}
            <div className="absolute inset-0 cyber-grid opacity-30 z-0 pointer-events-none" />

            {/* Target Crosshairs styling in corner */}
            <div className="absolute top-1/4 left-10 w-24 h-24 border-l border-t border-cyan-500/10 pointer-events-none hidden md:block" />
            <div className="absolute bottom-1/4 right-10 w-24 h-24 border-r border-b border-cyan-500/10 pointer-events-none hidden md:block" />

            {/* Content Card layout */}
            <div className="text-center z-10 max-w-4xl px-4 flex flex-col items-center">
              {/* Operational Security Status pill */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.1)]"
              >
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-ping" />
                <span>SECURE DISPATCH // ACTIVE PORTFOLIO</span>
              </motion.div>

              {/* Large prominent name */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', damping: 15 }}
                className="text-6xl sm:text-8xl font-display font-black text-white tracking-widest uppercase mb-4 text-glow-cyber font-sans select-none"
              >
                PONMALAR
              </motion.h1>

              {/* Technical titles */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg sm:text-2xl font-mono text-gray-300 font-medium tracking-wide max-w-2xl mb-8 leading-relaxed"
              >
                Blue Team | SOC Analyst | Cybersecurity Researcher
              </motion.p>

              {/* Animated Typing Specialties */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="text-sm sm:text-base font-mono mb-10 h-6 flex items-center gap-2 bg-[#05070c]/60 border border-cyan-950 px-4 py-2.5 rounded-lg text-gray-400"
              >
                <span>&gt; focus_area:</span>
                <TypingText
                  words={[
                    'Threat Hunting',
                    'Incident Response & DFIR',
                    'SIEM Rule Engineering',
                    'Endpoint Telemetry Auditing',
                    'Information Technology student'
                  ]}
                />
              </motion.div>

              {/* Interaction Call to Actions */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <button
                  onClick={() => scrollToSection('projects')}
                  id="hero-explore-btn"
                  className="px-6 py-3 rounded-lg font-display text-sm font-bold tracking-widest uppercase text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] cursor-pointer"
                >
                  Explore Security Labs
                </button>
                <button
                  onClick={() => setIsContactOpen(true)}
                  id="hero-contact-btn"
                  className="px-6 py-3 rounded-lg font-display text-sm font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/30 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/60 transition-all cursor-pointer"
                >
                  Establish Uplink
                </button>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              onClick={() => scrollToSection('about')}
              className="absolute bottom-8 cursor-pointer flex flex-col items-center gap-1.5 z-10"
            >
              <span className="font-mono text-[9px] text-cyan-400/70 tracking-widest uppercase select-none">
                Scroll to Triage
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="w-5 h-8 rounded-full border border-cyan-500/30 p-1 flex justify-center"
              >
                <div className="w-1 h-2 rounded-full bg-cyan-400" />
              </motion.div>
            </motion.div>
          </header>

          {/* 2. About Section */}
          <section id="about" className="py-20 md:py-28 relative border-t border-cyan-950/30 bg-[#05070c]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-cyan-950/40 pb-6">
                <div>
                  <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    SECTION_01 // IDENTITY_INTEL
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase">
                    About Analyst
                  </h2>
                </div>
                <span className="font-mono text-xs text-gray-500 mt-2 md:mt-0">
                  REF_NUM: PN-2027-IT
                </span>
              </div>

              {/* Bio & Journey layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
                
                {/* Left side: Bio description */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden scanlines">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent" />
                    
                    <h3 className="font-display font-bold text-white text-lg sm:text-xl mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-cyan-400 shrink-0" />
                      Professional Dossier
                    </h3>
                    
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                      Currently in my third year pursuing a <strong className="text-cyan-400 font-semibold">B.Tech in Information Technology</strong> (minors) at CMS College of Engineering and Technology, I am dedicated to bridging the gap between secure application architecture and real-time defense. 
                    </p>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                      My journey is fueled by hands-on security modeling, deploying endpoint telemetry aggregators, and analyzing forensic packet data. From securing GitHub credentials to correlating SSH intrusion alerts, I approach defending networks with structured, analytical vigor.
                    </p>

                    <div className="p-4 rounded-lg bg-cyan-950/20 border border-cyan-500/15 mt-6">
                      <div className="flex items-start gap-3">
                        <ShieldAlert className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-1">
                            Operational Objective
                          </h4>
                          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                            Aspiring SOC Analyst & Blue Team Researcher dedicated to fortifying corporate subnets, gathering endpoint telemetry, and implementing proactive detection rules. Seeking to leverage analytical research and secure automation scripts inside an enterprise Security Operations Center (SOC).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Active Stats Dashboard inside about */}
                  <div className="pt-2">
                    <StatsDashboard />
                  </div>
                </div>

                {/* Right side: Journey Timeline */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="glass-panel p-6 sm:p-8 rounded-2xl">
                    <h3 className="font-display font-bold text-white text-lg mb-6 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-cyan-400 shrink-0" />
                      Cybersecurity Timeline
                    </h3>

                    <div className="relative border-l-2 border-cyan-500/20 ml-3 space-y-6">
                      {TIMELINE_DATA.map((milestone, idx) => (
                        <div key={idx} className="relative pl-6 group">
                          {/* Indicator Node */}
                          <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#05070c] border-2 border-cyan-500 group-hover:bg-cyan-400 transition-colors shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                          
                          <div className="font-mono text-[10px] text-cyan-400/80 font-bold tracking-wider uppercase mb-1">
                            {milestone.year}
                          </div>
                          
                          <h4 className="font-display font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                            {milestone.title}
                          </h4>
                          
                          <p className="text-xs text-gray-400 mt-1">
                            {milestone.organization}
                          </p>
                          
                          <p className="text-xs text-gray-500 leading-relaxed mt-1.5 font-sans">
                            {milestone.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 3. Skills Section */}
          <section id="skills" className="py-20 md:py-28 bg-cyber-dark relative">
            <div className="absolute inset-0 cyber-grid-fine opacity-20 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-cyan-950/40 pb-6">
                <div>
                  <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    SECTION_02 // SYSTEM_WEAPONRY
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase">
                    Technical Skills
                  </h2>
                </div>
                
                {/* Category Filters */}
                <div className="flex flex-wrap gap-1.5 mt-4 md:mt-0">
                  {skillCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedSkillCategory(category)}
                      className={`px-3 py-1.5 rounded font-mono text-xs transition-all cursor-pointer ${
                        selectedSkillCategory === category
                          ? 'bg-cyan-500 text-black font-semibold'
                          : 'bg-cyan-950/30 text-cyan-400 hover:bg-cyan-900/40 border border-cyan-500/20'
                      }`}
                    >
                      {category === 'All' ? 'ALL_MODULES' : category.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="glass-panel p-5 rounded-xl flex flex-col justify-between hover:border-cyan-500/40 group cursor-default"
                  >
                    <div>
                      {/* Top bar info */}
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-950 text-[9px] font-mono text-cyan-400/80 uppercase">
                          {skill.category}
                        </span>
                        <span className="font-mono text-xs font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          {skill.level}%
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-white text-base mb-1.5 uppercase group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      
                      <p className="text-xs text-gray-400 leading-relaxed font-sans min-h-[40px] mb-4">
                        {skill.description}
                      </p>
                    </div>

                    {/* Progress Bar with animated loading */}
                    <div className="w-full">
                      <div className="w-full h-[3px] bg-cyan-950/55 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                          className="h-full bg-cyan-400 group-hover:bg-cyan-300 rounded-full"
                          style={{
                            boxShadow: '0 0 8px rgba(6, 182, 212, 0.6)'
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* 4. Projects Section */}
          <section id="projects" className="py-20 md:py-28 bg-[#05070c] relative">
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-cyan-950/40 pb-6">
                <div>
                  <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    SECTION_03 // OPERATIONAL_MISSIONS
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase">
                    Security Labs & Projects
                  </h2>
                </div>
                <span className="font-mono text-xs text-gray-500 mt-2 md:mt-0">
                  CLICK_CARD_TO_DECRYPT_TELEMETRY
                </span>
              </div>

              {/* Projects Grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS_DATA.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    onClick={() => setSelectedProject(project)}
                    className="glass-panel p-5 rounded-2xl hover:border-cyan-500/40 flex flex-col justify-between group cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-1 select-none shadow-xl"
                  >
                    {/* Corner laser glow line */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      {/* Category and Metrics header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-0.5 text-[9px] font-mono rounded bg-cyan-950/50 border border-cyan-950 text-cyan-400 uppercase">
                          {project.category}
                        </span>
                        
                        {project.metric && (
                          <span className="font-mono text-[9px] text-emerald-400 font-bold border border-emerald-950 rounded px-1.5 py-0.5 bg-emerald-950/20">
                            {project.metric.label}: {project.metric.value}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display font-bold text-white text-lg mb-2.5 uppercase group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs text-gray-400 font-sans leading-relaxed min-h-[50px] mb-5">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Bottom bar inside project card */}
                    <div className="pt-4 border-t border-cyan-950/60 mt-4 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1 max-w-[80%]">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-cyan-950/20 text-gray-400 border border-transparent">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-[9px] font-mono text-cyan-500/60 font-bold">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <span className="text-cyan-400 group-hover:text-cyan-300 font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                        VIEW &gt;
                      </span>
                    </div>

                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* 5. Certifications Section */}
          <section id="certifications" className="py-20 md:py-28 bg-cyber-dark relative border-t border-cyan-950/30">
            <div className="absolute inset-0 cyber-grid-fine opacity-20 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-cyan-950/40 pb-6">
                <div>
                  <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    SECTION_04 // VERIFIED_CREDENTIALS
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase">
                    Certifications & Participation
                  </h2>
                </div>
                <span className="font-mono text-xs text-gray-500 mt-2 md:mt-0">
                  ACADEMIC_&_HACKATHON_HONORS
                </span>
              </div>

              {/* Grid of Certs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CERTIFICATIONS_DATA.map((cert, idx) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-panel p-6 rounded-2xl relative overflow-hidden flex flex-col sm:flex-row gap-5 hover:border-cyan-500/40 group cursor-default"
                  >
                    {/* Badge Column icon */}
                    <div className="flex sm:flex-col justify-start items-center gap-3 shrink-0">
                      <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:border-cyan-400 transition-all">
                        {cert.badgeType === 'trophy' && <Award className="w-7 h-7" />}
                        {cert.badgeType === 'medal' && <Award className="w-7 h-7 text-amber-400" />}
                        {cert.badgeType === 'shield' && <Shield className="w-7 h-7 text-cyan-400" />}
                        {cert.badgeType === 'cert' && <FileText className="w-7 h-7" />}
                      </div>
                      <span className="font-mono text-[9px] text-cyan-500/60 font-semibold uppercase tracking-wider hidden sm:block">
                        ID: 0{idx + 1}
                      </span>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wide">
                          {cert.issuer}
                        </span>
                        <span className="font-mono text-[10px] text-gray-500 font-bold">
                          {cert.date}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-white text-base uppercase leading-tight group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h3>

                      <p className="text-xs text-gray-400 leading-relaxed font-sans pb-2">
                        {cert.description}
                      </p>

                      {/* Verified details tags */}
                      <div className="pt-2.5 border-t border-cyan-950/40 flex flex-wrap gap-1.5">
                        {cert.skillsVerified.map((sk) => (
                          <span key={sk} className="px-2 py-0.5 text-[9px] font-mono rounded bg-cyan-950/35 text-gray-300 border border-transparent">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* 6. Resume Section */}
          <section id="resume" className="py-20 md:py-28 bg-[#05070c] relative">
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-cyan-950/40 pb-6">
                <div>
                  <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    SECTION_05 // INTERACTIVE_DOSSIER
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase">
                    Professional Resume
                  </h2>
                </div>
                <span className="font-mono text-xs text-gray-500 mt-2 md:mt-0">
                  PRINT_OR_DOWNLOAD_RAW_DOSSIER
                </span>
              </div>

              {/* Dynamic Interactive Document Viewer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <ResumeViewer />
              </motion.div>

            </div>
          </section>

          {/* 7. Contact CTA & Footer Section */}
          <section id="contact-cta" className="py-20 md:py-28 bg-gradient-to-t from-cyber-black via-cyber-dark to-[#05070c] relative overflow-hidden scanlines">
            {/* Target laser lines overlay */}
            <div className="absolute inset-0 cyber-grid opacity-15" />
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                  <Server className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                  <span>UPLINK SOCKET // CLOSED PORT LISTENING</span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
                  Establish Connection
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
                  Ready to deploy analytical threat hunting systems, triage complex endpoint alerts, or explore summer security operations roles. Submit an encrypted telemetry package or reach out through permanent security channels.
                </p>

                <div className="pt-6">
                  <button
                    onClick={() => setIsContactOpen(true)}
                    id="trigger-contact-panel-cta"
                    className="px-8 py-4 rounded-xl font-display font-bold text-sm tracking-widest uppercase text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.65)] hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Secure Dispatch</span>
                  </button>
                </div>
              </div>

              {/* Coordinates Grid */}
              <div className="mt-16 pt-10 border-t border-cyan-500/10 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-gray-400">
                <div className="flex flex-col items-center p-4 rounded bg-cyan-950/10 border border-cyan-950">
                  <span className="text-[10px] text-cyan-500/60 uppercase mb-1">SECURE_MAIL</span>
                  <a href="mailto:ponmalars25@gmail.com" className="text-gray-200 hover:text-cyan-400 transition-colors">
                    ponmalars25@gmail.com
                  </a>
                </div>
                
                <div className="flex flex-col items-center p-4 rounded bg-cyan-950/10 border border-cyan-950">
                  <span className="text-[10px] text-cyan-500/60 uppercase mb-1">LINKEDIN_STATION</span>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-cyan-400 transition-colors">
                    linkedin.com/in/ponmalar-s
                  </a>
                </div>

                <div className="flex flex-col items-center p-4 rounded bg-cyan-950/10 border border-cyan-950">
                  <span className="text-[10px] text-cyan-500/60 uppercase mb-1">GITHUB_INTELLIGENCE</span>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-cyan-400 transition-colors">
                    github.com/ponmalar
                  </a>
                </div>
              </div>

              {/* Real Professional footer */}
              <footer className="mt-20 pt-8 border-t border-cyan-950/60 text-center font-mono text-[10px] text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p>
                  &copy; {new Date().getFullYear()} PONMALAR. All rights reserved. // SECURE TRANSMISSIONS MONITORED
                </p>
                <div className="flex gap-4">
                  <span className="text-[9px] px-2 py-0.5 rounded bg-cyan-950/30 border border-cyan-950 text-cyan-500/70">
                    STATUS: ACTIVE DEFENSE
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-cyan-950/30 border border-cyan-950 text-cyan-500/70">
                    PORT: 3000
                  </span>
                </div>
              </footer>

            </div>
          </section>

          {/* Project Details Modal */}
          <AnimatePresence>
            {selectedProject && (
              <ProjectDetailModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </AnimatePresence>

          {/* Secure Uplink Contact Drawer */}
          <ContactPanel
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />

          {/* Floating Action: Back to top button */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                id="back-to-top-floating"
                className="fixed bottom-6 right-6 p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/35 text-cyan-400 hover:text-black hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all z-30 cursor-pointer shadow-lg"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

        </div>
      )}
    </div>
  );
}
