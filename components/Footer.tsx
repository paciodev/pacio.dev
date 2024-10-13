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
			© {new Date().getFullYear()} Patryk Nowaczyński
		</div>
	);
};

export default Footer;
