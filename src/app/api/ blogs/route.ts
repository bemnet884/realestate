// src/pages/api/blogs.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/prisma';
import { Blog, CreateBlogInput } from '@/types';
import { ZodError } from 'zod';
import { createBlogSchema } from '@/schemas/blog'; // If using Zod for validation

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const blogs: Blog[] = await prisma.blog.findMany({
          orderBy: {
            createdAt: 'desc',
          },
        });

        res.status(200).json(blogs);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch blogs.' });
      }
      break;

    case 'POST':
      try {
        // Validate request body using Zod (optional but recommended)
        const parsedData: CreateBlogInput = createBlogSchema.parse(body);

        const newBlog: Blog = await prisma.blog.create({
          data: parsedData,
        });

        res.status(201).json(newBlog);
      } catch (error) {
        if (error instanceof ZodError) {
          return res.status(400).json({
            error: 'Invalid request data',
            details: error.errors,
          });
        }
        console.error(error);
        res.status(500).json({ error: 'Failed to create blog.' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}