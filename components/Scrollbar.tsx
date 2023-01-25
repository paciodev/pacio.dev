'use client';
import { useScroll, useSpring, motion } from 'framer-motion';

const Scrollbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className='fixed top-0 right-0 h-screen w-2 bg-red-dark z-50 origin-top'
      style={{ scaleY }}
    />
  );
};

export default Scrollbar;
