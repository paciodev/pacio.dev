'use client';

import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  dark: Color;
  light: Color;
  image: Image;
  project: string;
  company: string;
};

const ProjectHero = ({ dark, light, image, project, company }: Props) => {
  return (
    <motion.div
      initial={{ backgroundColor: '#fff' }}
      animate={{ backgroundColor: light.hex, transition: { delay: 0.3 } }}
      style={{ color: dark.hex }}
      className='pt-48 md:pt-64 lg:pt-[25vh] flex flex-col items-center sm:pb-12 md:pb-24'
    >
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { delay: 0.5 } }}
        className='font-extrabold text-4xl md:text-7xl md:mb-2'
      >
        {project}
      </motion.h1>
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.7 } }}
        className='font-extrabold text-2xl md:text-4xl md:mb-32'
      >
        {company}
      </motion.h3>
      <motion.div
        initial={{ y: 1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
        className='relative h-[350px] sm:h-[700px] w-full'
      >
        <Image
          priority
          src={urlFor(image).url()}
          alt={`Main image for ${project}`}
          fill
          className='select-none object-contain'
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectHero;
