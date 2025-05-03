'use client';

const NotBuilt = ({ project }: { project: Project }) => {
  return (
    <div className='text-center px-5 space-y-2'>
      <h1 className='font-extrabold text-lg md:text-3xl'>
        Page{' '}
        <code className='bg-gray-200'>/projects/{project.slug.current}</code> is
        not built yet.
      </h1>
      <a
        href={project.live || project.github}
        target='_blank'
        rel='noreferrer'
        className='text-blue-500 underline md:text-xl inline-block'
      >
        Click here to visit {project.live ? 'live demo' : 'github repo'} of{' '}
        {project.name}
      </a>
    </div>
  );
};

export default NotBuilt;
