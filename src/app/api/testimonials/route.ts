import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const testimonials = await prisma.testimonial.findMany({
          orderBy: {
            createdAt: 'desc',
          },
        });
        res.status(200).json(testimonials);
      } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ error: 'Failed to fetch testimonials.' });
      }
      break;

    case 'POST':
      try {
        const newTestimonial = await prisma.testimonial.create({
          data: req.body,
        });
        res.status(201).json(newTestimonial);
      } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ error: 'Failed to create testimonial.' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
