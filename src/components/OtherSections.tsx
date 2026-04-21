import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring } from 'motion/react';
import { Ghost, Users, TrendingDown, MessageCircle, Rocket, CheckCircle2, Phone } from 'lucide-react';
import { AnimTitle, MagneticButton, WHATSAPP_URL } from './Shared';

export const PainSection = () => {
  const cards = [
    {
      icon: <Ghost className="w-8 h-8 text-brand-gold" />,
      title: "Invisível no Google",
      desc: "Seu cliente ideal procura pelo seu serviço agora. E adivinha? Ele encontrou seu concorrente porque você não aparece lá."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-gold" />,
      title: "Refém de Indicação",
      desc: "Indicação é ótimo, mas imprevisível. Você não tem um canal de vendas automático que te traz orçamentos todos os dias."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-brand-gold" />,
      title: "Orçamentos Vazios",
      desc: "Você até atrai pessoas, mas elas pedem preço e somem. Sua oferta não passa confiança e não converte o visitante em comprador."
    }
  ];

  return (
    <section className="py-40 px-6 z-10 relative">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <AnimTitle className="text-3xl md:text-5xl mb-6">Você está deixando dinheiro na mesa.</AnimTitle>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray text-lg max-w-2xl mx-auto"
          >
            O digital não perdoa negócios amadores. Se você se identifica com uma dessas situações abaixo, seu negócio está em risco.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glassmorphism p-8 rounded-2xl group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform translate-x-4 -translate-y-4 scale-150 text-brand-gold pointer-events-none">
                {card.icon}
              </div>
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-gold/10 text-brand-gold">
                {card.icon}
              </div>
              <h3 className="text-xl font-heading text-white mb-4">{card.title}</h3>
              <p className="text-brand-gray leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SolutionSection = () => {
  const steps = [
    {
      icon: <MessageCircle />,
      title: "Alinhamento Estratégico",
      desc: "Entendo seu modelo de negócio, quem é seu cliente e qual a oferta que vai fazê-lo comprar."
    },
    {
      icon: <Rocket />,
      title: "Design de Alta Conversão",
      desc: "Desenvolvo a estrutura persuasiva. Sem templates engessados. Tudo focado na ação de compra."
    },
    {
      icon: <CheckCircle2 />,
      title: "Entrega em 48 Horas",
      desc: "No ar. Rápido. Otimizado para celular. Pronto para receber tráfego e gerar orçamentos."
    }
  ];

  return (
    <section id="processo" className="py-40 px-6 z-10 relative">
      <div className="w-full max-w-5xl mx-auto">
        <div className="mb-24 text-center">
          <AnimTitle className="text-3xl md:text-5xl mb-6">Meu Processo</AnimTitle>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">Sem enrolação. Sem jargões técnicos. Um método simples focado em colocar seu site no ar e vender o mais rápido possível.</p>
        </div>

        <div className="relative">
          <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-[2px] bg-white/5 hidden md:block"></div>
          
          <motion.div 
            className="absolute left-[calc(50%-1px)] top-0 w-[2px] bg-brand-gold hidden md:block origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-20 last:mb-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`flex-1 w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-2xl font-heading text-white mb-3 flex items-center md:block gap-3">
                  <span className="md:hidden text-brand-gold">{i + 1}.</span> {step.title}
                </h3>
                <p className="text-brand-gray">{step.desc}</p>
              </div>
              
              <div className="relative z-10 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-[#111] border-2 border-brand-gold text-brand-gold shadow-[0_0_15px_rgba(201,168,76,0.5)]">
                {step.icon}
              </div>
              
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NumberCounter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useSpring(0, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    motionValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
  }, [motionValue]);

  return (
    <div ref={ref} className="text-center p-8 bg-[#111] rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-colors">
      <div className="text-4xl md:text-5xl font-heading text-brand-gold mb-2 font-medium">
        {display}{suffix}
      </div>
      <div className="text-brand-gray font-medium uppercase tracking-wider text-xs">{label}</div>
    </div>
  );
};

export const NumbersSection = () => {
  return (
    <section className="py-32 px-6 z-10 relative">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        <NumberCounter value={40} label="Projetos Entregues" suffix="+" />
        <NumberCounter value={12} label="Nichos Atendidos" />
        <NumberCounter value={48} label="Horas pra Entrega" suffix="h" />
        <NumberCounter value={100} label="Satisfação" suffix="%" />
      </div>
    </section>
  );
};

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-40 px-6 z-10 relative bg-[#0a0a0a]">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5"
        >
          <div className="relative aspect-square max-w-sm mx-auto rounded-full p-2 border-2 border-brand-gold/30">
            <div className="absolute inset-0 rounded-full border border-brand-gold animate-[spin_10s_linear_infinite] border-dashed opacity-50"></div>
            <div className="w-full h-full rounded-full bg-[#111] overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center text-brand-gray group-hover:text-white transition-colors z-10 pointer-events-none">
                <span className="font-heading uppercase tracking-widest text-sm font-medium opacity-50 group-hover:opacity-100">Gustavo Enrique</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-black via-brand-black/50 to-brand-gold/10 mix-blend-overlay"></div>
              <img src="https://picsum.photos/seed/gustavo/600/600?grayscale" alt="Gustavo Enrique" className="w-full h-full object-cover opacity-60 mix-blend-luminosity filter blur-[1px] group-hover:filter-none group-hover:opacity-90 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </motion.div>
        
        <div className="w-full md:w-3/5">
          <AnimTitle className="text-3xl md:text-5xl mb-8">Quem sou eu?</AnimTitle>
          <div className="space-y-6 text-brand-gray text-lg">
            <p>
              Sou o cara dos bastidores que faz empresas locais passarem na frente de concorrentes maiores que eles. 
            </p>
            <p>
              Durante anos, vi empresários brilhantes, com serviços excepcionais, fechando as portas porque perdiam orçamentos para concorrentes medíocres que apenas "pareciam" melhores na internet.
            </p>
            <p className="text-white font-medium border-l-2 border-brand-gold pl-4 py-1">
              "Meu papel não é fazer arte. Meu papel é construir uma máquina de vendas online que coloca cliente novo no seu WhatsApp todo santo dia."
            </p>
            <p>
              Se você tem um serviço bom, e só precisa que as pessoas certas te encontrem na hora que elas querem comprar, nós precisamos conversar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = () => {
  return (
    <section className="py-40 px-6 z-10 relative bg-brand-gold overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')] mix-blend-multiply pointer-events-none"></div>
      
      <div className="w-full max-w-4xl mx-auto text-center relative z-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading text-brand-black mb-8"
        >
          Seu concorrente também está na internet. <br className="hidden md:block"/>
          Mas ele não tem esse site.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-black/80 text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto"
        >
          A cada dia hesitando, um potencial cliente fecha com o cara do lado porque ele parece mais profissional que você. Vamos mudar isso.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
        >
          <MagneticButton 
            href={WHATSAPP_URL}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-black text-white font-semibold rounded-lg text-xl md:text-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-brand-black/20"
          >
            <Phone className="w-6 h-6 text-brand-gold animate-pulse" />
            Quero o Melhor Site da Região
          </MagneticButton>
        </motion.div>
        
        <p className="mt-6 text-brand-black/60 text-sm font-medium uppercase tracking-widest">
          Atendimento direto comigo. Nada de robôs.
        </p>
      </div>
    </section>
  );
};
