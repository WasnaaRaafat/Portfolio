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
        animate={state === 'armed' ? 'hidden' : 'visible'}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
