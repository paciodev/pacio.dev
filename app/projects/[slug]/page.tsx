import Hero from '@/components/projects/Hero';
import Info from '@/components/projects/Info';
import client from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import '@/assets/css/glitch.css';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/projects/RichTextComponents';
import { notFound } from 'next/navigation';

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

const query = groq`
    *[_type=='project' && slug.current == $slug] [0]
    {
      ...,
      categories[]->,
      technologies[]->
    }
  `;

const ProjectPage = async ({ params: { slug } }: Props) => {
	const project: Project = await client.fetch(query, { slug });

	console.log(project.colorDark.hex);

	if (!project) {
		return notFound();
	}

	return (
		<>
			<Hero
				dark={project.colorDark}
				light={project.colorLight}
				image={project.image}
				project={project.name}
				company={project.company}
			/>
			<Info
				darkColor={project.colorDark}
				lightColor={project.colorLight}
				createdAt={project.createdAt}
				role={project.role}
				categories={project.categories}
				technologies={project.technologies}
				github={project.github}
				demo={project.live}
			/>
			<div className='max-w-4xl mx-auto px-5 sm:px-10 md:px-32 xl:px-0 my-32'>
				<PortableText value={project.body} components={RichTextComponents} />
			</div>
		</>
	);
};

export default ProjectPage;
