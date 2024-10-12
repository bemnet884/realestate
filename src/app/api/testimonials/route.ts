// src/pages/api/testimonials.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/prisma';
import { Testimonial, CreateTestimonialInput } from '@/types';
import { ZodError } from 'zod';
import { createTestimonialSchema } from '@/schemas/testimonial'; // If using Zod for validation

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const testimonials: Testimonial[] = await prisma.testimonial.findMany({
          orderBy: {
            createdAt: 'desc',
          },
        });

        res.status(200).json(testimonials);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch testimonials.' });
      }
      break;

    case 'POST':
      try {
        // Validate request body using Zod (optional but recommended)
        const parsedData: CreateTestimonialInput = createTestimonialSchema.parse(body);

        const newTestimonial: Testimonial = await prisma.testimonial.create({
          data: parsedData,
        });

        res.status(201).json(newTestimonial);
      } catch (error) {
        if (error instanceof ZodError) {
          return res.status(400).json({
            error: 'Invalid request data',
            details: error.errors,
          });
        }
        console.error(error);
        res.status(500).json({ error: 'Failed to create testimonial.' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}