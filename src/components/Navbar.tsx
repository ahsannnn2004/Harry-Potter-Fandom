import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Film, Users, BookOpen } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Characters', icon: <Users size={18} />, href: '#characters' },
    { name: 'The Films', icon: <Film size={18} />, href: '#movies' },
    { name: 'Lore', icon: <BookOpen size={18} />, href: '#lore' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          <Sparkles className="text-potter-gold transition-transform duration-700 group-hover:rotate-180" size={24} />
          <span className="font-serif text-xl tracking-widest text-white uppercase group-hover:text-potter-gold transition-colors duration-300">
            Wizarding <span className="text-white/60">World</span>
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300 font-medium"
            >
              <span className="text-potter-emerald/70 group-hover:text-potter-gold transition-colors duration-300">
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </motion.nav>
  );
};
