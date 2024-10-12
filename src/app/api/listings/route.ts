// src/pages/api/listings.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/prisma';
import { Listing, CreateListingInput } from '@/types';
import { ZodError } from 'zod';
import { createListingSchema } from '@/schemas/listing'; // If using Zod for validation

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query, body } = req;

  switch (method) {
    case 'GET':
      try {
        const { featured, latest } = query;
        const where: any = {};

        if (featured === 'true') where.featured = true;
        if (latest === 'true') where.latest = true;

        const listings: Listing[] = await prisma.listing.findMany({
          where,
          orderBy: {
            createdAt: 'desc',
          },
        });

        res.status(200).json(listings);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch listings.' });
      }
      break;

    case 'POST':
      try {
        // Validate request body using Zod (optional but recommended)
        const parsedData: CreateListingInput = createListingSchema.parse(body);

        const newListing: Listing = await prisma.listing.create({
          data: parsedData,
        });

        res.status(201).json(newListing);
      } catch (error) {
        if (error instanceof ZodError) {
          return res.status(400).json({
            error: 'Invalid request data',
            details: error.errors,
          });
        }
        console.error(error);
        res.status(500).json({ error: 'Failed to create listing.' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}