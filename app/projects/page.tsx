import ProjectCard from '@/components/ProjectCard';
import ProjectsHero from '@/components/ProjectsHero';

async function getProjects() {
  let baseurl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://pacio.dev';
  const res = await fetch(`${baseurl}/api/projects`, {
    next: { revalidate: 60 },
  });

  return res.json();
}

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <div className='max-w-5xl mx-auto px-0 sm:px-10 md:px-32 xl:px-0 space-y-24 mt-32 lg:mt-[25vh]'>
      <ProjectsHero />
      {projects.map((p: Project) => (
        <ProjectCard key={p._id} project={p} />
      ))}
    </div>
  );
};

export default ProjectsPage;
