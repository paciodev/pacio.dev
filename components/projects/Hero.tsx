'use client';

import urlFor from '@/lib/urlFor';
import Image from 'next/image';

type Props = {
  dark: Color;
  light: Color;
  image: Image;
  project: string;
  company: string;
};

const ProjectHero = ({ dark, light, image, project, company }: Props) => {
  return (
    <div
      style={{ backgroundColor: light.hex, color: dark.hex }}
      className='pt-48 md:pt-64 lg:pt-[25vh] flex flex-col items-center sm:pb-12 md:pb-24'
    >
      <h1 className='font-extrabold text-4xl md:text-7xl md:mb-2'>{project}</h1>
      <h3 className='font-extrabold text-2xl md:text-4xl md:mb-32'>
        {company}
      </h3>
      <div className='relative h-[350px] sm:h-[700px] w-full'>
        <Image
          priority
          src={urlFor(image).url()}
          alt={`Main image for ${project}`}
          fill
          className='select-none object-contain'
          draggable={false}
        />
      </div>
    </div>
  );
};

export default ProjectHero;
