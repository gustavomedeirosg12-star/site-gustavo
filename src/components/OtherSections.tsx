import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Ghost, Users, TrendingDown, MessageCircle, Rocket, CheckCircle2, Phone, Search, Target, LayoutTemplate } from 'lucide-react';
import { AnimTitle, MagneticButton, WHATSAPP_URL } from './Shared';

export const PainSection = () => {
  const cards = [
    {
      icon: <Search className="w-8 h-8 text-brand-gold" />,
      title: "Invisível no Google",
      desc: "Seu cliente ideal procura pelo seu serviço agora no Google. E adivinha? Ele encontrou seu concorrente porque você não está lá."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-gold" />,
      title: "Refém de Indicação",
      desc: "Indicação é ótimo, mas imprevisível. Você não tem um canal de vendas automático que te traz orçamentos todos os dias via Tráfego Pago."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-brand-gold" />,
      title: "Orçamentos Vazios",
      desc: "Você até atrai pessoas, mas elas pedem preço e somem. Seu site não passa confiança e não converte o visitante em comprador real."
    }
  ];

  return (
    <section className="py-40 px-6 z-10 relative bg-[#050505]">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <AnimTitle className="text-4xl md:text-5xl lg:text-6xl font-heading font-light mb-8">Você está deixando dinheiro na mesa.</AnimTitle>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray text-lg md:text-xl font-light max-w-2xl mx-auto"
          >
            O digital não perdoa negócios amadores. Se você se identifica com uma dessas situações abaixo, seu faturamento está em risco.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              className="bg-[#0A0A0A] border border-white/5 p-10 rounded-sm hover:border-brand-gold/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform translate-x-4 -translate-y-4 scale-150 text-brand-gold pointer-events-none">
                {card.icon}
              </div>
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full border border-brand-gold/20 text-brand-gold">
                {card.icon}
              </div>
              <h3 className="text-2xl font-heading font-light text-white mb-4">{card.title}</h3>
              <p className="text-brand-gray font-light leading-relaxed">{card.desc}</p>
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
      icon: <LayoutTemplate />,
      title: "Sites de Alta Conversão",
      desc: "Esqueça templates amadores. Desenvolvo landing pages premium, focadas exclusivamente em persuadir o visitante e gerar cliques pro seu WhatsApp.",
      number: "01"
    },
    {
      icon: <Target />,
      title: "Tráfego Pago (Google & Meta)",
      desc: "Não basta ter um site. Eu coloco sua empresa na frente de quem já está com o cartão na mão pesquisando pelo seu serviço agora mesmo.",
      number: "02"
    },
    {
      icon: <CheckCircle2 />,
      title: "Google Meu Negócio",
      desc: "Otimização completa do seu perfil local para dominar as buscas da sua região. Quando alguém procurar perto de você, é sua empresa que aparece no topo.",
      number: "03"
    }
  ];

  return (
    <section id="processo" className="py-40 px-6 z-10 relative bg-brand-black">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-32 text-center">
          <AnimTitle className="text-4xl md:text-5xl lg:text-7xl font-heading font-light mb-8">A Máquina Completa.</AnimTitle>
          <p className="text-brand-gray text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Eu não crio apenas sites. Eu crio um ecossistema completo de captação de clientes focado em resultados reais para negócios locais.
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Vertical editorial line connecting items */}
          <div className="absolute left-[30px] md:left-[55px] top-12 bottom-12 w-[1px] bg-brand-gold/10 hidden md:block"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="group relative flex flex-col md:flex-row items-center justify-between gap-12 bg-[#050505] border border-white/5 p-12 rounded-sm hover:border-brand-gold/30 transition-all duration-500"
            >
              <div className="flex items-start gap-8 w-full md:w-2/3">
                <div className="hidden md:flex text-brand-gold/20 font-heading text-6xl font-light w-16 relative">
                  {/* Small gold dot on the vertical line */}
                  <div className="absolute left-[7px] top-6 w-2 h-2 rounded-full bg-brand-gold"></div>
                  {step.number}
                </div>
                <div>
                  <h3 className="text-3xl font-heading font-light text-white mb-4 flex items-center gap-4">
                    <span className="text-brand-gold md:hidden">{step.number}.</span>
                    {step.title}
                  </h3>
                  <p className="text-brand-gray font-light leading-relaxed text-lg">{step.desc}</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 flex justify-end">
                 <div className="flex items-center justify-center w-24 h-24 rounded-full border border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors duration-500">
                   {React.cloneElement(step.icon as React.ReactElement, { className: "w-10 h-10" })}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NumberCounter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-12 border-r border-white/5 last:border-r-0 hover:bg-brand-gold/5 transition-colors">
      <div className="text-5xl md:text-7xl font-heading font-light text-brand-gold mb-4">
        {count}{suffix}
      </div>
      <div className="text-brand-gray text-[11px] font-bold uppercase tracking-[0.2em]">{label}</div>
    </div>
  );
};

