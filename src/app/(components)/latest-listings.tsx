'use client'
// src/components/LatestListings.tsx
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

// Define the structure of a listing
interface Listing {
  id: string;
  image: string;
  title: string;
  price: number;
  location: string;
}

const LatestListings = () => {
  // Initialize state with an empty array of type Listing[]
  const [latestListings, setLatestListings] = useState<Listing[]>([]);

  useEffect(() => {
    // Fetch latest listings from your API
    axios
      .get<Listing[]>('/api/listings?latest=true') // Ensure the response is typed as an array of Listing
      .then((response) => setLatestListings(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestListings.map((listing) => (
            <div key={listing.id} className="bg-gray-100 rounded shadow">
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

export default LatestListings;
