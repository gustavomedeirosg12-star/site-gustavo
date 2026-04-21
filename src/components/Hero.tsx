import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { SplitText, MagneticButton, WHATSAPP_URL } from './Shared';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden z-10 w-full bg-brand-black">
      {/* Split screen background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-brand-black z-10 clip-diagonal w-[120%] lg:w-[65%]" />
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[45%] bg-gradient-to-bl from-brand-gold/10 via-brand-gold/5 to-transparent z-0" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 pt-20 relative z-20 flex flex-col lg:flex-row items-center justify-between">
        
        <div className="w-full lg:w-[55%] text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-sm font-medium mb-8 uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            Inimigo do marketing que não paga boleto
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-medium leading-[1.1] text-white mb-8">
            <SplitText delay={1.0}>Converto</SplitText> <br/>
            <span className="text-transparent bg-clip-text animate-gradient-text bg-gradient-to-r from-brand-gold via-white to-brand-gold">
              <SplitText delay={1.4}>Cliques</SplitText>
            </span> <br/>
            <SplitText delay={1.8}>em Clientes.</SplitText>
          </h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-brand-gray max-w-xl mb-12 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            Seu negócio não precisa de mais &quot;visibilidade&quot;. Precisa de um site de alta conversão que coloca dinheiro no seu bolso, pronto em 48h.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <MagneticButton 
              href={WHATSAPP_URL}
              className="group relative px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 will-change-transform shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_40px_rgba(201,168,76,0.6)] w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full -ml-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
              <span className="relative flex items-center justify-center gap-2 text-lg">
                <MessageCircle className="w-5 h-5" />
                Quero Vender Mais
              </span>
            </MagneticButton>
            
            <a 
              href="#portfolio"
              className="text-brand-gray hover:text-white transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-brand-gold hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300 w-full sm:w-auto text-center py-2"
            >
              Ver Resultados
            </a>
          </motion.div>
        </div>

        {/* Golden geometric decorative elements on right sidebar */}
        <div className="hidden lg:block w-[40%] relative h-[60vh] pointer-events-none">
           <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="absolute top-1/4 right-0 w-[400px] h-[400px] border border-brand-gold rounded-full"
           />
           <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="absolute top-[30%] right-[10%] w-[300px] h-[300px] border border-brand-gold rounded-full"
           />
           <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "40%", opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute bottom-0 right-[25%] w-px bg-brand-gold"
           />
           <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute top-1/2 left-1/4 grid grid-cols-4 gap-2"
           >
             {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-brand-gold" />
             ))}
           </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-6 sm:left-12 lg:left-[55%] lg:-translate-x-1/2 text-brand-gray flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest rotate-90 sm:rotate-0 mb-4 sm:mb-0">Descer</span>
        <motion.div 
          animate={{ height: [0, 60, 0], y: [0, 30, 60] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-16 relative overflow-hidden hidden sm:block"
        >
          <div className="w-px bg-gradient-to-b from-brand-gold to-transparent h-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};
