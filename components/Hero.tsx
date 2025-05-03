'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const letters = 'abcdefghijklmnopqrstuwxyz';
const phrases = ['powerful webapps', 'beautiful pages', 'simple designs'];

const Hero = () => {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setIndex((p) => {
        return p < phrases.length - 1 ? (p += 1) : 0;
      });
    }, 4000);
  }, []);

  useEffect(() => {
    let iterations = 0;

    if (heroTextRef.current) {
      const interval = setInterval(() => {
        heroTextRef!.current!.innerText = phrases[index]
          .split('')
          .map((l) => {
            if (l === ' ') return l;
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join('');

        if (iterations >= phrases.length) {
          clearInterval(interval);
          heroTextRef.current!.innerText = phrases[index];
        }
        iterations += 1 / 5;
      }, 40);
    }
  }, [index]);

  return (
    <div className='mt-48 lg:mt-[30vh]'>
      <h1 className='text-3xl px-3 sm:px-0 sm:text-5xl xl:text-7xl font-extrabold flex items-center justify-center'>
        <div className='select-none sm:space-y-1'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.8,
              },
            }}
          >
            Web Developer
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.4,
                duration: 0.8,
              },
            }}
            className='xl:ml-32'
          >
            specialized in creating
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.6,
                duration: 0.8,
              },
            }}
            className='xl:ml-64 mask text-red-dark'
            ref={heroTextRef}
          >
            {phrases[index]}
          </motion.div>
        </div>
      </h1>
    </div>
  );
};

export default Hero;
