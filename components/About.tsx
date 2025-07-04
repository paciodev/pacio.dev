'use client';

import doggo from '@/assets/img/doggo.svg';
import getPassedYearsFromDate from '@/utils/getPassedYearsFromDate';
import Image from 'next/image';
import { motion } from 'framer-motion';
import react from '@/assets/img/react.png';
import tailwind from '@/assets/img/tailwind.svg';
import pacio from '@/assets/img/pacio.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '@/assets/css/glitch.css';
import { Element } from 'react-scroll';

const card = {
    hover: {
        scale: 1.05,
        transition: { type: 'spring', duration: 0.5, bounce: 0.6 },
    },
};

const About = () => {
    const [text] = useTypewriter({
        words: ['Web Developer', 'Always inspired', 'Young mind', 'Fresh POV'],
        loop: 0,
        delaySpeed: 2000,
    });

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{
                scale: 1,
                transition: { delay: 1, duration: 0.5, type: 'spring' },
            }}
            className="max-w-6xl mx-auto font-extrabold px-0 sm:px-10 md:px-32 xl:px-0 mt-[30vh]"
            id="about">
            <Element className="bg-red-light" name="about">
                <h2 className="text-center py-6 text-3xl text-red-dark">
                    Facts about me
                </h2>
                <div className="grid grid-cols-2 mini:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 p-5 lg:px-24 pb-16 !pt-0 text-white gap-3">
                    <motion.div
                        variants={card}
                        whileHover="hover"
                        className="h-32 rounded-xl col-span-2 bg-red-dark flex flex-col items-center justify-center bg-[url(/assets/img/pl.webp)] bg-cover bg-center space-y-6">
                        <p className="text-3xl text-[#DD0C39]">I am from</p>
                        <p className="text-3xl">Poland</p>
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover="hover"
                        className="h-32 rounded-xl bg-red-dark flex flex-col items-center justify-center">
                        <p className="-mt-[22px]">Age:</p>
                        <p className="text-5xl leading-[0.8]">
                            {getPassedYearsFromDate('2007/12/09')}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover="hover"
                        className="h-32 rounded-xl bg-red-dark flex flex-col items-center justify-center">
                        <p>Over</p>
                        <p className="text-5xl leading-[0.8]">30</p>
                        <p>projects</p>
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover="hover"
                        className="h-32 rounded-xl col-span-2 bg-red-dark flex flex-col items-center justify-center text-2xl">
                        <p>Coding for:</p>
                        <p>
                            {getPassedYearsFromDate('2021/12/21')}+ year
                            {getPassedYearsFromDate('2021/12/21') !== 1 && 's'}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover={{
                            backgroundSize: '100%',
                            scale: 1.05,
                            transition: {
                                type: 'spring',
                                duration: 0.5,
                                bounce: 0.6,
                            },
                        }}
                        className="h-32 rounded-xl col-span-2 bg-red-dark flex flex-col items-center justify-center text-3xl bg-img bg-chinese">
                        <p>Learning</p>
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover="hover"
                        className="h-32 rounded-xl col-span-2 bg-red-dark flex flex-col items-center justify-center text-3xl bg-img bg-ice-skates">
                        <p>Enjoying</p>
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover="hover"
                        className="min-h-[8rem] rounded-xl col-span-2 mini:col-span-4 row-start-4 mini:row-start-3 lg:row-start-auto row-span-1 xl:row-span-2 bg-red-dark relative">
                        <Image
                            src={pacio}
                            alt="My photo that was taken in London"
                            fill
                            className="rounded-xl object-cover"
                        />
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover="hover"
                        className="h-[268px] mini:h-auto rounded-xl col-start-auto lg:col-start-5 xl:col-start-auto col-span-2 row-span-2 lg:row-span-auto lg:row-start-2 lg:row-end-4 xl:row-span-2 bg-red-dark bg-img bg-hobbies flex flex-col items-center justify-center text-3xl">
                        <p>Playing</p>
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover="hover"
                        className="h-32 rounded-xl col-span-2 bg-black flex lg:hidden xl:flex flex-col items-center justify-center text-3xl bg-img bg-cursor">
                        <p className="w-full h-full grid place-content-center rounded-xl bg-black/30">
                            Using
                        </p>
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover="hover"
                        className="text-center h-32 rounded-xl col-span-2 mini:col-span-4 bg-red-dark flex items-center justify-center text-3xl mini:text-4xl">
                        <p>{text}</p>
                        <Cursor />
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover="hover"
                        className="h-32 rounded-xl col-span-1 bg-zinc-800 grid place-content-center">
                        <Image src={react} alt="I work with React" width={70} />
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover="hover"
                        className="h-32 rounded-xl col-span-1 bg-zinc-800 grid place-content-center">
                        <Image
                            src={tailwind}
                            alt="I work with Tailwind CSS"
                            width={70}
                        />
                    </motion.div>

                    <motion.div
                        variants={card}
                        whileHover="hover"
                        className="h-32 rounded-xl col-span-2 bg-black flex lg:hidden xl:flex flex-col items-center justify-center text-center text-5xl cursor-wait select-none">
                        <p className="glitch" data-text="???">
                            ???
                        </p>
                    </motion.div>
                </div>
            </Element>
        </motion.div>
    );
};

export default About;
