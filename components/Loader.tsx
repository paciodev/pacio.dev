'use client';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className='fixed z-50 top-0 left-0 w-full grid place-content-center h-screen bg-white'
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { delay: 0.7, ease: 'easeInOut', duration: 2 },
      }}
    >
      <motion.div
        key='loader'
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            type: 'spring',
            bounce: 0.75,
            duration: 1,
          },
        }}
        exit={{
          scale: 0,
          transition: {
            type: 'spring',
            duration: 1,
          },
        }}
        className='bg-black w-[200px] h-[200px] grid place-content-center rounded-full'
      >
        <motion.svg
          initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
          animate={{
            strokeDashoffset: 0,
            transition: {
              type: 'spring',
              bounce: 0.1,
              duration: 2,
              delay: 0.7,
            },
          }}
          width='150'
          height='150'
          viewBox='0 0 259 186'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M179.765 4.30824C179.765 3.40017 180.559 1.17799 179.747 1.58409C179.421 1.74725 178.989 3.03742 178.778 3.33925C177.809 4.72383 177.493 6.64619 176.804 8.18421C172.283 18.2686 166.255 27.6357 160.312 36.9249C136.349 74.385 108.904 109.344 79.9592 143.057C69.9868 154.672 59.9483 166.541 48.7869 177.045C46.9526 178.771 42.1545 184.348 38.9507 183.992C37.5088 183.832 37.9791 181.865 37.9269 181.03'
            stroke='white'
            strokeWidth='3'
          />
          <path
            d='M72.8106 61.5703C81.3491 57.1916 90.656 54.1447 99.6682 50.8748C114.399 45.5299 129.709 41.5546 145.229 39.3749C162.833 36.9024 180.59 35.7141 198.341 37.0347C207.719 37.7324 216.904 38.993 226.094 41.0203C232.77 42.4929 239.775 44.401 245.949 47.3828C252.992 50.784 260.026 57.6198 255.255 65.8302C252.314 70.8923 246.133 74.3284 241.013 76.7633C230.768 81.636 219.714 84.9825 208.853 88.1536C178.094 97.1344 146.488 102.635 114.934 107.972C77.2255 114.351 39.2097 118.765 1.06866 121.465'
            stroke='white'
            strokeWidth='3'
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
