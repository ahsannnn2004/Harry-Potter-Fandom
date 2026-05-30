import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden z-10 text-center">
      
      {/* Soft gradient overlay for atmospheric depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090a0f]/50 to-[#090a0f] z-0" />

      <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-potter-gold uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6"
        >
          Discover The Magic
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-wider leading-tight drop-shadow-2xl mb-8"
        >
          The Cinematic <br />
          <span className="text-zinc-400 italic font-light drop-shadow-none">Journey</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed mb-12"
        >
          Explore the characters, lore, and films that defined a generation. 
          A visual archive honoring the dark, magical atmosphere of the Harry Potter saga.
        </motion.p>

        <motion.a
          href="#characters"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-potter-gold/50 rounded-full text-white uppercase tracking-widest text-sm font-medium transition-all duration-300 glass-btn group"
        >
          Enter the Archive
          <ChevronDown size={16} className="text-potter-gold group-hover:translate-y-1 transition-transform duration-300" />
        </motion.a>
        
      </div>

    </section>
  );
};
