import ProjectCard from './ProjectCard';
import selectedProjects from '@/assets/img/selected-projects.png';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '@/assets/img/arrow-sm.png';
import { groq } from 'next-sanity';
import client from '@/lib/sanity.client';

const query = groq`
  *[_type == 'project'] {
  ...,
  categories[]->,
  technologies[]->
} | order(createdAt desc)[0..2]
`;

export const revalidate = 60;

const Projects = async () => {
  const data = await client.fetch(query);

  return (
    <div className='max-w-6xl mx-auto px-0 sm:px-10 md:px-32 xl:px-0'>
      <div className='flex items-center justify-center my-14 sm:my-24'>
        <Image
          src={selectedProjects}
          alt='My selected projects'
          className='scale-50 sm:scale-100 select-none'
          width={400}
          draggable={false}
        />
      </div>
      <div className='space-y-24'>
        {data.map((p: Project) => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
      <div className='mt-20 flex items-center justify-center'>
        <Link
          href='/projects'
          className='bg-[#f2f2f2] px-6 py-4 font-medium flex items-center justify-center group'
        >
          <p className=''>Show all projects</p>
          <Image
            className='ml-6 group-hover:translate-x-2 transition-all'
            src={arrow}
            alt=''
            width={35}
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
