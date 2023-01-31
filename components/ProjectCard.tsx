'use client';

import urlFor from '@/lib/urlFor';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div>
      <Link href={`/projects/${project.slug.current}`}>
        <motion.div
          initial={{ scale: 0.7 }}
          whileInView={{
            scale: 1,
            transition: { type: 'spring', duration: 0.5 },
          }}
          viewport={{ once: true }}
          className='py-6 xl:py-12 px-12 xl:px-20 flex flex-col justify-between h-[400px] xl:h-[600px] relative bg-no-repeat mini-bg-none'
          style={{
            backgroundColor: project.colorLight.hex,
            backgroundImage: `url('${urlFor(project.image).url()}')`,
            backgroundSize: `${project.imageSize || 70}%`,
            backgroundPosition: `right ${project.imagePosition || 'center'}`,
            color: project.colorDark.hex,
          }}
        >
          <h2 className='font-extrabold text-4xl xl:text-[58px]'>
            {project.name}
          </h2>
          <div>
            <p className='font-extrabold text-2xl xl:text-4xl'>
              {project.company}
            </p>
            <div className='flex space-x-3 mt-1'>
              {project.categories.map((c) => (
                <div
                  style={{
                    backgroundColor: project.colorDark.hex,
                    color: project.colorLight.hex,
                  }}
                  key={c._id}
                  className='px-5 py-[2px] rounded-full'
                >
                  {c.title}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default ProjectCard;
