import App from '@/components/App';
import client from '@/lib/sanity.client';
import { groq } from 'next-sanity';

const query = groq`
  *[_type == 'project'] {
  ...,
  categories[]->,
  technologies[]->
} | order(createdAt desc)[0..2]
`;

const Home = async () => {
  const data = await client.fetch(query);

  return (
    <main>
      <App projects={data} />
    </main>
  );
};

export default Home;
