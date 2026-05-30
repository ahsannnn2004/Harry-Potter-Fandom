import React from 'react';
import { loreItems } from '../data';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, Wand2 } from 'lucide-react';

export const LoreSection: React.FC = () => {
  return (
    <section id="lore" className="relative py-32 px-6 bg-[#090a0f] z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-24"
        >
          <BookOpen className="text-potter-gold mx-auto mb-6 opacity-80" size={36} strokeWidth={1.5} />
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">World of Potter</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-potter-emerald to-transparent mx-auto"></div>
        </motion.div>

        <div className="space-y-24">
          {loreItems.map((item, idx) => (
            <motion.div 
               key={item.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="relative group"
            >
              {/* Vertical connector line between items */}
              {idx !== loreItems.length - 1 && (
                <div className="absolute left-8 top-16 bottom-[-96px] w-[1px] bg-gradient-to-b from-white/10 to-transparent hidden md:block" />
              )}
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-potter-gold group-hover:border-potter-gold/30 group-hover:bg-potter-gold/5 transition-all duration-700 bg-zinc-900 shadow-xl relative z-10">
                   {item.iconType === 'wand' ? <Wand2 size={24} /> : item.iconType === 'potion' ? <Sparkles size={24} /> : <BookOpen size={24} />}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 group-hover:text-potter-emerald transition-colors duration-500">{item.title}</h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-lg">{item.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
