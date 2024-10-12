// src/schemas/testimonial.ts
import { z } from 'zod';

export const createTestimonialSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  avatar: z.string().url('Avatar must be a valid URL'),
  message: z.string().min(1, 'Message is required'),
  rating: z.number().int().min(1).max(5),
});