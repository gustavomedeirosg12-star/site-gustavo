import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'motion/react';
import { WHATSAPP_URL } from './components/Shared';
import { NavBar } from './components/Navigation';
import { HeroSection } from './components/Hero';
import { PainSection, SolutionSection, NumbersSection, AboutSection, FinalCTA } from './components/OtherSections';
import { PortfolioHorizontal } from './components/PortfolioHorizontal';
import { FAQSection } from './components/FAQ';

const WhatsAppFloat = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank" rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all outline-none"
    >
      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 3 }}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </motion.div>
    </motion.a>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      if (window.getComputedStyle(target).cursor === 'pointer' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="bg-brand-black min-h-[100dvh] font-body text-white selection:bg-brand-gold selection:text-black">
      <div className="noise-overlay text-white"></div>
      
      {/* Scroll Progress Line */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      {/* Scroll Connection Golden Line along left edge */}
      <motion.div 
        className="fixed top-0 left-2 md:left-6 w-px bg-brand-gold z-[45] origin-top hidden md:block"
        style={{ scaleY: scrollYProgress, height: '100vh' }}
      />

      {/* Global Custom Cursor */}
       <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-brand-gold rounded-full pointer-events-none z-[100] md:flex items-center justify-center mix-blend-difference hidden"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <motion.div className="w-1.5 h-1.5 bg-brand-gold rounded-full" animate={{ scale: isHovering ? 0 : 1 }} />
      </motion.div>

      <NavBar />
      
      <main className="relative">
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <NumbersSection />
        <PortfolioHorizontal />
        <AboutSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <WhatsAppFloat />

      <footer className="bg-brand-black text-brand-gray py-12 px-6 text-center text-sm relative z-10 overflow-hidden">
        {/* Animated footer line */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-4">
             <a href="#" className="hover:text-brand-gold hover:scale-110 transition-all font-heading tracking-widest uppercase text-xs">Instagram</a>
             <a href="#" className="hover:text-brand-gold hover:scale-110 transition-all font-heading tracking-widest uppercase text-xs">LinkedIn</a>
          </div>
          <div>
            <p>© {new Date().getFullYear()} Gustavo Enrique. Todos os direitos reservados.</p>
            <p className="mt-2 text-xs opacity-50">Inimigo do marketing que não paga boleto.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
