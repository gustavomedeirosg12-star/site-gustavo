import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

export const WHATSAPP_URL = "https://wa.me/553484304734?text=Ol%C3%A1%20Gustavo%2C%20vim%20pelo%20seu%20site%20e%20quero%20saber%20mais";

export const SplitText = ({ children, delay = 0, className = "" }: { children: string, delay?: number, className?: string }) => {
  const words = children.split(' ');
  
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, charIndex) => {
            const overallIndex = words.slice(0, wordIndex).join('').length + charIndex;
            return (
              <motion.span
                key={charIndex}
                className="inline-block will-change-transform"
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: delay + overallIndex * 0.02, 
                  ease: [0.2, 0.65, 0.3, 0.9] 
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

export const AnimTitle = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, letterSpacing: "-0.05em" }}
      animate={isInView ? { opacity: 1, letterSpacing: "normal" } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`font-heading text-white ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export const MagneticButton = ({ children, className, href, onClick }: any) => {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const animationProps = {
    ref: ref as any,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    animate: { x: position.x, y: position.y },
    transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
    className: `inline-block ${className}`,
    onClick
  };

  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" {...animationProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button {...animationProps}>
      {children}
    </motion.button>
  );
};
