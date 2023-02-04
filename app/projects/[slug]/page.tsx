import NotBuilt from '@/components/NotBuilt';
import client from '@/lib/sanity.client';
import { groq } from 'next-sanity';

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
    <div className='mt-64 mb-32 lg:my-[30vh]'>
      <NotBuilt project={project} />
    </div>
  );
};

export default ProjectPage;
