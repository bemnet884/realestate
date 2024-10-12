// src/schemas/listing.ts
import { z } from 'zod';

export const createListingSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().positive('Price must be positive'),
  location: z.string().min(1, 'Location is required'),
  image: z.string().url('Image must be a valid URL'),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  featured: z.boolean().optional(),
  latest: z.boolean().optional(),
});