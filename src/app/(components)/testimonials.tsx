'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

// Define the structure of a testimonial
interface Testimonial {
  id: string;
  avatar: string;
  name: string;
  rating: number;
  message: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    axios
      .get<Testimonial[]>('/api/testimonials')
      .then((response) => setTestimonials(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="space-y-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 bg-gray-100 rounded shadow">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48} // Set width for the avatar
                  height={48} // Set height for the avatar
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
