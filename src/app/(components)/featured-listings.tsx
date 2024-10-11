'use client'
// src/components/FeaturedListings.tsx
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

// Define the shape of a listing item
interface Listing {
  id: string;
  image: string;
  title: string;
  price: number;
  location: string;
}

const FeaturedListings = () => {
  // Initialize the state with an empty array of type Listing[]
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    // Fetch featured listings from your API
    axios
      .get<Listing[]>('/api/listings?featured=true')  // Specify the response type
      .then((response) => setListings(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded shadow">
              <Image
                src={listing.image}
                alt={listing.title}
                width={400}
                height={300}
                className="rounded-t"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{listing.title}</h3>
                <p className="text-gray-600">${listing.price.toLocaleString()}</p>
                <p className="text-gray-600">{listing.location}</p>
                <Button className="mt-4 w-full">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
