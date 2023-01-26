'use client';

import About from '@/components/About';
import Hero from '@/components/Hero';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from './Loader';

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        document.body.style.overflowY = 'auto';
      }, 1500);
    }, 2000);
  }, []);
  return (
    <main>
      <AnimatePresence>
        {isLoading ? <Loader key='loader' /> : null}
      </AnimatePresence>
      <Hero />
      <About />
    </main>
  );
};

export default Home;
