import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { AnimTitle, WHATSAPP_URL } from './Shared';
import { playAudio } from '../lib/audio';

const PortfolioCard = ({ id, title, desc, tag, image, onClick }: { id: string, title: string, desc: string, tag: string, image: string, onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotateYVal = ((mouseX / width) - 0.5) * 10; 
    const rotateXVal = ((mouseY / height) - 0.5) * -10;
    
    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layoutId={`card-${id}`}
      ref={ref}
      data-cursor="VER PROJETO"
      onClick={() => {
        playAudio.playClick();
        playAudio.playModal();
        onClick();
      }}
      onMouseEnter={() => playAudio.playHover()}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="group relative p-8 w-full h-[500px] md:h-[600px] rounded-sm overflow-hidden flex flex-col justify-end transition-transform duration-200 ease-out will-change-transform cursor-pointer border border-white/5 bg-[#080808] outline-none"
    >
      <motion.div layoutId={`image-${id}`} style={{ y, scale: 1.25 }} className="absolute inset-0 z-0 h-[130%] -top-[15%]">
        <img src={`${image}&fm=avif&q=80`} loading="lazy" decoding="async" alt={title} className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      <motion.div layoutId={`text-container-${id}`} className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <motion.span layoutId={`tag-${id}`} className="inline-block text-brand-gray text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
          {tag}
        </motion.span>
        <motion.h3 layoutId={`title-${id}`} className="text-3xl lg:text-4xl font-heading text-white mb-2 leading-tight">{title}</motion.h3>
        <motion.p layoutId={`desc-${id}`} className="text-brand-gray text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light pr-4 max-w-[80%]">
          {desc}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export const PortfolioGrid = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const projects = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop",
      tag: "Manicure",
      title: "Agenda Cheia",
      desc: "Manicure que agora recebe clientes via WhatsApp todos os dias sem depender de sala de espera ou indicações.",
      fullDesc: "Antes, nossa cliente dependia exclusivamente de pessoas passando na rua e algumas indicações boca-a-boca. O faturamento era imprevisível. Desenvolvemos uma Landing Page focada em agendamento rápido via WhatsApp e configuramos campanhas no Google Ads para buscas locais. Resultado: Agenda lotada com 2 a 3 dias de antecedência constantemente."
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1000&auto=format&fit=crop",
      tag: "Relojoaria",
      title: "Autoridade Local",
      desc: "Consertos de alto valor e vendas de marcas premium multiplicadas por 3x após presença profissional online.",
      fullDesc: "Uma relojoaria tradicional perdendo espaço para lojas de shopping. O objetivo era atrair o público de alta renda procurando reparos em Rolex e Omega. O novo site transmitiu a herança e o luxo da marca, enquanto o SEO local dominou a pesquisa 'conserto relógios de luxo'. O ticket médio de serviço triplicou em 4 meses."
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1502672260266-1c1c67410312?q=80&w=1000&auto=format&fit=crop",
      tag: "Ar Condicionado",
      title: "Orçamentos Constantes",
      desc: "De freelancer invisível para a principal escolha da região em manutenção e instalação no verão.",
      fullDesc: "Sofrendo com a sazonalidade e concorrentes que cobravam menos, este técnico precisava se posicionar como especialista, não quebra-galho. O tráfego pago focado em 'manutenção urgente' e um site de alta credibilidade criaram um fluxo previsível de orçamentos, permitindo até a contratação de equipe auxiliar."
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1000&auto=format&fit=crop",
      tag: "Confeitaria",
      title: "Pedidos Automáticos",
      desc: "Bolos e doces por encomenda esgotando agendas para o mês inteiro via tráfego qualificado.",
      fullDesc: "A confeitaria não conseguia organizar pedidos feitos por Direct no Instagram (muito curiosos, poucos compradores). Criamos um catálogo digital interativo guiando o cliente para fechar a encomenda estruturada no WhatsApp. Campanhas de intenção ('bolo de festa perto de mim') garantiram a queima limpa de estoque diário."
    }
  ];

  const selectedProject = projects.find(p => p.id === selectedId);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedId]);

  return (
    <>
      <section id="resultados" className="relative py-40 bg-[#050505] z-10 w-full">
        <div className="w-full max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-6">Trabalhos</h2>
              <p className="text-brand-gray text-lg font-light leading-relaxed">
                Site bonito não paga as contas. Estes negócios mudaram o jogo quando pararam de confiar só em indicação e passaram a dominar o Google com uma presença de alta conversão.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="flex flex-col gap-6 md:gap-12 pb-0 md:pb-24">
              {projects.slice(0, 2).map((p) => (
                <PortfolioCard key={p.id} {...p} onClick={() => setSelectedId(p.id)} />
              ))}
            </div>
            <div className="flex flex-col gap-6 md:gap-12 pt-0 md:pt-24 mt-12 md:mt-0">
              {projects.slice(2, 4).map((p) => (
                <PortfolioCard key={p.id} {...p} onClick={() => setSelectedId(p.id)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div 
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12 overflow-hidden bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="bg-[#0A0A0A] w-full max-w-5xl h-full md:h-[80vh] flex flex-col md:flex-row rounded-sm overflow-hidden relative cursor-default border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                data-cursor="FECHAR"
                className="absolute top-6 right-6 z-50 text-white mix-blend-difference hover:rotate-90 transition-transform duration-300 w-10 h-10 flex items-center justify-center bg-black/20 rounded-full backdrop-blur-md"
                onClick={() => {
                  playAudio.playClick();
                  setSelectedId(null);
                }}
              >
                ✕
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                <motion.img 
                  layoutId={`image-${selectedProject.id}`} 
                  src={`${selectedProject.image}&fm=avif&q=80`}
                  className="w-full h-full object-cover grayscale" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent md:hidden"></div>
              </div>

              <motion.div 
                layoutId={`text-container-${selectedProject.id}`} 
                className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[#0A0A0A] overflow-y-auto"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.span layoutId={`tag-${selectedProject.id}`} className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em]">{selectedProject.tag}</motion.span>
                  <div className="w-8 h-[1px] bg-white/20"></div>
                  <span className="text-brand-gray text-[10px] uppercase tracking-[0.2em]">Estudo de Caso</span>
                </div>
                
                <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-4xl md:text-5xl font-heading text-white mb-8">{selectedProject.title}</motion.h3>
                
                <div className="space-y-6 text-brand-gray font-light leading-relaxed">
                  <p className="text-lg text-white">O Desafio & Solução:</p>
                  <p>{selectedProject.fullDesc}</p>
                </div>

                <div className="mt-12 flex gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-brand-gold transition-colors block text-center w-full">
                    Quero estes resultados
                  </a>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
