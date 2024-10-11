// src/components/CTASections.tsx
import { Button } from '@/components/ui/button';
import React from 'react';

const CTASections: React.FC = () => {
  return (
    <section className="py-16 bg-blue-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Listings</h2>
        <p className="mb-8">
          Subscribe to our newsletter to receive the latest property updates and market insights.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className="p-2 rounded text-black w-full md:w-auto"
          />
          <Button>Subscribe Now</Button>
        </div>
        {/* Additional CTAs like Free Consultation can be added similarly */}
      </div>
    </section>
  );
};

export default CTASections;
