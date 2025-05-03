'use client';

import TimeAgo from 'react-timeago';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import urlFor from '@/lib/urlFor';
import { useEffect } from 'react';

type Props = {
	darkColor: Color;
	createdAt: Date;
	role: string;
	categories: Category[];
	technologies: Technology[];
	github: string;
	demo: string;
};

const card = {
	hover: {
		scale: 1.02,
		transition: { type: 'spring', duration: 0.5, bounce: 0.6 },
	},
};

const Info = ({
	darkColor,
	createdAt,
	role,
	categories,
	technologies,
	github,
	demo,
}: Props) => {
	useEffect(() => {
		document.documentElement.style.setProperty(
			'--scrollbar-color',
			darkColor.hex
		);
	}, [darkColor]);

	return (
		<div className='grid grid-cols-1 mini:grid-cols-2 grid:grid-cols-3 grid-rows-4 max-w-4xl mx-auto font-extrabold px-5 sm:px-10 md:px-32 xl:px-0 my-32 gap-3'>
			<motion.div
				variants={card}
				whileHover='hover'
				className='h-32 row-span-2 rounded-xl text-white grid place-content-center text-center text-2xl relative'
				style={{
					backgroundColor: darkColor.hex,
				}}
			>
				<TimeAgo date={createdAt} />
				<div className='absolute top-2 w-full text-center uppercase font-light text-sm tracking-[0.5em]'>
					Created
				</div>
			</motion.div>

			<motion.div
				variants={card}
				whileHover='hover'
				className='h-32 row-span-2 rounded-xl text-white grid place-content-center text-center text-2xl relative'
				style={{
					backgroundColor: darkColor.hex,
				}}
			>
				<p>{role}</p>
				<div className='absolute top-2 w-full text-center uppercase font-light text-sm tracking-[0.5em]'>
					My role
				</div>
			</motion.div>

			<motion.div
				variants={card}
				whileHover='hover'
				className='h-32 row-span-2 rounded-xl text-white grid place-content-center text-center text-xl relative'
				style={{
					backgroundColor: darkColor.hex,
				}}
			>
				<ul>
					{categories.map((c) => (
						<li key={c._id}>{c.title}</li>
					))}
				</ul>
				{categories.length < 3 ? (
					<div className='absolute top-2 w-full text-center uppercase font-light text-sm tracking-[0.5em]'>
						Categories
					</div>
				) : null}
			</motion.div>

			<motion.div
				variants={card}
				whileHover='hover'
				className='h-32 row-span-2 grid:col-span-2 rounded-xl text-white flex items-center justify-center space-x-5 text-2xl relative'
				style={{
					backgroundColor: darkColor.hex,
				}}
			>
				{technologies.map((t) => (
					<a
						href={t.url}
						target='_blank'
						rel='noreferrer'
						className='cursor-pointer'
						key={t._id}
					>
						<Image
							alt={t.title}
							width={50}
							height={50}
							src={urlFor(t.image).url()}
						/>
					</a>
				))}
				<div className='absolute top-2 w-full text-center uppercase font-light text-sm tracking-[0.5em]'>
					Technologies
				</div>
			</motion.div>

			<motion.a
				variants={card}
				href={github}
				target='_blank'
				rel='noreferrer'
				whileHover={github && 'hover'}
				className='rounded-xl text-white grid place-content-center text-center text-2xl relative'
				style={{
					cursor: github ? 'pointer' : 'default',
					opacity: github ? '1' : '0.5',
					backgroundColor: darkColor.hex,
				}}
			>
				{github && (
					<ArrowTopRightOnSquareIcon className='h-5 w-5 text-white absolute top-[10px] right-[10px]' />
				)}
				<p>Github code</p>
			</motion.a>

			<motion.a
				variants={card}
				href={demo}
				target='_blank'
				rel='noreferrer'
				whileHover={demo && 'hover'}
				className='rounded-xl text-white grid place-content-center text-center text-2xl relative'
				style={{
					cursor: demo ? 'pointer' : 'default',
					opacity: demo ? '1' : '0.5',
					backgroundColor: darkColor.hex,
				}}
			>
				{demo && (
					<ArrowTopRightOnSquareIcon className='h-5 w-5 text-white absolute top-[10px] right-[10px]' />
				)}
				<p>Live demo</p>
			</motion.a>
		</div>
	);
};

export default Info;
