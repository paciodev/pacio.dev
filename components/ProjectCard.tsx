'use client';

import urlFor from '@/lib/urlFor';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
          className='mini:py-6 xl:py-12 mini:px-12 xl:px-20 flex flex-col mini:justify-between mini:h-[400px] xl:h-[600px] relative bg-no-repeat mini-bg-none'
          style={{
            backgroundColor: project.colorLight.hex,
            backgroundImage: `url('${urlFor(project.image).url()}')`,
            backgroundSize: `${project.imageSize || 70}%`,
            backgroundPosition: `right ${project.imagePosition || 'center'}`,
            color: project.colorDark.hex,
          }}
        >
          {project.imagePosition === 'top' && (
            <Image
              src={urlFor(project.image).url()}
              alt={`Image of ${project.name}`}
              className='mini:hidden ml-auto'
              width={300}
              height={200}
            />
          )}
          <h2 className='px-8 mini:px-0 font-extrabold text-4xl xl:text-[58px] pt-6 mini:pt-0'>
            {project.name}
          </h2>
          <div>
            <p className='px-8 mini:px-0 font-extrabold text-2xl xl:text-4xl'>
              {project.company}
            </p>
            <div className='mini:flex px-8 mini:px-0 mini:space-x-3 space-y-1 mini:space-y-0 mt-1 mb-3'>
              {project.categories.map((c) => (
                <div
                  style={{
                    backgroundColor: project.colorDark.hex,
                    color: project.colorLight.hex,
                  }}
                  key={c._id}
                  className='px-5 py-[2px] w-full mini:w-auto rounded-full mini:text-center overflow-hidden'
                >
                  {c.title}
                </div>
              ))}
            </div>
            {project.imagePosition !== 'top' && (
              <Image
                src={urlFor(project.image).url()}
                alt={`Image of ${project.name}`}
                className='mini:hidden float-right'
                width={300}
                height={200}
              />
            )}
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default ProjectCard;
