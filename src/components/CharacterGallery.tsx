import React, { useState } from 'react';
import { characters } from '../data';
import { Character } from '../types';
import { Modal } from './Modal';
import { motion } from 'motion/react';

export const CharacterGallery: React.FC = () => {
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  // Helper for house colors
  const getHouseColor = (house: string) => {
    switch (house) {
      case 'Gryffindor': return 'text-red-500 border-red-500/30';
      case 'Slytherin': return 'text-emerald-500 border-emerald-500/30';
      case 'Ravenclaw': return 'text-blue-500 border-blue-500/30';
      case 'Hufflepuff': return 'text-yellow-500 border-yellow-500/30';
      default: return 'text-zinc-400 border-zinc-400/30';
    }
  };

  return (
    <section id="characters" className="relative py-32 px-6 bg-zinc-950/80 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Notable Characters</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-potter-gold to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((char, index) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedChar(char)}
              className="group cursor-pointer relative overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:border-potter-gold/50 transition-all duration-500 shadow-lg hover:shadow-potter-gold/10"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={char.imageUrl} 
                  alt={char.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className={`text-xs uppercase tracking-widest font-semibold mb-2 ${getHouseColor(char.house).split(' ')[0]}`}>
                  {char.house}
                </p>
                <h3 className="font-serif text-2xl text-white mb-1 group-hover:text-potter-gold transition-colors duration-300">
                  {char.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedChar} onClose={() => setSelectedChar(null)}>
        {selectedChar && (
          <div className="flex flex-col md:flex-row h-full max-h-[85vh] overflow-y-auto">
            <div className="md:w-1/2 h-64 md:h-auto">
               <img src={selectedChar.imageUrl} alt={selectedChar.name} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-zinc-900 relative">
                
                {/* House watermark */}
                <div className="absolute right-0 top-0 opacity-[0.03] text-[150px] font-serif uppercase select-none pointer-events-none -translate-y-12 translate-x-8">
                  {selectedChar.house.charAt(0)}
                </div>

                <span className={`inline-block px-3 py-1 border rounded-full text-xs tracking-widest uppercase mb-4 w-max relative z-10 ${getHouseColor(selectedChar.house)}`}>
                  {selectedChar.house}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-2 relative z-10">{selectedChar.name}</h2>
                <p className="text-potter-gold text-sm tracking-wider uppercase mb-6 border-b border-white/10 pb-4 relative z-10">{selectedChar.role}</p>
                <p className="text-zinc-400 font-light leading-relaxed relative z-10">{selectedChar.summary}</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
