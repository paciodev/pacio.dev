'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
// import { toast } from 'react-hot-toast';

export default function ScrollToTop() {
  const pathname = usePathname();

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!pathname?.startsWith('/studio')) {
  //       toast(
  //         (t) => (
  //           <div className='flex items-center justify-between text-xs space-x-2'>
  //             <div className='flex-1'>
  //               <p className='mb-1'>
  //                 This page is <b>under construction</b>
  //               </p>
  //               <p>Please report any imperfections you find.</p>
  //               <p>I apologize for any.</p>
  //             </div>
  //             <button
  //               onClick={() => toast.dismiss(t.id)}
  //               className='text-red-dark font-bold'
  //             >
  //               Dismiss
  //             </button>
  //           </div>
  //         ),
  //         {
  //           duration: 10000,
  //         }
  //       );
  //     }
  //   }, 3000);
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