export const NumbersSection = () => {
  return (
    <section className="py-20 px-6 z-10 relative bg-[#030303] border-y border-white/5">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-full grid grid-cols-1 md:grid-cols-4">
          <NumberCounter value={40} label="Projetos Entregues" suffix="+" />
          <NumberCounter value={6} label="Nichos Dominados" suffix="+" />
          <NumberCounter value={48} label="Horas pra Entrega" suffix="h" />
          <NumberCounter value={100} label="Satisfação" suffix="%" />
        </div>
      </div>
    </section>
  );
};

export const AboutSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={targetRef} id="sobre" className="py-40 px-6 z-10 relative bg-[#030303]">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12"
        >
          <div className="relative aspect-[3/4] max-w-md mx-auto p-4 border border-white/10" data-cursor="QUEM SOU">
            <div className="w-full h-full bg-[#0A0A0A] overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-black via-brand-black/20 to-brand-gold/20 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
              <motion.img 
                style={{ y: imgY, scale: 1.15 }}
                src="https://69d917505386887646d2db3b.imgix.net/3232223.png" 
                alt="Gustavo Enrique" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                referrerPolicy="no-referrer" 
              />
              
              {/* Graphic elements overlay */}
              <div className="absolute bottom-6 left-[-20px] font-heading text-brand-gold text-[100px] font-light leading-none opacity-20 z-0 pointer-events-none">
                GE
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="w-full md:w-7/12">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-brand-gold/50"></div>
            <span className="text-brand-gold text-[11px] font-bold uppercase tracking-[0.2em]">O Estrategista</span>
          </div>
          
          <AnimTitle className="text-4xl md:text-6xl font-heading font-light mb-10">Quem sou eu?</AnimTitle>
          
          <div className="space-y-6 text-brand-gray text-lg font-light leading-relaxed">
            <p>
              Sou o cara dos bastidores que faz empresas locais passarem na frente de concorrentes maiores que eles. 
            </p>
            <p>
              Durante anos, vi empresários brilhantes, com serviços excepcionais, fechando as portas porque perdiam orçamentos para concorrentes medíocres que apenas "pareciam" melhores na internet.
            </p>
            <div className="border-l border-brand-gold pl-8 py-2 my-8">
              <p className="text-white font-heading text-2xl font-light italic">
                "Meu papel não é fazer arte. Meu papel é construir uma máquina de vendas online que coloca cliente novo no seu WhatsApp todo santo dia."
              </p>
            </div>
            <p>
              Se você tem um serviço de qualidade, e só precisa que as pessoas certas te encontrem na hora que elas estão prontas para comprar, nós precisamos conversar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = () => {
  const [formData, setFormData] = useState({ name: '', niche: '', goal: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Fala Gustavo! Meu nome é ${formData.name}. Meu negócio é do nicho de ${formData.niche} e meu objetivo principal no momento é ${formData.goal}. Queria entender como a sua estrutura de alta conversão pode me ajudar.`;
    window.open(`https://wa.me/553484304734?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-32 md:py-40 px-6 z-10 relative bg-[#030303] border-t border-white/5 overflow-hidden">
      
      {/* Brutalist massive vertical rail text */}
      <div className="absolute left-[-2vw] top-0 bottom-0 flex items-center pointer-events-none overflow-hidden opacity-5 z-0">
         <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }} className="text-[25vw] font-heading font-black text-white leading-none whitespace-nowrap">
           ESCALA
         </span>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-20 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Copy */}
        <div className="w-full lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-light leading-tight text-white mb-8 tracking-tight"
          >
            A sua última <br/>
            tentativa com <br/>
            <span className="text-brand-gold italic font-medium">Marketing.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-gray text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10"
          >
            A cada dia hesitando, um potencial cliente fecha com o seu concorrente porque ele aparece primeiro no Google. Preencha a aplicação para desenharmos o plano exato para dominar a sua região.
          </motion.p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 text-sm tracking-widest uppercase font-bold text-brand-gold">
              <span className="w-8 h-px bg-brand-gold"></span>
              Apenas empresários reais
            </div>
            <div className="flex items-center gap-4 text-sm tracking-widest uppercase font-bold text-brand-gold">
              <span className="w-8 h-px bg-brand-gold"></span>
              Vagas limitadas por mês
            </div>
            <div className="flex items-center gap-4 text-sm tracking-widest uppercase font-bold text-brand-gray">
              <span className="w-8 h-px bg-brand-gray"></span>
              Atendimento direto (sem robôs)
            </div>
          </div>
        </div>

        {/* Right Side: Application Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <form onSubmit={handleSubmit} className="relative z-20 backdrop-blur-md bg-[#080808] p-8 md:p-12 border border-white/10 rounded-sm flex flex-col gap-8 shadow-2xl">
             <div className="mb-2">
               <h3 className="text-2xl font-heading text-white tracking-wide mb-3">Aplicação Estratégica</h3>
               <p className="text-brand-gray text-sm font-light">Receba uma análise gratuita da sua operação e descubra o plano exato para dominar a sua região.</p>
             </div>
             
             <div className="flex flex-col gap-1 group">
               <label className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.2em] opacity-80 group-focus-within:opacity-100 transition-opacity">Seu Nome / Empresa</label>
               <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="bg-transparent border-b border-white/20 py-3 text-white focus:border-brand-gold focus:outline-none placeholder:text-white/20 transition-colors font-light text-lg rounded-none" 
                  placeholder="Como devemos te chamar?" 
                />
             </div>

             <div className="flex flex-col gap-1 group">
               <label className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.2em] opacity-80 group-focus-within:opacity-100 transition-opacity">Nicho de Atuação</label>
               <input 
                  type="text" 
                  required
                  value={formData.niche}
                  onChange={e => setFormData({...formData, niche: e.target.value})}
                  className="bg-transparent border-b border-white/20 py-3 text-white focus:border-brand-gold focus:outline-none placeholder:text-white/20 transition-colors font-light text-lg rounded-none" 
                  placeholder="Ex: Clínica Odontológica, Advogado..." 
                />
             </div>

             <div className="flex flex-col gap-1 group">
               <label className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.2em] opacity-80 group-focus-within:opacity-100 transition-opacity">Desafio Atual ou Meta</label>
               <input 
                  type="text" 
                  required
                  value={formData.goal}
                  onChange={e => setFormData({...formData, goal: e.target.value})}
                  className="bg-transparent border-b border-white/20 py-3 text-white focus:border-brand-gold focus:outline-none placeholder:text-white/20 transition-colors font-light text-lg rounded-none" 
                  placeholder="Ex: Quero dobrar os orçamentos mensais" 
                />
             </div>

             <button type="submit" className="group mt-4 relative w-full px-8 py-6 bg-brand-gold text-brand-black rounded-sm overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <span className="absolute inset-0 w-full h-full -ml-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
              <span className="relative flex items-center justify-center gap-3">
                <span className="text-sm font-bold uppercase tracking-widest whitespace-nowrap">Enviar via WhatsApp</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
             </button>
             <p className="text-center text-[10px] text-brand-gray uppercase tracking-widest">100% Livre de Spam. Conexão Direta.</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
