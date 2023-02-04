import ProjectCard from '@/components/ProjectCard';
import client from '@/lib/sanity.client';
import { groq } from 'next-sanity';

const query = groq`
  *[_type == 'project'] {
  ...,
  categories[]->,
  technologies[]->
} | order(createdAt desc)
`;

export const revalidate = 60;

const ProjectsPage = async () => {
  const projects = await client.fetch(query);

  return (
    <div className='max-w-5xl mx-auto px-0 sm:px-10 md:px-32 xl:px-0 space-y-24 mt-32 lg:mt-[25vh]'>
      <div className='flex items-start justify-center'>
        <h1 className='text-2xl sm:text-5xl xl:text-7xl font-extrabold'>
          <p>All of my</p>
          <p className='xl:ml-28 text-red-dark'>projects</p>
        </h1>
      </div>
      {projects.map((p: Project) => (
        <ProjectCard key={p._id} project={p} />
      ))}
    </div>
  );
};

export default ProjectsPage;
