import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const blogs = await prisma.blog.findMany({
          orderBy: {
            createdAt: 'desc',
          },
        });
        res.status(200).json(blogs);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch blogs.' });
      }
      break;

    case 'POST':
      try {
        const newBlog = await prisma.blog.create({
          data: req.body,
        });
        res.status(201).json(newBlog);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create blog.' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
