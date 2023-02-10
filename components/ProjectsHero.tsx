'use client';

import { motion } from 'framer-motion';

const ProjectsHero = () => {
  return (
    <div className='flex items-start justify-center'>
      <h1 className='text-2xl sm:text-5xl xl:text-7xl font-extrabold'>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
            },
          }}
        >
          All of my
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              duration: 0.6,
            },
          }}
          className='xl:ml-28 text-red-dark'
        >
          projects
        </motion.p>
      </h1>
    </div>
  );
};

export default ProjectsHero;
