'use client';

import ProjectCard from './ProjectCard';

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div>
      {projects.map((p) => (
        <ProjectCard key={p._id} project={p} />
      ))}
    </div>
  );
};

export default Projects;
