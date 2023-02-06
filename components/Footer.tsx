'use client';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  if (pathname?.startsWith('/studio')) return null;
  return (
    <div
      className='py-14 text-center font-extrabold text-xl'
      style={{
        display: pathname?.startsWith('/studio') ? 'none' : 'block',
      }}
    >
      © 2023 Patryk Nowaczyński
    </div>
  );
};

export default Footer;
