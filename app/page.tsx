import About from '@/components/About';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export const revalidate = 60;

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      {/* @ts-expect-error Server Component */}
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
