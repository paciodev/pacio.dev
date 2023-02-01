'use client';

import Navbar from '@/components/Navbar';
import '@/assets/css/globals.css';
import Scrollbar from '@/components/Scrollbar';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from '@/app/Loader';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    document.querySelector('html')!.style.overflowY = 'hidden';
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        document.querySelector('html')!.style.overflowY = 'auto';
      }, 1500);
    }, 2000);
  }, []);

  return (
    <html lang='en'>
      <head />
      <body className='font-pacio'>
        <AnimatePresence>
          {isLoading ? <Loader key='loader' /> : null}
        </AnimatePresence>
        <Navbar />
        <Scrollbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
