import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import Link from 'next/link';

export const RichTextComponents = {
	types: {
		image: ({ value }: any) => {
			return (
				<div className='relative w-full h-96 m-10 mx-auto'>
					<Image
						className='object-contain'
						src={urlFor(value).url()}
						alt='One of project images'
						fill
					/>
				</div>
			);
		},
	},
	list: {
		bullet: ({ children }: any) => (
			<ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
		),
		number: ({ children }: any) => (
			<ol className='mt-10 list-decimal'>{children}</ol>
		),
	},
	block: {
		h1: ({ children }: any) => (
			<h1 className='text-5xl py-5 font-bold'>{children}</h1>
		),
		h2: ({ children }: any) => (
			<h2 className='text-4xl py-4 font-bold'>{children}</h2>
		),
		h3: ({ children }: any) => (
			<h3 className='text-3xl py-4 font-bold'>{children}</h3>
		),
		h4: ({ children }: any) => (
			<h4 className='text-2xl py-2 font-bold'>{children}</h4>
		),

		blockquote: ({ children }: any) => (
			<blockquote className='border-l-scrollbar-color border-l-4 pl-5 py-5 my-5'>
				{children}
			</blockquote>
		),
	},
	marks: {
		link: ({ children, value }: any) => {
			const rel = !value.href.startsWith('/')
				? 'noreferrer noopener'
				: undefined;

			return (
				<Link
					href={value.href}
					target={value.href.startsWith('/') ? '_self' : '_blank'}
					rel={rel}
					className='underline decoration-scrollbar-color border-l-scrollbar-color hover:decoration-black'
				>
					{children}
				</Link>
			);
		},
	},
};
