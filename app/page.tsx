import client from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const query = groq`
  *[_type == 'project'] {
  ...,
  categories[]->,
  technologies[]->
} | order(createdAt desc)[0..2]
`;

export const revalidate = 60;

const Home = async () => {
  const data = await client.fetch(query);

  return (
    <main>
      <Hero />
      <About />
      <Projects projects={data} />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
