import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cyber-black/85 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-950/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Brand */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleItemClick('home')}>
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 group">
              <div className="absolute inset-0 rounded-lg bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <Shield className="w-5 h-5 text-cyan-400 animate-pulse group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base tracking-wider uppercase">
                PONMALAR
              </span>
              <span className="font-mono text-[9px] text-cyan-400/80 tracking-widest leading-none flex items-center gap-1">
                <Terminal className="w-2.5 h-2.5" /> SEC_ANALYST
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`relative px-4 py-2 rounded-md font-display text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-cyan-400 font-bold bg-cyan-950/35 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.1)]'
                      : 'text-gray-400 hover:text-white border border-transparent hover:bg-cyan-950/10 hover:border-cyan-500/10'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded bg-cyan-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-nav-toggle"
              className="p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-cyan-950/20 border border-transparent hover:border-cyan-500/20 transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden bg-cyber-black/95 backdrop-blur-lg border-b border-cyan-500/20">
          <div className="px-2 pt-2 pb-4 space-y-1.5 sm:px-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-md font-display text-base font-medium transition-all ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border-l-4 border-cyan-400 font-bold'
                      : 'text-gray-300 hover:text-white hover:bg-cyan-950/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
