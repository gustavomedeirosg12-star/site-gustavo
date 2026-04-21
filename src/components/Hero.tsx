import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { SplitText, MagneticButton, WHATSAPP_URL } from './Shared';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Interactive Volumetric Light Follower
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 25, stiffness: 50, mass: 0.5 };
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    smoothX.set(e.clientX - left);
    smoothY.set(e.clientY - top);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden z-10 w-full bg-[#020202]"
    >
      {/* Interactive WebGL-like Volumetric Lighting */}
      <motion.div
        style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-gold rounded-full mix-blend-screen pointer-events-none hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-gold rounded-full mix-blend-screen opacity-5 pointer-events-none hidden md:block blur-[150px]"
      />

      {/* Soft radial orbs for luxury feel */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.10, 0.15, 0.10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-gold/20 rounded-full blur-[150px] mix-blend-screen"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px] mix-blend-screen"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 mt-16 relative z-20 flex flex-col lg:flex-row items-center justify-between">
        
        <div className="w-full lg:w-[65%] text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              <span className="text-brand-gray text-[11px] font-bold uppercase tracking-[0.2em]">Otimização & Estratégia</span>
            </div>
            <div className="w-8 h-[1px] bg-brand-gold/30"></div>
            <span className="text-brand-gold text-[11px] font-bold uppercase tracking-[0.2em]">Tráfego Pago</span>
          </motion.div>
          
          {/* Static premium text instead of buggy gradient */}
          <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] font-heading font-light leading-[0.95] text-white mb-10 tracking-tight">
            <SplitText delay={1.0}>Converto</SplitText> <br/>
            <span className="text-brand-gold italic pr-4">
              <SplitText delay={1.4}>Cliques</SplitText>
            </span> <br/>
            <SplitText delay={1.8}>em Clientes.</SplitText>
          </h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-brand-gray max-w-xl mb-12 font-body font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.3 }}
          >
            Seu negócio não precisa de mais "visibilidade". Precisa de um ecossistema online de alta conversão que coloca dinheiro no seu bolso.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <MagneticButton 
              href={WHATSAPP_URL}
              className="group relative px-10 py-5 bg-brand-gold text-brand-black rounded-sm overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full -ml-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
              <span className="relative flex items-center justify-center gap-3">
                <span className="text-sm font-bold uppercase tracking-widest">Transformar Meu Negócio</span>
              </span>
            </MagneticButton>
            
            <a 
              href="#resultados"
              className="text-brand-gray text-xs font-bold uppercase tracking-[0.15em] hover:text-white transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:-bottom-2 after:left-0 after:bg-brand-gold hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-500 w-full sm:w-auto text-center"
            >
              Ver Resultados
            </a>
          </motion.div>
        </div>

        {/* Minimal graphic element instead of the big circle */}
        <div className="hidden lg:flex w-[35%] justify-end items-center pointer-events-none">
           <motion.div 
              className="grid grid-cols-5 gap-4 opacity-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 2, duration: 2 }}
           >
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-[3px] h-[3px] rounded-full bg-brand-gold" />
              ))}
           </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-12 left-6 sm:left-12 lg:left-[60%] lg:-translate-x-1/2 text-brand-gray flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] rotate-90 sm:rotate-0 mb-8 sm:mb-0">Descer</span>
        <motion.div 
          animate={{ height: [0, 80, 0], y: [0, 40, 80] }} 
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-20 relative overflow-hidden hidden sm:block"
        >
          <div className="w-full bg-gradient-to-b from-brand-gold to-transparent h-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};
