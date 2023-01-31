'use client';

import ProjectCard from './ProjectCard';
import selectedProjects from '@/assets/img/selected-projects.png';
import Image from 'next/image';

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className='max-w-5xl mx-auto px-0 sm:px-10 md:px-32 xl:px-0'>
      <div className='flex items-center justify-center my-14 sm:my-24'>
        <Image
          src={selectedProjects}
          alt='My selected projects'
          className='scale-50 sm:scale-100'
          width={400}
        />
      </div>
      <div className='space-y-24'>
        {projects.map((p) => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
