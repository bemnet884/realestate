// src/types/index.ts

export interface Listing {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
  latest: boolean;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  createdAt: Date;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  message: string;
  rating: number;
  createdAt: Date;
}


// src/types/index.ts

export interface CreateListingInput {
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  latitude: number;
  longitude: number;
  featured?: boolean;
  latest?: boolean;
}

export interface CreateBlogInput {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
}

export interface CreateTestimonialInput {
  name: string;
  avatar: string;
  message: string;
  rating: number;
}