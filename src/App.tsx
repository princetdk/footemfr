import React, { useState } from 'react';
import { Menu, X, Globe, Mail, Newspaper, ArrowRight, Play, Triangle } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,82,255,0.08),rgba(255,255,255,0))] font-sans overflow-x-hidden text-white pb-16">
      
      {/* --- TOP NAVBAR --- */}
      <header className="w-full max-w-5xl mx-auto px-6 h-20 flex items-center justify-between border-b border-white/[0.03]">
        <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold hover:text-[#0052ff] transition-colors group">
          <Triangle className="w-3 h-3 fill-current rotate-180 group-hover:scale-110 transition-transform" />
          <span>Home</span>
        </button>

        {/* Desktop Menu Icon Toggle Placeholder */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Toggle navigation drawer"
        >
          {mobileMenuOpen ? <X className="w-6 " /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
        </button>
      </header>

      {/* --- MOBILE/SIDE NAVIGATION DRAWER --- */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0d0d0d] border-b border-white/[0.05] z-50 animate-fade-in px-6 py-4 flex flex-col gap-3">
          <a href="#links" onClick={() => setMobileMenuOpen(false)} className="py-2 text-sm text-gray-400 hover:text-white flex items-center justify-between">
            <span>Mes Liens</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 text-sm text-gray-400 hover:text-white flex items-center justify-between">
            <span>Contactez-moi</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#actus" onClick={() => setMobileMenuOpen(false)} className="py-2 text-sm text-gray-400 hover:text-white flex items-center justify-between">
            <span>Actus</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* --- HERO BRANDING CONTAINER --- */}
      <main className="w-full max-w-xl mx-auto px-4 pt-10 text-center flex flex-col items-center">
        {/* Custom Blue F-Logo Badge */}
        <div className="w-20 h-20 rounded-full border-[3px] border-[#0052ff] flex items-center justify-center bg-[#070707] shadow-[0_0_40px_rgba(0,82,255,0.15)] mb-6 transition-transform hover:rotate-3">
          <span className="text-4xl font-extrabold tracking-tighter text-white italic relative select-none">
            F
            <span className="absolute -bottom-0.5 -right-1 text-xs text-[#0052ff] font-bold not-italic">.</span>
          </span>
        </div>

        <h1 className="text-2xl font-black uppercase tracking-wider text-white mb-2">
          FOOTEM-FR
        </h1>
        
        <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5 justify-center mb-10">
          Là où le football ne dort jamais. <span>⚽</span>
        </p>

        {/* --- ACTUALITÉ MODULE CARD --- */}
        <div className="w-full bg-[#0052ff] rounded-3xl p-8 text-left shadow-[0_20px_50px_rgba(0,82,255,0.25)] relative overflow-hidden group mb-6">
          <h2 className="text-xl font-black tracking-wider uppercase text-white mb-5 select-none">
            ACTUALITÉ
          </h2>

          {/* Dotted Border Area Box */}
          <div className="w-full aspect-[4/3] rounded-2xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center relative bg-black/5 hover:bg-black/10 transition-colors cursor-pointer">
            <span className="text-xs font-semibold text-white/50 tracking-wider uppercase select-none">
              No media
            </span>
            
            {/* Overlay link call to action */}
            <span className="absolute bottom-4 text-[10px] font-black tracking-widest text-white/80 uppercase bg-white/10 px-3 py-1.5 rounded-full border border-white/15 backdrop-blur-sm group-hover:scale-105 transition-transform">
              ⚡ CLIQUE ICI !
            </span>
          </div>
        </div>

        {/* --- INTERACTIVE ACTION BUTTON LIST --- */}
        <div id="links" className="w-full flex flex-col gap-3">
          
          {/* Link Element 1 */}
          <a href="#" className="w-full bg-[#111111]/80 hover:bg-[#161616] border border-white/[0.04] hover:border-white/[0.08] rounded-2xl p-4 flex items-center justify-between group transition-all duration-200">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0052ff]/10 flex items-center justify-center text-[#0052ff]">
                <Globe className="w-4 h-4 stroke-[2]" />
              </div>
              <span className="text-xs font-bold tracking-wider uppercase">MES LIENS</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>

          {/* Link Element 2 */}
          <a id="contact" href="#" className="w-full bg-[#111111]/80 hover:bg-[#161616] border border-white/[0.04] hover:border-white/[0.08] rounded-2xl p-4 flex items-center justify-between group transition-all duration-200">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0052ff]/10 flex items-center justify-center text-[#0052ff]">
                <Mail className="w-4 h-4 stroke-[2]" />
              </div>
              <span className="text-xs font-bold tracking-wider uppercase">CONTACTEZ-MOI</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>

          {/* Link Element 3 */}
          <a id="actus" href="#" className="w-full bg-[#111111]/80 hover:bg-[#161616] border border-white/[0.04] hover:border-white/[0.08] rounded-2xl p-4 flex items-center justify-between group transition-all duration-200">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0052ff]/10 flex items-center justify-center text-[#0052ff]">
                <Newspaper className="w-4 h-4 stroke-[2]" />
              </div>
              <span className="text-xs font-bold tracking-wider uppercase">ACTUS</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>

          {/* Special World Cup Footer Entry Banner */}
          <div className="w-full bg-gradient-to-r from-[#0d0d0d] to-[#121212] border border-white/[0.03] rounded-2xl p-4 flex items-center justify-between mt-4">
            <span className="text-[11px] font-black tracking-widest text-[#0052ff] italic uppercase">
              COUPE DU MONDE 2026
            </span>
            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/40 cursor-pointer hover:bg-[#0052ff] hover:text-white transition-colors">
              <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
            </div>
          </div>

        </div>
      </main>

      {/* Tiny subtle watermark container bottom layout decoration */}
      <footer className="w-full text-center mt-12 opacity-25 hover:opacity-50 transition-opacity">
        <span className="text-[10px] font-medium tracking-tight">Footem-FR Clone Application Template</span>
      </footer>
    </div>
  );
}
