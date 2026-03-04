import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 40, filter: 'blur(10px)' }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: delay > 0 ? delay / 1000 : 0
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;