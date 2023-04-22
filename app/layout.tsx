'use client';

import Navbar from '@/components/Navbar';
import '@/assets/css/globals.css';
import Scrollbar from '@/components/Scrollbar';
import { AnimatePresence } from 'framer-motion';
import { Fragment, useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from 'react-hot-toast';
import { AnalyticsWrapper } from '@/components/vercel/Analytics';
import { usePathname } from 'next/navigation';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const pathname = usePathname();

	useEffect(() => {
		document.querySelector('html')!.style.overflowY = 'hidden';
		setTimeout(() => {
			setIsLoading(false);
			setTimeout(() => {
				document.querySelector('html')!.style.overflowY = 'auto';
			}, 1500);
		}, 2000);
	}, []);

	useEffect(() => {
		if (pathname?.startsWith('/projects/')) return;
		document.documentElement.style.setProperty('--scrollbar-color', '#9A1717');
	}, [pathname]);

	return (
		<html lang='en'>
			<head />
			<body className='font-pacio'>
				<Toaster />
				<ScrollToTop />
				<AnimatePresence mode='wait'>
					{isLoading ? (
						<Loader key='loader' />
					) : (
						<div key='page'>
							<Navbar />
							<Scrollbar />
							{children}
							<Footer />
						</div>
					)}
				</AnimatePresence>
				<AnalyticsWrapper />
			</body>
		</html>
	);
};

export default RootLayout;
