'use client';

import logo from '@/assets/img/logo-nav.png';
import Image from 'next/image';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import { useEffect } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import useWindowDimensions from '@/utils/useWindowDimensions';

const links = [
  {
    href: '#',
    text: 'About',
  },
  {
    href: '#',
    text: 'Portfolio',
  },
  {
    href: '#',
    text: 'Contact',
  },
];

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const { width } = useWindowDimensions();

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'auto';
  }, [open]);

  useEffect(() => {
    if (open && width! > 768) {
      cycleOpen();
    }
  }, [open, width, cycleOpen]);

  return (
    <header className='sticky lg:fixed bg-white lg:bg-transparent top-0 left-0 w-screen p-5 lg:p-12 flex items-center justify-between z-10'>
      <div>
        <Link href='/' className='cursor-pointer relative z-40'>
          <Image src={logo} alt='Pacio' className='w-[100px] sm:w-[150px]' />
        </Link>
      </div>
      <div className='hidden lg:block space-x-5'>
        {links.map((link, i) => (
          <a key={i} href={link.href} className='tw-nav-link'>
            {link.text}
          </a>
        ))}
      </div>
      <div className='lg:hidden relative z-40'>
        <Hamburger
          toggled={open}
          onToggle={() => cycleOpen()}
          label='Show menu'
        />
      </div>

      {/* SIDEBAR */}
      <AnimatePresence>
        {open && width! < 768 && (
          <motion.aside
            key='sidebar'
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
                delay: 0.2,
                type: 'spring',
              },
            }}
            exit={{ opacity: 0, transition: { delay: 1.2, duration: 0.5 } }}
            className='z-30 fixed h-screen w-screen top-0 left-0 bg-white grid place-content-center space-y-6 text-center font-extrabold text-5xl sm:text-6xl'
          >
            {links.map((link, i) => (
              <motion.a
                key={i}
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: {
                    delay: 0.5 + i * 0.1,
                    type: 'spring',
                  },
                }}
                exit={{
                  scale: 0,
                  transition: {
                    delay: 0.7 - i * 0.1,
                  },
                }}
                href={link.href}
                className='tw-sb-link'
              >
                {link.text}
              </motion.a>
            ))}
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
