import React from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CharacterGallery } from './components/CharacterGallery';
import { MovieHub } from './components/MovieHub';
import { LoreSection } from './components/LoreSection';

export default function App() {
  return (
    <div className="min-h-screen bg-potter-dark text-white selection:bg-potter-gold selection:text-black font-sans relative">
      <ParticleBackground />
      <Navbar />
      
      <main>
        <Hero />
        <CharacterGallery />
        <MovieHub />
        <LoreSection />
      </main>

      <footer className="relative z-10 bg-black pt-16 pb-8 border-t border-white/5 text-center">
        <p className="font-serif text-xl tracking-[0.2em] text-zinc-500 mb-4 uppercase">Cinematic Archive</p>
        <div className="w-12 h-[1px] bg-zinc-800 mx-auto mb-4"></div>
        <p className="text-zinc-600 font-light text-sm px-4">
          A high-end interface tribute to the Wizarding World.<br className="hidden md:block"/> Made by Syed Ahsan Anzar.
        </p>
      </footer>
    </div>
  );
}
