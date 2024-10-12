import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  switch (method) {
    case 'GET':
      try {
        const { featured, latest } = query as { featured?: string; latest?: string };
        const listings = await prisma.listing.findMany({
          where: {
            featured: featured === 'true' ? true : undefined,
            latest: latest === 'true' ? true : undefined,
          },
          orderBy: {
            createdAt: 'desc',
          },
        });
        res.status(200).json(listings);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch listings.' });
      }
      break;

    case 'POST':
      try {
        const newListing = await prisma.listing.create({
          data: req.body,
        });
        res.status(201).json(newListing);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create listing.' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
