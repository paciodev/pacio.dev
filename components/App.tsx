'use client';

import About from './About';
import Hero from './Hero';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from '@/app/Loader';
import Projects from './Projects';

const App = ({ projects }: { projects: Project[] }) => {
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
      <Projects projects={projects} />
    </main>
  );
};

export default App;
