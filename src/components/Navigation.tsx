import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { WHATSAPP_URL } from './Shared';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(8, 8, 8, 0)', 'rgba(8, 8, 8, 0.85)']
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ['rgba(201, 168, 76, 0)', 'rgba(201, 168, 76, 0.1)']
  );

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1, y: 0, transition: { delay: 0.3 + i * 0.1, duration: 0.5 }
    })
  };

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 transition-all"
        style={{ backgroundColor, backdropFilter, borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: borderBottom }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-bold font-heading tracking-tight flex items-center gap-2 text-white z-50 relative"
          >
            <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
            Gustavo Enrique
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
             <motion.a 
              href="#portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm text-brand-gray hover:text-white transition-colors"
            >
              Resultados
            </motion.a>
            <motion.a 
              href="#about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm text-brand-gray hover:text-white transition-colors"
            >
              Sobre
            </motion.a>
            <motion.a 
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm font-medium text-brand-gold hover:text-white transition-colors uppercase tracking-widest relative"
            >
              Iniciar Projeto
            </motion.a>
          </div>

          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:hidden z-50 text-white relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white transition-transform" />
            <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-white transition-opacity" />
            <motion.div animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white transition-transform" />
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-brand-black z-40 flex flex-col justify-center items-center px-6"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="flex flex-col gap-8 text-center">
               {['Resultados', 'Processo', 'Sobre', 'Dúvidas'].map((item, i) => (
                  <motion.a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    custom={i}
                    variants={linkVariants}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-heading text-white hover:text-brand-gold transition-colors"
                  >
                    {item}
                  </motion.a>
               ))}
               
               <motion.a
                custom={4}
                variants={linkVariants}
                href={WHATSAPP_URL}
                target="_blank" rel="noopener noreferrer"
                className="mt-8 px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-lg text-lg"
               >
                 Quero Vender Mais
               </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
