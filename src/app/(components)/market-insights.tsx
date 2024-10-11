'use client'
// src/components/MarketInsights.tsx
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Define the structure of a blog post
interface Blog {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  slug: string;
}

const MarketInsights = () => {
  // Initialize the state with an empty array of type Blog[]
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // Fetch blog posts from your API
    axios
      .get<Blog[]>('/api/blogs') // Ensure the response is typed as an array of Blog
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Market Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded shadow">
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-t w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="text-gray-600">{blog.excerpt}</p>
                <Link href={`/blog/${blog.slug}`}>
                  <a className="text-blue-500 mt-4 inline-block">Read More</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Include infographics or videos as needed */}
      </div>
    </section>
  );
};

export default MarketInsights;
