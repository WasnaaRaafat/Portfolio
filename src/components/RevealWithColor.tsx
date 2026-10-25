import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
}

const Reveal = ({ children, width = 'fit-content' }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const state = useReveal(ref);
  const animate = state === 'armed' ? 'hidden' : 'visible';

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, transition: { duration: 0 } },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.25 },
          },
        }}
        initial={false}
        animate={animate}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0, transition: { duration: 0 } },
          visible: {
            left: '100%',
            transition: { duration: 0.5, ease: 'easeIn' },
          },
        }}
        initial={false}
        animate={animate}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: '#fee066',
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default Reveal;
