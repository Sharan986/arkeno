import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Split into words to preserve natural wrapping
  const words = text.split(' ');

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split('').map((char, ci) => {
            const charIndex = text.indexOf(word, text.indexOf(words[wi - 1] || '') + (words[wi - 1]?.length || 0)) + ci;
            return (
              <AnimatedChar
                key={`${wi}-${ci}`}
                char={char}
                index={charIndex}
                total={text.length}
                progress={scrollYProgress}
              />
            );
          })}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </p>
  );
};


interface AnimatedCharProps {
  char: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}

const AnimatedChar: React.FC<AnimatedCharProps> = ({ char, index, total, progress }) => {
  const start = index / total;
  const end = Math.min((index + 1) / total, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  );
};

export default AnimatedText;
