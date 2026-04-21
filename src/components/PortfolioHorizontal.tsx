import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { AnimTitle } from './Shared';

const PortfolioCard = ({ title, desc, tag }: { title: string, desc: string, tag: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotateYVal = ((mouseX / width) - 0.5) * 20; 
    const rotateXVal = ((mouseY / height) - 0.5) * -20;
    
    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="group relative p-8 w-[85vw] sm:w-[500px] h-96 rounded-2xl glassmorphism overflow-hidden flex flex-col justify-end transition-transform duration-200 ease-out will-change-transform cursor-pointer flex-shrink-0 mr-8"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent z-10 pointer-events-none" />
      
      {/* "Ver Projeto" overlay on hover */}
      <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm bg-brand-black/40">
         <span className="text-brand-gold font-heading text-2xl font-bold tracking-wider drop-shadow-lg">Ver Projeto</span>
      </div>

      <div className="relative z-20 transform translate-y-4 group-hover:translate-y-8 transition-transform duration-500 group-hover:opacity-0">
        <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-medium uppercase tracking-wider rounded-md mb-4 border border-brand-gold/20">
          {tag}
        </span>
        <h3 className="text-3xl font-heading text-white mb-2">{title}</h3>
        <p className="text-brand-gray text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export const PortfolioHorizontal = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} id="resultados" className="relative h-[300vh] bg-brand-black z-10 w-full">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="w-full max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div className="max-w-2xl">
            <AnimTitle className="text-3xl md:text-5xl mb-4">Resultados Reais</AnimTitle>
            <p className="text-brand-gray text-lg">Site bonito não paga as contas. Estes negócios mudaram o jogo quando pararam de confiar só em indicação e passaram a dominar o Google.</p>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))] pb-10">
          <PortfolioCard 
            tag="Manicure"
            title="Agenda Cheia"
            desc="Manicure que agora recebe clientes via WhatsApp todos os dias sem depender de sala de espera ou indicações."
          />
          <PortfolioCard 
            tag="Ar Condicionado"
            title="Orçamentos Constantes"
            desc="De freelancer invisível para a principal escolha da região em manutenção e instalação no verão."
          />
          <PortfolioCard 
            tag="Relojoaria"
            title="Autoridade Local"
            desc="Consertos de alto valor e vendas de marcas premium multiplicadas por 3x após presença profissional online."
          />
          <PortfolioCard 
            tag="Confeitaria"
            title="Pedidos Automáticos"
            desc="Bolos e doces por encomenda esgotando agendas para o mês inteiro via tráfego qualificado."
          />
        </motion.div>
      </div>
    </section>
  );
};
