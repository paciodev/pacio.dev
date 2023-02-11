// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@/lib/sanity.client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) => {
  const query = groq`
  *[_type == 'project'] {
  ...,
  categories[]->,
  technologies[]->
} | order(createdAt desc)
`;

  if (req.method === 'GET') {
    const projects = await client.fetch(query);
    res.status(200).json(projects);
  }
}

export default handler
