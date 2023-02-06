import Hero from '@/components/projects/Hero';
import Info from '@/components/projects/Info';
import client from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import '@/assets/css/glitch.css';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`
    *[_type=='project'] {
      slug
    }
  `;

  const slugs: {
    slug: Slug;
  }[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

const ProjectPage = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type=='project' && slug.current == $slug] [0]
    {
      ...,
      categories[]->,
      technologies[]->
    }
  `;

  const project: Project = await client.fetch(query, { slug });

  return (
    <div className=''>
      <Hero
        dark={project.colorDark}
        light={project.colorLight}
        image={project.image}
        project={project.name}
        company={project.company}
      />
      <Info
        darkColor={project.colorDark}
        createdAt={project.createdAt}
        role={project.role}
        categories={project.categories}
        technologies={project.technologies}
        github={project.github}
        demo={project.live}
      />

      <div className='grid place-content-center mb-16'>
        <h3
          className='glitch !text-black font-extrabold text-5xl'
          data-text='More later...'
        >
          More later...
        </h3>
      </div>
    </div>
  );
};

export default ProjectPage;
