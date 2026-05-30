import React from 'react';
import { movies } from '../data';
import { motion } from 'motion/react';

export const MovieHub: React.FC = () => {
  return (
    <section id="movies" className="relative py-32 px-6 bg-zinc-900/40 z-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">The Films</h2>
          <p className="text-zinc-400 font-light tracking-wide">A cinematic journey across 8 magical chapters</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {movies.map((movie, idx) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-potter-emerald/60 transition-all duration-500 shadow-xl"
            >
              <div className="aspect-[2/3] overflow-hidden bg-black cursor-pointer">
                <img 
                   src={movie.imageUrl} 
                   alt={movie.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-30"
                   loading="lazy"
                />
              </div>
              
              {/* Default State (Year & Title at bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-potter-gold font-serif text-lg mb-1">{movie.year}</p>
              </div>

              {/* Hover State Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <p className="text-potter-gold font-serif text-2xl mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{movie.year}</p>
                <h3 className="font-serif text-white text-lg md:text-base lg:text-lg mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 leading-tight">{movie.title}</h3>
                <p className="text-potter-emerald text-xs tracking-widest uppercase mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Dir. {movie.director}</p>
                <p className="text-zinc-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 line-clamp-4">{movie.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
