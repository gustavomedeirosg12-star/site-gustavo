import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { AnimTitle } from './Shared';

const FAQAccordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <h3 className="text-xl font-heading text-white pr-8">{question}</h3>
        <motion.div
           animate={{ rotate: isOpen ? 180 : 0 }}
           transition={{ duration: 0.3 }}
           className="text-brand-gold flex-shrink-0"
        >
          <ChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-brand-gray pb-6 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection = () => {
  const faqs = [
    {
      q: "Qual o prazo real de entrega?",
      a: "Seu site estará no ar em exatas 48 horas após a validação do conteúdo que estruturamos na nossa primeira conversa. Sem atrasos, sem 'semana que vem'."
    },
    {
      q: "Serve para o meu nicho de mercado?",
      a: "Se o seu cliente pesquisa pelo seu serviço no Google ou usa WhatsApp, sim. A lógica de conversão visual funciona para qualquer prestador de serviços ou negócios locais."
    },
    {
      q: "O que eu preciso te enviar?",
      a: "Apenas fotos reais do seu serviço/localização e responder a um questionário simples sobre seus diferenciais. Eu cuido do resto: copywriting e design."
    },
    {
      q: "Como funciona o pagamento?",
      a: "Acordo claro e via contrato. 50% para iniciarmos o projeto e reservar sua vaga na agenda, 50% apenas quando o site estiver no ar e você estiver satisfeito."
    },
    {
      q: "E quando o site ficar pronto, o que faço?",
      a: "Seu site é só o veículo. Te entrego ele configurado para campanhas de Google Meu Negócio ou Tráfego Pago, que também podemos gerenciar para você colocar a máquina para rodar imediatamente."
    }
  ];

  return (
    <section id="duvidas" className="py-40 px-6 z-10 relative">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <AnimTitle className="text-3xl md:text-5xl mb-4">Ainda tem dúvidas?</AnimTitle>
          <p className="text-brand-gray text-lg">Respostas diretas. Sem letras miúdas.</p>
        </div>
        
        <div className="glassmorphism p-6 md:p-12 rounded-3xl mt-12 relative">
          {/* Subtle golden glow behind the FAQ box */}
          <div className="absolute -inset-4 bg-brand-gold/5 blur-2xl -z-10 rounded-full" />
          {faqs.map((faq, i) => (
            <FAQAccordion key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};
