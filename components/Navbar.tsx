'use client';

import logo from '@/assets/img/logo-nav.png';
import Image from 'next/image';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import { useEffect } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import useWindowDimensions from '@/utils/useWindowDimensions';
import { Link as ScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation';

type Link = {
  to?: string;
  href?: string;
  offset?: number;
  text: string;
};

const links: Link[] = [
  {
    to: 'about',
    offset: -200,
    text: 'About',
  },
  {
    href: '/projects',
    text: 'Portfolio',
  },
  {
    to: 'contact',
    offset: -100,
    text: 'Contact',
  },
];

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const { width } = useWindowDimensions();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'auto';
  }, [open]);

  useEffect(() => {
    if (open && width! > 1023) {
      cycleOpen();
    }
  }, [open, width, cycleOpen]);

  if (pathname?.startsWith('/studio')) return null;
  return (
    <header className='pointer-events-none fixed bg-white lg:bg-transparent flex top-0 left-0 w-screen p-5 lg:p-12 items-center justify-between z-20'>
      <motion.div
        initial={{ y: -200 }}
        animate={{
          y: 0,
          transition: { type: 'spring', duration: 0.8 },
        }}
      >
        <Link href='/' className='cursor-pointer relative z-40'>
          <Image src={logo} alt='Pacio' className='w-[100px] sm:w-[150px]' />
        </Link>
      </motion.div>
      <div className='hidden lg:flex items-center justify-center space-x-5 '>
        {links.map((link, i) => (
          <motion.div
            initial={{ y: -200 }}
            animate={{
              y: 0,
              transition: {
                type: 'spring',
                duration: 0.8,
                delay: 0.2 + i * 0.3,
              },
            }}
            key={link.text}
            className='pointer-events-auto'
          >
            {link.href || !(pathname === '/') ? (
              <Link href={link.href || '/'} className='tw-nav-link'>
                {link.text}
              </Link>
            ) : (
              <ScrollLink
                to={link.to!}
                className='tw-nav-link'
                offset={link.offset || 0}
                smooth
              >
                {link.text}
              </ScrollLink>
            )}
          </motion.div>
        ))}
      </div>
      <div className='lg:hidden relative z-40 pointer-events-auto'>
        <Hamburger
          toggled={open}
          onToggle={() => cycleOpen()}
          label='Show menu'
        />
      </div>

      {/* SIDEBAR */}
      <AnimatePresence>
        {open && width! < 1023 && (
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
              <motion.div
                key={link.text}
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
                className='tw-sb-link'
              >
                {link.href || !(pathname === '/') ? (
                  <Link href={link.href || '/'} onClick={() => cycleOpen()}>
                    {link.text}
                  </Link>
                ) : (
                  <ScrollLink
                    onClick={() => cycleOpen()}
                    to={link.to!}
                    offset={link.offset || 0}
                    smooth
                  >
                    {link.text}
                  </ScrollLink>
                )}
              </motion.div>
            ))}
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
