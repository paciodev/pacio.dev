'use client';

import { useEffect, useRef, useState } from 'react';

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
  }, [index]);

  return (
    <div className='mt-48 lg:mt-[30vh]'>
      <div>
        <h1 className='text-3xl px-3 sm:px-0 sm:text-5xl xl:text-7xl font-extrabold flex items-center justify-center'>
          <div className='select-none sm:space-y-1'>
            <div>Web Developer</div>
            <div className='xl:ml-32'>specialized in creating</div>
            <div className='xl:ml-64 mask text-red-dark' ref={heroTextRef}>
              {phrases[index]}
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
